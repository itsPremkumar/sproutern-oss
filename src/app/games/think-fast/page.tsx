import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ThinkFastClient from './ThinkFastClient';
import { Zap, Timer, BrainCircuit, AlertCircle } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('think-fast');

export default function ThinkFastPage() {
  const enhancedContent = getEnhancedGameContent('think-fast');
  return (
    <>
      <GameSchemaScript slug={'think-fast'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Zap className="h-4 w-4" />
              Speed & Reaction
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Think Fast</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How fast can your brain process information? Make quick decisions
              before time runs out!
            </p>
          </div>

          {/* Game Component */}
          <ThinkFastClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'think-fast'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
