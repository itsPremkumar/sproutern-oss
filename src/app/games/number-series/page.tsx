import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import NumberSeriesClient from './NumberSeriesClient';
import { Hash, TrendingUp, Target, Brain } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('number-series');

export default function NumberSeriesPage() {
  const enhancedContent = getEnhancedGameContent('number-series');
  return (
    <>
      <GameSchemaScript slug={'number-series'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Hash className="h-4 w-4" />
              Pattern Recognition
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Number Series
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find the missing number in the sequence. Train your pattern
              recognition skills for aptitude tests and IQ assessments.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <Hash className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">Sequences</p>
                <p className="text-xs text-muted-foreground">Find patterns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Logic</p>
                <p className="text-xs text-muted-foreground">Various rules</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Harder patterns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Hints</p>
                <p className="text-xs text-muted-foreground">Learn rules</p>
              </div>
            </div>
          </div>

          <NumberSeriesClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'number-series'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
