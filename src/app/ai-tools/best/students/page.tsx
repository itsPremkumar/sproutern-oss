/**
 * Best AI Tools for Students Page
 * Landing page targeting student audience
 */

import { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  BookOpen,
  Code,
  PenTool,
  Brain,
  Sparkles,
  Check,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  PartnerCTA,
  QuickCompare,
  ComparisonTable,
} from '@/components/partner';
import { AI_TOOLS } from '@/data/ai-tools/ai-tools-data';

export const metadata: Metadata = {
  title: 'Best AI Tools for Students 2025 - Free & Affordable AI',
  description:
    'Discover the best AI tools for students in 2025. Free AI writing assistants, coding helpers, study tools, and research aids. Perfect for college students, high schoolers, and online learners.',
  keywords: [
    'best AI tools for students',
    'free AI tools for students',
    'AI for studying',
    'AI homework help',
    'AI writing for students',
    'student AI tools',
    'college AI tools',
  ],
};

export default function BestAIToolsForStudentsPage() {
  // Filter tools that are good for students
  const studentTools = AI_TOOLS.filter(
    (tool) =>
      tool.bestFor.some(
        (bf) =>
          bf.toLowerCase().includes('student') ||
          bf.toLowerCase().includes('learner'),
      ) || tool.pricing.freeTier,
  );

  const freeTools = studentTools.filter((t) => t.pricing.freeTier);
  const writingTools = AI_TOOLS.filter(
    (t) => t.category === 'writing' || t.category === 'chatbots',
  ).slice(0, 4);
  const codingTools = AI_TOOLS.filter((t) => t.category === 'coding').slice(
    0,
    3,
  );

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:from-blue-900 dark:to-purple-900 dark:text-blue-300">
          <GraduationCap className="h-4 w-4" />
          AI for Students
        </div>
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Best AI Tools for Students in 2025
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
          Study smarter, not harder. These AI tools help you write better
          essays, understand complex topics, code faster, and ace your exams.
          Many are completely free!
        </p>

        {/* Quick Stats */}
        <div className="mx-auto mb-8 flex max-w-xl flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-semibold">{studentTools.length} Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="font-semibold">
              {freeTools.length} Free Options
            </span>
          </div>
        </div>
      </section>

      {/* Why Students Need AI */}
      <section className="mb-16">
        <h2 className="mb-6 text-center text-2xl font-bold">
          How AI Helps Students Succeed
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: PenTool,
              title: 'Write Better Essays',
              description: 'Get help with grammar, structure, and citations',
            },
            {
              icon: Brain,
              title: 'Understand Concepts',
              description: 'AI explains complex topics in simple terms',
            },
            {
              icon: Code,
              title: 'Code Faster',
              description: 'AI autocompletes and debugs your code',
            },
            {
              icon: BookOpen,
              title: 'Study Efficiently',
              description: 'Create flashcards and summaries instantly',
            },
          ].map((item) => (
            <Card key={item.title}>
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Picks for Students */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">
          🏆 Top AI Tools for Students
        </h2>
        <QuickCompare tools={studentTools.slice(0, 6)} />
      </section>

      {/* Free Tools Section */}
      <section className="mb-16 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-8">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">🆓 Free AI Tools</h2>
          <p className="text-muted-foreground">
            Perfect for students on a budget - no credit card required
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {freeTools.slice(0, 6).map((tool) => (
            <Link
              key={tool.id}
              href={`/ai-tools/${tool.slug}`}
            >
              <div className="flex items-center gap-4 rounded-xl bg-background p-4 transition-shadow hover:shadow-md">
                <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900">
                  <Sparkles className="h-5 w-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{tool.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-muted-foreground">
                      {tool.rating}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
                  FREE
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Writing Tools for Students */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">📝 Best AI Writing Tools</h2>
        <p className="mb-6 text-muted-foreground">
          These tools help you write essays, research papers, and assignments
          faster while improving your grammar and style.
        </p>
        {writingTools.length >= 2 && (
          <ComparisonTable
            tools={writingTools.slice(0, 3)}
            showPricing
            showRatings
          />
        )}
      </section>

      {/* Coding Tools for CS Students */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">
          💻 Best AI Coding Tools for CS Students
        </h2>
        <p className="mb-6 text-muted-foreground">
          Learning to code? These AI assistants help you write better code,
          understand concepts, and debug faster. GitHub Copilot is free for
          students!
        </p>
        <QuickCompare tools={codingTools} />
        <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/50">
          <p className="flex items-center gap-2 text-sm text-blue-800 dark:text-blue-200">
            <Sparkles className="h-4 w-4" />
            <strong>Pro Tip:</strong> GitHub Copilot is completely free for
            verified students through GitHub Education!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is it okay to use AI for school assignments?',
              a: "AI tools should be used as learning aids, not to cheat. Use them to understand concepts, improve your writing, and learn faster. Always follow your school's academic integrity policy.",
            },
            {
              q: 'Which AI tool is best for writing essays?',
              a: 'For essays, we recommend ChatGPT (free tier) for brainstorming and outlining, and Grammarly (free) for grammar and clarity. Claude is excellent for research and nuanced analysis.',
            },
            {
              q: 'Are there free AI tools for coding?',
              a: 'Yes! GitHub Copilot is free for verified students. Cursor also has a free tier. ChatGPT can help explain code and debug for free.',
            },
            {
              q: 'Can AI help me study for exams?',
              a: "Absolutely! Use ChatGPT or Claude to explain concepts, create practice questions, and summarize notes. They're like having a tutor available 24/7.",
            },
          ].map((faq) => (
            <Card key={faq.q}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Study Smarter with AI?
        </h2>
        <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
          Start with our top free recommendations and see how AI can transform
          your learning experience.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PartnerCTA
            href="https://chat.openai.com"
            variant="primary"
            size="lg"
            icon="sparkles"
            toolName="ChatGPT"
          >
            Try ChatGPT Free
          </PartnerCTA>
          <Link href="/ai-tools">
            <Button
              variant="outline"
              size="lg"
            >
              Browse All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is it okay to use AI for school assignments?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "AI tools should be used as learning aids, not to cheat. Use them to understand concepts, improve your writing, and learn faster. Always follow your school's academic integrity policy.",
                },
              },
              {
                '@type': 'Question',
                name: 'Which AI tool is best for writing essays?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For essays, we recommend ChatGPT (free tier) for brainstorming and outlining, and Grammarly (free) for grammar and clarity. Claude is excellent for research and nuanced analysis.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are there free AI tools for coding?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! GitHub Copilot is free for verified students. Cursor also has a free tier. ChatGPT can help explain code and debug for free.',
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
