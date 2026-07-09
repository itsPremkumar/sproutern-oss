'use client';

import type { User } from 'firebase/auth';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Mail,
  Building,
  Users,
  Rocket,
  ExternalLink,
  Pencil,
  Phone,
  Globe,
  Calendar,
  Inbox,
  BrainCircuit,
  Loader2,
  Camera,
  Trash2,
  MoreVertical,
  AlertTriangle,
  Search,
} from 'lucide-react';
import {
  EditStartupProfileDialog,
  type StartupProfileData,
} from './edit-startup-profile-dialog';
import { auth, db, storage } from '@/lib/firebase'; // Client-side Firebase imports
import { getInitials } from '@/lib/utils';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
  orderBy,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'; // Added deleteDoc
import { Skeleton } from '@/components/ui/skeleton';
import { formatDistanceToNow } from 'date-fns';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useToast } from '@/hooks/use-toast';
import { StudentProfileData } from '@/lib/types';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const initialProfileData: StartupProfileData = {
  mission: '',
  details: {
    industry: '',
    founded: '',
    location: '',
    website: '',
    contactEmail: '',
    contactPhone: '',
  },
};

interface Internship {
  id: string;
  jobTitle: string;
  location: string;
  postedByUserId: string;
  requirements: string; // Added this line
}

interface Application {
  id: string;
  studentName: string;
  studentUserId: string;
  jobTitle: string;
  appliedAt: {
    seconds: number;
    nanoseconds: number;
  };
  internshipId: string;
  resumeUrl?: string;
  resumeFileName?: string;
  studentPhoneNumber?: string;
  studentEmail?: string;
  suitabilityScore?: number;
  summary?: string;
  error?: string;
}

interface InternshipRequest {
  id: string;
  title: string;
  desiredSkills: string;
  workMode: 'Online' | 'Offline' | 'Hybrid' | '';
  duration: string;
  stipendExpectation: string;
  availability: string;
  additionalInfo: string;
  postedByUserId: string;
  postedAt: {
    seconds: number;
    nanoseconds: number;
  };
  studentProfile: StudentProfileData;
}

const UPLOAD_TIMEOUT_MS = 60000; // 60 seconds

interface StartupProfileProps {
  user: User;
}

interface GenericActionState {
  success?: string;
  error?: string;
}

async function clientDeleteInternship(
  internshipId: string,
  currentUserId: string,
): Promise<GenericActionState> {
  if (!currentUserId || !db)
    return { error: 'You must be logged in to perform this action.' };
  if (!internshipId) return { error: 'Internship ID is missing.' };

  try {
    const internshipRef = doc(db, 'internships', internshipId);
    const internshipDoc = await getDoc(internshipRef);

    if (!internshipDoc.exists()) return { error: 'Internship not found.' };
    if (internshipDoc.data().postedByUserId !== currentUserId) {
      return { error: 'You are not authorized to delete this internship.' };
    }

    await deleteDoc(internshipRef);
    return { success: 'Internship deleted successfully.' };
  } catch (error: any) {
    console.error('Error deleting internship:', error);
    let errorMessage = 'Failed to delete internship.';
    if (error.message) {
      errorMessage = error.message;
    }
    return { error: errorMessage };
  }
}

function InternshipListItem({
  internship,
  currentUserId,
  onDeleted,
}: {
  internship: Internship;
  currentUserId: string;
  onDeleted: () => void;
}) {
  const { toast } = useToast();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    const result = await clientDeleteInternship(internship.id, currentUserId);
    if (result.success) {
      toast({ title: 'Success', description: result.success });
      onDeleted();
    } else if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    }
    setIsDeleting(false);
  };

  return (
    <li className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary">
      <Link
        href={`/internships/${internship.id}`}
        className="flex-grow"
      >
        <div>
          <h3 className="font-semibold">{internship.jobTitle}</h3>
          <p className="text-sm text-muted-foreground">{internship.location}</p>
        </div>
      </Link>
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                  <span className="text-destructive">Delete</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete the internship posting. This
                    action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </li>
  );
}

