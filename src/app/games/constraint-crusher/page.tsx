import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ConstraintCrusherGame from '@/app/games/constraint-crusher/ConstraintCrusherGame';
import {
  Scale,
  Target,
  Calculator,
  Maximize,
  Package,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('constraint-crusher');

export default function ConstraintCrusherPage() {
  const enhancedContent = getEnhancedGameContent('constraint-crusher');
  return (
    <>
      <GameSchemaScript slug={'constraint-crusher'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Scale className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Constraint Crusher
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Life is full of limits. The goal isn&apos;t just to
              choose—it&apos;s to optimize. Maximize value under constraints.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <Scale className="h-6 w-6 text-emerald-600" />
              <div>
                <p className="font-bold">Optimization</p>
                <p className="text-xs text-muted-foreground">Maximize value</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Package className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Constraints</p>
                <p className="text-xs text-muted-foreground">
                  Limited resources
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Calculator className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Trade-offs</p>
                <p className="text-xs text-muted-foreground">
                  Strategic choices
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Efficiency</p>
                <p className="text-xs text-muted-foreground">Best outcomes</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <ConstraintCrusherGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'constraint-crusher'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
