'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, type User } from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';

import { auth, db } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Lightbulb, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { StudentProfileData } from '@/lib/types';

interface FormData {
  title: string;
  desiredSkills: string;
  workMode: 'Online' | 'Offline' | 'Hybrid' | '';
  duration: string;
  stipendExpectation: string;
  availability: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  title: 'Looking for Interns',
  desiredSkills: '',
  workMode: '',
  duration: '',
  stipendExpectation: '',
  availability: '',
  additionalInfo: '',
};

export default function PostRequestPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: 'Online' | 'Offline' | 'Hybrid' | '') => {
    setFormData((prev) => ({ ...prev, workMode: value }));
  };

  useEffect(() => {
    if (!auth) {
      router.push('/signin');
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (db) {
          const userId = currentUser.uid;
          const userDocRef = doc(db, 'users', userId);
          try {
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              const userData = userDoc.data();
              setUserType(userData.userType);
              if (userData.userType !== 'student') {
                toast({
                  title: 'Access Denied',
                  description: 'Only students can post internship requests.',
                  variant: 'destructive',
                });
                router.push('/profile');
              }
            } else {
              router.push('/signin');
            }
          } catch (error) {
            console.error('Error fetching user type:', error);
            router.push('/signin');
          } finally {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      } else {
        router.push('/signin');
      }
    });

    return () => unsubscribe();
  }, [router, toast]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!user || !db) {
      toast({
        title: 'Error',
        description: 'You must be logged in to post a request.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const {
      title,
      desiredSkills,
      workMode,
      duration,
      stipendExpectation,
      availability,
    } = formData;
    if (
      !title ||
      !desiredSkills ||
      !workMode ||
      !duration ||
      !stipendExpectation ||
      !availability
    ) {
      toast({
        title: 'Missing Fields',
        description: 'Please fill out all required fields.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const studentProfileRef = doc(db, 'studentProfiles', user.uid);
      const studentProfileSnap = await getDoc(studentProfileRef);

      if (!studentProfileSnap.exists()) {
        toast({
          title: 'Profile Incomplete',
          description:
            'You must complete your student profile before posting a request.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      const studentProfile = studentProfileSnap.data() as StudentProfileData;
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
      } = studentProfile;

      const isProfileComplete =
        skills.length > 0 &&
        experience.length > 0 &&
        experience.some((e) => e.title) &&
        !!education?.degree &&
        !!education?.university &&
        !!education?.year &&
        !!resumeUrl &&
        !!dob &&
        (age ?? 0) > 0 &&
        !!gender &&
        !!phoneNumber &&
        !!department &&
        !!yearOfStudy &&
        !!studyingStatus &&
        (cgpa ?? 0) > 0;

      if (!isProfileComplete) {
        toast({
          title: 'Profile Incomplete',
          description:
            'You must complete your student profile before posting a request.',
          variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
      }

      const requestsCollectionRef = collection(db, 'internshipRequests');
      await addDoc(requestsCollectionRef, {
        ...formData,
        postedByUserId: user.uid,
        postedAt: serverTimestamp(),
        studentProfile: studentProfile,
      });

      toast({
        title: 'Success!',
        description: 'Your internship request has been posted.',
      });
      router.push('/profile');
    } catch (error) {
      console.error('Error posting internship request:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-secondary">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-48 rounded-md" />
                <Skeleton className="h-4 w-64 rounded-md" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-10 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 rounded-md" />
                  <Skeleton className="h-24 w-full rounded-md" />
                </div>
                <Skeleton className="h-10 w-full rounded-md" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (userType !== 'student') {
    return null;
  }

  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Post an Internship Request
              </CardTitle>
              <CardDescription>
                Let startups know what you're looking for. Fill out the form
                below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="title">Request Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="e.g., Seeking Summer Internship in Web Development"
                    required
                    value={formData.title}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="desiredSkills">Desired Skills</Label>
                  <Textarea
                    id="desiredSkills"
                    name="desiredSkills"
                    rows={4}
                    placeholder="List skills you want to use or learn, e.g., JavaScript, React, Figma"
                    required
                    value={formData.desiredSkills}
                    onChange={handleFormChange}
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="workMode">Preferred Work Mode</Label>
                    <Select
                      onValueChange={(value) =>
                        handleSelectChange(value as FormData['workMode'])
                      }
                      value={formData.workMode}
                    >
                      <SelectTrigger id="workMode">
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Online">Online</SelectItem>
                        <SelectItem value="Offline">Offline</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Desired Duration</Label>
                    <Input
                      id="duration"
                      name="duration"
                      placeholder="e.g. 3 Months"
                      required
                      value={formData.duration}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="stipendExpectation">
                      Stipend Expectation
                    </Label>
                    <Input
                      id="stipendExpectation"
                      name="stipendExpectation"
                      placeholder="e.g. ₹10,000/month or Unpaid"
                      required
                      value={formData.stipendExpectation}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      name="availability"
                      placeholder="e.g., Starting June 2024"
                      required
                      value={formData.availability}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalInfo">Additional Information</Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    placeholder="Tell startups more about your goals, what kind of projects you'd love to work on, etc."
                    value={formData.additionalInfo}
                    onChange={handleFormChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                      Posting...
                    </>
                  ) : (
                    <>
                      <Lightbulb className="mr-2 h-4 w-4" /> Post My Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
