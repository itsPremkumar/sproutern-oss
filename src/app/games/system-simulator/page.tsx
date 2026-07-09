import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SystemSimulatorGame from '@/app/games/system-simulator/SystemSimulatorGame';
import {
  Activity,
  Network,
  RefreshCcw,
  Zap,
  Brain,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('system-simulator');

export default function SystemSimulatorPage() {
  const enhancedContent = getEnhancedGameContent('system-simulator');
  return (
    <>
      <GameSchemaScript slug={'system-simulator'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Activity className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              System Simulator
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Everything is connected. Pull one lever, and watch the ripples
              change the world. Master systems thinking.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <Activity className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">Dynamics</p>
                <p className="text-xs text-muted-foreground">System behavior</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <RefreshCcw className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Feedback Loops</p>
                <p className="text-xs text-muted-foreground">
                  Reinforcing/balancing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Network className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Connections</p>
                <p className="text-xs text-muted-foreground">
                  See relationships
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Zap className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Leverage</p>
                <p className="text-xs text-muted-foreground">
                  High-impact points
                </p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <SystemSimulatorGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'system-simulator'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
