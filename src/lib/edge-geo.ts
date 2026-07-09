import { headers } from 'next/headers';

// ─────────────────────────────────────────────────────────────────────────────
// Edge Geo Utilities — Server Component helpers
// Read the geo/localization headers injected by middleware.ts without any
// client-side JavaScript. These are pure RSC utilities.
// ─────────────────────────────────────────────────────────────────────────────

export interface GeoContext {
  /** ISO 3166-1 alpha-2 country code (e.g., 'US', 'IN', 'GB') */
  country: string;
  /** ISO 4217 currency code (e.g., 'USD', 'INR', 'GBP') */
  currency: string;
  /** IANA timezone (e.g., 'America/New_York', 'Asia/Kolkata') */
  timezone: string;
  /** BCP 47 locale tag (e.g., 'en-US', 'en-IN') */
  locale: string;
}

/**
 * Read the geo context injected by Edge middleware.
 * MUST be called inside a Server Component or Server Action.
 *
 * @example
 * ```tsx
 * export default async function SalaryPage() {
 *   const geo = await getGeoContext();
 *   return <SalaryCalculator currency={geo.currency} />;
 * }
 * ```
 */
export async function getGeoContext(): Promise<GeoContext> {
  const headerStore = await headers();

  return {
    country: headerStore.get('x-user-country') ?? 'US',
    currency: headerStore.get('x-user-currency') ?? 'USD',
    timezone: headerStore.get('x-user-timezone') ?? 'America/New_York',
    locale: headerStore.get('x-user-locale') ?? 'en-US',
  };
}

/** Currency symbols for display */
export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  INR: '₹',
  GBP: '£',
  EUR: '€',
  AUD: 'A$',
  CAD: 'C$',
  SGD: 'S$',
  ZAR: 'R',
  NOK: 'kr',
  SEK: 'kr',
  AED: 'د.إ',
  NZD: 'NZ$',
  JPY: '¥',
};

/**
 * Format a monetary amount with the correct currency symbol and locale.
 *
 * @example
 * formatCurrency(75000, 'INR', 'en-IN') // "₹75,000"
 * formatCurrency(95000, 'USD', 'en-US') // "$95,000"
 */
export function formatCurrency(
  amount: number,
  currencyCode: string,
  locale: string,
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    // Fallback for unsupported locales
    const symbol = CURRENCY_SYMBOLS[currencyCode] ?? currencyCode;
    return `${symbol}${amount.toLocaleString()}`;
  }
}

/**
 * Approximate exchange rates from INR (base) to other currencies.
 * In production, replace with a cached API call (see CurrencyProvider).
 * Last updated: Feb 2026
 */
export const EXCHANGE_RATES_FROM_INR: Record<string, number> = {
  INR: 1,
  USD: 0.0118,
  GBP: 0.0094,
  EUR: 0.0109,
  AUD: 0.0183,
  CAD: 0.0161,
  SGD: 0.0159,
  ZAR: 0.214,
  NOK: 0.13,
  SEK: 0.126,
  AED: 0.0434,
  NZD: 0.0199,
  JPY: 1.77,
};

/**
 * Convert an amount from INR to the target currency using static rates.
 * For real-time rates, use the CurrencyProvider with SWR caching.
 */
export function convertFromINR(
  amountINR: number,
  targetCurrency: string,
): number {
  const rate = EXCHANGE_RATES_FROM_INR[targetCurrency];
  if (!rate) return amountINR; // fallback: return original
  return Math.round(amountINR * rate);
}
