'use client';

import { useState } from 'react';
import {
  Timer,
  Calendar,
  Plus,
  Trash2,
  Bell,
  Clock,
  Target,
  GraduationCap,
  BookOpen,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

interface Exam {
  id: string;
  name: string;
  date: string;
  category: string;
}

const presetExams = [
  { name: 'GATE 2026', date: '2026-02-01', category: 'Engineering' },
  { name: 'CAT 2026', date: '2026-11-24', category: 'MBA' },
  { name: 'JEE Main 2026', date: '2026-01-22', category: 'Engineering' },
  { name: 'NEET 2026', date: '2026-05-04', category: 'Medical' },
  { name: 'UPSC CSE Prelims 2026', date: '2026-05-25', category: 'Government' },
  { name: 'UGC NET June 2026', date: '2026-06-15', category: 'Research' },
  { name: 'SSC CGL 2026', date: '2026-04-10', category: 'Government' },
  { name: 'IBPS PO 2026', date: '2026-10-12', category: 'Banking' },
  { name: 'GRE General', date: '2026-03-15', category: 'Study Abroad' },
  { name: 'TOEFL iBT', date: '2026-02-20', category: 'Study Abroad' },
  { name: 'IELTS Academic', date: '2026-02-15', category: 'Study Abroad' },
  { name: 'TCS NQT 2026', date: '2026-03-01', category: 'Placement' },
];

function calculateTimeRemaining(targetDate: string) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, expired: false };
}

function getUrgencyColor(days: number) {
  if (days <= 7) return 'text-red-600 bg-red-50 dark:bg-red-950';
  if (days <= 30) return 'text-orange-600 bg-orange-50 dark:bg-orange-950';
  if (days <= 90) return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950';
  return 'text-green-600 bg-green-50 dark:bg-green-950';
}

