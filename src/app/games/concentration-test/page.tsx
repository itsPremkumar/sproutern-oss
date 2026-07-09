import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ConcentrationTestClient from './ConcentrationTestClient';
import { Target, Brain, Zap, Timer, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('concentration-test');

export default function ConcentrationTestPage() {
  const enhancedContent = getEnhancedGameContent('concentration-test');
  return (
    <>
      <GameSchemaScript slug={'concentration-test'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
              <Target className="h-4 w-4" />
              Focus Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Concentration Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Challenge your focus with the famous Stroop Test. Can you ignore
              conflicting information and stay focused?
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-900/20">
              <Target className="h-6 w-6 text-rose-600" />
              <div>
                <p className="font-bold">Stroop Test</p>
                <p className="text-xs text-muted-foreground">Classic method</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Timer className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Reaction Time</p>
                <p className="text-xs text-muted-foreground">Measured</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Zap className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Speed Bonus</p>
                <p className="text-xs text-muted-foreground">Fast = points</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Cognitive</p>
                <p className="text-xs text-muted-foreground">Science-based</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <ConcentrationTestClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'concentration-test'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
