import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DimensionalDetectiveClient from './DimensionalDetectiveClient';
import { Ruler, Brain, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('dimensional-detective');

export default function DimensionalDetectivePage() {
  const enhancedContent = getEnhancedGameContent('dimensional-detective');
  return (
    <>
      <GameSchemaScript slug={'dimensional-detective'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              <Ruler className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Dimensional Detective
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master dimensional analysis. A powerful tool for JEE Physics!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
              <Ruler className="h-6 w-6 text-violet-600" />
              <div>
                <p className="font-bold">Dimensions</p>
                <p className="text-xs text-muted-foreground">MLT system</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Analysis</p>
                <p className="text-xs text-muted-foreground">Check equations</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Verify</p>
                <p className="text-xs text-muted-foreground">Formula check</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">JEE</p>
                <p className="text-xs text-muted-foreground">Exam essential</p>
              </div>
            </div>
          </div>

          <DimensionalDetectiveClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'dimensional-detective'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
