import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import PatternRecognitionClient from './PatternRecognitionClient';
import { Puzzle, Brain, Sparkles, Eye, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('pattern-recognition');

export default function PatternRecognitionPage() {
  const enhancedContent = getEnhancedGameContent('pattern-recognition');
  return (
    <>
      <GameSchemaScript slug={'pattern-recognition'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Puzzle className="h-4 w-4" />
              Visual Logic
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Pattern Recognition
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              See the sequence, find the pattern, predict what comes next. Train
              the visual logic that powers IQ tests!
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <Puzzle className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">6+ Types</p>
                <p className="text-xs text-muted-foreground">Of patterns</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Eye className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Visual</p>
                <p className="text-xs text-muted-foreground">Color & shape</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Brain className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">IQ Training</p>
                <p className="text-xs text-muted-foreground">Core skill</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn patterns</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <PatternRecognitionClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'pattern-recognition'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
