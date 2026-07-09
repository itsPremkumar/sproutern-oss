/**
 * CRO - Conversion Rate Optimization Components
 * Maximize conversions from traffic to leads/users
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import {
  X,
  ArrowRight,
  Zap,
  Gift,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,
  Sparkles,
  Download,
  Mail,
} from 'lucide-react';

/**
 * Exit Intent Popup
 * Captures leaving visitors with a compelling offer
 */
export function ExitIntentCTA({
  title = 'Wait! Before You Go...',
  subtitle = 'Get our free career toolkit',
  offer,
  ctaText = 'Get Free Access',
  ctaLink,
  onSubmit,
}: {
  title?: string;
  subtitle?: string;
  offer?: string;
  ctaText?: string;
  ctaLink?: string;
  onSubmit?: (email: string) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if already shown in this session
    const shown = sessionStorage.getItem('exit-intent-shown');
    if (shown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exit-intent-shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="relative mx-4 max-w-md animate-in fade-in zoom-in">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 rounded-full p-1 hover:bg-muted"
        >
          <X className="h-5 w-5" />
        </button>
        <CardHeader className="text-center">
          <Gift className="mx-auto mb-2 h-12 w-12 text-primary" />
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-muted-foreground">{subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {offer && (
            <div className="rounded-lg bg-primary/10 p-4 text-center">
              <p className="font-semibold text-primary">{offer}</p>
            </div>
          )}
          {onSubmit ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(email);
                setIsVisible(false);
              }}
              className="space-y-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                className="w-full"
              >
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          ) : (
            <Button
              asChild
              className="w-full"
            >
              <Link href={ctaLink || '/'}>
                {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <p className="text-center text-xs text-muted-foreground">
            No spam. Unsubscribe anytime.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Floating CTA Bar
 * Sticky bottom bar for continuous conversion opportunity
 */
export function FloatingCTABar({
  message,
  ctaText,
  ctaLink,
  variant = 'primary',
}: {
  message: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'primary' | 'success' | 'warning';
}) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-4 px-4 py-3',
        variant === 'primary' && 'bg-primary text-primary-foreground',
        variant === 'success' && 'bg-green-600 text-white',
        variant === 'warning' && 'bg-yellow-500 text-black',
      )}
    >
      <p className="flex-1 text-sm font-medium">{message}</p>
      <div className="flex items-center gap-2">
        <Button
          asChild
          size="sm"
          variant={variant === 'primary' ? 'secondary' : 'default'}
        >
          <Link href={ctaLink}>
            {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded p-1 hover:bg-white/10"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/**
 * Social Proof Counter
 * Shows real-time usage statistics
 */
export function SocialProofCounter({
  count,
  label,
  icon = 'users',
  animated = true,
}: {
  count: number;
  label: string;
  icon?: 'users' | 'downloads' | 'stars';
  animated?: boolean;
}) {
  const [displayCount, setDisplayCount] = useState(animated ? 0 : count);

  useEffect(() => {
    if (!animated) return;
    const duration = 2000;
    const steps = 50;
    const increment = count / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= count) {
        setDisplayCount(count);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [count, animated]);

  const IconComponent =
    icon === 'users' ? Users : icon === 'downloads' ? Download : Star;

  return (
    <div className="flex items-center gap-3 rounded-lg border bg-card p-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
        <IconComponent className="h-6 w-6 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-bold">{displayCount.toLocaleString()}+</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

/**
 * Urgency Timer
 * Creates FOMO with countdown
 */
export function UrgencyTimer({
  endTime,
  message,
  ctaText,
  ctaLink,
}: {
  endTime: Date;
  message: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
      <div className="flex items-center gap-2 text-red-600">
        <Clock className="h-5 w-5" />
        <span className="font-semibold">{message}</span>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="text-center">
          <span className="text-2xl font-bold text-red-600">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <p className="text-xs text-muted-foreground">Hours</p>
        </div>
        <span className="text-2xl font-bold text-red-600">:</span>
        <div className="text-center">
          <span className="text-2xl font-bold text-red-600">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <p className="text-xs text-muted-foreground">Mins</p>
        </div>
        <span className="text-2xl font-bold text-red-600">:</span>
        <div className="text-center">
          <span className="text-2xl font-bold text-red-600">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <p className="text-xs text-muted-foreground">Secs</p>
        </div>
      </div>
      {ctaLink && ctaText && (
        <Button
          asChild
          className="mt-4 w-full bg-red-600 hover:bg-red-700"
        >
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      )}
    </div>
  );
}

/**
 * Trust Badges Section
 * Builds credibility
 */
export function TrustBadges({
  badges,
}: {
  badges: { icon: React.ReactNode; text: string }[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 border-y bg-muted/30 py-4">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          {badge.icon}
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  );
}

/**
 * Lead Magnet Card
 * Promotes downloadable resources
 */
export function LeadMagnetCard({
  title,
  description,
  format,
  ctaText = 'Download Free',
  onSubmit,
}: {
  title: string;
  description: string;
  format: string;
  ctaText?: string;
  onSubmit: (email: string) => void;
}) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardContent className="p-6 text-center">
          <CheckCircle className="mx-auto mb-4 h-12 w-12 text-green-600" />
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200">
            Check Your Email!
          </h3>
          <p className="text-green-700 dark:text-green-300">
            We&apos;ve sent your download link.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-center text-primary-foreground">
        <Badge
          variant="secondary"
          className="mb-2"
        >
          FREE {format}
        </Badge>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <CardContent className="p-4">
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(email);
            setSubmitted(true);
          }}
          className="space-y-3"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full"
          >
            <Download className="mr-2 h-4 w-4" />
            {ctaText}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

/**
 * Feature Highlight with CTA
 */
export function FeatureCTA({
  icon,
  title,
  description,
  ctaText,
  ctaLink,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  highlight?: string;
}) {
  return (
    <Card className="group transition-all hover:border-primary hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon}
        </div>
        {highlight && (
          <Badge
            className="mb-2"
            variant="secondary"
          >
            {highlight}
          </Badge>
        )}
        <h3 className="mb-2 text-lg font-bold">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button
          asChild
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <Link href={ctaLink}>
            {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default {
  ExitIntentCTA,
  FloatingCTABar,
  SocialProofCounter,
  UrgencyTimer,
  TrustBadges,
  LeadMagnetCard,
  FeatureCTA,
};
