import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import WordScrambleClient from './WordScrambleClient';
import { BookOpen, Brain, Sparkles, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('word-scramble');

export default function WordScramblePage() {
  const enhancedContent = getEnhancedGameContent('word-scramble');
  return (
    <>
      <GameSchemaScript slug={'word-scramble'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
              <BookOpen className="h-4 w-4" />
              Vocabulary Building
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Word Scramble
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Unscramble the letters to reveal the hidden word. Choose from
              tech, business, or general vocabulary categories.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <BookOpen className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">26+ Words</p>
                <p className="text-xs text-muted-foreground">In database</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">3 Categories</p>
                <p className="text-xs text-muted-foreground">To choose from</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Clock className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Timed</p>
                <p className="text-xs text-muted-foreground">Beat the clock</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Hints</p>
                <p className="text-xs text-muted-foreground">When stuck</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <WordScrambleClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'word-scramble'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
