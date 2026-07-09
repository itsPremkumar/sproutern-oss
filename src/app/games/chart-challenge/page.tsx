import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ChartChallengeGame from '@/app/games/chart-challenge/ChartChallengeGame';
import {
  BarChart2,
  PieChart,
  Eye,
  AlertTriangle,
  TrendingUp,
  LineChart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('chart-challenge');

export default function ChartChallengePage() {
  const enhancedContent = getEnhancedGameContent('chart-challenge');
  return (
    <>
      <GameSchemaScript slug={'chart-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <BarChart2 className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Chart Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              From 3D pies to dual axes, charts can lie. Learn to spot the
              tricks and tell the truth with data.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-4 dark:bg-pink-900/20">
              <PieChart className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-bold">Chart Types</p>
                <p className="text-xs text-muted-foreground">
                  When to use each
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <AlertTriangle className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Spot Tricks</p>
                <p className="text-xs text-muted-foreground">
                  Misleading visuals
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <LineChart className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Best Practices</p>
                <p className="text-xs text-muted-foreground">
                  Design principles
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Eye className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Visual Literacy</p>
                <p className="text-xs text-muted-foreground">Read any chart</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <ChartChallengeGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'chart-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
