import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SmartChoiceClient from './SmartChoiceClient';
import { Scale, Coins, ShoppingBag, TrendingUp } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('smart-choice');

export default function SmartChoicePage() {
  const enhancedContent = getEnhancedGameContent('smart-choice');
  return (
    <>
      <GameSchemaScript slug={'smart-choice'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <TrendingUp className="h-4 w-4" />
              Strategic Optimization
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Smart Choice
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Make the optimal decision. Select the best combination of items to
              maximize value without exceeding limits.
            </p>
          </div>

          {/* Game Component */}
          <SmartChoiceClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'smart-choice'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
