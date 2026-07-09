import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import StrategicStandoffClient from './StrategicStandoffClient';
import { Swords, Brain, Users, Target, TrendingUp, Scale } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('strategic-standoff');

export default function StrategicStandoffPage() {
  const enhancedContent = getEnhancedGameContent('strategic-standoff');
  return (
    <>
      <GameSchemaScript slug={'strategic-standoff'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
              <Swords className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Strategic Standoff
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Game theory in action. Learn to think strategically when your
              outcome depends on what others do.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900/20">
              <Swords className="h-6 w-6 text-slate-600" />
              <div>
                <p className="font-bold">Game Theory</p>
                <p className="text-xs text-muted-foreground">Strategic games</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Multi-Player</p>
                <p className="text-xs text-muted-foreground">
                  vs. rational agents
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Scale className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Nash Equilibrium</p>
                <p className="text-xs text-muted-foreground">
                  Optimal strategies
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Brain className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Business</p>
                <p className="text-xs text-muted-foreground">
                  Real applications
                </p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <StrategicStandoffClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'strategic-standoff'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
