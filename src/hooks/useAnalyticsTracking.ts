'use client';

import { useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import {
  logScrollDepth,
  logTimeOnPage,
  logSessionStart,
  logEngagementMilestone,
  logOutboundClick,
  logEvent,
} from '@/lib/analytics';

// Thresholds for scroll depth tracking
const SCROLL_THRESHOLDS = [25, 50, 75, 100];

// Time thresholds in seconds for engagement tracking
const TIME_THRESHOLDS = [10, 30, 60, 120, 300];

/**
 * Custom hook for automatic analytics tracking
 * Tracks: scroll depth, time on page, and session events
 */
export function useAnalyticsTracking() {
  const pathname = usePathname();
  const scrollMilestonesReached = useRef<Set<number>>(new Set());
  const timeMilestonesReached = useRef<Set<number>>(new Set());
  const startTime = useRef<number>(Date.now());
  const timerInterval = useRef<NodeJS.Timeout | null>(null);

  // Reset milestones when pathname changes
  useEffect(() => {
    scrollMilestonesReached.current = new Set();
    timeMilestonesReached.current = new Set();
    startTime.current = Date.now();
  }, [pathname]);

  // Scroll depth tracking
  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollHeight === 0) return;

    const scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

    for (const threshold of SCROLL_THRESHOLDS) {
      if (
        scrollPercent >= threshold &&
        !scrollMilestonesReached.current.has(threshold)
      ) {
        scrollMilestonesReached.current.add(threshold);
        logScrollDepth(threshold, pathname);
      }
    }
  }, [pathname]);

  // Time on page tracking
  const trackTimeOnPage = useCallback(() => {
    const elapsedSeconds = Math.floor((Date.now() - startTime.current) / 1000);

    for (const threshold of TIME_THRESHOLDS) {
      if (
        elapsedSeconds >= threshold &&
        !timeMilestonesReached.current.has(threshold)
      ) {
        timeMilestonesReached.current.add(threshold);
        logTimeOnPage(pathname, threshold);

        // Log engagement milestone for significant time spent
        if (threshold === 60) {
          logEngagementMilestone('1_minute_on_page', 1);
        } else if (threshold === 300) {
          logEngagementMilestone('5_minutes_on_page', 5);
        }
      }
    }
  }, [pathname]);

  // Set up scroll listener
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Debounced scroll handler
    let scrollTimeout: NodeJS.Timeout;
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener('scroll', debouncedScroll, { passive: true });

    // Initial check in case page loads scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll]);

  // Set up time tracking interval
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Track time every 5 seconds
    timerInterval.current = setInterval(trackTimeOnPage, 5000);

    return () => {
      if (timerInterval.current) {
        clearInterval(timerInterval.current);
      }
    };
  }, [trackTimeOnPage]);

  // Track session start on mount
  useEffect(() => {
    // Check if this is a new session (no previous session in sessionStorage)
    if (typeof window !== 'undefined') {
      const hasSession = sessionStorage.getItem('analytics_session_started');
      if (!hasSession) {
        logSessionStart();
        sessionStorage.setItem('analytics_session_started', 'true');
      }
    }
  }, []);

  // Log final time on page when leaving
  useEffect(() => {
    const handleBeforeUnload = () => {
      const elapsedSeconds = Math.floor(
        (Date.now() - startTime.current) / 1000,
      );
      if (elapsedSeconds > 0) {
        logTimeOnPage(pathname, elapsedSeconds);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);
}

/**
 * Hook for tracking outbound link clicks
 */
export function useOutboundClickTracking() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        try {
          const url = new URL(link.href);
          const currentHost = window.location.host;

          // Check if it's an outbound link
          if (
            url.host !== currentHost &&
            !url.href.startsWith('mailto:') &&
            !url.href.startsWith('tel:')
          ) {
            logOutboundClick(link.href, link.textContent || link.href);
          }
        } catch {
          // Invalid URL, ignore
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}

/**
 * Hook for tracking visibility changes (tab focus/blur)
 */
export function useVisibilityTracking() {
  const hiddenTime = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hiddenTime.current = Date.now();
      } else if (hiddenTime.current) {
        const hiddenDuration = Math.floor(
          (Date.now() - hiddenTime.current) / 1000,
        );
        if (hiddenDuration > 30) {
          // User was away for more than 30 seconds
          logEvent('tab_return', {
            hidden_duration_sec: hiddenDuration,
          });
        }
        hiddenTime.current = null;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
