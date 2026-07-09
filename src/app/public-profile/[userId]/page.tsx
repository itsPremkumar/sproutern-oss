'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { getInitials } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Mail,
  Building,
  Users,
  Rocket,
  ExternalLink,
  Phone,
  Globe,
  Calendar,
  GraduationCap,
  Briefcase,
  Code,
  AlertTriangle,
  User as UserIcon,
  TrendingUp,
  FileUp,
} from 'lucide-react';
import type { StudentProfileData } from '@/components/profile/edit-student-profile-dialog';
import type { StartupProfileData } from '@/components/profile/edit-startup-profile-dialog';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface UserData {
  userId: string;
  fullName: string;
  email: string;
  userType: 'student' | 'startup';
  photoURL?: string;
}

interface Internship {
  id: string;
  jobTitle: string;
  location: string;
}

const LoadingSkeleton = () => (
  <div className="min-h-screen bg-secondary">
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <Card>
          <CardContent className="flex flex-col items-center gap-6 pt-6 md:flex-row">
            <Skeleton className="h-24 w-24 rounded-full" />
            <div className="space-y-2 text-center md:text-left">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-5 w-48" />
            </div>
          </CardContent>
        </Card>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-3">
            <CardHeader>
              <Skeleton className="h-7 w-48" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <Skeleton className="h-7 w-40" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-7 w-32" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-12 w-full" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

export default function PublicProfilePage() {
  const params = useParams();
  const userId = params.userId as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileData, setProfileData] = useState<
    StudentProfileData | StartupProfileData | null
  >(null);
  const [internships, setInternships] = useState<Internship[]>([]);

  useEffect(() => {
    if (!userId || !db) {
      setLoading(false);
      setError('User not found or database not configured.');
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          setError('User not found.');
          return;
        }
        const fetchedUserData = {
          userId: userDocSnap.id,
          ...userDocSnap.data(),
        } as UserData;
        setUserData(fetchedUserData);

        if (fetchedUserData.userType === 'student') {
          const profileDocRef = doc(db, 'studentProfiles', userId);
          const profileDocSnap = await getDoc(profileDocRef);
          if (profileDocSnap.exists()) {
            setProfileData(profileDocSnap.data() as StudentProfileData);
          }
        } else if (fetchedUserData.userType === 'startup') {
          const profileDocRef = doc(db, 'startupProfiles', userId);
          const profileDocSnap = await getDoc(profileDocRef);
          if (profileDocSnap.exists()) {
            setProfileData(profileDocSnap.data() as StartupProfileData);
          }
          const q = query(
            collection(db, 'internships'),
            where('postedByUserId', '==', userId),
            orderBy('postedAt', 'desc'),
          );
          const querySnapshot = await getDocs(q);
          const internshipsData = querySnapshot.docs.map(
            (doc) => ({ id: doc.id, ...doc.data() }) as Internship,
          );
          setInternships(internshipsData);
        }
      } catch (err: any) {
        console.error('Error fetching public profile:', err);
        setError(
          err.message ||
            'Failed to load profile. Please ensure Firestore indexes are configured correctly if the issue persists.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  if (loading) {
    return <LoadingSkeleton />;
  }

  if (error || !userData) {
    return (
      <div className="container py-20 text-center">
        <Alert
          variant="destructive"
          className="mx-auto max-w-md"
        >
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Profile Not Found</AlertTitle>
          <AlertDescription>
            {error ||
              'The requested profile could not be loaded or may no longer exist.'}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const isStudent = userData.userType === 'student';
  const studentProfile = isStudent ? (profileData as StudentProfileData) : null;
  const startupProfile = !isStudent
    ? (profileData as StartupProfileData)
    : null;

  return (
    <div className="min-h-screen bg-secondary">
      <div className="container py-8 md:py-12">
        <div className="space-y-8">
          <Card>
            <CardContent className="flex flex-col items-center gap-6 pt-6 md:flex-row">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src={userData.photoURL}
                  alt={userData.fullName || 'User'}
                />
                <AvatarFallback>
                  {getInitials(userData.fullName)}
                </AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{userData.fullName}</h1>
                <p className="mt-1 flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
                  <Mail className="h-4 w-4" />
                  {userData.email}
                </p>
                {isStudent && studentProfile?.phoneNumber && (
                  <p className="mt-1 flex items-center justify-center gap-2 text-muted-foreground md:justify-start">
                    <Phone className="h-4 w-4" />
                    {studentProfile.phoneNumber}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {isStudent && studentProfile && (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="lg:col-span-3">
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
                      {studentProfile.age > 0 ? studentProfile.age : 'N/A'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserIcon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <strong>Gender:</strong> {studentProfile.gender || 'N/A'}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <strong>CGPA:</strong>{' '}
                      {studentProfile.cgpa > 0 ? studentProfile.cgpa : 'N/A'}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="text-primary" /> Skills
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {studentProfile.skills?.length > 0 ? (
                    studentProfile.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="default"
                      >
                        {skill}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No skills listed.
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
                  {studentProfile.experience?.length > 0 &&
                  studentProfile.experience.some((e) => e.title) ? (
                    studentProfile.experience.map((exp, index) => (
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
                      No work experience listed.
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
                  {studentProfile.education?.degree ? (
                    <>
                      <h3 className="font-semibold">
                        {studentProfile.education.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {studentProfile.education.university}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Year: {studentProfile.education.year}
                      </p>
                      {studentProfile.department && (
                        <p className="text-sm text-muted-foreground">
                          Dept: {studentProfile.department}
                        </p>
                      )}
                      {studentProfile.yearOfStudy && (
                        <p className="text-sm text-muted-foreground">
                          Current Year: {studentProfile.yearOfStudy}
                        </p>
                      )}
                      {studentProfile.studyingStatus && (
                        <p className="text-sm text-muted-foreground">
                          Status: {studentProfile.studyingStatus}
                        </p>
                      )}
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No education details listed.
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileUp className="text-primary" /> Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {studentProfile.resumeUrl ? (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                    >
                      <Link
                        href={studentProfile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> View Resume
                      </Link>
                    </Button>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No resume uploaded.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {!isStudent && startupProfile && (
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="text-primary" /> Mission & Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {startupProfile.mission || 'No mission statement provided.'}
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="text-primary" /> Company Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-x-6 gap-y-4 text-sm sm:grid-cols-2 md:grid-cols-3">
                  {startupProfile.details.industry && (
                    <div className="flex items-center gap-2">
                      <Building className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <strong>Industry:</strong>{' '}
                        {startupProfile.details.industry}
                      </div>
                    </div>
                  )}
                  {startupProfile.details.founded && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <strong>Founded:</strong>{' '}
                        {startupProfile.details.founded}
                      </div>
                    </div>
                  )}
                  {startupProfile.details.location && (
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <strong>Location:</strong>{' '}
                        {startupProfile.details.location}
                      </div>
                    </div>
                  )}
                  {startupProfile.details.website && (
                    <div className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <a
                        href={`https://${startupProfile.details.website.replace(/^https?:\/\//, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {startupProfile.details.website}
                      </a>
                    </div>
                  )}
                  {startupProfile.details.contactEmail && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <a
                        href={`mailto:${startupProfile.details.contactEmail}`}
                        className="text-primary hover:underline"
                      >
                        {startupProfile.details.contactEmail}
                      </a>
                    </div>
                  )}
                  {startupProfile.details.contactPhone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-muted-foreground" />
                      <span>{startupProfile.details.contactPhone}</span>
                    </div>
                  )}
                  {!Object.values(startupProfile.details).some((v) => v) && (
                    <p className="col-span-full text-muted-foreground">
                      No company details provided.
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-primary" /> Open Internship Positions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {internships.length > 0 ? (
                    internships.map((pos) => (
                      <Link
                        key={pos.id}
                        href={`/internships/${pos.id}`}
                      >
                        <div className="flex items-center justify-between rounded-lg border p-3 transition-colors hover:border-primary">
                          <div>
                            <h3 className="font-semibold">{pos.jobTitle}</h3>
                            <p className="text-sm text-muted-foreground">
                              {pos.location}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="col-span-full text-center text-muted-foreground">
                      No open internships.
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
