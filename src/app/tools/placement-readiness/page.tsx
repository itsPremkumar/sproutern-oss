'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

interface Question {
  id: number;
  text: string;
  category: 'Resume' | 'DSA' | 'Projects' | 'Aptitude';
  weight: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: 'Is your resume ATS-friendly and 1 page long?',
    category: 'Resume',
    weight: 10,
  },
  {
    id: 2,
    text: 'Have you solved at least 50 problems on LeetCode/GFG?',
    category: 'DSA',
    weight: 15,
  },
  {
    id: 3,
    text: 'Do you have 2 solid projects deployed (with live links)?',
    category: 'Projects',
    weight: 20,
  },
  {
    id: 4,
    text: 'Can you introduce yourself fluently in English for 2 minutes?',
    category: 'Aptitude',
    weight: 10,
  },
  {
    id: 5,
    text: 'Have you practiced common HR questions (Weakness, Why us)?',
    category: 'Aptitude',
    weight: 5,
  },
  {
    id: 6,
    text: 'Do you know basic SQL queries (Joins, Group By)?',
    category: 'DSA',
    weight: 10,
  },
  {
    id: 7,
    text: 'Have you taken at least 2 mock interviews?',
    category: 'Aptitude',
    weight: 10,
  },
  {
    id: 8,
    text: 'Is your LinkedIn profile updated with a professional photo?',
    category: 'Resume',
    weight: 5,
  },
  {
    id: 9,
    text: 'Do you know your core subjects (OS, DBMS, CN) well?',
    category: 'DSA',
    weight: 10,
  },
  {
    id: 10,
    text: 'Do you have a portfolio website?',
    category: 'Projects',
    weight: 5,
  },
];

export default function PlacementReadinessScorer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const content = toolsSEOContent['placement-readiness'];

  const handleAnswer = (isYes: boolean) => {
    const question = questions[currentQuestionIndex];
    if (isYes) {
      setScore((prev) => prev + question.weight);
    }

    // Store answer to show specific feedback later
    setAnswers([...answers, isYes]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setAnswers([]);
  };

  const getFeedback = () => {
    if (score >= 80)
      return {
        title: 'Job Ready! 🚀',
        color: 'text-green-600',
        msg: 'You are in the top 10% of candidates. Start applying aggressively!',
      };
    if (score >= 50)
      return {
        title: 'Getting There... 🚧',
        color: 'text-yellow-600',
        msg: 'You have the basics, but need to polish your weak areas.',
      };
    return {
      title: 'Needs Work ⚠️',
      color: 'text-red-600',
      msg: 'You are at risk of not clearing rounds. Focus on the basics immediately.',
    };
  };

  if (showResult) {
    const feedback = getFeedback();
    return (
      <div className="container mx-auto max-w-2xl px-4 py-12">
        <Card className="p-6 pb-10 text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Your Readiness Score
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="relative flex justify-center pt-4">
              <div className={`text-6xl font-extrabold ${feedback.color}`}>
                {score}%
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-bold ${feedback.color} mb-2`}>
                {feedback.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {feedback.msg}
              </p>
            </div>

            <div className="space-y-4 rounded-xl bg-slate-50 p-6 text-left dark:bg-slate-900/50">
              <h4 className="border-b pb-2 font-bold">
                Action Items (Start Today):
              </h4>
              {answers.map((ans, idx) => {
                if (!ans) {
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400"
                    >
                      <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>
                        Fix:{' '}
                        {questions[idx].text
                          .replace('Is your', 'Fix your')
                          .replace('Have you', 'Do')
                          .replace('Do you', 'Get')}
                      </span>
                    </div>
                  );
                }
                return null;
              })}
              {answers.every((a) => a) && (
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span>You aced everything! Time to apply.</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <Button
                variant="outline"
                onClick={resetQuiz}
                className="w-full"
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Retake
              </Button>
              <Button
                className="w-full"
                asChild
              >
                <Link href="/tools/resume-builder">
                  Improve Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="placement-readiness"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    );
  }

  const progress = (currentQuestionIndex / questions.length) * 100;

  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-bold">Placement Readiness Check</h1>
        <p className="text-slate-500">
          Answer honestly. This isn't an exam, it's a reality check.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-slate-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <Badge variant="secondary">
              {questions[currentQuestionIndex].category}
            </Badge>
          </div>
          <Progress
            value={progress}
            className="h-2"
          />
        </CardHeader>

        <CardContent className="py-10 text-center">
          <h2 className="text-2xl font-semibold leading-tight">
            {questions[currentQuestionIndex].text}
          </h2>
        </CardContent>

        <CardFooter className="flex gap-4 px-10 pb-10">
          <Button
            variant="outline"
            size="lg"
            className="w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => handleAnswer(false)}
          >
            <XCircle className="mr-2 h-5 w-5" /> No
          </Button>
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700"
            onClick={() => handleAnswer(true)}
          >
            <CheckCircle className="mr-2 h-5 w-5" /> Yes
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-8 text-center">
        <p className="text-xs text-slate-400">
          *Your data is not saved. This is a local browser check.
        </p>
      </div>
    </div>
  );
}
