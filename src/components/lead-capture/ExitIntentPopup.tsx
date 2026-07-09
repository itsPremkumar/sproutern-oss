/**
 * =============================================================================
 * EXIT INTENT POPUP COMPONENT
 * =============================================================================
 *
 * Purpose: A newsletter subscription popup that captures visitors before they
 * leave the website. It uses intelligent exit-intent detection to show at the
 * optimal moment without being intrusive.
 *
 * Key Features:
 * - Desktop: Triggers when mouse cursor moves toward browser tab/address bar
 * - Mobile: Triggers on scroll-up gesture near top of page (user trying to leave)
 * - Smart frequency capping: Shows only once per 7 days (stored in localStorage)
 * - Accessible: Includes proper ARIA labels and keyboard navigation
 * - Responsive: Adapts to all screen sizes with mobile-first design
 *
 * Design Elements:
 * - Gradient purple gift icon as attention-grabbing header
 * - Clean email input with icon
 * - Gradient CTA button matching brand colors
 * - Social proof ("Join 10,000+ students")
 * - Trust indicators ("No spam", "Unsubscribe anytime")
 * =============================================================================
 */

'use client';

// =============================================================================
// IMPORTS
// =============================================================================
import { useEffect, useState, useCallback } from 'react';
import { X, Mail, Gift } from 'lucide-react'; // Icon library for UI elements

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

/**
 * Props interface for the ExitIntentPopup component
 * All props are optional with sensible defaults for quick implementation
 */
interface ExitIntentPopupProps {
  /** Callback function when user submits their email */
  onSubscribe?: (email: string) => void;
  /** Main headline of the popup (default: "Wait! Don't miss out") */
  title?: string;
  /** Supporting text explaining the value proposition */
  description?: string;
  /** Text for the submit button (default: "Subscribe Now") */
  buttonText?: string;
  /** Social proof text displayed below button (default: "Join 10,000+ students") */
  offerText?: string;
}

// =============================================================================
// COMPONENT DEFINITION
// =============================================================================

/**
 * Exit Intent Popup - Captures visitors before they leave
 * Shows newsletter signup when mouse leaves viewport (desktop)
 * or after scroll up gesture (mobile)
 */
