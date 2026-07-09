'use client';

import { useEffect, useState } from 'react';

/**
 * ScrollProgress - A thin gradient progress bar at the top of the page
 * Shows reading progress to gamify content consumption and reduce bounce rate.
 * Zero layout shift - uses position:fixed.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(Math.min(scrollPercent, 100));
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[9999] h-[3px]"
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background:
            'linear-gradient(90deg, hsl(262, 83%, 58%), hsl(221, 83%, 53%), hsl(189, 94%, 43%))',
        }}
      />
    </div>
  );
}
