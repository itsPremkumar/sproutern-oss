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
import { Calculator, Plus, Trash2 } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  grade: string;
  credits: string;
}

const gradePoints: Record<string, number> = {
  'A+': 4.0,
  A: 4.0,
  'A-': 3.7,
  'B+': 3.3,
  B: 3.0,
  'B-': 2.7,
  'C+': 2.3,
  C: 2.0,
  'C-': 1.7,
  'D+': 1.3,
  D: 1.0,
  'D-': 0.7,
  F: 0.0,
};

export function GPACalculatorTool() {
  const [courses, setCourses] = useState<Course[]>([
    { id: 1, name: '', grade: 'A', credits: '3' },
    { id: 2, name: '', grade: 'A', credits: '3' },
    { id: 3, name: '', grade: 'A', credits: '3' },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [totalQualityPoints, setTotalQualityPoints] = useState<number>(0);

  // For cumulative GPA calculation
  const [previousGpa, setPreviousGpa] = useState('');
  const [previousCredits, setPreviousCredits] = useState('');
  const [cumulativeGpa, setCumulativeGpa] = useState<number | null>(null);

  const addCourse = () => {
    const newId = Math.max(...courses.map((c) => c.id), 0) + 1;
    setCourses([...courses, { id: newId, name: '', grade: 'A', credits: '3' }]);
  };

  const removeCourse = (id: number) => {
    if (courses.length > 1) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  const updateCourse = (id: number, field: keyof Course, value: string) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)),
    );
  };

  const calculateGPA = () => {
    let qualityPoints = 0;
    let credits = 0;

    for (const course of courses) {
      const creditValue = parseFloat(course.credits) || 0;
      const gradeValue = gradePoints[course.grade] ?? 0;

      qualityPoints += creditValue * gradeValue;
      credits += creditValue;
    }

    if (credits === 0) {
      setGpa(0);
      setTotalCredits(0);
      setTotalQualityPoints(0);
      return;
    }

    const calculatedGpa = qualityPoints / credits;
    setGpa(Math.round(calculatedGpa * 100) / 100);
    setTotalCredits(credits);
    setTotalQualityPoints(Math.round(qualityPoints * 100) / 100);

    // Calculate cumulative if previous data provided
    const prevGpaValue = parseFloat(previousGpa);
    const prevCreditsValue = parseFloat(previousCredits);

    if (
      !isNaN(prevGpaValue) &&
      !isNaN(prevCreditsValue) &&
      prevCreditsValue > 0
    ) {
      const prevQualityPoints = prevGpaValue * prevCreditsValue;
      const totalQP = prevQualityPoints + qualityPoints;
      const totalCr = prevCreditsValue + credits;
      const cumGpa = totalQP / totalCr;
      setCumulativeGpa(Math.round(cumGpa * 100) / 100);
    } else {
      setCumulativeGpa(null);
    }
  };

  const reset = () => {
    setCourses([
      { id: 1, name: '', grade: 'A', credits: '3' },
      { id: 2, name: '', grade: 'A', credits: '3' },
      { id: 3, name: '', grade: 'A', credits: '3' },
    ]);
    setGpa(null);
    setTotalCredits(0);
    setTotalQualityPoints(0);
    setPreviousGpa('');
    setPreviousCredits('');
    setCumulativeGpa(null);
  };

  const getGpaColor = (gpaValue: number) => {
    if (gpaValue >= 3.7) return 'text-green-600';
    if (gpaValue >= 3.0) return 'text-blue-600';
    if (gpaValue >= 2.0) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="border-t-4 border-t-primary shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Calculator className="h-6 w-6 text-primary" />
          GPA Calculator
        </CardTitle>
        <CardDescription>
          Enter your courses, grades, and credit hours to calculate your GPA
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Course List */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">Your Courses</Label>

          <div className="hidden md:grid md:grid-cols-12 md:gap-2 md:text-sm md:font-medium md:text-muted-foreground">
            <div className="col-span-5">Course Name (Optional)</div>
            <div className="col-span-3">Grade</div>
            <div className="col-span-3">Credits</div>
            <div className="col-span-1"></div>
          </div>

          {courses.map((course, index) => (
            <div
              key={course.id}
              className="grid grid-cols-12 items-center gap-2"
            >
              <div className="col-span-12 md:col-span-5">
                <Input
                  placeholder={`Course ${index + 1}`}
                  value={course.name}
                  onChange={(e) =>
                    updateCourse(course.id, 'name', e.target.value)
                  }
                />
              </div>
              <div className="col-span-6 md:col-span-3">
                <Select
                  value={course.grade}
                  onValueChange={(value) =>
                    updateCourse(course.id, 'grade', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(gradePoints).map((grade) => (
                      <SelectItem
                        key={grade}
                        value={grade}
                      >
                        {grade} ({gradePoints[grade]})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-4 md:col-span-3">
                <Input
                  type="number"
                  min="0"
                  max="10"
                  step="0.5"
                  placeholder="Credits"
                  value={course.credits}
                  onChange={(e) =>
                    updateCourse(course.id, 'credits', e.target.value)
                  }
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeCourse(course.id)}
                  disabled={courses.length === 1}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}

          <Button
            variant="outline"
            onClick={addCourse}
            className="w-full"
          >
            <Plus className="mr-2 h-4 w-4" /> Add Course
          </Button>
        </div>

        {/* Optional: Previous GPA for Cumulative */}
        <div className="space-y-4 rounded-lg border bg-muted/50 p-4">
          <Label className="text-base font-semibold">
            Previous GPA (Optional - for Cumulative GPA)
          </Label>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="prevGpa">Previous Cumulative GPA</Label>
              <Input
                id="prevGpa"
                type="number"
                step="0.01"
                min="0"
                max="4"
                placeholder="e.g., 3.5"
                value={previousGpa}
                onChange={(e) => setPreviousGpa(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="prevCredits">Previous Total Credits</Label>
              <Input
                id="prevCredits"
                type="number"
                step="1"
                min="0"
                placeholder="e.g., 60"
                value={previousCredits}
                onChange={(e) => setPreviousCredits(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={calculateGPA}
            className="h-12 flex-1 text-lg"
          >
            Calculate GPA
          </Button>
          <Button
            onClick={reset}
            variant="outline"
            className="h-12"
          >
            Reset
          </Button>
        </div>

        {/* Results */}
        {gpa !== null && (
          <div className="mt-8 space-y-4 duration-500 animate-in fade-in slide-in-from-bottom-4">
            {/* Semester GPA */}
            <div className="rounded-lg border-2 border-primary bg-primary/5 p-8 text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                Semester GPA
              </p>
              <p className={`my-2 text-6xl font-black ${getGpaColor(gpa)}`}>
                {gpa.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground">
                {totalQualityPoints} quality points ÷ {totalCredits} credits
              </p>
            </div>

            {/* Cumulative GPA (if calculated) */}
            {cumulativeGpa !== null && (
              <div className="rounded-lg border-2 border-blue-500 bg-blue-500/5 p-8 text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Cumulative GPA (Including Previous)
                </p>
                <p
                  className={`my-2 text-6xl font-black ${getGpaColor(cumulativeGpa)}`}
                >
                  {cumulativeGpa.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Combined with {previousCredits} previous credits at{' '}
                  {previousGpa} GPA
                </p>
              </div>
            )}

            {/* GPA Interpretation */}
            <div className="rounded-lg border bg-muted/50 p-4">
              <p className="mb-2 text-sm font-medium">GPA Interpretation:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {gpa >= 3.9 && (
                  <li>🏆 Summa Cum Laude potential (top honors)</li>
                )}
                {gpa >= 3.7 && gpa < 3.9 && (
                  <li>🎓 Magna Cum Laude potential (high honors)</li>
                )}
                {gpa >= 3.5 && gpa < 3.7 && (
                  <li>📚 Cum Laude potential (honors)</li>
                )}
                {gpa >= 3.5 && (
                  <li>✅ Competitive for top graduate programs</li>
                )}
                {gpa >= 3.0 && gpa < 3.5 && (
                  <li>✅ Meets most graduate school minimums</li>
                )}
                {gpa >= 2.0 && gpa < 3.0 && (
                  <li>⚠️ May need improvement for competitive programs</li>
                )}
                {gpa < 2.0 && <li>⚠️ Consider academic support resources</li>}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
