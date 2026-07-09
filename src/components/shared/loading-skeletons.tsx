'use client';

import { Skeleton } from '@/components/ui/skeleton';

/**
 * Page loading skeleton - displays a full-page loading state
 */
export function PageSkeleton() {
  return (
    <div className="container py-8 sm:py-12">
      {/* Hero skeleton */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <Skeleton className="mx-auto mb-4 h-8 w-48 rounded-full" />
        <Skeleton className="mx-auto mb-4 h-12 w-full max-w-lg" />
        <Skeleton className="mx-auto mb-4 h-12 w-full max-w-md" />
        <Skeleton className="mx-auto h-6 w-full max-w-xl" />
      </div>

      {/* Content grid skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

/**
 * Card loading skeleton - for individual card items
 */
export function CardSkeleton() {
  return (
    <div className="rounded-2xl border bg-card p-6">
      <Skeleton className="mb-4 h-12 w-12 rounded-lg" />
      <Skeleton className="mb-2 h-6 w-3/4" />
      <Skeleton className="mb-4 h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}

/**
 * Table loading skeleton - for data tables
 */
export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/50 p-4">
        <div className="flex gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="flex gap-4 border-b p-4 last:border-b-0"
        >
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>
      ))}
    </div>
  );
}

/**
 * Blog post skeleton - for blog article loading
 */
export function BlogSkeleton() {
  return (
    <article className="container max-w-4xl py-8">
      <Skeleton className="mb-4 h-8 w-32 rounded-full" />
      <Skeleton className="mb-4 h-12 w-full" />
      <Skeleton className="mb-8 h-6 w-3/4" />
      <Skeleton className="mb-8 aspect-video w-full rounded-xl" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </article>
  );
}

/**
 * Profile skeleton - for user profile loading
 */
export function ProfileSkeleton() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="mb-8 flex items-center gap-6">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="flex-1">
          <Skeleton className="mb-2 h-8 w-48" />
          <Skeleton className="mb-2 h-4 w-64" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

/**
 * Game skeleton - for game page loading
 */
export function GameSkeleton() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-2xl">
        <Skeleton className="mb-6 h-10 w-64" />
        <Skeleton className="mb-8 aspect-square w-full rounded-2xl" />
        <div className="flex justify-center gap-4">
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
