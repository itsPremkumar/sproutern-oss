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
import { ExternalLink, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  cgpaToGermanGrade,
  cgpaToUsGpa,
  convertCGPA,
  type GradingScale,
} from '@/lib/cgpa-converter';
import {
  convertCgpaWithUniversityPreset,
  getUniversityCgpaPreset,
  UNIVERSITY_CGPA_PRESETS,
} from '@/lib/cgpa-university-presets';

const STANDARD_FORMULA = 'standard';

export function CGPAConverterTool() {
  const [cgpa, setCgpa] = useState('');
  const [scale, setScale] = useState<GradingScale>('10');
  const [universityPreset, setUniversityPreset] = useState(STANDARD_FORMULA);
  const [percentage, setPercentage] = useState<number | null>(null);
  const [usGpa, setUsGpa] = useState<string | null>(null);
  const [germanGpa, setGermanGpa] = useState<string | null>(null);

  const selectedPreset = getUniversityCgpaPreset(universityPreset);

  const clearResults = () => {
    setPercentage(null);
    setUsGpa(null);
    setGermanGpa(null);
  };

  const calculateResult = () => {
    const cgpaValue = parseFloat(cgpa);

    if (selectedPreset) {
      const conversion = convertCgpaWithUniversityPreset(
        cgpaValue,
        selectedPreset.id,
      );

      if (!conversion.isValid) {
        alert(conversion.error);
        return;
      }

      const normalizedCgpa = (cgpaValue / selectedPreset.maxCgpa) * 10;
      setPercentage(conversion.percentage);
      setUsGpa(cgpaToUsGpa(normalizedCgpa, '10', conversion.percentage));
      setGermanGpa(cgpaToGermanGrade(normalizedCgpa, '10'));
      return;
    }

    const conversion = convertCGPA(cgpaValue, scale);
    if (!conversion.isValid) {
      alert(conversion.error);
      return;
    }

    setPercentage(conversion.percentage);
    setUsGpa(conversion.usGpa);
    setGermanGpa(conversion.germanGpa);
  };

  const reset = () => {
    setCgpa('');
    clearResults();
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
              min="0"
              max={selectedPreset?.maxCgpa ?? Number(scale)}
              placeholder="e.g., 8.5"
              value={cgpa}
              onChange={(e) => {
                setCgpa(e.target.value);
                clearResults();
              }}
              className="h-12 text-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="university">University Formula</Label>
            <Select
              value={universityPreset}
              onValueChange={(value) => {
                setUniversityPreset(value);
                clearResults();
              }}
            >
              <SelectTrigger
                id="university"
                className="h-12 text-lg"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={STANDARD_FORMULA}>
                  Standard conversion
                </SelectItem>
                {UNIVERSITY_CGPA_PRESETS.map((preset) => (
                  <SelectItem
                    key={preset.id}
                    value={preset.id}
                  >
                    {preset.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedPreset ? (
          <div className="rounded-lg border bg-muted/40 p-4 text-sm">
            <p className="font-medium">{selectedPreset.formulaLabel}</p>
            <p className="mt-1 text-muted-foreground">
              {selectedPreset.maxCgpa}-point scale
              {selectedPreset.note ? ` • ${selectedPreset.note}` : ''}
            </p>
            <a
              href={selectedPreset.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-primary hover:underline"
            >
              View university reference
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ) : (
          <div className="space-y-2">
            <Label htmlFor="scale">Select Grading Scale</Label>
            <Select
              value={scale}
              onValueChange={(value: GradingScale) => {
                setScale(value);
                clearResults();
              }}
            >
              <SelectTrigger
                id="scale"
                className="h-12 text-lg md:w-1/2"
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
        )}

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
                    {selectedPreset
                      ? `${selectedPreset.name}: ${selectedPreset.formulaLabel}`
                      : 'Based on standard conversion formula'}
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
                  {selectedPreset && (
                    <p className="mt-1 text-xs text-muted-foreground/80">
                      Estimated on a normalized 10-pt scale for{' '}
                      {selectedPreset.name}
                    </p>
                  )}
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
