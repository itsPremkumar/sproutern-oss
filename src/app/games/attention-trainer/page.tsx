import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import AttentionTrainerClient from './AttentionTrainerClient';
import { Crosshair, Brain, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('attention-trainer');

export default function AttentionTrainerPage() {
  const enhancedContent = getEnhancedGameContent('attention-trainer');
  return (
    <>
      <GameSchemaScript slug={'attention-trainer'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
              <Crosshair className="h-4 w-4" />
              Attention Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Attention Trainer
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Track multiple moving targets through a field of distractors.
              Build your ability to maintain focus on multiple things at once.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-900/20">
              <Crosshair className="h-6 w-6 text-rose-600" />
              <div>
                <p className="font-bold">Multi-Track</p>
                <p className="text-xs text-muted-foreground">
                  Multiple targets
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Dynamic</p>
                <p className="text-xs text-muted-foreground">Moving objects</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">
                  Increasing speed
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Precision</p>
                <p className="text-xs text-muted-foreground">
                  Accuracy tracking
                </p>
              </div>
            </div>
          </div>

          <AttentionTrainerClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'attention-trainer'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
