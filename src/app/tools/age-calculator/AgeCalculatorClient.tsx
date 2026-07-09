'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gift } from 'lucide-react';

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState('');
  const [result, setResult] = useState<{
    years: number;
    months: number;
    days: number;
    totalDays: number;
    totalWeeks: number;
    totalMonths: number;
    totalHours: number;
    totalMinutes: number;
    nextBirthday: number;
    zodiacSign: string;
  } | null>(null);

  const getZodiacSign = (month: number, day: number): string => {
    const signs = [
      { sign: 'Capricorn', end: { month: 1, day: 19 } },
      { sign: 'Aquarius', end: { month: 2, day: 18 } },
      { sign: 'Pisces', end: { month: 3, day: 20 } },
      { sign: 'Aries', end: { month: 4, day: 19 } },
      { sign: 'Taurus', end: { month: 5, day: 20 } },
      { sign: 'Gemini', end: { month: 6, day: 20 } },
      { sign: 'Cancer', end: { month: 7, day: 22 } },
      { sign: 'Leo', end: { month: 8, day: 22 } },
      { sign: 'Virgo', end: { month: 9, day: 22 } },
      { sign: 'Libra', end: { month: 10, day: 22 } },
      { sign: 'Scorpio', end: { month: 11, day: 21 } },
      { sign: 'Sagittarius', end: { month: 12, day: 21 } },
    ];

    for (let i = 0; i < signs.length; i++) {
      if (
        month < signs[i].end.month ||
        (month === signs[i].end.month && day <= signs[i].end.day)
      ) {
        return signs[i].sign;
      }
    }
    return 'Capricorn';
  };

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24),
    );
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = years * 12 + months;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;

    // Next birthday
    const nextBirthday = new Date(
      today.getFullYear(),
      birth.getMonth(),
      birth.getDate(),
    );
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = Math.ceil(
      (nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    // Zodiac sign
    const zodiacSign = getZodiacSign(birth.getMonth() + 1, birth.getDate());

    setResult({
      years,
      months,
      days,
      totalDays,
      totalWeeks,
      totalMonths,
      totalHours,
      totalMinutes,
      nextBirthday: daysUntilBirthday,
      zodiacSign,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="space-y-4 pt-6">
          <div>
            <Label htmlFor="birthdate">Date of Birth</Label>
            <Input
              id="birthdate"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              max={new Date().toISOString().split('T')[0]}
              className="mt-1"
            />
          </div>
          <Button
            onClick={calculateAge}
            className="w-full"
            size="lg"
          >
            Calculate My Age
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          {/* Main Age Display */}
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                {result.years} years, {result.months} months, {result.days} days
              </div>
              <p className="text-muted-foreground">
                Your exact age as of today
              </p>
            </CardContent>
          </Card>

          {/* Detailed Stats */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card className="text-center">
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">
                  {result.totalMonths.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Months
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">
                  {result.totalWeeks.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Total Weeks</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">
                  {result.totalDays.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Total Days</div>
              </CardContent>
            </Card>
            <Card className="bg-pink-50 text-center dark:bg-pink-950">
              <CardContent className="pt-4">
                <Gift className="mx-auto mb-1 h-5 w-5 text-pink-500" />
                <div className="text-2xl font-bold text-pink-600">
                  {result.nextBirthday}
                </div>
                <div className="text-xs text-muted-foreground">
                  Days to Birthday
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Card className="text-center">
              <CardContent className="pt-4">
                <div className="text-xl font-bold">
                  {result.totalHours.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Total Hours</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-4">
                <div className="text-xl font-bold">
                  {result.totalMinutes.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">
                  Total Minutes
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-2 bg-indigo-50 text-center dark:bg-indigo-950 md:col-span-1">
              <CardContent className="pt-4">
                <div className="text-xl font-bold text-indigo-600">
                  {result.zodiacSign}
                </div>
                <div className="text-xs text-muted-foreground">Zodiac Sign</div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
