import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import BiologyPathwayClient from './BiologyPathwayClient';
import { Dna, Brain, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('biology-pathway');

export default function BiologyPathwayPage() {
  const enhancedContent = getEnhancedGameContent('biology-pathway');
  return (
    <>
      <GameSchemaScript slug={'biology-pathway'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <Dna className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Biology Pathway Builder
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Build metabolic and signaling pathways. Understand systems biology
              through interactive puzzles.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-4 dark:bg-pink-900/20">
              <Dna className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-bold">Pathways</p>
                <p className="text-xs text-muted-foreground">
                  Metabolic chains
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Systems</p>
                <p className="text-xs text-muted-foreground">Causal thinking</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Enzymes</p>
                <p className="text-xs text-muted-foreground">Key regulators</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Zap className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          <BiologyPathwayClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'biology-pathway'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
