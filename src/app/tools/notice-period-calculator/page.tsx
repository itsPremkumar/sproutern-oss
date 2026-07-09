'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Calculator,
  Copy,
  Check,
} from 'lucide-react';
import Link from 'next/link';

export default function NoticePeriodCalculatorClient() {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0],
  );
  const [noticeDays, setNoticeDays] = useState(30);
  const [excludeWeekends, setExcludeWeekends] = useState(false);
  const [excludeHolidays, setExcludeHolidays] = useState(false);
  const [copied, setCopied] = useState(false);

  const calculateEndDate = () => {
    const start = new Date(startDate);
    let daysToAdd = noticeDays;
    let currentDate = new Date(start);
    let addedDays = 0;

    while (addedDays < daysToAdd) {
      currentDate.setDate(currentDate.getDate() + 1);
      const dayOfWeek = currentDate.getDay();

      if (excludeWeekends && (dayOfWeek === 0 || dayOfWeek === 6)) {
        continue;
      }
      addedDays++;
    }

    return currentDate;
  };

  const endDate = calculateEndDate();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const daysRemaining = () => {
    const today = new Date();
    const end = new Date(endDate);
    const diff = Math.ceil(
      (end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );
    return Math.max(0, diff);
  };

  const weeksRemaining = Math.floor(daysRemaining() / 7);
  const remainingDays = daysRemaining() % 7;

  const copyDates = async () => {
    const text = `Notice Period Details
Start Date: ${formatDate(new Date(startDate))}
Notice Period: ${noticeDays} days
Last Working Day: ${formatDate(endDate)}
Days Remaining: ${daysRemaining()} days`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const commonNoticePeriods = [15, 30, 45, 60, 90];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Notice Period Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate your last working day based on your notice period. Plan
            your transition smoothly.
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
            <span className="text-sm font-medium">Instant Calc</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Weekend Option</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Copy Results</span>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                Enter Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Resignation Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full rounded-lg border bg-muted/50 p-4 outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Notice Period (Days)
                </label>
                <input
                  type="number"
                  value={noticeDays}
                  onChange={(e) =>
                    setNoticeDays(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  min="1"
                  className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  {commonNoticePeriods.map((days) => (
                    <Button
                      key={days}
                      variant="outline"
                      size="sm"
                      onClick={() => setNoticeDays(days)}
                      className={noticeDays === days ? 'border-primary' : ''}
                    >
                      {days} days
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={excludeWeekends}
                    onChange={(e) => setExcludeWeekends(e.target.checked)}
                    className="h-5 w-5"
                  />
                  <span>Exclude weekends (Sat, Sun)</span>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-primary">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Your Timeline</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={copyDates}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="text-sm text-muted-foreground">
                  Resignation Date
                </div>
                <div className="text-lg font-semibold">
                  {formatDate(new Date(startDate))}
                </div>
              </div>

              <div className="rounded-lg bg-primary p-4 text-primary-foreground">
                <div className="text-sm opacity-80">Last Working Day</div>
                <div className="text-2xl font-bold">{formatDate(endDate)}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-950">
                  <div className="text-3xl font-bold text-blue-600">
                    {daysRemaining()}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Days Remaining
                  </div>
                </div>
                <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-950">
                  <div className="text-3xl font-bold text-green-600">
                    {weeksRemaining}w {remainingDays}d
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Weeks + Days
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">
                  Notice Period
                </div>
                <div className="text-xl font-semibold">
                  {noticeDays} calendar days{' '}
                  {excludeWeekends && '(excluding weekends)'}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Notice Period Tips</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Check Your Contract',
                desc: 'Verify the exact notice period mentioned in your employment contract',
              },
              {
                title: 'Negotiate if Needed',
                desc: 'Many companies allow notice period buyout or early release',
              },
              {
                title: 'Plan Handover',
                desc: 'Create a detailed handover document for a smooth transition',
              },
              {
                title: 'Clear Dues',
                desc: 'Settle any pending leaves, expenses, or company assets',
              },
            ].map((tip) => (
              <Card key={tip.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate your salary',
              },
              {
                title: 'Job Application Tracker',
                href: '/tools/job-application-tracker',
                desc: 'Track applications',
              },
              {
                title: 'Salary Negotiation',
                href: '/tools/salary-negotiation',
                desc: 'Negotiation tips',
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
