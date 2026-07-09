'use client';

import { useState, useMemo } from 'react';
import {
  DollarSign,
  GraduationCap,
  TrendingUp,
  Clock,
  AlertCircle,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { motion } from 'framer-motion';

export const CollegeROICalculator = () => {
  const [fees, setFees] = useState<number>(800000); // 8 Lakhs defaults
  const [salary, setSalary] = useState<number>(450000); // 4.5 LPA defaults
  const [duration, setDuration] = useState<number>(4); // 4 Years
  const [livingCost, setLivingCost] = useState<number>(10000); // Monthly

  const results = useMemo(() => {
    // Total Investment
    const totalLivingCost = livingCost * 12 * duration;
    const totalInvestment = fees + totalLivingCost;

    // Net Yearly Income (assuming 20% tax + basics)
    const monthlyInHand = (salary / 12) * 0.85; // Approx tax/pf deduction
    const yearlySavings = monthlyInHand * 12 * 0.6; // Assuming 40% goes to expenses

    // ROI Time in Years
    const yearsToRecover = totalInvestment / yearlySavings;
    const monthsToRecover = Math.round(yearsToRecover * 12);

    // 10 Year Wealth Project
    const tenYearWealth = yearlySavings * 10 - totalInvestment;

    return {
      totalInvestment,
      yearsToRecover: yearsToRecover.toFixed(1),
      monthsToRecover,
      tenYearWealth: Math.max(0, tenYearWealth),
      roiPercentage: ((tenYearWealth / totalInvestment) * 100).toFixed(0),
    };
  }, [fees, salary, duration, livingCost]);

  const getVerdictColor = (years: number) => {
    if (years < 2) return 'text-green-600 dark:text-green-400';
    if (years < 4) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Investment Details
            </CardTitle>
            <CardDescription>
              Enter your college expenses and expected outcomes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Total College Fees (4 Years)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[fees]}
                  min={100000}
                  max={5000000}
                  step={50000}
                  onValueChange={(v) => setFees(v[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={fees}
                  onChange={(e) => setFees(Number(e.target.value))}
                  className="w-28"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(fees)}
              </p>
            </div>

            <div className="space-y-2">
              <Label>Monthly Living Cost (Hostel/PG)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[livingCost]}
                  min={0}
                  max={50000}
                  step={1000}
                  onValueChange={(v) => setLivingCost(v[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={livingCost}
                  onChange={(e) => setLivingCost(Number(e.target.value))}
                  className="w-28"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(livingCost)}/month
              </p>
            </div>

            <div className="space-y-2">
              <Label>Expected Starting Salary (CTC)</Label>
              <div className="flex items-center gap-4">
                <Slider
                  value={[salary]}
                  min={200000}
                  max={5000000}
                  step={50000}
                  onValueChange={(v) => setSalary(v[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-28"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(salary)} per year
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              ROI Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-2 text-center">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Time to Recover Investment
              </h3>
              <div
                className={`text-5xl font-black ${getVerdictColor(Number(results.yearsToRecover))}`}
              >
                {results.yearsToRecover}{' '}
                <span className="text-2xl font-bold text-muted-foreground">
                  Years
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                (~{results.monthsToRecover} months of working)
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between text-sm">
                <span>Total Investment Required</span>
                <span className="font-bold">
                  {formatCurrency(results.totalInvestment)}
                </span>
              </div>
              <Progress
                value={Math.min(
                  100,
                  (results.totalInvestment / (salary * 4)) * 100,
                )}
                className="h-2"
              />

              <div className="flex items-center justify-between pt-2 text-sm">
                <span>10-Year Wealth Projection</span>
                <span className="font-bold text-green-600">
                  {formatCurrency(results.tenYearWealth)}
                </span>
              </div>
            </div>

            {Number(results.yearsToRecover) > 5 && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>High Risk Investment</AlertTitle>
                <AlertDescription>
                  It will take over 5 years just to recover your costs. Consider
                  scholarships or lower-cost colleges.
                </AlertDescription>
              </Alert>
            )}
            {Number(results.yearsToRecover) < 2 && (
              <Alert className="border-green-500 bg-green-50 dark:bg-green-900/20">
                <Clock className="h-4 w-4 text-green-600" />
                <AlertTitle className="text-green-700 dark:text-green-400">
                  Excellent ROI
                </AlertTitle>
                <AlertDescription className="text-green-700 dark:text-green-400">
                  This college pays for itself very quickly. A financially sound
                  choice!
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base">Daily Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(results.totalInvestment / (365 * 4))}
            </div>
            <p className="text-xs text-muted-foreground">
              Spent every single day for 4 years
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base">Hourly Rate Needed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(salary / (250 * 8))}
            </div>
            <p className="text-xs text-muted-foreground">
              Your future hourly earning
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-4">
            <CardTitle className="text-base">ROI Percentage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {results.roiPercentage}%
            </div>
            <p className="text-xs text-muted-foreground">
              Return over 10 years
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
