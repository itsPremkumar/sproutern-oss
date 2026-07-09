/**
 * AI Tools Platform - Type Definitions
 */

// AI Tool Categories
export type AIToolCategory =
  | 'writing'
  | 'image'
  | 'video'
  | 'coding'
  | 'seo'
  | 'resume'
  | 'voice'
  | 'chatbots'
  | 'productivity'
  | 'design';

// Pricing model types
export type PricingModel = 'free' | 'freemium' | 'paid' | 'enterprise';

// Pricing plan structure
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

// Pricing information
export interface PricingInfo {
  model: PricingModel;
  startingPrice?: string;
  freeTier?: boolean;
  plans?: PricingPlan[];
}

// FAQ item for structured data
export interface FAQItem {
  question: string;
  answer: string;
}

// Affiliate program information
export interface AffiliateProgram {
  network: string;
  commission: string;
  cookieDuration?: number;
}

// SEO information
export interface SEOInfo {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

// Main AI Tool interface
export interface AITool {
  // Core identification
  id: string;
  name: string;
  slug: string;

  // Descriptions
  shortDescription: string;
  longDescription: string;

  // Categorization
  category: AIToolCategory;
  subCategory?: string;

  // Branding
  logo: string;
  website: string;

  // Affiliate
  affiliateLink: string;
  affiliateProgram: AffiliateProgram | null;

  // Features & Benefits
  features: string[];
  useCases: string[];
  bestFor: string[];

  // Pros & Cons
  pros: string[];
  cons: string[];

  // Pricing
  pricing: PricingInfo;

  // Social Proof
  rating: number;
  reviewCount: number;

  // Metadata
  lastUpdated: string;
  isVerified?: boolean;
  isFeatured?: boolean;
  isPopular?: boolean;

  // SEO
  seo: SEOInfo;

  // FAQ
  faqs?: FAQItem[];
}

// Category metadata
export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color?: string;
  toolCount?: number;
}

// Landing page configuration
export interface LandingPageConfig {
  slug: string;
  title: string;
  description: string;
  h1: string;
  targetAudience: string;
  tools: string[];
  faq: FAQItem[];
}

// Filter options
export interface ToolFilters {
  category?: AIToolCategory;
  pricingModel?: PricingModel;
  hasFreeTier?: boolean;
  sortBy?: 'rating' | 'popular' | 'newest' | 'name';
}
