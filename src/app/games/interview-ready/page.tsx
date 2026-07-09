import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import InterviewReadyClient from './InterviewReadyClient';
import { UserCheck, MessageSquare, Briefcase, Mic } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('interview-ready');

export default function InterviewReadyPage() {
  const enhancedContent = getEnhancedGameContent('interview-ready');
  return (
    <>
      <GameSchemaScript slug={'interview-ready'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Mic className="h-4 w-4" />
              Interview Prep
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Interview Ready
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Don't let nerves ruin your big day. Practice answering common
              interview questions and learn what recruiters really want to hear.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-indigo-50 p-4 dark:bg-indigo-900/20">
              <MessageSquare className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-bold">Answers</p>
                <p className="text-xs text-muted-foreground">STAR Method</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-4 dark:bg-pink-900/20">
              <UserCheck className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-bold">Confidence</p>
                <p className="text-xs text-muted-foreground">Reduce anxity</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <Briefcase className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">Careers</p>
                <p className="text-xs text-muted-foreground">All roles</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-teal-50 p-4 dark:bg-teal-900/20">
              <Mic className="h-6 w-6 text-teal-600" />
              <div>
                <p className="font-bold">Simulator</p>
                <p className="text-xs text-muted-foreground">Real Qs</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <InterviewReadyClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'interview-ready'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
