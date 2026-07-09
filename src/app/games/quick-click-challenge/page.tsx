import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import QuickClickChallengeClient from './QuickClickChallengeClient';
import { MousePointer, Zap, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('quick-click-challenge');

export default function QuickClickChallengePage() {
  const enhancedContent = getEnhancedGameContent('quick-click-challenge');
  return (
    <>
      <GameSchemaScript slug={'quick-click-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-700 dark:bg-lime-900/30 dark:text-lime-400">
              <MousePointer className="h-4 w-4" />
              Speed Game
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Quick Click Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Click on targets as fast as you can! Test your speed, accuracy,
              and hand-eye coordination.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-lime-50 p-4 dark:bg-lime-900/20">
              <MousePointer className="h-6 w-6 text-lime-600" />
              <div>
                <p className="font-bold">Click</p>
                <p className="text-xs text-muted-foreground">Hit targets</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Zap className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Speed</p>
                <p className="text-xs text-muted-foreground">Be fast</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Faster targets</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Accuracy</p>
                <p className="text-xs text-muted-foreground">Don&apos;t miss</p>
              </div>
            </div>
          </div>

          <QuickClickChallengeClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'quick-click-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
