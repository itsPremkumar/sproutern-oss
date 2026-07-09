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
import { Globe, ArrowRight, Info, Copy, Check } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Comprehensive grading systems from around the world (40+ systems)
const gradingSystems = {
  // India
  india_10: {
    name: 'India (10-Point CGPA)',
    country: '🇮🇳',
    max: 10,
    min: 0,
    pass: 4,
    examples: 'CBSE, Most Indian Universities',
    region: 'Asia',
  },
  india_percentage: {
    name: 'India (Percentage)',
    country: '🇮🇳',
    max: 100,
    min: 0,
    pass: 35,
    examples: 'State Boards, Traditional Universities',
    region: 'Asia',
  },
  // USA
  usa_4: {
    name: 'USA (4.0 GPA)',
    country: '🇺🇸',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Most American Universities',
    region: 'North America',
  },
  usa_percentage: {
    name: 'USA (Percentage)',
    country: '🇺🇸',
    max: 100,
    min: 0,
    pass: 60,
    examples: 'High Schools, Some Colleges',
    region: 'North America',
  },
  // UK
  uk_honours: {
    name: 'UK (Honours Classification)',
    country: '🇬🇧',
    max: 100,
    min: 0,
    pass: 40,
    examples: 'UK Universities',
    region: 'Europe',
  },
  uk_percentage: {
    name: 'UK (Percentage)',
    country: '🇬🇧',
    max: 100,
    min: 0,
    pass: 40,
    examples: 'UK Schools, A-Levels',
    region: 'Europe',
  },
  // Germany
  germany_1to5: {
    name: 'Germany (1.0-5.0)',
    country: '🇩🇪',
    max: 1,
    min: 5,
    pass: 4,
    examples: 'German Universities (1.0 = Best)',
    region: 'Europe',
  },
  // France
  france_20: {
    name: 'France (20-Point)',
    country: '🇫🇷',
    max: 20,
    min: 0,
    pass: 10,
    examples: 'French Universities',
    region: 'Europe',
  },
  // Europe
  ects: {
    name: 'ECTS Grade (A-F)',
    country: '🇪🇺',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'European Credit Transfer System',
    region: 'Europe',
  },
  // Australia
  australia_7: {
    name: 'Australia (7-Point)',
    country: '🇦🇺',
    max: 7,
    min: 1,
    pass: 4,
    examples: 'Australian Universities',
    region: 'Oceania',
  },
  australia_wam: {
    name: 'Australia (WAM)',
    country: '🇦🇺',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'Weighted Average Mark',
    region: 'Oceania',
  },
  // Canada
  canada_4: {
    name: 'Canada (4.0 GPA)',
    country: '🇨🇦',
    max: 4,
    min: 0,
    pass: 1.0,
    examples: 'Most Canadian Universities',
    region: 'North America',
  },
  canada_percentage: {
    name: 'Canada (Percentage)',
    country: '🇨🇦',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'Ontario, British Columbia',
    region: 'North America',
  },
  // China
  china_100: {
    name: 'China (100-Point)',
    country: '🇨🇳',
    max: 100,
    min: 0,
    pass: 60,
    examples: 'Chinese Universities',
    region: 'Asia',
  },
  china_4: {
    name: 'China (4.0 GPA)',
    country: '🇨🇳',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Some Chinese Universities',
    region: 'Asia',
  },
  // Japan
  japan_100: {
    name: 'Japan (100-Point)',
    country: '🇯🇵',
    max: 100,
    min: 0,
    pass: 60,
    examples: 'Japanese Universities',
    region: 'Asia',
  },
  japan_4: {
    name: 'Japan (4.0 GPA)',
    country: '🇯🇵',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Some Japanese Universities',
    region: 'Asia',
  },
  // South Korea
  korea_4_5: {
    name: 'South Korea (4.5 GPA)',
    country: '🇰🇷',
    max: 4.5,
    min: 0,
    pass: 2.0,
    examples: 'Most Korean Universities',
    region: 'Asia',
  },
  korea_4_3: {
    name: 'South Korea (4.3 GPA)',
    country: '🇰🇷',
    max: 4.3,
    min: 0,
    pass: 2.0,
    examples: 'Some Korean Universities',
    region: 'Asia',
  },
  // Singapore
  singapore_5: {
    name: 'Singapore (5.0 CAP)',
    country: '🇸🇬',
    max: 5,
    min: 0,
    pass: 2.0,
    examples: 'NUS, NTU, SMU',
    region: 'Asia',
  },
  // Netherlands
  netherlands_10: {
    name: 'Netherlands (10-Point)',
    country: '🇳🇱',
    max: 10,
    min: 1,
    pass: 5.5,
    examples: 'Dutch Universities',
    region: 'Europe',
  },
  // Italy
  italy_30: {
    name: 'Italy (30-Point)',
    country: '🇮🇹',
    max: 30,
    min: 0,
    pass: 18,
    examples: 'Italian Universities',
    region: 'Europe',
  },
  italy_110: {
    name: 'Italy (110-Point Degree)',
    country: '🇮🇹',
    max: 110,
    min: 0,
    pass: 66,
    examples: 'Final Degree Score',
    region: 'Europe',
  },
  // Spain
  spain_10: {
    name: 'Spain (10-Point)',
    country: '🇪🇸',
    max: 10,
    min: 0,
    pass: 5,
    examples: 'Spanish Universities',
    region: 'Europe',
  },
  // Russia
  russia_5: {
    name: 'Russia (5-Point)',
    country: '🇷🇺',
    max: 5,
    min: 2,
    pass: 3,
    examples: 'Russian Universities',
    region: 'Europe',
  },
  // Poland
  poland_5: {
    name: 'Poland (5-Point)',
    country: '🇵🇱',
    max: 5,
    min: 2,
    pass: 3,
    examples: 'Polish Universities',
    region: 'Europe',
  },
  // Sweden
  sweden_vg: {
    name: 'Sweden (VG Scale)',
    country: '🇸🇪',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'Swedish Universities',
    region: 'Europe',
  },
  // Ireland
  ireland_4: {
    name: 'Ireland (4.0 GPA)',
    country: '🇮🇪',
    max: 4,
    min: 0,
    pass: 1.0,
    examples: 'Irish Universities',
    region: 'Europe',
  },
  // Switzerland
  switzerland_6: {
    name: 'Switzerland (6-Point)',
    country: '🇨🇭',
    max: 6,
    min: 1,
    pass: 4,
    examples: 'Swiss Universities',
    region: 'Europe',
  },
  // Brazil
  brazil_10: {
    name: 'Brazil (10-Point)',
    country: '🇧🇷',
    max: 10,
    min: 0,
    pass: 5,
    examples: 'Brazilian Universities',
    region: 'Latin America',
  },
  // Mexico
  mexico_10: {
    name: 'Mexico (10-Point)',
    country: '🇲🇽',
    max: 10,
    min: 0,
    pass: 6,
    examples: 'Mexican Universities',
    region: 'Latin America',
  },
  // Argentina
  argentina_10: {
    name: 'Argentina (10-Point)',
    country: '🇦🇷',
    max: 10,
    min: 0,
    pass: 4,
    examples: 'Argentine Universities',
    region: 'Latin America',
  },
  // UAE
  uae_4: {
    name: 'UAE (4.0 GPA)',
    country: '🇦🇪',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'UAE Universities',
    region: 'Middle East',
  },
  uae_percentage: {
    name: 'UAE (Percentage)',
    country: '🇦🇪',
    max: 100,
    min: 0,
    pass: 60,
    examples: 'UAE Schools',
    region: 'Middle East',
  },
  // Saudi Arabia
  saudi_5: {
    name: 'Saudi Arabia (5-Point)',
    country: '🇸🇦',
    max: 5,
    min: 0,
    pass: 2.0,
    examples: 'Saudi Universities',
    region: 'Middle East',
  },
  saudi_4: {
    name: 'Saudi Arabia (4.0 GPA)',
    country: '🇸🇦',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Some Saudi Universities',
    region: 'Middle East',
  },
  // South Africa
  south_africa_percentage: {
    name: 'South Africa (Percentage)',
    country: '🇿🇦',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'South African Universities',
    region: 'Africa',
  },
  // New Zealand
  new_zealand_gpa: {
    name: 'New Zealand (9-Point)',
    country: '🇳🇿',
    max: 9,
    min: 0,
    pass: 4,
    examples: 'NZ Universities',
    region: 'Oceania',
  },
  // Indonesia
  indonesia_4: {
    name: 'Indonesia (4.0 GPA)',
    country: '🇮🇩',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Indonesian Universities',
    region: 'Asia',
  },
  // Malaysia
  malaysia_4: {
    name: 'Malaysia (4.0 CGPA)',
    country: '🇲🇾',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Malaysian Universities',
    region: 'Asia',
  },
  // Philippines
  philippines_5: {
    name: 'Philippines (5-Point)',
    country: '🇵🇭',
    max: 1,
    min: 5,
    pass: 3,
    examples: 'Philippine Universities (1 = Best)',
    region: 'Asia',
  },
  // Thailand
  thailand_4: {
    name: 'Thailand (4.0 GPA)',
    country: '🇹🇭',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Thai Universities',
    region: 'Asia',
  },
  // Vietnam
  vietnam_10: {
    name: 'Vietnam (10-Point)',
    country: '🇻🇳',
    max: 10,
    min: 0,
    pass: 5,
    examples: 'Vietnamese Universities',
    region: 'Asia',
  },
  // Pakistan
  pakistan_4: {
    name: 'Pakistan (4.0 GPA)',
    country: '🇵🇰',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Pakistani Universities',
    region: 'Asia',
  },
  pakistan_percentage: {
    name: 'Pakistan (Percentage)',
    country: '🇵🇰',
    max: 100,
    min: 0,
    pass: 50,
    examples: 'Pakistani Schools',
    region: 'Asia',
  },
  // Bangladesh
  bangladesh_4: {
    name: 'Bangladesh (4.0 GPA)',
    country: '🇧🇩',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Bangladeshi Universities',
    region: 'Asia',
  },
  // Nigeria
  nigeria_5: {
    name: 'Nigeria (5-Point)',
    country: '🇳🇬',
    max: 5,
    min: 0,
    pass: 2.0,
    examples: 'Nigerian Universities',
    region: 'Africa',
  },
  // Egypt
  egypt_4: {
    name: 'Egypt (4.0 GPA)',
    country: '🇪🇬',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Egyptian Universities',
    region: 'Africa',
  },
  // Turkey
  turkey_4: {
    name: 'Turkey (4.0 GPA)',
    country: '🇹🇷',
    max: 4,
    min: 0,
    pass: 2.0,
    examples: 'Turkish Universities',
    region: 'Middle East',
  },
  // Israel
  israel_100: {
    name: 'Israel (100-Point)',
    country: '🇮🇱',
    max: 100,
    min: 0,
    pass: 56,
    examples: 'Israeli Universities',
    region: 'Middle East',
  },
};

