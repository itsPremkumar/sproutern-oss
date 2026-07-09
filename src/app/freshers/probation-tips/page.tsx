import { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  Lightbulb,
  Users,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Probation Period Guide for Freshers | What to Expect',
  description:
    'Complete guide to probation period for freshers - what to expect, how to succeed, common mistakes, and getting confirmed.',
  keywords:
    'probation period freshers, job probation tips, how to pass probation, fresher probation guide',
};

const whatToExpect = [
  { title: 'Duration', desc: '3-6 months typically, can extend in some cases' },
  { title: 'Evaluation', desc: 'Regular feedback from manager on performance' },
  {
    title: 'Notice Period',
    desc: 'Usually shorter (7-15 days) during probation',
  },
  { title: 'Benefits', desc: 'Some benefits may be limited during probation' },
  { title: 'Training', desc: 'Focus is on learning and adapting to role' },
  { title: 'Flexibility', desc: 'Company can terminate with shorter notice' },
];

const doList = [
  'Be punctual and reliable',
  'Ask questions when unsure',
  'Take notes in all meetings',
  'Meet deadlines consistently',
  'Show initiative and eagerness',
  'Build relationships with team',
  'Accept feedback positively',
  'Document your work and achievements',
];
const dontList = [
  "Don't take leaves frequently",
  "Don't miss deadlines without communication",
  "Don't gossip or complain",
  "Don't be defensive about feedback",
  "Don't compare with others openly",
  "Don't job hunt actively (visible LinkedIn)",
];

const successTips = [
  {
    title: 'First 30 Days',
    tips: [
      'Understand team dynamics',
      'Learn company culture',
      'Complete all training',
      'Set up 1:1 with manager',
    ],
  },
  {
    title: 'Days 31-60',
    tips: [
      'Take ownership of tasks',
      'Start contributing in meetings',
      'Identify a mentor',
      'Seek feedback proactively',
    ],
  },
  {
    title: 'Days 61-90',
    tips: [
      'Show independent work ability',
      'Document achievements',
      'Discuss goals with manager',
      'Request confirmation timeline',
    ],
  },
];

export default function ProbationTipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Clock className="mr-1 h-3 w-3" />
            Career Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Probation Period Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Everything freshers need to know about successfully completing
            probation.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          What to Expect
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whatToExpect.map((w) => (
            <Card key={w.title}>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-600">
              <CheckCircle className="h-6 w-6" />
              Do's
            </h2>
            <div className="space-y-3">
              {doList.map((item, i) => (
                <Card
                  key={i}
                  className="border-green-200 dark:border-green-800"
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-red-600">
              <AlertTriangle className="h-6 w-6" />
              Don'ts
            </h2>
            <div className="space-y-3">
              {dontList.map((item, i) => (
                <Card
                  key={i}
                  className="border-red-200 dark:border-red-800"
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    {item}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold">
          <Lightbulb className="h-6 w-6" />
          90-Day Success Roadmap
        </h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
          {successTips.map((period) => (
            <Card key={period.title}>
              <CardContent className="p-6">
                <h3 className="mb-4 font-bold text-primary">{period.title}</h3>
                <ul className="space-y-2">
                  {period.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Users className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">More Fresher Resources</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/freshers/first-job-guide">
                  First Job Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/freshers/salary-negotiation">
                  Salary Negotiation
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
