/**
 * AI Tools Layout
 * Clean layout for all AI tools pages
 */

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AI Tools | Sproutern',
    default: 'AI Tools Directory | Sproutern',
  },
  description:
    'Discover the best AI tools for students and professionals. Honest reviews, free options, and student discounts.',
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}

      {/* Simple Disclosure Footer */}
      <div className="border-t bg-muted/30 py-4">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground">
            Some links on this site may be partner links. We may earn a small
            commission at no extra cost to you. This helps us keep the site
            free.{' '}
            <a
              href="/affiliate-disclosure"
              className="underline hover:text-foreground"
            >
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
