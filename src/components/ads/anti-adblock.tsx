'use client';

import Script from 'next/script';

/**
 * Anti-Adblock Recovery Component
 *
 * This component loads Monetag's Anti-Adblock solution to recover
 * revenue from users who have ad blockers enabled.
 *
 * Benefits:
 * - Recovers up to 15% of lost ad revenue
 * - Works with Popunder, In-Page Push, and Vignette formats
 * - Automatically bypasses common ad blockers
 */
export function AntiAdblock() {
  const isAdSenseReviewMode =
    process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';

  if (isAdSenseReviewMode) {
    return null;
  }

  // No Monetag account configured — render nothing (placeholder domain
  // would fire dead requests).
  const monetagDomain = process.env.NEXT_PUBLIC_MONETAG_DOMAIN;
  const monetagZoneId = process.env.NEXT_PUBLIC_MONETAG_ZONE_ID;
  if (!monetagDomain || !monetagZoneId) {
    return null;
  }

  return (
    <>
      {/* Anti-Adblock Recovery Script */}
      <Script
        id="monetag-anti-adblock"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d,z,s){
              s.src='https://'+d+'/401/'+z;
              try{(document.body||document.documentElement).appendChild(s)}catch(e){}
            })('${monetagDomain}','${monetagZoneId}',document.createElement('script'))
          `,
        }}
      />
    </>
  );
}
