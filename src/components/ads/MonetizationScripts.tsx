'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function MonetizationScripts() {
  const isAdSenseReviewMode =
    process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');
  const [shouldLoad, setShouldLoad] = useState(false);

  // Delay loading monetization scripts by 5 seconds to prioritize LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Don't show ads on admin pages
  if (isAdmin) return null;

  // Keep intrusive monetization disabled while in AdSense review mode.
  if (isAdSenseReviewMode) return null;

  // Don't load until delay has passed
  if (!shouldLoad) return null;

  // No Monetag account configured — render nothing. The placeholder domain
  // below previously fired dead script requests on every single page view.
  const monetagDomain = process.env.NEXT_PUBLIC_MONETAG_DOMAIN;
  const monetagZoneId = process.env.NEXT_PUBLIC_MONETAG_ZONE_ID;
  if (!monetagDomain || !monetagZoneId) return null;

  const monetagLoader = `
            (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('${monetagDomain}','${monetagZoneId}',document.createElement('script'))
          `;

  return (
    <>
      {/* Monetag Ad Scripts - Consolidated - Deferred for better Core Web Vitals */}

      {/* Push Notifications */}
      <Script
        id="monetag-push"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: monetagLoader }}
      />

      {/* Vignette Banner */}
      <Script
        id="monetag-vignette"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: monetagLoader }}
      />

      {/* In-Page Push */}
      <Script
        id="monetag-inpage-push"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: monetagLoader }}
      />

      {/* OnClick/Popunder */}
      <Script
        id="monetag-onclick"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{ __html: monetagLoader }}
      />
    </>
  );
}
