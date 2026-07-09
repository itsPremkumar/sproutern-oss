import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DailyRiddleClient from './DailyRiddleClient';
import { Lightbulb, Brain, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('daily-riddle');

export default function DailyRiddlePage() {
  const enhancedContent = getEnhancedGameContent('daily-riddle');
  return (
    <>
      <GameSchemaScript slug={'daily-riddle'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Lightbulb className="h-4 w-4" />
              Brain Teaser
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Daily Riddle
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Challenge your brain with riddles and puzzles. Think outside the
              box to find the answers!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-bold">Riddles</p>
                <p className="text-xs text-muted-foreground">
                  Think creatively
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Logic</p>
                <p className="text-xs text-muted-foreground">Problem solving</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Daily</p>
                <p className="text-xs text-muted-foreground">New challenges</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Hints</p>
                <p className="text-xs text-muted-foreground">
                  If you&apos;re stuck
                </p>
              </div>
            </div>
          </div>

          <DailyRiddleClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'daily-riddle'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
