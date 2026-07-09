import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SpellingBeeClient from './SpellingBeeClient';
import { PenTool, BookOpen, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('spelling-bee');

export default function SpellingBeePage() {
  const enhancedContent = getEnhancedGameContent('spelling-bee');
  return (
    <>
      <GameSchemaScript slug={'spelling-bee'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <PenTool className="h-4 w-4" />
              Spelling Game
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Spelling Bee
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Can you spell these words correctly? Test your spelling skills and
              learn new words along the way.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <PenTool className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">Spelling</p>
                <p className="text-xs text-muted-foreground">Write words</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Vocabulary</p>
                <p className="text-xs text-muted-foreground">Learn words</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Harder words</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Hints</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>
          </div>

          <SpellingBeeClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'spelling-bee'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
