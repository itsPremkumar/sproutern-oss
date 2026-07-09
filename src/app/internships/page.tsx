'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MapPin,
  Briefcase,
  Search,
  Clock,
  CircleDollarSign,
  IndianRupee,
} from 'lucide-react';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { GoogleAd } from '@/components/shared/GoogleAd';

interface Internship {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  description: string;
  requirements: string;
  duration?: string;
  stipend?: string;
  companyLogoUrl?: string;
  postedByUserId?: string;
}

export default function InternshipsPage() {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  useEffect(() => {
    const fetchInternships = async () => {
      if (!db) {
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(db, 'internships'),
          orderBy('postedAt', 'desc'),
        );
        const querySnapshot = await getDocs(q);
        const internshipsData = await Promise.all(
          querySnapshot.docs.map(async (docSnapshot) => {
            const internship = {
              id: docSnapshot.id,
              ...docSnapshot.data(),
            } as Internship;
            if (internship.postedByUserId) {
              try {
                const userDocRef = doc(db, 'users', internship.postedByUserId);
                const userDocSnap = await getDoc(userDocRef);
                if (userDocSnap.exists()) {
                  internship.companyLogoUrl =
                    userDocSnap.data().photoURL || undefined;
                }
              } catch (userError) {
                console.error(
                  `Failed to fetch user data for ${internship.postedByUserId}:`,
                  userError,
                );
              }
            }
            return internship;
          }),
        );
        setInternships(internshipsData);
      } catch (error) {
        console.error('Error fetching internships:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  const getTagsFromRequirements = (requirements: string): string[] => {
    if (!requirements) return [];
    // Split by comma, newline, or semicolon, take the first 3 non-empty results
    return requirements
      .split(/,|\n|;/)
      .map((r) => r.trim())
      .filter(Boolean)
      .slice(0, 3);
  };

  const filteredInternships = internships
    .filter(
      (internship) =>
        internship.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.companyName.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter((internship) =>
      internship.location.toLowerCase().includes(locationFilter.toLowerCase()),
    );

  if (loading) {
    return (
      <div className="container py-12 md:py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            Explore Internships
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Find your next big opportunity at an innovative startup.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="flex-row items-start gap-4">
                <Skeleton className="h-[60px] w-[60px] rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48 rounded-md" />
                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="mb-4 h-4 w-24 rounded-md" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-16 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold md:text-5xl">
          Explore Internships
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find your next big opportunity at an innovative startup.
        </p>
      </div>

      {/* Top Advertisement */}
      <div className="mb-8">
        <GoogleAd
          slot="7259670937"
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>

      <div className="mx-auto mb-12 max-w-3xl rounded-lg border bg-card p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search by title or company..."
              className="w-full pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter by location..."
              className="w-full pl-10"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship) => (
            <Link
              key={internship.id}
              href={`/internships/${internship.id}`}
              className="flex"
            >
              <Card className="flex w-full flex-col transition-colors hover:border-primary">
                <CardHeader className="flex-row items-start gap-4">
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
                  <div>
                    <CardTitle>{internship.jobTitle}</CardTitle>
                    <CardDescription className="font-medium">
                      {internship.companyName}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" /> {internship.location}
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    {internship.stipend && (
                      <div className="flex items-center gap-2">
                        {/* <CircleDollarSign className="h-4 w-4" /> {internship.stipend} */}
                        <IndianRupee className="h-4 w-4" /> {internship.stipend}
                      </div>
                    )}
                    {internship.duration && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" /> {internship.duration}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getTagsFromRequirements(internship.requirements).map(
                      (tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                        >
                          {tag}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    asChild
                  >
                    <div>
                      <Briefcase className="mr-2 h-4 w-4" /> View Details
                    </div>
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))
        ) : (
          <div className="col-span-full py-12">
            <div className="mx-auto max-w-3xl space-y-8">
              {/* Icon */}
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Main Message */}
              <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  No Internships Available Right Now
                </h2>
                <p className="text-muted-foreground">
                  We&apos;re working hard to bring you amazing opportunities!
                </p>
              </div>

              {/* Detailed Explanation Card */}
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🎯</span> Our Mission & Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">
                      Sproutern&apos;s ultimate goal
                    </strong>{' '}
                    is to provide quality internship opportunities for students
                    like you. We believe every student deserves hands-on
                    experience to kickstart their career journey.
                  </p>

                  {/* Honest Notice */}
                  <div className="rounded-lg bg-amber-500/10 p-5 text-amber-700 dark:text-amber-400">
                    <p className="font-medium">
                      📢 <strong>A Note from Our Team:</strong> We&apos;re
                      currently in our early stages as a growing startup. We
                      don&apos;t have the team size or budget to partner with
                      companies for internships just yet — but we&apos;re
                      working hard to get there!
                    </p>
                  </div>

                  {/* What We Offer */}
                  <div>
                    <p className="mb-4 font-semibold text-foreground">
                      💡 In the meantime, we&apos;re not leaving you
                      empty-handed! We&apos;re committed to supporting your
                      growth with valuable resources:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold text-foreground">
                          📚 Educational Resources
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Curated learning materials, tutorials, and guides to
                          build your skills
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold text-foreground">
                          🎤 Real Interview Experience
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Practice with interview simulations that mirror actual
                          hiring processes
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold text-foreground">
                          📝 Career Prep Tools
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Resume builders, portfolio tips, and career guidance
                          resources
                        </p>
                      </div>
                      <div className="rounded-lg border bg-card p-4">
                        <h4 className="mb-2 font-semibold text-foreground">
                          ✅ Skill Assessments
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Test your knowledge and get certified in various
                          domains
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Future Promise */}
                  <div className="rounded-lg bg-primary/10 p-5">
                    <p className="font-semibold text-foreground">
                      🚀 We&apos;re continuously improving our platform!
                    </p>
                    <p className="mt-2 text-muted-foreground">
                      Stay tuned as we grow — internship opportunities are on
                      the horizon. Your career success is our priority!
                      We&apos;re building partnerships and expanding our network
                      to bring you the best opportunities soon.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <Link href="/resources">Explore Resources</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/interviews">Practice Interviews</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    <Link href="/tools">Career Tools</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Advertisement */}
      <div className="mt-12">
        <GoogleAd
          slot="8371559264"
          style={{ display: 'block', textAlign: 'center' }}
        />
      </div>
    </div>
  );
}
