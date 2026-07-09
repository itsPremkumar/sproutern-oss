import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import CausalChainBuilderClient from './CausalChainBuilderClient';
import {
  GitBranch,
  Brain,
  Target,
  Zap,
  Network,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('causal-chain-builder');

export default function CausalChainBuilderPage() {
  const enhancedContent = getEnhancedGameContent('causal-chain-builder');
  return (
    <>
      <GameSchemaScript slug={'causal-chain-builder'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              <GitBranch className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Causal Chain Builder
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Think in systems. Build cause-and-effect chains to understand how
              actions create ripple effects in complex systems.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
              <GitBranch className="h-6 w-6 text-violet-600" />
              <div>
                <p className="font-bold">Chain Building</p>
                <p className="text-xs text-muted-foreground">Step by step</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Network className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Feedback Loops</p>
                <p className="text-xs text-muted-foreground">System dynamics</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Real Scenarios</p>
                <p className="text-xs text-muted-foreground">Business cases</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Brain className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Mental Models</p>
                <p className="text-xs text-muted-foreground">Think better</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <CausalChainBuilderClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'causal-chain-builder'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
