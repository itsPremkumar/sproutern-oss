'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function EzoicLogic() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);

  // Only run Ezoic logic in production
  const isProduction = process.env.NODE_ENV === 'production';

  useEffect(() => {
    // Skip in development to avoid Ezoic console errors
    if (!isProduction) return;
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    // Give the new page content a moment to render before refreshing ads
    const timer = setTimeout(() => {
      try {
        if (window.ezstandalone) {
          // Note: In a real SPA, we might need to destroy old placeholders first
          // if we were reusing IDs. However, Ezoic's showAds() generally handles
          // finding valid placeholders in the DOM.
          // For now, we'll try to refresh all available slots.
          window.ezstandalone.cmd.push(() => {
            // If we knew specific IDs for the page, we'd pass them here.
            // Calling with no args attempts to show all defined placeholders on the page.
            window.ezstandalone.showAds();
          });
        }
      } catch (error) {
        console.error('Ezoic refresh error:', error);
      }
    }, 500); // 500ms delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, [pathname, isProduction]);

  return null;
}
