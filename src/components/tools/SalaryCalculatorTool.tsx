'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { IndianRupee } from 'lucide-react';

export function SalaryCalculatorTool() {
  const [ctc, setCtc] = useState('');
  const [result, setResult] = useState<any>(null);

  const calculateSalary = () => {
    const ctcValue = parseFloat(ctc);

    if (isNaN(ctcValue) || ctcValue <= 0) {
      alert('Please enter a valid CTC amount');
      return;
    }

    // Standard salary breakdown (approximate)
    const basic = ctcValue * 0.4; // 40% of CTC
    const hra = basic * 0.5; // 50% of basic
    const specialAllowance = ctcValue * 0.3;
    const employerPF = basic * 0.12;
    const gratuity = basic * 0.0481;

    const grossSalary = basic + hra + specialAllowance;

    // Deductions
    const employeePF = basic * 0.12;
    const professionalTax = 2400; // Annual (₹200/month average)

    // Simple tax calculation (approximate for new regime)
    let incomeTax = 0;
    const taxableIncome = grossSalary - employeePF - 50000; // Standard deduction

    if (taxableIncome > 300000 && taxableIncome <= 600000) {
      incomeTax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome > 600000 && taxableIncome <= 900000) {
      incomeTax = 15000 + (taxableIncome - 600000) * 0.1;
    } else if (taxableIncome > 900000 && taxableIncome <= 1200000) {
      incomeTax = 45000 + (taxableIncome - 900000) * 0.15;
    } else if (taxableIncome > 1200000 && taxableIncome <= 1500000) {
      incomeTax = 90000 + (taxableIncome - 1200000) * 0.2;
    } else if (taxableIncome > 1500000) {
      incomeTax = 150000 + (taxableIncome - 1500000) * 0.3;
    }

    const totalDeductions = employeePF + professionalTax + incomeTax;
    const annualInHand = grossSalary - totalDeductions;
    const monthlyInHand = annualInHand / 12;

    setResult({
      ctc: ctcValue,
      basic,
      hra,
      specialAllowance,
      grossSalary,
      employeePF,
      professionalTax,
      incomeTax,
      totalDeductions,
      annualInHand,
      monthlyInHand,
    });
  };

  const reset = () => {
    setCtc('');
    setResult(null);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <IndianRupee className="h-6 w-6" />
          Salary Calculator
        </CardTitle>
        <CardDescription>
          Enter your annual CTC to calculate your monthly in-hand salary
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="ctc">Annual CTC (Cost to Company)</Label>
          <Input
            id="ctc"
            type="number"
            placeholder="e.g., 600000"
            value={ctc}
            onChange={(e) => setCtc(e.target.value)}
            className="text-lg"
          />
          <p className="text-sm text-muted-foreground">
            Enter amount in rupees (₹)
          </p>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={calculateSalary}
            className="flex-1"
            size="lg"
          >
            Calculate In-Hand Salary
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            size="lg"
          >
            Reset
          </Button>
        </div>

        {result && (
          <div className="mt-8 space-y-6">
            {/* Main Result */}
            <div className="rounded-lg border-2 border-primary bg-primary/10 p-6">
              <div className="text-center">
                <p className="mb-2 text-sm text-muted-foreground">
                  Monthly In-Hand Salary
                </p>
                <p className="text-5xl font-bold text-primary">
                  {formatCurrency(result.monthlyInHand)}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Annual: {formatCurrency(result.annualInHand)}
                </p>
              </div>
            </div>

            {/* Detailed Breakdown */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Earnings */}
              <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                <h3 className="mb-4 font-semibold text-green-900 dark:text-green-100">
                  Earnings (Annual)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Basic Salary</span>
                    <span className="font-medium">
                      {formatCurrency(result.basic)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>HRA</span>
                    <span className="font-medium">
                      {formatCurrency(result.hra)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Special Allowance</span>
                    <span className="font-medium">
                      {formatCurrency(result.specialAllowance)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span>Gross Salary</span>
                    <span>{formatCurrency(result.grossSalary)}</span>
                  </div>
                </div>
              </div>

              {/* Deductions */}
              <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                <h3 className="mb-4 font-semibold text-red-900 dark:text-red-100">
                  Deductions (Annual)
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Employee PF (12%)</span>
                    <span className="font-medium">
                      {formatCurrency(result.employeePF)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Professional Tax</span>
                    <span className="font-medium">
                      {formatCurrency(result.professionalTax)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Income Tax (TDS)</span>
                    <span className="font-medium">
                      {formatCurrency(result.incomeTax)}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span>Total Deductions</span>
                    <span>{formatCurrency(result.totalDeductions)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="rounded-lg bg-secondary p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">CTC Breakdown</p>
                  <p className="text-lg font-semibold">
                    {(((result.monthlyInHand * 12) / result.ctc) * 100).toFixed(
                      1,
                    )}
                    % of CTC is in-hand
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Annual CTC</p>
                  <p className="text-lg font-semibold">
                    {formatCurrency(result.ctc)}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground">
              * This is an approximate calculation. Actual salary may vary based
              on company policy, tax regime, and state-specific taxes.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
