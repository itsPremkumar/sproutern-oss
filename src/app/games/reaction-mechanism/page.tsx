import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ReactionMechanismClient from './ReactionMechanismClient';
import { FlaskConical, Search, Brain, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('reaction-mechanism');

export default function ReactionMechanismPage() {
  const enhancedContent = getEnhancedGameContent('reaction-mechanism');
  return (
    <>
      <GameSchemaScript slug={'reaction-mechanism'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
              <Search className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Reaction Mechanism Detective
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Deduce reaction mechanisms from experimental evidence. Think like
              a chemist!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Search className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Detective</p>
                <p className="text-xs text-muted-foreground">Evidence-based</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <FlaskConical className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Mechanisms</p>
                <p className="text-xs text-muted-foreground">SN/E reactions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Brain className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Reasoning</p>
                <p className="text-xs text-muted-foreground">
                  Logical deduction
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Zap className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">JEE/NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          <ReactionMechanismClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'reaction-mechanism'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
