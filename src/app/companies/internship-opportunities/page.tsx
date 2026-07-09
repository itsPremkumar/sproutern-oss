import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  GraduationCap,
  Globe,
  Briefcase,
  Calendar,
  Users,
  Star,
  ThumbsUp,
  ThumbsDown,
  TrendingUp,
  Search,
  Mail,
  Code2,
  Laptop2,
  Building,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = getPageSEO('internship-opportunities');

export default function InternshipOpportunitiesPage() {
  const schemas = getPageSchema('internship-opportunities');

  return (
    <div className="container mx-auto max-w-5xl py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />

      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <GraduationCap className="mr-2 h-4 w-4" />
          Student & Fresher Internship Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          How to Get{' '}
          <span className="text-primary">Internship Opportunities</span>
          <br className="hidden md:block" />
          <span className="mt-2 block text-2xl font-semibold text-muted-foreground md:text-4xl">
            in Top MNC Companies
          </span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Secure paid internships at Google, Amazon, TCS, and more. Learn how to
          apply, crack the interview, and convert your internship into a
          full-time job (PPO).
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Button
            size="lg"
            className="h-12 px-8 text-lg"
          >
            Browse Internships
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-lg"
            asChild
          >
            <Link href="/companies/mnc-placement-guide">
              Full-Time Placement Guide
            </Link>
          </Button>
        </div>
      </div>

      {/* Why Internships Matter */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Why You MUST Do an Internship?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-950/20">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">
                Pre-Placement Offer (PPO)
              </h3>
              <p className="text-muted-foreground">
                The easiest way to get a job at a top MNC. Perform well during
                your 2-6 month internship, and walk away with a full-time offer
                letter before graduation.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-transparent dark:from-green-950/20">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <Code2 className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Real-World Experience</h3>
              <p className="text-muted-foreground">
                College projects are different from production code. Learn Git,
                Agile, CI/CD, and how to write scalable code in a real team.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-transparent dark:from-purple-950/20">
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Networking</h3>
              <p className="text-muted-foreground">
                Connect with senior engineers and managers. Even if you don't
                get a PPO, their referral can help you land a job elsewhere.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Internships */}
      <section
        className="mb-20 scroll-mt-20"
        id="types"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            1
          </div>
          <h2 className="text-3xl font-bold">Types of MNC Internships</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                Summer Internships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-muted-foreground">
                <strong>Duration:</strong> 2 months (May-July)
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Eligibility:</strong> 3rd Year Students (Pre-final year)
              </p>
              <p className="text-sm">
                Most popular. Companies like Google, Microsoft, and Goldman
                Sachs hire for this role 6-8 months in advance (Aug-Oct).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop2 className="h-5 w-5 text-blue-500" />
                Winter / 6-Month Internships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-muted-foreground">
                <strong>Duration:</strong> 4-6 months (Jan-June)
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Eligibility:</strong> Final Year Students
              </p>
              <p className="text-sm">
                Common in colleges that allow a full semester off. High chance
                of conversion to full-time (FTE).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-green-500" />
                Virtual / Remote Internships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-muted-foreground">
                <strong>Duration:</strong> Flexible
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Eligibility:</strong> Any Year
              </p>
              <p className="text-sm">
                Programs like Microsoft Engage, JP Morgan Code for Good, or
                Forage virtual experiences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5 text-purple-500" />
                Industrial Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-muted-foreground">
                <strong>Duration:</strong> 4-6 weeks
              </p>
              <p className="mb-2 text-muted-foreground">
                <strong>Eligibility:</strong> 2nd/3rd Year
              </p>
              <p className="text-sm">
                Usually unpaid or paid by the student. Common in PSU and core
                engineering companies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Apply */}
      <section
        className="mb-20 scroll-mt-20"
        id="apply"
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
            2
          </div>
          <h2 className="text-3xl font-bold">
            How to Apply for MNC Internships
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col items-start gap-6 rounded-xl border bg-card p-6 md:flex-row md:p-8">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
              <Globe className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold">
                1. Official Career Pages (The Gold Mine)
              </h3>
              <p className="mb-4 text-muted-foreground">
                Don't rely on third-party sites. Go to{' '}
                <code>careers.google.com</code> or <code>amazon.jobs</code>.
                Filter by "Student" or "Intern".
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-muted px-2 py-1 text-xs">
                  Set Job Alerts
                </span>
                <span className="rounded bg-muted px-2 py-1 text-xs">
                  Check Weekly
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-xl border bg-card p-6 md:flex-row md:p-8">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
              <Users className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold">
                2. LinkedIn & Cold Messaging
              </h3>
              <p className="mb-4 text-muted-foreground">
                Search for "Hiring Interns" or "Summer Analyst". Connect with
                recruiters and alumni. Send a personalized note:{' '}
                <em>
                  "Hi, I'm a 3rd-year student skilled in React. I saw an opening
                  for..."
                </em>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-xl border bg-card p-6 md:flex-row md:p-8">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
              <Code2 className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold">
                3. Hackathons & Coding Challenges
              </h3>
              <p className="mb-4 text-muted-foreground">
                Companies like TCS (CodeVita), Infosys (HackWithInfy), and
                Flipkart (GRiD) hire directly through contests. Win the contest
                &rarr; Get the Interview.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 rounded-xl border bg-card p-6 md:flex-row md:p-8">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-700">
              <Mail className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold">
                4. Cold Emailing (For Startups)
              </h3>
              <p className="mb-4 text-muted-foreground">
                Find the CTO or Founder's email (use tools like Hunter.io). Send
                a concise email with your resume and a link to your best
                project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Typical Internship Hiring Timeline
        </h2>
        <div className="relative ml-4 space-y-8 border-l-2 border-muted pl-8 md:ml-auto md:mr-auto md:w-2/3">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
            <h3 className="text-xl font-bold">July - August</h3>
            <p className="text-muted-foreground">
              Preparation Phase. Build Resume. Start DSA.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
            <h3 className="text-xl font-bold">September - November</h3>
            <p className="text-muted-foreground">
              <strong>Peak Hiring Season.</strong> Top MNCs visit campuses and
              open applications.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full border-4 border-background bg-primary" />
            <h3 className="text-xl font-bold">January - March</h3>
            <p className="text-muted-foreground">
              Winter Hiring. Startups and mid-sized companies hire for summer.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mb-20 max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">Internship FAQs</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {[
            {
              q: 'Do MNCs pay for internships?',
              a: 'Yes! Top MNCs pay very well. Amazon pays ~₹80k/month, Google ~₹1L/month. Service-based MNCs like TCS/Infosys usually have unpaid or low-stipend internships (₹10k-15k).',
            },
            {
              q: 'Can a 1st or 2nd year student get an internship?',
              a: "It's harder but possible. Focus on startups or open-source programs like Google Summer of Code (GSoC). Big MNCs usually prefer 3rd-year students.",
            },
            {
              q: 'Is it okay to do an unpaid internship?',
              a: 'If the learning curve is steep and the brand is good, YES. But avoid unpaid internships where you are just doing data entry or repetitive work.',
            },
            {
              q: 'How to manage internship with college classes?',
              a: "Look for 'Work from Home' or part-time internships. Discuss with your college HOD for attendance relaxation if you get a prestigious offer.",
            },
          ].map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
            >
              <AccordionTrigger className="text-left font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Final CTA */}
      <div className="rounded-2xl border border-border bg-muted/50 p-8 text-center md:p-12">
        <h2 className="mb-4 text-3xl font-bold">
          Don't Wait for the "Perfect" Time
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          The best time to apply was yesterday. The second best time is NOW.
          Start building your profile today.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
          >
            <Link href="/companies/application-process">
              See Application Guide
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/tools/resume-builder">Build Resume</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
