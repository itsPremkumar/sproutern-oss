'use client';

import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

/**
 * Base skeleton pulse animation component
 */
export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn('animate-pulse rounded-md bg-muted', className)} />;
}

/**
 * Skeleton for stat cards (used in homepage hero)
 */
export function StatCardSkeleton() {
  return (
    <div className="glass-strong rounded-2xl p-6 text-center">
      <Skeleton className="mx-auto mb-3 h-10 w-10 rounded-full" />
      <Skeleton className="mx-auto mb-2 h-12 w-20" />
      <Skeleton className="mx-auto h-4 w-24" />
    </div>
  );
}

/**
 * Skeleton grid for homepage stats section
 */
export function StatsGridSkeleton() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <StatCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Skeleton for testimonial cards
 */
export function TestimonialCardSkeleton() {
  return (
    <div className="rounded-2xl bg-background p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="mb-4 h-6 w-6" />
      <div className="mb-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
      <div className="border-t pt-4">
        <Skeleton className="mb-1 h-5 w-32" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
}

/**
 * Skeleton grid for testimonials section
 */
export function TestimonialsGridSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {[...Array(count)].map((_, i) => (
        <TestimonialCardSkeleton key={i} />
      ))}
    </div>
  );
}

/**
 * Skeleton for tool/resource cards
 */
export function ToolCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-4">
      <div className="mb-3 flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-5 w-24" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="mt-1 h-4 w-2/3" />
    </div>
  );
}

/**
 * Skeleton for blog/article cards
 */
export function ArticleCardSkeleton() {
  return (
    <div className="space-y-3 rounded-xl border bg-card p-4">
      <Skeleton className="h-40 w-full rounded-lg" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

/**
 * Full page loading skeleton
 */
export function PageSkeleton() {
  return (
    <div className="container space-y-8 py-12">
      <Skeleton className="mx-auto h-12 w-2/3" />
      <Skeleton className="mx-auto h-6 w-1/2" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <ToolCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
