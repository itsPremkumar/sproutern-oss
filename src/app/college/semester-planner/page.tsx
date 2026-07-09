'use client';

import { useState } from 'react';
import {
  Calendar,
  Plus,
  Trash2,
  BookOpen,
  Clock,
  Target,
  Download,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface Subject {
  id: string;
  name: string;
  credits: number;
  type: 'core' | 'elective' | 'lab' | 'project';
  grade?: string;
}

interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
}

const gradePoints: Record<string, number> = {
  O: 10,
  'A+': 9,
  A: 8,
  'B+': 7,
  B: 6,
  C: 5,
  P: 4,
  F: 0,
};

const subjectTypes = [
  { value: 'core', label: 'Core Subject', color: 'bg-blue-100 text-blue-700' },
  {
    value: 'elective',
    label: 'Elective',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    value: 'lab',
    label: 'Lab/Practical',
    color: 'bg-green-100 text-green-700',
  },
  {
    value: 'project',
    label: 'Project',
    color: 'bg-orange-100 text-orange-700',
  },
];

export default function SemesterPlanner() {
  const [semesters, setSemesters] = useState<Semester[]>([
    { id: '1', name: 'Semester 1', subjects: [] },
  ]);
  const [activeTab, setActiveTab] = useState('1');
  const [newSubject, setNewSubject] = useState({
    name: '',
    credits: 3,
    type: 'core' as const,
  });

  const addSemester = () => {
    const newId = (semesters.length + 1).toString();
    setSemesters([
      ...semesters,
      { id: newId, name: `Semester ${newId}`, subjects: [] },
    ]);
    setActiveTab(newId);
  };

  const addSubject = (semesterId: string) => {
    if (!newSubject.name) return;
    setSemesters(
      semesters.map((sem) => {
        if (sem.id === semesterId) {
          return {
            ...sem,
            subjects: [
              ...sem.subjects,
              {
                id: Date.now().toString(),
                ...newSubject,
              },
            ],
          };
        }
        return sem;
      }),
    );
    setNewSubject({ name: '', credits: 3, type: 'core' });
  };

  const removeSubject = (semesterId: string, subjectId: string) => {
    setSemesters(
      semesters.map((sem) => {
        if (sem.id === semesterId) {
          return {
            ...sem,
            subjects: sem.subjects.filter((sub) => sub.id !== subjectId),
          };
        }
        return sem;
      }),
    );
  };

  const updateGrade = (
    semesterId: string,
    subjectId: string,
    grade: string,
  ) => {
    setSemesters(
      semesters.map((sem) => {
        if (sem.id === semesterId) {
          return {
            ...sem,
            subjects: sem.subjects.map((sub) => {
              if (sub.id === subjectId) {
                return { ...sub, grade };
              }
              return sub;
            }),
          };
        }
        return sem;
      }),
    );
  };

  const calculateSGPA = (subjects: Subject[]) => {
    if (subjects.length === 0) return 0;
    const gradedSubjects = subjects.filter((s) => s.grade && s.grade !== 'F');
    if (gradedSubjects.length === 0) return 0;

    let totalPoints = 0;
    let totalCredits = 0;

    subjects.forEach((sub) => {
      if (sub.grade) {
        totalPoints += (gradePoints[sub.grade] || 0) * sub.credits;
        totalCredits += sub.credits;
      }
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const calculateCGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    semesters.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        if (sub.grade) {
          totalPoints += (gradePoints[sub.grade] || 0) * sub.credits;
          totalCredits += sub.credits;
        }
      });
    });

    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00';
  };

  const getTotalCredits = () => {
    return semesters.reduce((total, sem) => {
      return (
        total +
        sem.subjects.reduce((subTotal, sub) => subTotal + sub.credits, 0)
      );
    }, 0);
  };

  const activeSemester =
    semesters.find((s) => s.id === activeTab) || semesters[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Calendar className="h-4 w-4" />
            Academic Planning Tool
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Semester Planner
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Plan your semesters, track credits, and calculate your CGPA. All
            data is saved locally.
          </p>
        </div>
      </section>

      <div className="container py-8">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="bg-primary/5">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">
                {semesters.length}
              </p>
              <p className="text-sm text-muted-foreground">Semesters</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-950">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-green-600">
                {getTotalCredits()}
              </p>
              <p className="text-sm text-muted-foreground">Total Credits</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 dark:bg-blue-950">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-blue-600">
                {calculateSGPA(activeSemester.subjects)}
              </p>
              <p className="text-sm text-muted-foreground">Current SGPA</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 dark:bg-purple-950">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-purple-600">
                {calculateCGPA()}
              </p>
              <p className="text-sm text-muted-foreground">Overall CGPA</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Semester Tabs */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Semesters
                  </span>
                  <Button
                    size="sm"
                    onClick={addSemester}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {semesters.map((sem) => (
                  <button
                    key={sem.id}
                    onClick={() => setActiveTab(sem.id)}
                    className={`w-full rounded-lg p-3 text-left transition-colors ${
                      activeTab === sem.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{sem.name}</span>
                      <Badge
                        variant={activeTab === sem.id ? 'secondary' : 'outline'}
                      >
                        {sem.subjects.length} subjects
                      </Badge>
                    </div>
                    <p className="mt-1 text-xs opacity-70">
                      SGPA: {calculateSGPA(sem.subjects)} | Credits:{' '}
                      {sem.subjects.reduce((t, s) => t + s.credits, 0)}
                    </p>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Active Semester */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{activeSemester.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Add Subject Form */}
                <div className="mb-6 grid gap-4 rounded-lg bg-muted/30 p-4 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="subjectName">Subject Name</Label>
                    <Input
                      id="subjectName"
                      placeholder="e.g., Data Structures"
                      value={newSubject.name}
                      onChange={(e) =>
                        setNewSubject({ ...newSubject, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <Label htmlFor="credits">Credits</Label>
                    <Input
                      id="credits"
                      type="number"
                      min="1"
                      max="6"
                      value={newSubject.credits}
                      onChange={(e) =>
                        setNewSubject({
                          ...newSubject,
                          credits: parseInt(e.target.value) || 3,
                        })
                      }
                    />
                  </div>
                  <div className="flex items-end">
                    <Button
                      onClick={() => addSubject(activeSemester.id)}
                      className="w-full"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </div>

                {/* Subjects List */}
                {activeSemester.subjects.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <BookOpen className="mx-auto mb-4 h-12 w-12 opacity-50" />
                    <p>No subjects added yet. Add your first subject above.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {activeSemester.subjects.map((subject) => (
                      <div
                        key={subject.id}
                        className="flex items-center gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/30"
                      >
                        <div className="flex-1">
                          <p className="font-medium">{subject.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {subject.credits} credits
                          </p>
                        </div>
                        <select
                          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={subject.grade || ''}
                          onChange={(e) =>
                            updateGrade(
                              activeSemester.id,
                              subject.id,
                              e.target.value,
                            )
                          }
                        >
                          <option value="">Grade</option>
                          {Object.keys(gradePoints).map((grade) => (
                            <option key={grade}>{grade}</option>
                          ))}
                        </select>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            removeSubject(activeSemester.id, subject.id)
                          }
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Grade Reference */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Grade Point Reference</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(gradePoints).map(([grade, points]) => (
                    <Badge
                      key={grade}
                      variant="outline"
                      className="px-3 py-1"
                    >
                      {grade} = {points}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
