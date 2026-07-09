import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import OrganicSynthesisClient from './OrganicSynthesisClient';
import { FlaskConical, Brain, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('organic-synthesis');

export default function OrganicSynthesisPage() {
  const enhancedContent = getEnhancedGameContent('organic-synthesis');
  return (
    <>
      <GameSchemaScript slug={'organic-synthesis'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <FlaskConical className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Organic Synthesis Planner
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master retrosynthesis by planning multi-step synthesis routes from
              starting materials to target products.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <FlaskConical className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="font-bold">Synthesis</p>
                <p className="text-xs text-muted-foreground">Multi-step</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Retrosynthesis</p>
                <p className="text-xs text-muted-foreground">
                  Backward planning
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Reagent Select</p>
                <p className="text-xs text-muted-foreground">Choose wisely</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">JEE/NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          <OrganicSynthesisClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'organic-synthesis'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
