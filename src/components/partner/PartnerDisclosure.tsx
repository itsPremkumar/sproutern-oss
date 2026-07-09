/**
 * Partner Disclosure Component
 * Displays proper partner disclosure for FTC compliance
 */

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';

interface PartnerDisclosureProps {
  variant?: 'banner' | 'inline' | 'footer' | 'tooltip';
  className?: string;
}

export function PartnerDisclosure({
  variant = 'inline',
  className,
}: PartnerDisclosureProps) {
  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950',
          className,
        )}
      >
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
          <p className="text-sm text-blue-800 dark:text-blue-200">
            <strong>Note:</strong> We partner with some of the tools featured
            here. If you sign up through our links, we may earn a small
            commission at no extra cost to you. This helps us keep the site
            free!{' '}
            <Link
              href="/affiliate-disclosure"
              className="font-medium underline hover:no-underline"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1 text-xs text-muted-foreground',
          className,
        )}
      >
        <Info className="h-3 w-3" />
        <span>
          Partner link -{' '}
          <Link
            href="/affiliate-disclosure"
            className="underline hover:no-underline"
          >
            details
          </Link>
        </span>
      </span>
    );
  }

  if (variant === 'footer') {
    return (
      <div
        className={cn(
          'border-t border-border bg-muted/30 py-4 text-center text-xs text-muted-foreground',
          className,
        )}
      >
        <p>
          Some tools on this page are from our partners. We may earn a
          commission at no cost to you.{' '}
          <Link
            href="/affiliate-disclosure"
            className="font-medium underline hover:no-underline"
          >
            Learn more
          </Link>
        </p>
      </div>
    );
  }

  // Tooltip variant - just returns text for use in tooltips
  return (
    <span className={cn('text-xs', className)}>
      Partner link - we may earn a commission
    </span>
  );
}

/**
 * Small partner badge to show next to partner links
 */
export function PartnerBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'ml-1 inline-flex items-center rounded bg-blue-100 px-1.5 py-0.5 text-[10px] font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-300',
        className,
      )}
      title="Partner link"
    >
      Partner
    </span>
  );
}

export default PartnerDisclosure;
