import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import RefactorChallengeClient from './RefactorChallengeClient';

export const metadata: Metadata = getGameMetadata('coding/refactor-challenge');

export default function RefactorChallengePage() {
  const enhancedContent = getEnhancedGameContent('coding/refactor-challenge');

  return (
    <>
      <GameSchemaScript slug="coding/refactor-challenge" />
      <RefactorChallengeClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/refactor-challenge"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
