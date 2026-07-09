import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MemoryMatchClient from './MemoryMatchClient';
import { Layers, Brain, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('memory-match');

export default function MemoryMatchPage() {
  const enhancedContent = getEnhancedGameContent('memory-match');
  return (
    <>
      <GameSchemaScript slug={'memory-match'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              <Layers className="h-4 w-4" />
              Memory Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Memory Match
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find matching pairs of cards to test and improve your visual
              memory. Start with fewer cards and work your way up to larger
              grids.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Layers className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Pair Matching</p>
                <p className="text-xs text-muted-foreground">Find matches</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">
                  Increasing grids
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Score Tracking</p>
                <p className="text-xs text-muted-foreground">
                  Monitor progress
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">3 Difficulties</p>
                <p className="text-xs text-muted-foreground">Easy to Hard</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <MemoryMatchClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'memory-match'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