type GradingSystemKey = keyof typeof gradingSystems;

// Helper to check if a system is inverted (lower is better)
const isInvertedSystem = (system: GradingSystemKey): boolean => {
  return ['germany_1to5', 'philippines_5', 'russia_5', 'poland_5'].includes(
    system,
  );
};

// Helper to check if a system is percentage-based
const isPercentageSystem = (system: GradingSystemKey): boolean => {
  return [
    'india_percentage',
    'usa_percentage',
    'uk_honours',
    'uk_percentage',
    'australia_wam',
    'canada_percentage',
    'china_100',
    'japan_100',
    'sweden_vg',
    'south_africa_percentage',
    'pakistan_percentage',
    'uae_percentage',
    'israel_100',
  ].includes(system);
};

// Conversion functions
const convertToPercentage = (
  score: number,
  system: GradingSystemKey,
): number => {
  const sys = gradingSystems[system];

  // Handle inverted scales (lower is better)
  if (system === 'germany_1to5') {
    // German grading: 1.0 = best (100%), 4.0 = pass (50%), 5.0 = fail (0%)
    if (score <= 1.0) return 100;
    if (score >= 5.0) return 0;
    return Math.max(0, ((5 - score) / 4) * 100);
  }

  if (system === 'philippines_5') {
    // Philippine grading: 1.0 = best (100%), 3.0 = pass (60%), 5.0 = fail (0%)
    if (score <= 1.0) return 100;
    if (score >= 5.0) return 0;
    return Math.max(0, ((5 - score) / 4) * 100);
  }

  if (system === 'russia_5' || system === 'poland_5') {
    // 5 = best (100%), 3 = pass (60%), 2 = fail (40%)
    return ((score - 2) / 3) * 100;
  }

  // Indian CGPA (special formula)
  if (system === 'india_10') {
    return score * 9.5; // Standard CBSE formula
  }

  // 4.0 GPA scales
  if (
    [
      'usa_4',
      'canada_4',
      'china_4',
      'japan_4',
      'uae_4',
      'saudi_4',
      'ireland_4',
      'indonesia_4',
      'malaysia_4',
      'thailand_4',
      'pakistan_4',
      'bangladesh_4',
      'egypt_4',
      'turkey_4',
    ].includes(system)
  ) {
    return (score / 4) * 100;
  }

  // 4.5 GPA scale (Korea)
  if (system === 'korea_4_5') {
    return (score / 4.5) * 100;
  }

  // 4.3 GPA scale (Korea)
  if (system === 'korea_4_3') {
    return (score / 4.3) * 100;
  }

  // 5.0 GPA scales
  if (['singapore_5', 'saudi_5', 'nigeria_5'].includes(system)) {
    return (score / 5) * 100;
  }

  // 6-point scale (Switzerland)
  if (system === 'switzerland_6') {
    // 6 = 100%, 4 = pass (50%), 1 = 0%
    return ((score - 1) / 5) * 100;
  }

  // 7-point scale (Australia)
  if (system === 'australia_7') {
    // 7 = 100%, 4 = pass (50%), 1 = 0%
    return ((score - 1) / 6) * 100;
  }

  // 9-point scale (New Zealand)
  if (system === 'new_zealand_gpa') {
    return (score / 9) * 100;
  }

  // 10-point scales
  if (
    [
      'netherlands_10',
      'brazil_10',
      'mexico_10',
      'argentina_10',
      'spain_10',
      'vietnam_10',
    ].includes(system)
  ) {
    return score * 10;
  }

  // 20-point scale (France)
  if (system === 'france_20') {
    return (score / 20) * 100;
  }

  // 30-point scale (Italy)
  if (system === 'italy_30') {
    return (score / 30) * 100;
  }

  // 110-point scale (Italy degree)
  if (system === 'italy_110') {
    return (score / 110) * 100;
  }

  // For percentage-based systems (already percentage)
  return Math.min(100, Math.max(0, score));
};

