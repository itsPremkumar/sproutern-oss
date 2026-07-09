import type { Metadata } from 'next';

type AIContentType =
  | 'educational'
  | 'career-guidance'
  | 'tool'
  | 'article'
  | 'profile';

interface AIAttributes {
  summary: string;
  keywords?: string[];
  primaryTopic?: string;
  contentType?: AIContentType;
  audience?: string;
  confidence?: 'high' | 'medium' | 'low';
}

/**
 * Generates GEO (Generative Engine Optimization) specific metadata
 * These tags help AI engines understand the context, quality and intent of the page
 */
export const generateAIMetadata = (attributes: AIAttributes): Metadata => {
  const {
    summary,
    keywords = [],
    primaryTopic = 'Career Development',
    contentType = 'educational',
    audience = 'Students, Job Seekers',
    confidence = 'high',
  } = attributes;

  return {
    other: {
      'ai-content-type': contentType,
      'ai-summary': summary,
      'ai-primary-topic': primaryTopic,
      'ai-target-audience': audience,
      'ai-confidence-score': confidence === 'high' ? '0.98' : '0.85',
      'ai-keywords': keywords.join(', '),
      'ai-citation-ready': 'true',
      'sge-content-type': contentType, // Google SGE support
      'sge-summary': summary,
    },
  };
};
