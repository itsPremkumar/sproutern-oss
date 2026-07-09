import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import RegexMasterClient from './RegexMasterClient';

export const metadata: Metadata = getGameMetadata('coding/regex-master');

export default function RegexMasterPage() {
  const enhancedContent = getEnhancedGameContent('coding/regex-master');

  return (
    <>
      <GameSchemaScript slug="coding/regex-master" />
      <RegexMasterClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/regex-master"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
