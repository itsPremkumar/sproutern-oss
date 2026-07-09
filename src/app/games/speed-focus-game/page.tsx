import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SpeedFocusGameClient from './SpeedFocusGameClient';
import { Zap, Target, TrendingUp, Brain } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('speed-focus-game');

export default function SpeedFocusGamePage() {
  const enhancedContent = getEnhancedGameContent('speed-focus-game');
  return (
    <>
      <GameSchemaScript slug={'speed-focus-game'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Zap className="h-4 w-4" />
              Speed & Focus
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Speed Focus Game
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Press the correct key as fast as you can! Test your speed and
              accuracy under pressure.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Speed</p>
                <p className="text-xs text-muted-foreground">Be quick</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Target className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Accuracy</p>
                <p className="text-xs text-muted-foreground">Don&apos;t miss</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Gets faster</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Focus</p>
                <p className="text-xs text-muted-foreground">Stay sharp</p>
              </div>
            </div>
          </div>

          <SpeedFocusGameClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'speed-focus-game'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
