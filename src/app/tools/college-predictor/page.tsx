'use client';

import { useState } from 'react';
import {
  Search,
  Filter,
  GraduationCap,
  MapPin,
  Trophy,
  ArrowRight,
  Info,
  Building2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface College {
  name: string;
  location: string;
  nirfRank: number;
  cutoff: number;
  exams: string[];
  type: string;
}

const colleges: College[] = [
  {
    name: 'Indian Institute of Technology, Madras',
    location: 'Chennai, Tamil Nadu',
    nirfRank: 1,
    cutoff: 1000,
    exams: ['JEE Advanced'],
    type: 'Government',
  },
  {
    name: 'Indian Institute of Technology, Delhi',
    location: 'New Delhi',
    nirfRank: 2,
    cutoff: 800,
    exams: ['JEE Advanced'],
    type: 'Government',
  },
  {
    name: 'Indian Institute of Technology, Bombay',
    location: 'Mumbai, Maharashtra',
    nirfRank: 3,
    cutoff: 500,
    exams: ['JEE Advanced'],
    type: 'Government',
  },
  {
    name: 'National Institute of Technology, Trichy',
    location: 'Tiruchirappalli, Tamil Nadu',
    nirfRank: 9,
    cutoff: 5000,
    exams: ['JEE Main'],
    type: 'Government',
  },
  {
    name: 'Vellore Institute of Technology',
    location: 'Vellore, Tamil Nadu',
    nirfRank: 11,
    cutoff: 20000,
    exams: ['VITEEE'],
    type: 'Private',
  },
  {
    name: 'Anna University',
    location: 'Chennai, Tamil Nadu',
    nirfRank: 13,
    cutoff: 190,
    exams: ['TNEA'],
    type: 'Government',
  },
];

export default function CollegePredictorPage() {
  const [formData, setFormData] = useState({
    rank: '',
    exam: 'JEE Main',
    category: 'General',
    state: 'All States',
  });
  const [results, setResults] = useState<College[] | null>(null);
  const [showResults, setShowResults] = useState(false);

  const predictColleges = () => {
    // Simple logic for demo purposes
    // In a real app, this would query a backend with complex logic
    const rank = parseInt(formData.rank) || 0;

    // Mock filtering logic
    const predicted = colleges.filter((college) => {
      // Just return all relevant exam colleges for now if rank is reasonable
      // This is a placeholder logic
      if (!college.exams.includes(formData.exam)) return false;
      return true;
    });

    setResults(predicted);
    setShowResults(true);
  };

  const resetForm = () => {
    setFormData({
      rank: '',
      exam: 'JEE Main',
      category: 'General',
      state: 'All States',
    });
    setResults(null);
    setShowResults(false);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Building2 className="h-4 w-4" />
            Admission Tools
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            College Predictor
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Predict your chances of getting into top colleges based on your rank
            and exam score.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Enter Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="exam">Exam</Label>
                  <select
                    id="exam"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.exam}
                    onChange={(e) =>
                      setFormData({ ...formData, exam: e.target.value })
                    }
                  >
                    <option>JEE Main</option>
                    <option>JEE Advanced</option>
                    <option>NEET</option>
                    <option>VITEEE</option>
                    <option>TNEA</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="rank">Rank / Cutoff Score</Label>
                  <Input
                    id="rank"
                    type="number"
                    placeholder="e.g., 5000"
                    value={formData.rank}
                    onChange={(e) =>
                      setFormData({ ...formData, rank: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    <option>General</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                  </select>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={predictColleges}
                    className="flex-1"
                  >
                    Predict Colleges
                  </Button>
                  <Button
                    variant="outline"
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            {!showResults ? (
              <Card className="p-8 text-center">
                <GraduationCap className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h2 className="mb-2 text-xl font-semibold">
                  Provide Your Details
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Enter your exam rank and category to see likely college
                  options.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-xl font-bold">
                    <Trophy className="h-5 w-5 text-yellow-600" />
                    Predicted Colleges
                  </h2>
                </div>
                <div className="grid gap-4">
                  {results && results.length > 0 ? (
                    results.map((college, index) => (
                      <Card
                        key={index}
                        className="transition-shadow hover:shadow-md"
                      >
                        <CardContent className="p-6">
                          <div className="mb-3 flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-bold">
                                {college.name}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4" />
                                {college.location}
                              </div>
                            </div>
                            <Badge>{college.type}</Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-sm">
                              <span className="font-semibold">NIRF Rank:</span>{' '}
                              {college.nirfRank}
                            </div>
                            <div className="text-sm">
                              <span className="font-semibold">Exam:</span>{' '}
                              {college.exams.join(', ')}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card className="p-8 text-center">
                      <p className="text-muted-foreground">
                        No matching colleges found for this criteria in our
                        basic database.
                      </p>
                    </Card>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
