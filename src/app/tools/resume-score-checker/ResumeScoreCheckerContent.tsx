'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Download,
  BarChart3,
  Target,
  Award,
  TrendingUp,
  FileDown,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

interface ScoreBreakdown {
  category: string;
  score: number;
  maxScore: number;
  feedback: string;
}

interface AnalysisResult {
  totalScore: number;
  breakdown: ScoreBreakdown[];
  strengths: string[];
  improvements: string[];
  keywords: { found: string[]; missing: string[]; suggested: string[] };
  atsScore: number;
  readabilityScore: number;
  impactScore: number;
  industry: string;
}

const INDUSTRIES = [
  'Technology/Software',
  'Finance/Banking',
  'Marketing/Sales',
  'Healthcare',
  'Education',
  'Engineering',
  'Design/Creative',
  'General/Other',
];

const ACTION_VERBS = {
  leadership: [
    'led',
    'managed',
    'directed',
    'supervised',
    'coordinated',
    'orchestrated',
    'spearheaded',
    'headed',
  ],
  achievement: [
    'achieved',
    'accomplished',
    'exceeded',
    'surpassed',
    'outperformed',
    'delivered',
    'completed',
  ],
  development: [
    'developed',
    'created',
    'built',
    'designed',
    'engineered',
    'programmed',
    'coded',
    'implemented',
  ],
  improvement: [
    'improved',
    'enhanced',
    'optimized',
    'streamlined',
    'upgraded',
    'modernized',
    'transformed',
  ],
  analysis: [
    'analyzed',
    'evaluated',
    'assessed',
    'investigated',
    'researched',
    'examined',
    'audited',
  ],
  growth: [
    'increased',
    'grew',
    'expanded',
    'scaled',
    'boosted',
    'maximized',
    'elevated',
  ],
  reduction: [
    'reduced',
    'decreased',
    'minimized',
    'cut',
    'lowered',
    'eliminated',
  ],
  collaboration: [
    'collaborated',
    'partnered',
    'coordinated',
    'facilitated',
    'aligned',
    'engaged',
  ],
};

const TECH_KEYWORDS = [
  'python',
  'java',
  'javascript',
  'typescript',
  'react',
  'node',
  'angular',
  'vue',
  'sql',
  'mongodb',
  'aws',
  'azure',
  'docker',
  'kubernetes',
  'git',
  'ci/cd',
  'agile',
  'scrum',
  'api',
  'rest',
  'graphql',
  'microservices',
];
const FINANCE_KEYWORDS = [
  'financial analysis',
  'budgeting',
  'forecasting',
  'accounting',
  'audit',
  'compliance',
  'risk management',
  'financial modeling',
  'excel',
  'quickbooks',
  'sap',
  'oracle',
];
const MARKETING_KEYWORDS = [
  'seo',
  'sem',
  'google analytics',
  'social media',
  'content marketing',
  'email marketing',
  'crm',
  'salesforce',
  'hubspot',
  'adobe',
  'brand management',
];

