'use client';

import type { User } from 'firebase/auth';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Mail,
  GraduationCap,
  Briefcase,
  Code,
  Pencil,
  FileUp,
  Loader2,
  Inbox,
  Camera,
  User as UserIcon,
  Calendar,
  TrendingUp,
  Phone,
  Trash2,
  ExternalLink,
  AlertTriangle,
  FileCheck2,
  Scaling,
  WifiOff,
  Lightbulb,
} from 'lucide-react';
import {
  EditStudentProfileDialog,
  type StudentProfileData,
} from './edit-student-profile-dialog';
import { PostedInternshipRequests } from './posted-internship-requests';
import { auth, db, storage } from '@/lib/firebase';
import { getInitials } from '@/lib/utils';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';
import { Skeleton } from '../ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { AppliedInternships } from './applied-internships';
import { updateProfile } from 'firebase/auth';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { formatDistanceToNow } from 'date-fns';
import { useRouter } from 'next/navigation';

const initialProfileData: StudentProfileData = {
  skills: [],
  experience: [],
  education: { degree: '', university: '', year: '' },
  resumeUrl: '',
  resumeFileName: '',
  dob: '',
  age: 0,
  gender: '',
  phoneNumber: '',
  department: '',
  yearOfStudy: '',
  studyingStatus: '',
  cgpa: 0,
};

const UPLOAD_TIMEOUT_MS = 60000; // 60 seconds

interface StudentProfileProps {
  user: User;
}

