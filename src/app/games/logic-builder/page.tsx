import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import LogicBuilderClient from './LogicBuilderClient';
import { Brain, Cpu, Zap, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('logic-builder');

export default function LogicBuilderPage() {
  const enhancedContent = getEnhancedGameContent('logic-builder');
  return (
    <>
      <GameSchemaScript slug={'logic-builder'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              <Cpu className="h-4 w-4" />
              Logic & Computer Science
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Logic Builder
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Test your understanding of digital logic. Select the correct logic
              gates to complete the circuit and light up the output.
            </p>
          </div>

          {/* Game Component */}
          <LogicBuilderClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'logic-builder'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
