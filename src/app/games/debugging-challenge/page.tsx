import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DebuggingChallengeClient from './DebuggingChallengeClient';
import { Bug, ZoomIn, Terminal, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('debugging-challenge');

export default function DebuggingChallengePage() {
  const enhancedContent = getEnhancedGameContent('debugging-challenge');
  return (
    <>
      <GameSchemaScript slug={'debugging-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <Bug className="h-4 w-4" />
              Bug Hunter
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Debugging Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              The code compiles, but it doesn't work. Can you find the logic
              error? Identify infinite loops, scope issues, and off-by-one
              errors.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
              <Bug className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-bold">Logic Bugs</p>
                <p className="text-xs text-muted-foreground">Not just syntax</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <ZoomIn className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Analysis</p>
                <p className="text-xs text-muted-foreground">Read & Trace</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Terminal className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Real Code</p>
                <p className="text-xs text-muted-foreground">JS / Py / Java</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Shield className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Skills</p>
                <p className="text-xs text-muted-foreground">Troubleshooting</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <DebuggingChallengeClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'debugging-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
