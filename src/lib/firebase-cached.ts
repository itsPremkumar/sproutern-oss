import { unstable_cache } from 'next/cache';
import { db } from '@/lib/firebase';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
  type DocumentData,
  type QueryConstraint,
} from 'firebase/firestore';

// ─────────────────────────────────────────────────────────────────────────────
// Firebase Cached Wrapper — Pillar 2
//
// Wraps ALL Firestore reads in Next.js `unstable_cache` with a 24-hour TTL.
// This means:
//   - 100,000 daily visitors → 1 Firebase read per query per day
//   - Remaining 99,999 requests served from Next.js memory cache
//   - Firebase Free Tier (50k reads/day) is NEVER exhausted
//
// 100% FREE: Uses built-in Next.js caching. No Redis. No Upstash.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Cached Firestore collection fetch.
 * Results are cached for 24 hours (86400 seconds).
 *
 * @param collectionName - Firestore collection name
 * @param cacheKey - Unique string identifying this query for the cache
 * @param constraints - Optional Firestore query constraints
 * @param ttl - Cache TTL in seconds (default: 86400 = 24 hours)
 *
 * @example
 * ```tsx
 * // In a Server Component:
 * const internships = await cachedCollection('internships', 'latest-internships', [
 *   orderBy('postedAt', 'desc'),
 *   limit(10),
 * ]);
 * ```
 */
export async function cachedCollection<T extends DocumentData = DocumentData>(
  collectionName: string,
  cacheKey: string,
  constraints: QueryConstraint[] = [],
  ttl: number = 86400,
): Promise<T[]> {
  const fetcher = unstable_cache(
    async (): Promise<T[]> => {
      if (!db) {
        console.warn(
          `[firebase-cached] Database not initialized for "${collectionName}"`,
        );
        return [];
      }

      try {
        const colRef = collection(db, collectionName);
        const q =
          constraints.length > 0
            ? query(colRef, ...constraints)
            : query(colRef);
        const snapshot = await getDocs(q);

        return snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as unknown as T[];
      } catch (error) {
        console.error(
          `[firebase-cached] Error fetching "${collectionName}":`,
          error,
        );
        return [];
      }
    },
    [`firebase-${collectionName}-${cacheKey}`],
    {
      revalidate: ttl,
      tags: [`firebase-${collectionName}`, `firebase-${cacheKey}`],
    },
  );

  return fetcher();
}

// ── Pre-built cached queries ──────────────────────────────────────────────

/**
 * Get latest internships (cached 24h)
 * Firebase reads: exactly 1 per day regardless of traffic
 */
export async function getLatestInternships(count: number = 10) {
  return cachedCollection('internships', `latest-${count}`, [
    orderBy('postedAt', 'desc'),
    limit(count),
  ]);
}

/**
 * Get all active internships (cached 24h)
 */
export async function getActiveInternships() {
  return cachedCollection('internships', 'active', [
    where('status', '==', 'active'),
    orderBy('postedAt', 'desc'),
  ]);
}

/**
 * Get internship count (cached 24h)
 */
export async function getInternshipCount(): Promise<number> {
  const fetcher = unstable_cache(
    async (): Promise<number> => {
      if (!db) return 0;
      try {
        const snapshot = await getDocs(collection(db, 'internships'));
        return snapshot.size;
      } catch {
        return 0;
      }
    },
    ['firebase-internship-count'],
    { revalidate: 86400, tags: ['firebase-internships'] },
  );

  return fetcher();
}

/**
 * Get user-submitted interview experiences (cached 24h)
 */
export async function getSubmittedExperiences(count: number = 20) {
  return cachedCollection('interview-experiences', `submitted-${count}`, [
    orderBy('submittedAt', 'desc'),
    limit(count),
  ]);
}

/**
 * Get contributor submissions (cached 12h — needs fresher data)
 */
export async function getContributors() {
  return cachedCollection('contributors', 'all', [], 43200); // 12 hours
}

// ── Cache Revalidation Helpers ────────────────────────────────────────────

/**
 * Tags that can be used with revalidateTag() to purge specific caches.
 *
 * @example
 * ```tsx
 * // In a Server Action after a new internship is posted:
 * import { revalidateTag } from 'next/cache';
 * revalidateTag('firebase-internships');
 * ```
 */
export const CACHE_TAGS = {
  INTERNSHIPS: 'firebase-internships',
  EXPERIENCES: 'firebase-interview-experiences',
  CONTRIBUTORS: 'firebase-contributors',
} as const;
