'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Clock, Search, MapPin } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

interface TimeZone {
  name: string;
  label: string;
  offset: string;
}

const timeZones: TimeZone[] = [
  { name: 'Asia/Kolkata', label: 'India (IST)', offset: '+05:30' },
  { name: 'America/New_York', label: 'New York (EST)', offset: '-05:00' },
  { name: 'America/Los_Angeles', label: 'Los Angeles (PST)', offset: '-08:00' },
  { name: 'Europe/London', label: 'London (GMT)', offset: '+00:00' },
  { name: 'Europe/Paris', label: 'Paris (CET)', offset: '+01:00' },
  { name: 'Asia/Dubai', label: 'Dubai (GST)', offset: '+04:00' },
  { name: 'Asia/Singapore', label: 'Singapore (SGT)', offset: '+08:00' },
  { name: 'Asia/Tokyo', label: 'Tokyo (JST)', offset: '+09:00' },
  { name: 'Australia/Sydney', label: 'Sydney (AEST)', offset: '+11:00' },
  { name: 'Pacific/Auckland', label: 'Auckland (NZST)', offset: '+13:00' },
  { name: 'America/Toronto', label: 'Toronto (EST)', offset: '-05:00' },
  { name: 'America/Chicago', label: 'Chicago (CST)', offset: '-06:00' },
  { name: 'Europe/Berlin', label: 'Berlin (CET)', offset: '+01:00' },
  { name: 'Asia/Shanghai', label: 'Shanghai (CST)', offset: '+08:00' },
  { name: 'Asia/Hong_Kong', label: 'Hong Kong (HKT)', offset: '+08:00' },
];

export default function WorldClockPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZones, setSelectedZones] = useState<string[]>([
    'Asia/Kolkata',
    'America/New_York',
    'Europe/London',
    'Asia/Singapore',
  ]);
  const content = toolsSEOContent['world-clock'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getTimeInZone = (timeZone: string) => {
    return currentTime.toLocaleTimeString('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const getDateInZone = (timeZone: string) => {
    return currentTime.toLocaleDateString('en-US', {
      timeZone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  const toggleZone = (zoneName: string) => {
    if (selectedZones.includes(zoneName)) {
      setSelectedZones(selectedZones.filter((z) => z !== zoneName));
    } else {
      setSelectedZones([...selectedZones, zoneName]);
    }
  };

  const filteredZones = timeZones.filter((tz) =>
    tz.label.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Globe className="h-4 w-4" />
            Utility Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold">World Clock</h1>
          <p className="text-xl text-muted-foreground">
            View current time across different time zones
          </p>
        </div>

        {/* Selected Time Zones */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {selectedZones.map((zoneName) => {
            const tz = timeZones.find((t) => t.name === zoneName);
            if (!tz) return null;

            const hours = parseInt(getTimeInZone(zoneName).split(':')[0]);
            const isNight =
              hours >= 7 && hours <= 12
                ? false
                : hours > 12 && hours <= 18
                  ? false
                  : true;

            return (
              <Card
                key={zoneName}
                className={`${isNight ? 'bg-slate-900 text-white' : 'bg-amber-50'} border-none`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="mb-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 opacity-70" />
                        <span className="font-medium">{tz.label}</span>
                      </div>
                      <p className="text-xs opacity-70">{tz.offset} UTC</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleZone(zoneName)}
                      className={isNight ? 'text-white hover:bg-white/10' : ''}
                    >
                      ✕
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="font-mono text-4xl font-bold">
                      {getTimeInZone(zoneName)}
                    </p>
                    <p className="mt-1 text-sm opacity-70">
                      {getDateInZone(zoneName)}
                    </p>
                  </div>
                  <div className="mt-2">{isNight ? '🌙' : '☀️'}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Add More Zones */}
        <Card>
          <CardContent className="pt-6">
            <h3 className="mb-4 flex items-center gap-2 font-semibold">
              <Clock className="h-4 w-4" />
              Add Time Zones
            </h3>
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md border py-2 pl-10 pr-4"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {filteredZones.map((tz) => (
                <Button
                  key={tz.name}
                  variant={
                    selectedZones.includes(tz.name) ? 'default' : 'outline'
                  }
                  size="sm"
                  onClick={() => toggleZone(tz.name)}
                >
                  {tz.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="world-clock"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