export function ExitIntentPopup({
  onSubscribe,
  title = "Wait! Don't miss out",
  description = 'Get exclusive career tips, internship alerts, and job opportunities delivered to your inbox.',
  buttonText = 'Subscribe Now',
  offerText = 'Join 10,000+ students',
}: ExitIntentPopupProps) {
  // =========================================================================
  // STATE MANAGEMENT
  // =========================================================================

  /** Controls popup visibility - true when popup should be displayed */
  const [isVisible, setIsVisible] = useState(false);

  /** Stores the user's email input value */
  const [email, setEmail] = useState('');

  /** Tracks form submission state for loading indicator */
  const [isSubmitting, setIsSubmitting] = useState(false);

  /** Prevents popup from showing multiple times in one session */
  const [hasShown, setHasShown] = useState(false);

  // =========================================================================
  // CONFIGURATION CONSTANTS
  // =========================================================================

  /** LocalStorage key for tracking when popup was last shown */
  const COOKIE_KEY = 'sproutern_exit_intent_shown';

  /** Number of days to wait before showing popup again to same user */
  const SHOW_AGAIN_DAYS = 7;

  // =========================================================================
  // FREQUENCY CAPPING LOGIC
  // =========================================================================

  /**
   * Determines if the popup should be displayed based on:
   * 1. Whether we're in a browser environment (SSR check)
   * 2. How long ago the popup was last shown to this user
   *
   * Returns false if popup was shown within the last 7 days
   */
  const shouldShowPopup = useCallback(() => {
    // SSR guard - don't run on server
    if (typeof window === 'undefined') return false;

    // Check localStorage for last shown timestamp
    const lastShown = localStorage.getItem(COOKIE_KEY);
    if (lastShown) {
      // Calculate days since last shown
      const daysSinceShown =
        (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24);
      // Don't show if within frequency cap window
      if (daysSinceShown < SHOW_AGAIN_DAYS) return false;
    }
    return true;
  }, []);

  // =========================================================================
  // DESKTOP EXIT INTENT DETECTION
  // =========================================================================

  /**
   * Desktop Exit Intent Detection
   *
   * How it works:
   * - Listens for 'mouseleave' event on the document
   * - Checks if mouse left through the TOP of the viewport (clientY <= 0)
   * - This indicates user is moving toward browser tabs/address bar to leave
   *
   * This is a non-intrusive way to capture attention as users are leaving
   */
  useEffect(() => {
    // Skip if popup shouldn't show or has already been shown this session
    if (!shouldShowPopup() || hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse exits through top of viewport
      // clientY <= 0 means cursor went above the page (toward browser UI)
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        // Store timestamp in localStorage to enforce frequency cap
        localStorage.setItem(COOKIE_KEY, Date.now().toString());
      }
    };

    // Add event listener for mouse leaving the document
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup: Remove listener when component unmounts
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown, shouldShowPopup]);

  // =========================================================================
  // MOBILE EXIT INTENT DETECTION
  // =========================================================================

  /**
   * Mobile Exit Intent Detection (Scroll-based)
   *
   * How it works:
   * - Monitors scroll direction and position
   * - Detects when user scrolls UP while near top of page (< 100px)
   * - After 3 consecutive upward scrolls, triggers the popup
   *
   * Rationale: On mobile, users often scroll up to access browser UI
   * (address bar, refresh) when leaving. This gesture indicates exit intent.
   */
  useEffect(() => {
    // Skip if popup shouldn't show or has already been shown this session
    if (!shouldShowPopup() || hasShown) return;

    // Track last scroll position for direction detection
    let lastScrollY = window.scrollY;
    // Count consecutive upward scrolls
    let scrollUpCount = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll up gesture near top of page
      // Conditions: scrolling up AND near top of page (< 100px)
      if (currentScrollY < lastScrollY && currentScrollY < 100) {
        scrollUpCount++;
        // Trigger after 3 consecutive upward scrolls (to avoid false positives)
        if (scrollUpCount >= 3 && !hasShown) {
          setIsVisible(true);
          setHasShown(true);
          localStorage.setItem(COOKIE_KEY, Date.now().toString());
        }
      } else {
        // Reset counter if user scrolls down or away from top
        scrollUpCount = 0;
      }
      lastScrollY = currentScrollY;
    };

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup: Remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShown, shouldShowPopup]);

  // =========================================================================
  // FORM SUBMISSION HANDLER
  // =========================================================================

  /**
   * Handles the newsletter subscription form submission
   *
   * Flow:
   * 1. Prevent default form behavior
   * 2. Validate email exists and not already submitting
   * 3. Call the onSubscribe callback with email
   * 4. Close popup on success
   * 5. Handle any errors gracefully
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Guard: Don't proceed if no email or already submitting
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Call the subscription handler passed via props
      await onSubscribe?.(email);
      // Close popup on successful subscription
      setIsVisible(false);
    } catch (error) {
      // Log error but don't crash - user can retry
      console.error('Subscription error:', error);
    } finally {
      // Reset submitting state regardless of outcome
      setIsSubmitting(false);
    }
  };

  // =========================================================================
  // CLOSE HANDLER
  // =========================================================================

  /**
   * Closes the popup when user clicks X button or backdrop
   * Note: The popup won't show again for SHOW_AGAIN_DAYS (7 days)
   */
  const handleClose = () => {
    setIsVisible(false);
  };

  // =========================================================================
  // EARLY RETURN - DON'T RENDER IF NOT VISIBLE
  // =========================================================================

  // Don't render anything if popup is not visible
  if (!isVisible) return null;

  // =========================================================================
  // RENDER - POPUP UI
  // =========================================================================

  return (
    /**
     * BACKDROP OVERLAY
     * - Fixed positioning covers entire viewport
     * - z-50 ensures popup appears above all other content
     * - Semi-transparent black overlay (bg-black/50)
     * - Blur effect on background content (backdrop-blur-sm)
     * - Clicking backdrop closes the popup
     */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      {/**
       * POPUP MODAL CONTAINER
       * - Centered white card with rounded corners
       * - Max width of 448px (max-w-md) for optimal readability
       * - Entry animation: slides up and fades in
       * - Dark mode support with gray-900 background
       * - stopPropagation prevents backdrop click handler
       */}
      <div
        className="relative w-full max-w-md transform rounded-2xl bg-white p-8 shadow-2xl animate-in fade-in slide-in-from-bottom-4 dark:bg-gray-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/**
         * CLOSE BUTTON (X)
         * - Positioned absolutely in top-right corner
         * - Circular hit area with hover effect
         * - Uses Lucide X icon
         * - aria-label for screen reader accessibility
         */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/**
         * GIFT ICON HEADER
         * - Eye-catching circular icon at top
         * - Gradient background matching brand colors
         * - Gift icon suggests value/reward for subscribing
         */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600">
          <Gift className="h-8 w-8 text-white" />
        </div>

        {/**
         * HEADLINE & DESCRIPTION
         * - Bold headline creates urgency ("Wait! Don't miss out")
         * - Description explains value proposition
         * - Dark mode text colors for readability
         */}
        <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/**
         * EMAIL SUBSCRIPTION FORM
         * - Single email input with icon
         * - Gradient submit button matching brand
         * - Loading state with "Subscribing..." text
         * - Form validation via HTML5 required attribute
         */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Email Input Field with Icon */}
          <div className="relative">
            {/* Mail icon positioned inside input */}
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              required
            />
          </div>
          {/* Submit Button - Gradient CTA */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 py-3 font-semibold text-white transition-all hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Subscribing...' : buttonText}
          </button>
        </form>

        {/**
         * SOCIAL PROOF
         * - Shows subscriber count to build trust
         * - "Join 10,000+ students" creates FOMO
         */}
        <p className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          {offerText}
        </p>

        {/**
         * TRUST INDICATORS
         * - Addresses common objections
         * - "No spam" reassures about email frequency
         * - "Unsubscribe anytime" reduces commitment fear
         */}
        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-400">
          <span>✓ No spam</span>
          <span>✓ Unsubscribe anytime</span>
        </div>
      </div>
    </div>
  );
}
