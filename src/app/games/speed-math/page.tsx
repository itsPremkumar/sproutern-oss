import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SpeedMathClient from './SpeedMathClient';
import { Calculator, Zap, TrendingUp, Clock, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('speed-math');

export default function SpeedMathPage() {
  const enhancedContent = getEnhancedGameContent('speed-math');
  return (
    <>
      <GameSchemaScript slug={'speed-math'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <Calculator className="h-4 w-4" />
              Speed Challenge
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Speed Math</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How fast can you calculate? Race against the clock and push your
              mental math abilities to the limit.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">4 Operations</p>
                <p className="text-xs text-muted-foreground">+ - × ÷</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Time Bonus</p>
                <p className="text-xs text-muted-foreground">Speed = points</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Streak System</p>
                <p className="text-xs text-muted-foreground">Build momentum</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Clock className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Timed</p>
                <p className="text-xs text-muted-foreground">10-15 seconds</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <SpeedMathClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'speed-math'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
