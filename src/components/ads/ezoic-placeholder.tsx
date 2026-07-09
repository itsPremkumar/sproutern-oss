'use client';

import { useEffect, useRef } from 'react';

interface EzoicPlaceholderProps {
  id: number;
}

export function EzoicPlaceholder({ id }: EzoicPlaceholderProps) {
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;

    try {
      if (window.ezstandalone) {
        window.ezstandalone.cmd.push(() => {
          window.ezstandalone.define(id);
          window.ezstandalone.showAds(id);
        });
        isLoaded.current = true;
      }
    } catch (e) {
      console.error('Ezoic placeholder error:', e);
    }
  }, [id]);

  return (
    <div id={`ezoic-pub-ad-placeholder-${id}`}>
      {/* Ad will be inserted here by Ezoic */}
    </div>
  );
}
