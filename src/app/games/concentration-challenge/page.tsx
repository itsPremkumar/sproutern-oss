import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ConcentrationChallengeClient from './ConcentrationChallengeClient';
import { Focus, Brain, TrendingUp, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('concentration-challenge');

export default function ConcentrationChallengePage() {
  const enhancedContent = getEnhancedGameContent('concentration-challenge');
  return (
    <>
      <GameSchemaScript slug={'concentration-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <Focus className="h-4 w-4" />
              Concentration Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Concentration Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Complete tasks while resisting visual distractions. Build the
              mental resilience to focus in any environment.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-4 dark:bg-pink-900/20">
              <Focus className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-bold">Distractions</p>
                <p className="text-xs text-muted-foreground">Learn to ignore</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Math Tasks</p>
                <p className="text-xs text-muted-foreground">Solve problems</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">
                  More distractions
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Focus Score</p>
                <p className="text-xs text-muted-foreground">Track accuracy</p>
              </div>
            </div>
          </div>

          <ConcentrationChallengeClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'concentration-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
