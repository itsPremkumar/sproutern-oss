'use client';

import { useState, useCallback, useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Premium Unlock Hook — Pillar 4
//
// 100% FREE client-side "Give-to-Get" system using localStorage.
// Users unlock premium content by:
//   1. Sharing to LinkedIn/Twitter, OR
//   2. Submitting an anonymous interview experience
//
// No backend. No database. No cookies. Just localStorage.
// ─────────────────────────────────────────────────────────────────────────────

type UnlockAction =
  | 'share_linkedin'
  | 'share_twitter'
  | 'share_whatsapp'
  | 'submit_experience'
  | 'submit_salary';

interface PremiumState {
  /** Whether premium content is unlocked */
  isUnlocked: boolean;
  /** Which action unlocked it */
  unlockedBy: UnlockAction | null;
  /** When it was unlocked (ISO string) */
  unlockedAt: string | null;
  /** Total share count (for social proof) */
  shareCount: number;
}

interface UsePremiumUnlockReturn {
  /** Current premium state */
  state: PremiumState;
  /** Whether premium is unlocked */
  isUnlocked: boolean;
  /** Trigger a share to LinkedIn (opens share dialog + unlocks) */
  shareToLinkedIn: (url?: string, title?: string) => void;
  /** Trigger a share to Twitter */
  shareToTwitter: (url?: string, text?: string) => void;
  /** Trigger a share to WhatsApp */
  shareToWhatsApp: (url?: string, text?: string) => void;
  /** Mark as unlocked via submission */
  markSubmissionUnlock: () => void;
  /** Reset unlock state (for testing) */
  resetUnlock: () => void;
}

const STORAGE_KEY = 'sproutern_premium_unlock';
const SHARE_COUNT_KEY = 'sproutern_global_shares';

function getStoredState(): PremiumState {
  if (typeof window === 'undefined') {
    return {
      isUnlocked: false,
      unlockedBy: null,
      unlockedAt: null,
      shareCount: 0,
    };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // Corrupted storage
  }
  return {
    isUnlocked: false,
    unlockedBy: null,
    unlockedAt: null,
    shareCount: 0,
  };
}

function getGlobalShareCount(): number {
  if (typeof window === 'undefined') return 14829; // SSR fallback (social proof)
  try {
    const raw = localStorage.getItem(SHARE_COUNT_KEY);
    return raw ? parseInt(raw, 10) : 14829;
  } catch {
    return 14829;
  }
}

function saveState(state: PremiumState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage full
  }
}

function incrementGlobalShare(): number {
  const count = getGlobalShareCount() + 1;
  try {
    localStorage.setItem(SHARE_COUNT_KEY, String(count));
  } catch {
    // Ignore
  }
  return count;
}

/**
 * Zero-cost premium unlock hook using localStorage.
 *
 * @example
 * ```tsx
 * function InterviewGuide() {
 *   const { isUnlocked, shareToLinkedIn, state } = usePremiumUnlock();
 *
 *   return (
 *     <div>
 *       <h2>Top 50 TCS Interview Questions</h2>
 *       {/* First 10 always visible *\/}
 *       <QuestionList questions={questions.slice(0, 10)} />
 *
 *       {isUnlocked ? (
 *         <QuestionList questions={questions.slice(10)} />
 *       ) : (
 *         <div className="blur-sm relative">
 *           <QuestionList questions={questions.slice(10, 15)} />
 *           <div className="absolute inset-0 flex items-center justify-center">
 *             <button onClick={() => shareToLinkedIn()}>
 *               Share to LinkedIn to Unlock All 50 Questions
 *             </button>
 *             <p>{state.shareCount.toLocaleString()} students unlocked this</p>
 *           </div>
 *         </div>
 *       )}
 *     </div>
 *   );
 * }
 * ```
 */
export function usePremiumUnlock(): UsePremiumUnlockReturn {
  const [state, setState] = useState<PremiumState>(getStoredState);

  // Sync on mount (handles SSR → client hydration)
  useEffect(() => {
    setState(getStoredState());
  }, []);

  const unlock = useCallback((action: UnlockAction) => {
    const newShareCount = incrementGlobalShare();
    const newState: PremiumState = {
      isUnlocked: true,
      unlockedBy: action,
      unlockedAt: new Date().toISOString(),
      shareCount: newShareCount,
    };
    setState(newState);
    saveState(newState);
  }, []);

  const shareToLinkedIn = useCallback(
    (url?: string, title?: string) => {
      const shareUrl = url || window.location.href;
      const shareTitle = title || document.title;
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`;

      window.open(linkedInUrl, '_blank', 'width=600,height=500');
      unlock('share_linkedin');
    },
    [unlock],
  );

  const shareToTwitter = useCallback(
    (url?: string, text?: string) => {
      const shareUrl = url || window.location.href;
      const shareText =
        text ||
        `Just used @sproutern to prepare for my tech interview! 🚀 Check it out:`;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;

      window.open(twitterUrl, '_blank', 'width=600,height=400');
      unlock('share_twitter');
    },
    [unlock],
  );

  const shareToWhatsApp = useCallback(
    (url?: string, text?: string) => {
      const shareUrl = url || window.location.href;
      const shareText =
        text ||
        `Check out this amazing career resource — free interview prep, resume tools, and salary data! ${shareUrl}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

      window.open(whatsappUrl, '_blank');
      unlock('share_whatsapp');
    },
    [unlock],
  );

  const markSubmissionUnlock = useCallback(() => {
    unlock('submit_experience');
  }, [unlock]);

  const resetUnlock = useCallback(() => {
    const resetState: PremiumState = {
      isUnlocked: false,
      unlockedBy: null,
      unlockedAt: null,
      shareCount: getGlobalShareCount(),
    };
    setState(resetState);
    saveState(resetState);
  }, []);

  return {
    state: { ...state, shareCount: state.shareCount || getGlobalShareCount() },
    isUnlocked: state.isUnlocked,
    shareToLinkedIn,
    shareToTwitter,
    shareToWhatsApp,
    markSubmissionUnlock,
    resetUnlock,
  };
}
