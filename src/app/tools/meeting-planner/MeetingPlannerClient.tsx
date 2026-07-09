'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Globe,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Plus,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';

interface Timezone {
  name: string;
  offset: number;
  label: string;
}

const timezones: Timezone[] = [
  { name: 'IST', offset: 5.5, label: 'India (IST)' },
  { name: 'EST', offset: -5, label: 'US Eastern (EST)' },
  { name: 'PST', offset: -8, label: 'US Pacific (PST)' },
  { name: 'GMT', offset: 0, label: 'UK (GMT)' },
  { name: 'CET', offset: 1, label: 'Central Europe (CET)' },
  { name: 'JST', offset: 9, label: 'Japan (JST)' },
  { name: 'AEST', offset: 10, label: 'Australia Eastern (AEST)' },
  { name: 'SGT', offset: 8, label: 'Singapore (SGT)' },
  { name: 'CST', offset: -6, label: 'US Central (CST)' },
  { name: 'MST', offset: -7, label: 'US Mountain (MST)' },
];

interface Participant {
  id: string;
  name: string;
  timezone: string;
}

export default function MeetingPlannerClient() {
  const [participants, setParticipants] = useState<Participant[]>([
    { id: '1', name: 'You', timezone: 'IST' },
    { id: '2', name: 'Team Member', timezone: 'EST' },
  ]);
  const [selectedHour, setSelectedHour] = useState<number | null>(null);
  const [baseTimezone, setBaseTimezone] = useState('IST');

  const addParticipant = () => {
    setParticipants([
      ...participants,
      {
        id: Date.now().toString(),
        name: `Participant ${participants.length + 1}`,
        timezone: 'GMT',
      },
    ]);
  };

  const removeParticipant = (id: string) => {
    if (participants.length > 1) {
      setParticipants(participants.filter((p) => p.id !== id));
    }
  };

  const updateParticipant = (
    id: string,
    field: 'name' | 'timezone',
    value: string,
  ) => {
    setParticipants(
      participants.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    );
  };

  const convertTime = (hour: number, fromTz: string, toTz: string) => {
    const fromOffset = timezones.find((t) => t.name === fromTz)?.offset || 0;
    const toOffset = timezones.find((t) => t.name === toTz)?.offset || 0;
    let newHour = hour + (toOffset - fromOffset);
    if (newHour < 0) newHour += 24;
    if (newHour >= 24) newHour -= 24;
    return newHour;
  };

  const isGoodHour = (hour: number) => {
    return participants.every((p) => {
      const localHour = convertTime(hour, baseTimezone, p.timezone);
      return localHour >= 9 && localHour <= 18;
    });
  };

  const formatHour = (hour: number) => {
    const h = hour % 12 || 12;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    return `${h}:00 ${ampm}`;
  };

  const goodMeetingTimes = useMemo(() => {
    const times: number[] = [];
    for (let h = 0; h < 24; h++) {
      // Inline the logic instead of calling isGoodHour to avoid dependency issues
      const isGood = participants.every((p) => {
        const fromOffset =
          timezones.find((t) => t.name === baseTimezone)?.offset || 0;
        const toOffset =
          timezones.find((t) => t.name === p.timezone)?.offset || 0;
        let localHour = h + (toOffset - fromOffset);
        if (localHour < 0) localHour += 24;
        if (localHour >= 24) localHour -= 24;
        return localHour >= 9 && localHour <= 18;
      });
      if (isGood) times.push(h);
    }
    return times;
  }, [participants, baseTimezone]);

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Globe className="h-4 w-4" />
            Free Productivity Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Meeting Planner
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Find the best meeting time across multiple timezones for all
            participants.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">
              {timezones.length} Timezones
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Multi-Person</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Work Hours</span>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Participants</CardTitle>
            <Button
              variant="outline"
              onClick={addParticipant}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Person
            </Button>
          </CardHeader>
          <CardContent className="space-y-3">
            {participants.map((p) => (
              <div
                key={p.id}
                className="flex items-center gap-3"
              >
                <input
                  type="text"
                  value={p.name}
                  onChange={(e) =>
                    updateParticipant(p.id, 'name', e.target.value)
                  }
                  className="flex-1 rounded-lg border bg-muted/50 p-2 outline-none"
                  placeholder="Name"
                />
                <select
                  value={p.timezone}
                  onChange={(e) =>
                    updateParticipant(p.id, 'timezone', e.target.value)
                  }
                  className="rounded-lg border bg-background p-2"
                >
                  {timezones.map((tz) => (
                    <option
                      key={tz.name}
                      value={tz.name}
                    >
                      {tz.label}
                    </option>
                  ))}
                </select>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeParticipant(p.id)}
                  disabled={participants.length <= 1}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="flex items-center gap-4 py-4">
            <span className="font-medium">Show times in:</span>
            <select
              value={baseTimezone}
              onChange={(e) => setBaseTimezone(e.target.value)}
              className="rounded-lg border bg-background px-4 py-2"
            >
              {timezones.map((tz) => (
                <option
                  key={tz.name}
                  value={tz.name}
                >
                  {tz.label}
                </option>
              ))}
            </select>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              Select Meeting Time ({baseTimezone})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-6 gap-2 md:grid-cols-12">
              {Array.from({ length: 24 }, (_, h) => (
                <button
                  key={h}
                  onClick={() => setSelectedHour(h)}
                  className={`rounded-lg p-2 text-center text-sm transition-all ${
                    selectedHour === h
                      ? 'bg-primary text-primary-foreground'
                      : isGoodHour(h)
                        ? 'bg-green-100 hover:bg-green-200 dark:bg-green-900 dark:hover:bg-green-800'
                        : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {formatHour(h)}
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-green-100 dark:bg-green-900" />
                Good for all (9 AM - 6 PM)
              </span>
              <span className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-muted" />
                Outside work hours
              </span>
            </div>
          </CardContent>
        </Card>

        {selectedHour !== null && (
          <Card className="mb-6 border-primary">
            <CardHeader>
              <CardTitle className="text-lg">
                Meeting at {formatHour(selectedHour)} {baseTimezone}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {participants.map((p) => {
                  const localHour = convertTime(
                    selectedHour,
                    baseTimezone,
                    p.timezone,
                  );
                  const isWorkHours = localHour >= 9 && localHour <= 18;
                  return (
                    <div
                      key={p.id}
                      className={`rounded-lg p-4 ${
                        isWorkHours
                          ? 'bg-green-50 dark:bg-green-950'
                          : 'bg-red-50 dark:bg-red-950'
                      }`}
                    >
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-2xl font-bold">
                        {formatHour(localHour)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {p.timezone} •{' '}
                        {isWorkHours
                          ? '✅ Work hours'
                          : '⚠️ Outside work hours'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {goodMeetingTimes.length > 0 && (
          <Card>
            <CardContent className="py-4">
              <div className="text-sm text-muted-foreground">
                Best meeting times (in {baseTimezone}):
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {goodMeetingTimes.map((h) => (
                  <Button
                    key={h}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedHour(h)}
                    className={selectedHour === h ? 'border-primary' : ''}
                  >
                    {formatHour(h)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Time Calculator',
                href: '/tools/time-calculator',
                desc: 'Calculate time',
              },
              {
                title: 'Calendar Generator',
                href: '/tools/calender-generator',
                desc: 'Generate calendars',
              },
              {
                title: 'World Clock',
                href: '/tools/world-clock',
                desc: 'View world times',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
