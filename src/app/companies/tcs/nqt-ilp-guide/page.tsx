import React from 'react';
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  Code,
  Clock,
  Laptop,
  Award,
  AlertTriangle,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TCS NQT & ILP | Exam Pattern, Syllabus, & Training',
  description:
    'Complete guide to cracking TCS NQT 2025. Detailed syllabus, coding questions, and what to expect in the ILP (Initial Learning Program) training.',
};

export default function TCSGuidePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-purple-200 bg-purple-50 text-purple-600"
        >
          Company Guides
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          The Ultimate Guide to{' '}
          <span className="text-purple-600">TCS NQT & ILP</span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
          Tata Consultancy Services (TCS) is the largest mass recruiter in
          India. Here is how to crack the National Qualifier Test (NQT) and
          survive the Initial Learning Program (ILP).
        </p>
      </div>

      <Tabs
        defaultValue="pattern"
        className="w-full"
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger
            value="pattern"
            className="py-3"
          >
            Exam Pattern (NQT)
          </TabsTrigger>
          <TabsTrigger
            value="syllabus"
            className="py-3"
          >
            Syllabus
          </TabsTrigger>
          <TabsTrigger
            value="coding"
            className="py-3"
          >
            Coding Round
          </TabsTrigger>
          <TabsTrigger
            value="ilp"
            className="py-3"
          >
            ILP / Training
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Pattern */}
        <TabsContent
          value="pattern"
          className="space-y-6"
        >
          <div className="mb-6 rounded-xl border border-purple-100 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
            <h3 className="mb-2 flex items-center text-xl font-bold text-purple-900 dark:text-purple-100">
              <Clock className="mr-2 h-5 w-5" />
              Total Duration: 166 Minutes
            </h3>
            <p className="text-purple-800 dark:text-purple-200">
              TCS NQT is an adaptive test. Solving a question correctly might
              make the next one harder (and fetch more points). There is NO
              negative marking (usually), but verify instructions on the exam
              day.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Part A: Foundation Section</CardTitle>
                <CardDescription>
                  Tests basic aptitude. Qualifying nature.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span>Numerical Ability</span>
                  <span className="font-bold">20-25 Mins</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Verbal Ability</span>
                  <span className="font-bold">20-25 Mins</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Reasoning Ability</span>
                  <span className="font-bold">20-25 Mins</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Part B: Advanced Section</CardTitle>
                <CardDescription>
                  Crucial for TCS Digital / Prime profiles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span>Advanced Quant</span>
                  <span className="font-bold">20 Mins</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Advanced Reasoning</span>
                  <span className="font-bold">15 Mins</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Advanced Coding</span>
                  <span className="font-bold">55 Mins</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 2: Syllabus */}
        <TabsContent
          value="syllabus"
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quant & Aptitude</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                  <li>
                    <strong>High Priority:</strong> Number System, HCF/LCM,
                    Averages, Percentages, Ratio & Proportion.
                  </li>
                  <li>
                    <strong>Medium Priority:</strong> Profit & Loss, Time &
                    Work, Speed Time Distance, Geometry.
                  </li>
                  <li>
                    <strong>Hard:</strong> Permutation Combination, Probability
                    (Advanced section).
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programming Logic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-sm text-muted-foreground">
                  Multiple choice questions based on C/C++/Java/Python snippets.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                  <li>Data Types, Operators, Looping.</li>
                  <li>Arrays, Strings, Pointers (C/C++ specific).</li>
                  <li>OOPS Concepts (Inheritance, Polymorphism).</li>
                  <li>Tree & Graph Traversals (Basic).</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 3: Coding */}
        <TabsContent
          value="coding"
          className="space-y-6"
        >
          <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:bg-slate-900/50">
            <h3 className="mb-4 flex items-center text-xl font-bold">
              <Terminal className="mr-2 h-5 w-5 text-green-600" />
              The 2 Coding Questions
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">
                  Question 1: Easy (15-20 mins)
                </h4>
                <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                  Basic implementation. Strings, Arrays, Mathematics.
                </p>
                <div className="rounded bg-black p-4 font-mono text-xs text-green-400">
                  Example: Given an array, find the second largest element
                  without sorting.
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-red-700 dark:text-red-400">
                  Question 2: Medium/Hard (30-35 mins)
                </h4>
                <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                  Algorithms, DP, Matrix manipulation.
                </p>
                <div className="rounded bg-black p-4 font-mono text-xs text-green-400">
                  Example: Given a matrix of 0s and 1s, find the largest square
                  of 1s (Dynamic Programming).
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Pro Tips for Coding Round</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Stick to one
                language (Java/C++/Python). Python is slower but easier to
                write.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />{' '}
                <strong>Step-marking exists!</strong> Even if your code doesn't
                pass all test cases, submit it.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" /> Handle edge
                cases (Cost of Living = 0, Array size = 0).
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: ILP */}
        <TabsContent
          value="ilp"
          className="space-y-6"
        >
          <div className="mb-6">
            <h3 className="mb-4 text-2xl font-bold">
              The Initial Learning Program (ILP)
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Once you join, you undergo rigorous training. The duration depends
              on your performance in the "Xplore" pre-joining tests.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-l-4 border-green-500">
              <CardHeader>
                <CardTitle>Phase 1: Xplore (Pre-Joining)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Online learning modules assigned BEFORE you join. If you clear
                  the proctored assessment (CPA) with 55%+, you might get{' '}
                  <strong>Digital Cadre</strong> incentive.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-yellow-500">
              <CardHeader>
                <CardTitle>Phase 2: PRA (Readiness)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Held at the training center (e.g., Trivandrum/Ahmedabad).
                  Tests your understanding of the designated tech stack
                  (Java/DotNet/Python).
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardHeader>
                <CardTitle>Phase 3: Project Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Based on your ILP scores. Top scorers get "Development"
                  projects. Others might get Support/Testing.{' '}
                  <strong>Take ILP seriously!</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h4 className="flex items-center gap-2 font-bold text-yellow-800 dark:text-yellow-100">
              <AlertTriangle className="h-4 w-4" />
              Important Note
            </h4>
            <p className="mt-1 text-sm text-yellow-700 dark:text-yellow-200">
              Failing ILP assessments multiple times can lead to termination of
              the offer. It is rare, but it happens.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 flex justify-center gap-4">
        <Button
          asChild
          size="lg"
        >
          <Link href="/resources/exam-calendar">Check NQT Exam Dates</Link>
        </Button>
        <Button
          variant="outline"
          asChild
          size="lg"
        >
          <Link href="/resources/interview-cheatsheet">
            Prepare for Interview
          </Link>
        </Button>
      </div>
    </div>
  );
}
