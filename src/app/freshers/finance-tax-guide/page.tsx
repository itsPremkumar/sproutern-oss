import React from 'react';
import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DollarSign,
  Landmark,
  TrendingUp,
  ShieldCheck,
  AlertCircle,
  PieChart,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Fresher's Guide to Finance: First Paycheck, Taxes & Investments",
  description:
    "Don't let taxes eat your salary. Learn about CTC vs In-Hand, HRA exemption, ELSS, PPF, and how to plan your investments as a fresher.",
};

export default function FinanceGuidePage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero */}
      <div className="mb-12 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-green-200 bg-green-50 text-green-600"
        >
          Money 101
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          The Fresher's Guide to{' '}
          <span className="text-green-600">Personal Finance</span>
        </h1>
        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
          Your first paycheck is special. But before you buy that iPhone, learn
          how to save taxes and build wealth. Because 20% of your CTC might
          never reach your bank account.
        </p>
      </div>

      <Tabs
        defaultValue="salary"
        className="w-full"
      >
        <TabsList className="mb-8 grid h-auto w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger
            value="salary"
            className="py-3"
          >
            CTC vs In-Hand
          </TabsTrigger>
          <TabsTrigger
            value="tax"
            className="py-3"
          >
            Saving Tax (80C)
          </TabsTrigger>
          <TabsTrigger
            value="invest"
            className="py-3"
          >
            Investments (SIP)
          </TabsTrigger>
          <TabsTrigger
            value="mistakes"
            className="py-3"
          >
            Common Mistakes
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Salary Structure */}
        <TabsContent
          value="salary"
          className="space-y-6"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                Why is my In-Hand less than CTC?
              </h3>
              <p className="mb-4 text-slate-600 dark:text-slate-300">
                <strong>CTC (Cost to Company)</strong> is the total amount the
                company spends on you. It includes things you don't get in cash,
                like PF contribution, Insurance, and Gratuity.
              </p>
              <Card className="bg-slate-50 dark:bg-slate-900/50">
                <CardHeader>
                  <CardTitle>The "Deductions"</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Provident Fund (PF)</span>
                    <span className="font-bold text-red-500">12% of Basic</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Professional Tax</span>
                    <span className="font-bold text-red-500">
                      ~₹200 / month
                    </span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Income Tax (TDS)</span>
                    <span className="font-bold text-red-500">
                      Depends on Slab
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <PieChart className="h-64 w-64 text-green-200" />
            </div>
          </div>
        </TabsContent>

        {/* Tab 2: Taxes */}
        <TabsContent
          value="tax"
          className="space-y-6"
        >
          <div className="mb-6 rounded-xl border border-blue-100 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
            <h3 className="mb-2 flex items-center text-xl font-bold text-blue-900 dark:text-blue-100">
              <ShieldCheck className="mr-2 h-5 w-5" />
              Section 80C: Your Best Friend
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              The government allows you to reduce your taxable income by up to{' '}
              <strong>₹1.5 Lakhs</strong> per year if you invest it.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>ELSS Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  Equity Mutual Funds with a 3-year lock-in.
                </p>
                <Badge variant="secondary">High Return (12-15%)</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>PPF (Public Provident Fund)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  Government backed scheme. 15-year lock-in.
                </p>
                <Badge variant="secondary">Safe Return (7.1%)</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>EPF (Employee PF)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  The PF deducted from your salary auto-counts towards 80C!
                </p>
                <Badge variant="secondary">Auto Deducted</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-l-4 border-green-500">
            <CardHeader>
              <CardTitle>HRA (House Rent Allowance)</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                If you live in a rented house, you can claim HRA exemption.
                <strong>
                  {' '}
                  You need your landlord's PAN card if rent {'>'} ₹8,333/month.
                </strong>
                Always pay rent via bank transfer for proof.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Investments */}
        <TabsContent
          value="invest"
          className="space-y-6"
        >
          <h3 className="mb-6 flex items-center text-2xl font-bold">
            <TrendingUp className="mr-3 h-6 w-6 text-green-600" />
            The Magic of Compounding
          </h3>
          <p className="mb-6 text-slate-600 dark:text-slate-300">
            If you start investing ₹5,000/month at age 22, you will have{' '}
            <strong>₹2.8 Crores</strong> by age 60 (at 12% return). If you start
            at 30, you will only have ₹1 Crore. Start EARLY.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                1
              </div>
              <div>
                <h4 className="font-bold">Build an Emergency Fund</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Keep 6 months of expenses in a separate Savings Account/FD. Do
                  not touch this unless you lose your job or have a medical
                  emergency.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                2
              </div>
              <div>
                <h4 className="font-bold">Start an Index Fund SIP</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Don't pick individual stocks. Just invest in a Nifty 50 Index
                  Fund. It buys the top 50 companies of India.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black text-white">
                3
              </div>
              <div>
                <h4 className="font-bold">Get Life & Health Insurance</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Company insurance disappears if you lose your job. Buy a
                  separate Term Insurance and Health Insurance policy while you
                  are young and premiums are low.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Tab 4: Mistakes */}
        <TabsContent
          value="mistakes"
          className="space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/10">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300">
                  Mistake 1: Lifestyle Inflation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-800 dark:text-red-200">
                  "My salary doubled, so my expenses should double." NO. Keep
                  living like a student for the first 2-3 years and invest the
                  surplus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-900/10">
              <CardHeader>
                <CardTitle className="text-red-700 dark:text-red-300">
                  Mistake 2: Credit Card Debt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Credit cards are great for rewards, but terrible for loans.
                  They charge ~40% interest. Always pay the full bill amount
                  every month.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 rounded-2xl bg-green-50 px-6 py-10 text-center dark:bg-green-900/20">
        <h2 className="mb-4 text-2xl font-bold">
          Want to check your exact take-home?
        </h2>
        <Button
          asChild
          size="lg"
        >
          <Link href="/tools/salary-bond-tracker">Use Salary Calculator</Link>
        </Button>
      </div>
    </div>
  );
}
