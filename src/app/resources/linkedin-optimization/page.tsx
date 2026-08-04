import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Linkedin,
  MessageSquare,
  PenTool,
  Search,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title:
    'LinkedIn Optimization Guide for Students | Headline, Summary and Profile Checklist',
  description:
    'Optimize your LinkedIn profile with a practical student-friendly guide covering headlines, summaries, projects, networking, and recruiter visibility.',
  keywords: [
    'linkedin optimization for students',
    'linkedin profile tips',
    'linkedin headline examples',
    'linkedin summary for students',
    'how to optimize linkedin profile',
    'linkedin profile checklist',
  ],
  alternates: {
    canonical: 'https://sproutern.dpdns.org/resources/linkedin-optimization',
  },
  openGraph: {
    title: 'LinkedIn Optimization Guide for Students',
    description:
      'Build a recruiter-friendly LinkedIn profile with better headlines, summaries, projects, and networking habits.',
    url: 'https://sproutern.dpdns.org/resources/linkedin-optimization',
    type: 'article',
  },
};

const profileChecklist = [
  {
    title: 'Headline',
    description:
      'Use role keywords, domain focus, and one clear value signal instead of only writing "Student".',
  },
  {
    title: 'About Section',
    description:
      'Tell a compact story: what you are learning, what you have built, and what kind of opportunities you want.',
  },
  {
    title: 'Projects',
    description:
      'Add measurable outcomes, tech stack, and links to portfolio, GitHub, or live demos where possible.',
  },
  {
    title: 'Experience',
    description:
      'Write action-focused bullet points that show impact, ownership, and results recruiters can understand quickly.',
  },
  {
    title: 'Skills',
    description:
      'Pin the skills you want to be found for, not every tool you have ever touched.',
  },
  {
    title: 'Visibility',
    description:
      'Stay active with thoughtful comments, simple progress posts, and regular profile refreshes.',
  },
];

const headlineExamples = [
  'Computer Science Student | React and Node.js Projects | Open to Software Internships',
  'Mechanical Engineering Student | CAD, EV Systems and Design Projects | Seeking Core Internships',
  'Marketing Student | Content Strategy, SEO and Social Campaigns | Building Brand Growth Skills',
];

const weeklyPlan = [
  'Refresh one profile section every Monday so your profile stays current.',
  'Comment on three posts from people in your target industry each week.',
  'Publish one learning update, project lesson, or internship reflection every week.',
  'Send two personalized connection requests to alumni, recruiters, or professionals you genuinely want to learn from.',
];

const commonMistakes = [
  'Using a vague headline like "Student at XYZ College" with no searchable role keywords.',
  'Leaving the about section empty or copying a generic AI-sounding paragraph.',
  'Listing projects without outcomes, links, or tools used.',
  'Sending blank connection requests and immediately asking for referrals.',
  'Going inactive for months and expecting recruiters to discover the profile anyway.',
];

const faqs = [
  {
    question: 'What should students write in a LinkedIn headline?',
    answer:
      'A strong student headline usually combines your target role, a skills cluster, and an outcome or focus area. Keep it specific enough that recruiters can instantly tell what you are aiming for.',
  },
  {
    question: 'Do I need a lot of experience to optimize LinkedIn?',
    answer:
      'No. Students can showcase coursework, projects, hackathons, leadership roles, certifications, volunteering, and internship responsibilities. LinkedIn is not just for full-time work history.',
  },
  {
    question: 'How often should I post on LinkedIn?',
    answer:
      'Consistency matters more than volume. One thoughtful post per week plus a few useful comments is enough to stay visible and build familiarity over time.',
  },
  {
    question: 'Should I connect with recruiters directly?',
    answer:
      'Yes, but personalize the request. Mention the role, the reason you are reaching out, or something specific about their company or post so the request feels relevant instead of automated.',
  },
  {
    question: 'Can LinkedIn actually help students get interviews?',
    answer:
      'Yes. A strong profile improves search visibility, helps with recruiter screening, supports referrals, and makes follow-up conversations after events or applications much easier.',
  },
];

