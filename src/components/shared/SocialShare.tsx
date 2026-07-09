'use client';

import { useState, useCallback } from 'react';

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Social Share Floating Bar
 *
 * Adds WhatsApp, Telegram, Twitter, LinkedIn, and copy-link sharing
 * with pre-filled messages. WhatsApp is the primary viral channel
 * for the Indian market.
 * ═════════════════════════════════════════════════════════════════════════════
 */

interface SocialShareProps {
  title: string;
  url?: string;
  description?: string;
  position?: 'fixed' | 'inline';
}

export function SocialShare({
  title,
  url,
  description,
  position = 'fixed',
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const pageUrl =
    url ||
    (typeof window !== 'undefined'
      ? window.location.href
      : 'https://www.sproutern.com');
  const shareText = description || title;

  const shareLinks = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(`🚀 ${shareText}\n\n👉 ${pageUrl}\n\nvia @Sproutern`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(`🚀 ${shareText}`)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} 🚀`)}&url=${encodeURIComponent(pageUrl)}&via=Sproutern`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(title)}`,
  };

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const input = document.createElement('input');
      input.value = pageUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [pageUrl]);

  const nativeShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url: pageUrl });
      } catch {
        /* user cancelled */
      }
    }
  }, [title, shareText, pageUrl]);

  if (position === 'fixed') {
    return (
      <>
        {/* Floating Share Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Share this page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="15"
            />
          </svg>
        </button>

        {/* Expanded Share Menu */}
        {isExpanded && (
          <div className="fixed bottom-24 right-6 z-50 flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-2xl dark:bg-gray-900">
            <ShareButton
              href={shareLinks.whatsapp}
              label="WhatsApp"
              color="bg-green-500"
              icon="💬"
            />
            <ShareButton
              href={shareLinks.telegram}
              label="Telegram"
              color="bg-blue-500"
              icon="📨"
            />
            <ShareButton
              href={shareLinks.twitter}
              label="Twitter"
              color="bg-sky-500"
              icon="🐦"
            />
            <ShareButton
              href={shareLinks.linkedin}
              label="LinkedIn"
              color="bg-blue-700"
              icon="💼"
            />
            <ShareButton
              href={shareLinks.facebook}
              label="Facebook"
              color="bg-blue-600"
              icon="📘"
            />
            <ShareButton
              href={shareLinks.reddit}
              label="Reddit"
              color="bg-orange-500"
              icon="🔗"
            />
            <button
              onClick={copyLink}
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
            >
              {copied ? '✅ Copied!' : '📋 Copy Link'}
            </button>
            {'share' in navigator && (
              <button
                onClick={nativeShare}
                className="flex items-center gap-2 rounded-lg bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700 transition-colors hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300"
              >
                📱 More Options
              </button>
            )}
          </div>
        )}
      </>
    );
  }

  // Inline mode
  return (
    <div className="my-6 flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
        Share:
      </span>
      <ShareButton
        href={shareLinks.whatsapp}
        label="WhatsApp"
        color="bg-green-500"
        icon="💬"
        small
      />
      <ShareButton
        href={shareLinks.telegram}
        label="Telegram"
        color="bg-blue-500"
        icon="📨"
        small
      />
      <ShareButton
        href={shareLinks.twitter}
        label="Twitter"
        color="bg-sky-500"
        icon="🐦"
        small
      />
      <ShareButton
        href={shareLinks.linkedin}
        label="LinkedIn"
        color="bg-blue-700"
        icon="💼"
        small
      />
      <button
        onClick={copyLink}
        className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
      >
        {copied ? '✅' : '📋'}
      </button>
    </div>
  );
}

// ── Share Button Component ───────────────────────────────────────────────────

function ShareButton({
  href,
  label,
  color,
  icon,
  small,
}: {
  href: string;
  label: string;
  color: string;
  icon: string;
  small?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-1.5 rounded-lg ${color} ${
        small ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'
      } font-medium text-white transition-all hover:scale-105 hover:shadow-md`}
      aria-label={`Share on ${label}`}
    >
      <span>{icon}</span>
      {!small && <span>{label}</span>}
    </a>
  );
}

// ── Newsletter Signup Component ────────────────────────────────────────────

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="my-8 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white shadow-xl sm:p-8">
      <h3 className="mb-2 text-xl font-bold sm:text-2xl">
        📬 Get Career Updates Free
      </h3>
      <p className="mb-4 text-sm text-blue-100 sm:text-base">
        Join 10,000+ students. Get daily job alerts, salary insights, and
        interview tips.
      </p>

      {status === 'success' ? (
        <div className="rounded-lg bg-green-500/20 p-4 text-green-100">
          ✅ You&apos;re subscribed! Check your inbox for a welcome email.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg border-2 border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-all focus:border-white/50 focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-white px-6 py-3 font-bold text-blue-600 transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50"
          >
            {status === 'loading' ? '⏳ Subscribing...' : '🚀 Subscribe Free'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-200">
          Something went wrong. Please try again.
        </p>
      )}
      <p className="mt-3 text-xs text-blue-200">
        No spam ever. Unsubscribe anytime.
      </p>
    </div>
  );
}
