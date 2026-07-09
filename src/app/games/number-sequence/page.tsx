import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import NumberSequenceClient from './NumberSequenceClient';
import {
  Hash,
  Brain,
  TrendingUp,
  Sparkles,
  Target,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('number-sequence');

export default function NumberSequencePage() {
  const enhancedContent = getEnhancedGameContent('number-sequence');
  return (
    <>
      <GameSchemaScript slug={'number-sequence'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Hash className="h-4 w-4" />
              Mathematical Reasoning
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Number Sequence
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Crack the code! Find the pattern and predict the next number. From
              simple arithmetic to tricky Fibonacci sequences.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Hash className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">8+ Patterns</p>
                <p className="text-xs text-muted-foreground">To master</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Logic Based</p>
                <p className="text-xs text-muted-foreground">
                  Not memorization
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn why</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Sparkles className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Hints</p>
                <p className="text-xs text-muted-foreground">When stuck</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <NumberSequenceClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'number-sequence'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
