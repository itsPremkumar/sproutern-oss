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
  CheckCircle,
  MapPin,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Award,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Accenture Careers - Interview & Salary Guide',
  description:
    'Complete guide to Accenture placements. Get interview questions, salary details, selection process, eligibility criteria for ASE and Associate roles.',
  keywords: [
    'Accenture interview',
    'Accenture ASE',
    'Accenture salary',
    'Accenture placement',
    'Accenture hiring',
  ],
  canonical: '/companies/accenture',
});

export default function AccenturePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 dark:bg-purple-950 dark:text-purple-300">
            <Globe className="h-4 w-4" />
            Global Professional Services
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Accenture Careers
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Accenture placements - Interview questions, salary
            breakdowns, selection process, and preparation tips for freshers.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              ₹4.5-6.5 LPA
            </div>
            <p className="text-sm text-muted-foreground">Fresher Salary</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">60%</div>
            <p className="text-sm text-muted-foreground">Min. Eligibility</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">4 Rounds</div>
            <p className="text-sm text-muted-foreground">Selection Process</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">#1</div>
            <p className="text-sm text-muted-foreground">
              IT Services (Fortune)
            </p>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link href="/companies/accenture/interview-questions">
              <FileQuestion className="mr-2 h-5 w-5" /> Interview Questions
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/companies/accenture/salary">
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
            About Accenture
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Accenture is a global professional services company with leading
                capabilities in digital, cloud, and security. With over 738,000
                employees serving clients in more than 120 countries, Accenture
                is one of the world's largest and most prestigious consulting
                firms.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Founded: 1989 (as Andersen Consulting)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Headquarters: Dublin, Ireland</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 738,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Fortune Global 500 Company</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">Office Locations</h4>
                  <p className="text-muted-foreground">
                    Bangalore, Mumbai, Chennai, Hyderabad, Pune, Gurgaon,
                    Kolkata, Jaipur, Coimbatore, Indore
                  </p>
                  <h4 className="mb-2 mt-4 font-semibold">Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Strategy & Consulting</Badge>
                    <Badge variant="secondary">Technology</Badge>
                    <Badge variant="secondary">Operations</Badge>
                    <Badge variant="secondary">Interactive</Badge>
                  </div>
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
                <CardTitle>Associate Software Engineer</CardTitle>
                <CardDescription>ASE - Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹4.5 LPA
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
                  Technical
                </Badge>
                <CardTitle>Packaged App Development</CardTitle>
                <CardDescription>ASE (SAP/Salesforce)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹5 LPA
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

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Advanced
                </Badge>
                <CardTitle>Advanced App Engineering</CardTitle>
                <CardDescription>Associate (Full Stack)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹6.5 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 65% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> Coding + Tech skills
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
                      <span>
                        B.E/B.Tech/M.E/M.Tech/MCA/M.Sc (CS/IT/Math/Statistics)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Minimum 60% aggregate throughout (10th, 12th, UG)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>No active backlogs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Full-time degree (no distance/correspondence)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-semibold">Other Requirements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Maximum 1 year gap in education (extendable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Willing to work in rotational shifts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Willing to relocate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Good communication skills (English)</span>
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
                      Cognitive + Technical Assessment
                    </CardTitle>
                    <CardDescription>90 minutes duration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• English Ability (20 questions, 20 minutes)</li>
                  <li>• Critical Reasoning (20 questions, 20 minutes)</li>
                  <li>• Abstract Reasoning (15 questions, 15 minutes)</li>
                  <li>• Technical Questions (MCQs on programming)</li>
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
                    <CardTitle className="text-lg">Coding Assessment</CardTitle>
                    <CardDescription>
                      45 minutes (for technical roles)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• 2 coding problems (easy to medium difficulty)</li>
                  <li>• Languages: C, C++, Java, Python</li>
                  <li>• Focus on problem-solving and logic</li>
                  <li>• Partial marking available</li>
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
                    <CardTitle className="text-lg">
                      Communication Assessment
                    </CardTitle>
                    <CardDescription>30 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Sentence Mastery (fill in the blanks, corrections)</li>
                  <li>• Vocabulary</li>
                  <li>• Reading Comprehension</li>
                  <li>• Virtual Interview (recorded video responses)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    4
                  </div>
                  <div>
                    <CardTitle className="text-lg">HR Interview</CardTitle>
                    <CardDescription>20-30 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Introduction and background verification</li>
                  <li>• Project discussion</li>
                  <li>• Behavioral questions</li>
                  <li>• Salary and relocation discussion</li>
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
                    <span>Practice verbal ability - grammar, vocabulary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Focus on logical reasoning patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>
                      Take our{' '}
                      <Link
                        href="/tools/aptitude-test"
                        className="text-primary hover:underline"
                      >
                        Aptitude Mock Test
                      </Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Practice coding on HackerRank, LeetCode</span>
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
                    <span>Research about Accenture's services and values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Prepare a strong 'About Me' narrative</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Know your resume inside out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Practice common HR questions</span>
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
              href="/companies/accenture/interview-questions"
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
                Mock tests for assessment
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
