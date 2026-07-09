import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import BrainLogicTestClient from './BrainLogicTestClient';
import { Brain, HelpCircle, CheckSquare, Lightbulb } from 'lucide-react';

export const metadata: Metadata = getGameMetadata('brain-logic-test');

export default function BrainLogicTestPage() {
  const enhancedContent = getEnhancedGameContent('brain-logic-test');
  return (
    <>
      <GameSchemaScript slug={'brain-logic-test'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <Brain className="h-4 w-4" />
              Logical Reasoning
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Brain Logic Test
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Put your critical thinking to the test. multifaceted logic
              questions designed to challenge your deductive skills.
            </p>
          </div>

          {/* Game Component */}
          <BrainLogicTestClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'brain-logic-test'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
