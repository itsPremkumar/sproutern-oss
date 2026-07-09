'use client';

import { useState } from 'react';
import { ClipboardCheck, CheckCircle, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

const companyChecklists: Record<string, string[]> = {
  TCS: [
    'Complete TCS NQT registration',
    'Practice aptitude (Quants, Verbal, Reasoning)',
    'Learn TCS coding patterns',
    'Prepare for email writing test',
    'Study TCS interview questions',
    'Research TCS work culture',
    'Prepare HR questions',
  ],
  Infosys: [
    'Register on Infosys careers',
    'Complete InfyTQ certification',
    'Practice Infosys coding patterns',
    'Prepare technical MCQs',
    'Study Infosys values',
    'Prepare for HR round',
  ],
  Wipro: [
    'Complete Wipro NLTH registration',
    'Practice aptitude and verbal',
    'Prepare coding in preferred language',
    'Study Wipro interview process',
    'Research Wipro projects',
    'Prepare HR answers',
  ],
  Cognizant: [
    'Register for Cognizant GenC',
    'Complete GenC assessment prep',
    'Practice coding challenges',
    'Prepare for technical round',
    'Study Cognizant culture',
    'Prepare HR round',
  ],
  Accenture: [
    'Apply on Accenture careers',
    'Complete cognitive assessment prep',
    'Practice coding and debugging',
    'Prepare technical interview',
    'Study Accenture services',
    'Prepare HR round',
  ],
  Amazon: [
    'Create Amazon jobs profile',
    'Study Leadership Principles',
    'Practice 150+ LeetCode problems',
    'Study System Design basics',
    'Prepare behavioral stories (STAR)',
    'Mock interviews',
  ],
  Google: [
    'Apply via Google careers',
    'Solve 200+ LeetCode (Medium/Hard)',
    'Study System Design thoroughly',
    'Prepare behavioral (Googleyness)',
    'Practice whiteboard coding',
    'Mock technical interviews',
  ],
  Microsoft: [
    'Apply via Microsoft careers',
    'Solve 150+ LeetCode problems',
    'Study System Design',
    'Prepare behavioral stories',
    'Practice coding on whiteboard',
    'Research Microsoft products',
  ],
};

// International / FAANG additions
const internationalChecklist = [
  'Research visa sponsorship policy',
  'Prepare timezone flexibility for interviews',
  'Test video conferencing tools (Zoom, Teams)',
  'Prepare behavioral stories using STAR method',
  'Research company culture and values',
  'Practice talking through coding problems out loud',
  'Prepare "Why this company?" answer',
  'Have questions ready about team/role',
];

const generalChecklist = [
  'Update resume (ATS-optimized)',
  'Prepare 2-minute self-introduction',
  'Research company thoroughly',
  'Prepare questions to ask interviewer',
  'Practice common HR questions',
  'Prepare explain your projects',
  'Review your strengths/weaknesses',
  'Plan interview day attire',
  'Test video call setup (virtual)',
  'Get good sleep night before',
];

export default function InterviewChecklistPage() {
  const [company, setCompany] = useState('');
  const [customCompany, setCustomCompany] = useState('');
  const [checklist, setChecklist] = useState<
    { item: string; checked: boolean }[]
  >([]);

  const content = toolsSEOContent['interview-checklist'];

  const generateChecklist = () => {
    const companyName = company || customCompany;
    const companyItems = companyChecklists[company] || [];
    const allItems = [...generalChecklist, ...companyItems].map((item) => ({
      item,
      checked: false,
    }));
    setChecklist(allItems);
  };

  const toggleItem = (index: number) => {
    setChecklist((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const progress =
    checklist.length > 0
      ? Math.round(
          (checklist.filter((c) => c.checked).length / checklist.length) * 100,
        )
      : 0;

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <ClipboardCheck className="mr-1 h-3 w-3" />
            Preparation Tool
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Interview Prep Checklist
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Get a company-specific preparation checklist for your upcoming
            interview.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Select Company
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Popular Companies</Label>
                  <select
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                      setCustomCompany('');
                    }}
                  >
                    <option value="">Choose company</option>
                    {Object.keys(companyChecklists).map((c) => (
                      <option
                        key={c}
                        value={c}
                      >
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  - OR -
                </div>
                <div>
                  <Label>Custom Company</Label>
                  <Input
                    placeholder="Enter company name"
                    value={customCompany}
                    onChange={(e) => {
                      setCustomCompany(e.target.value);
                      setCompany('');
                    }}
                  />
                </div>
                <Button
                  onClick={generateChecklist}
                  className="w-full"
                >
                  Generate Checklist
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {checklist.length > 0 ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Interview Checklist</CardTitle>
                    <Badge variant={progress === 100 ? 'default' : 'outline'}>
                      {progress}% Complete
                    </Badge>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div
                      className="h-2 rounded-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {checklist.map((item, i) => (
                      <div
                        key={i}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${item.checked ? 'border-green-200 bg-green-50 dark:bg-green-950' : 'hover:bg-muted/50'}`}
                        onClick={() => toggleItem(i)}
                      >
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded border ${item.checked ? 'border-green-600 bg-green-600' : 'border-gray-300'}`}
                        >
                          {item.checked && (
                            <CheckCircle className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span
                          className={
                            item.checked
                              ? 'text-muted-foreground line-through'
                              : ''
                          }
                        >
                          {item.item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="p-8 text-center">
                <ClipboardCheck className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold">
                  Get Your Checklist
                </h2>
                <p className="text-muted-foreground">
                  Select a company to get a personalized interview preparation
                  checklist.
                </p>
              </Card>
            )}
          </div>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="interview-checklist"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
