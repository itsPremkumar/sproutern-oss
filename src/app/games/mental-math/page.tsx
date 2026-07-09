import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MentalMathClient from './MentalMathClient';
import { Brain, Zap, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('mental-math');

export default function MentalMathPage() {
  const enhancedContent = getEnhancedGameContent('mental-math');
  return (
    <>
      <GameSchemaScript slug={'mental-math'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-fuchsia-100 px-4 py-2 text-sm font-semibold text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400">
              <Brain className="h-4 w-4" />
              Advanced Calculation
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Mental Math</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Learn powerful mental calculation techniques! From Vedic math
              shortcuts to percentage tricks — calculate faster than a
              calculator.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-fuchsia-50 p-4 dark:bg-fuchsia-900/20">
              <Brain className="h-6 w-6 text-fuchsia-600" />
              <div>
                <p className="font-bold">Vedic Math</p>
                <p className="text-xs text-muted-foreground">Ancient tricks</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Zap className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">10+ Techniques</p>
                <p className="text-xs text-muted-foreground">To master</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Lightbulb className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Tips Included</p>
                <p className="text-xs text-muted-foreground">Learn methods</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <TrendingUp className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Difficulty</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <MentalMathClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'mental-math'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
