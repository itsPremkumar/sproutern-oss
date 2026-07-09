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
  CheckCircle,
  MapPin,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Award,
  Globe,
  Users,
  Clock,
  IndianRupee,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Citi Careers India - Interview & Salary Guide',
  description:
    'Complete guide to Citi (Citigroup) placements in India. Get interview questions, salary details, selection process for technology and banking roles.',
  keywords: [
    'Citi careers India',
    'Citigroup interview',
    'Citi salary',
    'Citi jobs Pune',
    'Citi freshers hiring',
  ],
  canonical: '/companies/citi',
});

export default function CitiPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <Building2 className="h-4 w-4" />
            Investment Banking & Financial Services
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Citi Careers India
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Citi placements - Interview questions, salary
            breakdowns, selection process, and preparation tips for tech and
            finance roles.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              ₹9-15 LPA
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
            <div className="mb-2 text-3xl font-bold text-primary">160+</div>
            <p className="text-sm text-muted-foreground">Countries</p>
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
              href="https://jobs.citi.com/"
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
            About Citi
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Citigroup Inc. is one of the world&apos;s largest investment
                banks and financial services corporations. As one of the
                &quot;Big Four&quot; US banks, Citi serves millions of
                consumers, corporations, governments, and institutions in over
                160 countries. Citi India is a major technology and operations
                hub, driving innovation in digital banking, risk management, and
                financial technology.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Founded: 1812 (as City Bank of New York)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Headquarters: New York City, USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 200,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Big Four US Bank, Fortune 100</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">India Locations</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Mumbai (Corporate & Tech Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Pune (Technology Centre)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Chennai (Operations Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Bangalore & Gurugram
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Technology</Badge>
                    <Badge variant="secondary">Investment Banking</Badge>
                    <Badge variant="secondary">Risk & Compliance</Badge>
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
                <CardTitle>Analyst Programmer</CardTitle>
                <CardDescription>ICG Technology</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹12-15 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Pune, Mumbai
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
                <CardDescription>Global Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹8-10 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Chennai, Mumbai
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Risk
                </Badge>
                <CardTitle>Risk Analyst</CardTitle>
                <CardDescription>Risk Management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹10-14 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 65% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> Quant background preferred
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
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
                    <CardDescription>90-120 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Aptitude (Quantitative, Logical, Verbal)</li>
                  <li>• Technical MCQs (CS fundamentals, SQL, OOPs)</li>
                  <li>• Coding Problems (2 questions, Medium-Hard)</li>
                  <li>• Essay or situational judgment test</li>
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
                      Technical Interview 1
                    </CardTitle>
                    <CardDescription>60 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• DSA - Arrays, Strings, Trees, Graphs</li>
                  <li>• DBMS & SQL queries</li>
                  <li>• OOP concepts and design patterns</li>
                  <li>• Live coding exercise</li>
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
                      Technical Interview 2
                    </CardTitle>
                    <CardDescription>45 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Project deep-dive</li>
                  <li>• System design (for experienced roles)</li>
                  <li>• Domain-specific questions (finance basics)</li>
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
                    <CardDescription>30 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Why Citi? Why banking?</li>
                  <li>• Behavioral questions (STAR format)</li>
                  <li>• Salary negotiation and location preference</li>
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
                      <td className="p-3">Analyst Programmer</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹12-15 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Operations Analyst</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹8-10 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Senior Analyst</td>
                      <td className="p-3">3-5 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹18-25 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">VP</td>
                      <td className="p-3">6-10 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹40-60 LPA
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Director</td>
                      <td className="p-3">12+ Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹75+ LPA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Benefits include health insurance, annual bonus (20-30%),
                stock options, pension, and comprehensive learning programs.
              </p>
            </CardContent>
          </Card>
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
                  Flexible hours, hybrid work, generous leave policy
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Career Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Citi Academy, global mobility, and leadership programs
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Inclusive Culture</h4>
                <p className="text-sm text-muted-foreground">
                  Strong diversity focus and employee networks
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
                Mock tests for Citi assessment
              </p>
            </Link>
            <Link
              href="/companies"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Explore Companies</h4>
              <p className="text-sm text-muted-foreground">
                Other banking career guides
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
