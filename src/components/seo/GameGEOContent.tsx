'use client';

/**
 * GameGEOContent Component
 * Renders geo-targeted content for game pages based on user region
 * Provides localized exam/placement context
 */

import React, { useEffect, useState } from 'react';
import { Globe, Award, Building2, MapPin } from 'lucide-react';
import {
  gameRegions,
  GameRegion,
  getGameRegionBenefits,
  getGamePlacementContext,
} from '@/lib/seo/game-geo-seo';

interface GameGEOContentProps {
  gameSlug: string;
  category: string;
  className?: string;
}

/**
 * Detect user's region from browser
 */
function detectUserRegion(): GameRegion {
  if (typeof window === 'undefined') return 'IN';

  const languages = navigator.languages || [navigator.language];
  const primaryLang = languages[0]?.toLowerCase() || '';

  // Extract country code from locale
  const parts = primaryLang.split('-');
  const countryCode = parts[1]?.toUpperCase() || '';

  // Check supported regions
  if (countryCode in gameRegions) {
    return countryCode as GameRegion;
  }

  // Fallback mapping for common locales
  if (primaryLang.includes('en-us') || primaryLang === 'en') {
    // Default English without region to IN for our primary audience
    return 'IN';
  }
  if (primaryLang.includes('en-gb')) return 'GB';
  if (primaryLang.includes('en-au')) return 'AU';
  if (primaryLang.includes('en-ca')) return 'CA';
  if (primaryLang.includes('en-sg')) return 'SG';
  if (primaryLang.includes('de')) return 'DE';

  return 'IN'; // Default to India
}

/**
 * Region Badge Component
 */
function RegionBadge({ region }: { region: GameRegion }) {
  const regionInfo = gameRegions[region];

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      <MapPin className="h-3 w-3" />
      <span>Optimized for {regionInfo.countryName}</span>
    </div>
  );
}

/**
 * Regional Benefits Section
 */
function RegionalBenefitsSection({
  category,
  region,
}: {
  category: string;
  region: GameRegion;
}) {
  const benefits = getGameRegionBenefits(category, region);

  return (
    <section
      className="regional-benefits rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:from-green-950/30 dark:to-emerald-950/30"
      aria-labelledby="benefits-heading"
    >
      <h3
        id="benefits-heading"
        className="mb-4 flex items-center gap-2 text-lg font-bold text-green-700 dark:text-green-400"
      >
        <Award className="h-5 w-5" />
        How This Helps You
      </h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-green-800 dark:text-green-300"
          >
            <span className="mt-1 text-green-600 dark:text-green-400">✓</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * Placement Context Section
 */
function PlacementContextSection({ region }: { region: GameRegion }) {
  const placementContext = getGamePlacementContext(region);
  const regionInfo = gameRegions[region];

  return (
    <section
      className="placement-context rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-blue-950/30 dark:to-indigo-950/30"
      aria-labelledby="placement-heading"
    >
      <h3
        id="placement-heading"
        className="mb-3 flex items-center gap-2 text-lg font-bold text-blue-700 dark:text-blue-400"
      >
        <Building2 className="h-5 w-5" />
        Career Preparation
      </h3>
      <p className="mb-3 text-sm text-blue-800 dark:text-blue-300">
        {placementContext}
      </p>
      <div className="flex flex-wrap gap-2">
        {regionInfo.placements.slice(0, 5).map((company, index) => (
          <span
            key={index}
            className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
          >
            {company}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * Exam Preparation Section
 */
function ExamPrepSection({ region }: { region: GameRegion }) {
  const regionInfo = gameRegions[region];

  return (
    <section
      className="exam-prep rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 p-6 dark:from-purple-950/30 dark:to-violet-950/30"
      aria-labelledby="exams-heading"
    >
      <h3
        id="exams-heading"
        className="mb-3 flex items-center gap-2 text-lg font-bold text-purple-700 dark:text-purple-400"
      >
        <Globe className="h-5 w-5" />
        Useful for Exams
      </h3>
      <div className="flex flex-wrap gap-2">
        {regionInfo.exams.map((exam, index) => (
          <span
            key={index}
            className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
          >
            {exam}
          </span>
        ))}
      </div>
    </section>
  );
}

/**
 * Main GameGEOContent Component
 */
export function GameGEOContent({
  gameSlug,
  category,
  className = '',
}: GameGEOContentProps) {
  const [region, setRegion] = useState<GameRegion>('IN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const detectedRegion = detectUserRegion();
    setRegion(detectedRegion);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className={`game-geo-content mt-8 ${className}`}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-40 animate-pulse rounded-xl bg-muted" />
          <div className="h-40 animate-pulse rounded-xl bg-muted" />
        </div>
      </div>
    );
  }

  return (
    <div className={`game-geo-content mt-8 ${className}`}>
      {/* Region Badge */}
      <div className="mb-4 flex justify-center md:justify-start">
        <RegionBadge region={region} />
      </div>

      {/* Two-column layout for desktop */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Benefits Section */}
        <RegionalBenefitsSection
          category={category}
          region={region}
        />

        {/* Exam Prep Section */}
        <ExamPrepSection region={region} />
      </div>

      {/* Full-width Placement Context */}
      <div className="mt-4">
        <PlacementContextSection region={region} />
      </div>

      {/* Hidden schema data for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            audience: {
              '@type': 'EducationalAudience',
              geographicArea: {
                '@type': 'Country',
                name: gameRegions[region].countryName,
              },
            },
          }),
        }}
      />
    </div>
  );
}

export default GameGEOContent;
