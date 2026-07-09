'use client';

/**
 * Cookie Consent Banner
 *
 * GDPR/CCPA compliant cookie consent management.
 * Stores user preferences in localStorage with fallback to cookies.
 *
 * Features:
 * - Granular consent management (analytics, marketing, functional)
 * - Remembers user preferences
 * - Accessible and keyboard navigable
 * - Respects user's existing preferences
 */

import { useState, useEffect, useCallback } from 'react';
import { X, Cookie, Settings } from 'lucide-react';

// Extend Window interface
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export interface ConsentPreferences {
  necessary: boolean; // Always true, cannot be disabled
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export interface CookieConsentProps {
  /** Called when user accepts/updates preferences */
  onConsentChange?: (preferences: ConsentPreferences) => void;
  /** Privacy policy URL */
  privacyPolicyUrl?: string;
  /** Cookie policy URL */
  cookiePolicyUrl?: string;
  /** Whether to show the detailed settings on first visit */
  showDetailsFirst?: boolean;
}

const CONSENT_STORAGE_KEY = 'sproutern_cookie_consent';
const CONSENT_VERSION = '1.0';

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
};

/**
 * Get stored consent preferences
 */
function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.version === CONSENT_VERSION) {
        return parsed.preferences;
      }
    }
  } catch {
    console.warn('[CookieConsent] Failed to read stored preferences');
  }
  return null;
}

/**
 * Store consent preferences
 */
function storeConsent(preferences: ConsentPreferences): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        version: CONSENT_VERSION,
        preferences,
        timestamp: Date.now(),
      }),
    );

    // Also set a cookie for server-side reading
    document.cookie = `cookie_consent=${encodeURIComponent(JSON.stringify(preferences))}; max-age=31536000; path=/; SameSite=Lax`;
  } catch {
    console.warn('[CookieConsent] Failed to store preferences');
  }
}

/**
 * Update Google Analytics consent
 */
function updateGoogleConsent(preferences: ConsentPreferences): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied',
      functionality_storage: preferences.functional ? 'granted' : 'denied',
      personalization_storage: preferences.functional ? 'granted' : 'denied',
    });
  }
}

export function CookieConsent({
  onConsentChange,
  privacyPolicyUrl = '/privacy-policy',
  cookiePolicyUrl = '/cookie-policy',
  showDetailsFirst = false,
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(showDetailsFirst);
  const [preferences, setPreferences] =
    useState<ConsentPreferences>(DEFAULT_PREFERENCES);

  // Check for existing consent on mount
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored);
      updateGoogleConsent(stored);
    } else {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    storeConsent(allAccepted);
    updateGoogleConsent(allAccepted);
    onConsentChange?.(allAccepted);
    setIsVisible(false);
  }, [onConsentChange]);

  const handleRejectAll = useCallback(() => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(onlyNecessary);
    storeConsent(onlyNecessary);
    updateGoogleConsent(onlyNecessary);
    onConsentChange?.(onlyNecessary);
    setIsVisible(false);
  }, [onConsentChange]);

  const handleSavePreferences = useCallback(() => {
    storeConsent(preferences);
    updateGoogleConsent(preferences);
    onConsentChange?.(preferences);
    setIsVisible(false);
  }, [preferences, onConsentChange]);

  const togglePreference = useCallback(
    (key: keyof Omit<ConsentPreferences, 'necessary'>) => {
      setPreferences((prev) => ({
        ...prev,
        [key]: !prev[key],
      }));
    },
    [],
  );

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between bg-muted/50 p-4 md:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Cookie Settings</h2>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your experience
              </p>
            </div>
          </div>
          <button
            onClick={handleRejectAll}
            className="rounded-md p-2 transition-colors hover:bg-muted"
            aria-label="Close and reject all cookies"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {!showDetails ? (
            <p className="mb-4 text-sm text-muted-foreground">
              We use cookies to personalize content, provide social media
              features, and analyze our traffic. You can customize your
              preferences or accept all cookies.{' '}
              <a
                href={privacyPolicyUrl}
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </p>
          ) : (
            <div className="mb-4 space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-start justify-between rounded-lg bg-muted/30 p-3">
                <div>
                  <h3 className="font-medium">Necessary Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Essential for the website to function properly. Cannot be
                    disabled.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                  aria-label="Necessary cookies (always enabled)"
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-start justify-between rounded-lg bg-muted/30 p-3">
                <div>
                  <h3 className="font-medium">Analytics Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  aria-label="Toggle analytics cookies"
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start justify-between rounded-lg bg-muted/30 p-3">
                <div>
                  <h3 className="font-medium">Marketing Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Used to track visitors across websites for advertising
                    purposes.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  aria-label="Toggle marketing cookies"
                />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-start justify-between rounded-lg bg-muted/30 p-3">
                <div>
                  <h3 className="font-medium">Functional Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    Enable personalized features and remember your preferences.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => togglePreference('functional')}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  aria-label="Toggle functional cookies"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {!showDetails ? (
              <>
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-border px-4 py-2 transition-colors hover:bg-muted"
                >
                  <Settings className="h-4 w-4" />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 rounded-md border border-border px-4 py-2 transition-colors hover:bg-muted"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Accept All
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowDetails(false)}
                  className="flex-1 rounded-md border border-border px-4 py-2 transition-colors hover:bg-muted"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Save Preferences
                </button>
              </>
            )}
          </div>

          {/* Links */}
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <a
              href={privacyPolicyUrl}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            {' • '}
            <a
              href={cookiePolicyUrl}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Hook to manage cookie consent
 */
export function useCookieConsent() {
  const [preferences, setPreferences] = useState<ConsentPreferences | null>(
    null,
  );

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setPreferences(stored);
    }
  }, []);

  const hasConsent = useCallback(
    (category: keyof ConsentPreferences): boolean => {
      return preferences?.[category] ?? false;
    },
    [preferences],
  );

  const updateConsent = useCallback((newPreferences: ConsentPreferences) => {
    setPreferences(newPreferences);
    storeConsent(newPreferences);
    updateGoogleConsent(newPreferences);
  }, []);

  const resetConsent = useCallback(() => {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    document.cookie = 'cookie_consent=; max-age=0; path=/';
    setPreferences(null);
  }, []);

  return {
    preferences,
    hasConsent,
    updateConsent,
    resetConsent,
    isConsentGiven: preferences !== null,
  };
}

export default CookieConsent;
