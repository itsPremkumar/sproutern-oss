'use client';

import { useState } from 'react';
import { Calculator, BookOpen, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

interface Subject {
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  totalTopics: number;
  completedTopics: number;
}

export default function StudyHoursCalculatorPage() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: '', difficulty: 'medium', totalTopics: 10, completedTopics: 0 },
  ]);
  const [examDate, setExamDate] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [result, setResult] = useState<{
    total: number;
    daily: number;
    feasible: boolean;
    subjects: { name: string; hours: number }[];
  } | null>(null);

  const content = toolsSEOContent['study-hours-calculator'];

  const addSubject = () =>
    setSubjects([
      ...subjects,
      { name: '', difficulty: 'medium', totalTopics: 10, completedTopics: 0 },
    ]);
  const removeSubject = (i: number) =>
    setSubjects(subjects.filter((_, idx) => idx !== i));
  const updateSubject = (
    i: number,
    field: keyof Subject,
    value: string | number,
  ) => {
    setSubjects(
      subjects.map((s, idx) => (idx === i ? { ...s, [field]: value } : s)),
    );
  };

  const calculate = () => {
    const difficultyMultiplier = { easy: 1, medium: 1.5, hard: 2 };
    const hoursPerTopic = 2; // Base hours per topic

    const subjectHours = subjects
      .filter((s) => s.name)
      .map((s) => {
        const remainingTopics = s.totalTopics - s.completedTopics;
        const hours =
          remainingTopics * hoursPerTopic * difficultyMultiplier[s.difficulty];
        return { name: s.name, hours: Math.round(hours) };
      });

    const totalHours = subjectHours.reduce((sum, s) => sum + s.hours, 0);
    const daysUntilExam = examDate
      ? Math.ceil(
          (new Date(examDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
        )
      : 30;
    const dailyHoursNeeded = Math.round((totalHours / daysUntilExam) * 10) / 10;
    const feasible = dailyHoursNeeded <= hoursPerDay;

    setResult({
      total: totalHours,
      daily: dailyHoursNeeded,
      feasible,
      subjects: subjectHours,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Calculator className="mr-1 h-3 w-3" />
            Study Tool
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Study Hours Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Calculate how many hours you need to study for each subject.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Enter Your Subjects
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjects.map((s, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 gap-2 rounded-lg border p-3 md:grid-cols-5"
                >
                  <Input
                    placeholder="Subject name"
                    value={s.name}
                    onChange={(e) => updateSubject(i, 'name', e.target.value)}
                  />
                  <select
                    className="rounded-md border border-input bg-background px-3 py-2"
                    value={s.difficulty}
                    onChange={(e) =>
                      updateSubject(i, 'difficulty', e.target.value as any)
                    }
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                  <Input
                    type="number"
                    placeholder="Total topics"
                    value={s.totalTopics}
                    onChange={(e) =>
                      updateSubject(
                        i,
                        'totalTopics',
                        parseInt(e.target.value) || 0,
                      )
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Completed"
                    value={s.completedTopics}
                    onChange={(e) =>
                      updateSubject(
                        i,
                        'completedTopics',
                        parseInt(e.target.value) || 0,
                      )
                    }
                  />
                  {subjects.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeSubject(i)}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                onClick={addSubject}
              >
                + Add Subject
              </Button>

              <div className="grid gap-4 pt-4 md:grid-cols-2">
                <div>
                  <Label>Exam Date</Label>
                  <Input
                    type="date"
                    value={examDate}
                    onChange={(e) => setExamDate(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Available Hours/Day</Label>
                  <Input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) =>
                      setHoursPerDay(parseInt(e.target.value) || 6)
                    }
                  />
                </div>
              </div>

              <Button
                onClick={calculate}
                className="w-full"
              >
                Calculate Study Hours
              </Button>
            </CardContent>
          </Card>

          {result && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Your Study Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-3xl font-bold text-primary">
                      {result.total}
                    </p>
                    <p className="text-sm text-muted-foreground">Total Hours</p>
                  </div>
                  <div className="rounded-lg bg-muted p-4">
                    <p className="text-3xl font-bold text-primary">
                      {result.daily}
                    </p>
                    <p className="text-sm text-muted-foreground">Hours/Day</p>
                  </div>
                  <div
                    className={`rounded-lg p-4 ${result.feasible ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'}`}
                  >
                    <p
                      className={`text-lg font-bold ${result.feasible ? 'text-green-600' : 'text-red-600'}`}
                    >
                      {result.feasible ? 'Achievable' : 'Tight'}
                    </p>
                    <p className="text-sm text-muted-foreground">Plan Status</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {result.subjects.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg border p-3"
                    >
                      <span className="font-medium">{s.name}</span>
                      <Badge>{s.hours} hours</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="study-hours-calculator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
