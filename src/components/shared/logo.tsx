import React from 'react';
import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logo.jpg"
      alt="Sproutern Logo"
      width={56}
      height={56}
      sizes="56px"
      className="h-14 w-14 rounded-full"
      loading="eager"
      quality={60}
    />
  );
}
