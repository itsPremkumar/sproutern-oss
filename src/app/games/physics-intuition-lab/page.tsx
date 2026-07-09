import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import PhysicsIntuitionLabClient from './PhysicsIntuitionLabClient';
import { Atom, Brain, Eye, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('physics-intuition-lab');

export default function PhysicsIntuitionLabPage() {
  const enhancedContent = getEnhancedGameContent('physics-intuition-lab');
  return (
    <>
      <GameSchemaScript slug={'physics-intuition-lab'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Atom className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Physics Intuition Lab
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Develop deep physical intuition. Predict what happens before you
              run the simulation.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 dark:bg-cyan-900/20">
              <Atom className="h-6 w-6 text-cyan-600" />
              <div>
                <p className="font-bold">Simulations</p>
                <p className="text-xs text-muted-foreground">Visual physics</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Prediction</p>
                <p className="text-xs text-muted-foreground">Before running</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Eye className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Visualization</p>
                <p className="text-xs text-muted-foreground">See physics</p>
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

          <PhysicsIntuitionLabClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'physics-intuition-lab'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
