import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import FocusBoosterClient from './FocusBoosterClient';
import { Eye, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('focus-booster');

export default function FocusBoosterPage() {
  const enhancedContent = getEnhancedGameContent('focus-booster');
  return (
    <>
      <GameSchemaScript slug={'focus-booster'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Eye className="h-4 w-4" />
              Focus Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Focus Booster
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Train your attention span with progressive focus exercises. Stay
              concentrated on targets while ignoring distractions.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <Eye className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">Target Tracking</p>
                <p className="text-xs text-muted-foreground">Follow targets</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">
                  Difficulty ramps
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Accuracy</p>
                <p className="text-xs text-muted-foreground">Track precision</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Sparkles className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">3 Modes</p>
                <p className="text-xs text-muted-foreground">
                  Various challenges
                </p>
              </div>
            </div>
          </div>

          <FocusBoosterClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'focus-booster'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
