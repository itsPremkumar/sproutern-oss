import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import FermiEstimationGame from './FermiEstimationGame';
import { Gauge, Brain, Calculator, Lightbulb, Target, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('fermi-estimation-duel');

export default function FermiEstimationPage() {
  const enhancedContent = getEnhancedGameContent('fermi-estimation-duel');
  return (
    <>
      <GameSchemaScript slug={'fermi-estimation-duel'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400">
              <Gauge className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Fermi Estimation Duel
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How many piano tuners are in Chicago? How many tennis balls fit in
              a school bus? Master the art of order-of-magnitude estimation.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-cyan-50 p-4 dark:bg-cyan-900/20">
              <Gauge className="h-6 w-6 text-cyan-600" />
              <div>
                <p className="font-bold">Estimation</p>
                <p className="text-xs text-muted-foreground">
                  Order of magnitude
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Calculator className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Quick Math</p>
                <p className="text-xs text-muted-foreground">
                  Back of envelope
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Lightbulb className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Logical Breakdown</p>
                <p className="text-xs text-muted-foreground">Step by step</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Consulting</p>
                <p className="text-xs text-muted-foreground">Interview prep</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <FermiEstimationGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'fermi-estimation-duel'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
