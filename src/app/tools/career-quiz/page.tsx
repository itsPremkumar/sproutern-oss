'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Compass,
  CheckCircle,
  Clock,
  Users,
  Shield,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
} from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  text: string;
  options: { text: string; scores: Record<string, number> }[];
}

interface CareerProfile {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'How do you prefer to solve problems?',
    options: [
      {
        text: 'Analyze data and find patterns',
        scores: { tech: 3, analyst: 3, researcher: 2 },
      },
      {
        text: 'Think creatively and design solutions',
        scores: { designer: 3, creative: 3, marketing: 2 },
      },
      {
        text: 'Organize and manage resources',
        scores: { manager: 3, consultant: 2, business: 2 },
      },
      {
        text: 'Communicate and collaborate with others',
        scores: { hr: 3, sales: 2, marketing: 2 },
      },
    ],
  },
  {
    id: 2,
    text: 'What type of work environment do you prefer?',
    options: [
      {
        text: 'Quiet, focused, individual work',
        scores: { tech: 2, researcher: 3, analyst: 2 },
      },
      {
        text: 'Dynamic, creative studio',
        scores: { designer: 3, creative: 2, marketing: 1 },
      },
      {
        text: 'Fast-paced, results-oriented',
        scores: { sales: 3, consultant: 2, manager: 2 },
      },
      {
        text: 'Team-based, collaborative',
        scores: { hr: 2, manager: 2, business: 2 },
      },
    ],
  },
  {
    id: 3,
    text: 'What motivates you the most?',
    options: [
      {
        text: 'Building and creating new things',
        scores: { tech: 3, designer: 2, creative: 2 },
      },
      {
        text: 'Helping people grow and succeed',
        scores: { hr: 3, consultant: 2, manager: 1 },
      },
      {
        text: 'Achieving targets and goals',
        scores: { sales: 3, business: 2, manager: 2 },
      },
      {
        text: 'Discovering insights and knowledge',
        scores: { analyst: 3, researcher: 3, tech: 1 },
      },
    ],
  },
  {
    id: 4,
    text: 'How do you handle stress?',
    options: [
      {
        text: 'Break it down into smaller tasks',
        scores: { tech: 2, analyst: 2, manager: 2 },
      },
      {
        text: 'Talk it out with others',
        scores: { hr: 2, sales: 2, consultant: 1 },
      },
      {
        text: 'Focus on the end goal',
        scores: { business: 2, manager: 2, sales: 2 },
      },
      {
        text: 'Take a creative break',
        scores: { designer: 2, creative: 3, marketing: 1 },
      },
    ],
  },
  {
    id: 5,
    text: 'What skills do you want to develop?',
    options: [
      {
        text: 'Technical and coding skills',
        scores: { tech: 3, analyst: 2, researcher: 1 },
      },
      {
        text: 'Design and visual skills',
        scores: { designer: 3, creative: 2, marketing: 2 },
      },
      {
        text: 'Leadership and strategy',
        scores: { manager: 3, business: 3, consultant: 2 },
      },
      {
        text: 'Communication and negotiation',
        scores: { sales: 3, hr: 2, marketing: 2 },
      },
    ],
  },
];

const careerProfiles: CareerProfile[] = [
  {
    id: 'tech',
    title: 'Software Developer',
    description: 'Build applications and solve technical problems',
    skills: ['Programming', 'Problem Solving', 'System Design'],
    icon: '💻',
  },
  {
    id: 'designer',
    title: 'UX/UI Designer',
    description: 'Create beautiful and user-friendly interfaces',
    skills: ['Design Tools', 'User Research', 'Prototyping'],
    icon: '🎨',
  },
  {
    id: 'analyst',
    title: 'Data Analyst',
    description: 'Turn data into actionable insights',
    skills: ['SQL', 'Statistics', 'Visualization'],
    icon: '📊',
  },
  {
    id: 'manager',
    title: 'Product Manager',
    description: 'Lead product strategy and development',
    skills: ['Strategy', 'Communication', 'Leadership'],
    icon: '📋',
  },
  {
    id: 'hr',
    title: 'HR Professional',
    description: 'Support and develop organizational talent',
    skills: ['Recruitment', 'Training', 'Policy'],
    icon: '👥',
  },
  {
    id: 'sales',
    title: 'Sales Executive',
    description: 'Drive business growth through relationships',
    skills: ['Negotiation', 'CRM', 'Presentation'],
    icon: '💼',
  },
  {
    id: 'marketing',
    title: 'Marketing Specialist',
    description: 'Build brands and reach audiences',
    skills: ['Digital Marketing', 'Content', 'Analytics'],
    icon: '📢',
  },
  {
    id: 'consultant',
    title: 'Business Consultant',
    description: 'Advise organizations on strategy',
    skills: ['Analysis', 'Strategy', 'Presentation'],
    icon: '🧠',
  },
];

export default function CareerQuizClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const results = useMemo(() => {
    const scores: Record<string, number> = {};

    Object.entries(answers).forEach(([qIndex, optionIndex]) => {
      const question = questions[parseInt(qIndex)];
      const option = question.options[optionIndex];
      Object.entries(option.scores).forEach(([career, score]) => {
        scores[career] = (scores[career] || 0) + score;
      });
    });

    return careerProfiles
      .map((profile) => ({ ...profile, score: scores[profile.id] || 0 }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [answers]);

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Compass className="h-4 w-4" />
            Free Career Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Career Quiz</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover career paths that match your interests, skills, and work
            preferences.
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
            <span className="text-sm font-medium">5 Questions</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">8 Careers</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Instant Results</span>
          </div>
        </div>

        {!showResults ? (
          <Card>
            <CardHeader>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <h2 className="text-2xl font-semibold">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className="w-full rounded-lg border p-4 text-left transition-all hover:border-primary hover:bg-primary/5"
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() =>
                    setCurrentQuestion(Math.max(0, currentQuestion - 1))
                  }
                  disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                {answers[currentQuestion] !== undefined &&
                  currentQuestion < questions.length - 1 && (
                    <Button
                      onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    >
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Your Career Matches 🎯
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {results.map((career, i) => (
                  <div
                    key={career.id}
                    className={`rounded-lg p-4 ${
                      i === 0
                        ? 'border-2 border-primary bg-primary/10'
                        : 'bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{career.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold">{career.title}</h3>
                          {i === 0 && (
                            <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                              Best Match
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground">
                          {career.description}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {career.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-background px-2 py-1 text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="text-center">
              <Button
                onClick={restart}
                variant="outline"
                className="gap-2"
              >
                <RotateCcw className="h-4 w-4" />
                Take Quiz Again
              </Button>
            </div>
          </div>
        )}

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Resume Builder',
                href: '/tools/resume-builder',
                desc: 'Create your resume',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate salary',
              },
              {
                title: 'Job Application Tracker',
                href: '/tools/job-application-tracker',
                desc: 'Track applications',
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
