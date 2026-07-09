import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import MathProofBuilderClient from './MathProofBuilderClient';
import { BookOpen, Brain, CheckCircle, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('math-proof-builder');

export default function MathProofBuilderPage() {
  const enhancedContent = getEnhancedGameContent('math-proof-builder');
  return (
    <>
      <GameSchemaScript slug={'math-proof-builder'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">
              <BookOpen className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Math Proof Builder
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master the art of mathematical proof. Construct rigorous proofs
              step-by-step.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Formal Proofs</p>
                <p className="text-xs text-muted-foreground">Rigorous logic</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Deep Reasoning</p>
                <p className="text-xs text-muted-foreground">Build intuition</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Hintable</p>
                <p className="text-xs text-muted-foreground">
                  Learn progressively
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <CheckCircle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Olympiad Level</p>
                <p className="text-xs text-muted-foreground">
                  Competition ready
                </p>
              </div>
            </div>
          </div>

          <MathProofBuilderClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'math-proof-builder'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
