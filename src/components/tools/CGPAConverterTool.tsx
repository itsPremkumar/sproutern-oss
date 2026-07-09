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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, Globe, BookOpen } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function CGPAConverterTool() {
  const [cgpa, setCgpa] = useState('');
  const [scale, setScale] = useState('10');
  const [percentage, setPercentage] = useState<number | null>(null);
  const [usGpa, setUsGpa] = useState<string | null>(null);
  const [germanGpa, setGermanGpa] = useState<string | null>(null);

  const calculateResult = () => {
    const cgpaValue = parseFloat(cgpa);
    if (isNaN(cgpaValue) || cgpaValue < 0) {
      alert('Please enter a valid CGPA');
      return;
    }

    // 1. Calculate Percentage (Base: Indian Standards)
    let calcPercentage = 0;
    if (scale === '10') {
      if (cgpaValue > 10) return alert('Max CGPA is 10');
      calcPercentage = cgpaValue * 9.5;
    } else if (scale === '7') {
      if (cgpaValue > 7) return alert('Max CGPA is 7');
      calcPercentage = cgpaValue * 10 - 7.5;
    } else if (scale === '4') {
      if (cgpaValue > 4) return alert('Max GPA is 4');
      calcPercentage = (cgpaValue / 4) * 100;
    }

    // Cap at 100%
    if (calcPercentage > 100) calcPercentage = 100;
    if (calcPercentage < 0) calcPercentage = 0;

    setPercentage(Math.round(calcPercentage * 100) / 100);

    // 2. Global Conversions (Approximations based on WES/Bavarian)

    // US GPA (4.0 Scale) - Common WES Approximation for Indian 10pt scale
    // Roughly: >60% = 4.0? No, that's too generous.
    // Standard linear isn't accurate, but a common table reference is:
    // 10-point scale Map:
    // 9.0-10 = 4.0
    // 8.0-8.9 = 3.7
    // 7.0-7.9 = 3.3
    // 6.0-6.9 = 3.0
    // 5.0-5.9 = 2.0-2.7
    let usVal = 'N/A';
    if (scale === '10') {
      if (cgpaValue >= 9) usVal = '4.0';
      else if (cgpaValue >= 8) usVal = '3.7';
      else if (cgpaValue >= 7) usVal = '3.3';
      else if (cgpaValue >= 6) usVal = '3.0';
      else if (cgpaValue >= 5) usVal = '2.3';
      else usVal = '< 2.0';
    } else {
      // Fallback using percentage
      if (calcPercentage >= 85) usVal = '4.0';
      else if (calcPercentage >= 75) usVal = '3.7';
      else if (calcPercentage >= 65) usVal = '3.3';
      else if (calcPercentage >= 60) usVal = '3.0';
      else usVal = '< 2.5';
    }
    setUsGpa(usVal);

    // German GPA (Bavarian Formula)
    // Formula: N = 1 + 3 * ((Pmax - P) / (Pmax - Pmin))
    // Pmax = Max score (usually 10 or 100), Pmin = Min passing (usually 5 or 40)
    // Result: 1.0 (Best) to 4.0 (Pass)
    let pMax = 10;
    let pMin = 5; // Assuming 5 is pass for 10 point scale
    let pCurrent = cgpaValue;

    if (scale === '10') {
      pMax = 10;
      pMin = 5;
      pCurrent = cgpaValue;
    } else if (scale === '7') {
      pMax = 7;
      pMin = 3;
      pCurrent = cgpaValue;
    } // Approx
    else if (scale === '4') {
      pMax = 4;
      pMin = 2;
      pCurrent = cgpaValue;
    }

    if (pCurrent < pMin) {
      setGermanGpa('5.0 (Fail)');
    } else {
      const resultGerman = 1 + 3 * ((pMax - pCurrent) / (pMax - pMin));
      // German grade is reversed: 1 is best, 4 is worst pass.
      // Cap it between 1 and 4
      let gVal = Math.round(resultGerman * 10) / 10;
      if (gVal < 1) gVal = 1;
      setGermanGpa(gVal.toFixed(1));
    }
  };

  const reset = () => {
    setCgpa('');
    setPercentage(null);
    setUsGpa(null);
    setGermanGpa(null);
  };

  return (
    <Card className="border-t-4 border-t-primary shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Globe className="h-6 w-6 text-primary" />
          Global GPA Converter
        </CardTitle>
        <CardDescription>
          Convert your CGPA to Percentage, US GPA (4.0 scale), and German Grade
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="cgpa">Enter Your CGPA / Score</Label>
            <Input
              id="cgpa"
              type="number"
              step="0.01"
              placeholder="e.g., 8.5"
              value={cgpa}
              onChange={(e) => setCgpa(e.target.value)}
              className="h-12 text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="scale">Select Grading Scale</Label>
            <Select
              value={scale}
              onValueChange={setScale}
            >
              <SelectTrigger
                id="scale"
                className="h-12 text-lg"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10-Point Scale (India/CBSE)</SelectItem>
                <SelectItem value="7">7-Point Scale</SelectItem>
                <SelectItem value="4">4-Point Scale</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={calculateResult}
            className="h-12 flex-1 text-lg"
          >
            Convert Globally
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="h-12"
          >
            Reset
          </Button>
        </div>

        {percentage !== null && (
          <div className="mt-8 duration-500 animate-in fade-in slide-in-from-bottom-4">
            <Tabs
              defaultValue="percentage"
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="percentage">Percentage %</TabsTrigger>
                <TabsTrigger value="us">🇺🇸 US GPA</TabsTrigger>
                <TabsTrigger value="german">🇩🇪 German Grade</TabsTrigger>
              </TabsList>

              <TabsContent value="percentage">
                <div className="mt-4 rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Standard Percentage
                  </p>
                  <p className="my-2 text-6xl font-black text-primary">
                    {percentage}%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Based on standard conversion formula
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="us">
                <div className="mt-4 rounded-lg border-2 border-blue-500 bg-blue-500/5 p-8 text-center">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    US Equivalent (4.0 Scale)
                  </p>
                  <p className="my-2 text-6xl font-black text-blue-600">
                    {usGpa}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Approximate conversion typical for US grad schools
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="german">
                <div className="mt-4 rounded-lg border-2 border-orange-500 bg-orange-500/5 p-8 text-center">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    German Grade (Bavarian Formula)
                  </p>
                  <p className="my-2 text-6xl font-black text-orange-600">
                    {germanGpa}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    1.0 is Best, 4.0 is Pass, 5.0 is Fail
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
