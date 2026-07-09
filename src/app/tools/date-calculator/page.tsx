'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export default function DateCalculatorPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [difference, setDifference] = useState<{
    days: number;
    weeks: number;
    months: number;
    years: number;
    hours: number;
    minutes: number;
    workingDays: number;
  } | null>(null);

  // Add/Subtract days
  const [baseDate, setBaseDate] = useState('');
  const [daysToAdd, setDaysToAdd] = useState('');
  const [resultDate, setResultDate] = useState<string | null>(null);

  const content = toolsSEOContent['date-calculator'];

  const calculateDifference = () => {
    if (!startDate || !endDate) return;

    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = Math.abs(end.getTime() - start.getTime());

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor(diffMs / (1000 * 60));

    // Calculate months and years
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    months += years * 12;

    // Calculate working days (excluding weekends)
    let workingDays = 0;
    const current = new Date(start);
    while (current <= end) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        workingDays++;
      }
      current.setDate(current.getDate() + 1);
    }

    setDifference({
      days,
      weeks,
      months,
      years: Math.floor(months / 12),
      hours,
      minutes,
      workingDays,
    });
  };

  const addDays = () => {
    if (!baseDate || !daysToAdd) return;

    const date = new Date(baseDate);
    date.setDate(date.getDate() + parseInt(daysToAdd));
    setResultDate(
      date.toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Calendar className="h-4 w-4" />
            Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">Date Calculator</h1>
          <p className="text-xl text-muted-foreground">
            Calculate difference between dates or add/subtract days
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Date Difference Calculator */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <Clock className="h-4 w-4" />
                Date Difference
              </h3>
              <div>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>End Date</Label>
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button
                onClick={calculateDifference}
                className="w-full"
              >
                Calculate Difference
              </Button>

              {difference && (
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <div className="text-xl font-bold">{difference.days}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <div className="text-xl font-bold">{difference.weeks}</div>
                    <div className="text-xs text-muted-foreground">Weeks</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <div className="text-xl font-bold">{difference.months}</div>
                    <div className="text-xs text-muted-foreground">Months</div>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-center">
                    <div className="text-xl font-bold">
                      {difference.workingDays}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Working Days
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Add/Subtract Days */}
          <Card>
            <CardContent className="space-y-4 pt-6">
              <h3 className="flex items-center gap-2 font-semibold">
                <ArrowRight className="h-4 w-4" />
                Add/Subtract Days
              </h3>
              <div>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  value={baseDate}
                  onChange={(e) => setBaseDate(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Days to Add (use negative to subtract)</Label>
                <Input
                  type="number"
                  placeholder="30"
                  value={daysToAdd}
                  onChange={(e) => setDaysToAdd(e.target.value)}
                  className="mt-1"
                />
              </div>
              <Button
                onClick={addDays}
                className="w-full"
              >
                Calculate Date
              </Button>

              {resultDate && (
                <div className="rounded-lg bg-primary/10 p-4 text-center">
                  <p className="text-lg font-semibold text-primary">
                    {resultDate}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="date-calculator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
