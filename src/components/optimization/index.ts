/**
 * Master Optimization Components Export
 * All 10 Engine Optimization strategies in one place
 *
 * 1. SEO - Search Engine Optimization (existing in /seo)
 * 2. GEO - Generative Engine Optimization
 * 3. AEO - Answer Engine Optimization (existing in /seo)
 * 4. SXO - Search Experience Optimization (existing in /seo)
 * 5. CRO - Conversion Rate Optimization
 * 6. SSO - Social Search Optimization
 * 7. VEO - Video Engine Optimization
 * 8. LEO - Local Engine Optimization
 * 9. EEO - Engagement Engine Optimization
 * 10. BEO - Brand Engine Optimization
 */

// ============================================
// GEO - Generative Engine Optimization
// For AI search engines (ChatGPT, Perplexity, etc.)
// ============================================
export {
  QuickAnswer,
  AIDefinition,
  CitableStat,
  ExpertQuoteBlock,
  KeyTakeaways,
  AIComparisonMatrix,
  ProTipBlock,
  AIStepGuide,
} from './GEOComponents';

// ============================================
// CRO - Conversion Rate Optimization
// For maximizing conversions
// ============================================
export {
  ExitIntentCTA,
  FloatingCTABar,
  SocialProofCounter,
  UrgencyTimer,
  TrustBadges,
  LeadMagnetCard,
  FeatureCTA,
} from './CROComponents';

// ============================================
// SSO - Social Search Optimization
// For social media discovery
// ============================================
export {
  SocialShareBar,
  generateSocialMeta,
  ShareableQuote,
  SocialProofWidget,
} from './SSOComponents';

// ============================================
// VEO - Video Engine Optimization
// For video SEO and YouTube
// ============================================
export {
  VideoSchema,
  YouTubeEmbed,
  VideoThumbnailCard,
  VideoPlaylist,
  VideoCTABanner,
} from './VEOComponents';

// ============================================
// LEO - Local Engine Optimization
// For geo-targeted content
// ============================================
export {
  LocalBusinessSchema,
  CityJobMarketCard,
  CityComparisonTable,
  GeoTargetedContent,
  PopularCitiesGrid,
  indianCities,
} from './LEOComponents';

// ============================================
// EEO - Engagement Engine Optimization
// For maximizing user engagement
// ============================================
export {
  ReadingProgressBar,
  ContentRating,
  EngagementBar,
  RelatedArticles,
  AchievementBadge,
  StreakCounter,
  QuickPoll,
} from './EEOComponents';

// ============================================
// BEO - Brand Engine Optimization
// For brand authority and E-E-A-T
// ============================================
export {
  OrganizationSchemaEnhanced,
  AuthorEEATBio,
  TrustIndicators,
  MediaMentions,
  TestimonialCarousel,
  PartnershipLogos,
  ContentQualityBadges,
} from './BEOComponents';

// ============================================
// Quick Access Bundles
// Pre-configured component sets
// ============================================

/**
 * Essential optimization components for blog posts
 */
export const BlogOptimizationKit = {
  // GEO
  QuickAnswer: () => import('./GEOComponents').then((m) => m.QuickAnswer),
  KeyTakeaways: () => import('./GEOComponents').then((m) => m.KeyTakeaways),
  // CRO
  LeadMagnetCard: () => import('./CROComponents').then((m) => m.LeadMagnetCard),
  // SSO
  SocialShareBar: () => import('./SSOComponents').then((m) => m.SocialShareBar),
  // EEO
  ContentRating: () => import('./EEOComponents').then((m) => m.ContentRating),
  ReadingProgressBar: () =>
    import('./EEOComponents').then((m) => m.ReadingProgressBar),
  // BEO
  AuthorEEATBio: () => import('./BEOComponents').then((m) => m.AuthorEEATBio),
};

/**
 * Essential optimization components for tool pages
 */
export const ToolOptimizationKit = {
  // GEO
  AIStepGuide: () => import('./GEOComponents').then((m) => m.AIStepGuide),
  // CRO
  SocialProofCounter: () =>
    import('./CROComponents').then((m) => m.SocialProofCounter),
  TrustBadges: () => import('./CROComponents').then((m) => m.TrustBadges),
  // EEO
  QuickPoll: () => import('./EEOComponents').then((m) => m.QuickPoll),
};

/**
 * Essential optimization components for company pages
 */
export const CompanyPageOptimizationKit = {
  // GEO
  AIComparisonMatrix: () =>
    import('./GEOComponents').then((m) => m.AIComparisonMatrix),
  CitableStat: () => import('./GEOComponents').then((m) => m.CitableStat),
  // CRO
  FeatureCTA: () => import('./CROComponents').then((m) => m.FeatureCTA),
  // LEO
  CityJobMarketCard: () =>
    import('./LEOComponents').then((m) => m.CityJobMarketCard),
  // BEO
  ContentQualityBadges: () =>
    import('./BEOComponents').then((m) => m.ContentQualityBadges),
};
