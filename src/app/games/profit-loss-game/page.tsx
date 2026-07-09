import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ProfitLossGameClient from './ProfitLossGameClient';
import { TrendingUp, Calculator, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('profit-loss-game');

export default function ProfitLossGamePage() {
  const enhancedContent = getEnhancedGameContent('profit-loss-game');
  return (
    <>
      <GameSchemaScript slug={'profit-loss-game'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              Business Math
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Profit & Loss Game
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master business mathematics with profit and loss scenarios.
              Essential for aptitude tests and real-world financial decisions.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <DollarSign className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="font-bold">Business</p>
                <p className="text-xs text-muted-foreground">Real scenarios</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Calculations</p>
                <p className="text-xs text-muted-foreground">CP, SP, Profit</p>
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
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn formulas</p>
              </div>
            </div>
          </div>

          <ProfitLossGameClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'profit-loss-game'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
