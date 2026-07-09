'use client';

import { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  Plus,
  Trash2,
  Bell,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Deadline {
  id: string;
  name: string;
  date: string;
  category: string;
  notes: string;
  createdAt: string;
}

const CATEGORIES = [
  { value: 'exam', label: 'Exam', color: 'bg-red-500' },
  { value: 'interview', label: 'Interview', color: 'bg-blue-500' },
  { value: 'application', label: 'Application', color: 'bg-green-500' },
  { value: 'scholarship', label: 'Scholarship', color: 'bg-purple-500' },
  { value: 'project', label: 'Project', color: 'bg-orange-500' },
  { value: 'other', label: 'Other', color: 'bg-gray-500' },
];

const PRESET_DEADLINES = [
  { name: 'GATE 2025 Exam', date: '2025-02-01', category: 'exam' },
  {
    name: 'CAT 2025 Registration',
    date: '2025-08-15',
    category: 'application',
  },
  { name: 'JEE Main 2025', date: '2025-01-20', category: 'exam' },
  { name: 'UPSC CSE Prelims 2025', date: '2025-05-25', category: 'exam' },
  { name: 'TCS NQT 2025', date: '2025-03-15', category: 'exam' },
  {
    name: 'Infosys Off-Campus Drive',
    date: '2025-04-01',
    category: 'interview',
  },
];

export default function DeadlineCalculator() {
  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [newDeadline, setNewDeadline] = useState({
    name: '',
    date: '',
    category: 'exam',
    notes: '',
  });
  const [currentTime, setCurrentTime] = useState(new Date());

  // Load deadlines from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sproutern_deadlines');
    if (saved) {
      setDeadlines(JSON.parse(saved));
    }
  }, []);

  // Save deadlines to localStorage whenever they change
  useEffect(() => {
    if (deadlines.length > 0) {
      localStorage.setItem('sproutern_deadlines', JSON.stringify(deadlines));
    }
  }, [deadlines]);

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const addDeadline = () => {
    if (!newDeadline.name || !newDeadline.date) return;

    const deadline: Deadline = {
      id: Date.now().toString(),
      name: newDeadline.name,
      date: newDeadline.date,
      category: newDeadline.category,
      notes: newDeadline.notes,
      createdAt: new Date().toISOString(),
    };

    setDeadlines([...deadlines, deadline]);
    setNewDeadline({ name: '', date: '', category: 'exam', notes: '' });
  };

  const removeDeadline = (id: string) => {
    const updated = deadlines.filter((d) => d.id !== id);
    setDeadlines(updated);
    localStorage.setItem('sproutern_deadlines', JSON.stringify(updated));
  };

  const addPresetDeadline = (preset: (typeof PRESET_DEADLINES)[0]) => {
    const deadline: Deadline = {
      id: Date.now().toString(),
      name: preset.name,
      date: preset.date,
      category: preset.category,
      notes: '',
      createdAt: new Date().toISOString(),
    };
    setDeadlines([...deadlines, deadline]);
  };

  const calculateTimeRemaining = (dateString: string) => {
    const deadline = new Date(dateString);
    const now = currentTime;
    const diff = deadline.getTime() - now.getTime();

    if (diff < 0) {
      return { expired: true, days: 0, hours: 0, minutes: 0, totalDays: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { expired: false, days, hours, minutes, totalDays: days };
  };

  const getUrgencyLevel = (days: number, expired: boolean) => {
    if (expired) return 'expired';
    if (days <= 3) return 'critical';
    if (days <= 7) return 'urgent';
    if (days <= 30) return 'soon';
    return 'comfortable';
  };

  const getUrgencyStyles = (level: string) => {
    switch (level) {
      case 'expired':
        return 'bg-gray-100 border-gray-300 dark:bg-gray-800';
      case 'critical':
        return 'bg-red-50 border-red-300 dark:bg-red-950';
      case 'urgent':
        return 'bg-orange-50 border-orange-300 dark:bg-orange-950';
      case 'soon':
        return 'bg-yellow-50 border-yellow-300 dark:bg-yellow-950';
      default:
        return 'bg-green-50 border-green-300 dark:bg-green-950';
    }
  };

  const sortedDeadlines = [...deadlines].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const getCategoryColor = (category: string) => {
    return CATEGORIES.find((c) => c.value === category)?.color || 'bg-gray-500';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const exportDeadlines = () => {
    const data = deadlines.map((d) => ({
      Name: d.name,
      Date: d.date,
      Category: d.category,
      Notes: d.notes,
    }));
    const csv = [
      Object.keys(data[0] || {}).join(','),
      ...data.map((row) => Object.values(row).join(',')),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-deadlines.csv';
    a.click();
  };

  return (
    <div className="space-y-8">
      {/* Add New Deadline Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Deadline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="name">Event Name *</Label>
              <Input
                id="name"
                placeholder="e.g., GATE 2025 Exam"
                value={newDeadline.name}
                onChange={(e) =>
                  setNewDeadline({ ...newDeadline, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date *</Label>
              <Input
                id="date"
                type="date"
                value={newDeadline.date}
                onChange={(e) =>
                  setNewDeadline({ ...newDeadline, date: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={newDeadline.category}
                onValueChange={(value) =>
                  setNewDeadline({ ...newDeadline, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem
                      key={cat.value}
                      value={cat.value}
                    >
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Input
                id="notes"
                placeholder="Any additional notes"
                value={newDeadline.notes}
                onChange={(e) =>
                  setNewDeadline({ ...newDeadline, notes: e.target.value })
                }
              />
            </div>
          </div>
          <Button
            onClick={addDeadline}
            className="mt-4"
            disabled={!newDeadline.name || !newDeadline.date}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Deadline
          </Button>
        </CardContent>
      </Card>

      {/* Quick Add Presets */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Add Popular Deadlines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {PRESET_DEADLINES.map((preset, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => addPresetDeadline(preset)}
                className="text-xs"
              >
                <Plus className="mr-1 h-3 w-3" />
                {preset.name}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deadlines List */}
      {deadlines.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Your Deadlines ({deadlines.length})
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={exportDeadlines}
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>

          <div className="grid gap-4">
            {sortedDeadlines.map((deadline) => {
              const timeRemaining = calculateTimeRemaining(deadline.date);
              const urgency = getUrgencyLevel(
                timeRemaining.totalDays,
                timeRemaining.expired,
              );
              const urgencyStyles = getUrgencyStyles(urgency);

              return (
                <Card
                  key={deadline.id}
                  className={`border-2 transition-all ${urgencyStyles}`}
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div className="flex-1">
                        <div className="mb-2 flex items-center gap-2">
                          <div
                            className={`h-3 w-3 rounded-full ${getCategoryColor(
                              deadline.category,
                            )}`}
                          />
                          <h3 className="text-lg font-bold">{deadline.name}</h3>
                          <Badge
                            variant="secondary"
                            className="text-xs"
                          >
                            {
                              CATEGORIES.find(
                                (c) => c.value === deadline.category,
                              )?.label
                            }
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <Calendar className="mr-1 inline h-4 w-4" />
                          {formatDate(deadline.date)}
                        </p>
                        {deadline.notes && (
                          <p className="mt-1 text-sm text-muted-foreground">
                            📝 {deadline.notes}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="min-w-[120px] text-center">
                          {timeRemaining.expired ? (
                            <div className="text-gray-500">
                              <span className="text-2xl font-bold">
                                Expired
                              </span>
                            </div>
                          ) : (
                            <>
                              <div className="flex items-center justify-center gap-1">
                                {urgency === 'critical' && (
                                  <AlertTriangle className="h-5 w-5 text-red-500" />
                                )}
                                <span
                                  className={`text-3xl font-black ${
                                    urgency === 'critical'
                                      ? 'text-red-600'
                                      : urgency === 'urgent'
                                        ? 'text-orange-600'
                                        : urgency === 'soon'
                                          ? 'text-yellow-600'
                                          : 'text-green-600'
                                  }`}
                                >
                                  {timeRemaining.days}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                days {timeRemaining.hours}h{' '}
                                {timeRemaining.minutes}m
                              </p>
                            </>
                          )}
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeDeadline(deadline.id)}
                          className="text-red-500 hover:bg-red-50 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty State */}
      {deadlines.length === 0 && (
        <Card className="py-12 text-center">
          <CardContent>
            <Calendar className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h3 className="mb-2 text-xl font-bold">No Deadlines Yet</h3>
            <p className="mb-4 text-muted-foreground">
              Add your first deadline to start tracking important dates.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Tips Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Deadline Management Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Start Early</h4>
                <p className="text-sm text-muted-foreground">
                  Begin preparation at least 2-3 months before your deadline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Break It Down</h4>
                <p className="text-sm text-muted-foreground">
                  Divide your preparation into weekly and daily goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Set Buffer Time</h4>
                <p className="text-sm text-muted-foreground">
                  Always keep 2-3 days buffer before actual deadlines.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
              <div>
                <h4 className="font-semibold">Review Regularly</h4>
                <p className="text-sm text-muted-foreground">
                  Check your deadlines daily and adjust priorities.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
