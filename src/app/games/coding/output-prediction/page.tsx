import { Metadata } from 'next';
import { getGameMetadata } from '@/lib/seo/games-seo';
import { GameSchemaScript } from '@/components/seo/GameSchemaScript';
import { GameSEOContent } from '@/components/seo/GameSEOContent';
import { getEnhancedGameContent } from '@/lib/seo/game-seo-content';
import OutputPredictionClient from './OutputPredictionClient';

export const metadata: Metadata = getGameMetadata('coding/output-prediction');

export default function OutputPredictionPage() {
  const enhancedContent = getEnhancedGameContent('coding/output-prediction');

  return (
    <>
      <GameSchemaScript slug="coding/output-prediction" />
      <OutputPredictionClient />
      {enhancedContent && (
        <GameSEOContent
          gameSlug="coding/output-prediction"
          enhancedContent={enhancedContent}
        />
      )}
    </>
  );
}
