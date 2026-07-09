'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  MapPin,
  CheckCircle,
  Clock,
  Users,
  Shield,
  ArrowLeftRight,
} from 'lucide-react';
import Link from 'next/link';

const cities = [
  // India
  {
    name: 'Bangalore',
    country: 'India',
    costIndex: 120,
    rent: 28000,
    groceries: 8000,
  },
  {
    name: 'Mumbai',
    country: 'India',
    costIndex: 130,
    rent: 45000,
    groceries: 9000,
  },
  {
    name: 'Delhi',
    country: 'India',
    costIndex: 110,
    rent: 22000,
    groceries: 7500,
  },
  {
    name: 'Hyderabad',
    country: 'India',
    costIndex: 105,
    rent: 18000,
    groceries: 7000,
  },
  // USA
  {
    name: 'New York',
    country: 'USA',
    costIndex: 450,
    rent: 250000,
    groceries: 35000,
  },
  {
    name: 'San Francisco',
    country: 'USA',
    costIndex: 500,
    rent: 300000,
    groceries: 40000,
  },
  {
    name: 'Austin',
    country: 'USA',
    costIndex: 320,
    rent: 150000,
    groceries: 28000,
  },
  {
    name: 'Seattle',
    country: 'USA',
    costIndex: 380,
    rent: 200000,
    groceries: 32000,
  },
  {
    name: 'Boston',
    country: 'USA',
    costIndex: 400,
    rent: 220000,
    groceries: 33000,
  },
  {
    name: 'Los Angeles',
    country: 'USA',
    costIndex: 420,
    rent: 240000,
    groceries: 34000,
  },
  {
    name: 'Chicago',
    country: 'USA',
    costIndex: 350,
    rent: 180000,
    groceries: 29000,
  },
  {
    name: 'Miami',
    country: 'USA',
    costIndex: 380,
    rent: 210000,
    groceries: 31000,
  },
  // UK
  {
    name: 'London',
    country: 'UK',
    costIndex: 400,
    rent: 220000,
    groceries: 32000,
  },
  {
    name: 'Manchester',
    country: 'UK',
    costIndex: 280,
    rent: 100000,
    groceries: 22000,
  },
  {
    name: 'Edinburgh',
    country: 'UK',
    costIndex: 290,
    rent: 110000,
    groceries: 23000,
  },
  // Germany
  {
    name: 'Berlin',
    country: 'Germany',
    costIndex: 260,
    rent: 95000,
    groceries: 20000,
  },
  {
    name: 'Munich',
    country: 'Germany',
    costIndex: 320,
    rent: 140000,
    groceries: 25000,
  },
  {
    name: 'Frankfurt',
    country: 'Germany',
    costIndex: 300,
    rent: 120000,
    groceries: 23000,
  },
  // Canada
  {
    name: 'Toronto',
    country: 'Canada',
    costIndex: 340,
    rent: 170000,
    groceries: 28000,
  },
  {
    name: 'Vancouver',
    country: 'Canada',
    costIndex: 360,
    rent: 190000,
    groceries: 30000,
  },
  {
    name: 'Montreal',
    country: 'Canada',
    costIndex: 300,
    rent: 140000,
    groceries: 26000,
  },
  {
    name: 'Ottawa',
    country: 'Canada',
    costIndex: 310,
    rent: 150000,
    groceries: 27000,
  },
  // Australia
  {
    name: 'Sydney',
    country: 'Australia',
    costIndex: 370,
    rent: 200000,
    groceries: 32000,
  },
  {
    name: 'Melbourne',
    country: 'Australia',
    costIndex: 340,
    rent: 170000,
    groceries: 28000,
  },
  {
    name: 'Brisbane',
    country: 'Australia',
    costIndex: 310,
    rent: 150000,
    groceries: 26000,
  },
  {
    name: 'Perth',
    country: 'Australia',
    costIndex: 320,
    rent: 160000,
    groceries: 27000,
  },
  // Asia
  {
    name: 'Singapore',
    country: 'Singapore',
    costIndex: 380,
    rent: 180000,
    groceries: 30000,
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    costIndex: 350,
    rent: 140000,
    groceries: 35000,
  },
  {
    name: 'Hong Kong',
    country: 'Hong Kong',
    costIndex: 420,
    rent: 200000,
    groceries: 38000,
  },
  {
    name: 'Seoul',
    country: 'South Korea',
    costIndex: 360,
    rent: 160000,
    groceries: 32000,
  },
  {
    name: 'Bangkok',
    country: 'Thailand',
    costIndex: 180,
    rent: 60000,
    groceries: 15000,
  },
  {
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    costIndex: 160,
    rent: 50000,
    groceries: 12000,
  },
  // Europe
  {
    name: 'Amsterdam',
    country: 'Netherlands',
    costIndex: 310,
    rent: 140000,
    groceries: 24000,
  },
  {
    name: 'Paris',
    country: 'France',
    costIndex: 350,
    rent: 150000,
    groceries: 28000,
  },
  {
    name: 'Dublin',
    country: 'Ireland',
    costIndex: 340,
    rent: 160000,
    groceries: 27000,
  },
  {
    name: 'Zurich',
    country: 'Switzerland',
    costIndex: 520,
    rent: 280000,
    groceries: 45000,
  },
  {
    name: 'Madrid',
    country: 'Spain',
    costIndex: 280,
    rent: 110000,
    groceries: 22000,
  },
  {
    name: 'Barcelona',
    country: 'Spain',
    costIndex: 290,
    rent: 120000,
    groceries: 23000,
  },
  {
    name: 'Rome',
    country: 'Italy',
    costIndex: 300,
    rent: 130000,
    groceries: 24000,
  },
  {
    name: 'Milan',
    country: 'Italy',
    costIndex: 320,
    rent: 140000,
    groceries: 25000,
  },
  {
    name: 'Vienna',
    country: 'Austria',
    costIndex: 310,
    rent: 130000,
    groceries: 24000,
  },
  // Middle East
  {
    name: 'Dubai',
    country: 'UAE',
    costIndex: 320,
    rent: 120000,
    groceries: 25000,
  },
];

