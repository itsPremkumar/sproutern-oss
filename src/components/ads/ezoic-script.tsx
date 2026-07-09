'use client';

import Script from 'next/script';

export function EzoicScript() {
  // Only load Ezoic scripts in production to avoid 'visit_uuid not found' warning in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        id="ezoic-consent-cmp"
        strategy="lazyOnload"
        src="https://cmp.gatekeeperconsent.com/min.js"
        data-cfasync="false"
      />
      <Script
        id="ezoic-consent"
        strategy="lazyOnload"
        src="https://the.gatekeeperconsent.com/cmp.min.js"
        data-cfasync="false"
      />
      <Script
        id="ezoic-base"
        strategy="lazyOnload"
        src="//www.ezojs.com/ezoic/sa.min.js"
        onLoad={() => {
          // Initialize ezstandalone queue
          window.ezstandalone = window.ezstandalone || {};
          window.ezstandalone.cmd = window.ezstandalone.cmd || [];
        }}
      />
    </>
  );
}
