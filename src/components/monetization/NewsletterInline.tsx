'use client';

import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

/**
 * NewsletterInline — lightweight email capture for blog/tool pages.
 * Posts to the existing /api/newsletter/subscribe route (JSON file store,
 * no external service required). Builds an owned audience for future
 * monetization (digests, course launches, sponsor reach).
 */
export function NewsletterInline() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>(
    'idle',
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes('@')) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('done');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="my-10 rounded-xl border bg-muted/30 p-6">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Get career tips in your inbox</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Free weekly guidance on internships, resumes, and high-paying skills.
        No spam — unsubscribe anytime.
      </p>
      {status === 'done' ? (
        <p className="text-sm font-medium text-green-600">
          ✓ You&apos;re subscribed! Check your inbox to confirm.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 rounded-lg border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-1 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
