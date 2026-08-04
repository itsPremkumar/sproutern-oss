import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  CheckCircle2,
  BookOpen,
  Target,
  Trophy,
  Users,
  Code,
  MessageSquare,
  Building2,
  ArrowRight,
  Lightbulb,
  TrendingUp,
  FileQuestion,
  Brain,
  Laptop,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'MNC Interview Questions Hub | Tech & HR Qs',
  description:
    'Complete collection of MNC interview questions for TCS, Infosys, Wipro, Accenture, Cognizant, Amazon, Google, and Microsoft. Technical and HR interview questions with answers.',
  keywords:
    'MNC interview questions, technical interview questions, HR interview questions, TCS interview questions, Infosys interview questions, Wipro interview questions, MNC interview prep',
  openGraph: {
    title: 'MNC Interview Questions Hub',
    description:
      'Master MNC interviews with comprehensive question banks for all top companies.',
    url: 'https://sproutern.dpdns.org/companies/mnc-interview-questions',
    type: 'website',
  },
};

export default function MNCInterviewQuestionsPage() {
  const companies = [
    {
      name: 'TCS',
      technicalLink: '/companies/tcs/interview-questions',
      description: 'TCS NQT, Technical, and HR interview questions',
      icon: Building2,
      color: 'border-blue-500',
    },
    {
      name: 'Infosys',
      technicalLink: '/companies/infosys/interview-questions',
      description: 'InfyTQ, Pseudocode, and Technical interview questions',
      icon: Building2,
      color: 'border-green-500',
    },
    {
      name: 'Wipro',
      technicalLink: '/companies/wipro/interview-questions',
      description: 'Elite NLTH, Technical, and HR interview questions',
      icon: Building2,
      color: 'border-purple-500',
    },
    {
      name: 'Accenture',
      technicalLink: '/companies/accenture/interview-questions',
      description: 'Cognitive Assessment, Technical, and HR questions',
      icon: Building2,
      color: 'border-pink-500',
    },
    {
      name: 'Cognizant',
      technicalLink: '/companies/cognizant/interview-questions',
      description: 'Technical and HR interview questions',
      icon: Building2,
      color: 'border-orange-500',
    },
    {
      name: 'Amazon',
      technicalLink: '/companies/amazon',
      description: 'SDE interview questions, Leadership Principles',
      icon: Building2,
      color: 'border-yellow-500',
    },
    {
      name: 'Google',
      technicalLink: '/companies/google',
      description: 'Software Engineering interview questions',
      icon: Building2,
      color: 'border-red-500',
    },
    {
      name: 'Microsoft',
      technicalLink: '/companies/microsoft',
      description: 'Software Engineering interview questions',
      icon: Building2,
      color: 'border-blue-600',
    },
  ];

  const questionCategories = [
    {
      title: 'Technical Interview Questions',
      description: 'Programming, DSA, DBMS, OOPs, System Design',
      link: '/blog/mnc-technical-interview-questions-answers',
      icon: Code,
      count: '200+',
    },
    {
      title: 'HR Interview Questions',
      description: 'Behavioral, situational, and common HR questions',
      link: '/blog/mnc-hr-interview-questions-freshers',
      icon: MessageSquare,
      count: '50+',
    },
    {
      title: 'Aptitude Test Questions',
      description: 'Quantitative, Logical Reasoning, Verbal Ability',
      link: '/blog/mnc-aptitude-test-preparation-guide',
      icon: Brain,
      count: '500+',
    },
    {
      title: 'Coding Interview Questions',
      description: 'LeetCode-style problems, algorithms, data structures',
      link: '/blog/mnc-coding-interview-preparation',
      icon: Laptop,
      count: '100+',
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl py-12">
      {/* Hero Section */}
      <div className="mb-16 space-y-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <FileQuestion className="mr-2 h-4 w-4" />
          MNC Interview Questions Hub
        </div>
        <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
          MNC Interview Questions Hub
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
          Complete collection of interview questions for all top MNCs. Practice
          technical, HR, aptitude, and coding questions to ace your MNC
          interviews.
        </p>
      </div>

      {/* Question Categories */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Question Categories
        </h2>
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {questionCategories.map((category, i) => (
            <Card
              key={i}
              className="transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <category.icon className="h-8 w-8 text-primary" />
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {category.count} Questions
                  </span>
                </div>
                <CardTitle className="text-xl">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full"
                >
                  <Link href={category.link}>
                    View Questions <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company-Wise Questions */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Company-Wise Interview Questions
        </h2>
        <p className="mx-auto mb-8 max-w-3xl text-center text-muted-foreground">
          Each MNC has unique interview patterns and commonly asked questions.
          Click on any company to access detailed interview questions and
          preparation guides.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {companies.map((company, i) => (
            <Card
              key={i}
              className={`border-l-4 transition-colors hover:border-primary ${company.color}`}
            >
              <CardHeader>
                <div className="mb-2 flex items-center gap-3">
                  <company.icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">{company.name}</CardTitle>
                </div>
                <CardDescription className="text-sm">
                  {company.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="group w-full"
                  size="sm"
                  asChild
                >
                  <Link href={company.technicalLink}>
                    View Questions{' '}
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preparation Resources */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Preparation Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                Complete Guides
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="/companies/mnc-placement-guide"
                className="block text-sm text-primary hover:underline"
              >
                → MNC Placement Guide
              </Link>
              <Link
                href="/companies/mnc-internship-guide"
                className="block text-sm text-primary hover:underline"
              >
                → MNC Internship Guide
              </Link>
              <Link
                href="/blog/technical-interview-preparation"
                className="block text-sm text-primary hover:underline"
              >
                → Technical Interview Prep
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Practice Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="/tools/interview-questions"
                className="block text-sm text-primary hover:underline"
              >
                → Interview Question Generator
              </Link>
              <Link
                href="/tools/aptitude-test"
                className="block text-sm text-primary hover:underline"
              >
                → Aptitude Mock Test
              </Link>
              <Link
                href="/tools/dsa-quiz"
                className="block text-sm text-primary hover:underline"
              >
                → DSA Quiz
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-orange-600" />
                Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link
                href="/resources/interview-prep"
                className="block text-sm text-primary hover:underline"
              >
                → Interview Prep Resources
              </Link>
              <Link
                href="/resources/interview-cheatsheet"
                className="block text-sm text-primary hover:underline"
              >
                → Interview Cheat Sheet
              </Link>
              <Link
                href="/resources/resume-templates"
                className="block text-sm text-primary hover:underline"
              >
                → Resume Templates
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-8">
          <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
            <Lightbulb className="h-6 w-6 text-primary" />
            Pro Tips for MNC Interview Preparation
          </h3>
          <div className="grid gap-4 text-sm md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Practice Daily:</strong> Solve 5-10 interview questions
                daily for 2-3 months before interviews.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Know Your Projects:</strong> Be ready to explain every
                project in detail - architecture, challenges, solutions.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Use STAR Method:</strong> Prepare behavioral answers
                using Situation, Task, Action, Result framework.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Mock Interviews:</strong> Practice with friends or use
                our{' '}
                <Link
                  href="/tools/interview-questions"
                  className="text-primary hover:underline"
                >
                  Interview Question Generator
                </Link>
                .
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Time Management:</strong> Practice solving problems
                within time limits to build speed and accuracy.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <strong>Research Companies:</strong> Understand company culture,
                values, and recent news before interviews.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
