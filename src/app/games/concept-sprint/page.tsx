import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ConceptSprintGame from './ConceptSprintGame';
import { Rocket, Brain, Target, Timer, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('concept-sprint');

export default function ConceptSprintPage() {
  const enhancedContent = getEnhancedGameContent('concept-sprint');
  return (
    <>
      <GameSchemaScript slug={'concept-sprint'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Rocket className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Concept Sprint
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Can you explain core Physics and Math concepts clearly? Prove your
              understanding by solving challenging follow-up problems. Perfect
              for JEE/NEET aspirants.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <Rocket className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">Rapid Fire</p>
                <p className="text-xs text-muted-foreground">Quick concepts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Deep Understanding</p>
                <p className="text-xs text-muted-foreground">Prove mastery</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Target className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Follow-up MCQs</p>
                <p className="text-xs text-muted-foreground">Apply concepts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Timer className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">JEE/NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <ConceptSprintGame />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'concept-sprint'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
