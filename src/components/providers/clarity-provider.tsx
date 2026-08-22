'use client';

import { useEffect } from 'react';

export function ClarityProvider() {
  useEffect(() => {
    // No project ID configured — skip entirely (a dummy ID just errors).
    if (!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID) return;

    // Delay Clarity initialization by 4 seconds to prioritize LCP
    const timer = setTimeout(async () => {
      try {
        // Dynamically import Clarity to reduce initial bundle size
        const { default: Clarity } = await import('@microsoft/clarity');
        Clarity.init(process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID!);
      } catch (error) {
        console.error('[Clarity] Failed to initialize:', error);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
