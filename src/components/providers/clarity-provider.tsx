'use client';

import { useEffect } from 'react';

const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'YOUR_CLARITY_PROJECT_ID';

export function ClarityProvider() {
  useEffect(() => {
    // Delay Clarity initialization by 4 seconds to prioritize LCP
    const timer = setTimeout(async () => {
      try {
        // Dynamically import Clarity to reduce initial bundle size
        const { default: Clarity } = await import('@microsoft/clarity');
        Clarity.init(CLARITY_PROJECT_ID);
      } catch (error) {
        console.error('[Clarity] Failed to initialize:', error);
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
