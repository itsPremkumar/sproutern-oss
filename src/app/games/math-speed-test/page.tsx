import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MathSpeedTestClient from './MathSpeedTestClient';
import { Timer, Calculator, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('math-speed-test');

export default function MathSpeedTestPage() {
  const enhancedContent = getEnhancedGameContent('math-speed-test');
  return (
    <>
      <GameSchemaScript slug={'math-speed-test'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Timer className="h-4 w-4" />
              Speed Math
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Math Speed Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How many math problems can you solve in 60 seconds? Test your
              calculation speed and accuracy.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Timer className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Timed</p>
                <p className="text-xs text-muted-foreground">60 seconds</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Arithmetic</p>
                <p className="text-xs text-muted-foreground">+, -, ×, ÷</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Gets harder</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Accuracy</p>
                <p className="text-xs text-muted-foreground">Track both</p>
              </div>
            </div>
          </div>

          <MathSpeedTestClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'math-speed-test'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
