import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DeepProblemMarathonGame from './DeepProblemMarathonGame';
import { Trophy, Brain, Target, Timer, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('deep-problem-marathon');

export default function DeepProblemMarathonPage() {
  const enhancedContent = getEnhancedGameContent('deep-problem-marathon');
  return (
    <>
      <GameSchemaScript slug={'deep-problem-marathon'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
              <Trophy className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Deep Problem Marathon
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Think you can handle JEE Advanced level? Test your endurance with
              multi-layered problems that require sustained focus and chain
              reasoning.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-900/20">
              <Trophy className="h-6 w-6 text-rose-600" />
              <div>
                <p className="font-bold">Endurance</p>
                <p className="text-xs text-muted-foreground">
                  Stamina building
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Layers className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Multi-Step</p>
                <p className="text-xs text-muted-foreground">Chain reasoning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">JEE Advanced</p>
                <p className="text-xs text-muted-foreground">
                  Top-level difficulty
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Deep Focus</p>
                <p className="text-xs text-muted-foreground">
                  Extended thinking
                </p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <DeepProblemMarathonGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'deep-problem-marathon'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
