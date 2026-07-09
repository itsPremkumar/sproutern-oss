/**
 * Comparison Table Component
 * Displays side-by-side comparison of AI tools
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Check, X, Minus, Star, Crown } from 'lucide-react';
import { PartnerCTA } from './PartnerCTA';
import { AITool } from '@/types/ai-tools-types';

interface ComparisonTableProps {
  tools: AITool[];
  features?: string[];
  showPricing?: boolean;
  showRatings?: boolean;
  winnerSlug?: string;
  className?: string;
}

export function ComparisonTable({
  tools,
  features,
  showPricing = true,
  showRatings = true,
  winnerSlug,
  className,
}: ComparisonTableProps) {
  // Default features to compare if not provided
  const defaultFeatures = [
    'Free Tier',
    'API Access',
    'Mobile App',
    'Team Features',
    'Custom Training',
  ];

  const compareFeatures = features || defaultFeatures;

  // Helper to check if tool has feature
  const hasFeature = (tool: AITool, feature: string): boolean | null => {
    const featureLower = feature.toLowerCase();

    if (featureLower === 'free tier') {
      return tool.pricing.freeTier || false;
    }

    // Check in features array
    const hasInFeatures = tool.features.some((f) =>
      f.toLowerCase().includes(featureLower),
    );

    if (hasInFeatures) return true;

    // Check in cons (negative)
    const inCons = tool.cons.some((c) =>
      c.toLowerCase().includes(featureLower),
    );

    if (inCons) return false;

    return null; // Unknown
  };

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-border">
            <th className="p-4 text-left font-semibold">Feature</th>
            {tools.map((tool) => (
              <th
                key={tool.id}
                className="p-4 text-center"
              >
                <div className="flex flex-col items-center gap-2">
                  {winnerSlug === tool.slug && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      <Crown className="h-3 w-3" />
                      Winner
                    </span>
                  )}
                  <Link
                    href={`/ai-tools/${tool.slug}`}
                    className="font-bold hover:text-primary"
                  >
                    {tool.name}
                  </Link>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Rating row */}
          {showRatings && (
            <tr className="border-b border-border bg-muted/30">
              <td className="p-4 font-medium">Rating</td>
              {tools.map((tool) => (
                <td
                  key={tool.id}
                  className="p-4 text-center"
                >
                  <div className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tool.rating}</span>
                    <span className="text-xs text-muted-foreground">
                      ({tool.reviewCount.toLocaleString()})
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          )}

          {/* Pricing row */}
          {showPricing && (
            <tr className="border-b border-border">
              <td className="p-4 font-medium">Starting Price</td>
              {tools.map((tool) => (
                <td
                  key={tool.id}
                  className="p-4 text-center"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold">
                      {tool.pricing.freeTier
                        ? 'Free'
                        : tool.pricing.startingPrice}
                    </span>
                    <span className="text-xs capitalize text-muted-foreground">
                      {tool.pricing.model}
                    </span>
                  </div>
                </td>
              ))}
            </tr>
          )}

          {/* Feature rows */}
          {compareFeatures.map((feature, idx) => (
            <tr
              key={feature}
              className={cn(
                'border-b border-border',
                idx % 2 === 0 ? 'bg-muted/10' : '',
              )}
            >
              <td className="p-4 font-medium">{feature}</td>
              {tools.map((tool) => {
                const has = hasFeature(tool, feature);
                return (
                  <td
                    key={tool.id}
                    className="p-4 text-center"
                  >
                    {has === true && (
                      <Check className="mx-auto h-5 w-5 text-green-600" />
                    )}
                    {has === false && (
                      <X className="mx-auto h-5 w-5 text-red-500" />
                    )}
                    {has === null && (
                      <Minus className="mx-auto h-5 w-5 text-muted-foreground" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}

          {/* Best For row */}
          <tr className="border-b border-border bg-muted/30">
            <td className="p-4 font-medium">Best For</td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                className="p-4 text-center"
              >
                <div className="flex flex-wrap justify-center gap-1">
                  {tool.bestFor.slice(0, 3).map((audience) => (
                    <span
                      key={audience}
                      className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </td>
            ))}
          </tr>

          {/* CTA row */}
          <tr className="bg-gradient-to-r from-primary/5 to-primary/10">
            <td className="p-4"></td>
            {tools.map((tool) => (
              <td
                key={tool.id}
                className="p-6 text-center"
              >
                <PartnerCTA
                  href={tool.affiliateLink}
                  variant="primary"
                  size="md"
                  icon="sparkles"
                  toolName={tool.name}
                  trackingId="comparison-table"
                >
                  Try {tool.name}
                </PartnerCTA>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/**
 * Simple comparison card for quick side-by-side
 */
interface QuickCompareProps {
  tools: AITool[];
  className?: string;
}

export function QuickCompare({ tools, className }: QuickCompareProps) {
  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {tools.map((tool) => (
        <div
          key={tool.id}
          className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">{tool.name}</h3>
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              {tool.rating}
            </div>
          </div>

          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {tool.shortDescription}
          </p>

          <div className="mb-4">
            <span className="text-2xl font-bold">
              {tool.pricing.freeTier ? 'Free' : tool.pricing.startingPrice}
            </span>
            {!tool.pricing.freeTier && (
              <span className="text-sm text-muted-foreground"> to start</span>
            )}
          </div>

          <div className="mb-4 space-y-1">
            {tool.pros.slice(0, 3).map((pro) => (
              <div
                key={pro}
                className="flex items-center gap-2 text-xs"
              >
                <Check className="h-3 w-3 flex-shrink-0 text-green-600" />
                <span className="line-clamp-1">{pro}</span>
              </div>
            ))}
          </div>

          <PartnerCTA
            href={tool.affiliateLink}
            variant="outline"
            size="sm"
            icon="arrow"
            toolName={tool.name}
            className="w-full"
          >
            Try {tool.name}
          </PartnerCTA>
        </div>
      ))}
    </div>
  );
}

export default ComparisonTable;
