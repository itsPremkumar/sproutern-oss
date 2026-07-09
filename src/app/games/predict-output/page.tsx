import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import PredictOutputClient from './PredictOutputClient';
import { Terminal, Code2, Bug, Cpu } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('predict-output');

export default function PredictOutputPage() {
  const enhancedContent = getEnhancedGameContent('predict-output');
  return (
    <>
      <GameSchemaScript slug={'predict-output'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <Terminal className="h-4 w-4" />
              Technical & Coding
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Predict the Output
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Can you read code like a compiler? Analyze snippets in popular
              languages and predict exactly what they will print or return.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4 dark:bg-yellow-900/20">
              <Code2 className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-bold">4 Languages</p>
                <p className="text-xs text-muted-foreground">
                  JS, Py, Java, C++
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Bug className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Debug</p>
                <p className="text-xs text-muted-foreground">Spot errors</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Cpu className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Logic</p>
                <p className="text-xs text-muted-foreground">Execution flow</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Terminal className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Placement</p>
                <p className="text-xs text-muted-foreground">Interview Ready</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <PredictOutputClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'predict-output'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