export default function CostOfLivingClient() {
  const [city1, setCity1] = useState('Bangalore');
  const [city2, setCity2] = useState('New York');
  const [salary, setSalary] = useState('1000000');

  const city1Data = cities.find((c) => c.name === city1)!;
  const city2Data = cities.find((c) => c.name === city2)!;

  const ratio = city2Data.costIndex / city1Data.costIndex;
  const equivalentSalary = (parseFloat(salary) || 0) * ratio;

  const formatCurrency = (amount: number) =>
    `₹${(amount / 100000).toFixed(1)}L`;
  const swapCities = () => {
    setCity1(city2);
    setCity2(city1);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <MapPin className="h-4 w-4" />
            Free Finance Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Cost of Living Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Compare living costs between cities and calculate equivalent
            salaries.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { icon: CheckCircle, text: '100% Free', color: 'green' },
            { icon: Clock, text: `${cities.length} Cities`, color: 'blue' },
            { icon: Users, text: 'Salary Calc', color: 'purple' },
            { icon: Shield, text: 'Detailed', color: 'orange' },
          ].map(({ icon: Icon, text, color }) => (
            <div
              key={text}
              className={`flex items-center gap-2 rounded-lg bg-${color}-50 p-3 dark:bg-${color}-950`}
            >
              <Icon className={`h-5 w-5 text-${color}-600`} />
              <span className="text-sm font-medium">{text}</span>
            </div>
          ))}
        </div>

        <Card className="mb-6">
          <CardContent className="py-6">
            <div className="grid gap-4 md:grid-cols-[1fr,auto,1fr]">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  From City
                </label>
                <select
                  value={city1}
                  onChange={(e) => setCity1(e.target.value)}
                  className="w-full rounded-lg border bg-background p-3"
                >
                  {cities.map((c) => (
                    <option
                      key={c.name}
                      value={c.name}
                    >
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-end justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={swapCities}
                >
                  <ArrowLeftRight className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">
                  To City
                </label>
                <select
                  value={city2}
                  onChange={(e) => setCity2(e.target.value)}
                  className="w-full rounded-lg border bg-background p-3"
                >
                  {cities.map((c) => (
                    <option
                      key={c.name}
                      value={c.name}
                    >
                      {c.name}, {c.country}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Salary Equivalent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Salary in {city1} (₹)
                </label>
                <input
                  type="number"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full rounded-lg border bg-muted/50 p-3 font-bold outline-none"
                />
              </div>
              <div className="flex items-center justify-center text-4xl">→</div>
              <div className="rounded-lg bg-primary p-4 text-center text-primary-foreground">
                <div className="text-sm opacity-80">Equivalent in {city2}</div>
                <div className="text-2xl font-bold">
                  {formatCurrency(equivalentSalary)}
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {city2} is <strong>{((ratio - 1) * 100).toFixed(0)}%</strong>{' '}
              {ratio > 1 ? 'more expensive' : 'cheaper'} than {city1}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cost Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {['rent', 'groceries'].map((cat) => (
              <div
                key={cat}
                className="rounded-lg border p-4"
              >
                <div className="mb-2 font-medium capitalize">{cat}</div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold">
                      {formatCurrency((city1Data as any)[cat])}
                    </div>
                    <div className="text-xs text-muted-foreground">{city1}</div>
                  </div>
                  <div
                    className={
                      (city2Data as any)[cat] > (city1Data as any)[cat]
                        ? 'text-red-600'
                        : 'text-green-600'
                    }
                  >
                    {(
                      (((city2Data as any)[cat] - (city1Data as any)[cat]) /
                        (city1Data as any)[cat]) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                  <div>
                    <div className="text-lg font-bold">
                      {formatCurrency((city2Data as any)[cat])}
                    </div>
                    <div className="text-xs text-muted-foreground">{city2}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Salary Calculator',
                href: '/tools/salary-calculator',
                desc: 'Calculate take-home',
              },
              {
                title: 'Currency Converter',
                href: '/tools/currency-converter',
                desc: 'Convert currencies',
              },
              {
                title: 'EMI Calculator',
                href: '/tools/emi-calculator',
                desc: 'Calculate EMIs',
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