function CountdownCard({
  exam,
  onRemove,
}: {
  exam: Exam;
  onRemove: (id: string) => void;
}) {
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(exam.date),
  );

  useState(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(exam.date));
    }, 1000);
    return () => clearInterval(interval);
  });

  const urgencyClass = getUrgencyColor(timeRemaining.days);

  return (
    <Card className={`relative overflow-hidden ${urgencyClass}`}>
      <button
        onClick={() => onRemove(exam.id)}
        className="absolute right-2 top-2 rounded-full p-1 transition-colors hover:bg-black/10"
        aria-label="Remove exam"
      >
        <Trash2 className="h-4 w-4" />
      </button>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <Badge
            variant="outline"
            className="text-xs"
          >
            {exam.category}
          </Badge>
        </div>
        <h3 className="mb-1 text-lg font-bold">{exam.name}</h3>
        <p className="mb-4 text-sm opacity-75">
          {new Date(exam.date).toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {timeRemaining.expired ? (
          <div className="py-4 text-center">
            <AlertCircle className="mx-auto mb-2 h-8 w-8" />
            <p className="font-semibold">Exam Date Passed</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="rounded-lg bg-white/50 p-2 dark:bg-black/20">
              <div className="text-2xl font-bold">{timeRemaining.days}</div>
              <div className="text-xs uppercase">Days</div>
            </div>
            <div className="rounded-lg bg-white/50 p-2 dark:bg-black/20">
              <div className="text-2xl font-bold">{timeRemaining.hours}</div>
              <div className="text-xs uppercase">Hours</div>
            </div>
            <div className="rounded-lg bg-white/50 p-2 dark:bg-black/20">
              <div className="text-2xl font-bold">{timeRemaining.minutes}</div>
              <div className="text-xs uppercase">Mins</div>
            </div>
            <div className="rounded-lg bg-white/50 p-2 dark:bg-black/20">
              <div className="text-2xl font-bold">{timeRemaining.seconds}</div>
              <div className="text-xs uppercase">Secs</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function ExamCountdownPage() {
  const [exams, setExams] = useState<Exam[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExam, setNewExam] = useState({
    name: '',
    date: '',
    category: 'Other',
  });
  const content = toolsSEOContent['exam-countdown'];

  // Load from localStorage on mount
  useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('examCountdowns');
      if (saved) {
        setExams(JSON.parse(saved));
      }
    }
  });

  const saveExams = (updatedExams: Exam[]) => {
    setExams(updatedExams);
    if (typeof window !== 'undefined') {
      localStorage.setItem('examCountdowns', JSON.stringify(updatedExams));
    }
  };

  const addExam = (name: string, date: string, category: string) => {
    const exam: Exam = {
      id: Date.now().toString(),
      name,
      date,
      category,
    };
    saveExams([...exams, exam]);
  };

  const removeExam = (id: string) => {
    saveExams(exams.filter((e) => e.id !== id));
  };

  const addPresetExam = (preset: (typeof presetExams)[0]) => {
    addExam(preset.name, preset.date, preset.category);
  };

  const handleAddCustomExam = () => {
    if (newExam.name && newExam.date) {
      addExam(newExam.name, newExam.date, newExam.category);
      setNewExam({ name: '', date: '', category: 'Other' });
      setShowAddForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Timer className="h-4 w-4" />
            Free Exam Countdown Tool
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Exam Countdown Timer
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Track multiple exam dates with live countdowns. Stay motivated and
            never miss an important deadline.
          </p>
        </div>
      </section>

      <div className="container py-8">
        {/* Quick Add Presets */}
        <section className="mb-8">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <GraduationCap className="h-5 w-5" />
            Quick Add Popular Exams
          </h2>
          <div className="flex flex-wrap gap-2">
            {presetExams.map((preset) => (
              <Button
                key={preset.name}
                variant="outline"
                size="sm"
                onClick={() => addPresetExam(preset)}
                disabled={exams.some((e) => e.name === preset.name)}
              >
                <Plus className="mr-1 h-3 w-3" />
                {preset.name}
              </Button>
            ))}
          </div>
        </section>

        {/* Add Custom Exam */}
        <section className="mb-8">
          {!showAddForm ? (
            <Button
              onClick={() => setShowAddForm(true)}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Custom Exam
            </Button>
          ) : (
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle className="text-lg">Add Custom Exam</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="examName">Exam Name</Label>
                  <Input
                    id="examName"
                    placeholder="e.g., GATE 2026"
                    value={newExam.name}
                    onChange={(e) =>
                      setNewExam({ ...newExam, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="examDate">Exam Date</Label>
                  <Input
                    id="examDate"
                    type="date"
                    value={newExam.date}
                    onChange={(e) =>
                      setNewExam({ ...newExam, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="examCategory">Category</Label>
                  <select
                    id="examCategory"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={newExam.category}
                    onChange={(e) =>
                      setNewExam({ ...newExam, category: e.target.value })
                    }
                  >
                    <option>Engineering</option>
                    <option>Medical</option>
                    <option>MBA</option>
                    <option>Government</option>
                    <option>Banking</option>
                    <option>Study Abroad</option>
                    <option>Placement</option>
                    <option>Research</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleAddCustomExam}>Add Exam</Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Active Countdowns */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Clock className="h-5 w-5" />
            Your Exam Countdowns
          </h2>
          {exams.length === 0 ? (
            <Card className="p-8 text-center">
              <Calendar className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="mb-2 font-semibold">No Exams Added Yet</h3>
              <p className="mb-4 text-muted-foreground">
                Add exams from the presets above or create a custom countdown.
              </p>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {exams
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime(),
                )
                .map((exam) => (
                  <CountdownCard
                    key={exam.id}
                    exam={exam}
                    onRemove={removeExam}
                  />
                ))}
            </div>
          )}
        </section>

        {/* Tips Section */}
        <section className="mt-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <Target className="h-5 w-5" />
            Study Tips Based on Time Remaining
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-l-4 border-l-red-500 p-4">
              <h3 className="mb-2 font-semibold text-red-600">
                Less than 7 Days
              </h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Focus on revision only</li>
                <li>• Solve previous year papers</li>
                <li>• Avoid learning new topics</li>
                <li>• Get proper sleep</li>
              </ul>
            </Card>
            <Card className="border-l-4 border-l-orange-500 p-4">
              <h3 className="mb-2 font-semibold text-orange-600">7-30 Days</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Complete syllabus quickly</li>
                <li>• Start mock tests</li>
                <li>• Focus on weak areas</li>
                <li>• Create short notes</li>
              </ul>
            </Card>
            <Card className="border-l-4 border-l-yellow-500 p-4">
              <h3 className="mb-2 font-semibold text-yellow-600">1-3 Months</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Follow a structured plan</li>
                <li>• Balance all subjects</li>
                <li>• Regular practice tests</li>
                <li>• Build strong concepts</li>
              </ul>
            </Card>
            <Card className="border-l-4 border-l-green-500 p-4">
              <h3 className="mb-2 font-semibold text-green-600">3+ Months</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Deep conceptual study</li>
                <li>• Cover entire syllabus</li>
                <li>• Build foundation strong</li>
                <li>• Explore multiple resources</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* International Study Abroad Exams Section */}
        <section className="mt-12">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
            <GraduationCap className="h-5 w-5" />
            🌍 International Study Abroad Exams
          </h2>
          <p className="mb-6 text-muted-foreground">
            Planning to study abroad? Here's everything you need to know about
            the major standardized tests required for international admissions.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* GRE */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">📚</span>
                <h3 className="font-bold">GRE General</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> Graduate school admissions
                  (Masters/PhD)
                </p>
                <p>
                  <strong>Sections:</strong> Verbal, Quantitative, Analytical
                  Writing
                </p>
                <p>
                  <strong>Score Range:</strong> 260-340 (ideal: 320+)
                </p>
                <p>
                  <strong>Cost:</strong> $220 USD
                </p>
                <p>
                  <strong>Validity:</strong> 5 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 2-4 months
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Top universities expect 320+ for competitive programs
                </p>
              </div>
            </Card>

            {/* GMAT */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold">GMAT</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> MBA and business school admissions
                </p>
                <p>
                  <strong>Sections:</strong> Verbal, Quantitative, Integrated
                  Reasoning, AWA
                </p>
                <p>
                  <strong>Score Range:</strong> 200-800 (ideal: 700+)
                </p>
                <p>
                  <strong>Cost:</strong> $275 USD
                </p>
                <p>
                  <strong>Validity:</strong> 5 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 3-6 months
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Top MBA programs like Harvard, Wharton expect 720+
                </p>
              </div>
            </Card>

            {/* IELTS */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🇬🇧</span>
                <h3 className="font-bold">IELTS Academic</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> English proficiency (UK, Canada,
                  Australia preferred)
                </p>
                <p>
                  <strong>Sections:</strong> Listening, Reading, Writing,
                  Speaking
                </p>
                <p>
                  <strong>Score Range:</strong> 1-9 bands (ideal: 7.0+)
                </p>
                <p>
                  <strong>Cost:</strong> ₹16,250 / $244 USD
                </p>
                <p>
                  <strong>Validity:</strong> 2 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 1-3 months
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Most universities require overall 6.5-7.0 with no band below
                  6.0
                </p>
              </div>
            </Card>

            {/* TOEFL */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🇺🇸</span>
                <h3 className="font-bold">TOEFL iBT</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> English proficiency (US universities
                  preferred)
                </p>
                <p>
                  <strong>Sections:</strong> Reading, Listening, Speaking,
                  Writing
                </p>
                <p>
                  <strong>Score Range:</strong> 0-120 (ideal: 100+)
                </p>
                <p>
                  <strong>Cost:</strong> $200-$250 USD
                </p>
                <p>
                  <strong>Validity:</strong> 2 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 1-3 months
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Top US universities typically require 100+ score
                </p>
              </div>
            </Card>

            {/* PTE */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">💻</span>
                <h3 className="font-bold">PTE Academic</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> English proficiency (Australia/NZ/UK
                  popular)
                </p>
                <p>
                  <strong>Sections:</strong> Speaking & Writing, Reading,
                  Listening
                </p>
                <p>
                  <strong>Score Range:</strong> 10-90 (ideal: 65+)
                </p>
                <p>
                  <strong>Cost:</strong> ₹15,900 / $215 USD
                </p>
                <p>
                  <strong>Validity:</strong> 2 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 1-2 months
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Computer-based, results in 2 days - great for quick results
                </p>
              </div>
            </Card>

            {/* Duolingo */}
            <Card className="p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">🦉</span>
                <h3 className="font-bold">Duolingo English Test</h3>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Purpose:</strong> English proficiency (alternative to
                  IELTS/TOEFL)
                </p>
                <p>
                  <strong>Sections:</strong> Adaptive test - Reading, Writing,
                  Speaking, Listening
                </p>
                <p>
                  <strong>Score Range:</strong> 10-160 (ideal: 120+)
                </p>
                <p>
                  <strong>Cost:</strong> $59 USD
                </p>
                <p>
                  <strong>Validity:</strong> 2 years
                </p>
                <p>
                  <strong>Prep Time:</strong> 2-4 weeks
                </p>
                <p className="text-xs italic text-muted-foreground">
                  Affordable, take at home, accepted by 4,000+ universities
                </p>
              </div>
            </Card>
          </div>

          {/* Score Target Table */}
          <div className="mt-8 overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left font-semibold">
                    University Tier
                  </th>
                  <th className="p-3 text-left font-semibold">GRE</th>
                  <th className="p-3 text-left font-semibold">GMAT</th>
                  <th className="p-3 text-left font-semibold">IELTS</th>
                  <th className="p-3 text-left font-semibold">TOEFL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Top 20 (MIT, Stanford, etc.)</td>
                  <td className="p-3">325+</td>
                  <td className="p-3">730+</td>
                  <td className="p-3">7.5+</td>
                  <td className="p-3">105+</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3">Top 50 Universities</td>
                  <td className="p-3">315-325</td>
                  <td className="p-3">700-730</td>
                  <td className="p-3">7.0+</td>
                  <td className="p-3">100+</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Top 100 Universities</td>
                  <td className="p-3">305-315</td>
                  <td className="p-3">650-700</td>
                  <td className="p-3">6.5+</td>
                  <td className="p-3">90+</td>
                </tr>
                <tr className="border-t bg-muted/50">
                  <td className="p-3">Other Good Universities</td>
                  <td className="p-3">300+</td>
                  <td className="p-3">600+</td>
                  <td className="p-3">6.0+</td>
                  <td className="p-3">80+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="exam-countdown"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
