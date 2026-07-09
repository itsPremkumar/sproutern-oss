import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import CodeBattleClient from './CodeBattleClient';

export const metadata: Metadata = getGameMetadata('coding/code-battle');

export default function CodeBattlePage() {
  const enhancedContent = getEnhancedGameContent('coding/code-battle');

  return (
    <>
      <GameSchemaScript slug="coding/code-battle" />
      <CodeBattleClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/code-battle"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
