'use client';

import { useState } from 'react';
import { FileSearch, CheckCircle, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

const commonKeywords = [
  'python',
  'javascript',
  'java',
  'sql',
  'react',
  'node',
  'aws',
  'git',
  'agile',
  'machine learning',
  'data analysis',
  'communication',
  'leadership',
  'problem solving',
  'teamwork',
  'project management',
  'customer service',
  'sales',
  'marketing',
  'excel',
  'presentation',
  'time management',
  'analytical',
  'strategic',
  'collaboration',
  'innovation',
  'attention to detail',
  'results-driven',
  'self-motivated',
];

export default function ATSCheckerClient() {
  const [resume, setResume] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState<{
    score: number;
    found: string[];
    missing: string[];
    suggestions: string[];
  } | null>(null);
  const content = toolsSEOContent['ats-checker'];

  const analyzeResume = () => {
    const resumeLower = resume.toLowerCase();
    const jdLower = jobDesc.toLowerCase();

    // Extract keywords from job description
    const jdKeywords = commonKeywords.filter((kw) => jdLower.includes(kw));
    const found = jdKeywords.filter((kw) => resumeLower.includes(kw));
    const missing = jdKeywords.filter((kw) => !resumeLower.includes(kw));

    // Calculate score
    const score =
      jdKeywords.length > 0
        ? Math.round((found.length / jdKeywords.length) * 100)
        : 0;

    // Generate suggestions
    const suggestions = [];
    if (missing.length > 0)
      suggestions.push(`Add these keywords: ${missing.slice(0, 5).join(', ')}`);
    if (!resumeLower.includes('experience'))
      suggestions.push('Include a clear "Experience" section');
    if (!resumeLower.includes('education'))
      suggestions.push('Include an "Education" section');
    if (!resumeLower.includes('skills'))
      suggestions.push('Add a "Skills" section with relevant keywords');
    if (resume.split(' ').length < 200)
      suggestions.push('Resume seems short - add more details');

    setResult({ score, found, missing, suggestions });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <FileSearch className="mr-1 h-3 w-3" />
            Resume Tool
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            ATS Resume Checker
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Check if your resume has the right keywords for the job.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Paste Your Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste your entire resume text here..."
                className="min-h-[250px]"
                value={resume}
                onChange={(e) => setResume(e.target.value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Paste Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Paste the job description you're applying for..."
                className="min-h-[250px]"
                value={jobDesc}
                onChange={(e) => setJobDesc(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>

        <Button
          className="mt-6 w-full"
          size="lg"
          onClick={analyzeResume}
          disabled={!resume || !jobDesc}
        >
          Analyze Resume
        </Button>

        {result && (
          <div className="mt-8 space-y-6">
            <Card
              className={
                result.score >= 70
                  ? 'border-green-200 dark:border-green-800'
                  : result.score >= 40
                    ? 'border-yellow-200 dark:border-yellow-800'
                    : 'border-red-200 dark:border-red-800'
              }
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`mb-2 text-6xl font-bold ${result.score >= 70 ? 'text-green-600' : result.score >= 40 ? 'text-yellow-600' : 'text-red-600'}`}
                >
                  {result.score}%
                </div>
                <p className="text-lg font-medium">ATS Match Score</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {result.score >= 70
                    ? 'Good match! Your resume aligns well.'
                    : result.score >= 40
                      ? 'Fair match. Add more relevant keywords.'
                      : 'Low match. Consider optimizing your resume.'}
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    Keywords Found ({result.found.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.found.map((kw, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      >
                        {kw}
                      </Badge>
                    ))}
                  </div>
                  {result.found.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No matching keywords found
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <AlertTriangle className="h-5 w-5" />
                    Missing Keywords ({result.missing.length})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.missing.map((kw, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-red-200 text-red-600 dark:border-red-800"
                      >
                        {kw}
                      </Badge>
                    ))}
                  </div>
                  {result.missing.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      All keywords covered!
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {result.suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-primary">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="ats-checker"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
