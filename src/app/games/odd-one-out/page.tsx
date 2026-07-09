import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import OddOneOutClient from './OddOneOutClient';
import { Filter, CheckCircle, LayoutGrid, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('odd-one-out');

export default function OddOneOutPage() {
  const enhancedContent = getEnhancedGameContent('odd-one-out');
  return (
    <>
      <GameSchemaScript slug={'odd-one-out'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Filter className="h-4 w-4" />
              Logical Classification
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Odd One Out</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Spot the anomaly. Analyze the group and find the single item that
              breaks the rule.
            </p>
          </div>

          {/* Game Component */}
          <OddOneOutClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'odd-one-out'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
