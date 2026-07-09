// SEO Components
export {
  SEOHead,
  generateStructuredData,
  generateInternationalMeta,
} from './seo-head';
export {
  InternationalSEO,
  useInternationalSEO,
  getAllHreflangValues,
  getCountryConfig,
} from './international-seo';

// AI Content Blocks for GEO Optimization
export {
  KeyTakeaway,
  DefinitiveAnswer,
  TLDRSummary,
  ExpertQuote,
  ComparisonTable,
  StepByStepGuide,
  FAQItem as AIFAQItem,
  ProTip,
  StatisticBlock,
  CitationBlock,
} from './ai-content-blocks';

// AEO Content Blocks for Answer Engine Optimization
export {
  TLDR,
  KeyTakeaways,
  FAQAnswer,
  AEOFAQSection,
  QuickAnswer,
  HowToGuide,
  CitationBlock as AEOCitationBlock,
} from './aeo-content-blocks';

// GEO Schema Generators (re-export from lib)
export {
  generateSpeakableSchema,
  generateEnhancedArticleSchema,
  generateQAPageSchema,
  generateHowToSchema,
  generateDefinedTermSchema,
  generateKnowledgePanelSchema,
  generateTopicalMapSchema,
  generateEEATAuthorSchema,
  generateWebPageWithSpeakable,
  generateToolSchema,
  combineSchemas,
} from '@/lib/seo/geo-schema-enhanced';

// SGE Content Blocks for Google Search Generative Experience
export {
  SGEPrimaryAnswer,
  SGEComparisonTable,
  SGEExpertPerspective,
  SGERelatedQuestions,
  SGEQuickFacts,
  SGESourceCard,
} from './sge-content-blocks';

// Tool Page SEO Components
export { AISummary } from './AISummary';
export { ArticleSchema } from './ArticleSchema';
export { FAQSchema } from './FAQSchema';
export type { FAQItem } from './FAQSchema';
export { HowToSchema } from './HowToSchema';
export type { HowToStep } from './HowToSchema';
export { AuthorBio } from './AuthorBio';
export { SoftwareApplicationSchema } from './SoftwareApplicationSchema';
export { BreadcrumbSchema } from './BreadcrumbSchema';
export { Breadcrumbs } from './Breadcrumbs';
export { LastUpdated } from './LastUpdated';
export { TableOfContents, StickyTableOfContents } from './TableOfContents';

// SXO (Search Experience Optimization) Components
export { QuickSummary, QuickSummaryCompact } from './QuickSummary';

// Internal Linking Automation
export { AutoRelatedContent, SmartCTA } from './AutoRelatedContent';
export {
  InternalLinkingHub,
  QuickLinks,
  CompanyComparisonLinks,
  ContextualToolLinks,
  BlogCategoryLinks,
  TrendingPages,
} from './InternalLinkingHub';

// Company Page SEO Components
export {
  CompanyPageSchema,
  InterviewSummary,
  CompanyQuickStats,
} from './CompanyPageSchema';
