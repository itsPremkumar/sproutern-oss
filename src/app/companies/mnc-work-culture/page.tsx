import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle2,
  Users,
  Building2,
  ArrowRight,
  Clock,
  TrendingUp,
  Target,
  Trophy,
  Calendar,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MNC Work Culture Guide | What to Expect in Your First Job',
  description:
    'Understand MNC work culture, team dynamics, work-life balance, growth opportunities, and what to expect in your first 90 days at top MNCs like TCS, Infosys, Wipro, Accenture, Google, Amazon, and Microsoft.',
  keywords:
    'MNC work culture, corporate culture, first job, MNC work environment, work life balance MNC, MNC team culture, corporate work culture',
  openGraph: {
    title: 'MNC Work Culture Guide',
    description:
      'Understand what to expect in your first MNC job and how to thrive in corporate culture.',
    url: 'https://sproutern.dpdns.org/companies/mnc-work-culture',
    type: 'website',
  },
};

export default function MNCWorkCulturePage() {
  const cultureAspects = [
    {
      title: 'Team Structure',
      description:
        'Hierarchical teams with clear reporting structures. Learn about team dynamics, collaboration, and communication.',
      icon: Users,
    },
    {
      title: 'Work-Life Balance',
      description:
        'Understanding work hours, flexibility, remote work policies, and maintaining work-life balance in MNCs.',
      icon: Clock,
    },
    {
      title: 'Growth Opportunities',
      description:
        'Career progression paths, training programs, skill development, and promotion cycles in MNCs.',
      icon: TrendingUp,
    },
    {
      title: 'Company Values',
      description:
        'Understanding company culture, values, mission, and how they impact daily work and career growth.',
      icon: Target,
    },
  ];

  const companyCultures = [
    {
      name: 'Service-Based MNCs',
      companies: 'TCS, Infosys, Wipro, Accenture, Cognizant',
      features: [
        'Structured work environment',
        'Clear hierarchy and processes',
        'Client-focused projects',
        'Stable career growth',
        'Training and certifications',
      ],
      color: 'border-blue-500',
    },
    {
      name: 'Product-Based MNCs',
      companies: 'Amazon, Google, Microsoft, Adobe',
      features: [
        'Innovation-focused culture',
        'Fast-paced environment',
        'Ownership and autonomy',
        'High learning curve',
        'Competitive compensation',
      ],
      color: 'border-orange-500',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl py-12">
      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Building2 className="mr-2 h-4 w-4" />
          MNC Work Culture Guide
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          MNC Work Culture Guide
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Understand MNC work culture, team dynamics, work-life balance, and
          what to expect in your first job at top multinational companies.
        </p>
      </div>

      {/* Culture Aspects */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Key Aspects of MNC Work Culture
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {cultureAspects.map((aspect, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <aspect.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">{aspect.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{aspect.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Culture Comparison */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">
          Service-Based vs Product-Based Culture
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {companyCultures.map((culture, i) => (
            <Card
              key={i}
              className={`border-l-4 ${culture.color}`}
            >
              <CardHeader>
                <CardTitle className="text-xl">{culture.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  {culture.companies}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {culture.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* First 90 Days */}
      <Card className="mb-16 border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Calendar className="h-6 w-6 text-primary" />
            Your First 90 Days at an MNC
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="mb-3 font-semibold">Days 1-30: Onboarding</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Company orientation</li>
                <li>Team introductions</li>
                <li>Training programs</li>
                <li>Understanding processes</li>
                <li>Setting up workspace</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Days 31-60: Learning</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Working on initial tasks</li>
                <li>Learning tools and systems</li>
                <li>Building relationships</li>
                <li>Understanding expectations</li>
                <li>Asking questions</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Days 61-90: Contributing</h4>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>Taking ownership</li>
                <li>Delivering results</li>
                <li>Proposing improvements</li>
                <li>Building reputation</li>
                <li>Setting career goals</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border-t pt-6">
            <Link
              href="/blog/mnc-onboarding-process-first-90-days"
              className="font-semibold text-primary hover:underline"
            >
              Read Complete First 90 Days Guide →
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Tips Section */}
      <Card className="mb-16 bg-muted/50">
        <CardContent className="p-8">
          <h3 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Tips to Thrive in MNC Culture
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Be Proactive:</strong> Take initiative, volunteer for
                  tasks, and show enthusiasm.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Communicate Effectively:</strong> Keep stakeholders
                  informed, ask questions, and provide updates.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Build Relationships:</strong> Network with colleagues,
                  mentors, and managers.
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Learn Continuously:</strong> Take advantage of
                  training programs and certifications.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Maintain Work-Life Balance:</strong> Set boundaries
                  and prioritize health.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <strong>Seek Feedback:</strong> Regularly ask for feedback and
                  work on improvements.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related Resources */}
      <div className="rounded-2xl bg-muted/50 p-8 text-center">
        <h3 className="mb-4 text-2xl font-bold">Related Resources</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="outline"
            asChild
          >
            <Link href="/blog/mnc-work-culture-first-job">
              Work Culture Blog
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <Link href="/blog/mnc-onboarding-process-first-90-days">
              Onboarding Guide
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
          >
            <Link href="/blog/mnc-career-growth-path-promotion">
              Career Growth Guide
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
