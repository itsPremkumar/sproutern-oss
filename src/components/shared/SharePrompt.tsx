'use client';

import { useState, useEffect } from 'react';
import { Share2, X, CheckCircle } from 'lucide-react';
import { ShareButtons } from '@/components/social/ShareButtons';
import { logSocialShare } from '@/lib/analytics';

interface SharePromptProps {
  title?: string;
  description?: string;
  trigger?: 'auto' | 'manual';
  delayMs?: number;
  toolName?: string;
  onClose?: () => void;
}

/**
 * Share Prompt - Encourages users to share after using a tool
 * Appears after successful tool completion
 */
export function SharePrompt({
  title = 'Enjoy using this tool?',
  description = 'Share it with your friends and help them too!',
  trigger = 'manual',
  delayMs = 2000,
  toolName,
  onClose,
}: SharePromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShared, setHasShared] = useState(false);

  useEffect(() => {
    if (trigger === 'auto') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delayMs);
      return () => clearTimeout(timer);
    }
  }, [trigger, delayMs]);

  // For manual trigger, expose show method
  const show = () => setIsVisible(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleShare = () => {
    setHasShared(true);
    if (toolName) {
      logSocialShare('share_prompt', 'tool', toolName);
    }
    setTimeout(handleClose, 2000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 p-4 sm:bottom-4 sm:left-auto sm:right-4 sm:max-w-sm">
      <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Success state */}
        {hasShared ? (
          <div className="flex flex-col items-center py-4 text-center">
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Thank you!
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your support means a lot to us
            </p>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <Share2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>

            {/* Content */}
            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>

            {/* Share buttons */}
            <div onClick={handleShare}>
              <ShareButtons
                title={
                  toolName ? `Check out ${toolName} on Sproutern!` : undefined
                }
                hashtags={['Sproutern', 'CareerTools']}
              />
            </div>

            {/* Skip link */}
            <button
              onClick={handleClose}
              className="mt-3 w-full text-center text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              Maybe later
            </button>
          </>
        )}

        {/* Decorative gradient */}
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl" />
      </div>
    </div>
  );
}

/**
 * Hook to trigger share prompt after tool usage
 */
export function useSharePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  const triggerPrompt = () => {
    // Check if user has been prompted recently
    const lastPrompt = localStorage.getItem('sproutern_share_prompt');
    const hoursSinceLastPrompt = lastPrompt
      ? (Date.now() - parseInt(lastPrompt)) / (1000 * 60 * 60)
      : Infinity;

    if (hoursSinceLastPrompt > 24) {
      setShowPrompt(true);
      localStorage.setItem('sproutern_share_prompt', Date.now().toString());
    }
  };

  const hidePrompt = () => setShowPrompt(false);

  return { showPrompt, triggerPrompt, hidePrompt };
}