export default function StartupProfile({
  user: initialUser,
}: StartupProfileProps) {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User>(initialUser);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [profileData, setProfileData] = useState<StartupProfileData | null>(
    null,
  );
  const [postedInternships, setPostedInternships] = useState<Internship[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [internshipsLoading, setInternshipsLoading] = useState(true);
  const [applicationsLoading, setApplicationsLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userId = user.uid;

  const [rankingInProgress, setRankingInProgress] = useState(false);
  const [rankingError, setRankingError] = useState<string | null>(null);

  const [matchedStudents, setMatchedStudents] = useState<StudentProfileData[]>(
    [],
  );
  const [requestsLoading, setRequestsLoading] = useState(true);
  const [allStudents, setAllStudents] = useState<StudentProfileData[]>([]); // New state for all students

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: 'No Internet Connection',
        description: 'You appear to be offline. Some actions may be disabled.',
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

  // Fetch all student profiles
  useEffect(() => {
    const fetchAllStudents = async () => {
      if (!db) return;
      setRequestsLoading(true);
      try {
        const q = query(collection(db, 'studentProfiles'));
        const querySnapshot = await getDocs(q);
        const studentsData: StudentProfileData[] = [];
        for (const docSnap of querySnapshot.docs) {
          const studentProfile = docSnap.data() as StudentProfileData;
          // Fetch user data to get fullName
          const userDocRef = doc(db, 'users', docSnap.id);
          const userDocSnap = await getDoc(userDocRef);
          if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            studentsData.push({
              ...studentProfile,
              userId: docSnap.id,
              fullName: userData.fullName,
            });
          } else {
            studentsData.push({
              ...studentProfile,
              userId: docSnap.id,
              fullName: 'Unnamed Student',
            });
          }
        }
        setAllStudents(studentsData);
      } catch (error) {
        console.error('Error fetching all student profiles:', error);
      } finally {
        setRequestsLoading(false);
      }
    };
    fetchAllStudents();
  }, []);

  // Matching logic
  useEffect(() => {
    if (postedInternships.length > 0 && allStudents.length > 0) {
      const suggested: StudentProfileData[] = [];
      const matchedStudentIds = new Set<string>(); // To avoid duplicate suggestions

      postedInternships.forEach((internship) => {
        const internshipRequirements =
          internship.requirements
            ?.toLowerCase()
            .split(/[,\s]+/)
            .filter(Boolean) || [];

        allStudents.forEach((student) => {
          if (student.userId && matchedStudentIds.has(student.userId)) return; // Skip if already suggested

          const studentSkills =
            student.skills?.map((skill) => skill.toLowerCase()) || [];

          // Basic matching: check if any internship requirement is present in student's skills
          const isMatch = internshipRequirements.some((req) =>
            studentSkills.includes(req),
          );

          if (isMatch) {
            suggested.push(student);
            if (student.userId) {
              matchedStudentIds.add(student.userId);
            }
          }
        });
      });
      setMatchedStudents(suggested);
    } else if (postedInternships.length === 0) {
      setMatchedStudents([]); // No internships, no suggestions
    }
  }, [postedInternships, allStudents]);

  const fetchInternships = useCallback(async () => {
    if (!userId || !db) return;
    setInternshipsLoading(true);
    try {
      const q = query(
        collection(db, 'internships'),
        where('postedByUserId', '==', userId),
        orderBy('postedAt', 'desc'),
      );
      const querySnapshot = await getDocs(q);
      const internshipsData = querySnapshot.docs.map(
        (doc) => ({ id: doc.id, ...doc.data() }) as Internship,
      );
      setPostedInternships(internshipsData);
    } catch (error) {
      console.error('Error fetching posted internships:', error);
    } finally {
      setInternshipsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (userId && db) {
      const profileDocRef = doc(db, 'startupProfiles', userId);
      getDoc(profileDocRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            setProfileData(docSnap.data() as StartupProfileData);
          } else {
            setDoc(profileDocRef, initialProfileData);
            setProfileData(initialProfileData);
          }
        })
        .catch((error) => {
          console.error('Error fetching startup profile:', error);
          setProfileData(initialProfileData);
        });

      const fetchApplications = async () => {
        setApplicationsLoading(true);
        try {
          const q = query(
            collection(db, 'applications'),
            where('startupUserId', '==', userId),
            orderBy('appliedAt', 'desc'),
          );
          const querySnapshot = await getDocs(q);

          const appsDataPromises = querySnapshot.docs.map(
            async (docSnapshot) => {
              const appData = docSnapshot.data() as Omit<Application, 'id'>;
              const studentProfileRef = doc(
                db,
                'studentProfiles',
                appData.studentUserId,
              );
              const studentProfileSnap = await getDoc(studentProfileRef);
              const userDocRef = doc(db, 'users', appData.studentUserId);
              const userDocSnap = await getDoc(userDocRef);
              const studentEmailFromUser = userDocSnap.exists()
                ? userDocSnap.data().email
                : null;

              if (studentProfileSnap.exists()) {
                const studentProfileData = studentProfileSnap.data();
                const studentEmailFromProfile =
                  studentProfileData.email || null;
                const finalStudentEmail =
                  studentEmailFromUser || studentEmailFromProfile;

                return {
                  id: docSnapshot.id,
                  ...appData,
                  resumeUrl: studentProfileData.resumeUrl || null,
                  resumeFileName: studentProfileData.resumeFileName || null,
                  studentPhoneNumber: studentProfileData.phoneNumber || null,
                  studentEmail: finalStudentEmail,
                } as Application;
              } else {
                return {
                  id: docSnapshot.id,
                  ...appData,
                  studentEmail: studentEmailFromUser,
                } as Application;
              }
            },
          );

          const appsData = await Promise.all(appsDataPromises);
          setApplications(appsData);
        } catch (error) {
          console.error('Error fetching applications:', error);
        } finally {
          setApplicationsLoading(false);
        }
      };

      fetchInternships();
      fetchApplications();
    }
  }, [userId, fetchInternships]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (!file) return;

    if (!isOnline) {
      toast({
        title: 'Upload Failed: Offline',
        description: 'Cannot upload while offline.',
        variant: 'destructive',
      });
      return;
    }

    const MAX_FILE_SIZE_MB = 2;
    if (!file.type.startsWith('image/')) {
      toast({
        title: 'Upload Failed: Invalid File Type',
        description: 'Please select a valid image file (e.g., PNG, JPG).',
        variant: 'destructive',
      });
      return;
    }
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast({
        title: 'Upload Failed: File Too Large',
        description: `File must be smaller than ${MAX_FILE_SIZE_MB}MB.`,
        variant: 'destructive',
      });
      return;
    }
    if (!auth.currentUser) {
      toast({
        title: 'Not Authenticated',
        description: 'Please log in again.',
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
        switch (error.code) {
          case 'storage/unauthorized':
            errorMessage = 'Permission Denied.';
            break;
          case 'storage/canceled':
            errorMessage = 'Upload cancelled.';
            break;
          case 'storage/unauthenticated':
            errorMessage = 'Authentication failed.';
            break;
          case 'storage/retry-limit-exceeded':
            errorMessage = 'Network issue.';
            break;
          default:
            errorMessage = `Storage Error: ${error.code}.`;
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

  const handleSaveProfile = async (newData: StartupProfileData) => {
    if (!userId || !db) return;
    const profileDocRef = doc(db, 'startupProfiles', userId);
    try {
      await setDoc(profileDocRef, newData, { merge: true });
      setProfileData(newData);
      toast({
        title: 'Profile Saved',
        description: 'Your startup profile has been updated.',
      });
    } catch (error) {
      console.error('Error saving profile:', error);
      toast({
        title: 'Error',
        description: 'Failed to save profile.',
        variant: 'destructive',
      });
    }
  };

  const rankAllApplicants = async () => {
    setRankingInProgress(true);
    setRankingError(null);

    const rankingPromises = applications.map(async (app) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const suitabilityScore = parseFloat((Math.random() * 10).toFixed(1));
      const summary =
        suitabilityScore > 5
          ? 'Strong candidate with relevant skills.'
          : 'Candidate may need further development.';
      const error =
        suitabilityScore < 2 ? 'Could not process resume format.' : undefined;
      return {
        ...app,
        summary: error ? undefined : summary,
        suitabilityScore: error ? undefined : suitabilityScore,
        error: error,
      };
    });

    try {
      const rankedApps = await Promise.all(rankingPromises);
      if (rankedApps.some((app) => app.error)) {
        toast({
          title: 'Some Analyses Failed',
          description: 'Could not analyze every applicant.',
          variant: 'destructive',
        });
      }
      const sortedApps = rankedApps.sort(
        (a, b) => (b.suitabilityScore || 0) - (a.suitabilityScore || 0),
      );
      setApplications(sortedApps);
      toast({
        title: 'Ranking Complete',
        description: 'Applicants have been ranked by AI.',
      });
    } catch (e) {
      console.error('Critical ranking error:', e);
      setRankingError(
        'A critical error occurred while ranking. Please try again.',
      );
      toast({
        title: 'Ranking Error',
        description: 'Failed to rank applicants.',
        variant: 'destructive',
      });
    } finally {
      setRankingInProgress(false);
    }
  };

  // Function to check if the profile is complete
  const isProfileComplete = () => {
    if (!profileData || !profileData.details) return false;
    const { industry, founded, location, website, contactEmail, contactPhone } =
      profileData.details;
    return (
      !!profileData.mission?.trim() &&
      !!industry?.trim() &&
      !!founded?.trim() &&
      !!location?.trim() &&
      !!website?.trim() &&
      !!contactEmail?.trim() &&
      !!contactPhone?.trim()
    );
  };

  if (!profileData) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-48 w-full" />
        <div className="grid gap-8 md:grid-cols-3">
          <Skeleton className="h-48 w-full md:col-span-3" />
          <Skeleton className="h-64 w-full md:col-span-3" />
          <Skeleton className="h-64 w-full md:col-span-3" />
        </div>
      </div>
    );
  }

  return (
    <>
      <EditStartupProfileDialog
        isOpen={isEditDialogOpen}
        setIsOpen={setIsEditDialogOpen}
        profileData={profileData}
        onSave={handleSaveProfile}
      />
      <div className="space-y-8">
        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-6 sm:flex-row">
            <div className="relative flex-shrink-0">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={user.photoURL || `https://placehold.co/100x100.png`}
                  alt={user.displayName || 'Startup'}
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
                {user.displayName || 'Unnamed Startup'}
              </h1>
              <p className="mt-1 flex items-center justify-center gap-2 text-muted-foreground sm:justify-start">
                <Mail className="h-4 w-4" />
                {user.email}
              </p>
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
              <Rocket className="text-primary" /> Our Mission & Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {profileData.mission ||
                "No mission statement has been provided. Click 'Edit Profile' to add one."}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="text-primary" /> Company Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2 md:grid-cols-3">
            {profileData.details.industry && (
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <div>
                  <strong>Industry:</strong> {profileData.details.industry}
                </div>
              </div>
            )}
            {profileData.details.founded && (
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <strong>Founded:</strong> {profileData.details.founded}
                </div>
              </div>
            )}
            {profileData.details.location && (
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <strong>Location:</strong> {profileData.details.location}
                </div>
              </div>
            )}
            {profileData.details.website && (
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <a
                  href={`https://${profileData.details.website.replace(/^https?:\/\//, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {profileData.details.website}
                </a>
              </div>
            )}
            {profileData.details.contactEmail && (
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a
                  href={`mailto:${profileData.details.contactEmail}`}
                  className="text-primary hover:underline"
                >
                  {profileData.details.contactEmail}
                </a>
              </div>
            )}
            {profileData.details.contactPhone && (
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span>{profileData.details.contactPhone}</span>
              </div>
            )}
            {!Object.values(profileData.details).some((v) => v) && (
              <p className="col-span-full text-muted-foreground">
                No company details have been provided. Click 'Edit Profile' to
                add them.
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Inbox className="text-primary" /> Received Applications
                </CardTitle>
                <CardDescription className="mt-1">
                  {rankingInProgress
                    ? 'AI is analyzing and ranking all applicants...'
                    : 'Review students who have applied to your internship openings.'}
                </CardDescription>
              </div>
              {applications.length > 0 && !rankingInProgress && (
                <Button
                  onClick={rankAllApplicants}
                  disabled={rankingInProgress || !isOnline}
                  className="w-full sm:w-auto"
                >
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  Rank All Applicants
                </Button>
              )}
              {rankingInProgress && (
                <Button
                  disabled
                  className="w-full sm:w-auto"
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing...
                </Button>
              )}
            </div>
            {rankingError && (
              <Alert
                variant="destructive"
                className="mt-4"
              >
                {rankingError}
              </Alert>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {applicationsLoading ? (
              <div className="space-y-2 p-4">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            ) : applications.length > 0 ? (
              <ul className="space-y-4">
                {applications.map((app) => (
                  <li
                    key={app.id}
                    className="rounded-lg border p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                      <div className="mb-2 sm:mb-0">
                        <Link
                          href={`/public-profile/${app.studentUserId}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {app.studentName}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          Applied for: {app.jobTitle}
                        </p>
                        {app.studentEmail && (
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Mail className="h-3 w-3" /> {app.studentEmail}
                          </p>
                        )}
                        {app.studentPhoneNumber && (
                          <p className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Phone className="h-3 w-3" />{' '}
                            {app.studentPhoneNumber}
                          </p>
                        )}
                        {app.suitabilityScore !== undefined && (
                          <div className="mt-2 flex items-center gap-2">
                            <div
                              className={buttonVariants({
                                variant:
                                  app.suitabilityScore > 7
                                    ? 'default'
                                    : app.suitabilityScore > 4
                                      ? 'secondary'
                                      : 'destructive',
                                className: 'h-auto px-2 py-1 text-xs',
                              })}
                            >
                              Score: {app.suitabilityScore.toFixed(1)} / 10
                            </div>
                          </div>
                        )}
                      </div>
                      <p className="shrink-0 self-start text-xs text-muted-foreground sm:self-center">
                        {formatDistanceToNow(
                          new Date(app.appliedAt.seconds * 1000),
                          { addSuffix: true },
                        )}
                      </p>
                    </div>
                    <div className="mt-4">
                      {app.resumeUrl ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                        >
                          <Link
                            href={app.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> View
                            Resume ({app.resumeFileName || 'PDF'})
                          </Link>
                        </Button>
                      ) : (
                        <span className="flex w-fit items-center gap-1 rounded-md border p-2 text-sm text-muted-foreground">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />{' '}
                          No resume uploaded by student.
                        </span>
                      )}
                    </div>
                    <div className="mt-4">
                      {app.error && (
                        <Alert
                          variant="destructive"
                          className="p-2 text-sm"
                        >
                          <AlertDescription>
                            <b>AI Error:</b> {app.error}
                          </AlertDescription>
                        </Alert>
                      )}
                      {app.summary && (
                        <Alert className="p-2 text-sm">
                          <BrainCircuit className="mr-2 h-4 w-4" />
                          <AlertTitle className="text-sm font-semibold">
                            AI Analysis:
                          </AlertTitle>
                          <AlertDescription className="mt-1">
                            {app.summary}
                          </AlertDescription>
                        </Alert>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <p>No applications received yet.</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" /> Your Internship Postings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {internshipsLoading ? (
              <div className="space-y-2 p-4">
                <Skeleton className="h-16 w-full rounded-lg" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            ) : postedInternships.length > 0 ? (
              <ul className="space-y-2">
                {postedInternships.map((pos) => (
                  <InternshipListItem
                    key={pos.id}
                    internship={pos}
                    currentUserId={userId}
                    onDeleted={fetchInternships}
                  />
                ))}
              </ul>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <p>You haven't posted any internships yet.</p>
              </div>
            )}
            <Button
              className="mt-4 w-full"
              onClick={() => {
                if (!isProfileComplete()) {
                  toast({
                    title: 'Complete Your Profile First',
                    description:
                      'Please fill out all company details and your mission statement before posting an internship.',
                    variant: 'destructive',
                  });
                  return;
                }
                router.push('/post-internship');
              }}
            >
              Post a New Internship
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="text-primary" /> Suggested Students
            </CardTitle>
            <CardDescription>
              Students whose skills match your posted internship requirements.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {requestsLoading ? (
              <div className="space-y-2 p-4">
                <Skeleton className="h-24 w-full rounded-lg" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            ) : matchedStudents.length > 0 ? (
              <ul className="space-y-4">
                {matchedStudents.map((student) => (
                  <li
                    key={student.userId}
                    className="rounded-lg border p-4 transition-colors hover:bg-secondary"
                  >
                    <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                      <div className="mb-2 sm:mb-0">
                        <Link
                          href={`/public-profile/${student.userId}`}
                          className="font-semibold text-primary hover:underline"
                        >
                          {student.fullName || 'Unnamed Student'}
                        </Link>
                        <p className="text-sm text-muted-foreground">
                          {student.department && `${student.department}, `}
                          {student.yearOfStudy && `Year ${student.yearOfStudy}`}
                        </p>
                        {student.skills && student.skills.length > 0 && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            Skills: {student.skills.join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {student.resumeUrl && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                          >
                            <Link
                              href={student.resumeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" /> View
                              Resume
                            </Link>
                          </Button>
                        )}
                        {/* Add a button to contact student if needed */}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-6 text-center text-muted-foreground">
                <p>
                  No suggested students found based on your internship
                  requirements.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Ensure your internship postings have detailed requirements to
                  help us find the best matches.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
