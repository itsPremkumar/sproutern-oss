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
  Users,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Bank of America Careers - Interview & Salary Guide',
  description:
    'Complete guide to Bank of America placements in India. Get interview questions, salary details for freshers & experienced, selection process, and eligibility criteria.',
  keywords: [
    'Bank of America careers',
    'BofA interview',
    'Bank of America salary India',
    'BofA freshers jobs',
    'Bank of America hiring process',
  ],
  canonical: '/companies/bank-of-america',
});

export default function BankOfAmericaPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
            <Building2 className="h-4 w-4" />
            Banking & Financial Services
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Bank of America Careers
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Bank of America placements - Interview questions,
            salary breakdowns, selection process, and preparation tips for
            freshers and experienced professionals.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              ₹6-12 LPA
            </div>
            <p className="text-sm text-muted-foreground">Fresher Salary</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">60%</div>
            <p className="text-sm text-muted-foreground">Min. Eligibility</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              4-5 Rounds
            </div>
            <p className="text-sm text-muted-foreground">Selection Process</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              Fortune 10
            </div>
            <p className="text-sm text-muted-foreground">Global Ranking</p>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link href="/tools/resume-score-checker">
              <CheckCircle className="mr-2 h-5 w-5" /> Check Your Resume
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <a
              href="https://careers.bankofamerica.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="mr-2 h-5 w-5" /> Official Careers
            </a>
          </Button>
        </div>

        {/* Company Overview */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Building2 className="h-6 w-6 text-primary" />
            About Bank of America
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Bank of America Corporation is one of the world&apos;s largest
                financial institutions, serving individual consumers, small and
                middle-market businesses, institutional investors, large
                corporations, and governments. With approximately 200,000+
                employees globally and a significant technology presence in
                India, BofA offers excellent career opportunities in technology,
                operations, and financial services.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Founded: 1904 (as Bank of Italy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Headquarters: Charlotte, North Carolina, USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 200,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Fortune 10 Company (2nd Largest US Bank)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">India Operations</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Mumbai (Primary Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Chennai
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Gurugram
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Hyderabad
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      GIFT City, Gandhinagar
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Global Technology</Badge>
                    <Badge variant="secondary">Operations</Badge>
                    <Badge variant="secondary">Risk Management</Badge>
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
            <Card className="border-blue-200 dark:border-blue-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                  Technology
                </Badge>
                <CardTitle>Technology Analyst</CardTitle>
                <CardDescription>Software Development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹8-12 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Mumbai, Chennai, Gurugram
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Operations
                </Badge>
                <CardTitle>Operations Analyst</CardTitle>
                <CardDescription>Global Banking Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹6-8 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Mumbai, Hyderabad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Risk & Finance
                </Badge>
                <CardTitle>Risk Analyst</CardTitle>
                <CardDescription>Risk Management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹8-10 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 65% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> Quantitative skills required
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
                        B.E/B.Tech/M.E/M.Tech/MCA (CS/IT/ECE/EEE for Tech roles)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>BBA/B.Com/MBA for Operations & Business roles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Minimum 60% aggregate throughout academics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>No active backlogs at the time of joining</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-semibold">Other Requirements</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Strong analytical and problem-solving abilities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Excellent communication skills (verbal & written)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>Willing to work in rotational shifts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>
                        Flexible to relocate to any BofA India location
                      </span>
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
                    <CardTitle className="text-lg">Online Assessment</CardTitle>
                    <CardDescription>60-90 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Aptitude (Quantitative, Logical, Verbal)</li>
                  <li>• Technical MCQs (for Tech roles)</li>
                  <li>• Coding questions (1-2 problems for developers)</li>
                  <li>• English proficiency assessment</li>
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
                    <CardDescription>45-60 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Data Structures & Algorithms</li>
                  <li>• DBMS, SQL queries</li>
                  <li>• OOP concepts</li>
                  <li>• Project discussion and code review</li>
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
                    <CardTitle className="text-lg">Managerial Round</CardTitle>
                    <CardDescription>30-45 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Behavioral and situational questions</li>
                  <li>• Team collaboration scenarios</li>
                  <li>• Problem-solving and critical thinking</li>
                  <li>• Career aspirations and goals</li>
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
                  <li>• Why Bank of America?</li>
                  <li>• Salary expectations and notice period</li>
                  <li>• Location and shift flexibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Salary Structure */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <IndianRupee className="h-6 w-6 text-primary" />
            Salary Structure (India)
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left font-semibold">Role</th>
                      <th className="p-3 text-left font-semibold">
                        Experience
                      </th>
                      <th className="p-3 text-left font-semibold">CTC Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Technology Analyst</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹8-12 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Operations Analyst</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹6-8 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Associate</td>
                      <td className="p-3">2-4 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹12-18 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Vice President</td>
                      <td className="p-3">5-8 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹25-40 LPA
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Director</td>
                      <td className="p-3">10+ Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹50+ LPA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Note: Salaries vary based on location, role, and performance.
                BofA also offers excellent benefits including health insurance,
                RSUs, bonuses, and retirement benefits.
              </p>
            </CardContent>
          </Card>
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
                    <span>Practice quantitative aptitude daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Focus on SQL queries and database concepts</span>
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
                    <span>Practice coding on LeetCode (Easy-Medium)</span>
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
                    <span>
                      Research Bank of America&apos;s history and values
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>
                      Prepare STAR format answers for behavioral questions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Know your resume inside out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                    <span>Understand banking/finance domain basics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Work Culture */}
        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Users className="h-6 w-6 text-primary" />
            Work Culture & Benefits
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Work-Life Balance</h4>
                <p className="text-sm text-muted-foreground">
                  Flexible hours, hybrid work options, and generous PTO
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Career Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Internal mobility, learning programs, and mentorship
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Inclusive Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Diversity initiatives, employee resource groups, and wellness
                  programs
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="rounded-2xl bg-muted/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
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
              href="/tools/resume-score-checker"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Resume Checker</h4>
              <p className="text-sm text-muted-foreground">
                ATS-friendly resume tips
              </p>
            </Link>
            <Link
              href="/resources/resume-guide"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Resume Guide</h4>
              <p className="text-sm text-muted-foreground">
                Create a winning resume
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