export default function LinkedInOptimizationPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sproutern.dpdns.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://sproutern.dpdns.org/resources',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'LinkedIn Optimization',
        item: 'https://sproutern.dpdns.org/resources/linkedin-optimization',
      },
    ],
  };

  return (
    <div className="container py-12 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, faqSchema]),
        }}
      />

      <div className="mx-auto max-w-5xl">
        <section className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Linkedin className="h-4 w-4" />
            Recruiter Visibility Playbook
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            LinkedIn Optimization Guide for Students and Freshers
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Build a LinkedIn profile that clearly shows what you do, what you
            are learning, and why a recruiter or hiring manager should talk to
            you next.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-5 text-center">
              <Search className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-semibold">Searchable</p>
              <p className="text-sm text-muted-foreground">
                Use the role keywords recruiters look for
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <PenTool className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-semibold">Clear Story</p>
              <p className="text-sm text-muted-foreground">
                Turn projects and internships into concise proof
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <Users className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-semibold">Network Ready</p>
              <p className="text-sm text-muted-foreground">
                Make it easier to connect with alumni and recruiters
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 text-center">
              <Sparkles className="mx-auto mb-3 h-6 w-6 text-primary" />
              <p className="font-semibold">Active Profile</p>
              <p className="text-sm text-muted-foreground">
                Stay visible with lightweight weekly activity
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <CheckCircle2 className="h-6 w-6 text-primary" />
            The Profile Checklist That Matters Most
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {profileChecklist.map((item) => (
              <Card key={item.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Target className="h-6 w-6 text-primary" />
            Headline Formula and Examples
          </h2>
          <p className="mb-6 text-muted-foreground">
            A reliable formula is
            {' '}
            <strong>target role + skills or domain + proof of direction</strong>.
          </p>
          <div className="space-y-4">
            {headlineExamples.map((example) => (
              <Card key={example}>
                <CardContent className="p-5">
                  <p className="font-medium">{example}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-14 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                About Section Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>Write three short parts instead of one oversized paragraph:</p>
              <p>
                1. What you are currently studying, building, or exploring.
              </p>
              <p>
                2. What problems, domains, or tools excite you most.
              </p>
              <p>
                3. What opportunities or collaborations you are open to right
                now.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                15-Minute Weekly Visibility Plan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {weeklyPlan.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="mb-14">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <AlertTriangle className="h-6 w-6 text-primary" />
            Common LinkedIn Mistakes to Avoid
          </h2>
          <div className="rounded-2xl border bg-muted/30 p-6">
            <ul className="space-y-3">
              {commonMistakes.map((mistake) => (
                <li
                  key={mistake}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500" />
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-14 rounded-2xl bg-primary/5 p-8">
          <h2 className="mb-4 text-2xl font-bold">Use These Related Resources</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'LinkedIn Generator',
                href: '/tools/linkedin-generator',
                description: 'Create stronger headlines and summaries faster.',
              },
              {
                title: 'Networking Guide',
                href: '/resources/networking',
                description: 'Turn profile views into real conversations.',
              },
              {
                title: 'Professional Email Guide',
                href: '/blog/how-to-write-professional-email-recruiter',
                description: 'Write outreach that feels personal and clear.',
              },
              {
                title: 'LinkedIn Tips Blog',
                href: '/blog/linkedin-profile-tips-get-noticed-recruiters',
                description:
                  'Go deeper on visibility, posting, and recruiter signals.',
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="rounded-xl border bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-semibold">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <CardContent className="p-5">
                  <h3 className="mb-2 font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Make Your Profile Easier to Notice
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Start with a sharper headline, clearer project bullets, and a few
            intentional networking habits. Small profile improvements compound
            quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
            >
              <Link href="/tools/linkedin-generator">
                Try LinkedIn Generator
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/resources/networking">Read Networking Guide</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
