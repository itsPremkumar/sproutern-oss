'use client';

import { useState, useEffect } from 'react';
import { Send, Download, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContentUpgradeProps {
  /** Title for the upgrade offer */
  title?: string;
  /** Description of what the user will receive */
  description?: string;
  /** Name of the downloadable resource */
  resourceName?: string;
  /** URL to the downloadable resource (after email submission) */
  resourceUrl?: string;
}

/**
 * ContentUpgrade — Email capture component for blog posts
 *
 * Stores submissions in localStorage (no database needed).
 * Shows success state and optional download link.
 */
export function ContentUpgrade({
  title = '🎯 Free Career Resource Pack',
  description = 'Get 50+ real interview questions from top MNCs, ATS-optimized resume templates, and a step-by-step placement checklist — delivered to your inbox.',
  resourceName = 'Career Resource Pack',
  resourceUrl,
}: ContentUpgradeProps) {
  const [email, setEmail] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Check if user already subscribed
  useEffect(() => {
    try {
      const subscribed = localStorage.getItem('sproutern_subscribed');
      if (subscribed) setIsSuccess(true);
    } catch {
      // localStorage not available
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');

    try {
      // Store in localStorage — no API needed
      const subscribers = JSON.parse(
        localStorage.getItem('sproutern_subscribers') || '[]',
      );
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        source: 'content_upgrade',
      });
      localStorage.setItem(
        'sproutern_subscribers',
        JSON.stringify(subscribers),
      );
      localStorage.setItem('sproutern_subscribed', 'true');
    } catch {
      // localStorage not available — still show success for UX
    }

    setIsSuccess(true);

    if (resourceUrl) {
      window.open(resourceUrl, '_blank');
    }
  };

  if (isSuccess) {
    return (
      <div className="my-8 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center dark:border-green-800 dark:from-green-950/40 dark:to-emerald-950/40">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800 dark:text-green-200">
          Thank You! 🎉
        </h3>
        <p className="text-sm text-green-700 dark:text-green-300">
          You&apos;re subscribed for career resources.
          {resourceUrl && ' Your download should start automatically.'}
        </p>
      </div>
    );
  }

  return (
    <div className="my-8 rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Download className="h-5 w-5 text-primary" />
        </div>
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Free Resource
          </span>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          required
          aria-label="Email address"
        />
        <Button
          type="submit"
          className="rounded-xl px-6 py-3 font-semibold shadow-md transition-all hover:shadow-lg"
        >
          <Send className="mr-2 h-4 w-4" />
          Get Free Access
        </Button>
      </form>

      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
      <p className="mt-3 text-xs text-muted-foreground">
        🔒 No spam. We respect your privacy.
      </p>
    </div>
  );
}

export default ContentUpgrade;
