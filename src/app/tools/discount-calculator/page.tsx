'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Percent,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

export default function DiscountCalculatorClient() {
  const [originalPrice, setOriginalPrice] = useState('1000');
  const [discountPercent, setDiscountPercent] = useState('20');
  const [finalPrice, setFinalPrice] = useState('');
  const [calculationMode, setCalculationMode] = useState<
    'findFinal' | 'findDiscount'
  >('findFinal');

  const result = useMemo(() => {
    const original = parseFloat(originalPrice) || 0;

    if (calculationMode === 'findFinal') {
      const discount = parseFloat(discountPercent) || 0;
      const discountAmount = (original * discount) / 100;
      const final = original - discountAmount;
      return {
        originalPrice: original,
        discountPercent: discount,
        discountAmount,
        finalPrice: final,
        savings: discountAmount,
      };
    } else {
      const final = parseFloat(finalPrice) || 0;
      const discountAmount = original - final;
      const discount = original > 0 ? (discountAmount / original) * 100 : 0;
      return {
        originalPrice: original,
        discountPercent: discount,
        discountAmount,
        finalPrice: final,
        savings: discountAmount,
      };
    }
  }, [originalPrice, discountPercent, finalPrice, calculationMode]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(num);
  };

  const quickDiscounts = [5, 10, 15, 20, 25, 30, 40, 50];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Percent className="h-4 w-4" />
            Free Shopping Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Discount Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate discounts, sale prices, and savings instantly. Find out
            how much you save!
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
            <span className="text-sm font-medium">Instant</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Easy to Use</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">No Signup</span>
          </div>
        </div>

        {/* Mode Toggle */}
        <Card className="mb-6">
          <CardContent className="flex justify-center gap-4 py-4">
            <Button
              variant={calculationMode === 'findFinal' ? 'default' : 'outline'}
              onClick={() => setCalculationMode('findFinal')}
            >
              Calculate Final Price
            </Button>
            <Button
              variant={
                calculationMode === 'findDiscount' ? 'default' : 'outline'
              }
              onClick={() => setCalculationMode('findDiscount')}
            >
              Find Discount %
            </Button>
          </CardContent>
        </Card>

        {/* Calculator */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                Enter Values
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Original Price */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Original Price (₹)
                </label>
                <input
                  type="number"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                  placeholder="Enter original price"
                />
              </div>

              {calculationMode === 'findFinal' ? (
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Discount (%)
                  </label>
                  <input
                    type="number"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                    className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                    placeholder="Enter discount percentage"
                    max="100"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {quickDiscounts.map((d) => (
                      <Button
                        key={d}
                        variant="outline"
                        size="sm"
                        onClick={() => setDiscountPercent(d.toString())}
                        className={
                          discountPercent === d.toString()
                            ? 'border-primary'
                            : ''
                        }
                      >
                        {d}%
                      </Button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Sale Price (₹)
                  </label>
                  <input
                    type="number"
                    value={finalPrice}
                    onChange={(e) => setFinalPrice(e.target.value)}
                    className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                    placeholder="Enter sale price"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-primary">
            <CardHeader>
              <CardTitle className="text-lg">Your Savings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <div className="text-sm text-muted-foreground">
                    Original Price
                  </div>
                  <div className="text-xl font-bold line-through">
                    {formatCurrency(result.originalPrice)}
                  </div>
                </div>
                <div className="rounded-lg bg-red-50 p-4 text-center dark:bg-red-950">
                  <div className="text-sm text-red-600 dark:text-red-400">
                    Discount
                  </div>
                  <div className="text-xl font-bold text-red-600 dark:text-red-400">
                    {result.discountPercent.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-950">
                <div className="text-sm text-green-600 dark:text-green-400">
                  You Save
                </div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(result.savings)}
                </div>
              </div>

              <div className="rounded-lg bg-primary p-6 text-center text-primary-foreground">
                <div className="text-sm opacity-80">Final Price</div>
                <div className="text-4xl font-bold">
                  {formatCurrency(result.finalPrice)}
                </div>
              </div>

              {/* Visual savings bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Paying</span>
                  <span>Saving</span>
                </div>
                <div className="flex h-4 overflow-hidden rounded-full">
                  <div
                    className="bg-primary transition-all"
                    style={{ width: `${100 - result.discountPercent}%` }}
                  />
                  <div
                    className="bg-green-500 transition-all"
                    style={{ width: `${result.discountPercent}%` }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tips */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Discount Shopping Tips</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Compare Original Prices',
                desc: 'Make sure the "original" price isn\'t inflated before the sale',
              },
              {
                title: 'Stack Discounts',
                desc: 'Look for coupon codes to use on top of sale prices',
              },
              {
                title: 'Calculate Per Unit',
                desc: 'Compare price per unit when buying different sizes',
              },
              {
                title: 'Set a Budget',
                desc: "Don't overspend just because something is on sale",
              },
            ].map((tip) => (
              <Card key={tip.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'GST Calculator',
                href: '/tools/gst-calculator',
                desc: 'Calculate GST',
              },
              {
                title: 'Percentage Calculator',
                href: '/tools/percentage-calculator',
                desc: 'Calculate percentages',
              },
              {
                title: 'Currency Converter',
                href: '/tools/currency-converter',
                desc: 'Convert currencies',
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
