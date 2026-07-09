'use client';

/**
 * ToolGEOContent Component
 * Renders geo-targeted content for tool pages based on user region
 * Provides localized benefits and usage context
 */

import React, { useEffect, useState } from 'react';
import { Globe, MapPin, Info } from 'lucide-react';
import {
  toolRegions,
  ToolRegion,
  getToolRegionBenefits,
} from '@/lib/seo/tool-geo-seo';

interface ToolGEOContentProps {
  toolSlug: string;
  className?: string;
}

/**
 * Detect user's region from browser
 */
function detectUserRegion(): ToolRegion {
  if (typeof window === 'undefined') return 'IN';

  const languages = navigator.languages || [navigator.language];
  const primaryLang = languages[0]?.toLowerCase() || '';

  // Check explicit region codes
  if (primaryLang.includes('in')) return 'IN'; // India
  if (primaryLang.includes('us')) return 'US'; // USA
  if (primaryLang.includes('gb') || primaryLang.includes('uk')) return 'GB'; // UK
  if (primaryLang.includes('au')) return 'AU'; // Australia
  if (primaryLang.includes('ca')) return 'CA'; // Canada

  // Fallback based on timezone offset if needed, or default
  // Simple default to IN for now as primary audience
  return 'IN';
}

/**
 * Main ToolGEOContent Component
 */
export function ToolGEOContent({
  toolSlug,
  className = '',
}: ToolGEOContentProps) {
  const [region, setRegion] = useState<ToolRegion>('IN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const detectedRegion = detectUserRegion();
    setRegion(detectedRegion);
  }, []);

  // Avoid hydration mismatch
  if (!mounted) {
    return null; // Or skeleton if critical
  }

  const regionInfo = toolRegions[region];
  const benefits = getToolRegionBenefits(toolSlug, region);

  return (
    <div
      className={`tool-geo-content mb-6 rounded-lg border border-border/50 bg-background/50 p-4 ${className}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            Region:{' '}
            <span className="text-foreground">{regionInfo.countryName}</span>
          </span>
        </div>
        <div className="hidden text-xs text-muted-foreground sm:block">
          {regionInfo.taxYear || regionInfo.gradeScale} Standard
        </div>
      </div>

      <div className="rounded-md bg-muted/30 p-3">
        <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
          <MapPin className="h-3 w-3" />
          Local Benefits
        </h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs text-muted-foreground"
            >
              <span className="mt-1 h-1 w-1 rounded-full bg-primary" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Hidden schema for geo-targeting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            audience: {
              '@type': 'Audience',
              geographicArea: {
                '@type': 'Country',
                name: regionInfo.countryName,
              },
            },
          }),
        }}
      />
    </div>
  );
}

export default ToolGEOContent;
