import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import AntonymChallengeClient from './AntonymChallengeClient';
import { ArrowRightLeft, BookOpen, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('antonym-challenge');

export default function AntonymChallengePage() {
  const enhancedContent = getEnhancedGameContent('antonym-challenge');
  return (
    <>
      <GameSchemaScript slug={'antonym-challenge'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <ArrowRightLeft className="h-4 w-4" />
              Vocabulary Game
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Antonym Challenge
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find the opposite of each word. Build your vocabulary for exams
              and improve your English skills.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
              <ArrowRightLeft className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-bold">Antonyms</p>
                <p className="text-xs text-muted-foreground">Opposite words</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Vocabulary</p>
                <p className="text-xs text-muted-foreground">Word learning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Progressive</p>
                <p className="text-xs text-muted-foreground">Harder words</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Target className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Scoring</p>
                <p className="text-xs text-muted-foreground">Track progress</p>
              </div>
            </div>
          </div>

          <AntonymChallengeClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'antonym-challenge'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
