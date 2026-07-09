'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Receipt,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  Calculator,
} from 'lucide-react';
import Link from 'next/link';

type TaxRegime = 'old' | 'new';

interface TaxSlab {
  min: number;
  max: number;
  rate: number;
}

// Tax slabs - defined outside component to avoid recreating on each render
const oldRegimeSlabs: TaxSlab[] = [
  { min: 0, max: 250000, rate: 0 },
  { min: 250000, max: 500000, rate: 5 },
  { min: 500000, max: 1000000, rate: 20 },
  { min: 1000000, max: Infinity, rate: 30 },
];

const newRegimeSlabs: TaxSlab[] = [
  { min: 0, max: 300000, rate: 0 },
  { min: 300000, max: 700000, rate: 5 },
  { min: 700000, max: 1000000, rate: 10 },
  { min: 1000000, max: 1200000, rate: 15 },
  { min: 1200000, max: 1500000, rate: 20 },
  { min: 1500000, max: Infinity, rate: 30 },
];

export default function TaxCalculatorClient() {
  const [income, setIncome] = useState('1000000');
  const [regime, setRegime] = useState<TaxRegime>('new');
  const [age, setAge] = useState<'below60' | '60to80' | 'above80'>('below60');
  const [copied, setCopied] = useState(false);

  const calculateTax = (taxableIncome: number, slabs: TaxSlab[]) => {
    let tax = 0;
    let remaining = taxableIncome;
    const breakdown: { slab: string; amount: number; tax: number }[] = [];

    for (const slab of slabs) {
      if (remaining <= 0) break;

      const slabAmount = Math.min(remaining, slab.max - slab.min);
      const slabTax = (slabAmount * slab.rate) / 100;

      if (slabAmount > 0) {
        breakdown.push({
          slab:
            slab.max === Infinity
              ? `Above ₹${(slab.min / 100000).toFixed(1)}L`
              : `₹${(slab.min / 100000).toFixed(1)}L - ₹${(slab.max / 100000).toFixed(1)}L`,
          amount: slabAmount,
          tax: slabTax,
        });
      }

      tax += slabTax;
      remaining -= slabAmount;
    }

    return { tax, breakdown };
  };

  const result = useMemo(() => {
    const incomeNum = parseFloat(income) || 0;
    const slabs = regime === 'new' ? newRegimeSlabs : oldRegimeSlabs;

    // Standard deduction for new regime
    const standardDeduction = regime === 'new' ? 75000 : 0;
    const taxableIncome = Math.max(0, incomeNum - standardDeduction);

    const { tax, breakdown } = calculateTax(taxableIncome, slabs);

    // Health and Education Cess (4%)
    const cess = tax * 0.04;
    const totalTax = tax + cess;

    // New regime rebate under section 87A (if income <= 7L, full rebate up to 25000)
    let rebate = 0;
    if (regime === 'new' && incomeNum <= 700000) {
      rebate = Math.min(tax, 25000);
    } else if (regime === 'old' && incomeNum <= 500000) {
      rebate = Math.min(tax, 12500);
    }

    const finalTax = Math.max(0, totalTax - rebate);

    return {
      grossIncome: incomeNum,
      standardDeduction,
      taxableIncome,
      tax,
      cess,
      rebate,
      totalTax: finalTax,
      breakdown,
      effectiveRate: incomeNum > 0 ? (finalTax / incomeNum) * 100 : 0,
    };
  }, [income, regime]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const copyResult = async () => {
    const text = `Income Tax Calculation (${regime === 'new' ? 'New' : 'Old'} Regime)
Gross Income: ${formatCurrency(result.grossIncome)}
Taxable Income: ${formatCurrency(result.taxableIncome)}
Tax: ${formatCurrency(result.tax)}
Cess (4%): ${formatCurrency(result.cess)}
Rebate: ${formatCurrency(result.rebate)}
Total Tax: ${formatCurrency(result.totalTax)}
Effective Rate: ${result.effectiveRate.toFixed(2)}%`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Receipt className="h-4 w-4" />
            Free Finance Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Income Tax Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate your income tax for India using the new or old tax regime
            for FY 2024-25.
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
            <span className="text-sm font-medium">FY 2024-25</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Both Regimes</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Slab Breakdown</span>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                Income Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Income */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Annual Income (₹)
                </label>
                <input
                  type="number"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                  placeholder="Enter annual income"
                />
              </div>

              {/* Regime */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Tax Regime
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={regime === 'new' ? 'default' : 'outline'}
                    onClick={() => setRegime('new')}
                  >
                    New Regime
                  </Button>
                  <Button
                    variant={regime === 'old' ? 'default' : 'outline'}
                    onClick={() => setRegime('old')}
                  >
                    Old Regime
                  </Button>
                </div>
              </div>

              {/* Quick amounts */}
              <div className="flex flex-wrap gap-2">
                {[500000, 750000, 1000000, 1500000, 2000000].map((amt) => (
                  <Button
                    key={amt}
                    variant="outline"
                    size="sm"
                    onClick={() => setIncome(amt.toString())}
                  >
                    ₹{(amt / 100000).toFixed(0)}L
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-primary">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Tax Calculation</CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={copyResult}
              >
                {copied ? (
                  <Check className="mr-2 h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copy
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gross Income</span>
                  <span className="font-semibold">
                    {formatCurrency(result.grossIncome)}
                  </span>
                </div>
                {result.standardDeduction > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Standard Deduction</span>
                    <span>-{formatCurrency(result.standardDeduction)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxable Income</span>
                  <span className="font-semibold">
                    {formatCurrency(result.taxableIncome)}
                  </span>
                </div>
              </div>

              <hr />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatCurrency(result.tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Health & Education Cess (4%)
                  </span>
                  <span>{formatCurrency(result.cess)}</span>
                </div>
                {result.rebate > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Rebate u/s 87A</span>
                    <span>-{formatCurrency(result.rebate)}</span>
                  </div>
                )}
              </div>

              <div className="rounded-lg bg-primary p-4 text-primary-foreground">
                <div className="flex justify-between">
                  <span>Total Tax Payable</span>
                  <span className="text-2xl font-bold">
                    {formatCurrency(result.totalTax)}
                  </span>
                </div>
                <div className="mt-1 text-sm opacity-80">
                  Effective Rate: {result.effectiveRate.toFixed(2)}%
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Slab Breakdown */}
        {result.breakdown.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Slab-wise Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.breakdown.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between rounded-lg bg-muted/50 p-3"
                  >
                    <span className="text-sm">{item.slab}</span>
                    <div className="text-right">
                      <div className="font-mono text-sm">
                        {formatCurrency(item.amount)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Tax: {formatCurrency(item.tax)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Disclaimer */}
        <Card className="mt-6 border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950">
          <CardContent className="py-4">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>Disclaimer:</strong> This calculator provides an estimate
              based on standard tax slabs. Actual tax liability may vary based
              on deductions, exemptions, and other factors. Please consult a tax
              professional for accurate assessment.
            </p>
          </CardContent>
        </Card>

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
                title: 'EMI Calculator',
                href: '/tools/emi-calculator',
                desc: 'Calculate loan EMIs',
              },
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate take-home',
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
