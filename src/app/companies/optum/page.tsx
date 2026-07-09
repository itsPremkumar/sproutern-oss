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
  Heart,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Optum Careers India - Interview & Salary Guide',
  description:
    'Complete guide to Optum (UnitedHealth Group) placements in India. Interview questions, salary details, and selection process for healthcare technology roles.',
  keywords: [
    'Optum careers India',
    'Optum interview questions',
    'Optum salary',
    'UnitedHealth Group jobs India',
    'Optum freshers hiring',
  ],
  canonical: '/companies/optum',
});

export default function OptumPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-950 dark:text-orange-300">
            <Heart className="h-4 w-4" />
            Healthcare Technology
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Optum Careers India
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Optum (UnitedHealth Group) placements - Interview
            questions, salary breakdowns, selection process, and tips for
            healthcare technology roles.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">
              ₹5-10 LPA
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
            <div className="mb-2 text-3xl font-bold text-primary">
              Fortune 5
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
              href="https://careers.optum.com/"
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
            About Optum
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Optum is a leading health services and innovation company, and a
                subsidiary of UnitedHealth Group (Fortune 5). Optum combines
                technology, data, and expertise to help people live healthier
                lives. With a mission to improve healthcare for everyone, Optum
                India serves as a major technology hub, developing cutting-edge
                solutions in healthcare analytics, pharmacy benefits, and
                digital health platforms.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Parent: UnitedHealth Group (Fortune 5)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Headquarters: Eden Prairie, Minnesota, USA</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 100,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Revenue: $60+ Billion annually</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">
                    India Technology Centres
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Gurugram (Major Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Hyderabad
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Bangalore
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Noida
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Health Technology</Badge>
                    <Badge variant="secondary">Data Analytics</Badge>
                    <Badge variant="secondary">Digital Health</Badge>
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
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Technology Development</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹6-10 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Gurugram, Hyderabad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 dark:border-green-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                  Analytics
                </Badge>
                <CardTitle>Data Analyst</CardTitle>
                <CardDescription>Healthcare Analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹5-8 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> SQL & Excel proficiency
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 dark:border-purple-800">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  Operations
                </Badge>
                <CardTitle>Associate Analyst</CardTitle>
                <CardDescription>Healthcare Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" /> ₹4-6 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" /> 55% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Gurugram, Noida
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
                    <CardDescription>60-90 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Aptitude (Quantitative, Logical, Verbal)</li>
                  <li>• Technical MCQs (Based on role - CS/Data/Domain)</li>
                  <li>• Coding round for developer roles (1-2 problems)</li>
                  <li>• English proficiency and communication assessment</li>
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
                  <li>• Programming fundamentals (Java, Python, or C++)</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• DBMS concepts and SQL queries</li>
                  <li>• Project discussion and problem-solving</li>
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
                      Managerial Interview
                    </CardTitle>
                    <CardDescription>30-45 minutes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="ml-14 space-y-2 text-muted-foreground">
                  <li>• Behavioral questions (STAR format)</li>
                  <li>• Team dynamics and collaboration</li>
                  <li>• Situational problem-solving</li>
                  <li>• Healthcare domain awareness (basic)</li>
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
                  <li>• Introduction and background</li>
                  <li>• Why Optum? Why healthcare?</li>
                  <li>• Salary discussion and expectations</li>
                  <li>• Location preference and joining date</li>
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
                      <td className="p-3">Software Engineer</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹6-10 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Associate Analyst</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹4-6 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Senior Software Engineer</td>
                      <td className="p-3">3-5 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹14-20 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Lead Engineer</td>
                      <td className="p-3">5-8 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹22-35 LPA
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Principal Engineer / Manager</td>
                      <td className="p-3">10+ Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹40+ LPA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                * Benefits include comprehensive health insurance, annual
                bonuses, 401(k) equivalent, wellness programs, and tuition
                reimbursement.
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
                <h4 className="mb-2 font-semibold">Flexible Work</h4>
                <p className="text-sm text-muted-foreground">
                  Hybrid work model, flexible hours, and work-from-home options
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Learning & Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Optum Academy, certifications, and career development programs
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Healthcare Mission</h4>
                <p className="text-sm text-muted-foreground">
                  Purpose-driven work improving healthcare for millions
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
                Mock tests for Optum assessment
              </p>
            </Link>
            <Link
              href="/companies"
              className="block rounded-xl bg-background p-4 transition-shadow hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Explore Companies</h4>
              <p className="text-sm text-muted-foreground">
                Other healthcare tech companies
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
