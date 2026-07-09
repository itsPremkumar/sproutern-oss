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
// CurrencyProvider — Client-side SWR-cached exchange rate store
// Server Components inject the initial currency from Edge middleware.
// This provider lazily fetches live rates only when a conversion is needed.
// ─────────────────────────────────────────────────────────────────────────────

interface ExchangeRates {
  [currency: string]: number;
}

interface CurrencyContextValue {
  /** User's detected currency (from Edge middleware) */
  currency: string;
  /** User's locale (from Edge middleware) */
  locale: string;
  /** Convert an amount from INR to the user's currency */
  convert: (amountINR: number) => number;
  /** Format an amount in the user's currency */
  format: (amount: number) => string;
  /** Whether live rates are loaded */
  isLoaded: boolean;
  /** Override currency manually (e.g., user preference) */
  setCurrency: (code: string) => void;
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

// ── Static fallback rates (Feb 2026) ────────────────────────────────────────
const FALLBACK_RATES: ExchangeRates = {
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

// ── SWR Cache ───────────────────────────────────────────────────────────────
const CACHE_KEY = 'sproutern_exchange_rates';
const CACHE_TTL_MS = 4 * 60 * 60 * 1000; // 4 hours

interface CachedRates {
  rates: ExchangeRates;
  timestamp: number;
}

function getCachedRates(): ExchangeRates | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached: CachedRates = JSON.parse(raw);
    if (Date.now() - cached.timestamp > CACHE_TTL_MS) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return cached.rates;
  } catch {
    return null;
  }
}

function setCachedRates(rates: ExchangeRates): void {
  try {
    const cached: CachedRates = { rates, timestamp: Date.now() };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cached));
  } catch {
    // Storage full or unavailable — silently ignore
  }
}

interface CurrencyProviderProps {
  /** Initial currency from Edge middleware (server-injected) */
  initialCurrency: string;
  /** Initial locale from Edge middleware (server-injected) */
  initialLocale: string;
  children: ReactNode;
}

export function CurrencyProvider({
  initialCurrency,
  initialLocale,
  children,
}: CurrencyProviderProps) {
  const [currency, setCurrency] = useState(initialCurrency);
  const [locale] = useState(initialLocale);
  const [rates, setRates] = useState<ExchangeRates>(FALLBACK_RATES);
  const [isLoaded, setIsLoaded] = useState(false);

  // ── Load cached or fetch fresh rates on mount ─────────────────────────────
  useEffect(() => {
    const cached = getCachedRates();
    if (cached) {
      setRates(cached);
      setIsLoaded(true);
      return;
    }

    // Lazy-fetch live rates (non-blocking)
    const controller = new AbortController();
    fetch(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json',
      { signal: controller.signal, cache: 'force-cache' },
    )
      .then((res) => res.json())
      .then((data: { inr: ExchangeRates }) => {
        if (data?.inr) {
          // Normalize keys to uppercase
          const normalized: ExchangeRates = {};
          for (const [key, val] of Object.entries(data.inr)) {
            normalized[key.toUpperCase()] = val as number;
          }
          setRates(normalized);
          setCachedRates(normalized);
        }
        setIsLoaded(true);
      })
      .catch(() => {
        // Use fallback rates silently
        setIsLoaded(true);
      });

    return () => controller.abort();
  }, []);

  const convert = useCallback(
    (amountINR: number): number => {
      const rate = rates[currency] ?? FALLBACK_RATES[currency] ?? 1;
      return Math.round(amountINR * rate);
    },
    [currency, rates],
  );

  const format = useCallback(
    (amount: number): string => {
      try {
        return new Intl.NumberFormat(locale, {
          style: 'currency',
          currency,
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount);
      } catch {
        return `${currency} ${amount.toLocaleString()}`;
      }
    },
    [currency, locale],
  );

  const value: CurrencyContextValue = {
    currency,
    locale,
    convert,
    format,
    isLoaded,
    setCurrency,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

/**
 * Access the currency context from any client component.
 *
 * @example
 * ```tsx
 * const { convert, format } = useCurrency();
 * const salary = format(convert(1200000)); // "₹12,00,000" or "$14,160"
 * ```
 */
export function useCurrency(): CurrencyContextValue {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error('useCurrency must be used within a <CurrencyProvider>');
  }
  return ctx;
}
