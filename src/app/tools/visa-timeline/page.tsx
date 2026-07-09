'use client';

import { useState } from 'react';
import { Plane, Calendar, Clock, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

const visaData = [
  {
    country: 'USA (F1)',
    processing: '3-5 months',
    interview: '2-8 weeks',
    biometrics: 'At interview',
    total: '4-6 months',
    tip: 'Apply as soon as you get I-20',
  },
  {
    country: 'UK (Student)',
    processing: '3-4 weeks',
    interview: 'Usually not required',
    biometrics: '1-2 weeks',
    total: '4-6 weeks',
    tip: 'Apply after CAS issued',
  },
  {
    country: 'Canada (Study Permit)',
    processing: '8-16 weeks',
    interview: 'Sometimes',
    biometrics: '2 weeks',
    total: '3-5 months',
    tip: 'Apply immediately after LOA',
  },
  {
    country: 'Germany (Student)',
    processing: '4-12 weeks',
    interview: 'Required',
    biometrics: 'At interview',
    total: '2-4 months',
    tip: 'Book appointment early',
  },
  {
    country: 'Australia (500)',
    processing: '4-6 weeks',
    interview: 'Rare',
    biometrics: 'Not required',
    total: '1-2 months',
    tip: 'Apply with CoE issued',
  },
  {
    country: 'Ireland (Study)',
    processing: '8 weeks',
    interview: 'Not required',
    biometrics: 'After arrival',
    total: '2-3 months',
    tip: 'Need €10,000 proof',
  },
  {
    country: 'Netherlands (MVV)',
    processing: '2-4 weeks',
    interview: 'Not required',
    biometrics: 'At collection',
    total: '4-6 weeks',
    tip: 'University sponsors MVV',
  },
  {
    country: 'France (Student)',
    processing: '2-3 weeks',
    interview: 'Required',
    biometrics: 'At interview',
    total: '4-8 weeks',
    tip: 'Campus France mandatory',
  },
  {
    country: 'Switzerland (D Visa)',
    processing: '8-12 weeks',
    interview: 'Required',
    biometrics: 'At interview',
    total: '3-4 months',
    tip: 'Apply at canton level first',
  },
  {
    country: 'Sweden (Residence)',
    processing: '2-5 months',
    interview: 'At embassy',
    biometrics: 'At embassy',
    total: '3-6 months',
    tip: 'Health insurance mandatory',
  },
  {
    country: 'New Zealand',
    processing: '4-8 weeks',
    interview: 'Not usually',
    biometrics: 'Required',
    total: '2-3 months',
    tip: 'Show funds for full duration',
  },
  {
    country: 'Denmark',
    processing: '2 months',
    interview: 'Biometrics only',
    biometrics: 'VFS/Embassy',
    total: '2-3 months',
    tip: 'ST1 form needed',
  },
  {
    country: 'Singapore (Student Pass)',
    processing: '2-4 weeks',
    interview: 'No',
    biometrics: 'After arrival',
    total: '1 month',
    tip: 'SOLAR application system',
  },
  {
    country: 'South Korea (D-2)',
    processing: '2-4 weeks',
    interview: 'Sometimes',
    biometrics: 'No',
    total: '1 month',
    tip: 'Need standard admission letter',
  },
  {
    country: 'Japan (Student)',
    processing: '2-3 months',
    interview: 'No',
    biometrics: 'No',
    total: '3-4 months',
    tip: 'COE takes longest time',
  },
  {
    country: 'Italy (Student)',
    processing: '4-8 weeks',
    interview: 'Required',
    biometrics: 'At interview',
    total: '2-3 months',
    tip: 'Universitaly pre-enrollment first',
  },
  {
    country: 'Spain (Student)',
    processing: '1-3 months',
    interview: 'Required',
    biometrics: 'At interview',
    total: '2-4 months',
    tip: 'Police clearance required',
  },
];

export default function VisaTimelinePage() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [startDate, setStartDate] = useState('');
  const [result, setResult] = useState<{
    country: string;
    dates: { step: string; date: string }[];
  } | null>(null);
  const content = toolsSEOContent['visa-timeline'];

  const calculateTimeline = () => {
    if (!selectedCountry || !startDate) return;
    const visa = visaData.find((v) => v.country === selectedCountry);
    if (!visa) return;

    const start = new Date(startDate);
    const dates = [
      { step: 'Start Preparation', date: formatDate(start) },
      { step: 'Gather Documents', date: formatDate(addWeeks(start, 2)) },
      { step: 'Submit Application', date: formatDate(addWeeks(start, 4)) },
      { step: 'Biometrics/Interview', date: formatDate(addWeeks(start, 6)) },
      { step: 'Expected Decision', date: formatDate(addWeeks(start, 12)) },
      { step: 'Prepare for Travel', date: formatDate(addWeeks(start, 14)) },
    ];
    setResult({ country: selectedCountry, dates });
  };

  const addWeeks = (date: Date, weeks: number) => {
    const d = new Date(date);
    d.setDate(d.getDate() + weeks * 7);
    return d;
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Plane className="mr-1 h-3 w-3" />
            Planning Tool
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Visa Timeline Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Plan your student visa application with country-specific processing
            times.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Calculate Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Select Country</Label>
                  <select
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">Choose destination</option>
                    {visaData.map((v) => (
                      <option
                        key={v.country}
                        value={v.country}
                      >
                        {v.country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Program Start Date</Label>
                  <input
                    type="date"
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <Button
                  onClick={calculateTimeline}
                  className="w-full"
                >
                  Calculate Timeline
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {result ? (
              <Card>
                <CardHeader>
                  <CardTitle>Your {result.country} Visa Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {result.dates.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border p-3"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{d.step}</p>
                          <p className="text-sm text-muted-foreground">
                            {d.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <Globe className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold">
                  Select Your Destination
                </h2>
                <p className="text-muted-foreground">
                  Choose a country and your program start date to see timeline.
                </p>
              </Card>
            )}

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Processing Times by Country
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Country</th>
                        <th className="border p-2 text-left">Processing</th>
                        <th className="border p-2 text-left">Total Time</th>
                        <th className="border p-2 text-left">Tip</th>
                      </tr>
                    </thead>
                    <tbody>
                      {visaData.map((v, i) => (
                        <tr
                          key={i}
                          className="hover:bg-muted/50"
                        >
                          <td className="border p-2 font-medium">
                            {v.country}
                          </td>
                          <td className="border p-2">{v.processing}</td>
                          <td className="border p-2">{v.total}</td>
                          <td className="border p-2 text-muted-foreground">
                            {v.tip}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="visa-timeline"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
