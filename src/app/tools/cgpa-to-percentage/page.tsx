'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Plus,
  Trash2,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';
import {
  ToolFAQSection,
  cgpaCalculatorFAQs,
} from '@/components/tools/tool-faq-section';

interface Subject {
  name: string;
  creditHours: number;
  gradePoints: number;
}

export default function CGPAToPercentageClient() {
  const [cgpa, setCgpa] = useState('8.5');
  const [scale, setScale] = useState<10 | 4>(10);
  const [conversionMode, setConversionMode] = useState<
    'cgpaToPercent' | 'percentToCgpa'
  >('cgpaToPercent');
  const [percentage, setPercentage] = useState('85');

  // SGPA Calculator
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: 'Subject 1', creditHours: 4, gradePoints: 9 },
    { name: 'Subject 2', creditHours: 3, gradePoints: 8 },
    { name: 'Subject 3', creditHours: 4, gradePoints: 10 },
  ]);

  // CGPA to Percentage calculation
  const cgpaResult = useMemo(() => {
    const cgpaNum = parseFloat(cgpa) || 0;

    if (scale === 10) {
      // Common formula: Percentage = CGPA × 9.5 (Anna University pattern)
      const percentage = cgpaNum * 9.5;
      const alternativePercent = (cgpaNum - 0.5) * 10; // Another common formula
      return {
        percentage,
        alternativePercent,
        cgpa: cgpaNum,
      };
    } else {
      // 4.0 scale to percentage
      const percentage = (cgpaNum / 4) * 100;
      return {
        percentage,
        alternativePercent: percentage,
        cgpa: cgpaNum,
      };
    }
  }, [cgpa, scale]);

  // Percentage to CGPA calculation
  const percentResult = useMemo(() => {
    const percentNum = parseFloat(percentage) || 0;

    if (scale === 10) {
      const cgpaValue = percentNum / 9.5;
      return {
        cgpa: Math.min(10, cgpaValue),
        percentage: percentNum,
      };
    } else {
      const cgpaValue = (percentNum / 100) * 4;
      return {
        cgpa: Math.min(4, cgpaValue),
        percentage: percentNum,
      };
    }
  }, [percentage, scale]);

  // SGPA Calculator
  const sgpaResult = useMemo(() => {
    const totalCreditPoints = subjects.reduce(
      (sum, s) => sum + s.creditHours * s.gradePoints,
      0,
    );
    const totalCredits = subjects.reduce((sum, s) => sum + s.creditHours, 0);
    const sgpa = totalCredits > 0 ? totalCreditPoints / totalCredits : 0;

    return {
      sgpa: sgpa.toFixed(2),
      totalCredits,
      totalCreditPoints,
    };
  }, [subjects]);

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        name: `Subject ${subjects.length + 1}`,
        creditHours: 3,
        gradePoints: 8,
      },
    ]);
  };

  const removeSubject = (index: number) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((_, i) => i !== index));
    }
  };

  const updateSubject = (
    index: number,
    field: keyof Subject,
    value: string | number,
  ) => {
    setSubjects(
      subjects.map((s, i) => (i === index ? { ...s, [field]: value } : s)),
    );
  };

  const gradeOptions =
    scale === 10
      ? [10, 9, 8, 7, 6, 5, 4, 0]
      : [4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0, 0];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <GraduationCap className="h-4 w-4" />
            Free Academic Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            CGPA Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Convert CGPA to Percentage and vice versa. Calculate SGPA with
            credit hours.
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
            <span className="text-sm font-medium">Multiple Scales</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">SGPA Calculator</span>
          </div>
        </div>

        {/* Scale Selection */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center justify-center gap-4 py-4">
            <span className="text-sm font-medium">Grade Scale:</span>
            <div className="flex gap-2">
              <Button
                variant={scale === 10 ? 'default' : 'outline'}
                onClick={() => setScale(10)}
              >
                10.0 Scale
              </Button>
              <Button
                variant={scale === 4 ? 'default' : 'outline'}
                onClick={() => setScale(4)}
              >
                4.0 Scale
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Converter */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* CGPA to Percentage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                CGPA → Percentage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Enter CGPA
                </label>
                <input
                  type="number"
                  value={cgpa}
                  onChange={(e) => setCgpa(e.target.value)}
                  step="0.01"
                  min="0"
                  max={scale}
                  className="w-full rounded-lg border bg-muted/50 p-4 text-2xl font-bold outline-none"
                  placeholder={`0 - ${scale}`}
                />
              </div>

              <div className="rounded-lg bg-primary p-4 text-primary-foreground">
                <div className="text-sm opacity-80">
                  Percentage (×9.5 formula)
                </div>
                <div className="text-3xl font-bold">
                  {cgpaResult.percentage.toFixed(2)}%
                </div>
              </div>

              {scale === 10 && (
                <div className="rounded-lg bg-muted/50 p-4">
                  <div className="text-sm text-muted-foreground">
                    Alternative ((CGPA-0.5)×10)
                  </div>
                  <div className="text-xl font-semibold">
                    {cgpaResult.alternativePercent.toFixed(2)}%
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Percentage to CGPA */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                Percentage → CGPA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Enter Percentage
                </label>
                <input
                  type="number"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  step="0.1"
                  min="0"
                  max="100"
                  className="w-full rounded-lg border bg-muted/50 p-4 text-2xl font-bold outline-none"
                  placeholder="0 - 100"
                />
              </div>

              <div className="rounded-lg bg-primary p-4 text-primary-foreground">
                <div className="text-sm opacity-80">CGPA (÷9.5 formula)</div>
                <div className="text-3xl font-bold">
                  {percentResult.cgpa.toFixed(2)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* SGPA Calculator */}
        <Card className="mt-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <GraduationCap className="h-5 w-5" />
              SGPA Calculator
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={addSubject}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Subject
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {subjects.map((subject, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 items-center gap-2"
                >
                  <input
                    type="text"
                    value={subject.name}
                    onChange={(e) => updateSubject(i, 'name', e.target.value)}
                    className="col-span-4 rounded-lg border bg-muted/50 p-2 outline-none"
                    placeholder="Subject name"
                  />
                  <input
                    type="number"
                    value={subject.creditHours}
                    onChange={(e) =>
                      updateSubject(
                        i,
                        'creditHours',
                        parseInt(e.target.value) || 0,
                      )
                    }
                    min="1"
                    max="10"
                    className="col-span-2 rounded-lg border bg-muted/50 p-2 text-center outline-none"
                    placeholder="Credits"
                  />
                  <select
                    value={subject.gradePoints}
                    onChange={(e) =>
                      updateSubject(
                        i,
                        'gradePoints',
                        parseFloat(e.target.value),
                      )
                    }
                    className="col-span-4 rounded-lg border bg-background p-2"
                  >
                    {gradeOptions.map((g) => (
                      <option
                        key={g}
                        value={g}
                      >
                        {g} points
                      </option>
                    ))}
                  </select>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSubject(i)}
                    disabled={subjects.length <= 1}
                    className="col-span-2"
                  >
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-primary p-4 text-primary-foreground">
              <div className="flex justify-between">
                <span>Total Credits: {sgpaResult.totalCredits}</span>
                <span>Credit Points: {sgpaResult.totalCreditPoints}</span>
              </div>
              <div className="mt-2 text-3xl font-bold">
                SGPA: {sgpaResult.sgpa}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grade Reference */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-lg">Grade Reference Table</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium">10-Point Scale</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>O (Outstanding)</span>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A+ (Excellent)</span>
                    <span>9</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A (Very Good)</span>
                    <span>8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+ (Good)</span>
                    <span>7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B (Above Average)</span>
                    <span>6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C (Average)</span>
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-medium">4-Point Scale</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>A (Excellent)</span>
                    <span>4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A-</span>
                    <span>3.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B+</span>
                    <span>3.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B</span>
                    <span>3.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B-</span>
                    <span>2.7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C+</span>
                    <span>2.3</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section for SEO */}
        <ToolFAQSection
          toolName="CGPA to Percentage Calculator"
          faqs={cgpaCalculatorFAQs}
          toolUrl="https://www.sproutern.com/tools/cgpa-to-percentage"
        />

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'GPA Calculator',
                href: '/tools/gpa-calculator',
                desc: 'Calculate GPA',
              },
              {
                title: 'Percentage Calculator',
                href: '/tools/percentage-calculator',
                desc: 'Calculate percentages',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate salary',
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
