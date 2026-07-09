import { Metadata } from 'next';
import Link from 'next/link';
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  Briefcase,
  Scale,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Notice Period Negotiation Guide | How to Negotiate',
  description:
    'How to negotiate notice period in job change - strategies for buyout, early release, and handling long notice periods in IT companies.',
  keywords:
    'notice period negotiation, notice period buyout, early release, IT job notice period, job change notice period',
};

const commonPeriods = [
  {
    type: 'Fresher/Probation',
    period: '7-15 days',
    companies: 'Most companies',
  },
  {
    type: 'Junior (0-3 years)',
    period: '30-60 days',
    companies: 'IT services companies',
  },
  {
    type: 'Senior (3+ years)',
    period: '60-90 days',
    companies: 'Product companies, MNCs',
  },
  {
    type: 'Leadership/Critical',
    period: '90-180 days',
    companies: 'Senior management roles',
  },
];

const negotiationStrategies = [
  {
    title: 'Early Release Request',
    desc: 'Request manager for early release citing personal reasons or new opportunity',
    success: 'Medium',
  },
  {
    title: 'Notice Period Buyout',
    desc: 'New company pays your current employer to release you early',
    success: 'High',
  },
  {
    title: 'Leave Adjustment',
    desc: 'Use accumulated paid leave to reduce effective notice period',
    success: 'High',
  },
  {
    title: 'Hybrid Working',
    desc: 'Work remotely during notice while onboarding at new job (risky)',
    success: 'Low',
  },
  {
    title: 'Garden Leave',
    desc: 'Request paid leave for last few weeks if handover is complete',
    success: 'Medium',
  },
];

const tips = [
  'Negotiate notice period BEFORE accepting the offer',
  'Always leave on good terms - IT industry is small',
  'Document all handover properly',
  'Get relieving letter and experience letter',
  'Complete all exit formalities timely',
  "Don't badmouth current employer",
  'Maintain relationships with colleagues',
  'Clear all dues and return company assets',
];

const legalAspects = [
  {
    aspect: 'Breach of Contract',
    desc: 'Leaving before notice period can be breach of employment contract',
  },
  {
    aspect: 'Forfeiture of Benefits',
    desc: 'May lose pending variable pay, bonuses, or gratuity',
  },
  {
    aspect: 'Background Check Impact',
    desc: 'Negative feedback during verification for future jobs',
  },
  {
    aspect: 'Legal Action',
    desc: 'Rare, but companies can take legal action for critical roles',
  },
];

export default function NoticePeriodPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Clock className="mr-1 h-3 w-3" />
            Career Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Notice Period Negotiation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            How to handle and negotiate notice periods when changing jobs.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Clock className="h-6 w-6" />
          Common Notice Periods
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {commonPeriods.map((p) => (
            <Card key={p.type}>
              <CardContent className="p-4 text-center">
                <p className="mb-1 text-2xl font-bold text-primary">
                  {p.period}
                </p>
                <p className="font-medium">{p.type}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {p.companies}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          Negotiation Strategies
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {negotiationStrategies.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{s.title}</h3>
                  <Badge
                    variant={
                      s.success === 'High'
                        ? 'default'
                        : s.success === 'Medium'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {s.success}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-green-600">
              <CheckCircle className="h-6 w-6" />
              Best Practices
            </h2>
            <div className="space-y-3">
              {tips.map((tip, i) => (
                <Card key={i}>
                  <CardContent className="flex items-center gap-3 p-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">{tip}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-orange-600">
              <Scale className="h-6 w-6" />
              Legal Considerations
            </h2>
            <div className="space-y-3">
              {legalAspects.map((l, i) => (
                <Card
                  key={i}
                  className="border-orange-200 dark:border-orange-800"
                >
                  <CardContent className="p-4">
                    <h3 className="mb-1 text-sm font-semibold">{l.aspect}</h3>
                    <p className="text-sm text-muted-foreground">{l.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Planning a Job Change?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/freshers/salary-negotiation">
                  Salary Negotiation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/tools/ats-checker">ATS Checker</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
