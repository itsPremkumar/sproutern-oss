import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import DecisionMatrixLabClient from './DecisionMatrixLabClient';
import {
  Grid3X3,
  Scale,
  CheckCircle,
  Brain,
  Target,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('decision-matrix-lab');

export default function DecisionMatrixLabPage() {
  const enhancedContent = getEnhancedGameContent('decision-matrix-lab');
  return (
    <>
      <GameSchemaScript slug={'decision-matrix-lab'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              <Grid3X3 className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Decision Matrix Lab
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Make complex decisions simpler. Learn to weigh criteria, score
              options, and find the optimal choice systematically.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
              <Grid3X3 className="h-6 w-6 text-teal-600" />
              <div>
                <p className="font-bold">Matrix Method</p>
                <p className="text-xs text-muted-foreground">
                  Structured approach
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Scale className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Weighted Criteria</p>
                <p className="text-xs text-muted-foreground">
                  What matters most
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Optimal Choice</p>
                <p className="text-xs text-muted-foreground">Best decision</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Consulting</p>
                <p className="text-xs text-muted-foreground">Pro framework</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <DecisionMatrixLabClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'decision-matrix-lab'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
