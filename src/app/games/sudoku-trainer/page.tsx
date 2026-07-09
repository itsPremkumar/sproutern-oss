import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SudokuTrainerClient from './SudokuTrainerClient';
import { Gamepad2, Brain, Lightbulb, Timer } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('sudoku-trainer');

export default function SudokuTrainerPage() {
  const enhancedContent = getEnhancedGameContent('sudoku-trainer');
  return (
    <>
      <GameSchemaScript slug={'sudoku-trainer'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
              <Gamepad2 className="h-4 w-4" />
              Number Logic
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Sudoku Trainer
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              The classic puzzle that trains your brain! Fill the 9×9 grid so
              every row, column, and 3×3 box contains the digits 1-9.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-sky-50 p-4 dark:bg-sky-900/20">
              <Gamepad2 className="h-6 w-6 text-sky-600" />
              <div>
                <p className="font-bold">Classic 9×9</p>
                <p className="text-xs text-muted-foreground">Standard sudoku</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Brain className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">3 Levels</p>
                <p className="text-xs text-muted-foreground">Easy to Hard</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <Lightbulb className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-bold">5 Hints</p>
                <p className="text-xs text-muted-foreground">When stuck</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Timer className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Timed</p>
                <p className="text-xs text-muted-foreground">Track speed</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <SudokuTrainerClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'sudoku-trainer'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
