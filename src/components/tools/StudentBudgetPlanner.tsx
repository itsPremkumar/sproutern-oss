'use client';

import { useState, useEffect } from 'react';
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
import { Progress } from '@/components/ui/progress';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import {
  Plus,
  Trash2,
  Save,
  RefreshCw,
  Wallet,
  PiggyBank,
  AlertTriangle,
} from 'lucide-react';

interface ExpenseItem {
  id: string;
  category: string;
  amount: number;
}

const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FF8042',
  '#8884d8',
  '#82ca9d',
];

export function StudentBudgetPlanner() {
  const [income, setIncome] = useState<string>('');
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: '1', category: 'Food', amount: 0 },
    { id: '2', category: 'Travel', amount: 0 },
    { id: '3', category: 'Rent/Hostel', amount: 0 },
    { id: '4', category: 'Recharge/Data', amount: 0 },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [savingsGoal, setSavingsGoal] = useState<string>('');
  const [goalName, setGoalName] = useState('');

  // Load from local storage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('studentBudget');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setIncome(parsed.income || '');
      setExpenses(parsed.expenses || []);
      setSavingsGoal(parsed.savingsGoal || '');
      setGoalName(parsed.goalName || '');
    }
  }, []);

  // Save to local storage whenever data changes
  useEffect(() => {
    localStorage.setItem(
      'studentBudget',
      JSON.stringify({
        income,
        expenses,
        savingsGoal,
        goalName,
      }),
    );
  }, [income, expenses, savingsGoal, goalName]);

  const handleExpenseChange = (id: string, value: string) => {
    const newExpenses = expenses.map((exp) =>
      exp.id === id ? { ...exp, amount: parseFloat(value) || 0 } : exp,
    );
    setExpenses(newExpenses);
  };

  const addCategory = () => {
    if (newCategory.trim()) {
      setExpenses([
        ...expenses,
        { id: Date.now().toString(), category: newCategory, amount: 0 },
      ]);
      setNewCategory('');
    }
  };

  const removeCategory = (id: string) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  const resetData = () => {
    if (confirm('Are you sure you want to reset all data?')) {
      setIncome('');
      setExpenses([
        { id: '1', category: 'Food', amount: 0 },
        { id: '2', category: 'Travel', amount: 0 },
        { id: '3', category: 'Rent/Hostel', amount: 0 },
        { id: '4', category: 'Recharge/Data', amount: 0 },
      ]);
      setSavingsGoal('');
      setGoalName('');
    }
  };

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const totalIncome = parseFloat(income) || 0;
  const balance = totalIncome - totalExpenses;
  const targetSavings = parseFloat(savingsGoal) || 0;

  const chartData = expenses
    .filter((exp) => exp.amount > 0)
    .map((exp) => ({ name: exp.category, value: exp.amount }));

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Input Section */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5 text-primary" />
              Income & Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Monthly Income (Stipend/Pocket Money)</Label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-muted-foreground">
                  ₹
                </span>
                <Input
                  type="number"
                  className="pl-8"
                  placeholder="0"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Savings Goal Name</Label>
                <Input
                  placeholder="e.g. New Laptop"
                  value={goalName}
                  onChange={(e) => setGoalName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Target Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="pl-8"
                    placeholder="0"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>
              Enter your estimated monthly spends
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {expenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center gap-3"
              >
                <Label
                  className="w-1/3 truncate"
                  title={expense.category}
                >
                  {expense.category}
                </Label>
                <div className="relative flex-1">
                  <span className="absolute left-3 top-2.5 text-xs text-muted-foreground">
                    ₹
                  </span>
                  <Input
                    type="number"
                    className="h-9 pl-6"
                    placeholder="0"
                    value={expense.amount || ''}
                    onChange={(e) =>
                      handleExpenseChange(expense.id, e.target.value)
                    }
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 text-muted-foreground hover:text-destructive"
                  onClick={() => removeCategory(expense.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}

            <div className="flex gap-2 pt-2">
              <Input
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCategory()}
              />
              <Button
                onClick={addCategory}
                variant="outline"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Section */}
      <div className="space-y-6">
        <Card className={balance < 0 ? 'border-destructive' : 'border-primary'}>
          <CardHeader>
            <CardTitle>Budget Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Total Income</p>
                <p className="text-2xl font-bold text-green-600">
                  ₹{totalIncome.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-2xl font-bold text-red-600">
                  ₹{totalExpenses.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="rounded-xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-6 text-center">
              <p className="mb-1 text-sm font-medium text-muted-foreground">
                Remaining Balance
              </p>
              <p
                className={`text-4xl font-black ${balance >= 0 ? 'text-primary' : 'text-destructive'}`}
              >
                ₹{balance.toLocaleString()}
              </p>
              {balance < 0 && (
                <div className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-destructive">
                  <AlertTriangle className="h-4 w-4" />
                  You are over budget!
                </div>
              )}
            </div>

            {targetSavings > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <PiggyBank className="h-4 w-4 text-purple-500" />
                    Goal: {goalName || 'Savings'}
                  </span>
                  <span>
                    {Math.min(
                      100,
                      Math.max(0, Math.round((balance / targetSavings) * 100)),
                    )}
                    %
                  </span>
                </div>
                <Progress
                  value={Math.min(
                    100,
                    Math.max(0, (balance / targetSavings) * 100),
                  )}
                  className="h-2"
                />
                <p className="text-right text-xs text-muted-foreground">
                  Target: ₹{targetSavings.toLocaleString()}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {chartData.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Expense Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `₹${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={resetData}
            className="text-muted-foreground"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset Data
          </Button>
        </div>
      </div>
    </div>
  );
}
