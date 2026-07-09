import { Metadata } from 'next';
import Link from 'next/link';
import {
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  Lightbulb,
  BookOpen,
  Users,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Career Switch Guide | How to Change Industries',
  description:
    'Complete guide for switching careers - from IT to non-IT, engineering to MBA, and more. Step-by-step roadmap for career transitions.',
  keywords:
    'career switch guide, change industry, career transition, switch job fields, career change tips',
  openGraph: {
    title: 'Career Switch Guide | How to Change Industries Successfully',
    description:
      'Complete guide for switching careers. From IT to non-IT, engineering to MBA - get step-by-step roadmap for career transitions.',
    type: 'article',
    url: 'https://www.sproutern.com/career-switch',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Switch Guide',
    description:
      'Complete guide for switching careers with step-by-step roadmap.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/career-switch',
  },
};

const transitions = [
  {
    from: 'IT Services',
    to: 'Product Companies',
    difficulty: 'Medium',
    timeline: '6-12 months',
    skills: ['DSA/Algorithms', 'System Design', 'LeetCode Practice'],
  },
  {
    from: 'Engineering',
    to: 'MBA/Management',
    difficulty: 'Medium',
    timeline: '2-3 years',
    skills: ['CAT/GMAT Prep', 'Leadership Experience', 'Communication'],
  },
  {
    from: 'IT',
    to: 'Data Science',
    difficulty: 'Medium',
    timeline: '6-12 months',
    skills: ['Python', 'Statistics', 'Machine Learning'],
  },
  {
    from: 'Non-Tech',
    to: 'Tech',
    difficulty: 'High',
    timeline: '12-18 months',
    skills: ['Programming', 'DSA', 'Projects Portfolio'],
  },
  {
    from: 'IT',
    to: 'Product Management',
    difficulty: 'Medium',
    timeline: '6-12 months',
    skills: ['Product Sense', 'Analytics', 'Communication'],
  },
  {
    from: 'Corporate',
    to: 'Freelancing',
    difficulty: 'Medium',
    timeline: '3-6 months',
    skills: ['Client Management', 'Self-Marketing', 'Financial Planning'],
  },
];

const steps = [
  {
    step: 1,
    title: 'Self-Assessment',
    desc: 'Identify your transferable skills and interests. Take personality and aptitude tests.',
  },
  {
    step: 2,
    title: 'Research Target Field',
    desc: 'Understand job requirements, salary ranges, and growth prospects.',
  },
  {
    step: 3,
    title: 'Skill Gap Analysis',
    desc: 'List skills you need vs skills you have. Create a learning roadmap.',
  },
  {
    step: 4,
    title: 'Upskilling',
    desc: 'Take courses, certifications, and build projects in the new field.',
  },
  {
    step: 5,
    title: 'Build Portfolio',
    desc: 'Create work samples, case studies, or projects that demonstrate new skills.',
  },
  {
    step: 6,
    title: 'Network Building',
    desc: 'Connect with people in target industry. Attend meetups and events.',
  },
  {
    step: 7,
    title: 'Update Resume',
    desc: 'Reframe experience to highlight transferable skills for new role.',
  },
  {
    step: 8,
    title: 'Apply Strategically',
    desc: 'Target companies open to career changers. Consider lateral moves.',
  },
];

const tips = [
  'Start learning new skills while still employed',
  'Take a pay cut if needed for the right opportunity',
  'Consider consulting/freelance as bridge',
  'Get mentorship from someone in target field',
  'Be prepared to explain your transition story',
];

export default function CareerSwitchPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <RefreshCw className="mr-1 h-3 w-3" />
            Career Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Career Switch Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Complete roadmap for successfully transitioning to a new career
            field.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          Common Career Transitions
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left font-semibold">From</th>
                <th className="border p-3 text-left font-semibold">To</th>
                <th className="border p-3 text-left font-semibold">
                  Difficulty
                </th>
                <th className="border p-3 text-left font-semibold">Timeline</th>
                <th className="border p-3 text-left font-semibold">
                  Key Skills Needed
                </th>
              </tr>
            </thead>
            <tbody>
              {transitions.map((t, i) => (
                <tr
                  key={i}
                  className="hover:bg-muted/50"
                >
                  <td className="border p-3">{t.from}</td>
                  <td className="border p-3 font-medium">{t.to}</td>
                  <td className="border p-3">
                    <Badge
                      variant={
                        t.difficulty === 'High' ? 'destructive' : 'outline'
                      }
                    >
                      {t.difficulty}
                    </Badge>
                  </td>
                  <td className="border p-3">{t.timeline}</td>
                  <td className="border p-3 text-sm">{t.skills.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold">
          <BookOpen className="h-6 w-6" />
          8-Step Career Switch Roadmap
        </h2>
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Card key={s.step}>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {s.step}
                  </span>
                  <h3 className="font-semibold">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Lightbulb className="h-6 w-6" />
          Pro Tips
        </h2>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, i) => (
            <Card key={i}>
              <CardContent className="flex items-center gap-3 p-4">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">{tip}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Users className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Assess Your Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/skills-gap-analyzer">
                  Skills Gap Analyzer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/roadmaps">Career Roadmaps</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
