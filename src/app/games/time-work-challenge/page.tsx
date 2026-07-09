import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import TimeWorkChallengeClient from './TimeWorkChallengeClient';
import { Clock, Users, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('time-work-challenge');

export default function TimeWorkChallengePage() {
  const enhancedContent = getEnhancedGameContent('time-work-challenge');
  return (
    <>
      <GameSchemaScript slug={'time-work-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Clock className="h-4 w-4" />
              Aptitude Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Time & Work Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Master time and work calculations with practical problems.
              Essential for competitive exams and aptitude tests.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <Clock className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">Time</p>
                <p className="text-xs text-muted-foreground">Days & hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Workers</p>
                <p className="text-xs text-muted-foreground">Combined work</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Harder problems</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn formulas</p>
              </div>
            </div>
          </div>

          <TimeWorkChallengeClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'time-work-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
