/**
 * Automated SEO Validation Script
 * Tests all pages for proper schema markup and SEO compliance
 */

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

interface ValidationResult {
  url: string;
  passed: boolean;
  errors: string[];
  warnings: string[];
  score: number;
}

interface SchemaValidationResult {
  isValid: boolean;
  errors: string[];
  schemaTypes: string[];
}

/**
 * Validate JSON-LD schema
 */
export function validateSchema(html: string): SchemaValidationResult {
  const errors: string[] = [];
  const schemaTypes: string[] = [];

  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Find all JSON-LD scripts
    const scripts = document.querySelectorAll(
      'script[type="application/ld+json"]',
    );

    if (scripts.length === 0) {
      errors.push('No JSON-LD schema found');
      return { isValid: false, errors, schemaTypes };
    }

    scripts.forEach((script, index) => {
      try {
        const schema = JSON.parse(script.textContent || '');

        // Validate basic structure
        if (!schema['@context']) {
          errors.push(`Schema ${index + 1}: Missing @context`);
        }

        if (!schema['@type']) {
          errors.push(`Schema ${index + 1}: Missing @type`);
        } else {
          schemaTypes.push(schema['@type']);
        }

        // Validate @graph if present
        if (schema['@graph']) {
          schema['@graph'].forEach((item: any, graphIndex: number) => {
            if (!item['@type']) {
              errors.push(
                `Schema ${index + 1}, item ${graphIndex + 1}: Missing @type`,
              );
            }
          });
        }
      } catch (e) {
        errors.push(
          `Schema ${index + 1}: Invalid JSON - ${(e as Error).message}`,
        );
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      schemaTypes,
    };
  } catch (e) {
    return {
      isValid: false,
      errors: [`Failed to parse HTML: ${(e as Error).message}`],
      schemaTypes: [],
    };
  }
}

/**
 * Validate SEO meta tags
 */
export function validateMetaTags(html: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  let score = 100;

  try {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Title tag
    const title = document.querySelector('title');
    if (!title || !title.textContent) {
      errors.push('Missing title tag');
      score -= 20;
    } else if (title.textContent.length < 30 || title.textContent.length > 60) {
      warnings.push(
        `Title length (${title.textContent.length}) should be between 30-60 characters`,
      );
      score -= 5;
    }

    // Meta description
    const description = document.querySelector('meta[name="description"]');
    if (!description || !description.getAttribute('content')) {
      errors.push('Missing meta description');
      score -= 15;
    } else {
      const descLength = description.getAttribute('content')!.length;
      if (descLength < 120 || descLength > 160) {
        warnings.push(
          `Description length (${descLength}) should be between 120-160 characters`,
        );
        score -= 5;
      }
    }

    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      warnings.push('Missing canonical URL');
      score -= 10;
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogTitle) {
      warnings.push('Missing og:title');
      score -= 5;
    }
    if (!ogDescription) {
      warnings.push('Missing og:description');
      score -= 5;
    }
    if (!ogImage) {
      warnings.push('Missing og:image');
      score -= 5;
    }

    // Twitter Card tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );

    if (!twitterCard) {
      warnings.push('Missing twitter:card');
      score -= 5;
    }

    // H1 tag
    const h1Tags = document.querySelectorAll('h1');
    if (h1Tags.length === 0) {
      errors.push('Missing H1 tag');
      score -= 15;
    } else if (h1Tags.length > 1) {
      warnings.push('Multiple H1 tags found');
      score -= 5;
    }

    // Image alt text
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    images.forEach((img) => {
      if (!img.getAttribute('alt')) {
        imagesWithoutAlt++;
      }
    });

    if (imagesWithoutAlt > 0) {
      warnings.push(`${imagesWithoutAlt} images missing alt text`);
      score -= Math.min(imagesWithoutAlt * 2, 10);
    }

    // Hreflang tags
    const hreflang = document.querySelectorAll(
      'link[rel="alternate"][hreflang]',
    );
    if (hreflang.length === 0) {
      warnings.push('Missing hreflang tags for international SEO');
      score -= 5;
    }

    return {
      url: '',
      passed: errors.length === 0,
      errors,
      warnings,
      score: Math.max(0, score),
    };
  } catch (e) {
    return {
      url: '',
      passed: false,
      errors: [`Failed to validate: ${(e as Error).message}`],
      warnings: [],
      score: 0,
    };
  }
}

/**
 * Generate comprehensive SEO report
 */
export function generateSEOReport(
  html: string,
  url: string,
): {
  meta: ValidationResult;
  schema: SchemaValidationResult;
  overallScore: number;
} {
  const metaValidation = validateMetaTags(html);
  metaValidation.url = url;

  const schemaValidation = validateSchema(html);

  // Calculate overall score
  let overallScore = metaValidation.score;
  if (!schemaValidation.isValid) {
    overallScore -= 20;
  }

  return {
    meta: metaValidation,
    schema: schemaValidation,
    overallScore: Math.max(0, overallScore),
  };
}

/**
 * CLI script runner
 */
if (require.main === module) {
  console.log('🔍 SEO Validation Script\n');

  // Example usage - you can modify this to read from actual files
  const testHTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Sproutern – Launch Your Career with Startup Internships</title>
        <meta name="description" content="Sproutern is the premier platform connecting ambitious students with innovative startups worldwide. Find meaningful internships and accelerate your career.">
        <link rel="canonical" href="https://www.sproutern.com">
        
        <meta property="og:title" content="Sproutern – Launch Your Career with Startup Internships">
        <meta property="og:description" content="The premier platform connecting ambitious students with innovative startups worldwide.">
        <meta property="og:image" content="https://www.sproutern.com/opengraph.jpg">
        
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Sproutern – Launch Your Career with Startup Internships">
        
        <link rel="alternate" hreflang="en-US" href="https://www.sproutern.com">
        <link rel="alternate" hreflang="en-GB" href="https://www.sproutern.com">
        <link rel="alternate" hreflang="en-IN" href="https://www.sproutern.com">
        <link rel="alternate" hreflang="x-default" href="https://www.sproutern.com">
        
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Sproutern – Launch Your Career with Startup Internships"
        }
        </script>
      </head>
      <body>
        <h1>Master Your Interview Journey</h1>
        <img src="hero.jpg" alt="Students preparing for career success">
      </body>
    </html>
  `;

  const report = generateSEOReport(testHTML, 'https://www.sproutern.com/test');

  console.log('📊 SEO Report:');
  console.log(`Overall Score: ${report.overallScore}/100\n`);

  console.log('Meta Tags Validation:');
  if (report.meta.errors.length > 0) {
    console.log('❌ Errors:');
    report.meta.errors.forEach((error) => console.log(`  - ${error}`));
  }
  if (report.meta.warnings.length > 0) {
    console.log('⚠️  Warnings:');
    report.meta.warnings.forEach((warning) => console.log(`  - ${warning}`));
  }
  if (report.meta.errors.length === 0 && report.meta.warnings.length === 0) {
    console.log('✅ All meta tags valid');
  }

  console.log('\nSchema Validation:');
  if (report.schema.isValid) {
    console.log('✅ Schema valid');
    console.log(`Schema types found: ${report.schema.schemaTypes.join(', ')}`);
  } else {
    console.log('❌ Schema errors:');
    report.schema.errors.forEach((error) => console.log(`  - ${error}`));
  }
}

export default {
  validateSchema,
  validateMetaTags,
  generateSEOReport,
};
