import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import DebugArenaClient from './DebugArenaClient';

export const metadata: Metadata = getGameMetadata('coding/debug-arena');

export default function DebugArenaPage() {
  const enhancedContent = getEnhancedGameContent('coding/debug-arena');

  return (
    <>
      <GameSchemaScript slug="coding/debug-arena" />
      <DebugArenaClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/debug-arena"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
