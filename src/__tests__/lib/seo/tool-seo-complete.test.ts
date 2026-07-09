/**
 * Tool SEO Complete Tests
 * Tests for AEO, SGE, and GEO optimization utilities for Tools
 */

import {
  getToolAEOConfig,
  generateCompleteToolAEOSchema,
  toolAEOConfigs,
} from '@/lib/seo/tool-aeo-optimization';

import {
  getToolSGEContent,
  generateToolSGESchemas,
  toolSGEContent,
} from '@/lib/seo/tool-sge-optimization';

import {
  generateToolHrefLangTags,
  getToolRegionBenefits,
  toolRegions,
} from '@/lib/seo/tool-geo-seo';

// =============================================================================
// AEO OPTIMIZATION TESTS
// =============================================================================

describe('Tool AEO Optimization', () => {
  describe('getToolAEOConfig', () => {
    it('should return AEO config for cgpa-converter', () => {
      const config = getToolAEOConfig('cgpa-converter');
      expect(config).toBeDefined();
      expect(config?.slug).toBe('cgpa-converter');
      expect(config?.tldr).toBeDefined();
      expect(config?.keyTakeaways.length).toBeGreaterThan(0);
    });

    it('should return null for unknown tool', () => {
      const config = getToolAEOConfig('unknown-tool');
      expect(config).toBeNull();
    });
  });

  describe('generateCompleteToolAEOSchema', () => {
    it('should generate valid speakable schema', () => {
      const schema = generateCompleteToolAEOSchema('salary-calculator');
      expect(schema).toBeDefined();
      expect(schema?.speakable?.['@type']).toBe('WebPage');
      expect(schema?.speakable?.speakable).toBeDefined();
    });

    it('should generate FAQ schema', () => {
      const schema = generateCompleteToolAEOSchema('resume-builder');
      expect(schema?.faq?.['@type']).toBe('FAQPage');
      expect(schema?.faq?.mainEntity.length).toBeGreaterThan(0);
    });
  });
});

// =============================================================================
// SGE OPTIMIZATION TESTS
// =============================================================================

describe('Tool SGE Optimization', () => {
  describe('getToolSGEContent', () => {
    it('should return SGE content for github-readme-generator', () => {
      const content = getToolSGEContent('github-readme-generator');
      expect(content).toBeDefined();
      expect(content?.primaryAnswer).toBeDefined();
      expect(content?.relatedQuestions.length).toBeGreaterThan(0);
      expect(content?.expertPerspective).toBeDefined();
    });
  });

  describe('generateToolSGESchemas', () => {
    it('should generate software schema', () => {
      const schemas = generateToolSGESchemas(
        'cgpa-converter',
        'CGPA Converter',
        'EducationalApplication',
        [],
      );
      expect(schemas.software).toBeDefined();
      expect(schemas.software['@type']).toBe('SoftwareApplication');
      expect(schemas.software.applicationCategory).toBe(
        'EducationalApplication',
      );
    });

    it('should generate how-to schema', () => {
      const steps = [
        { title: 'Step 1', description: 'Do this' },
        { title: 'Step 2', description: 'Then do that' },
      ];
      const schemas = generateToolSGESchemas(
        'cgpa-converter',
        'CGPA Converter',
        'EducationalApplication',
        steps,
      );
      expect(schemas.howTo).toBeDefined();
      expect(schemas.howTo['@type']).toBe('HowTo');
      expect(schemas.howTo.step).toHaveLength(2);
    });
  });
});

// =============================================================================
// GEO SEO TESTS
// =============================================================================

describe('Tool GEO SEO', () => {
  describe('generateToolHrefLangTags', () => {
    it('should generate hreflang tags for all regions', () => {
      const tags = generateToolHrefLangTags('salary-calculator');
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
  });

  describe('getToolRegionBenefits', () => {
    it('should return region-specific benefits', () => {
      const benefitsIN = getToolRegionBenefits('salary-calculator', 'IN');
      const benefitsUS = getToolRegionBenefits('salary-calculator', 'US');

      expect(benefitsIN[0]).toContain('India'); // Should mention India/Tax
      expect(benefitsUS[0]).toContain('United States');
    });
  });

  describe('toolRegions', () => {
    it('should have required fields for each region', () => {
      Object.values(toolRegions).forEach((region) => {
        expect(region.currency).toBeDefined();
        expect(region.taxYear).toBeDefined();
      });
    });
  });
});
