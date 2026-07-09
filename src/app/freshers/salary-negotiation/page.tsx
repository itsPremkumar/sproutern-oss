import { Metadata } from 'next';
import Link from 'next/link';
import {
  Banknote,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Target,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Salary Negotiation Guide for Freshers',
  description:
    'Learn how to negotiate your first salary as a fresher. Tips, scripts, and strategies for getting the best offer.',
  keywords:
    'salary negotiation freshers, first job salary, negotiate salary, fresher salary tips',
  openGraph: {
    title: 'Salary Negotiation Guide for Freshers',
    description:
      'Learn how to negotiate your first salary with tips, scripts, and strategies for getting the best offer.',
    type: 'article',
    url: 'https://www.sproutern.com/freshers/salary-negotiation',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salary Negotiation Guide',
    description:
      'Get the salary you deserve with proven negotiation strategies.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/freshers/salary-negotiation',
  },
};

const doList = [
  'Research market rates before interviews',
  'Wait for them to make first offer',
  'Consider total compensation (not just base)',
  'Ask for time to think',
  'Be respectful and professional',
  'Get final offer in writing',
];
const dontList = [
  'Share your current/expected salary early',
  'Accept immediately without thinking',
  'Lie about other offers',
  'Be aggressive or demanding',
  'Negotiate after accepting',
  'Focus only on salary (ignore benefits)',
];

const scripts = [
  {
    situation: 'When asked expected salary',
    response:
      '"I\'m flexible and more interested in the role. What\'s the budget for this position?"',
  },
  {
    situation: 'When offer is lower than expected',
    response:
      '"Thank you for the offer. Based on my research and skills, I was expecting closer to [X]. Is there flexibility?"',
  },
  {
    situation: "When they can't increase base salary",
    response:
      '"I understand. Would it be possible to consider a signing bonus or earlier performance review?"',
  },
  {
    situation: 'When accepting the offer',
    response:
      '"I appreciate your flexibility. I\'m excited to join and contribute to the team. Please share the offer letter."',
  },
];

const components = [
  {
    name: 'Base Salary',
    desc: 'Fixed monthly/annual salary - negotiate this first',
  },
  { name: 'Variable Pay', desc: 'Performance bonus, typically 10-20% of base' },
  {
    name: 'Joining Bonus',
    desc: 'One-time payment - easier to negotiate than base',
  },
  { name: 'Stock Options', desc: 'Common in startups, vests over 3-4 years' },
  { name: 'Benefits', desc: 'Health insurance, food, transport allowances' },
  { name: 'Learning Budget', desc: 'Certifications, courses, books allowance' },
];

export default function SalaryNegotiationPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Banknote className="mr-1 h-3 w-3" />
            Career Guide
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Salary Negotiation for Freshers
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Get the salary you deserve with these proven strategies.
          </p>
        </div>
      </section>

      <section className="container py-12">
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

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center justify-center gap-2 text-center text-2xl font-bold">
          <Lightbulb className="h-6 w-6" />
          Negotiation Scripts
        </h2>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {scripts.map((s, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <p className="mb-2 text-sm font-medium text-primary">
                  {s.situation}
                </p>
                <p className="text-sm italic text-muted-foreground">
                  {s.response}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          Components to Negotiate
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {components.map((c, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <h3 className="mb-1 font-semibold">{c.name}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Banknote className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">Calculate Your Worth</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/salary-calculator">
                  Salary Calculator
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/companies">Company Salaries</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
