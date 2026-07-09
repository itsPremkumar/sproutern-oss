'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Clock,
  CheckCircle,
  Users,
  Shield,
  Plus,
  Minus,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

type CalculationMode = 'add' | 'subtract' | 'difference';

export default function TimeCalculatorClient() {
  const [mode, setMode] = useState<CalculationMode>('add');

  // Time 1
  const [hours1, setHours1] = useState('8');
  const [minutes1, setMinutes1] = useState('30');
  const [seconds1, setSeconds1] = useState('0');

  // Time 2 (for adding/subtracting)
  const [hours2, setHours2] = useState('2');
  const [minutes2, setMinutes2] = useState('15');
  const [seconds2, setSeconds2] = useState('0');

  const totalSeconds1 = useMemo(() => {
    return (
      (parseInt(hours1) || 0) * 3600 +
      (parseInt(minutes1) || 0) * 60 +
      (parseInt(seconds1) || 0)
    );
  }, [hours1, minutes1, seconds1]);

  const totalSeconds2 = useMemo(() => {
    return (
      (parseInt(hours2) || 0) * 3600 +
      (parseInt(minutes2) || 0) * 60 +
      (parseInt(seconds2) || 0)
    );
  }, [hours2, minutes2, seconds2]);

  const result = useMemo(() => {
    let resultSeconds: number;

    switch (mode) {
      case 'add':
        resultSeconds = totalSeconds1 + totalSeconds2;
        break;
      case 'subtract':
        resultSeconds = Math.abs(totalSeconds1 - totalSeconds2);
        break;
      case 'difference':
        resultSeconds = Math.abs(totalSeconds1 - totalSeconds2);
        break;
      default:
        resultSeconds = 0;
    }

    const hours = Math.floor(resultSeconds / 3600);
    const minutes = Math.floor((resultSeconds % 3600) / 60);
    const seconds = resultSeconds % 60;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    return {
      totalSeconds: resultSeconds,
      hours,
      minutes,
      seconds,
      days,
      remainingHours,
      formatted: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`,
      inMinutes: Math.floor(resultSeconds / 60),
      inHours: (resultSeconds / 3600).toFixed(2),
    };
  }, [totalSeconds1, totalSeconds2, mode]);

  const TimeInput = ({
    h,
    m,
    s,
    setH,
    setM,
    setS,
    label,
  }: {
    h: string;
    m: string;
    s: string;
    setH: (v: string) => void;
    setM: (v: string) => void;
    setS: (v: string) => void;
    label: string;
  }) => (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <input
            type="number"
            value={h}
            onChange={(e) => setH(e.target.value)}
            min="0"
            className="w-full rounded-lg border bg-muted/50 p-3 text-center text-xl font-bold outline-none"
          />
          <div className="mt-1 text-center text-xs text-muted-foreground">
            Hours
          </div>
        </div>
        <div>
          <input
            type="number"
            value={m}
            onChange={(e) => setM(e.target.value)}
            min="0"
            max="59"
            className="w-full rounded-lg border bg-muted/50 p-3 text-center text-xl font-bold outline-none"
          />
          <div className="mt-1 text-center text-xs text-muted-foreground">
            Minutes
          </div>
        </div>
        <div>
          <input
            type="number"
            value={s}
            onChange={(e) => setS(e.target.value)}
            min="0"
            max="59"
            className="w-full rounded-lg border bg-muted/50 p-3 text-center text-xl font-bold outline-none"
          />
          <div className="mt-1 text-center text-xs text-muted-foreground">
            Seconds
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Clock className="h-4 w-4" />
            Free Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Time Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Add, subtract, and calculate differences between time durations
            easily.
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
            <span className="text-sm font-medium">Instant</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Multiple Modes</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Conversions</span>
          </div>
        </div>

        {/* Mode Selection */}
        <Card className="mb-6">
          <CardContent className="flex justify-center gap-2 py-4">
            <Button
              variant={mode === 'add' ? 'default' : 'outline'}
              onClick={() => setMode('add')}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Time
            </Button>
            <Button
              variant={mode === 'subtract' ? 'default' : 'outline'}
              onClick={() => setMode('subtract')}
              className="gap-2"
            >
              <Minus className="h-4 w-4" />
              Subtract Time
            </Button>
            <Button
              variant={mode === 'difference' ? 'default' : 'outline'}
              onClick={() => setMode('difference')}
              className="gap-2"
            >
              <Calculator className="h-4 w-4" />
              Difference
            </Button>
          </CardContent>
        </Card>

        {/* Calculator */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Time Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <TimeInput
                h={hours1}
                m={minutes1}
                s={seconds1}
                setH={setHours1}
                setM={setMinutes1}
                setS={setSeconds1}
                label="Time 1"
              />

              <div className="flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">
                  {mode === 'add' ? '+' : mode === 'subtract' ? '−' : '↕'}
                </span>
              </div>

              <TimeInput
                h={hours2}
                m={minutes2}
                s={seconds2}
                setH={setHours2}
                setM={setMinutes2}
                setS={setSeconds2}
                label="Time 2"
              />
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-lg">Result</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-primary p-6 text-center text-primary-foreground">
                <div className="text-sm opacity-80">
                  {mode === 'add'
                    ? 'Total Time'
                    : mode === 'subtract'
                      ? 'Remaining Time'
                      : 'Time Difference'}
                </div>
                <div className="font-mono text-4xl font-bold">
                  {result.formatted}
                </div>
              </div>

              {result.days > 0 && (
                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    Also equals
                  </div>
                  <div className="text-xl font-semibold">
                    {result.days} day{result.days > 1 ? 's' : ''},{' '}
                    {result.remainingHours} hour
                    {result.remainingHours !== 1 ? 's' : ''}, {result.minutes}{' '}
                    min
                  </div>
                </div>
              )}

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <div className="text-2xl font-bold">{result.hours}</div>
                  <div className="text-xs text-muted-foreground">Hours</div>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <div className="text-2xl font-bold">{result.inMinutes}</div>
                  <div className="text-xs text-muted-foreground">Minutes</div>
                </div>
                <div className="rounded-lg bg-muted/50 p-3 text-center">
                  <div className="text-2xl font-bold">
                    {result.totalSeconds}
                  </div>
                  <div className="text-xs text-muted-foreground">Seconds</div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="text-sm text-muted-foreground">
                  Decimal Hours
                </div>
                <div className="text-xl font-semibold">
                  {result.inHours} hours
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Use Cases */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Common Uses</h2>
          <div className="not-prose grid gap-4 md:grid-cols-3">
            {[
              { title: 'Work Hours', desc: 'Calculate total hours worked' },
              { title: 'Travel Time', desc: 'Add up journey durations' },
              { title: 'Project Tracking', desc: 'Track time spent on tasks' },
              { title: 'Sports Timing', desc: 'Calculate lap times' },
              { title: 'Cooking', desc: 'Add up preparation times' },
              { title: 'Scheduling', desc: 'Plan event durations' },
            ].map((use) => (
              <Card key={use.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{use.title}</h3>
                  <p className="text-sm text-muted-foreground">{use.desc}</p>
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
                title: 'Age Calculator',
                href: '/tools/age-calculator',
                desc: 'Calculate age',
              },
              {
                title: 'Date Calculator',
                href: '/tools/date-calculator',
                desc: 'Calculate dates',
              },
              {
                title: 'Calendar Generator',
                href: '/tools/calender-generator',
                desc: 'Generate calendars',
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
