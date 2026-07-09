'use client';

import { useState } from 'react';
import { Calculator, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

const boardSystems = [
  { name: 'CBSE', maxMarks: 500, subjects: 5 },
  { name: 'ICSE', maxMarks: 500, subjects: 5 },
  { name: 'State Board (5 subjects)', maxMarks: 500, subjects: 5 },
  { name: 'State Board (6 subjects)', maxMarks: 600, subjects: 6 },
  { name: 'Custom', maxMarks: 0, subjects: 0 },
];

export default function MarksPercentageCalculator() {
  const [mode, setMode] = useState<'percentage' | 'marks'>('percentage');
  const [board, setBoard] = useState(boardSystems[0]);
  const [obtainedMarks, setObtainedMarks] = useState('');
  const [maxMarks, setMaxMarks] = useState('500');
  const [percentage, setPercentage] = useState('');
  const [result, setResult] = useState<{
    percentage?: number;
    marks?: number;
  } | null>(null);

  const content = toolsSEOContent['marks-calculator'];

  const calculatePercentage = () => {
    const obtained = parseFloat(obtainedMarks);
    const max = parseFloat(maxMarks);
    if (obtained && max && max > 0) {
      const perc = (obtained / max) * 100;
      setResult({ percentage: Math.round(perc * 100) / 100 });
    }
  };

  const calculateMarks = () => {
    const perc = parseFloat(percentage);
    const max = parseFloat(maxMarks);
    if (perc && max && max > 0) {
      const marks = (perc / 100) * max;
      setResult({ marks: Math.round(marks * 100) / 100 });
    }
  };

  const handleBoardChange = (boardName: string) => {
    const selectedBoard =
      boardSystems.find((b) => b.name === boardName) || boardSystems[0];
    setBoard(selectedBoard);
    if (selectedBoard.maxMarks > 0) {
      setMaxMarks(selectedBoard.maxMarks.toString());
    }
  };

  const getGrade = (perc: number) => {
    if (perc >= 90)
      return { grade: 'A1', remark: 'Outstanding', color: 'text-green-600' };
    if (perc >= 80)
      return { grade: 'A2', remark: 'Excellent', color: 'text-green-500' };
    if (perc >= 70)
      return { grade: 'B1', remark: 'Very Good', color: 'text-blue-600' };
    if (perc >= 60)
      return { grade: 'B2', remark: 'Good', color: 'text-blue-500' };
    if (perc >= 50)
      return { grade: 'C1', remark: 'Average', color: 'text-yellow-600' };
    if (perc >= 40)
      return { grade: 'C2', remark: 'Below Average', color: 'text-orange-500' };
    if (perc >= 33)
      return { grade: 'D', remark: 'Pass', color: 'text-orange-600' };
    return { grade: 'E', remark: 'Needs Improvement', color: 'text-red-600' };
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Calculator className="h-4 w-4" />
            Free Calculator Tool
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Marks to Percentage Calculator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Convert your marks to percentage or calculate required marks for a
            target percentage.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="mx-auto max-w-2xl">
          {/* Mode Toggle */}
          <div className="mb-6 flex gap-2">
            <Button
              variant={mode === 'percentage' ? 'default' : 'outline'}
              onClick={() => {
                setMode('percentage');
                setResult(null);
              }}
              className="flex-1"
            >
              Marks → Percentage
            </Button>
            <Button
              variant={mode === 'marks' ? 'default' : 'outline'}
              onClick={() => {
                setMode('marks');
                setResult(null);
              }}
              className="flex-1"
            >
              Percentage → Marks
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                {mode === 'percentage'
                  ? 'Calculate Percentage'
                  : 'Calculate Required Marks'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Board Selection */}
              <div>
                <Label htmlFor="board">Board/Exam Type</Label>
                <select
                  id="board"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={board.name}
                  onChange={(e) => handleBoardChange(e.target.value)}
                >
                  {boardSystems.map((b) => (
                    <option key={b.name}>{b.name}</option>
                  ))}
                </select>
              </div>

              {/* Max Marks */}
              <div>
                <Label htmlFor="maxMarks">Maximum Marks</Label>
                <Input
                  id="maxMarks"
                  type="number"
                  placeholder="e.g., 500"
                  value={maxMarks}
                  onChange={(e) => setMaxMarks(e.target.value)}
                  disabled={board.name !== 'Custom'}
                />
              </div>

              {mode === 'percentage' ? (
                <div>
                  <Label htmlFor="obtained">Obtained Marks</Label>
                  <Input
                    id="obtained"
                    type="number"
                    placeholder="e.g., 425"
                    value={obtainedMarks}
                    onChange={(e) => setObtainedMarks(e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <Label htmlFor="percentage">Target Percentage (%)</Label>
                  <Input
                    id="percentage"
                    type="number"
                    placeholder="e.g., 85"
                    value={percentage}
                    onChange={(e) => setPercentage(e.target.value)}
                  />
                </div>
              )}

              <Button
                onClick={
                  mode === 'percentage' ? calculatePercentage : calculateMarks
                }
                className="w-full"
              >
                Calculate
              </Button>
            </CardContent>
          </Card>

          {/* Result */}
          {result && (
            <Card className="mt-6 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                {result.percentage !== undefined && (
                  <>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Your Percentage
                    </p>
                    <p className="mb-4 text-5xl font-bold text-primary">
                      {result.percentage}%
                    </p>
                    {(() => {
                      const gradeInfo = getGrade(result.percentage);
                      return (
                        <div className="flex justify-center gap-4">
                          <div className={`text-center ${gradeInfo.color}`}>
                            <p className="text-2xl font-bold">
                              {gradeInfo.grade}
                            </p>
                            <p className="text-sm">{gradeInfo.remark}</p>
                          </div>
                        </div>
                      );
                    })()}
                  </>
                )}
                {result.marks !== undefined && (
                  <>
                    <p className="mb-2 text-sm text-muted-foreground">
                      Required Marks
                    </p>
                    <p className="mb-2 text-5xl font-bold text-primary">
                      {result.marks}
                      <span className="text-2xl text-muted-foreground">
                        /{maxMarks}
                      </span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      You need {result.marks} marks out of {maxMarks} to achieve{' '}
                      {percentage}%
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* Quick Reference */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Percentage to Grade Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="rounded-lg bg-green-50 p-3 text-center dark:bg-green-950">
                  <p className="text-2xl font-bold text-green-600">90%+</p>
                  <p className="text-sm">A1 - Outstanding</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-3 text-center dark:bg-blue-950">
                  <p className="text-2xl font-bold text-blue-600">70-89%</p>
                  <p className="text-sm">A2/B1 - Excellent</p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-3 text-center dark:bg-yellow-950">
                  <p className="text-2xl font-bold text-yellow-600">50-69%</p>
                  <p className="text-sm">B2/C1 - Good</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-3 text-center dark:bg-orange-950">
                  <p className="text-2xl font-bold text-orange-600">33-49%</p>
                  <p className="text-sm">C2/D - Pass</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="marks-calculator"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
