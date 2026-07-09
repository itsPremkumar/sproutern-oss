'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  CheckCircle,
  Clock,
  Users,
  Shield,
  ArrowLeftRight,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  rate: number; // Rate relative to USD
}

const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', rate: 1 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.92 },
  { code: 'GBP', name: 'British Pound', symbol: '£', rate: 0.79 },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', rate: 83.12 },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', rate: 149.5 },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', rate: 1.53 },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', rate: 1.36 },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF', rate: 0.88 },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', rate: 7.24 },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', rate: 1.34 },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', rate: 3.67 },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', rate: 3.75 },
];

export default function CurrencyConverterClient() {
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [result, setResult] = useState<number>(0);
  const lastUpdated = 'December 2024'; // Static rates

  useEffect(() => {
    const from = currencies.find((c) => c.code === fromCurrency);
    const to = currencies.find((c) => c.code === toCurrency);
    if (from && to) {
      const amountNum = parseFloat(amount) || 0;
      const usdAmount = amountNum / from.rate;
      setResult(usdAmount * to.rate);
    }
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getSymbol = (code: string) => {
    return currencies.find((c) => c.code === code)?.symbol || '';
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  const quickAmounts = [100, 500, 1000, 5000, 10000];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <DollarSign className="h-4 w-4" />
            Free Finance Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Currency Converter
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Convert between major world currencies with approximate exchange
            rates.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">12 Currencies</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Instant Convert</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Offline Ready</span>
          </div>
        </div>

        {/* Converter */}
        <Card className="mb-6">
          <CardContent className="py-8">
            <div className="grid gap-6 md:grid-cols-[1fr,auto,1fr]">
              {/* From */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">From</label>
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="w-full rounded-lg border bg-background p-4 text-lg"
                >
                  {currencies.map((c) => (
                    <option
                      key={c.code}
                      value={c.code}
                    >
                      {c.code} - {c.name}
                    </option>
                  ))}
                </select>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground">
                    {getSymbol(fromCurrency)}
                  </span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full rounded-lg border bg-muted/50 p-4 pl-12 text-2xl font-bold outline-none"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swapCurrencies}
                  className="h-12 w-12 rounded-full"
                >
                  <ArrowLeftRight className="h-5 w-5" />
                </Button>
              </div>

              {/* To */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">To</label>
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="w-full rounded-lg border bg-background p-4 text-lg"
                >
                  {currencies.map((c) => (
                    <option
                      key={c.code}
                      value={c.code}
                    >
                      {c.code} - {c.name}
                    </option>
                  ))}
                </select>
                <div className="rounded-lg border bg-primary/5 p-4">
                  <div className="text-sm text-muted-foreground">
                    Converted Amount
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    {getSymbol(toCurrency)} {formatNumber(result)}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Amounts */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {quickAmounts.map((amt) => (
                <Button
                  key={amt}
                  variant="outline"
                  size="sm"
                  onClick={() => setAmount(amt.toString())}
                >
                  {getSymbol(fromCurrency)}
                  {amt.toLocaleString()}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exchange Rate Info */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Exchange Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold">
                1 {fromCurrency} ={' '}
                {formatNumber(
                  (currencies.find((c) => c.code === toCurrency)?.rate || 1) /
                    (currencies.find((c) => c.code === fromCurrency)?.rate ||
                      1),
                )}{' '}
                {toCurrency}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Approximate rates as of {lastUpdated}. For live rates, check
                financial services.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rate Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Currency Rates (vs USD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-3">
              {currencies.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                >
                  <span className="font-medium">{c.code}</span>
                  <span className="font-mono">{c.rate.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="mb-6 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
          <CardContent className="py-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Note:</strong> Exchange rates shown are approximate and
              for reference only. Actual rates may vary. For financial
              transactions, please use official banking or forex services for
              current rates.
            </p>
          </CardContent>
        </Card>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'EMI Calculator',
                href: '/tools/emi-calculator',
                desc: 'Calculate loan EMIs',
              },
              {
                title: 'GST Calculator',
                href: '/tools/gst-calculator',
                desc: 'Calculate GST amounts',
              },
              {
                title: 'Tax Calculator',
                href: '/tools/tax-calculator',
                desc: 'Calculate income tax',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
