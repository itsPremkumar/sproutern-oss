import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import AlgorithmThinkingClient from './AlgorithmThinkingClient';
import { GitBranch, Box, Workflow, Network } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('algorithm-thinking');

export default function AlgorithmThinkingPage() {
  const enhancedContent = getEnhancedGameContent('algorithm-thinking');
  return (
    <>
      <GameSchemaScript slug={'algorithm-thinking'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Workflow className="h-4 w-4" />
              Algorithm Design
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Algorithm Thinking
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Don't just write code — design the solution. Arrange logic steps
              to solve computational problems efficiently.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 dark:bg-cyan-900/20">
              <GitBranch className="h-6 w-6 text-cyan-600" />
              <div>
                <p className="font-bold">Flow Control</p>
                <p className="text-xs text-muted-foreground">Loops & Ifs</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Network className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Structure</p>
                <p className="text-xs text-muted-foreground">Logic building</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Box className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Core Algos</p>
                <p className="text-xs text-muted-foreground">Sort & Search</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Workflow className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Visual</p>
                <p className="text-xs text-muted-foreground">Step-by-step</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <AlgorithmThinkingClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'algorithm-thinking'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
