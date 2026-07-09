/**
 * Partner CTA Button Component
 * Call-to-action buttons with partner tracking
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ExternalLink, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PartnerCTAProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'external' | 'sparkles' | 'arrow' | 'zap' | 'none';
  className?: string;
  toolName?: string; // For analytics
  trackingId?: string;
}

export function PartnerCTA({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon = 'external',
  className,
  toolName,
  trackingId,
}: PartnerCTAProps) {
  // Add UTM parameters for tracking
  const trackingUrl = React.useMemo(() => {
    try {
      const url = new URL(href);
      url.searchParams.set('utm_source', 'sproutern');
      url.searchParams.set('utm_medium', 'partner');
      if (toolName) {
        url.searchParams.set(
          'utm_campaign',
          toolName.toLowerCase().replace(/\s+/g, '-'),
        );
      }
      if (trackingId) {
        url.searchParams.set('utm_content', trackingId);
      }
      return url.toString();
    } catch {
      // If URL parsing fails, return original href
      return href;
    }
  }, [href, toolName, trackingId]);

  const IconComponent = {
    external: ExternalLink,
    sparkles: Sparkles,
    arrow: ArrowRight,
    zap: Zap,
    none: null,
  }[icon];

  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  }[size];

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all',
    secondary: 'bg-secondary hover:bg-secondary/80 text-secondary-foreground',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    text: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
  }[variant];

  // Text variant uses simpler styling
  if (variant === 'text') {
    return (
      <Link
        href={trackingUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className={cn(
          'inline-flex items-center gap-1 font-medium text-primary hover:underline',
          className,
        )}
      >
        {children}
        {IconComponent && <IconComponent className="h-3 w-3" />}
      </Link>
    );
  }

  return (
    <Button
      asChild
      className={cn(
        'inline-flex items-center gap-2 font-semibold',
        sizeClasses,
        variantClasses,
        className,
      )}
    >
      <Link
        href={trackingUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        {children}
        {IconComponent && (
          <IconComponent
            className={cn(
              size === 'sm' ? 'h-3 w-3' : size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
            )}
          />
        )}
      </Link>
    </Button>
  );
}

/**
 * Dual CTA component - shows primary and secondary buttons together
 */
interface DualCTAProps {
  primaryHref: string;
  primaryText: string;
  secondaryHref?: string;
  secondaryText?: string;
  toolName?: string;
  className?: string;
}

export function DualPartnerCTA({
  primaryHref,
  primaryText,
  secondaryHref,
  secondaryText,
  toolName,
  className,
}: DualCTAProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <PartnerCTA
        href={primaryHref}
        variant="primary"
        size="lg"
        icon="sparkles"
        toolName={toolName}
        trackingId="primary-cta"
      >
        {primaryText}
      </PartnerCTA>
      {secondaryHref && secondaryText && (
        <PartnerCTA
          href={secondaryHref}
          variant="outline"
          size="lg"
          icon="arrow"
          toolName={toolName}
          trackingId="secondary-cta"
        >
          {secondaryText}
        </PartnerCTA>
      )}
    </div>
  );
}

export default PartnerCTA;
