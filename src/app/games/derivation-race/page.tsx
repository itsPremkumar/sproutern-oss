import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DerivationRaceClient from './DerivationRaceClient';
import { GitBranch, Brain, CheckCircle, Timer } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('derivation-race');

export default function DerivationRacePage() {
  const enhancedContent = getEnhancedGameContent('derivation-race');
  return (
    <>
      <GameSchemaScript slug={'derivation-race'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <GitBranch className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Derivation Race
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master the art of mathematical derivation. Arrange steps in the
              correct order to derive famous formulas from first principles.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <GitBranch className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">Step-by-Step</p>
                <p className="text-xs text-muted-foreground">Logical flow</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Deep Learning</p>
                <p className="text-xs text-muted-foreground">
                  True understanding
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Timer className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Timed</p>
                <p className="text-xs text-muted-foreground">Speed bonus</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <CheckCircle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">JEE/NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <DerivationRaceClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'derivation-race'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
