'use client';

/**
 * Enhanced Analytics Module
 *
 * Tracks user engagement metrics:
 * - Scroll depth
 * - Time on page
 * - Click tracking
 * - Form interactions
 * - Video engagement
 */

import { useEffect, useRef, useCallback } from 'react';

// Extend Window interface
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

/**
 * Send event to analytics
 */
function sendEvent(eventName: string, params: Record<string, unknown>): void {
  // Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', eventName, params);
  }
}

/**
 * Scroll Depth Tracking
 */
interface ScrollDepthConfig {
  thresholds?: number[]; // Percentages to track (e.g., [25, 50, 75, 100])
  throttleMs?: number;
}

export function useScrollDepthTracking(config: ScrollDepthConfig = {}) {
  const { thresholds = [25, 50, 75, 90, 100], throttleMs = 500 } = config;
  const trackedThresholds = useRef<Set<number>>(new Set());
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime.current < throttleMs) return;
      lastScrollTime.current = now;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100,
      );

      thresholds.forEach((threshold) => {
        if (
          scrollPercent >= threshold &&
          !trackedThresholds.current.has(threshold)
        ) {
          trackedThresholds.current.add(threshold);
          sendEvent('scroll_depth', {
            event_category: 'Engagement',
            event_label: `${threshold}%`,
            value: threshold,
            page_path: window.location.pathname,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [thresholds, throttleMs]);
}

/**
 * Time on Page Tracking
 */
interface TimeOnPageConfig {
  intervals?: number[]; // Seconds to track (e.g., [30, 60, 120, 300])
}

export function useTimeOnPageTracking(config: TimeOnPageConfig = {}) {
  const { intervals = [30, 60, 120, 180, 300, 600] } = config;
  const startTime = useRef<number>(Date.now());
  const trackedIntervals = useRef<Set<number>>(new Set());

  useEffect(() => {
    const checkTimeOnPage = () => {
      const timeOnPage = Math.floor((Date.now() - startTime.current) / 1000);

      intervals.forEach((interval) => {
        if (timeOnPage >= interval && !trackedIntervals.current.has(interval)) {
          trackedIntervals.current.add(interval);
          sendEvent('time_on_page', {
            event_category: 'Engagement',
            event_label: `${interval}s`,
            value: interval,
            page_path: window.location.pathname,
          });
        }
      });
    };

    const intervalId = setInterval(checkTimeOnPage, 5000);

    // Track on page unload
    const handleUnload = () => {
      const totalTime = Math.floor((Date.now() - startTime.current) / 1000);
      sendEvent('page_exit', {
        event_category: 'Engagement',
        event_label: 'Total time',
        value: totalTime,
        page_path: window.location.pathname,
      });
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [intervals]);
}

/**
 * Outbound Link Tracking
 */
export function useOutboundLinkTracking() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (
        link &&
        link.href &&
        !link.href.startsWith(window.location.origin) &&
        !link.href.startsWith('#') &&
        !link.href.startsWith('javascript:')
      ) {
        sendEvent('outbound_link', {
          event_category: 'Engagement',
          event_label: link.href,
          link_url: link.href,
          link_text: link.textContent?.substring(0, 100),
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}

/**
 * CTA Click Tracking
 */
export function useCtaTracking() {
  const trackCta = useCallback(
    (
      ctaName: string,
      ctaLocation?: string,
      additionalParams?: Record<string, unknown>,
    ) => {
      sendEvent('cta_click', {
        event_category: 'CTA',
        event_label: ctaName,
        cta_location: ctaLocation || window.location.pathname,
        ...additionalParams,
      });
    },
    [],
  );

  return { trackCta };
}

/**
 * Form Interaction Tracking
 */
export function useFormTracking(formName: string) {
  const trackedFields = useRef<Set<string>>(new Set());
  const formStartTime = useRef<number | null>(null);

  const trackFormStart = useCallback(() => {
    if (formStartTime.current === null) {
      formStartTime.current = Date.now();
      sendEvent('form_start', {
        event_category: 'Forms',
        event_label: formName,
      });
    }
  }, [formName]);

  const trackFieldInteraction = useCallback(
    (fieldName: string) => {
      if (!trackedFields.current.has(fieldName)) {
        trackedFields.current.add(fieldName);
        sendEvent('form_field_interaction', {
          event_category: 'Forms',
          event_label: `${formName} - ${fieldName}`,
          field_name: fieldName,
          form_name: formName,
        });
      }
    },
    [formName],
  );

  const trackFormSubmit = useCallback(
    (success: boolean, errorMessage?: string) => {
      const duration = formStartTime.current
        ? Math.floor((Date.now() - formStartTime.current) / 1000)
        : 0;

      sendEvent('form_submit', {
        event_category: 'Forms',
        event_label: formName,
        form_name: formName,
        success,
        duration,
        fields_interacted: trackedFields.current.size,
        error_message: errorMessage,
      });

      // Reset
      trackedFields.current.clear();
      formStartTime.current = null;
    },
    [formName],
  );

  const trackFormAbandon = useCallback(() => {
    if (formStartTime.current !== null && trackedFields.current.size > 0) {
      const duration = Math.floor((Date.now() - formStartTime.current) / 1000);
      sendEvent('form_abandon', {
        event_category: 'Forms',
        event_label: formName,
        form_name: formName,
        duration,
        fields_completed: trackedFields.current.size,
        last_field: Array.from(trackedFields.current).pop(),
      });
    }
  }, [formName]);

  return {
    trackFormStart,
    trackFieldInteraction,
    trackFormSubmit,
    trackFormAbandon,
  };
}

/**
 * Element Visibility Tracking
 */
export function useVisibilityTracking(
  elementRef: React.RefObject<HTMLElement>,
  elementName: string,
  threshold: number = 0.5,
) {
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            sendEvent('element_visible', {
              event_category: 'Visibility',
              event_label: elementName,
              visibility_ratio: Math.round(entry.intersectionRatio * 100),
            });
          }
        });
      },
      { threshold },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, elementName, threshold]);
}

/**
 * Enhanced Analytics Provider Component
 */
export function EnhancedAnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useScrollDepthTracking();
  useTimeOnPageTracking();
  useOutboundLinkTracking();

  return <>{children}</>;
}

/**
 * Manual event tracking function
 */
export function trackEvent(
  eventName: string,
  category: string,
  label?: string,
  value?: number,
  additionalParams?: Record<string, unknown>,
) {
  sendEvent(eventName, {
    event_category: category,
    event_label: label,
    value,
    ...additionalParams,
  });
}

/**
 * Track a search query
 */
export function trackSearch(searchTerm: string, resultsCount?: number) {
  sendEvent('search', {
    event_category: 'Search',
    search_term: searchTerm,
    results_count: resultsCount,
  });
}

/**
 * Track a file download
 */
export function trackDownload(fileName: string, fileType?: string) {
  sendEvent('file_download', {
    event_category: 'Downloads',
    event_label: fileName,
    file_type: fileType,
  });
}

/**
 * Track social share
 */
export function trackSocialShare(platform: string, contentType?: string) {
  sendEvent('social_share', {
    event_category: 'Social',
    event_label: platform,
    content_type: contentType,
  });
}

export default {
  useScrollDepthTracking,
  useTimeOnPageTracking,
  useOutboundLinkTracking,
  useCtaTracking,
  useFormTracking,
  useVisibilityTracking,
  EnhancedAnalyticsProvider,
  trackEvent,
  trackSearch,
  trackDownload,
  trackSocialShare,
};
