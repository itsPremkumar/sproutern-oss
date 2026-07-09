'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calculator, Plus, Trash2, RotateCcw } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  obtained: number;
  total: number;
}

type CalculationType = 'basic' | 'aggregate' | 'grade';

export function PercentageCalculator() {
  const [calcType, setCalcType] = useState<CalculationType>('basic');

  // Basic calculator
  const [obtained, setObtained] = useState<number>(0);
  const [total, setTotal] = useState<number>(100);

  // Aggregate calculator
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: 'Subject 1', obtained: 0, total: 100 },
  ]);

  // Grade calculator
  const [percentage, setPercentage] = useState<number>(0);

  const calculateBasicPercentage = () => {
    if (total === 0) return 0;
    return ((obtained / total) * 100).toFixed(2);
  };

  const calculateAggregatePercentage = () => {
    const totalObtained = subjects.reduce((sum, s) => sum + s.obtained, 0);
    const totalMarks = subjects.reduce((sum, s) => sum + s.total, 0);
    if (totalMarks === 0) return 0;
    return ((totalObtained / totalMarks) * 100).toFixed(2);
  };

  const getGrade = (percent: number) => {
    if (percent >= 90)
      return { grade: 'A+', gpa: '10.0', remark: 'Outstanding' };
    if (percent >= 80) return { grade: 'A', gpa: '9.0', remark: 'Excellent' };
    if (percent >= 70) return { grade: 'B+', gpa: '8.0', remark: 'Very Good' };
    if (percent >= 60) return { grade: 'B', gpa: '7.0', remark: 'Good' };
    if (percent >= 50) return { grade: 'C', gpa: '6.0', remark: 'Average' };
    if (percent >= 40)
      return { grade: 'D', gpa: '5.0', remark: 'Below Average' };
    if (percent >= 33) return { grade: 'E', gpa: '4.0', remark: 'Pass' };
    return { grade: 'F', gpa: '0.0', remark: 'Fail' };
  };

  const addSubject = () => {
    setSubjects([
      ...subjects,
      {
        id: Date.now().toString(),
        name: `Subject ${subjects.length + 1}`,
        obtained: 0,
        total: 100,
      },
    ]);
  };

  const updateSubject = (
    id: string,
    field: keyof Subject,
    value: string | number,
  ) => {
    setSubjects(
      subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)),
    );
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter((s) => s.id !== id));
    }
  };

  const resetAll = () => {
    setObtained(0);
    setTotal(100);
    setSubjects([{ id: '1', name: 'Subject 1', obtained: 0, total: 100 }]);
    setPercentage(0);
  };

  const gradeInfo = getGrade(percentage);
  const basicResult = Number(calculateBasicPercentage());
  const aggregateResult = Number(calculateAggregatePercentage());

  return (
    <div className="space-y-6">
      {/* Calculator Type Selector */}
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant={calcType === 'basic' ? 'default' : 'outline'}
          onClick={() => setCalcType('basic')}
        >
          Basic Calculator
        </Button>
        <Button
          variant={calcType === 'aggregate' ? 'default' : 'outline'}
          onClick={() => setCalcType('aggregate')}
        >
          Aggregate Marks
        </Button>
        <Button
          variant={calcType === 'grade' ? 'default' : 'outline'}
          onClick={() => setCalcType('grade')}
        >
          Grade Calculator
        </Button>
      </div>

      {/* Basic Calculator */}
      {calcType === 'basic' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              Basic Percentage Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Marks Obtained</label>
                <input
                  type="number"
                  min="0"
                  value={obtained}
                  onChange={(e) => setObtained(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border p-3 text-lg"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Total Marks</label>
                <input
                  type="number"
                  min="1"
                  value={total}
                  onChange={(e) => setTotal(Number(e.target.value))}
                  className="mt-1 w-full rounded-lg border p-3 text-lg"
                />
              </div>
            </div>

            <div className="rounded-lg bg-primary/10 p-6 text-center">
              <p className="mb-2 text-sm text-muted-foreground">
                Your Percentage
              </p>
              <p className="text-5xl font-bold text-primary">
                {calculateBasicPercentage()}%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Grade:{' '}
                <span className="font-semibold">
                  {getGrade(basicResult).grade}
                </span>{' '}
                ({getGrade(basicResult).remark})
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Aggregate Calculator */}
      {calcType === 'aggregate' && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              Aggregate Percentage Calculator
            </CardTitle>
            <Button
              size="sm"
              onClick={addSubject}
            >
              <Plus className="mr-1 h-4 w-4" />
              Add Subject
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {subjects.map((subject, index) => (
              <div
                key={subject.id}
                className="flex items-center gap-3 rounded-lg bg-muted/50 p-3"
              >
                <input
                  type="text"
                  value={subject.name}
                  onChange={(e) =>
                    updateSubject(subject.id, 'name', e.target.value)
                  }
                  className="flex-1 rounded-md border p-2 text-sm"
                  placeholder="Subject name"
                />
                <input
                  type="number"
                  min="0"
                  value={subject.obtained}
                  onChange={(e) =>
                    updateSubject(
                      subject.id,
                      'obtained',
                      Number(e.target.value),
                    )
                  }
                  className="w-20 rounded-md border p-2 text-center text-sm"
                  placeholder="Marks"
                />
                <span className="text-muted-foreground">/</span>
                <input
                  type="number"
                  min="1"
                  value={subject.total}
                  onChange={(e) =>
                    updateSubject(subject.id, 'total', Number(e.target.value))
                  }
                  className="w-20 rounded-md border p-2 text-center text-sm"
                  placeholder="Total"
                />
                <button
                  onClick={() => removeSubject(subject.id)}
                  className="p-1 text-red-500 hover:text-red-700"
                  disabled={subjects.length === 1}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}

            <div className="rounded-lg bg-primary/10 p-6 text-center">
              <p className="mb-2 text-sm text-muted-foreground">
                Aggregate Percentage
              </p>
              <p className="text-5xl font-bold text-primary">
                {calculateAggregatePercentage()}%
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Total: {subjects.reduce((sum, s) => sum + s.obtained, 0)} /{' '}
                {subjects.reduce((sum, s) => sum + s.total, 0)} marks
              </p>
              <p className="text-sm text-muted-foreground">
                Grade:{' '}
                <span className="font-semibold">
                  {getGrade(aggregateResult).grade}
                </span>{' '}
                ({getGrade(aggregateResult).remark})
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Grade Calculator */}
      {calcType === 'grade' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" />
              Percentage to Grade Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Enter Percentage</label>
              <input
                type="number"
                min="0"
                max="100"
                value={percentage}
                onChange={(e) => setPercentage(Number(e.target.value))}
                className="mt-1 w-full rounded-lg border p-3 text-lg"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 rounded-lg bg-primary/10 p-6 text-center">
              <div>
                <p className="mb-1 text-sm text-muted-foreground">Grade</p>
                <p className="text-4xl font-bold text-primary">
                  {gradeInfo.grade}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm text-muted-foreground">
                  GPA (10-point)
                </p>
                <p className="text-4xl font-bold text-green-600">
                  {gradeInfo.gpa}
                </p>
              </div>
              <div>
                <p className="mb-1 text-sm text-muted-foreground">Remark</p>
                <p className="text-lg font-semibold">{gradeInfo.remark}</p>
              </div>
            </div>

            {/* Grade Table */}
            <div className="mt-6">
              <p className="mb-3 font-medium">Grade Scale Reference</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2 text-left">Percentage</th>
                      <th className="border p-2 text-left">Grade</th>
                      <th className="border p-2 text-left">GPA</th>
                      <th className="border p-2 text-left">Remark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        range: '90-100%',
                        grade: 'A+',
                        gpa: '10.0',
                        remark: 'Outstanding',
                      },
                      {
                        range: '80-89%',
                        grade: 'A',
                        gpa: '9.0',
                        remark: 'Excellent',
                      },
                      {
                        range: '70-79%',
                        grade: 'B+',
                        gpa: '8.0',
                        remark: 'Very Good',
                      },
                      {
                        range: '60-69%',
                        grade: 'B',
                        gpa: '7.0',
                        remark: 'Good',
                      },
                      {
                        range: '50-59%',
                        grade: 'C',
                        gpa: '6.0',
                        remark: 'Average',
                      },
                      {
                        range: '40-49%',
                        grade: 'D',
                        gpa: '5.0',
                        remark: 'Below Average',
                      },
                      {
                        range: '33-39%',
                        grade: 'E',
                        gpa: '4.0',
                        remark: 'Pass',
                      },
                      { range: '<33%', grade: 'F', gpa: '0.0', remark: 'Fail' },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? '' : 'bg-muted/30'}
                      >
                        <td className="border p-2">{row.range}</td>
                        <td className="border p-2 font-semibold">
                          {row.grade}
                        </td>
                        <td className="border p-2">{row.gpa}</td>
                        <td className="border p-2">{row.remark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Reset Button */}
      <div className="text-center">
        <Button
          variant="outline"
          onClick={resetAll}
        >
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset All
        </Button>
      </div>
    </div>
  );
}
