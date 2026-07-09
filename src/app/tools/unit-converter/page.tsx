'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  ArrowRightLeft,
  Ruler,
  Thermometer,
  Scale,
  Clock,
  HardDrive,
  Zap,
} from 'lucide-react';

type Category = 'length' | 'weight' | 'temperature' | 'time' | 'data' | 'speed';

interface ConversionUnit {
  name: string;
  toBase: (val: number) => number;
  fromBase: (val: number) => number;
}

const conversions: Record<
  Category,
  { units: ConversionUnit[]; icon: React.ReactNode }
> = {
  length: {
    icon: <Ruler className="h-4 w-4" />,
    units: [
      { name: 'Meters', toBase: (v) => v, fromBase: (v) => v },
      {
        name: 'Kilometers',
        toBase: (v) => v * 1000,
        fromBase: (v) => v / 1000,
      },
      { name: 'Centimeters', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
      {
        name: 'Millimeters',
        toBase: (v) => v / 1000,
        fromBase: (v) => v * 1000,
      },
      {
        name: 'Miles',
        toBase: (v) => v * 1609.34,
        fromBase: (v) => v / 1609.34,
      },
      { name: 'Feet', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      {
        name: 'Inches',
        toBase: (v) => v * 0.0254,
        fromBase: (v) => v / 0.0254,
      },
      { name: 'Yards', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
    ],
  },
  weight: {
    icon: <Scale className="h-4 w-4" />,
    units: [
      { name: 'Kilograms', toBase: (v) => v, fromBase: (v) => v },
      { name: 'Grams', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      {
        name: 'Milligrams',
        toBase: (v) => v / 1000000,
        fromBase: (v) => v * 1000000,
      },
      {
        name: 'Pounds',
        toBase: (v) => v * 0.453592,
        fromBase: (v) => v / 0.453592,
      },
      {
        name: 'Ounces',
        toBase: (v) => v * 0.0283495,
        fromBase: (v) => v / 0.0283495,
      },
      { name: 'Tons', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
    ],
  },
  temperature: {
    icon: <Thermometer className="h-4 w-4" />,
    units: [
      { name: 'Celsius', toBase: (v) => v, fromBase: (v) => v },
      {
        name: 'Fahrenheit',
        toBase: (v) => ((v - 32) * 5) / 9,
        fromBase: (v) => (v * 9) / 5 + 32,
      },
      {
        name: 'Kelvin',
        toBase: (v) => v - 273.15,
        fromBase: (v) => v + 273.15,
      },
    ],
  },
  time: {
    icon: <Clock className="h-4 w-4" />,
    units: [
      { name: 'Seconds', toBase: (v) => v, fromBase: (v) => v },
      { name: 'Minutes', toBase: (v) => v * 60, fromBase: (v) => v / 60 },
      { name: 'Hours', toBase: (v) => v * 3600, fromBase: (v) => v / 3600 },
      { name: 'Days', toBase: (v) => v * 86400, fromBase: (v) => v / 86400 },
      { name: 'Weeks', toBase: (v) => v * 604800, fromBase: (v) => v / 604800 },
      {
        name: 'Months',
        toBase: (v) => v * 2592000,
        fromBase: (v) => v / 2592000,
      },
      {
        name: 'Years',
        toBase: (v) => v * 31536000,
        fromBase: (v) => v / 31536000,
      },
    ],
  },
  data: {
    icon: <HardDrive className="h-4 w-4" />,
    units: [
      { name: 'Bytes', toBase: (v) => v, fromBase: (v) => v },
      { name: 'KB', toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
      {
        name: 'MB',
        toBase: (v) => v * 1024 * 1024,
        fromBase: (v) => v / (1024 * 1024),
      },
      {
        name: 'GB',
        toBase: (v) => v * 1024 * 1024 * 1024,
        fromBase: (v) => v / (1024 * 1024 * 1024),
      },
      {
        name: 'TB',
        toBase: (v) => v * 1024 * 1024 * 1024 * 1024,
        fromBase: (v) => v / (1024 * 1024 * 1024 * 1024),
      },
    ],
  },
  speed: {
    icon: <Zap className="h-4 w-4" />,
    units: [
      { name: 'm/s', toBase: (v) => v, fromBase: (v) => v },
      { name: 'km/h', toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
      { name: 'mph', toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
      {
        name: 'knots',
        toBase: (v) => v * 0.514444,
        fromBase: (v) => v / 0.514444,
      },
    ],
  },
};

export default function UnitConverterPage() {
  const [category, setCategory] = useState<Category>('length');
  const [fromUnit, setFromUnit] = useState(0);
  const [toUnit, setToUnit] = useState(1);
  const [fromValue, setFromValue] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const currentUnits = conversions[category].units;

  const convert = () => {
    const value = parseFloat(fromValue);
    if (isNaN(value)) return;

    const baseValue = currentUnits[fromUnit].toBase(value);
    const converted = currentUnits[toUnit].fromBase(baseValue);
    setResult(converted);
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
    setResult(null);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <ArrowRightLeft className="h-4 w-4" />
            Converter Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">Unit Converter</h1>
          <p className="text-xl text-muted-foreground">
            Convert between length, weight, temperature, time, data, and speed
            units
          </p>
        </div>

        <Card>
          <CardContent className="space-y-6 pt-6">
            {/* Category Selection */}
            <div className="flex flex-wrap gap-2">
              {(Object.keys(conversions) as Category[]).map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? 'default' : 'outline'}
                  onClick={() => {
                    setCategory(cat);
                    setFromUnit(0);
                    setToUnit(1);
                    setResult(null);
                  }}
                  className="capitalize"
                >
                  {conversions[cat].icon}
                  <span className="ml-2">{cat}</span>
                </Button>
              ))}
            </div>

            {/* From */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>From</Label>
                <select
                  className="mt-1 w-full rounded-md border p-2"
                  value={fromUnit}
                  onChange={(e) => setFromUnit(Number(e.target.value))}
                >
                  {currentUnits.map((unit, i) => (
                    <option
                      key={i}
                      value={i}
                    >
                      {unit.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label>Value</Label>
                <Input
                  type="number"
                  placeholder="Enter value"
                  value={fromValue}
                  onChange={(e) => setFromValue(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="sm"
                onClick={swapUnits}
              >
                <ArrowRightLeft className="h-4 w-4" />
              </Button>
            </div>

            {/* To */}
            <div>
              <Label>To</Label>
              <select
                className="mt-1 w-full rounded-md border p-2"
                value={toUnit}
                onChange={(e) => setToUnit(Number(e.target.value))}
              >
                {currentUnits.map((unit, i) => (
                  <option
                    key={i}
                    value={i}
                  >
                    {unit.name}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={convert}
              className="w-full"
            >
              Convert
            </Button>

            {result !== null && (
              <div className="rounded-lg bg-primary/10 p-6 text-center">
                <p className="text-3xl font-bold text-primary">
                  {result.toLocaleString(undefined, {
                    maximumFractionDigits: 6,
                  })}
                </p>
                <p className="text-muted-foreground">
                  {currentUnits[toUnit].name}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
