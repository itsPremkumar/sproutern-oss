'use client';

import React, { useCallback } from 'react';

interface SmartLinkButtonProps {
  /** The SmartLink/Direct Link URL from Monetag */
  smartLinkUrl?: string;
  /** Original destination URL (optional - for delayed navigation) */
  href?: string;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Delay before navigating to href (in ms) */
  navigationDelay?: number;
  /** Whether to open SmartLink in new tab */
  openInNewTab?: boolean;
  /** Click handler */
  onClick?: () => void;
}

/**
 * SmartLink Button Component
 *
 * Wraps any CTA button to open a Monetag SmartLink/Direct Link
 * when clicked. This generates revenue from user interactions.
 *
 * Usage:
 * 1. Get your Direct Link from Monetag Dashboard
 * 2. Wrap your CTA buttons with this component
 * 3. Revenue generated on each click
 */
export function SmartLinkButton({
  smartLinkUrl,
  href,
  children,
  className = '',
  navigationDelay = 0,
  openInNewTab = true,
  onClick,
}: SmartLinkButtonProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();

      // Open SmartLink
      if (smartLinkUrl) {
        if (openInNewTab) {
          window.open(smartLinkUrl, '_blank', 'noopener,noreferrer');
        } else {
          window.location.href = smartLinkUrl;
        }
      }

      // Execute custom onClick if provided
      if (onClick) {
        onClick();
      }

      // Navigate to original href after delay (if provided)
      if (href && navigationDelay > 0) {
        setTimeout(() => {
          window.location.href = href;
        }, navigationDelay);
      } else if (href) {
        window.location.href = href;
      }
    },
    [smartLinkUrl, href, navigationDelay, openInNewTab, onClick],
  );

  return (
    <button
      onClick={handleClick}
      className={className}
      type="button"
    >
      {children}
    </button>
  );
}

/**
 * SmartLink Wrapper Component
 *
 * Wraps any clickable element to trigger SmartLink on interaction.
 * More flexible than SmartLinkButton - accepts any React element.
 */
export function SmartLinkWrapper({
  smartLinkUrl,
  children,
  className = '',
}: {
  smartLinkUrl?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = useCallback(() => {
    if (smartLinkUrl) {
      window.open(smartLinkUrl, '_blank', 'noopener,noreferrer');
    }
  }, [smartLinkUrl]);

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {children}
    </div>
  );
}
