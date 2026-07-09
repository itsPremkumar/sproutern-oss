import { PageSkeleton } from '@/components/shared/loading-skeletons';

/**
 * Global loading state for the app
 * This is shown during route transitions
 */
export default function Loading() {
  return <PageSkeleton />;
}
