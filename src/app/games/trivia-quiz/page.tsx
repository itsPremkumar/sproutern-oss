import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import TriviaQuizClient from './TriviaQuizClient';
import { HelpCircle, BookOpen, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('trivia-quiz');

export default function TriviaQuizPage() {
  const enhancedContent = getEnhancedGameContent('trivia-quiz');
  return (
    <>
      <GameSchemaScript slug={'trivia-quiz'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              <HelpCircle className="h-4 w-4" />
              General Knowledge
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Trivia Quiz</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Test your knowledge across science, geography, history, and more.
              How many can you get right?
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-900/20">
              <HelpCircle className="h-6 w-6 text-violet-600" />
              <div>
                <p className="font-bold">Trivia</p>
                <p className="text-xs text-muted-foreground">Fun facts</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Topics</p>
                <p className="text-xs text-muted-foreground">
                  Various subjects
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <TrendingUp className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Learn</p>
                <p className="text-xs text-muted-foreground">
                  Expand knowledge
                </p>
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

          <TriviaQuizClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'trivia-quiz'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
