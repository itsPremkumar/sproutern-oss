import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import WordAssociationClient from './WordAssociationClient';
import { MessageSquare, Brain, BookOpen, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('word-association');

export default function WordAssociationPage() {
  const enhancedContent = getEnhancedGameContent('word-association');
  return (
    <>
      <GameSchemaScript slug={'word-association'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <MessageSquare className="h-4 w-4" />
              Verbal Reasoning
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Word Association
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find the logical connection! Given a word, identify which option
              is most closely related through meaning, category, or
              relationship.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <MessageSquare className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">6 Types</p>
                <p className="text-xs text-muted-foreground">
                  Of relationships
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">20+ Words</p>
                <p className="text-xs text-muted-foreground">In database</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Verbal IQ</p>
                <p className="text-xs text-muted-foreground">Training</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn why</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <WordAssociationClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'word-association'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
