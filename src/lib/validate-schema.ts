/**
 * Schema.org Validation Utilities
 *
 * Automated schema.org validation for CI/CD integration.
 * Validates JSON-LD structured data against schema.org specifications.
 */

import * as fs from 'fs';
import * as path from 'path';

interface ValidationError {
  type: 'error' | 'warning';
  message: string;
  path?: string;
  property?: string;
}

interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
  schema: string;
}

interface SchemaOrgType {
  '@type': string;
  '@context'?: string;
  '@id'?: string;
  [key: string]: unknown;
}

/**
 * Required properties for common schema types
 */
const REQUIRED_PROPERTIES: Record<string, string[]> = {
  Organization: ['name', 'url'],
  WebSite: ['name', 'url'],
  Article: ['headline', 'author', 'datePublished'],
  BlogPosting: ['headline', 'author', 'datePublished'],
  Product: ['name'],
  Person: ['name'],
  BreadcrumbList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  HowTo: ['name', 'step'],
  LocalBusiness: ['name', 'address'],
  Event: ['name', 'startDate'],
  JobPosting: ['title', 'datePosted', 'description', 'hiringOrganization'],
  Course: ['name', 'provider'],
  Review: ['reviewRating', 'author'],
};

/**
 * Recommended properties for better SEO
 */
const RECOMMENDED_PROPERTIES: Record<string, string[]> = {
  Organization: ['logo', 'description', 'sameAs', 'contactPoint'],
  WebSite: ['description', 'potentialAction'],
  Article: ['image', 'dateModified', 'publisher'],
  BlogPosting: ['image', 'dateModified', 'publisher', 'wordCount'],
  Product: ['description', 'image', 'offers', 'brand'],
  Person: ['image', 'jobTitle', 'url'],
  LocalBusiness: ['telephone', 'openingHours', 'priceRange'],
  Event: ['location', 'endDate', 'image', 'performer'],
  JobPosting: ['employmentType', 'baseSalary', 'jobLocation'],
  Course: ['description', 'coursePrerequisites'],
};

/**
 * Validate a single schema object
 */
