import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import FallacyDetectiveClient from './FallacyDetectiveClient';
import {
  Search,
  MessageSquare,
  AlertTriangle,
  Brain,
  Scale,
  Lightbulb,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('fallacy-detective');

export default function FallacyDetectivePage() {
  const enhancedContent = getEnhancedGameContent('fallacy-detective');
  return (
    <>
      <GameSchemaScript slug={'fallacy-detective'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              <Search className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Fallacy Detective
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Spot the flaw in the argument. Learn to identify logical fallacies
              used in debates, ads, and everyday conversations.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-amber-50 p-4 dark:bg-amber-900/20">
              <Search className="h-6 w-6 text-amber-600" />
              <div>
                <p className="font-bold">15+ Fallacies</p>
                <p className="text-xs text-muted-foreground">To identify</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <MessageSquare className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Real Examples</p>
                <p className="text-xs text-muted-foreground">From debates</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Brain className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Critical Thinking</p>
                <p className="text-xs text-muted-foreground">
                  Sharpen reasoning
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Lightbulb className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Learn why</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <FallacyDetectiveClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'fallacy-detective'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
