import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import BiasBusterClient from './BiasBusterGame';
import {
  Brain,
  AlertTriangle,
  Lightbulb,
  Target,
  Eye,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('bias-buster');

export default function BiasBusterPage() {
  const enhancedContent = getEnhancedGameContent('bias-buster');
  return (
    <>
      <GameSchemaScript slug={'bias-buster'} />
      <div className="container py-12">
        <div className="mx-auto max-w-3xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700 dark:bg-pink-900/30 dark:text-pink-400">
              <Brain className="h-4 w-4" />
              Advanced Thinking
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Bias Buster</h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Recognize the hidden biases that affect your decisions. Learn to
              think more clearly and avoid common thinking traps.
            </p>
          </div>

          {/* Trust Signals */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-pink-50 p-4 dark:bg-pink-900/20">
              <Brain className="h-6 w-6 text-pink-600" />
              <div>
                <p className="font-bold">15+ Biases</p>
                <p className="text-xs text-muted-foreground">To recognize</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Eye className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Real Examples</p>
                <p className="text-xs text-muted-foreground">Practical cases</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <Shield className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Debiasing</p>
                <p className="text-xs text-muted-foreground">
                  Learn strategies
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-900/20">
              <Lightbulb className="h-6 w-6 text-orange-600" />
              <div>
                <p className="font-bold">Explanations</p>
                <p className="text-xs text-muted-foreground">Why it matters</p>
              </div>
            </div>
          </div>

          {/* Game Component */}
          <BiasBusterClient />
          {/* Enhanced SEO Content */}
          {enhancedContent && (
            <GameSEOContent
              gameSlug={'bias-buster'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
