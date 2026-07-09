'use client';

import React from 'react';
import { Clock, Zap, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuickSummaryProps {
  /** Reading time in minutes */
  readTime: string;
  /** Key takeaways - 3-5 bullet points */
  takeaways: string[];
  /** Optional: Jump to sections */
  sections?: { title: string; id: string }[];
  /** Optional: Custom class name */
  className?: string;
  /** Show expanded by default */
  defaultExpanded?: boolean;
}

/**
 * QuickSummary Component (SXO - Search Experience Optimization)
 *
 * Purpose: Improves dwell time by giving users a quick overview at the top
 * of articles, allowing them to understand value immediately and decide to
 * read more or jump to specific sections.
 *
 * Based on the traffic growth masterplan's SXO recommendations.
 */
export function QuickSummary({
  readTime,
  takeaways,
  sections = [],
  className = '',
  defaultExpanded = true,
}: QuickSummaryProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);

  return (
    <div
      className={cn(
        'quick-summary my-6 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-sm',
        className,
      )}
    >
      {/* Header - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-primary/5"
        aria-expanded={isExpanded}
        aria-controls="quick-summary-content"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-foreground">Quick Summary</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      {/* Expandable Content */}
      <div
        id="quick-summary-content"
        className={cn(
          'overflow-hidden transition-all duration-300',
          isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="border-t border-primary/10 px-4 pb-4 pt-3">
          {/* Key Takeaways */}
          <div className="mb-4">
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {takeaways.map((takeaway, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm"
                >
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs font-bold text-green-600 dark:text-green-400">
                    ✓
                  </span>
                  <span className="text-foreground/90">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Jump to Section - if sections provided */}
          {sections.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Jump to Section
              </h3>
              <div className="flex flex-wrap gap-2">
                {sections.slice(0, 5).map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    className="inline-flex items-center rounded-full border border-primary/30 bg-background px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Minimal variant for tool pages
 */
export function QuickSummaryCompact({
  description,
  stats,
  className = '',
}: {
  description: string;
  stats: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'quick-summary-compact rounded-lg border bg-card p-4 shadow-sm',
        className,
      )}
    >
      <p className="mb-3 text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center"
          >
            <div className="text-lg font-bold text-primary">{stat.value}</div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
