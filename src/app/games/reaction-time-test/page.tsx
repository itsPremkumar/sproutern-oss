import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ReactionTimeTestClient from './ReactionTimeTestClient';
import { Zap, Timer, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('reaction-time-test');

export default function ReactionTimeTestPage() {
  const enhancedContent = getEnhancedGameContent('reaction-time-test');
  return (
    <>
      <GameSchemaScript slug={'reaction-time-test'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Zap className="h-4 w-4" />
              Speed Test
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Reaction Time Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How fast are your reflexes? Click as soon as the screen turns
              green to measure your reaction time in milliseconds.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <Zap className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-bold">Instant</p>
                <p className="text-xs text-muted-foreground">Pure reflex</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Timer className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Milliseconds</p>
                <p className="text-xs text-muted-foreground">Precise timing</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">5 Trials</p>
                <p className="text-xs text-muted-foreground">Average result</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Rankings</p>
                <p className="text-xs text-muted-foreground">Compare results</p>
              </div>
            </div>
          </div>

          <ReactionTimeTestClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'reaction-time-test'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
