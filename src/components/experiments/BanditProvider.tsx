'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Multi-Armed Bandit A/B Testing System — Pillar 4
//
// Uses Epsilon-Greedy algorithm to autonomously route traffic to the
// best-performing CTA variant. No manual intervention required.
//
// Architecture:
// 1. BanditProvider — Global state & algorithm
// 2. SplitTest — Component that renders a random variant
// 3. Epsilon-Greedy with decaying exploration rate
// ─────────────────────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────────────────

interface VariantStats {
  impressions: number;
  conversions: number;
  conversionRate: number;
}

interface BanditExperiment {
  id: string;
  variants: string[];
  stats: Record<string, VariantStats>;
  createdAt: number;
  totalImpressions: number;
}

interface BanditContextValue {
  /** Select a variant using Epsilon-Greedy */
  selectVariant: (experimentId: string, variants: string[]) => string;
  /** Record an impression for a variant */
  recordImpression: (experimentId: string, variantId: string) => void;
  /** Record a conversion (click/signup) for a variant */
  recordConversion: (experimentId: string, variantId: string) => void;
  /** Get experiment stats */
  getStats: (experimentId: string) => BanditExperiment | null;
}

const BanditContext = createContext<BanditContextValue | null>(null);

// ── Storage helpers ───────────────────────────────────────────────────────

const STORAGE_KEY = 'sproutern_bandit_experiments';

function loadExperiments(): Record<string, BanditExperiment> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveExperiments(experiments: Record<string, BanditExperiment>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(experiments));
  } catch {
    // Storage unavailable
  }
}

// ── Epsilon-Greedy Algorithm ──────────────────────────────────────────────

/**
 * Decaying Epsilon-Greedy:
 * - Start with 30% exploration (random variant)
 * - As impressions grow, decay to 5% exploration
 * - The remaining traffic goes to the best-performing variant
 */
function epsilonGreedy(
  variants: string[],
  stats: Record<string, VariantStats>,
  totalImpressions: number,
): string {
  // Decay epsilon: starts at 0.3, decays to 0.05 after 500 impressions
  const epsilon = Math.max(0.05, 0.3 * Math.exp(-totalImpressions / 200));

  // Explore: random variant
  if (Math.random() < epsilon) {
    return variants[Math.floor(Math.random() * variants.length)];
  }

  // Exploit: best-performing variant
  let bestVariant = variants[0];
  let bestRate = -1;

  for (const variant of variants) {
    const rate = stats[variant]?.conversionRate ?? 0;
    // Add UCB1 bonus for under-explored variants
    const explorationBonus =
      stats[variant]?.impressions > 0
        ? Math.sqrt(
            (2 * Math.log(totalImpressions + 1)) / stats[variant].impressions,
          )
        : Infinity;

    const score = rate + explorationBonus * 0.1;

    if (score > bestRate) {
      bestRate = score;
      bestVariant = variant;
    }
  }

  return bestVariant;
}

// ── Provider Component ────────────────────────────────────────────────────

interface BanditProviderProps {
  children: ReactNode;
}

