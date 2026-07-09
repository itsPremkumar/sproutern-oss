import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import RiskRadarClient from './RiskRadarClient';
import {
  Target,
  Percent,
  TrendingUp,
  AlertTriangle,
  Calculator,
  Dice1,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('risk-radar');

export default function RiskRadarPage() {
  const enhancedContent = getEnhancedGameContent('risk-radar');
  return (
    <>
      <GameSchemaScript slug={'risk-radar'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <Target className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Risk Radar</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Think in probabilities. Learn to assess risks and calculate
              expected outcomes for better decisions under uncertainty.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
              <Target className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-bold">Risk Assessment</p>
                <p className="text-xs text-muted-foreground">
                  Evaluate threats
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Expected Value</p>
                <p className="text-xs text-muted-foreground">
                  Calculate outcomes
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Percent className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Probability</p>
                <p className="text-xs text-muted-foreground">Think in odds</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <TrendingUp className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Decisions</p>
                <p className="text-xs text-muted-foreground">
                  Under uncertainty
                </p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <RiskRadarClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'risk-radar'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
