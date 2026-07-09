import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MemoryPowerTestClient from './MemoryPowerTestClient';
import { Brain, TrendingUp, Target, Sparkles, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('memory-power-test');

export default function MemoryPowerTestPage() {
  const enhancedContent = getEnhancedGameContent('memory-power-test');
  return (
    <>
      <GameSchemaScript slug={'memory-power-test'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Brain className="h-4 w-4" />
              Memory Assessment
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Memory Power Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              A comprehensive test covering different types of memory. Discover
              your memory strengths and get a detailed score breakdown.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <Brain className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="font-bold">Multi-Type</p>
                <p className="text-xs text-muted-foreground">3 memory types</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BarChart3 className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Detailed</p>
                <p className="text-xs text-muted-foreground">Score breakdown</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">
                  Adaptive difficulty
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Insights</p>
                <p className="text-xs text-muted-foreground">
                  Personalized tips
                </p>
              </div>
            </div>
          </div>

          <MemoryPowerTestClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'memory-power-test'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
