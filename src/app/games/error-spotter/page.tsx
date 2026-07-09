import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ErrorSpotterClient from './ErrorSpotterClient';
import { Search, Brain, AlertTriangle, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('error-spotter');

export default function ErrorSpotterPage() {
  const enhancedContent = getEnhancedGameContent('error-spotter');
  return (
    <>
      <GameSchemaScript slug={'error-spotter'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <Search className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Error Spotter
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Find hidden mistakes in solutions. Train your attention to detail!
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
              <Search className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-bold">Find Errors</p>
                <p className="text-xs text-muted-foreground">Sharp eye</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Debug</p>
                <p className="text-xs text-muted-foreground">Reasoning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Attention</p>
                <p className="text-xs text-muted-foreground">Detail oriented</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Zap className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">JEE/NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          <ErrorSpotterClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'error-spotter'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
