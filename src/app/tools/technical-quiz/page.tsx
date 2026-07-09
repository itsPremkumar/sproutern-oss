import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import TechnicalQuizClient from './TechnicalQuizClient';
import { Brain, Server, Database, Globe, Code } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Technical MCQ Quiz - OS, DBMS, CN, OOPs Practice',
  description:
    'Test your core CS knowledge with our Technical MCQ Quiz. Practice Operating Systems, DBMS, Computer Networks, and OOPs questions for placement interviews.',
  keywords: [
    'technical mcq quiz',
    'os mcq',
    'dbms mcq',
    'computer networks quiz',
    'oops quiz',
    'placement preparation',
    'campus placement',
    'technical interview questions',
  ],
  canonical: '/tools/technical-quiz',
});

export default function TechnicalQuizPage() {
  const content = toolsSEOContent['technical-quiz'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Brain className="h-4 w-4" />
            Placement Preparation
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Technical MCQ Quiz
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Master core Computer Science subjects asked in every placement
            interview. Practice OS, DBMS, CN, and OOPs concepts.
          </p>
        </div>

        {/* Subject Cards */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Server className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">OS</p>
              <p className="text-xs text-muted-foreground">5 Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Database className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">DBMS</p>
              <p className="text-xs text-muted-foreground">5 Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Globe className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Networks</p>
              <p className="text-xs text-muted-foreground">5 Questions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Code className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">OOPs</p>
              <p className="text-xs text-muted-foreground">5 Questions</p>
            </div>
          </div>
        </div>

        {/* Quiz Component */}
        <TechnicalQuizClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="technical-quiz"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
