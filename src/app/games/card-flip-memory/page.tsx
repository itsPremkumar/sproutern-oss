import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import CardFlipMemoryClient from './CardFlipMemoryClient';
import { Layers, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('card-flip-memory');

export default function CardFlipMemoryPage() {
  const enhancedContent = getEnhancedGameContent('card-flip-memory');
  return (
    <>
      <GameSchemaScript slug={'card-flip-memory'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              <Layers className="h-4 w-4" />
              Memory Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Card Flip Memory
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Flip cards to find matching pairs with themed emoji decks.
              Challenge yourself with different themes and grid sizes!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
              <Layers className="h-6 w-6 text-violet-600" />
              <div>
                <p className="font-bold">Themed</p>
                <p className="text-xs text-muted-foreground">Emoji decks</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Grid Sizes</p>
                <p className="text-xs text-muted-foreground">4x4 to 6x6</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Timer</p>
                <p className="text-xs text-muted-foreground">Beat the clock</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Fun</p>
                <p className="text-xs text-muted-foreground">
                  Addictive gameplay
                </p>
              </div>
            </div>
          </div>

          <CardFlipMemoryClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'card-flip-memory'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
