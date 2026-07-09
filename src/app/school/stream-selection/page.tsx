'use client';

import { useState } from 'react';
import {
  Compass,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Briefcase,
  Palette,
  FlaskConical,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: 'I enjoy solving mathematical problems and puzzles',
    category: 'science',
  },
  {
    id: 2,
    question: 'I am interested in how the human body works',
    category: 'medical',
  },
  {
    id: 3,
    question: 'I like reading about business, economics, and money',
    category: 'commerce',
  },
  {
    id: 4,
    question: 'I enjoy creative activities like writing, art, or music',
    category: 'arts',
  },
  {
    id: 5,
    question: 'I am curious about how machines and technology work',
    category: 'science',
  },
  {
    id: 6,
    question: 'I prefer memorizing facts over solving problems',
    category: 'arts',
  },
  {
    id: 7,
    question: 'I am comfortable with numbers and calculations',
    category: 'commerce',
  },
  {
    id: 8,
    question: 'I want to help people through healthcare',
    category: 'medical',
  },
  {
    id: 9,
    question: 'I dream of starting my own business someday',
    category: 'commerce',
  },
  {
    id: 10,
    question: 'I am passionate about social issues and current affairs',
    category: 'arts',
  },
  {
    id: 11,
    question: 'I like conducting experiments and observing results',
    category: 'science',
  },
  {
    id: 12,
    question: 'I want a career with creative freedom',
    category: 'arts',
  },
];

const streamResults = {
  science: {
    name: 'Science (PCM)',
    icon: FlaskConical,
    color: 'bg-blue-50 text-blue-600',
    desc: 'Engineering, Technology, Research',
    careers: ['B.Tech/BE', 'B.Sc', 'Architecture', 'Defense'],
  },
  medical: {
    name: 'Science (PCB)',
    icon: FlaskConical,
    color: 'bg-green-50 text-green-600',
    desc: 'Medicine, Healthcare, Biology',
    careers: ['MBBS', 'BDS', 'Pharmacy', 'Biotechnology'],
  },
  commerce: {
    name: 'Commerce',
    icon: Briefcase,
    color: 'bg-yellow-50 text-yellow-600',
    desc: 'Business, Finance, Economics',
    careers: ['CA', 'CS', 'BBA/MBA', 'Banking'],
  },
  arts: {
    name: 'Arts/Humanities',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
    desc: 'Creative, Social Sciences, Law',
    careers: ['Law', 'Journalism', 'Design', 'Civil Services'],
  },
};

export default function StreamSelectionQuizPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (qId: number, score: number) => {
    setAnswers({ ...answers, [qId]: score });
  };

  const calculateResult = () => {
    const scores: Record<string, number> = {
      science: 0,
      medical: 0,
      commerce: 0,
      arts: 0,
    };
    questions.forEach((q) => {
      if (answers[q.id]) scores[q.category] += answers[q.id];
    });
    const maxCategory = Object.entries(scores).sort(
      (a, b) => b[1] - a[1],
    )[0][0];
    setResult(maxCategory);
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Compass className="mr-1 h-3 w-3" />
            Career Quiz
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Stream Selection Quiz
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Answer these questions to find which stream suits you best.
          </p>
        </div>
      </section>

      <div className="container py-8">
        {!result ? (
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Progress: {answeredCount}/{questions.length}
              </span>
              <div className="h-2 w-48 rounded-full bg-muted">
                <div
                  className="h-2 rounded-full bg-primary transition-all"
                  style={{
                    width: `${(answeredCount / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="space-y-4">
              {questions.map((q, i) => (
                <Card key={q.id}>
                  <CardContent className="p-4">
                    <p className="mb-3 font-medium">
                      {i + 1}. {q.question}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: 'Strongly Disagree', value: 1 },
                        { label: 'Disagree', value: 2 },
                        { label: 'Neutral', value: 3 },
                        { label: 'Agree', value: 4 },
                        { label: 'Strongly Agree', value: 5 },
                      ].map((opt) => (
                        <Button
                          key={opt.value}
                          size="sm"
                          variant={
                            answers[q.id] === opt.value ? 'default' : 'outline'
                          }
                          onClick={() => handleAnswer(q.id, opt.value)}
                        >
                          {opt.label}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button
              className="mt-6 w-full"
              size="lg"
              disabled={!allAnswered}
              onClick={calculateResult}
            >
              {allAnswered
                ? 'Get My Result'
                : `Answer all ${questions.length} questions`}
            </Button>
          </div>
        ) : (
          <div className="mx-auto max-w-xl text-center">
            <Card
              className={`${streamResults[result as keyof typeof streamResults].color} border-0`}
            >
              <CardContent className="p-8">
                <div className="mb-4 text-6xl">🎉</div>
                <h2 className="mb-2 text-2xl font-bold">
                  Your Recommended Stream
                </h2>
                <h3 className="mb-4 text-3xl font-extrabold">
                  {streamResults[result as keyof typeof streamResults].name}
                </h3>
                <p className="mb-4 text-lg">
                  {streamResults[result as keyof typeof streamResults].desc}
                </p>
                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  {streamResults[
                    result as keyof typeof streamResults
                  ].careers.map((c) => (
                    <Badge
                      key={c}
                      variant="secondary"
                    >
                      {c}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <Button asChild>
                    <Link href="/school/after-10th-guide">
                      View Detailed Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setResult(null);
                      setAnswers({});
                    }}
                  >
                    Retake Quiz
                  </Button>
                </div>
              </CardContent>
            </Card>

            <p className="mt-6 text-sm text-muted-foreground">
              This is a basic assessment. Consider your interests, aptitude, and
              talk to counselors for final decision.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
