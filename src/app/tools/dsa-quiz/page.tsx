import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import DsaQuizClient from './DsaQuizClient';
import { Brain, Sparkles, CheckCircle, Clock, Code } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'DSA Quiz - Practice Data Structures and Algorithms',
  description:
    'Test your Data Structures and Algorithms knowledge with our interactive DSA quiz. Practice questions on Arrays, Linked Lists, Trees, Graphs, and more for interview preparation.',
  keywords: [
    'dsa quiz',
    'data structures quiz',
    'algorithms quiz',
    'coding interview practice',
    'computer science quiz',
  ],
  canonical: '/tools/dsa-quiz',
});

export default function DsaQuizPage() {
  const content = toolsSEOContent['dsa-quiz'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            Interview Preparation
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Data Structures & Algorithms Quiz
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Test your technical knowledge with our curated DSA questions.
            Perfect for quick revision before coding interviews.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">10 Questions</p>
              <p className="text-xs text-muted-foreground">Curated set</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Code className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Core Topics</p>
              <p className="text-xs text-muted-foreground">Arrays to Graphs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Instant Feedback</p>
              <p className="text-xs text-muted-foreground">With explanations</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Sparkles className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Free Practice</p>
              <p className="text-xs text-muted-foreground">
                Unlimited attempts
              </p>
            </div>
          </div>
        </div>

        {/* Quiz Component */}
        <DsaQuizClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="dsa-quiz"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