const percentageToSystem = (
  percentage: number,
  targetSystem: GradingSystemKey,
): string => {
  // Inverted scales
  if (targetSystem === 'germany_1to5') {
    if (percentage >= 100) return '1.0';
    if (percentage <= 0) return '5.0 (Fail)';
    const grade = 5 - (percentage / 100) * 4;
    return grade.toFixed(1);
  }

  if (targetSystem === 'philippines_5') {
    if (percentage >= 100) return '1.0';
    if (percentage <= 0) return '5.0 (Fail)';
    const grade = 5 - (percentage / 100) * 4;
    return grade.toFixed(1);
  }

  if (targetSystem === 'russia_5' || targetSystem === 'poland_5') {
    const grade = 2 + (percentage / 100) * 3;
    if (grade >= 4.5) return '5 (Excellent)';
    if (grade >= 3.5) return '4 (Good)';
    if (grade >= 2.5) return '3 (Satisfactory)';
    return '2 (Fail)';
  }

  // Indian CGPA
  if (targetSystem === 'india_10') {
    return (percentage / 9.5).toFixed(2);
  }

  // 4.0 GPA scales
  if (
    [
      'usa_4',
      'canada_4',
      'china_4',
      'japan_4',
      'uae_4',
      'saudi_4',
      'ireland_4',
      'indonesia_4',
      'malaysia_4',
      'thailand_4',
      'pakistan_4',
      'bangladesh_4',
      'egypt_4',
      'turkey_4',
    ].includes(targetSystem)
  ) {
    const gpa = (percentage / 100) * 4;
    return gpa.toFixed(2);
  }

  // 4.5 GPA scale (Korea)
  if (targetSystem === 'korea_4_5') {
    return ((percentage / 100) * 4.5).toFixed(2);
  }

  // 4.3 GPA scale (Korea)
  if (targetSystem === 'korea_4_3') {
    return ((percentage / 100) * 4.3).toFixed(2);
  }

  // 5.0 GPA scales
  if (['singapore_5', 'saudi_5', 'nigeria_5'].includes(targetSystem)) {
    return ((percentage / 100) * 5).toFixed(2);
  }

  // 6-point scale (Switzerland)
  if (targetSystem === 'switzerland_6') {
    const score = 1 + (percentage / 100) * 5;
    return Math.min(6, score).toFixed(1);
  }

  // 7-point scale (Australia)
  if (targetSystem === 'australia_7') {
    const score = 1 + (percentage / 100) * 6;
    return Math.min(7, Math.round(score)).toString();
  }

  // 9-point scale (New Zealand)
  if (targetSystem === 'new_zealand_gpa') {
    return ((percentage / 100) * 9).toFixed(1);
  }

  // 10-point scales
  if (
    [
      'netherlands_10',
      'brazil_10',
      'mexico_10',
      'argentina_10',
      'spain_10',
      'vietnam_10',
    ].includes(targetSystem)
  ) {
    return (percentage / 10).toFixed(1);
  }

  // 20-point scale (France)
  if (targetSystem === 'france_20') {
    return ((percentage / 100) * 20).toFixed(1);
  }

  // 30-point scale (Italy)
  if (targetSystem === 'italy_30') {
    return ((percentage / 100) * 30).toFixed(0);
  }

  // 110-point scale (Italy degree)
  if (targetSystem === 'italy_110') {
    const score = (percentage / 100) * 110;
    if (score >= 110) return '110 e Lode';
    return Math.round(score).toString();
  }

  // UK Honours Classification
  if (targetSystem === 'uk_honours') {
    if (percentage >= 70) return 'First Class Honours';
    if (percentage >= 60) return 'Upper Second Class (2:1)';
    if (percentage >= 50) return 'Lower Second Class (2:2)';
    if (percentage >= 40) return 'Third Class';
    return 'Fail';
  }

  // ECTS grades
  if (targetSystem === 'ects') {
    if (percentage >= 90) return 'A (Excellent)';
    if (percentage >= 80) return 'B (Very Good)';
    if (percentage >= 70) return 'C (Good)';
    if (percentage >= 60) return 'D (Satisfactory)';
    if (percentage >= 50) return 'E (Sufficient)';
    return 'F (Fail)';
  }

  // Default: return as percentage
  return percentage.toFixed(1) + '%';
};

