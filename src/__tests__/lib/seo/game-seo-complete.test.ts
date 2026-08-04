/**
 * Game SEO Complete Tests
 * Tests for AEO, SGE, and GEO optimization utilities
 */

import {
  getGameAEOConfig,
  getGamePAAQuestions,
  generateGameSpeakableSchema,
  generateGameAEOFAQSchema,
  gameAEOConfigs,
} from '@/lib/seo/game-aeo-optimization';

import {
  getGameSGEContent,
  generateGameSGESchemas,
  getSGEMetaDescription,
  gameSGEContent,
} from '@/lib/seo/game-sge-optimization';

import {
  generateGameHrefLangTags,
  getGameGeoMetadata,
  getGameRegionBenefits,
  gameRegions,
  allGameSlugs,
} from '@/lib/seo/game-geo-seo';

// =============================================================================
// AEO OPTIMIZATION TESTS
// =============================================================================

describe('Game AEO Optimization', () => {
  describe('getGameAEOConfig', () => {
    it('should return AEO config for memory-matrix', () => {
      const config = getGameAEOConfig('memory-matrix');
      expect(config).toBeDefined();
      expect(config?.slug).toBe('memory-matrix');
      expect(config?.tldr).toBeDefined();
      expect(config?.keyTakeaways).toHaveLength(5);
    });

    it('should return null for unknown game', () => {
      const config = getGameAEOConfig('unknown-game');
      expect(config).toBeNull();
    });

    it('should have required fields for all games', () => {
      Object.values(gameAEOConfigs).forEach((config) => {
        expect(config.slug).toBeDefined();
        expect(config.primaryAnswer).toBeDefined();
        expect(config.tldr).toBeDefined();
        expect(config.keyTakeaways.length).toBeGreaterThan(0);
        expect(config.targetAudience.length).toBeGreaterThan(0);
        expect(config.primaryTopic).toBeDefined();
      });
    });
  });

  describe('getGamePAAQuestions', () => {
    it('should return PAA questions for memory-matrix', () => {
      const questions = getGamePAAQuestions('memory-matrix');
      expect(questions.length).toBeGreaterThan(0);
      expect(questions[0].question).toBeDefined();
      expect(questions[0].answer).toBeDefined();
    });

    it('should return empty array for unknown game', () => {
      const questions = getGamePAAQuestions('unknown-game');
      expect(questions).toEqual([]);
    });
  });

  describe('generateGameSpeakableSchema', () => {
    it('should generate valid speakable schema', () => {
      const schema = generateGameSpeakableSchema('memory-matrix');
      expect(schema).toBeDefined();
      expect(schema?.['@context']).toBe('https://schema.org');
      expect(schema?.['@type']).toBe('WebPage');
      expect(schema?.speakable).toBeDefined();
      expect(schema?.speakable?.cssSelector).toContain('.game-description');
    });

    it('should return null for unknown game', () => {
      const schema = generateGameSpeakableSchema('unknown-game');
      expect(schema).toBeNull();
    });
  });

  describe('generateGameAEOFAQSchema', () => {
    it('should generate valid FAQ schema', () => {
      const schema = generateGameAEOFAQSchema('memory-matrix');
      expect(schema).toBeDefined();
      expect(schema?.['@type']).toBe('FAQPage');
      expect(schema?.mainEntity.length).toBeGreaterThan(0);
      expect(schema?.mainEntity[0]['@type']).toBe('Question');
    });
  });
});

// =============================================================================
// SGE OPTIMIZATION TESTS
// =============================================================================

describe('Game SGE Optimization', () => {
  describe('getGameSGEContent', () => {
    it('should return SGE content for memory-matrix', () => {
      const content = getGameSGEContent('memory-matrix');
      expect(content).toBeDefined();
      expect(content?.primaryAnswer).toBeDefined();
      expect(content?.relatedQuestions.length).toBeGreaterThan(0);
      expect(content?.expertPerspective).toBeDefined();
    });

    it('should return null for unknown game', () => {
      const content = getGameSGEContent('unknown-game');
      expect(content).toBeNull();
    });

    it('should have entity relationships', () => {
      const content = getGameSGEContent('memory-matrix');
      expect(content?.entities.length).toBeGreaterThan(0);
      expect(content?.entities[0].type).toBeDefined();
      expect(content?.entities[0].name).toBeDefined();
      expect(content?.entities[0].relation).toBeDefined();
    });
  });

  describe('generateGameSGESchemas', () => {
    it('should generate educational schema', () => {
      const schemas = generateGameSGESchemas('memory-matrix', 'memory', [
        'visual memory',
      ]);
      expect(schemas.educational).toBeDefined();
      expect(schemas.educational['@type']).toBe('EducationalApplication');
    });

    it('should generate learning resource schema', () => {
      const schemas = generateGameSGESchemas('memory-matrix', 'memory', [
        'visual memory',
      ]);
      expect(schemas.learningResource).toBeDefined();
      expect(schemas.learningResource['@type']).toBe('LearningResource');
    });
  });

  describe('getSGEMetaDescription', () => {
    it('should return primary answer as meta description', () => {
      const description = getSGEMetaDescription('memory-matrix');
      expect(description).toBeDefined();
      expect(description.length).toBeGreaterThan(50);
    });

    it('should return empty string for unknown game', () => {
      const description = getSGEMetaDescription('unknown-game');
      expect(description).toBe('');
    });
  });
});