function validateSchemaObject(schema: SchemaOrgType): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];
  const type = schema['@type'];

  if (!type) {
    errors.push({
      type: 'error',
      message: 'Missing @type property',
    });
    return { isValid: false, errors, warnings, schema: 'unknown' };
  }

  // Check required properties
  const required = REQUIRED_PROPERTIES[type] || [];
  for (const prop of required) {
    if (!schema[prop]) {
      errors.push({
        type: 'error',
        message: `Missing required property: ${prop}`,
        property: prop,
      });
    }
  }

  // Check recommended properties
  const recommended = RECOMMENDED_PROPERTIES[type] || [];
  for (const prop of recommended) {
    if (!schema[prop]) {
      warnings.push({
        type: 'warning',
        message: `Missing recommended property: ${prop}`,
        property: prop,
      });
    }
  }

  // Validate URL format
  const urlProperties = ['url', 'image', 'logo', 'sameAs'];
  for (const prop of urlProperties) {
    const value = schema[prop];
    if (value) {
      if (typeof value === 'string' && !isValidUrl(value)) {
        errors.push({
          type: 'error',
          message: `Invalid URL format for ${prop}: ${value}`,
          property: prop,
        });
      } else if (Array.isArray(value)) {
        for (const url of value) {
          if (typeof url === 'string' && !isValidUrl(url)) {
            errors.push({
              type: 'error',
              message: `Invalid URL format in ${prop}: ${url}`,
              property: prop,
            });
          }
        }
      }
    }
  }

  // Validate dates
  const dateProperties = [
    'datePublished',
    'dateModified',
    'startDate',
    'endDate',
    'datePosted',
  ];
  for (const prop of dateProperties) {
    const value = schema[prop];
    if (value && typeof value === 'string' && !isValidDate(value)) {
      errors.push({
        type: 'error',
        message: `Invalid date format for ${prop}: ${value}`,
        property: prop,
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    schema: type,
  };
}

/**
 * Validate URL format
 */
function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate ISO date format
 */
function isValidDate(date: string): boolean {
  const isoDatePattern =
    /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?(.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;
  return isoDatePattern.test(date) && !isNaN(Date.parse(date));
}

/**
 * Extract JSON-LD from HTML content
 */
export function extractJsonLdFromHtml(html: string): SchemaOrgType[] {
  const schemas: SchemaOrgType[] = [];
  const regex =
    /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;

  while ((match = regex.exec(html)) !== null) {
    try {
      const parsed = JSON.parse(match[1]);
      if (Array.isArray(parsed)) {
        schemas.push(...parsed);
      } else if (parsed['@graph']) {
        schemas.push(...parsed['@graph']);
      } else {
        schemas.push(parsed);
      }
    } catch (e) {
      console.error('Failed to parse JSON-LD:', e);
    }
  }

  return schemas;
}

/**
 * Validate all schemas in a page
 */
export function validatePageSchemas(schemas: SchemaOrgType[]): {
  valid: boolean;
  results: ValidationResult[];
  totalErrors: number;
  totalWarnings: number;
} {
  const results = schemas.map(validateSchemaObject);
  const totalErrors = results.reduce((sum, r) => sum + r.errors.length, 0);
  const totalWarnings = results.reduce((sum, r) => sum + r.warnings.length, 0);

  return {
    valid: totalErrors === 0,
    results,
    totalErrors,
    totalWarnings,
  };
}

/**
 * Validate a file containing JSON-LD
 */
export function validateJsonLdFile(filePath: string): ValidationResult[] {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Check if it's HTML or pure JSON
  if (content.trim().startsWith('<')) {
    const schemas = extractJsonLdFromHtml(content);
    return schemas.map(validateSchemaObject);
  } else {
    try {
      const parsed = JSON.parse(content);
      const schemas =
        parsed['@graph'] || (Array.isArray(parsed) ? parsed : [parsed]);
      return schemas.map(validateSchemaObject);
    } catch (e) {
      return [
        {
          isValid: false,
          errors: [{ type: 'error', message: `Invalid JSON: ${e}` }],
          warnings: [],
          schema: 'unknown',
        },
      ];
    }
  }
}

/**
 * CLI validation function
 */
export async function runValidation(
  inputPath: string,
  options: { verbose?: boolean; strict?: boolean } = {},
): Promise<boolean> {
  const { verbose = false, strict = false } = options;

  console.log('🔍 Schema.org Validation');
  console.log('========================\n');

  let allValid = true;
  const files: string[] = [];

  // Collect files to validate
  if (fs.statSync(inputPath).isDirectory()) {
    const collectFiles = (dir: string) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          collectFiles(fullPath);
        } else if (
          entry.name.endsWith('.html') ||
          entry.name.endsWith('.json')
        ) {
          files.push(fullPath);
        }
      }
    };
    collectFiles(inputPath);
  } else {
    files.push(inputPath);
  }

  // Validate each file
  for (const file of files) {
    if (verbose) {
      console.log(`📄 Validating: ${file}`);
    }

    const results = validateJsonLdFile(file);

    for (const result of results) {
      if (!result.isValid || (strict && result.warnings.length > 0)) {
        allValid = false;
      }

      if (!result.isValid || verbose) {
        console.log(`\n  Schema: ${result.schema}`);

        for (const error of result.errors) {
          console.log(`  ❌ ${error.message}`);
        }

        if (verbose || strict) {
          for (const warning of result.warnings) {
            console.log(`  ⚠️  ${warning.message}`);
          }
        }
      }
    }
  }

  console.log('\n========================');
  if (allValid) {
    console.log('✅ All schemas are valid!');
  } else {
    console.log('❌ Validation failed!');
  }

  return allValid;
}

// Export for use as a module
export default {
  validateSchemaObject,
  validatePageSchemas,
  validateJsonLdFile,
  extractJsonLdFromHtml,
  runValidation,
};
