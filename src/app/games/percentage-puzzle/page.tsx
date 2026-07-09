import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import PercentagePuzzleClient from './PercentagePuzzleClient';
import { Percent, Calculator, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('percentage-puzzle');

export default function PercentagePuzzlePage() {
  const enhancedContent = getEnhancedGameContent('percentage-puzzle');
  return (
    <>
      <GameSchemaScript slug={'percentage-puzzle'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              <Percent className="h-4 w-4" />
              Math Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Percentage Puzzle
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master percentage calculations through practical problems.
              Discounts, markups, and percentage changes - all in one game!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
              <Percent className="h-6 w-6 text-teal-600" />
              <div>
                <p className="font-bold">Percentages</p>
                <p className="text-xs text-muted-foreground">All types</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Practical</p>
                <p className="text-xs text-muted-foreground">Real scenarios</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Harder problems</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Scoring</p>
                <p className="text-xs text-muted-foreground">Track progress</p>
              </div>
            </div>
          </div>

          <PercentagePuzzleClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'percentage-puzzle'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
