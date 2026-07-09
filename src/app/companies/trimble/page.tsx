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
  Cog,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Trimble Careers India - Interview & Salary Guide',
  description:
    'Complete guide to Trimble placements in India. Interview questions, salary details, selection process for technology and engineering roles.',
  keywords: [
    'Trimble careers India',
    'Trimble interview',
    'Trimble salary',
    'Trimble Chennai jobs',
  ],
  canonical: '/companies/trimble',
});

export default function TrimblePage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-950 dark:text-cyan-300">
            <Cog className="h-4 w-4" />
            Industrial Technology
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Trimble Careers India
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Complete guide to Trimble placements - Interview questions, salary
            breakdowns, and selection process for tech roles.
          </p>
        </div>

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
            <div className="mb-2 text-3xl font-bold text-primary">4 Rounds</div>
            <p className="text-sm text-muted-foreground">Selection Process</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">40+</div>
            <p className="text-sm text-muted-foreground">Years Legacy</p>
          </Card>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
          >
            <Link href="/tools/resume-score-checker">
              <CheckCircle className="mr-2 h-5 w-5" />
              Check Resume
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <a
              href="https://careers.trimble.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="mr-2 h-5 w-5" />
              Careers
            </a>
          </Button>
        </div>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Building2 className="h-6 w-6 text-primary" />
            About Trimble
          </h2>
          <Card>
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground">
                Trimble Inc. is a software, hardware, and services technology
                company transforming industries like construction, agriculture,
                transportation, and geospatial. Their India R&D centre is a key
                innovation hub.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Key Facts</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Founded: 1978 in Sunnyvale, California</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Employees: 12,000+ globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-green-600" />
                      <span>Revenue: $4+ Billion annually</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">India Locations</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Chennai (Primary R&D Hub)
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Pune
                    </li>
                    <li className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Hyderabad
                    </li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="secondary">Construction Tech</Badge>
                    <Badge variant="secondary">Geospatial</Badge>
                    <Badge variant="secondary">IoT</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Briefcase className="h-6 w-6 text-primary" />
            Roles for Freshers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Software</Badge>
                <CardTitle>Software Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    ₹8-12 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Chennai, Pune
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">QA</Badge>
                <CardTitle>QA Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    ₹6-8 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    60% throughout
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Chennai
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Badge className="mb-2 w-fit">Embedded</Badge>
                <CardTitle>Firmware Engineer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <IndianRupee className="h-4 w-4" />
                    ₹7-10 LPA
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    ECE/EEE preferred
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Chennai
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

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
                    <CardDescription>
                      75 minutes - Aptitude, Technical MCQs, Coding (1-2
                      problems)
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
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
                    <CardDescription>
                      60 minutes - DSA, OOPs, DBMS, Project Discussion
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
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
                    <CardDescription>
                      45 minutes - System Design basics, Deep-dive on projects
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    4
                  </div>
                  <div>
                    <CardTitle className="text-lg">HR Interview</CardTitle>
                    <CardDescription>
                      30 minutes - Behavioral, Salary, Location discussion
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <IndianRupee className="h-6 w-6 text-primary" />
            Salary Structure
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="p-3 text-left">Role</th>
                      <th className="p-3 text-left">Experience</th>
                      <th className="p-3 text-left">CTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">Software Engineer</td>
                      <td className="p-3">Fresher</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹8-12 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Senior Engineer</td>
                      <td className="p-3">3-5 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹16-24 LPA
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Lead Engineer</td>
                      <td className="p-3">6-8 Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹28-38 LPA
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3">Principal/Manager</td>
                      <td className="p-3">10+ Years</td>
                      <td className="p-3 font-semibold text-primary">
                        ₹45+ LPA
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Users className="h-6 w-6 text-primary" />
            Work Culture
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Work-Life Balance</h4>
                <p className="text-sm text-muted-foreground">
                  Flexible hours, hybrid work options
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Innovation Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge tech in geospatial & IoT
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h4 className="mb-2 font-semibold">Collaborative</h4>
                <p className="text-sm text-muted-foreground">
                  Flat hierarchy, open communication
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="rounded-2xl bg-muted/50 p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/tools/aptitude-test"
              className="block rounded-xl bg-background p-4 hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Practice Aptitude</h4>
              <p className="text-sm text-muted-foreground">Mock tests</p>
            </Link>
            <Link
              href="/companies"
              className="block rounded-xl bg-background p-4 hover:shadow-md"
            >
              <h4 className="mb-1 font-semibold">Explore Companies</h4>
              <p className="text-sm text-muted-foreground">
                More career guides
              </p>
            </Link>
            <Link
              href="/resources/resume-guide"
              className="block rounded-xl bg-background p-4 hover:shadow-md"
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
