/**
 * Schema Validator
 * Validates JSON-LD structured data for errors
 */

export interface ValidationError {
  path: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface SchemaValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationError[];
}

/**
 * Validate Organization schema
 */
export function validateOrganizationSchema(
  schema: any,
): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Required fields
  if (!schema.name) {
    errors.push({
      path: 'name',
      message: 'Organization name is required',
      severity: 'error',
    });
  }

  if (!schema.url) {
    errors.push({
      path: 'url',
      message: 'Organization URL is required',
      severity: 'error',
    });
  }

  // Recommended fields
  if (!schema.logo) {
    warnings.push({
      path: 'logo',
      message: 'Organization logo is recommended for rich snippets',
      severity: 'warning',
    });
  }

  if (!schema.contactPoint) {
    warnings.push({
      path: 'contactPoint',
      message: 'Contact information is recommended',
      severity: 'warning',
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate Article schema
 */
export function validateArticleSchema(schema: any): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Required fields
  const required = ['headline', 'image', 'datePublished', 'author'];
  required.forEach((field) => {
    if (!schema[field]) {
      errors.push({
        path: field,
        message: `${field} is required for Article schema`,
        severity: 'error',
      });
    }
  });

  // Image validation
  if (schema.image && Array.isArray(schema.image)) {
    if (schema.image.length === 0) {
      errors.push({
        path: 'image',
        message: 'At least one image is required',
        severity: 'error',
      });
    }
  } else if (!schema.image) {
    errors.push({
      path: 'image',
      message: 'Image is required',
      severity: 'error',
    });
  }

  // Headline length
  if (schema.headline && schema.headline.length > 110) {
    warnings.push({
      path: 'headline',
      message: 'Headline should be under 110 characters for optimal display',
      severity: 'warning',
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate JobPosting schema
 */
export function validateJobPostingSchema(schema: any): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Required fields
  const required = ['title', 'description', 'datePosted', 'hiringOrganization'];
  required.forEach((field) => {
    if (!schema[field]) {
      errors.push({
        path: field,
        message: `${field} is required for JobPosting schema`,
        severity: 'error',
      });
    }
  });

  // Validate organization
  if (schema.hiringOrganization && !schema.hiringOrganization.name) {
    errors.push({
      path: 'hiringOrganization.name',
      message: 'Hiring organization name is required',
      severity: 'error',
    });
  }

  // Validate location
  if (!schema.jobLocation) {
    errors.push({
      path: 'jobLocation',
      message: 'Job location is required',
      severity: 'error',
    });
  }

  // Recommended fields
  if (!schema.validThrough) {
    warnings.push({
      path: 'validThrough',
      message: 'Application deadline (validThrough) is recommended',
      severity: 'warning',
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate FAQPage schema
 */
export function validateFAQSchema(schema: any): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!schema.mainEntity || !Array.isArray(schema.mainEntity)) {
    errors.push({
      path: 'mainEntity',
      message: 'FAQPage must have mainEntity array',
      severity: 'error',
    });
    return { valid: false, errors, warnings };
  }

  schema.mainEntity.forEach((item: any, index: number) => {
    if (!item.name || !item.acceptedAnswer) {
      errors.push({
        path: `mainEntity[${index}]`,
        message: 'Each FAQ item must have name (question) and acceptedAnswer',
        severity: 'error',
      });
    }

    if (item.acceptedAnswer && !item.acceptedAnswer.text) {
      errors.push({
        path: `mainEntity[${index}].acceptedAnswer`,
        message: 'Answer must have text property',
        severity: 'error',
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate Breadcrumb schema
 */
export function validateBreadcrumbSchema(schema: any): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  if (!schema.itemListElement || !Array.isArray(schema.itemListElement)) {
    errors.push({
      path: 'itemListElement',
      message: 'Breadcrumb must have itemListElement array',
      severity: 'error',
    });
    return { valid: false, errors, warnings };
  }

  schema.itemListElement.forEach((item: any, index: number) => {
    if (!item.position || !item.name) {
      errors.push({
        path: `itemListElement[${index}]`,
        message: 'Each breadcrumb item must have position and name',
        severity: 'error',
      });
    }

    if (item.position !== index + 1) {
      errors.push({
        path: `itemListElement[${index}].position`,
        message: `Position should be ${index + 1}, got ${item.position}`,
        severity: 'error',
      });
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * General schema validator
 */
export function validateSchema(schema: any): SchemaValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationError[] = [];

  // Check @context
  if (!schema['@context']) {
    errors.push({
      path: '@context',
      message: '@context is required (should be https://schema.org)',
      severity: 'error',
    });
  } else if (schema['@context'] !== 'https://schema.org') {
    warnings.push({
      path: '@context',
      message: 'Recommended @context is https://schema.org',
      severity: 'warning',
    });
  }

  // Check @type
  if (!schema['@type']) {
    errors.push({
      path: '@type',
      message: '@type is required',
      severity: 'error',
    });
  }

  // Type-specific validation
  if (schema['@type']) {
    switch (schema['@type']) {
      case 'Organization':
        return validateOrganizationSchema(schema);
      case 'Article':
      case 'BlogPosting':
        return validateArticleSchema(schema);
      case 'JobPosting':
        return validateJobPostingSchema(schema);
      case 'FAQPage':
        return validateFAQSchema(schema);
      case 'BreadcrumbList':
        return validateBreadcrumbSchema(schema);
      default:
        // Generic validation passed
        break;
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Validate all schemas on a page
 */
export function validatePageSchemas(schemas: any[]): {
  results: Array<{ schema: string; validation: SchemaValidationResult }>;
  overallValid: boolean;
} {
  const results = schemas.map((schema) => ({
    schema: schema['@type'] || 'Unknown',
    validation: validateSchema(schema),
  }));

  const overallValid = results.every((r) => r.validation.valid);

  return {
    results,
    overallValid,
  };
}
