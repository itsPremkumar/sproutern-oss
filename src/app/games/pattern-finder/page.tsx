import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import PatternFinderClient from './PatternFinderClient';
import { Scan, Search, Grid, Eye } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('pattern-finder');

export default function PatternFinderPage() {
  const enhancedContent = getEnhancedGameContent('pattern-finder');
  return (
    <>
      <GameSchemaScript slug={'pattern-finder'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Scan className="h-4 w-4" />
              Observation & Focus
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Pattern Finder
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Train your eyes to spot details. Find the matching patterns hidden
              in the grid as fast as you can.
            </p>
          </div>

          {/* Game Component */}
          <PatternFinderClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'pattern-finder'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