// =============================================================================
// GEO SEO TESTS
// =============================================================================

describe('Game GEO SEO', () => {
  describe('generateGameHrefLangTags', () => {
    it('should generate hreflang tags for all regions', () => {
      const tags = generateGameHrefLangTags('memory-matrix');
      expect(tags.length).toBeGreaterThan(0);
      expect(tags).toContainEqual(
        expect.objectContaining({ hreflang: 'x-default' }),
      );
      expect(tags).toContainEqual(
        expect.objectContaining({ hreflang: 'en-in' }),
      );
      expect(tags).toContainEqual(
        expect.objectContaining({ hreflang: 'en-us' }),
      );
    });

    it('should have correct URL format', () => {
      const tags = generateGameHrefLangTags('memory-matrix');
      tags.forEach((tag) => {
        expect(tag.href).toContain(
          'https://sproutern.dpdns.org/games/memory-matrix',
        );
      });
    });
  });

  describe('getGameGeoMetadata', () => {
    it('should generate metadata for India region', () => {
      const metadata = getGameGeoMetadata(
        'memory-matrix',
        'Memory Matrix',
        'memory',
        'IN',
      );
      expect(metadata.title).toContain('India');
      expect(metadata.description).toContain('India');
    });

    it('should generate metadata for US region', () => {
      const metadata = getGameGeoMetadata(
        'memory-matrix',
        'Memory Matrix',
        'memory',
        'US',
      );
      expect(metadata.title).toContain('United States');
    });

    it('should include relevant exams for category', () => {
      const metadata = getGameGeoMetadata(
        'memory-matrix',
        'Memory Matrix',
        'memory',
        'IN',
      );
      expect(metadata.description).toMatch(/NEET|JEE|Medical/i);
    });
  });

  describe('getGameRegionBenefits', () => {
    it('should return benefits for memory category', () => {
      const benefits = getGameRegionBenefits('memory', 'IN');
      expect(benefits.length).toBeGreaterThan(0);
      expect(benefits).toContainEqual(expect.stringContaining('memory'));
    });

    it('should include region-specific exam mention', () => {
      const benefits = getGameRegionBenefits('memory', 'IN');
      expect(
        benefits.some((b) => b.includes('NEET') || b.includes('JEE')),
      ).toBe(true);
    });
  });

  describe('gameRegions', () => {
    it('should have all required regions', () => {
      expect(gameRegions.IN).toBeDefined();
      expect(gameRegions.US).toBeDefined();
      expect(gameRegions.GB).toBeDefined();
      expect(gameRegions.AU).toBeDefined();
      expect(gameRegions.CA).toBeDefined();
      expect(gameRegions.SG).toBeDefined();
    });

    it('should have required fields for each region', () => {
      Object.values(gameRegions).forEach((region) => {
        expect(region.locale).toBeDefined();
        expect(region.hreflang).toBeDefined();
        expect(region.countryName).toBeDefined();
        expect(region.exams.length).toBeGreaterThan(0);
        expect(region.placements.length).toBeGreaterThan(0);
      });
    });
  });

  describe('allGameSlugs', () => {
    it('should have at least 70 games', () => {
      expect(allGameSlugs.length).toBeGreaterThanOrEqual(70);
    });

    it('should include key games', () => {
      expect(allGameSlugs).toContain('memory-matrix');
      expect(allGameSlugs).toContain('logic-puzzle');
      expect(allGameSlugs).toContain('speed-math');
      expect(allGameSlugs).toContain('bias-buster');
    });
  });
});

// =============================================================================
// INTEGRATION TESTS
// =============================================================================

describe('SEO Integration', () => {
  it('should have consistent game slugs across AEO and SGE', () => {
    const aeoSlugs = Object.keys(gameAEOConfigs);
    const sgeSlugs = Object.keys(gameSGEContent);

    // All SGE games should have AEO config
    sgeSlugs.forEach((slug) => {
      expect(aeoSlugs).toContain(slug);
    });
  });

  it('should have valid primary answers (40-200 chars)', () => {
    Object.values(gameAEOConfigs).forEach((config) => {
      expect(config.primaryAnswer.length).toBeGreaterThan(40);
      expect(config.primaryAnswer.length).toBeLessThan(500);
    });
  });

  it('should have speakable TL;DR (under 100 chars)', () => {
    Object.values(gameAEOConfigs).forEach((config) => {
      expect(config.tldr.length).toBeLessThan(150);
    });
  });
});
