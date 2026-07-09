'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Users,
  CheckCircle,
  Clock,
  Shield,
  ChevronRight,
  RotateCcw,
  Lightbulb,
  MessageSquare,
} from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  category: string;
  question: string;
  tips: string[];
  sampleAnswer?: string;
}

const interviewQuestions: Question[] = [
  {
    id: 1,
    category: 'Introduction',
    question: 'Tell me about yourself.',
    tips: [
      'Keep it concise (1-2 minutes)',
      'Focus on professional background',
      "End with why you're interested in this role",
    ],
    sampleAnswer:
      "I'm a software engineer with 3 years of experience in full-stack development. I've worked on building scalable web applications at [Company] where I led the frontend team. I'm passionate about creating user-friendly products and I'm excited about this role because it aligns with my skills and career goals.",
  },
  {
    id: 2,
    category: 'Behavioral',
    question: 'Tell me about a challenging project you worked on.',
    tips: [
      'Use the STAR method (Situation, Task, Action, Result)',
      'Be specific about your role',
      'Quantify results if possible',
    ],
    sampleAnswer:
      'At my previous company, we had to migrate our monolithic application to microservices while maintaining 99.9% uptime. I led the backend team, designed the migration strategy, and we successfully completed it in 3 months, reducing deployment time by 60%.',
  },
  {
    id: 3,
    category: 'Behavioral',
    question: 'How do you handle conflicts with team members?',
    tips: [
      'Show emotional intelligence',
      'Emphasize communication and collaboration',
      'Give a specific example',
    ],
  },
  {
    id: 4,
    category: 'Technical',
    question: 'What are your strongest technical skills?',
    tips: [
      'Align with the job description',
      'Give concrete examples',
      'Mention recent learning',
    ],
  },
  {
    id: 5,
    category: 'Motivation',
    question: 'Why do you want to work here?',
    tips: [
      'Research the company beforehand',
      'Connect your values with company culture',
      'Be genuine and specific',
    ],
  },
  {
    id: 6,
    category: 'Motivation',
    question: 'Where do you see yourself in 5 years?',
    tips: [
      'Show ambition but be realistic',
      'Align with potential growth at the company',
      'Focus on skill development',
    ],
  },
  {
    id: 7,
    category: 'Problem Solving',
    question: 'Tell me about a time you failed.',
    tips: [
      'Be honest and authentic',
      'Focus on what you learned',
      'Show how you grew from the experience',
    ],
  },
  {
    id: 8,
    category: 'Leadership',
    question: 'Describe a time when you mentored someone.',
    tips: [
      'Show patience and communication skills',
      'Highlight the positive outcome',
      'Demonstrate leadership qualities',
    ],
  },
  {
    id: 9,
    category: 'Closing',
    question: 'Do you have any questions for us?',
    tips: [
      'Always have 2-3 questions ready',
      'Ask about team, culture, or growth',
      'Avoid salary questions in early rounds',
    ],
  },
  // Amazon Leadership Principles
  {
    id: 10,
    category: '🔶 Amazon LP',
    question:
      'Tell me about a time you had to make a decision with incomplete information.',
    tips: [
      'Tests "Bias for Action" - leaders prefer action over inaction',
      'Show calculated risk-taking ability',
      'Explain your decision-making process',
    ],
    sampleAnswer:
      'At my startup, we had 48 hours to decide on a product pivot with limited data. I conducted rapid customer interviews, analyzed our metrics, made the call to pivot, and we saw 40% user growth the next quarter.',
  },
  {
    id: 11,
    category: '🔶 Amazon LP',
    question:
      'Describe when you disagreed with your manager but still committed.',
    tips: [
      'Tests "Have Backbone; Disagree and Commit"',
      'Show professional disagreement approach',
      'Demonstrate commitment after decision',
    ],
  },
  {
    id: 12,
    category: '🔶 Amazon LP',
    question:
      'Tell me about a time you took ownership beyond your job description.',
    tips: [
      'Tests "Ownership" - leaders never say "not my job"',
      'Show initiative and long-term thinking',
      'Demonstrate company-wide perspective',
    ],
  },
  // Google Googleyness
  {
    id: 13,
    category: '🔵 Google',
    question: 'Tell me about a time you helped a struggling teammate.',
    tips: [
      'Google values collaboration and humility',
      'Show empathy and patience',
      'Highlight team success over individual',
    ],
  },
  {
    id: 14,
    category: '🔵 Google',
    question: 'Describe how you navigate ambiguity in projects.',
    tips: [
      'Show comfort with unstructured problems',
      'Demonstrate structured thinking',
      'Explain how you create clarity for others',
    ],
  },
  // Meta Core Values
  {
    id: 15,
    category: '🔷 Meta',
    question:
      'Tell me about a time you moved fast and broke things (then fixed them).',
    tips: [
      'Meta values speed and iteration',
      'Show calculated risk-taking',
      'Emphasize quick learning from mistakes',
    ],
  },
  // Microsoft Growth Mindset
  {
    id: 16,
    category: '🟢 Microsoft',
    question:
      'Tell me about a skill you learned recently and how you applied it.',
    tips: [
      'Microsoft values growth mindset',
      'Show continuous learning attitude',
      'Demonstrate practical application',
    ],
  },
  {
    id: 17,
    category: '🟢 Microsoft',
    question:
      'Describe when receiving feedback significantly changed your approach.',
    tips: [
      'Show openness to constructive criticism',
      'Demonstrate ability to adapt',
      'Highlight improved outcomes',
    ],
  },
];