export function BanditProvider({ children }: BanditProviderProps) {
  const [experiments, setExperiments] = useState<
    Record<string, BanditExperiment>
  >({});

  // Load from storage on mount
  useEffect(() => {
    setExperiments(loadExperiments());
  }, []);

  // Persist on change
  useEffect(() => {
    if (Object.keys(experiments).length > 0) {
      saveExperiments(experiments);
    }
  }, [experiments]);

  const selectVariant = useCallback(
    (experimentId: string, variants: string[]): string => {
      const exp = experiments[experimentId];

      if (!exp) {
        // Initialize experiment
        const stats: Record<string, VariantStats> = {};
        for (const v of variants) {
          stats[v] = { impressions: 0, conversions: 0, conversionRate: 0 };
        }
        setExperiments((prev) => ({
          ...prev,
          [experimentId]: {
            id: experimentId,
            variants,
            stats,
            createdAt: Date.now(),
            totalImpressions: 0,
          },
        }));
        // First impression: random
        return variants[Math.floor(Math.random() * variants.length)];
      }

      return epsilonGreedy(variants, exp.stats, exp.totalImpressions);
    },
    [experiments],
  );

  const recordImpression = useCallback(
    (experimentId: string, variantId: string) => {
      setExperiments((prev) => {
        const exp = prev[experimentId];
        if (!exp) return prev;

        const stats = { ...exp.stats };
        if (stats[variantId]) {
          stats[variantId] = {
            ...stats[variantId],
            impressions: stats[variantId].impressions + 1,
          };
        }

        return {
          ...prev,
          [experimentId]: {
            ...exp,
            stats,
            totalImpressions: exp.totalImpressions + 1,
          },
        };
      });
    },
    [],
  );

  const recordConversion = useCallback(
    (experimentId: string, variantId: string) => {
      setExperiments((prev) => {
        const exp = prev[experimentId];
        if (!exp) return prev;

        const stats = { ...exp.stats };
        if (stats[variantId]) {
          const newConversions = stats[variantId].conversions + 1;
          const impressions = stats[variantId].impressions || 1;
          stats[variantId] = {
            ...stats[variantId],
            conversions: newConversions,
            conversionRate: newConversions / impressions,
          };
        }

        return { ...prev, [experimentId]: { ...exp, stats } };
      });
    },
    [],
  );

  const getStats = useCallback(
    (experimentId: string): BanditExperiment | null => {
      return experiments[experimentId] ?? null;
    },
    [experiments],
  );

  return (
    <BanditContext.Provider
      value={{ selectVariant, recordImpression, recordConversion, getStats }}
    >
      {children}
    </BanditContext.Provider>
  );
}

// ── useBandit Hook ────────────────────────────────────────────────────────

export function useBandit(): BanditContextValue {
  const ctx = useContext(BanditContext);
  if (!ctx) {
    throw new Error('useBandit must be used within a <BanditProvider>');
  }
  return ctx;
}

// ── SplitTest Component ───────────────────────────────────────────────────

interface SplitTestVariant {
  id: string;
  /** The CTA component or content to show */
  content: ReactNode;
}

interface SplitTestProps {
  /** Unique experiment identifier */
  experimentId: string;
  /** Array of variant options */
  variants: SplitTestVariant[];
  /** Fixed height to prevent CLS (required for Web Vitals) */
  minHeight?: string;
  /** Optional className for the wrapper */
  className?: string;
}

/**
 * Self-optimizing A/B test component using Epsilon-Greedy algorithm.
 * Autonomously routes traffic to the best-performing variant.
 *
 * @example
 * ```tsx
 * <SplitTest
 *   experimentId="blog-cta-v2"
 *   minHeight="48px"
 *   variants={[
 *     {
 *       id: 'download',
 *       content: <Button>Download Interview Kit</Button>,
 *     },
 *     {
 *       id: 'practice',
 *       content: <Button variant="secondary">Practice Now Free</Button>,
 *     },
 *   ]}
 * />
 * ```
 */
export function SplitTest({
  experimentId,
  variants,
  minHeight = '48px',
  className = '',
}: SplitTestProps) {
  const { selectVariant, recordImpression, recordConversion } = useBandit();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Select variant on mount
  useEffect(() => {
    const variantIds = variants.map((v) => v.id);
    const chosen = selectVariant(experimentId, variantIds);
    setSelectedId(chosen);
    recordImpression(experimentId, chosen);
  }, [experimentId, variants, selectVariant, recordImpression]);

  const handleClick = useCallback(() => {
    if (selectedId) {
      recordConversion(experimentId, selectedId);
    }
  }, [experimentId, selectedId, recordConversion]);

  // Render skeleton during SSR / before hydration to prevent CLS
  if (!selectedId) {
    return (
      <div
        className={`animate-pulse rounded-lg bg-muted ${className}`}
        style={{ minHeight }}
        aria-hidden="true"
      />
    );
  }

  const activeVariant = variants.find((v) => v.id === selectedId);
  if (!activeVariant) return null;

  return (
    <div
      onClick={handleClick}
      className={className}
      style={{ minHeight }}
      data-experiment={experimentId}
      data-variant={selectedId}
    >
      {activeVariant.content}
    </div>
  );
}
