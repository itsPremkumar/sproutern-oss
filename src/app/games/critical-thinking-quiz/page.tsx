import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import CriticalThinkingQuizClient from './CriticalThinkingQuizClient';
import {
  BrainCircuit,
  MessageSquare,
  ShieldAlert,
  Lightbulb,
} from 'lucide-react';

export const metadata: Metadata = getGameMetadata('critical-thinking-quiz');

export default function CriticalThinkingQuizPage() {
  const enhancedContent = getEnhancedGameContent('critical-thinking-quiz');
  return (
    <>
      <GameSchemaScript slug={'critical-thinking-quiz'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-400">
              <BrainCircuit className="h-4 w-4" />
              Analytical Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Critical Thinking Quiz
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Don't just accept information. Analyze it. Challenge your mind to
              spot errors in reasoning and bias.
            </p>
          </div>

          {/* Game Component */}
          <CriticalThinkingQuizClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'critical-thinking-quiz'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
