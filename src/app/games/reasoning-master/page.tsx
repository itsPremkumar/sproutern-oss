import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ReasoningMasterClient from './ReasoningMasterClient';
import { Scale, Shapes, ArrowRightLeft, BrainCircuit } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('reasoning-master');

export default function ReasoningMasterPage() {
  const enhancedContent = getEnhancedGameContent('reasoning-master');
  return (
    <>
      <GameSchemaScript slug={'reasoning-master'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              <Shapes className="h-4 w-4" />
              Abstract Reasoning
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Reasoning Master
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Unlock your abstract thinking potential. Solve complex visual
              analogies by identifying hidden relationships.
            </p>
          </div>

          {/* Game Component */}
          <ReasoningMasterClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'reasoning-master'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
