import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import SituationJudgmentClient from './SituationJudgmentClient';
import { Briefcase, Users, Scale, MessagesSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('situation-judgment');

export default function SituationJudgmentPage() {
  const enhancedContent = getEnhancedGameContent('situation-judgment');
  return (
    <>
      <GameSchemaScript slug={'situation-judgment'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <Briefcase className="h-4 w-4" />
              Career & HR
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Situation Judgment Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              How would you handle tough workplace situations? Test your
              judgment, soft skills, and professional etiquette.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Users className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Teamwork</p>
                <p className="text-xs text-muted-foreground">Collaboration</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Scale className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Ethics</p>
                <p className="text-xs text-muted-foreground">Integrity check</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <MessagesSquare className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Comms</p>
                <p className="text-xs text-muted-foreground">Professionalism</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Briefcase className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">HR Prep</p>
                <p className="text-xs text-muted-foreground">Common rounds</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <SituationJudgmentClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'situation-judgment'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
