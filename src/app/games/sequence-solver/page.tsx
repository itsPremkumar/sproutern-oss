import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SequenceSolverClient from './SequenceSolverClient';
import { ListOrdered, ArrowRight, Binary, SortAsc } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('sequence-solver');

export default function SequenceSolverPage() {
  const enhancedContent = getEnhancedGameContent('sequence-solver');
  return (
    <>
      <GameSchemaScript slug={'sequence-solver'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <ListOrdered className="h-4 w-4" />
              Pattern Logic
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Sequence Solver
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find the missing link. Analyze the series and predict what comes
              next in the sequence.
            </p>
          </div>

          {/* Game Component */}
          <SequenceSolverClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'sequence-solver'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
