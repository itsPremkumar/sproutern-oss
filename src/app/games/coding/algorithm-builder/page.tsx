import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import AlgorithmBuilderClient from './AlgorithmBuilderClient';

export const metadata: Metadata = getGameMetadata('coding/algorithm-builder');

export default function AlgorithmBuilderPage() {
  const enhancedContent = getEnhancedGameContent('coding/algorithm-builder');

  return (
    <>
      <GameSchemaScript slug="coding/algorithm-builder" />
      <AlgorithmBuilderClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/algorithm-builder"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
