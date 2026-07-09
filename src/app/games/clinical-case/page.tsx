import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import ClinicalCaseClient from './ClinicalCaseClient';
import { Stethoscope, Brain, ClipboardList, Zap } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('clinical-case');

export default function ClinicalCasePage() {
  const enhancedContent = getEnhancedGameContent('clinical-case');
  return (
    <>
      <GameSchemaScript slug={'clinical-case'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-400">
              <Stethoscope className="h-4 w-4" />
              Elite Training
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Clinical Case Puzzle
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Sharpen your diagnostic reasoning with NEET-style clinical
              vignettes.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4 dark:bg-red-900/20">
              <Stethoscope className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-bold">Clinical</p>
                <p className="text-xs text-muted-foreground">Real scenarios</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Brain className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Diagnostic</p>
                <p className="text-xs text-muted-foreground">
                  Reasoning skills
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <ClipboardList className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Lab Analysis</p>
                <p className="text-xs text-muted-foreground">
                  Interpret results
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Zap className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">NEET</p>
                <p className="text-xs text-muted-foreground">Exam aligned</p>
              </div>
            </div>
          </div>

          <ClinicalCaseClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'clinical-case'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
