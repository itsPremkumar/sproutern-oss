import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DataDetectiveClient from './DataDetectiveGame';
import {
  BarChart2,
  Search,
  Eye,
  AlertTriangle,
  TrendingUp,
  PieChart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('data-detective');

export default function DataDetectivePage() {
  const enhancedContent = getEnhancedGameContent('data-detective');
  return (
    <>
      <GameSchemaScript slug={'data-detective'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <BarChart2 className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Data Detective
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Extract insights from data. Learn to spot what the data says, what
              it doesn&apos;t say, and what it might be hiding.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BarChart2 className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Chart Types</p>
                <p className="text-xs text-muted-foreground">Bar, line, pie</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Search className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Spot Anomalies</p>
                <p className="text-xs text-muted-foreground">Find outliers</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Avoid Traps</p>
                <p className="text-xs text-muted-foreground">Common mistakes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Trends</p>
                <p className="text-xs text-muted-foreground">
                  Pattern analysis
                </p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <DataDetectiveClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'data-detective'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
