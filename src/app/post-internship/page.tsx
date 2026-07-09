'use client';

import { useEffect, useState, useTransition } from 'react';
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
import { Briefcase, Loader2, BrainCircuit } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { handleEnhanceDescription } from '@/app/actions';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import type { EnhanceDescriptionState } from '@/lib/types';

const enhanceInitialState: EnhanceDescriptionState = {
  enhancedDescription: '',
  error: '',
};

function EnhanceButton({
  pending,
  onClick,
}: {
  pending: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      disabled={pending}
      onClick={onClick}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enhancing...
        </>
      ) : (
        <>
          <BrainCircuit className="mr-2 h-4 w-4" /> Enhance with AI
        </>
      )}
    </Button>
  );
}

export default function PostInternshipPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isEnhancing, startEnhanceTransition] = useTransition();

  // Form state
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [workMode, setWorkMode] = useState<
    'Online' | 'Offline' | 'Hybrid' | ''
  >('');
  const [duration, setDuration] = useState('');
  const [stipend, setStipend] = useState('');
  const [placementOffer, setPlacementOffer] = useState(false);

  const handleEnhanceClick = () => {
    startEnhanceTransition(async () => {
      const formData = new FormData();
      formData.append('jobTitle', jobTitle);
      formData.append('description', description);

      const state = await handleEnhanceDescription(
        enhanceInitialState,
        formData,
      );

      if (state.enhancedDescription) {
        setDescription(state.enhancedDescription);
        toast({
          title: 'Description Enhanced!',
          description: 'The job description has been rewritten by AI.',
        });
      } else if (state.error) {
        toast({
          title: 'Enhancement Failed',
          description: state.error,
          variant: 'destructive',
        });
      }
    });
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
              if (userData.userType !== 'startup') {
                toast({
                  title: 'Access Denied',
                  description: 'Only startups can post internships.',
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
        description: 'You must be logged in to post an internship.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    const companyName = user.displayName;
    const userId = user.uid;

    if (
      !companyName ||
      !jobTitle ||
      !location ||
      !description ||
      !requirements ||
      !workMode ||
      !duration ||
      !stipend
    ) {
      toast({
        title: 'Error',
        description: 'All fields are required.',
        variant: 'destructive',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const internshipsCollectionRef = collection(db, 'internships');
      await addDoc(internshipsCollectionRef, {
        companyName,
        jobTitle,
        location,
        description,
        requirements,
        workMode,
        duration,
        stipend,
        placementOffer,
        postedByUserId: userId,
        postedAt: serverTimestamp(),
      });

      toast({
        title: 'Success!',
        description: 'Internship posted successfully!',
      });
      router.push('/profile');
    } catch (error) {
      console.error('Error posting internship:', error);
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

  if (userType !== 'startup') {
    // Render nothing while redirecting
    return null;
  }

  return (
    <div className="bg-secondary">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <h2 className="text-3xl font-bold">Post an Internship</h2>
              <CardDescription>
                Fill out the form below to find your next top-tier intern.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={user?.displayName || ''}
                    readOnly
                  />
                  <p className="text-xs text-muted-foreground">
                    This is based on your profile name and cannot be changed
                    here.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    placeholder="e.g. Frontend Developer Intern"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="e.g. Remote, New York, NY"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workMode">Work Mode</Label>
                    <Select
                      onValueChange={(value) => setWorkMode(value as any)}
                      value={workMode}
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
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration</Label>
                    <Input
                      id="duration"
                      name="duration"
                      placeholder="e.g. 3 Months"
                      required
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stipend">Stipend</Label>
                    <Input
                      id="stipend"
                      name="stipend"
                      placeholder="e.g. ₹10,000/month or Unpaid"
                      required
                      value={stipend}
                      onChange={(e) => setStipend(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="description">Job Description</Label>
                    <EnhanceButton
                      pending={isEnhancing}
                      onClick={handleEnhanceClick}
                    />
                  </div>
                  <Textarea
                    id="description"
                    name="description"
                    rows={8}
                    placeholder="Describe the role, responsibilities, and what you're looking for. You can also use the 'Enhance with AI' button to rewrite this for you."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements">Skills & Requirements</Label>
                  <Textarea
                    id="requirements"
                    name="requirements"
                    rows={5}
                    placeholder="List necessary skills, qualifications, or experience. e.g. JavaScript, React, Figma"
                    required
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="placementOffer"
                    checked={placementOffer}
                    onCheckedChange={setPlacementOffer}
                  />
                  <Label htmlFor="placementOffer">
                    Placement offer available upon successful internship?
                  </Label>
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
                      <Briefcase className="mr-2 h-4 w-4" /> Post Internship
                      Opening
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
