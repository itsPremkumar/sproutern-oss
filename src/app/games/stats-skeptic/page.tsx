import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import StatsSkepticClient from './StatsSkepticGame';
import {
  Percent,
  AlertTriangle,
  Search,
  BarChart2,
  Eye,
  HelpCircle,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('stats-skeptic');

export default function StatsSkepticPage() {
  const enhancedContent = getEnhancedGameContent('stats-skeptic');
  return (
    <>
      <GameSchemaScript slug={'stats-skeptic'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Percent className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Stats Skeptic
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Don&apos;t just trust the numbers—interrogate them. Learn to
              identify weak statistical claims and misleading data.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 dark:bg-cyan-900/20">
              <Percent className="h-6 w-6 text-cyan-600" />
              <div>
                <p className="font-bold">P-Values</p>
                <p className="text-xs text-muted-foreground">
                  Significance tests
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BarChart2 className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Sample Size</p>
                <p className="text-xs text-muted-foreground">Power analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Bias Detection</p>
                <p className="text-xs text-muted-foreground">Spot problems</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Eye className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Critical Reading</p>
                <p className="text-xs text-muted-foreground">Media literacy</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <StatsSkepticClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'stats-skeptic'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
