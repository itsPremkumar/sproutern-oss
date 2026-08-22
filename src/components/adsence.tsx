'use client';

import { useEffect, useRef } from 'react';

interface GoogleAdProps {
  slot: string;
  style?: React.CSSProperties;
}

export function GoogleAd({ slot, style }: GoogleAdProps) {
  const isAdSenseReviewMode =
    process.env.NEXT_PUBLIC_ADSENSE_REVIEW_MODE !== 'false';
  const adRef = useRef<HTMLModElement>(null);
  const isAdPushed = useRef(false);

  useEffect(() => {
    if (isAdSenseReviewMode) return;

    // Only push ad once and only if the element exists
    if (isAdPushed.current || !adRef.current) return;

    // Check if ad is already loaded (has data-adsbygoogle-status attribute)
    const adStatus = adRef.current.getAttribute('data-adsbygoogle-status');
    if (adStatus) {
      isAdPushed.current = true;
      return;
    }

    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      isAdPushed.current = true;
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, [isAdSenseReviewMode]);

  if (isAdSenseReviewMode) {
    return null;
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style || { display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ACCOUNT || ''}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
