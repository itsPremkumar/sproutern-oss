import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import VisualLogicGameClient from './VisualLogicGameClient';
import { Calculator, Divide, FunctionSquare, Sigma } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('visual-logic-game');

export default function VisualLogicGamePage() {
  const enhancedContent = getEnhancedGameContent('visual-logic-game');
  return (
    <>
      <GameSchemaScript slug={'visual-logic-game'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-semibold text-lime-700 dark:bg-lime-900/30 dark:text-lime-400">
              <FunctionSquare className="h-4 w-4" />
              Visual Math
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Visual Logic
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Math doesn't have to be boring. Find the value of each shape to
              solve the final equation.
            </p>
          </div>

          {/* Game Component */}
          <VisualLogicGameClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'visual-logic-game'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
