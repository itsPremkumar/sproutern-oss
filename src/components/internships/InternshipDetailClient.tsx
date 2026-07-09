'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';

import { db } from '@/lib/firebase';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  MapPin,
  Building,
  FileText,
  Bot,
  AlertTriangle,
  Clock,
  Briefcase,
  Award,
  IndianRupee,
  CircleDollarSign,
} from 'lucide-react';

import { ApplyButton } from '@/components/internships/apply-button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { logViewItem } from '@/lib/analytics';

interface Internship {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  description: string;
  requirements: string;
  postedByUserId: string;
  workMode?: 'Online' | 'Offline' | 'Hybrid';
  duration?: string;
  stipend?: string;
  placementOffer?: boolean;
  companyLogoUrl?: string;
}

export function InternshipDetailClient() {
  const params = useParams();
  const internshipId = params.internshipId as string;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [internship, setInternship] = useState<Internship | null>(null);

  useEffect(() => {
    if (!internshipId || !db) {
      setLoading(false);
      setError('Internship not found or database not configured.');
      return;
    }

    const fetchInternship = async () => {
      try {
        setLoading(true);
        const internshipDocRef = doc(db, 'internships', internshipId);
        const internshipDocSnap = await getDoc(internshipDocRef);

        if (!internshipDocSnap.exists()) {
          throw new Error(
            'This internship could not be found. It may have been removed.',
          );
        }

        const internshipData = {
          id: internshipDocSnap.id,
          ...internshipDocSnap.data(),
        } as Internship;

        if (internshipData.postedByUserId) {
          try {
            const userDocRef = doc(db, 'users', internshipData.postedByUserId);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
              internshipData.companyLogoUrl =
                userDocSnap.data().photoURL || undefined;
            }
          } catch (userError) {
            console.error(
              `Failed to fetch user data for ${internshipData.postedByUserId}:`,
              userError,
            );
          }
        }

        logViewItem(internshipData.id, internshipData.jobTitle, 'internship');
        setInternship(internshipData);
      } catch (err: any) {
        console.error('Error fetching internship details:', err);
        setError(
          err.message ||
            'Failed to load internship. Please ensure Firestore indexes are configured correctly if the issue persists.',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchInternship();
  }, [internshipId]);

  const getTagsFromRequirements = (requirements: string): string[] => {
    if (!requirements) return [];
    return requirements
      .split(/,|\n|;/)
      .map((r) => r.trim())
      .filter(Boolean);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container py-12 md:py-20">
          <div className="mx-auto max-w-4xl space-y-8">
            <Card>
              <CardHeader className="flex flex-col items-start gap-6 md:flex-row">
                <Skeleton className="h-[100px] w-[100px] rounded-lg border" />
                <div className="flex-grow space-y-2">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-6 w-1/2" />
                  <Skeleton className="h-5 w-1/3" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-11 w-full" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-7 w-48" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Skeleton className="h-7 w-64" />
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Skeleton className="h-7 w-20 rounded-full" />
                <Skeleton className="h-7 w-24 rounded-full" />
                <Skeleton className="h-7 w-16 rounded-full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (error || !internship) {
    return (
      <div className="container py-20 text-center">
        <Alert
          variant="destructive"
          className="mx-auto max-w-md"
        >
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Internship Not Found</AlertTitle>
          <AlertDescription>
            {error || 'The requested internship could not be loaded.'}
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const detailItems = [
    {
      icon: <Briefcase className="h-5 w-5 text-muted-foreground" />,
      label: 'Work Mode',
      value: internship.workMode,
    },
    {
      icon: <Clock className="h-5 w-5 text-muted-foreground" />,
      label: 'Duration',
      value: internship.duration,
    },
    // { icon: <CircleDollarSign className="h-5 w-5 text-muted-foreground" />, label: "Stipend", value: internship.stipend },
    {
      icon: <IndianRupee className="h-5 w-5 text-muted-foreground" />,
      label: 'Stipend',
      value: internship.stipend,
    },
    {
      icon: <Award className="h-5 w-5 text-muted-foreground" />,
      label: 'Placement Offer',
      value: internship.placementOffer ? 'Yes' : 'No',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card>
            <CardHeader className="flex flex-col items-start gap-6 md:flex-row">
              {internship.companyLogoUrl ? (
                <Image
                  src={internship.companyLogoUrl}
                  alt={`${internship.companyName} logo`}
                  data-ai-hint="company logo"
                  width={60}
                  height={60}
                  className="rounded-lg border bg-white object-cover"
                />
              ) : (
                <div
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-lg border bg-muted text-xl font-bold text-primary"
                  aria-label="Company Initial"
                >
                  {internship.companyName?.charAt(0).toUpperCase() || '?'}
                </div>
              )}
              <div className="space-y-1.5">
                <CardTitle className="text-3xl">
                  {internship.jobTitle}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-lg font-medium">
                  <Building className="h-5 w-5" />
                  {internship.companyName}
                </CardDescription>
                <div className="flex items-center gap-2 pt-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {internship.location}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ApplyButton
                internshipId={internship.id}
                startupUserId={internship.postedByUserId}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Internship Details
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
              {detailItems
                .filter((item) => item.value)
                .map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3"
                  >
                    {item.icon}
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText /> Job Description
              </CardTitle>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none whitespace-pre-line">
              <p>{internship.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot /> Skills & Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {getTagsFromRequirements(internship.requirements).map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-sm"
                >
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
