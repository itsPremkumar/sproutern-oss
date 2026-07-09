import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Building2,
  FileQuestion,
  IndianRupee,
  Users,
  Calendar,
  CheckCircle,
  MapPin,
  Briefcase,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Cognizant Careers - Interview & Salary Guide',
  description:
    'Complete guide to Cognizant placements. Get interview questions, salary details, selection process, eligibility criteria, and preparation tips for GenC, GenC Next, and GenC Pro roles.',
  keywords: [
    'Cognizant interview',
    'Cognizant GenC',
    'Cognizant salary',
    'Cognizant placement',
    'Cognizant hiring',
  ],
  canonical: '/companies/cognizant',
});

export default function CognizantPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Building2 className="h-4 w-4" />
            IT Services Company
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Cognizant Careers
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Cognizant placements - Interview questions, salary
            breakdowns, selection process, and preparation tips.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              ₹4-6.75 LPA
            </div>
            <p className="text-sm text-muted-foreground">Fresher Salary</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">65%</div>
            <p className="text-sm text-muted-foreground">Min. Eligibility</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">3 Rounds</div>
            <p className="text-sm text-muted-foreground">Selection Process</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              All India
            </div>
            <p className="text-sm text-muted-foreground">Location</p>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link href="/companies/cognizant/interview-questions">
              <FileQuestion className="mr-2 h-5 w-5" /> Interview Questions
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/companies/cognizant/salary">
              <IndianRupee className="mr-2 h-5 w-5" /> Salary Details
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/tools/resume-score-checker">
              <CheckCircle className="mr-2 h-5 w-5" /> Check Your Resume
            </Link>
          </Button>
        </div>

        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Building2 className="h-6 w-6 text-primary" />
            About Cognizant
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Cognizant Technology Solutions Corporation is an American
                multinational IT services and consulting company headquartered
                in Teaneck, New Jersey. It is one of the largest IT services
                providers globally, with over 340,000 employees worldwide.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Founded: 1994</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Headquarters: Teaneck, New Jersey, USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 340,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Fortune 500 Company (Ranked #185)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Office Locations</h4>
                  <p className="text-muted-foreground">
                    Chennai (HQ), Bangalore, Hyderabad, Mumbai, Pune, Kolkata,
                    Coimbatore, Kochi, Gurgaon
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Roles for Freshers */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Briefcase className="h-6 w-6 text-primary" />
            Roles for Freshers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Entry Level
                </Badge>
                <CardTitle>GenC (Graduate Engineering)</CardTitle>
                <CardDescription>Programmer Analyst Trainee</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹4 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Any location
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Mid Level
                </Badge>
                <CardTitle>GenC Next</CardTitle>
                <CardDescription>Programmer Analyst</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹5.2 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 65% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Any location
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Premium
                </Badge>
                <CardTitle>GenC Pro</CardTitle>
                <CardDescription>Associate (Specialist Role)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹6.75 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 70% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Any location
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <GraduationCap className="h-6 w-6 text-primary" />
            Eligibility Criteria
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 font-semibold">Academic Requirements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>B.E/B.Tech/M.E/M.Tech/MCA/M.Sc (CS/IT)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Minimum 60-65% aggregate (based on role)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>No active backlogs at the time of joining</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Full-time degree only (no correspondence)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-semibold">Other Requirements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Maximum 2 years gap in education</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Willing to relocate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Not currently employed with Cognizant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Good communication skills in English</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Selection Process */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <TrendingUp className="h-6 w-6 text-primary" />
            Selection Process
          </h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    1
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Online Assessment (GenC Elevate)
                    </CardTitle>
                    <CardDescription>90 minutes duration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Quantitative Aptitude (16 questions)</li>
                  <li>• Logical Reasoning (14 questions)</li>
                  <li>• Verbal Ability (22 questions)</li>
                  <li>• Programming/Coding (2 questions)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    2
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      Technical Interview
                    </CardTitle>
                    <CardDescription>30-45 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Programming concepts (OOPs, DSA basics)</li>
                  <li>• Project discussion</li>
                  <li>• Database concepts (SQL queries)</li>
                  <li>• Questions on your preferred programming language</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    3
                  </div>
                  <div>
                    <CardTitle className="text-lg">HR Interview</CardTitle>
                    <CardDescription>15-30 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Tell me about yourself</li>
                  <li>• Why Cognizant?</li>
                  <li>• Willingness to relocate</li>
                  <li>• Salary expectations and bond agreement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preparation Tips */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Preparation Tips</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Online Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>
                      Practice aptitude on our{' '}
                      <Link
                        href="/tools/aptitude-test"
                        className="text-primary hover:underline"
                      >
                        Aptitude Test Tool
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Focus on speed - time management is crucial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Practice coding in C, Java, or Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Solve previous year Cognizant papers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">For Interview Rounds</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Know your projects inside out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Revise OOPs concepts thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Practice SQL queries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Prepare for common HR questions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="rounded-2xl bg-muted/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/companies/cognizant/interview-questions"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Interview Questions</h4>
              <p className="text-sm text-muted-foreground">
                100+ questions with answers
              </p>
            </Link>
            <Link
              href="/tools/aptitude-test"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Practice Aptitude</h4>
              <p className="text-sm text-muted-foreground">
                Mock tests for GenC Elevate
              </p>
            </Link>
            <Link
              href="/resources/resume-guide"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Resume Guide</h4>
              <p className="text-sm text-muted-foreground">
                ATS-friendly resume tips
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
