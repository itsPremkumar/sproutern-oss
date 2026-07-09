'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Shield,
  BookOpen,
  TrendingUp,
  AlertCircle,
} from 'lucide-react';
import Link from 'next/link';

interface NegotiationTip {
  title: string;
  description: string;
  example?: string;
}

const negotiationTips: NegotiationTip[] = [
  {
    title: 'Research Market Rates',
    description:
      'Know the salary range for your role, location, and experience level before negotiating.',
    example:
      'Use Glassdoor, LinkedIn Salary, or AmbitionBox to find market rates.',
  },
  {
    title: 'Know Your Value',
    description:
      'List your achievements, skills, and unique contributions you bring to the role.',
    example: 'I increased sales by 30% in my previous role.',
  },
  {
    title: 'Let Them Make the First Offer',
    description:
      'If possible, let the employer state the salary range first to avoid underselling yourself.',
    example: 'Ask: "What is the salary range for this position?"',
  },
  {
    title: 'Consider Total Compensation',
    description:
      'Look beyond base salary - consider bonuses, stock options, benefits, and flexibility.',
    example: 'Remote work, extra vacation days, and learning budget add value.',
  },
  {
    title: 'Practice Your Pitch',
    description:
      'Rehearse your negotiation points and responses to common objections.',
    example: 'Role-play with a friend to build confidence.',
  },
  {
    title: 'Be Specific with Numbers',
    description:
      "Give a specific number rather than a range to show you've done your research.",
    example: 'Say "₹18,00,000" instead of "₹15-20 lakhs"',
  },
  {
    title: 'Get Everything in Writing',
    description:
      'Once you reach an agreement, ask for the offer letter with all details documented.',
    example:
      'Confirm joining bonus, variable pay, and probation terms in writing.',
  },
  {
    title: 'Be Prepared to Walk Away',
    description:
      'Know your minimum acceptable salary and be willing to decline if not met.',
    example: 'Have a backup plan or other offers in hand.',
  },
];

const salaryScripts = [
  {
    scenario: 'When Asked Salary Expectations First',
    response:
      "I'm open to discussing compensation. Could you share the budget range for this role? I want to ensure we're aligned before we proceed.",
  },
  {
    scenario: 'When the Offer is Below Expectations',
    response:
      'Thank you for the offer. Based on my research and experience, I was expecting something in the range of [X]. Is there flexibility to meet closer to that number?',
  },
  {
    scenario: 'When They Say Budget is Fixed',
    response:
      'I understand budget constraints. Could we explore other ways to bridge the gap - like a signing bonus, earlier review, or additional benefits?',
  },
  {
    scenario: 'When You Have Competing Offers',
    response:
      "I'm very excited about this opportunity. I do have another offer at [X]. Is there room to match or exceed that given my strong fit for this role?",
  },
];

export default function SalaryNegotiationClient() {
  const [currentSalary, setCurrentSalary] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [activeScript, setActiveScript] = useState<number | null>(null);

  const hikePercentage =
    currentSalary && expectedSalary
      ? (
          ((parseFloat(expectedSalary) - parseFloat(currentSalary)) /
            parseFloat(currentSalary)) *
          100
        ).toFixed(1)
      : '0';

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <DollarSign className="h-4 w-4" />
            Free Career Guide
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Salary Negotiation Guide
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Master the art of salary negotiation with proven strategies and
            ready-to-use scripts.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">8 Key Tips</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Ready Scripts</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Practical</span>
          </div>
        </div>

        {/* Hike Calculator */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="h-5 w-5" />
              Quick Hike Calculator
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Current CTC (₹)
                </label>
                <input
                  type="number"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(e.target.value)}
                  placeholder="e.g., 1000000"
                  className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Expected CTC (₹)
                </label>
                <input
                  type="number"
                  value={expectedSalary}
                  onChange={(e) => setExpectedSalary(e.target.value)}
                  placeholder="e.g., 1500000"
                  className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
                />
              </div>
              <div className="flex items-end">
                <div className="w-full rounded-lg bg-primary p-3 text-center text-primary-foreground">
                  <div className="text-sm opacity-80">Hike Percentage</div>
                  <div className="text-2xl font-bold">{hikePercentage}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Negotiation Tips */}
        <div className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <BookOpen className="h-6 w-6 text-primary" />
            Key Negotiation Strategies
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {negotiationTips.map((tip, i) => (
              <Card key={i}>
                <CardContent className="pt-4">
                  <h3 className="mb-2 font-semibold">
                    {i + 1}. {tip.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                  {tip.example && (
                    <p className="mt-2 text-sm italic text-primary">
                      💡 {tip.example}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ready Scripts */}
        <div className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <AlertCircle className="h-6 w-6 text-primary" />
            Ready-to-Use Scripts
          </h2>
          <div className="space-y-4">
            {salaryScripts.map((script, i) => (
              <Card
                key={i}
                className={`cursor-pointer transition-all ${activeScript === i ? 'border-primary' : ''}`}
                onClick={() => setActiveScript(activeScript === i ? null : i)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{script.scenario}</CardTitle>
                </CardHeader>
                {activeScript === i && (
                  <CardContent>
                    <div className="rounded-lg bg-muted/50 p-4">
                      <p className="italic">"{script.response}"</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Dos and Don'ts */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-300">
                ✅ Do's
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Research thoroughly before negotiating</li>
                <li>• Express enthusiasm for the role</li>
                <li>• Be confident but respectful</li>
                <li>• Ask for time to consider offers</li>
                <li>• Negotiate via email when possible</li>
                <li>• Focus on your value, not personal needs</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950">
            <CardHeader>
              <CardTitle className="text-red-700 dark:text-red-300">
                ❌ Don'ts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• Don't accept the first offer immediately</li>
                <li>• Don't lie about other offers</li>
                <li>• Don't make ultimatums</li>
                <li>• Don't reveal your current salary first</li>
                <li>• Don't negotiate too aggressively</li>
                <li>• Don't forget to negotiate non-salary benefits</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate take-home salary',
              },
              {
                title: 'Notice Period Calculator',
                href: '/tools/notice-period-calculator',
                desc: 'Plan your transition',
              },
              {
                title: 'Job Application Tracker',
                href: '/tools/job-application-tracker',
                desc: 'Track your applications',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
