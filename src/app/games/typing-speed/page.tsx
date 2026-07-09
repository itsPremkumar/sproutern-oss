import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import TypingSpeedClient from './TypingSpeedClient';
import { Keyboard, Zap, Clock, Target, Trophy } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('typing-speed');

export default function TypingSpeedPage() {
  const enhancedContent = getEnhancedGameContent('typing-speed');
  return (
    <>
      <GameSchemaScript slug={'typing-speed'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Keyboard className="h-4 w-4" />
              Speed &amp; Accuracy Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Typing Speed Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Test your typing speed in WPM with our developer-focused typing
              test. Practice coding syntax, sentences, and words under time
              pressure.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <Keyboard className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-bold">4 Modes</p>
                <p className="text-xs text-muted-foreground">To practice</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Clock className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">3 Durations</p>
                <p className="text-xs text-muted-foreground">
                  30s / 60s / 120s
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Zap className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Code Mode</p>
                <p className="text-xs text-muted-foreground">Real syntax</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Trophy className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">High Scores</p>
                <p className="text-xs text-muted-foreground">Track progress</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <TypingSpeedClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'typing-speed'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
