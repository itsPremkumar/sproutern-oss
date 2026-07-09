'use client';

import { useState } from 'react';
import { Calendar, Download, Plus, Trash2, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface Event {
  id: string;
  name: string;
  date: string;
  type: 'exam' | 'assignment' | 'holiday' | 'event';
}

const eventColors = {
  exam: 'bg-red-100 text-red-800 border-red-200',
  assignment: 'bg-blue-100 text-blue-800 border-blue-200',
  holiday: 'bg-green-100 text-green-800 border-green-200',
  event: 'bg-purple-100 text-purple-800 border-purple-200',
};

export default function AcademicCalendarClient() {
  const [events, setEvents] = useState<Event[]>([]);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState<'exam' | 'assignment' | 'holiday' | 'event'>(
    'exam',
  );

  const addEvent = () => {
    if (!name || !date) return;
    setEvents(
      [...events, { id: Date.now().toString(), name, date, type }].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    );
    setName('');
    setDate('');
  };

  const removeEvent = (id: string) =>
    setEvents(events.filter((e) => e.id !== id));

  const exportCalendar = () => {
    let icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Sproutern//Academic Calendar//EN\n`;
    events.forEach((e) => {
      const d = new Date(e.date);
      const dateStr = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
      icsContent += `BEGIN:VEVENT\nDTSTART:${dateStr}\nSUMMARY:${e.name}\nEND:VEVENT\n`;
    });
    icsContent += `END:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'academic-calendar.ics';
    a.click();
  };

  const groupedEvents = events.reduce(
    (acc, e) => {
      const month = new Date(e.date).toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });
      if (!acc[month]) acc[month] = [];
      acc[month].push(e);
      return acc;
    },
    {} as Record<string, Event[]>,
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <Calendar className="mr-1 h-3 w-3" />
            Productivity Tool
          </Badge>
          <h1 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
            Academic Calendar Generator
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Create and export your semester schedule.
          </p>
        </div>
      </section>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Add Event
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Event Name</Label>
                <Input
                  placeholder="Midterm Exam"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <Label>Date</Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <Label>Type</Label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                >
                  <option value="exam">Exam</option>
                  <option value="assignment">Assignment</option>
                  <option value="holiday">Holiday</option>
                  <option value="event">Event</option>
                </select>
              </div>
              <Button
                className="w-full"
                onClick={addEvent}
              >
                <Plus className="mr-1 h-4 w-4" />
                Add Event
              </Button>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Your Calendar ({events.length} events)
              </CardTitle>
              {events.length > 0 && (
                <Button
                  size="sm"
                  onClick={exportCalendar}
                >
                  <Download className="mr-1 h-4 w-4" />
                  Export .ics
                </Button>
              )}
            </CardHeader>
            <CardContent>
              {events.length === 0 ? (
                <div className="py-12 text-center text-muted-foreground">
                  <BookOpen className="mx-auto mb-4 h-12 w-12 opacity-50" />
                  <p>No events added yet. Start adding your semester events!</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {Object.entries(groupedEvents).map(([month, monthEvents]) => (
                    <div key={month}>
                      <h3 className="mb-3 text-lg font-semibold">{month}</h3>
                      <div className="space-y-2">
                        {monthEvents.map((e) => (
                          <div
                            key={e.id}
                            className={`flex items-center justify-between rounded-lg border p-3 ${eventColors[e.type]}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-20 text-sm font-medium">
                                {new Date(e.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              <span>{e.name}</span>
                              <Badge
                                variant="outline"
                                className="text-xs"
                              >
                                {e.type}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeEvent(e.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
