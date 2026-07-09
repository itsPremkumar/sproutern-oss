import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import { Metadata } from 'next';

import EmailEtiquetteClient from './EmailEtiquetteClient';
import { Mail, PenTool, Send, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = getGameMetadata('email-etiquette');

export default function EmailEtiquettePage() {
  const enhancedContent = getEnhancedGameContent('email-etiquette');
  return (
    <>
      <GameSchemaScript slug={'email-etiquette'} />
      <div className="container py-12">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <Mail className="h-4 w-4" />
              Communication Skills
            </div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Email Etiquette
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              In the corporate world, how you write is as important as what you
              say. Test your ability to craft professional, effective emails.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-900/20">
              <PenTool className="h-6 w-6 text-slate-600" />
              <div>
                <p className="font-bold">Drafting</p>
                <p className="text-xs text-muted-foreground">
                  Tone & Structure
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-900/20">
              <Send className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-bold">Cold Reach</p>
                <p className="text-xs text-muted-foreground">Networking</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-900/20">
              <MessageSquare className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-bold">Replies</p>
                <p className="text-xs text-muted-foreground">Conflict mgmt</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-900/20">
              <Mail className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-bold">Pro Tips</p>
                <p className="text-xs text-muted-foreground">Best practices</p>
              </div>
            </div>
          </div>

          {/* Game */}
          <EmailEtiquetteClient />

          {enhancedContent && (
            <GameSEOContent
              gameSlug={'email-etiquette'}
              enhancedContent={enhancedContent}
            />
          )}
        </div>
      </div>
    </>
  );
}
