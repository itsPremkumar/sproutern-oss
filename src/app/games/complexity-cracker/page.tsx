import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ComplexityCrackerGame from '@/app/games/complexity-cracker/ComplexityCrackerGame';
import { Cpu, Timer, TrendingUp, Zap, Code, Activity } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('complexity-cracker');

export default function ComplexityCrackerPage() {
  const enhancedContent = getEnhancedGameContent('complexity-cracker');
  return (
    <>
      <GameSchemaScript slug={'complexity-cracker'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Cpu className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Complexity Cracker
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Speed isn&apos;t just about hardware—it&apos;s about logic. Master
              the art of algorithmic efficiency.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Cpu className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Big O</p>
                <p className="text-xs text-muted-foreground">
                  Notation mastery
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Timer className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Time Complexity</p>
                <p className="text-xs text-muted-foreground">O(1) to O(n!)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Optimization</p>
                <p className="text-xs text-muted-foreground">Improve code</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Code className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Interviews</p>
                <p className="text-xs text-muted-foreground">Top tech prep</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <ComplexityCrackerGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'complexity-cracker'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
