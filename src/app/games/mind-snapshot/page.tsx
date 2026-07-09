import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MindSnapshotClient from './MindSnapshotClient';
import { Camera, Brain, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('mind-snapshot');

export default function MindSnapshotPage() {
  const enhancedContent = getEnhancedGameContent('mind-snapshot');
  return (
    <>
      <GameSchemaScript slug={'mind-snapshot'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Camera className="h-4 w-4" />
              Visual Memory
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Mind Snapshot
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              See a scene briefly, then answer questions about what you
              observed. How many details can you remember?
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 dark:bg-cyan-900/20">
              <Camera className="h-6 w-6 text-cyan-600" />
              <div>
                <p className="font-bold">Scenes</p>
                <p className="text-xs text-muted-foreground">Visual memory</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Details</p>
                <p className="text-xs text-muted-foreground">
                  Observation test
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">More details</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Accuracy</p>
                <p className="text-xs text-muted-foreground">Track precision</p>
              </div>
            </div>
          </div>

          <MindSnapshotClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'mind-snapshot'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
