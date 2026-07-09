import { Metadata } from 'next';
import Link from 'next/link';
import {
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Heart,
  Briefcase,
  FileText,
  Users,
  Target,
  Shield,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Layoff Survival Guide | Job Loss Recovery',
  description:
    'Complete guide for handling layoffs - immediate steps, financial planning, resume gap explanation, job search strategies, and mental health tips.',
  keywords:
    'layoff survival guide, job loss tips, resume gap, laid off what to do, unemployment help',
  openGraph: {
    title: 'Layoff Survival Guide | Job Loss Recovery Tips',
    description:
      'Complete guide for handling layoffs - immediate steps, financial planning, resume gap explanation, and mental health tips.',
    type: 'article',
    url: 'https://www.sproutern.com/layoff-guide',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Layoff Survival Guide',
    description:
      'Complete guide for handling layoffs and bouncing back stronger.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/layoff-guide',
  },
};

const immediateSteps = [
  {
    title: 'Understand Severance',
    desc: 'Review severance package, final pay, and benefits continuation.',
  },
  {
    title: 'Collect Documents',
    desc: 'Get experience letter, relieving letter, payslips, Form 16.',
  },
  {
    title: 'File for Unemployment',
    desc: 'Check state unemployment benefits if applicable.',
  },
  {
    title: 'COBRA/Insurance',
    desc: 'Understand health insurance continuation options.',
  },
  {
    title: 'Update LinkedIn',
    desc: 'Set to "Open to Work" but frame positively.',
  },
  {
    title: 'Inform References',
    desc: 'Tell former managers you may use them as references.',
  },
];

const financialTips = [
  'Calculate your runway (savings ÷ monthly expenses)',
  'Cut non-essential subscriptions immediately',
  'Negotiate bills and EMI moratoriums if needed',
  "Don't touch emergency fund for first 2 months",
  'Consider freelance/consulting for income',
  'Apply for any eligible government benefits',
];

const resumeGapTips = [
  {
    situation: '"Why did you leave?"',
    response:
      '"The company underwent restructuring/downsizing that affected my role."',
  },
  {
    situation: '"What did you do during the gap?"',
    response:
      '"I used the time to upskill in [X], complete certifications, and work on personal projects."',
  },
  {
    situation: '"How do I explain 6+ months gap?"',
    response:
      'Focus on learnings: certifications, courses, freelance work, volunteering, or health/family reasons.',
  },
];

const mentalHealthTips = [
  'Remember: layoffs are not personal failures',
  'Maintain a routine - wake up at regular time',
  'Exercise and stay physically active',
  'Connect with friends and family daily',
  'Consider therapy if feeling overwhelmed',
  'Limit news/social media consumption',
  'Celebrate small wins in job search',
];

export default function LayoffGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Shield className="mr-1 h-3 w-3" />
            Support Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Layoff Survival Guide
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            You're not alone. Here's everything you need to bounce back
            stronger.
          </p>
        </div>
      </section>

      <section className="container py-8">
        <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
          <CardContent className="flex items-start gap-4 p-6">
            <Heart className="h-6 w-6 flex-shrink-0 text-blue-600" />
            <div>
              <p className="font-semibold text-blue-800 dark:text-blue-100">
                You Will Get Through This
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-200">
                Layoffs affect even the best performers. This is a temporary
                setback, not a reflection of your worth. Take it one day at a
                time.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="container py-8">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <AlertTriangle className="h-6 w-6 text-orange-600" />
          Immediate Steps (First 48 Hours)
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {immediateSteps.map((s, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Briefcase className="h-6 w-6" />
          Financial Survival Tips
        </h2>
        <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-2">
          {financialTips.map((tip, i) => (
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
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <FileText className="h-6 w-6" />
          How to Explain Resume Gap
        </h2>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resumeGapTips.map((t, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="mb-2 text-sm font-semibold text-primary">
                  {t.situation}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  {t.response}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-green-50/50 py-12 dark:bg-green-950/20">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Heart className="h-6 w-6 text-green-600" />
          Mental Health Matters
        </h2>
        <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2 lg:grid-cols-4">
          {mentalHealthTips.map((tip, i) => (
            <Card
              key={i}
              className="border-green-200 dark:border-green-800"
            >
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
            <Target className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Start Your Comeback</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/resume-builder">
                  Update Resume
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/career-switch">Consider Career Switch</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
