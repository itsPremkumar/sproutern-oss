import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import LogicPuzzleClient from './LogicPuzzleClient';
import { Lightbulb, Brain, Puzzle, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('logic-puzzle');

export default function LogicPuzzlePage() {
  const enhancedContent = getEnhancedGameContent('logic-puzzle');
  return (
    <>
      <GameSchemaScript slug={'logic-puzzle'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Lightbulb className="h-4 w-4" />
              Analytical Reasoning
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Logic Puzzles
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Put your deductive reasoning to the test! Solve puzzles using
              clues, eliminate possibilities, and find the logical answer.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <Lightbulb className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">5+ Types</p>
                <p className="text-xs text-muted-foreground">Of puzzles</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Deductive</p>
                <p className="text-xs text-muted-foreground">Reasoning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Puzzle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Step by step</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Award className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Exam Ready</p>
                <p className="text-xs text-muted-foreground">Common patterns</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <LogicPuzzleClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'logic-puzzle'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
