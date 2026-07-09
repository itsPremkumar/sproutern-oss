import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import FlashcardsClient from './FlashcardsClient';
import { Layers, Brain, Repeat, CheckCircle } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Flashcards Study Tool - DSA, DBMS, OS, OOPs Practice',
  description:
    'Free flashcards for campus placement preparation. Study DSA, DBMS, Operating Systems, and OOPs concepts with spaced repetition and confidence tracking.',
  keywords: [
    'flashcards',
    'dsa flashcards',
    'dbms flashcards',
    'os flashcards',
    'oops flashcards',
    'study flashcards',
    'placement preparation',
  ],
  canonical: '/tools/flashcards',
});

export default function FlashcardsPage() {
  const content = toolsSEOContent['flashcards'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-3xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Layers className="h-4 w-4" />
            Study Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Flashcards</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Master core CS concepts with interactive flashcards. Pre-loaded
            decks for DSA, DBMS, OS, and OOPs.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Layers className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">4 Decks</p>
              <p className="text-xs text-muted-foreground">Pre-loaded</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Brain className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">20+ Cards</p>
              <p className="text-xs text-muted-foreground">Ready to study</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Repeat className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Shuffle</p>
              <p className="text-xs text-muted-foreground">Randomize order</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <CheckCircle className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Track</p>
              <p className="text-xs text-muted-foreground">Confidence level</p>
            </div>
          </div>
        </div>

        {/* Flashcards Component */}
        <FlashcardsClient />

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="flashcards"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