export default function MockInterviewClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [mode, setMode] = useState<'practice' | 'timed'>('practice');
  const [isStarted, setIsStarted] = useState(false);

  const question = interviewQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / interviewQuestions.length) * 100;

  const nextQuestion = () => {
    setShowTips(false);
    setShowSample(false);
    setUserAnswer('');
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    setShowTips(false);
    setShowSample(false);
    setUserAnswer('');
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setShowTips(false);
    setShowSample(false);
    setUserAnswer('');
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Users className="h-4 w-4" />
              Free Interview Prep
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Mock Interview Practice
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Practice common interview questions with tips and sample answers.
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="py-8 text-center">
              <h2 className="mb-4 text-2xl font-bold">Ready to Practice?</h2>
              <p className="mb-6 text-muted-foreground">
                Practice {interviewQuestions.length} common interview questions
                with helpful tips.
              </p>
              <Button
                size="lg"
                onClick={() => setIsStarted(true)}
                className="gap-2"
              >
                Start Practice
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Categories */}
          <div className="grid gap-4 md:grid-cols-3">
            {[
              'Introduction',
              'Behavioral',
              'Technical',
              'Motivation',
              'Problem Solving',
              'Leadership',
            ].map((cat) => (
              <Card key={cat}>
                <CardContent className="py-4 text-center">
                  <div className="font-semibold">{cat}</div>
                  <div className="text-sm text-muted-foreground">
                    {
                      interviewQuestions.filter((q) => q.category === cat)
                        .length
                    }{' '}
                    questions
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Progress */}
        <Card className="mb-6">
          <CardContent className="py-4">
            <div className="mb-2 flex justify-between text-sm">
              <span>
                Question {currentQuestion + 1} of {interviewQuestions.length}
              </span>
              <span className="text-muted-foreground">{question.category}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Question */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <MessageSquare className="h-6 w-6 text-primary" />
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* User Answer Area */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Your Answer
              </label>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Practice your answer here..."
                className="w-full resize-none rounded-lg border bg-muted/50 p-4 outline-none"
                rows={5}
              />
            </div>

            {/* Tips */}
            <Button
              variant="outline"
              onClick={() => setShowTips(!showTips)}
              className="w-full gap-2"
            >
              <Lightbulb className="h-4 w-4" />
              {showTips ? 'Hide Tips' : 'Show Tips'}
            </Button>

            {showTips && (
              <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
                <h4 className="mb-2 font-semibold text-yellow-800 dark:text-yellow-200">
                  💡 Tips
                </h4>
                <ul className="space-y-1 text-sm text-yellow-700 dark:text-yellow-300">
                  {question.tips.map((tip, i) => (
                    <li key={i}>• {tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sample Answer */}
            {question.sampleAnswer && (
              <>
                <Button
                  variant="outline"
                  onClick={() => setShowSample(!showSample)}
                  className="w-full gap-2"
                >
                  {showSample ? 'Hide' : 'Show'} Sample Answer
                </Button>

                {showSample && (
                  <div className="rounded-lg bg-green-50 p-4 dark:bg-green-950">
                    <h4 className="mb-2 font-semibold text-green-800 dark:text-green-200">
                      Sample Answer
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {question.sampleAnswer}
                    </p>
                  </div>
                )}
              </>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={restart}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Restart
          </Button>
          {currentQuestion < interviewQuestions.length - 1 ? (
            <Button onClick={nextQuestion}>Next Question</Button>
          ) : (
            <Button
              onClick={restart}
              className="gap-2"
            >
              🎉 Complete! Restart
            </Button>
          )}
        </div>

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
                title: 'Career Quiz',
                href: '/tools/career-quiz',
                desc: 'Find your career path',
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
