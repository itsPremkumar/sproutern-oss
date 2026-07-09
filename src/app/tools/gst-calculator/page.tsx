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

type CalculationType = 'exclusive' | 'inclusive';
type GSTRate = 5 | 12 | 18 | 28;

interface GSTResult {
  originalAmount: number;
  gstRate: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalGst: number;
  finalAmount: number;
  baseAmount: number;
}

export default function GSTCalculatorClient() {
  const [amount, setAmount] = useState('10000');
  const [gstRate, setGstRate] = useState<GSTRate>(18);
  const [calculationType, setCalculationType] =
    useState<CalculationType>('exclusive');
  const [isInterState, setIsInterState] = useState(false);
  const [copied, setCopied] = useState(false);

  const result = useMemo((): GSTResult => {
    const amountNum = parseFloat(amount) || 0;
    let baseAmount: number;
    let gstAmount: number;
    let finalAmount: number;

    if (calculationType === 'exclusive') {
      baseAmount = amountNum;
      gstAmount = (amountNum * gstRate) / 100;
      finalAmount = amountNum + gstAmount;
    } else {
      finalAmount = amountNum;
      baseAmount = (amountNum * 100) / (100 + gstRate);
      gstAmount = finalAmount - baseAmount;
    }

    return {
      originalAmount: amountNum,
      gstRate,
      cgst: isInterState ? 0 : gstAmount / 2,
      sgst: isInterState ? 0 : gstAmount / 2,
      igst: isInterState ? gstAmount : 0,
      totalGst: gstAmount,
      finalAmount,
      baseAmount,
    };
  }, [amount, gstRate, calculationType, isInterState]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(num);
  };

  const copyResult = async () => {
    const text = `GST Calculation
Base Amount: ${formatCurrency(result.baseAmount)}
GST Rate: ${gstRate}%
${isInterState ? `IGST: ${formatCurrency(result.igst)}` : `CGST: ${formatCurrency(result.cgst)}\nSGST: ${formatCurrency(result.sgst)}`}
Total GST: ${formatCurrency(result.totalGst)}
Final Amount: ${formatCurrency(result.finalAmount)}`;

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gstRates: GSTRate[] = [5, 12, 18, 28];

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
            GST Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Calculate GST (Goods and Services Tax) with CGST, SGST, and IGST
            breakdown for India.
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
            <span className="text-sm font-medium">Instant Calc</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">All GST Slabs</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">India Specific</span>
          </div>
        </div>

        {/* Calculator */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Calculator className="h-5 w-5" />
                Input Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Amount (₹)
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-lg border bg-muted/50 p-4 text-xl font-bold outline-none"
                  placeholder="Enter amount"
                />
              </div>

              {/* GST Rate */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  GST Rate
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {gstRates.map((rate) => (
                    <Button
                      key={rate}
                      variant={gstRate === rate ? 'default' : 'outline'}
                      onClick={() => setGstRate(rate)}
                      className="text-lg"
                    >
                      {rate}%
                    </Button>
                  ))}
                </div>
              </div>

              {/* Calculation Type */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Amount Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant={
                      calculationType === 'exclusive' ? 'default' : 'outline'
                    }
                    onClick={() => setCalculationType('exclusive')}
                  >
                    GST Exclusive
                  </Button>
                  <Button
                    variant={
                      calculationType === 'inclusive' ? 'default' : 'outline'
                    }
                    onClick={() => setCalculationType('inclusive')}
                  >
                    GST Inclusive
                  </Button>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {calculationType === 'exclusive'
                    ? 'Add GST to the amount'
                    : 'Extract GST from the amount'}
                </p>
              </div>

              {/* Interstate Toggle */}
              <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4">
                <input
                  type="checkbox"
                  checked={isInterState}
                  onChange={(e) => setIsInterState(e.target.checked)}
                  className="h-5 w-5"
                />
                <div>
                  <div className="font-medium">Interstate Transaction</div>
                  <div className="text-sm text-muted-foreground">
                    {isInterState ? 'IGST applies' : 'CGST + SGST applies'}
                  </div>
                </div>
              </label>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="border-primary">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">GST Breakdown</CardTitle>
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
              <div className="rounded-lg bg-muted/50 p-4">
                <div className="text-sm text-muted-foreground">Base Amount</div>
                <div className="text-2xl font-bold">
                  {formatCurrency(result.baseAmount)}
                </div>
              </div>

              <div className="space-y-2">
                {!isInterState ? (
                  <>
                    <div className="flex justify-between rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
                      <span>CGST ({gstRate / 2}%)</span>
                      <span className="font-semibold">
                        {formatCurrency(result.cgst)}
                      </span>
                    </div>
                    <div className="flex justify-between rounded-lg bg-green-50 p-3 dark:bg-green-950">
                      <span>SGST ({gstRate / 2}%)</span>
                      <span className="font-semibold">
                        {formatCurrency(result.sgst)}
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-between rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
                    <span>IGST ({gstRate}%)</span>
                    <span className="font-semibold">
                      {formatCurrency(result.igst)}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex justify-between rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
                <span>Total GST</span>
                <span className="font-semibold">
                  {formatCurrency(result.totalGst)}
                </span>
              </div>

              <div className="rounded-lg bg-primary p-4 text-primary-foreground">
                <div className="text-sm opacity-80">Final Amount</div>
                <div className="text-3xl font-bold">
                  {formatCurrency(result.finalAmount)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* GST Info */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>About GST in India</h2>
          <p>
            GST (Goods and Services Tax) is an indirect tax levied on the supply
            of goods and services in India. It has replaced multiple cascading
            taxes and is collected at every stage of production and
            distribution.
          </p>

          <h3>GST Rate Categories</h3>
          <div className="not-prose grid gap-4 md:grid-cols-4">
            {[
              {
                rate: '5%',
                items: 'Essential items, packaged food, transport',
              },
              {
                rate: '12%',
                items: 'Processed food, computers, mobile phones',
              },
              { rate: '18%', items: 'Most goods and services, electronics' },
              {
                rate: '28%',
                items: 'Luxury items, cars, tobacco, aerated drinks',
              },
            ].map((item) => (
              <Card key={item.rate}>
                <CardContent className="pt-4">
                  <h3 className="text-2xl font-bold text-primary">
                    {item.rate}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.items}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h3>CGST, SGST, and IGST</h3>
          <ul>
            <li>
              <strong>CGST:</strong> Central GST - Goes to the Central
              Government
            </li>
            <li>
              <strong>SGST:</strong> State GST - Goes to the State Government
            </li>
            <li>
              <strong>IGST:</strong> Integrated GST - For interstate
              transactions
            </li>
          </ul>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Tax Calculator',
                href: '/tools/tax-calculator',
                desc: 'Calculate income tax',
              },
              {
                title: 'EMI Calculator',
                href: '/tools/emi-calculator',
                desc: 'Calculate loan EMIs',
              },
              {
                title: 'Discount Calculator',
                href: '/tools/discount-calculator',
                desc: 'Calculate discounts',
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
