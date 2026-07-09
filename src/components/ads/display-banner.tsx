'use client';

import Script from 'next/script';

interface DisplayBannerProps {
  /** Monetag zone ID for the banner */
  zoneId?: string;
  /** Banner placement identifier */
  placement?: 'header' | 'footer' | 'sidebar' | 'in-content';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Display Banner Ad Component
 *
 * Renders a Monetag native banner ad in a specified placement.
 * Uses lazy loading for optimal performance.
 */
export function DisplayBanner({
  zoneId = 'YOUR_ZONE_ID', // Default zone, update with actual banner zone
  placement = 'footer',
  className = '',
}: DisplayBannerProps) {
  const placementId = `monetag-banner-${placement}`;

  return (
    <div
      id={placementId}
      className={`monetag-banner-container ${className}`}
      style={{
        width: '100%',
        minHeight: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Banner Ad Script */}
      <Script
        id={`monetag-banner-script-${placement}`}
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function(d,z,s){
              s.src='https://'+d+'/400/'+z;
              try{(document.body||document.documentElement).appendChild(s)}catch(e){}
            })('YOUR_MONETAG_DOMAIN.com','${zoneId}',document.createElement('script'))
          `,
        }}
      />
    </div>
  );
}
