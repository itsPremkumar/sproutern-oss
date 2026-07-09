'use client';

import { SocialShare } from '@/components/shared/social-share';

/**
 * Floating social share bar that appears on the left side of the screen
 * Add this to pages where you want to encourage sharing
 */
export function FloatingShareBar() {
  return (
    <SocialShare
      title="Check out this amazing free career tool on Sproutern!"
      hashtags={['sproutern', 'career', 'free', 'students']}
      variant="floating"
    />
  );
}
