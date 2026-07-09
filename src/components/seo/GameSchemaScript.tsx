import {
  getGameSchemaScript,
  getGamesCollectionSchemaScript,
} from '@/lib/seo/game-schema-generator';
import {
  generateGameSpeakableSchema,
  generateGameAEOFAQSchema,
} from '@/lib/seo/game-aeo-optimization';
import {
  generateGameSGESchemas,
  getGameSGEContent,
} from '@/lib/seo/game-sge-optimization';
import { generateGameGeoMarkup, GameRegion } from '@/lib/seo/game-geo-seo';

interface GameSchemaScriptProps {
  slug: string;
  enhancedFaqs?: { question: string; answer: string }[];
  category?: string;
  skills?: string[];
  region?: GameRegion;
}

/**
 * Component to inject game-specific JSON-LD schema into the page
 * Now includes: VideoGame, WebApplication, FAQ, Speakable, Educational, and GEO schemas
 * Use this on individual game pages for rich search results
 */
export function GameSchemaScript({
  slug,
  enhancedFaqs,
  category = 'memory',
  skills = [],
  region = 'IN',
}: GameSchemaScriptProps) {
  const baseSchema = getGameSchemaScript(slug, enhancedFaqs);
  const speakableSchema = generateGameSpeakableSchema(slug);
  const sgeSchemas = generateGameSGESchemas(slug, category, skills);
  const geoMarkup = generateGameGeoMarkup(slug, region);

  // Combine all schemas
  const allSchemas: object[] = [];

  // Add base schema (already parsed)
  if (baseSchema) {
    try {
      const parsed = JSON.parse(baseSchema);
      if (Array.isArray(parsed)) {
        allSchemas.push(...parsed);
      } else {
        allSchemas.push(parsed);
      }
    } catch {
      // Keep existing if parse fails
    }
  }

  // Add speakable schema for voice search
  if (speakableSchema) {
    allSchemas.push(speakableSchema);
  }

  // Add educational schema for SGE
  if (sgeSchemas.educational) {
    allSchemas.push(sgeSchemas.educational);
  }

  // Add learning resource schema
  if (sgeSchemas.learningResource) {
    allSchemas.push(sgeSchemas.learningResource);
  }

  // Add geo markup
  if (geoMarkup) {
    allSchemas.push(geoMarkup);
  }

  if (allSchemas.length === 0) {
    return null;
  }

  return (
    <script
      id={`game-schema-${slug}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
    />
  );
}

/**
 * Component to inject games collection schema into the main games page
 */
export function GamesCollectionSchemaScript() {
  const schema = getGamesCollectionSchemaScript();

  return (
    <script
      id="games-collection-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schema }}
    />
  );
}