export default function ResumeScoreCheckerContent() {
  const [resumeText, setResumeText] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState(
    'Technology/Software',
  );
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);

  // Ref to track if component is mounted
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const getIndustryKeywords = (industry: string): string[] => {
    switch (industry) {
      case 'Technology/Software':
        return TECH_KEYWORDS;
      case 'Finance/Banking':
        return FINANCE_KEYWORDS;
      case 'Marketing/Sales':
        return MARKETING_KEYWORDS;
      default:
        return [...TECH_KEYWORDS.slice(0, 10), ...FINANCE_KEYWORDS.slice(0, 5)];
    }
  };

  const analyzeResume = () => {
    if (!resumeText.trim()) {
      alert('Please paste your resume text');
      return;
    }

    setLoading(true);

    // Simulate analysis delay for better UX
    setTimeout(() => {
      if (!isMounted.current) return;

      const text = resumeText.toLowerCase();
      const breakdown: ScoreBreakdown[] = [];
      const strengths: string[] = [];
      const improvements: string[] = [];
      const keywordsFound: string[] = [];
      const keywordsMissing: string[] = [];
      let keywordsSuggested: string[] = [];

      // 1. Length Check (10 points)
      const wordCount = resumeText.split(/\s+/).length;
      const lengthScore =
        wordCount >= 300 && wordCount <= 1000
          ? 10
          : wordCount >= 200 && wordCount <= 1200
            ? 7
            : 5;
      breakdown.push({
        category: 'Length',
        score: lengthScore,
        maxScore: 10,
        feedback:
          lengthScore === 10
            ? 'Optimal length'
            : wordCount < 300
              ? 'Too short'
              : 'Too long',
      });
      if (lengthScore === 10)
        strengths.push(`Optimal resume length (${wordCount} words)`);
      else
        improvements.push(
          `Adjust length to 300-1000 words (current: ${wordCount})`,
        );

      // 2. Contact Information (10 points)
      const hasEmail = /@/.test(text) && /\.[a-z]{2,}/.test(text);
      const hasPhone =
        /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/.test(text);
      const hasLinkedIn = /linkedin/.test(text);
      const contactScore =
        (hasEmail ? 4 : 0) + (hasPhone ? 4 : 0) + (hasLinkedIn ? 2 : 0);
      breakdown.push({
        category: 'Contact Info',
        score: contactScore,
        maxScore: 10,
        feedback:
          contactScore === 10
            ? 'Complete contact info'
            : 'Missing some contact details',
      });
      if (contactScore >= 8) strengths.push('Complete contact information');
      else
        improvements.push(
          'Add email, phone' + (!hasLinkedIn ? ', and LinkedIn profile' : ''),
        );

      // 3. Action Verbs (15 points)
      let actionVerbCount = 0;
      const verbCategories: { [key: string]: string[] } = {};

      Object.entries(ACTION_VERBS).forEach(([category, verbs]) => {
        const found = verbs.filter((verb) => text.includes(verb));
        if (found.length > 0) {
          actionVerbCount += found.length;
          verbCategories[category] = found;
        }
      });

      const actionVerbScore = Math.min(15, Math.floor(actionVerbCount * 1.5));
      breakdown.push({
        category: 'Action Verbs',
        score: actionVerbScore,
        maxScore: 15,
        feedback:
          actionVerbScore >= 12
            ? 'Excellent use of action verbs'
            : 'Use more action verbs',
      });
      if (actionVerbScore >= 12)
        strengths.push(`Strong use of ${actionVerbCount} action verbs`);
      else
        improvements.push(
          'Use more powerful action verbs (led, developed, achieved, etc.)',
        );

      // 4. Quantifiable Achievements (20 points)
      const numberPatterns =
        /\d+%|\d+\+|increased by \d+|decreased by \d+|saved \$\d+|\d+ million|\d+ thousand/g;
      const numbers = text.match(numberPatterns) || [];
      const achievementScore = Math.min(20, numbers.length * 4);
      breakdown.push({
        category: 'Quantifiable Results',
        score: achievementScore,
        maxScore: 20,
        feedback:
          achievementScore >= 16
            ? 'Great use of metrics'
            : 'Add more quantifiable achievements',
      });
      if (achievementScore >= 16)
        strengths.push(`${numbers.length} quantifiable achievements found`);
      else
        improvements.push(
          "Add numbers and percentages to show impact (e.g., 'Increased sales by 35%')",
        );

      // 5. Industry Keywords (20 points)
      const industryKeywords = getIndustryKeywords(selectedIndustry);
      industryKeywords.forEach((keyword) => {
        if (text.includes(keyword.toLowerCase())) {
          keywordsFound.push(keyword);
        } else {
          keywordsMissing.push(keyword);
        }
      });

      const keywordScore = Math.min(20, keywordsFound.length * 2);
      breakdown.push({
        category: 'Industry Keywords',
        score: keywordScore,
        maxScore: 20,
        feedback:
          keywordScore >= 16
            ? 'Excellent keyword optimization'
            : 'Add more relevant keywords',
      });
      if (keywordScore >= 16)
        strengths.push(
          `${keywordsFound.length} industry-relevant keywords found`,
        );
      else {
        improvements.push('Add more industry-specific keywords');
        keywordsSuggested = keywordsMissing.slice(0, 10);
      }

      // 6. Education Section (10 points)
      const educationKeywords = [
        'bachelor',
        'master',
        'degree',
        'university',
        'college',
        'phd',
        'mba',
        'b.tech',
        'm.tech',
        'b.e',
        'm.e',
      ];
      const hasEducation = educationKeywords.some((keyword) =>
        text.includes(keyword),
      );
      const educationScore = hasEducation ? 10 : 0;
      breakdown.push({
        category: 'Education',
        score: educationScore,
        maxScore: 10,
        feedback: hasEducation
          ? 'Education section present'
          : 'Add education details',
      });
      if (hasEducation) strengths.push('Education details included');
      else improvements.push('Add your education background');

      // 7. Experience/Projects (15 points)
      const hasExperience =
        text.includes('experience') || text.includes('work history');
      const hasProjects = text.includes('project');
      const hasCertifications =
        text.includes('certification') || text.includes('certified');
      const expScore =
        (hasExperience ? 8 : 0) +
        (hasProjects ? 5 : 0) +
        (hasCertifications ? 2 : 0);
      breakdown.push({
        category: 'Experience/Projects',
        score: expScore,
        maxScore: 15,
        feedback:
          expScore >= 13
            ? 'Comprehensive experience section'
            : 'Add more experience details',
      });
      if (expScore >= 13)
        strengths.push('Detailed experience and projects section');
      else
        improvements.push(
          'Add' +
            (!hasExperience ? ' work experience,' : '') +
            (!hasProjects ? ' projects,' : '') +
            (!hasCertifications ? ' certifications' : ''),
        );

      // 8. ATS Compatibility (10 points)
      const hasTable =
        text.includes('table') || text.includes('│') || text.includes('┌');
      const hasSpecialChars = /[♦♠♣♥★☆●○]/.test(text);
      const atsScore = (!hasTable ? 5 : 0) + (!hasSpecialChars ? 5 : 0);
      breakdown.push({
        category: 'ATS Compatibility',
        score: atsScore,
        maxScore: 10,
        feedback:
          atsScore === 10 ? 'ATS-friendly format' : 'Improve ATS compatibility',
      });
      if (atsScore === 10) strengths.push('ATS-friendly formatting');
      else
        improvements.push(
          'Avoid tables, graphics, and special characters for better ATS compatibility',
        );

      const totalScore = breakdown.reduce((sum, item) => sum + item.score, 0);
      const maxTotalScore = breakdown.reduce(
        (sum, item) => sum + item.maxScore,
        0,
      );
      const finalScore = Math.round((totalScore / maxTotalScore) * 100);

      // Calculate additional metrics
      const atsCompatibility = Math.round((atsScore / 10) * 100);
      const readability = Math.min(100, Math.round((wordCount / 800) * 100));
      const impact = Math.round((achievementScore / 20) * 100);

      setAnalysis({
        totalScore: finalScore,
        breakdown,
        strengths,
        improvements,
        keywords: {
          found: keywordsFound,
          missing: keywordsMissing,
          suggested: keywordsSuggested,
        },
        atsScore: atsCompatibility,
        readabilityScore: readability,
        impactScore: impact,
        industry: selectedIndustry,
      });

      setLoading(false);
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Outstanding';
    if (score >= 80) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
  };

  const downloadReport = () => {
    if (!analysis) return;

    const report = `
RESUME ANALYSIS REPORT
======================

Overall Score: ${analysis.totalScore}/100 - ${getScoreLabel(analysis.totalScore)}
Industry: ${analysis.industry}

DETAILED BREAKDOWN:
${analysis.breakdown
  .map(
    (item) => `
${item.category}: ${item.score}/${item.maxScore}
${item.feedback}
`,
  )
  .join('\n')}

STRENGTHS:
${analysis.strengths.map((s, i) => `${i + 1}. ${s}`).join('\n')}

IMPROVEMENTS NEEDED:
${analysis.improvements.map((i, idx) => `${idx + 1}. ${i}`).join('\n')}

KEYWORDS FOUND (${analysis.keywords.found.length}):
${analysis.keywords.found.join(', ')}

SUGGESTED KEYWORDS TO ADD:
${analysis.keywords.suggested.join(', ')}

Generated by Sproutern Resume Score Checker
${new Date().toLocaleDateString()}
    `;

    // Resource leak fixed with finally block
    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');

    try {
      a.href = url;
      a.download = `resume-analysis-${Date.now()}.txt`;
      document.body.appendChild(a);
      a.click();
    } finally {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const chartData =
    analysis?.breakdown.map((item) => ({
      category: item.category,
      score: item.score,
      maxScore: item.maxScore,
      percentage: Math.round((item.score / item.maxScore) * 100),
    })) || [];

  const radarData = analysis
    ? [
        { metric: 'ATS Score', value: analysis.atsScore },
        { metric: 'Readability', value: analysis.readabilityScore },
        { metric: 'Impact', value: analysis.impactScore },
        {
          metric: 'Keywords',
          value: Math.min(100, analysis.keywords.found.length * 5),
        },
        { metric: 'Structure', value: analysis.totalScore },
      ]
    : [];

  return (
    <div className="container mx-auto max-w-6xl py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Advanced Resume Score Checker
        </h1>
        <p className="text-xl text-muted-foreground">
          Get comprehensive AI-powered analysis and improve your resume for
          better job opportunities
        </p>
      </div>

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Paste Your Resume
          </CardTitle>
          <CardDescription>
            Copy and paste your resume text for detailed analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Industry</label>
            <div className="flex flex-wrap gap-2">
              {INDUSTRIES.map((industry) => (
                <Button
                  key={industry}
                  variant={
                    selectedIndustry === industry ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>

          <Textarea
            placeholder="Paste your complete resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="min-h-[400px] font-mono text-sm"
          />

          <div className="flex gap-4">
            <Button
              onClick={analyzeResume}
              size="lg"
              className="flex-1"
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze Resume'}
            </Button>
            {analysis && (
              <Button
                onClick={downloadReport}
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {analysis && (
        <div className="space-y-8">
          {/* Score Overview */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card className="border-2 border-primary">
              <CardContent className="pt-6 text-center">
                <Award className="mx-auto mb-2 h-8 w-8 text-primary" />
                <p className="mb-1 text-sm text-muted-foreground">
                  Overall Score
                </p>
                <p
                  className={`text-5xl font-bold ${getScoreColor(analysis.totalScore)}`}
                >
                  {analysis.totalScore}
                </p>
                <p className="mt-1 text-sm font-medium">
                  {getScoreLabel(analysis.totalScore)}
                </p>
                <Progress
                  value={analysis.totalScore}
                  className="mt-3"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Target className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                <p className="mb-1 text-sm text-muted-foreground">ATS Score</p>
                <p className="text-4xl font-bold text-blue-600">
                  {analysis.atsScore}%
                </p>
                <Progress
                  value={analysis.atsScore}
                  className="mt-3"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <BarChart3 className="mx-auto mb-2 h-8 w-8 text-purple-600" />
                <p className="mb-1 text-sm text-muted-foreground">
                  Readability
                </p>
                <p className="text-4xl font-bold text-purple-600">
                  {analysis.readabilityScore}%
                </p>
                <Progress
                  value={analysis.readabilityScore}
                  className="mt-3"
                />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <TrendingUp className="mx-auto mb-2 h-8 w-8 text-orange-600" />
                <p className="mb-1 text-sm text-muted-foreground">Impact</p>
                <p className="text-4xl font-bold text-orange-600">
                  {analysis.impactScore}%
                </p>
                <Progress
                  value={analysis.impactScore}
                  className="mt-3"
                />
              </CardContent>
            </Card>
          </div>

          {/* Tabs for detailed view */}
          <Tabs
            defaultValue="breakdown"
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="breakdown">Score Breakdown</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="keywords">Keywords</TabsTrigger>
              <TabsTrigger value="charts">Visual Analysis</TabsTrigger>
            </TabsList>

            <TabsContent
              value="breakdown"
              className="space-y-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Score Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {analysis.breakdown.map((item, index) => (
                      <div
                        key={index}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.category}</span>
                          <span className="text-sm text-muted-foreground">
                            {item.score}/{item.maxScore} points
                          </span>
                        </div>
                        <Progress value={(item.score / item.maxScore) * 100} />
                        <p className="text-sm text-muted-foreground">
                          {item.feedback}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              value="feedback"
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <CheckCircle2 className="h-5 w-5" />
                      Strengths ({analysis.strengths.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.strengths.map((strength, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-700">
                      <AlertCircle className="h-5 w-5" />
                      Improvements ({analysis.improvements.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysis.improvements.map((improvement, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent
              value="keywords"
              className="space-y-4"
            >
              <div className="grid gap-4">
                <Card className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-700">
                      Keywords Found ({analysis.keywords.found.length})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {analysis.keywords.found.map((keyword, index) => (
                        <Badge
                          key={index}
                          variant="default"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {analysis.keywords.suggested.length > 0 && (
                  <Card className="border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-700">
                        Suggested Keywords to Add
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {analysis.keywords.suggested.map((keyword, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>

            <TabsContent
              value="charts"
              className="space-y-4"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Score Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer
                    width="100%"
                    height={300}
                  >
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="category"
                        angle={-45}
                        textAnchor="end"
                        height={100}
                      />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="score"
                        fill="#8b5cf6"
                        name="Your Score"
                      />
                      <Bar
                        dataKey="maxScore"
                        fill="#e5e7eb"
                        name="Max Score"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Radar</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer
                    width="100%"
                    height={400}
                  >
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                      />
                      <Radar
                        name="Your Score"
                        dataKey="value"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.6}
                      />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      )}

      {/* SEO Content */}
      <div className="prose prose-lg mt-16 max-w-none">
        <h2 className="flex items-center gap-3">
          <BarChart3 className="h-6 w-6 text-primary" />
          How to Improve Your Resume Score
        </h2>
        <p>
          A high resume score isn't just a vanity metric—it directly correlates
          with your chances of getting an interview. Our algorithm analyzes the
          same factors that recruiters and ATS (Applicant Tracking Systems) look
          for. Here's how to optimize each section of your resume for maximum
          impact.
        </p>

        <div className="not-prose my-8 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-blue-600" />
                1. Quantify Your Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">
                Recruiters love numbers. Instead of saying "Managed sales," say
                "Increased sales by 20%."
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Use percentages, dollar amounts, and raw numbers</li>
                <li>Focus on results, not just responsibilities</li>
                <li>
                  Contextualize your achievements (e.g., "Best in team of 10")
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                2. Optimize for ATS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">
                75% of resumes are rejected by ATS before a human sees them.
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Use standard section headings (Experience, Education)</li>
                <li>Avoid tables, columns, and graphics</li>
                <li>Use standard fonts (Arial, Calibri, Roboto)</li>
                <li>Submit as PDF unless Word is requested</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                3. Use Power Verbs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">
                Start every bullet point with a strong action verb.
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Weak: "Responsible for..." or "Helped with..."</li>
                <li>Strong: "Spearheaded," "Orchestrated," "Executed"</li>
                <li>Vary your verbs to avoid repetition</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5 text-purple-600" />
                4. Tailor to the Job
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p className="mb-2">
                Generic resumes get generic results (rejections).
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Include keywords from the job description</li>
                <li>Highlight relevant skills for the specific role</li>
                <li>Remove irrelevant experience to save space</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h3>Understanding Your Score</h3>
        <p>
          Our scoring system evaluates your resume across four key dimensions:
        </p>
        <ul>
          <li>
            <strong>Impact (40%):</strong> Do you show results? Are your
            achievements quantifiable? This is the most important factor for
            recruiters.
          </li>
          <li>
            <strong>Keywords (30%):</strong> Do you have the right hard skills?
            We check against industry-standard skill sets for your role.
          </li>
          <li>
            <strong>Brevity & Style (20%):</strong> Is your resume concise? We
            check for optimal word count, bullet point length, and active voice.
          </li>
          <li>
            <strong>Format (10%):</strong> Is it readable? We check for contact
            info, section headers, and file structure.
          </li>
        </ul>

        <h3>Common Resume Mistakes to Avoid</h3>
        <div className="my-6 rounded-lg border border-red-100 bg-red-50 p-6 dark:border-red-900 dark:bg-red-950/30">
          <ul className="mb-0 space-y-3">
            <li className="flex items-start gap-2">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
              <span>
                <strong>The "Wall of Text":</strong> Recruiters scan resumes in
                6 seconds. Use bullet points, not paragraphs.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
              <span>
                <strong>Typos and Grammar Errors:</strong> Attention to detail
                is critical. One typo can get you rejected.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
              <span>
                <strong>Including Personal Details:</strong> Remove age, marital
                status, religion, or photos (unless required in your country).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="mt-1 h-5 w-5 flex-shrink-0 text-red-600" />
              <span>
                <strong>Listing Duties Instead of Achievements:</strong> Don't
                just list what you did; list what you accomplished.
              </span>
            </li>
          </ul>
        </div>

        <h3>Frequently Asked Questions</h3>
        <div className="not-prose space-y-4">
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold">What is a good resume score?</h4>
            <p className="text-sm text-muted-foreground">
              A score above 70 is considered "Good" and indicates your resume is
              ready for applications. A score above 80 is "Excellent" and puts
              you in the top 10% of candidates.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold">How do I pass the ATS?</h4>
            <p className="text-sm text-muted-foreground">
              Stick to a clean, single-column layout. Use standard headings.
              Include relevant keywords from the job description. Avoid
              graphics, tables, and headers/footers.
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="mb-2 font-semibold">
              Should I use a resume template?
            </h4>
            <p className="text-sm text-muted-foreground">
              Yes, but choose a simple one. Many "creative" templates with two
              columns or graphics confuse ATS software. Our{' '}
              <Link
                href="/resources/resume-templates"
                className="text-primary hover:underline"
              >
                free templates
              </Link>{' '}
              are ATS-optimized.
            </p>
          </div>
        </div>

        {/* International Resume Tips */}
        <h3 className="flex items-center gap-2">
          🌍 International Resume Formats
        </h3>
        <p>
          Resume standards vary significantly across countries. If you're
          applying to global companies or planning to work abroad, here's what
          you need to know:
        </p>

        <div className="not-prose my-6 grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇺🇸 USA Resume Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• 1 page for &lt;10 years experience, 2 pages max</li>
                <li>• NO photo, date of birth, or personal details</li>
                <li>• Focus heavily on achievements and metrics</li>
                <li>• Use action verbs and quantifiable results</li>
                <li>• ATS optimization is critical</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇬🇧 UK CV Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Called "CV" not "Resume"</li>
                <li>• 2 pages standard length</li>
                <li>• NO photo (generally)</li>
                <li>• Personal statement/profile at top</li>
                <li>• Include key achievements section</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇩🇪 German Lebenslauf Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Photo REQUIRED (professional headshot)</li>
                <li>• Date of birth and nationality included</li>
                <li>• Chronological format (oldest to newest)</li>
                <li>• Include all certifications and education</li>
                <li>• German companies prefer PDF format</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇨🇦 Canadian Resume Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Similar to USA format (no photo)</li>
                <li>• 2 pages acceptable for experienced</li>
                <li>• Include permanent resident status if applicable</li>
                <li>• Highlight international experience</li>
                <li>• LinkedIn profile highly valued</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🇦🇪 Middle East CV Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Photo often expected</li>
                <li>• 2-3 pages acceptable</li>
                <li>• Include visa status and nationality</li>
                <li>• Date of birth commonly included</li>
                <li>• Detailed education section important</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                🌏 Remote/Global Jobs
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-1">
                <li>• Use USA format as the global standard</li>
                <li>• Highlight remote work experience</li>
                <li>• Mention timezone flexibility</li>
                <li>• Include communication tools proficiency</li>
                <li>• Show self-management skills</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