export function GlobalGPAConverterTool() {
  const [score, setScore] = useState('');
  const [fromSystem, setFromSystem] = useState<GradingSystemKey>('india_10');
  const [results, setResults] = useState<
    { system: GradingSystemKey; value: string }[] | null
  >(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleConvert = () => {
    const scoreValue = parseFloat(score);
    if (isNaN(scoreValue)) {
      alert('Please enter a valid score');
      return;
    }

    const sys = gradingSystems[fromSystem];

    // Validate score range
    if (fromSystem === 'germany_1to5') {
      if (scoreValue < 1 || scoreValue > 5) {
        alert('German grades must be between 1.0 and 5.0');
        return;
      }
    } else {
      if (scoreValue < sys.min || scoreValue > sys.max) {
        alert(`Score must be between ${sys.min} and ${sys.max}`);
        return;
      }
    }

    // Convert to percentage first (as common base)
    const percentage = convertToPercentage(scoreValue, fromSystem);

    // Convert to all other systems
    const conversions: { system: GradingSystemKey; value: string }[] = [];

    (Object.keys(gradingSystems) as GradingSystemKey[]).forEach((system) => {
      if (system !== fromSystem) {
        const converted = percentageToSystem(percentage, system);
        conversions.push({ system, value: converted });
      }
    });

    // Add percentage as first result if not already a percentage system
    if (fromSystem !== 'india_percentage' && fromSystem !== 'uk_honours') {
      conversions.unshift({
        system: 'india_percentage',
        value: percentage.toFixed(2) + '%',
      });
    }

    setResults(conversions);
  };

  const handleReset = () => {
    setScore('');
    setResults(null);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Card className="border-t-4 border-t-primary shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Globe className="h-6 w-6 text-primary" />
          Global GPA Converter
        </CardTitle>
        <CardDescription>
          Convert grades between 45+ international grading systems from 30+
          countries. Essential for study abroad applications, credential
          evaluation, and immigration.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fromSystem">Your Grading System</Label>
            <Select
              value={fromSystem}
              onValueChange={(v) => setFromSystem(v as GradingSystemKey)}
            >
              <SelectTrigger
                id="fromSystem"
                className="h-12 text-base"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {(
                  Object.entries(gradingSystems) as [
                    GradingSystemKey,
                    (typeof gradingSystems)[GradingSystemKey],
                  ][]
                ).map(([key, sys]) => (
                  <SelectItem
                    key={key}
                    value={key}
                  >
                    {sys.country} {sys.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              {gradingSystems[fromSystem].examples}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="score">Enter Your Score/GPA</Label>
            <Input
              id="score"
              type="number"
              step="0.01"
              placeholder={`e.g., ${gradingSystems[fromSystem].max / 2}`}
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="h-12 text-lg"
            />
            <p className="text-xs text-muted-foreground">
              Range:{' '}
              {fromSystem === 'germany_1to5'
                ? '1.0 (best) - 5.0 (fail)'
                : `${gradingSystems[fromSystem].min} - ${gradingSystems[fromSystem].max}`}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={handleConvert}
            className="h-12 flex-1 text-lg"
          >
            <Globe className="mr-2 h-5 w-5" />
            Convert to All Systems
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            className="h-12"
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {results && (
          <div className="mt-8 space-y-4 duration-500 animate-in fade-in slide-in-from-bottom-4">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              <ArrowRight className="h-5 w-5 text-primary" />
              Conversion Results
            </h3>

            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {results.map((result, index) => {
                const sys = gradingSystems[result.system];
                return (
                  <div
                    key={result.system}
                    className="group flex items-center justify-between rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {sys.country} {sys.name}
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {result.value}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                      onClick={() => copyToClipboard(result.value, index)}
                    >
                      {copiedIndex === index ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div className="mt-6 flex items-start gap-2 rounded-lg bg-amber-50 p-4 dark:bg-amber-950">
              <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600" />
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-medium">Important Note</p>
                <p>
                  These conversions are approximations. Different universities
                  use different formulas. For official applications, use WES or
                  your university's official conversion.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