export default function StudentProfile({
  user: initialUser,
}: StudentProfileProps) {
  const [user, setUser] = useState<User>(initialUser);
  const router = useRouter();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState<StudentProfileData | null>(
    null,
  );
  const [uploading, setUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isOnline, setIsOnline] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const resumeUploadRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const userId = user.uid;
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    if (profileData) {
      const checkProfileCompleteness = () => {
        const {
          skills,
          experience,
          education,
          resumeUrl,
          dob,
          age,
          gender,
          phoneNumber,
          department,
          yearOfStudy,
          studyingStatus,
          cgpa,
        } = profileData;

        const isComplete =
          skills.length > 0 &&
          experience.length > 0 &&
          experience.some((e) => e.title) &&
          !!education.degree &&
          !!education.university &&
          !!education.year &&
          !!resumeUrl &&
          !!dob &&
          age > 0 &&
          !!gender &&
          !!phoneNumber &&
          !!department &&
          !!yearOfStudy &&
          !!studyingStatus &&
          cgpa > 0;

        setIsProfileComplete(isComplete);
      };
      checkProfileCompleteness();
    }
  }, [profileData]);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: 'Internet Restored',
        description: 'You are back online.',
      });
    };
    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: 'No Internet Connection',
        description: 'You appear to be offline. Please check your network.',
        variant: 'destructive',
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [toast]);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser]);

  const fetchProfileData = useCallback(async () => {
    if (userId && db) {
      const profileDocRef = doc(db, 'studentProfiles', userId);
      try {
        const docSnap = await getDoc(profileDocRef);
        if (docSnap.exists()) {
          setProfileData(docSnap.data() as StudentProfileData);
        } else {
          await setDoc(profileDocRef, initialProfileData);
          setProfileData(initialProfileData);
        }
      } catch (error) {
        console.error('Error fetching student profile:', error);
        setProfileData(initialProfileData);
      }
    }
  }, [userId]);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  // FIX: Changed type to Partial<StudentProfileData> to allow for partial updates
  const handleSaveProfile = async (newData: Partial<StudentProfileData>) => {
    if (!userId || !db) return;
    const profileDocRef = doc(db, 'studentProfiles', userId);
    try {
      await setDoc(profileDocRef, newData, { merge: true });
      // FIX: Ensure state update is safe by merging old and new data
      setProfileData(
        (prevData) => ({ ...prevData, ...newData }) as StudentProfileData,
      );
      toast({
        title: 'Profile Saved',
        description: 'Your profile has been updated successfully.',
      });
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: 'Save Failed',
        description: 'Could not save your profile.',
        variant: 'destructive',
      });
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (fileInputRef.current) fileInputRef.current.value = '';

    if (!file) return;

    if (!isOnline) {
      toast({
        title: 'Upload Failed: Offline',
        description:
          'Cannot upload while offline. Please check your connection.',
        variant: 'destructive',
      });
      return;
    }

    const MAX_FILE_SIZE_MB = 2;
    if (!file.type.startsWith('image/')) {
      // FIX: Toast title from JSX element to string, JSX moved to description
      toast({
        title: 'Upload Failed: Invalid File Type',
        description: <b>Please select a valid image file (e.g., PNG, JPG).</b>,
        variant: 'destructive',
      });
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      // FIX: Toast title from JSX element to string, JSX moved to description
      toast({
        title: 'Upload Failed: File Too Large',
        description: (
          <b>Your profile picture must be smaller than {MAX_FILE_SIZE_MB}MB.</b>
        ),
        variant: 'destructive',
      });
      return;
    }

    if (!auth.currentUser) {
      toast({
        title: 'Not Authenticated',
        description: 'Please log in again to upload a profile picture.',
        variant: 'destructive',
      });
      return;
    }

    setUploading(true);
    const storageRef = ref(storage, `profile-pictures/${userId}/${file.name}`);

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error('Upload timed out.')),
          UPLOAD_TIMEOUT_MS,
        ),
      );

      const uploadPromise = uploadBytes(storageRef, file).then((snapshot) =>
        getDownloadURL(snapshot.ref),
      );

      const downloadURL = (await Promise.race([
        uploadPromise,
        timeoutPromise,
      ])) as string;

      await updateProfile(auth.currentUser, { photoURL: downloadURL });
      await updateDoc(doc(db, 'users', userId), { photoURL: downloadURL });

      setUser((prevUser) => ({ ...prevUser, photoURL: downloadURL }) as User);
      toast({ title: 'Success!', description: 'Profile picture updated.' });
    } catch (error: any) {
      console.error('[Image Upload Error] Details:', error);
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (error.code) {
        // Check for Firebase Storage specific error codes
        switch (error.code) {
          case 'storage/unauthorized':
            errorMessage = 'Permission Denied. Check Firebase Storage rules.';
            break;
          case 'storage/canceled':
            errorMessage = 'Upload cancelled.';
            break;
          case 'storage/object-not-found':
            errorMessage = 'File not found on storage. Please re-upload.';
            break;
          case 'storage/unauthenticated':
            errorMessage = 'Authentication failed. Please log in again.';
            break;
          case 'storage/retry-limit-exceeded':
            errorMessage =
              'Network issue or too many retries. Please try again.';
            break;
          case 'storage/quota-exceeded':
            errorMessage = 'Storage quota exceeded. Please contact support.';
            break;
          default:
            errorMessage = `Firebase Storage Error: ${error.code}. Please try again.`;
        }
      } else if (error.message === 'Upload timed out.') {
        errorMessage = 'Upload took too long. Check your internet connection.';
      }
      toast({
        title: 'Upload Failed',
        description: <b>{errorMessage}</b>,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  const handleResumeUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Resume upload event triggered.');
    const file = e.target.files?.[0];
    setUploadError(null);
    if (resumeUploadRef.current) resumeUploadRef.current.value = '';

    if (!file) {
      console.log('No file selected, returning.');
      return;
    }

    if (!isOnline) {
      console.log('Offline, showing error message.');
      setUploadError(
        'No internet connection. Please check your network and try again.',
      );
      return;
    }

    console.log(
      `File selected: ${file.name}, size: ${file.size}, type: ${file.type}`,
    );

    const MAX_FILE_SIZE_MB = 5;
    if (file.type !== 'application/pdf') {
      console.error('Invalid file type. File is not a PDF.');
      setUploadError('Invalid file type. Please upload a PDF.');
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      console.error('File size exceeds limit.');
      setUploadError(
        `File is too large. The maximum size is ${MAX_FILE_SIZE_MB}MB.`,
      );
      return;
    }

    if (!userId || !storage || !db || !auth.currentUser) {
      console.error('Firebase services or user ID are not available.');
      setUploadError('Could not upload. Please try logging in again.');
      return;
    }

    setUploading(true);
    console.log('Uploading state set to true.');
    const storageRef = ref(storage, `resumes/${userId}/${file.name}`);
    console.log(
      `Firebase Storage reference created at: resumes/${userId}/${file.name}`,
    );

    try {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () =>
            reject(
              new Error(
                'Resume upload took too long. Check your internet connection.',
              ),
            ),
          UPLOAD_TIMEOUT_MS,
        ),
      );

      console.log('Initiating upload to Firebase Storage...');
      const uploadPromise = uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Upload successful. Getting download URL...');
        return getDownloadURL(snapshot.ref);
      });

      const downloadURL = (await Promise.race([
        uploadPromise,
        timeoutPromise,
      ])) as string;
      console.log(`Download URL received: ${downloadURL}`);

      const updatedProfileData = {
        resumeUrl: downloadURL,
        resumeFileName: file.name,
      };
      console.log('Attempting to save profile with new resume data...');
      // FIX: This call is now correctly typed thanks to the handleSaveProfile function change
      await handleSaveProfile(updatedProfileData);
      console.log('Profile successfully saved.');

      toast({
        title: 'Success!',
        description: 'Your resume has been uploaded.',
      });
      setIsResumeDialogOpen(false);
      console.log('Resume upload process completed successfully.');
    } catch (error: any) {
      console.error('[Resume Upload Error] Details:', error);
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (error.code) {
        console.log(`Firebase error code detected: ${error.code}`);
        switch (error.code) {
          case 'storage/unauthorized':
            errorMessage = 'Permission Denied. Check Firebase Storage rules.';
            break;
          case 'storage/canceled':
            errorMessage = 'Upload cancelled.';
            break;
          case 'storage/object-not-found':
            errorMessage = 'File not found on storage. Please re-upload.';
            break;
          case 'storage/unauthenticated':
            errorMessage = 'Authentication failed. Please log in again.';
            break;
          case 'storage/retry-limit-exceeded':
            errorMessage =
              'Network issue or too many retries. Please try again.';
            break;
          case 'storage/quota-exceeded':
            errorMessage = 'Storage quota exceeded. Please contact support.';
            break;
          default:
            errorMessage = `Firebase Storage Error: ${error.code}. Please try again.`;
        }
      } else if (error.message.includes('Resume upload took too long')) {
        console.log('Upload timed out error detected.');
        errorMessage =
          'Resume upload took too long. Please check your internet connection and try again.';
      }
      console.error(`Final error message to be displayed: ${errorMessage}`);
      setUploadError(errorMessage);
    } finally {
      setUploading(false);
      console.log('Uploading state set to false.');
    }
  };

  const handleDeleteResume = async () => {
    if (!profileData?.resumeFileName || !userId || !storage || !db) {
      toast({
        title: 'Error',
        description:
          'Cannot delete resume. Required information or services are missing.',
        variant: 'destructive',
      });
      return;
    }

    if (!isOnline) {
      toast({
        title: 'Action Failed: Offline',
        description: 'Cannot delete while offline.',
        variant: 'destructive',
      });
      return;
    }

    setIsDeleting(true);

    const resumeRef = ref(
      storage,
      `resumes/${userId}/${profileData.resumeFileName}`,
    );
    const profileDocRef = doc(db, 'studentProfiles', userId);

    try {
      // Try to delete from storage first
      try {
        await deleteObject(resumeRef);
      } catch (storageError: any) {
        // If file doesn't exist in storage, we can continue to update Firestore
        if (storageError.code !== 'storage/object-not-found') {
          throw storageError; // Re-throw if it's a different error
        }
      }

      // Update Firestore regardless of storage delete result
      await updateDoc(profileDocRef, {
        resumeUrl: '',
        resumeFileName: '',
      });

      toast({ title: 'Success', description: 'Resume deleted successfully.' });
      await fetchProfileData(); // Refetch profile data
    } catch (error: any) {
      console.error('Error deleting resume:', error);
      let errorMessage = 'Failed to delete resume.';

      if (error.code) {
        switch (error.code) {
          case 'storage/unauthorized':
            errorMessage = 'Permission denied. Please try logging in again.';
            break;
          case 'storage/cancelled':
            errorMessage = 'Operation was cancelled.';
            break;
          case 'storage/unknown':
            errorMessage = 'An unknown error occurred. Please try again.';
            break;
          default:
            errorMessage = `Error: ${error.code}`;
        }
      }

      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  const onResumeDialogChange = (isOpen: boolean) => {
    setIsResumeDialogOpen(isOpen);
    if (!isOpen) {
      setUploadError(null);
    }
  };

  if (!profileData) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-48 w-full" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32 w-full lg:col-span-3" />
          <Skeleton className="h-48 w-full lg:col-span-2" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }

  return (
    <>
      <EditStudentProfileDialog
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
        profileData={profileData}
        onSave={
          handleSaveProfile as (data: StudentProfileData) => Promise<void>
        }
      />
      <div className="space-y-8">
        {/* {!isProfileComplete && (
          <Alert variant="destructive" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Incomplete Profile</AlertTitle>
            <AlertDescription>
              Your profile is incomplete. Please fill out all fields to apply for internships or post internship requests.
            </AlertDescription>
          </Alert>
        )} */}
        {/* Profile Card */}
        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-6 sm:flex-row">
            <div className="relative flex-shrink-0">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user.photoURL || `https://placehold.co/100x100.png`}
                  data-ai-hint="person portrait"
                  alt={user.displayName || 'User'}
                />
                <AvatarFallback>{getInitials(user.displayName)}</AvatarFallback>
              </Avatar>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading || !isOnline}
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full border-2 bg-background hover:bg-secondary"
                aria-label="Upload profile picture"
              >
                {uploading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Camera className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="flex-grow text-center sm:text-left">
              <h1 className="text-3xl font-bold">
                {user.displayName || 'Aspiring Intern'}
              </h1>
              <p className="mt-1 flex items-center justify-center gap-2 text-muted-foreground sm:justify-start">
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
              {profileData.phoneNumber && (
                <p className="mt-1 flex items-center justify-center gap-2 text-muted-foreground sm:justify-start">
                  <Phone className="h-4 w-4" />
                  {profileData.phoneNumber}
                </p>
              )}
            </div>
            <div className="flex w-full flex-shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
              <Button onClick={() => setIsEditDialogOpen(true)}>
                <Pencil className="mr-2 h-4 w-4" /> Edit Profile
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link href={`/public-profile/${userId}`}>
                  View Public Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserIcon className="text-primary" /> Personal Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <strong>Age:</strong>{' '}
                {profileData.age > 0 ? profileData.age : 'N/A'}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <UserIcon className="h-5 w-5 text-muted-foreground" />
              <div>
                <strong>Gender:</strong> {profileData.gender || 'N/A'}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
              <div>
                <strong>CGPA:</strong>{' '}
                {profileData.cgpa > 0 ? profileData.cgpa : 'N/A'}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Inbox className="text-primary" /> My Applications
              </CardTitle>
              <CardDescription>
                Track the internships you've applied for.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppliedInternships user={user} />
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-primary" /> My Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {profileData.skills.length > 0 ? (
                profileData.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="default"
                  >
                    {skill}
                  </Badge>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No skills have been added yet. Click 'Edit Profile' to add
                  them.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="text-primary" /> Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profileData.experience.length > 0 &&
              profileData.experience.some((e) => e.title) ? (
                profileData.experience.map((exp, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                    <p className="mt-1 text-sm">{exp.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No work experience has been added yet. Click 'Edit Profile' to
                  add it.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="text-primary" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              {profileData.education.degree ? (
                <>
                  <h3 className="font-semibold">
                    {profileData.education.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profileData.education.university}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Year: {profileData.education.year}
                  </p>
                  {profileData.department && (
                    <p className="text-sm text-muted-foreground">
                      Dept: {profileData.department}
                    </p>
                  )}
                  {profileData.yearOfStudy && (
                    <p className="text-sm text-muted-foreground">
                      Current Year: {profileData.yearOfStudy}
                    </p>
                  )}
                  {profileData.studyingStatus && (
                    <p className="text-sm text-muted-foreground">
                      Status: {profileData.studyingStatus}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-muted-foreground">
                  No education details have been added yet. Click 'Edit Profile'
                  to add them.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                My Resume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Dialog
                open={isResumeDialogOpen}
                onOpenChange={onResumeDialogChange}
              >
                {!profileData.resumeUrl ? (
                  <DialogTrigger asChild>
                    <Button
                      variant="secondary"
                      className="w-full"
                      disabled={!isOnline}
                    >
                      <FileUp className="mr-2" /> Upload Resume
                    </Button>
                  </DialogTrigger>
                ) : (
                  <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
                    <p className="truncate text-sm text-muted-foreground">
                      On file: {profileData.resumeFileName || 'resume.pdf'}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                      >
                        <Link
                          href={profileData.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" /> View
                        </Link>
                      </Button>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={!isOnline}
                        >
                          Replace
                        </Button>
                      </DialogTrigger>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            disabled={!isOnline || isDeleting}
                          >
                            {isDeleting ? (
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="mr-2 h-4 w-4" />
                            )}
                            {isDeleting ? 'Deleting...' : 'Delete'}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This will permanently delete your resume. This
                              action cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleDeleteResume}
                              disabled={isDeleting}
                            >
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                )}
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload Your Resume</DialogTitle>
                    <DialogDescription>
                      Your old resume will be replaced. Please adhere to the
                      following conditions.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-3 rounded-lg border bg-secondary/50 p-4">
                      <h4 className="text-sm font-semibold">
                        Upload Requirements
                      </h4>
                      <div className="flex items-start gap-3 text-sm">
                        <FileCheck2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>The file must be in **PDF** format.</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Scaling className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>The file size must not exceed **5MB**.</span>
                      </div>
                    </div>

                    {uploadError && (
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4" />
                        <AlertTitle>Upload Failed</AlertTitle>
                        <AlertDescription>
                          <b>{uploadError}</b>
                        </AlertDescription>
                      </Alert>
                    )}
                    <Input
                      id="resume-upload-dialog"
                      type="file"
                      onChange={handleResumeUpload}
                      className="hidden"
                      ref={resumeUploadRef}
                      accept="application/pdf"
                      disabled={uploading || !isOnline}
                    />
                    <label
                      htmlFor="resume-upload-dialog"
                      className="w-full cursor-pointer"
                    >
                      <Button
                        asChild
                        className="pointer-events-none w-full"
                        disabled={uploading || !isOnline}
                      >
                        <span>
                          {uploading ? (
                            <Loader2 className="mr-2 animate-spin" />
                          ) : (
                            <FileUp className="mr-2" />
                          )}
                          {uploading ? 'Uploading...' : 'Choose a File'}
                        </span>
                      </Button>
                    </label>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        {/* Posted Internship Requests Section */}
        <div className="space-y-4">
          <PostedInternshipRequests
            userId={userId}
            isProfileComplete={isProfileComplete}
          />
        </div>
      </div>
    </>
  );
}
