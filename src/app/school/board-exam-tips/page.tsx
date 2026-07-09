import { Metadata } from 'next';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Board Exam Tips | CBSE ICSE State Board Preparation',
  description:
    'Complete board exam preparation tips for Class 10 and 12 students - CBSE, ICSE, and State Boards. Study strategies, time management, and last-minute tips.',
  keywords:
    'board exam tips, CBSE preparation, ICSE tips, board exam study plan, class 10 12 preparation',
};

const strategies = [
  {
    title: 'Start Early',
    desc: 'Begin revision at least 3 months before exams. Complete syllabus 1 month early.',
    icon: Clock,
  },
  {
    title: 'NCERT First',
    desc: 'Master NCERT textbooks thoroughly. 80% questions come from here.',
    icon: BookOpen,
  },
  {
    title: 'Previous Papers',
    desc: 'Solve last 10 years papers. Identify important topics and patterns.',
    icon: Target,
  },
  {
    title: 'Time Management',
    desc: 'Practice completing papers in 3 hours. Leave 15 min for revision.',
    icon: Clock,
  },
];

const subjectTips = [
  {
    subject: 'Mathematics',
    tips: [
      'Practice daily',
      'Learn formulas by heart',
      'Solve NCERT examples',
      'Focus on step marking',
      'Attempt all questions',
    ],
  },
  {
    subject: 'Science',
    tips: [
      'Understand concepts',
      'Draw diagrams neatly',
      'Learn definitions',
      'Practice numericals',
      'Revise experiments',
    ],
  },
  {
    subject: 'English',
    tips: [
      'Read comprehension carefully',
      'Practice letter/essay formats',
      'Revise grammar rules',
      'Quote from text in answers',
      'Manage time well',
    ],
  },
  {
    subject: 'Social Science',
    tips: [
      'Make point-wise notes',
      'Learn maps thoroughly',
      'Understand dates & events',
      'Use keywords',
      'Practice map work daily',
    ],
  },
];

const lastMinuteTips = [
  "Don't start new topics in last week",
  'Revise formulas and diagrams',
  'Get proper sleep before exam',
  'Keep admit card and stationery ready',
  'Reach center 30 min early',
  'Read question paper fully first',
  'Attempt easy questions first',
  'Write neatly and underline keywords',
];

const commonMistakes = [
  'Skipping NCERT for reference books',
  'Not attempting all questions',
  'Poor time management in exam',
  'Ignoring practical/internal marks',
  'Last-minute cramming',
  'Not reading questions carefully',
];

export default function BoardExamTipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <BookOpen className="mr-1 h-3 w-3" />
            Exam Tips
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Board Exam Preparation Tips
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Proven strategies for Class 10 & 12 CBSE, ICSE, and State Board
            exams.
          </p>
        </div>
      </section>

      <section className="container py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6" />
          Core Strategies
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {strategies.map((s) => (
            <Card key={s.title}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-bold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container bg-muted/30 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6" />
          Subject-Wise Tips
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {subjectTips.map((s) => (
            <Card key={s.subject}>
              <CardContent className="p-6">
                <h3 className="mb-3 font-bold text-primary">{s.subject}</h3>
                <ul className="space-y-2">
                  {s.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              Last-Minute Tips
            </h2>
            <div className="space-y-3">
              {lastMinuteTips.map((tip, i) => (
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
            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Mistakes to Avoid
            </h2>
            <div className="space-y-3">
              {commonMistakes.map((m, i) => (
                <Card
                  key={i}
                  className="border-red-200 dark:border-red-800"
                >
                  <CardContent className="flex items-center gap-3 p-4">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <span className="text-sm">{m}</span>
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
            <Target className="mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-2xl font-bold">
              Track Your Exam Countdown
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="secondary"
                asChild
              >
                <Link href="/tools/exam-countdown">
                  Exam Countdown Timer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-white bg-transparent hover:bg-white/10"
                asChild
              >
                <Link href="/tools/marks-calculator">Marks Calculator</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
