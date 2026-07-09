'use client';

import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Eye,
  MousePointerClick,
  LogIn,
  UserPlus,
  Search,
  Briefcase,
  Scroll,
  Clock,
  AlertCircle,
  Activity,
} from 'lucide-react';

interface EventLogEntry {
  id: string;
  eventName: string;
  timestamp: Date;
  params?: Record<string, any>;
}

// Event icon mapping
const eventIcons: Record<string, React.ReactNode> = {
  page_view: <Eye className="h-4 w-4" />,
  login: <LogIn className="h-4 w-4" />,
  sign_up: <UserPlus className="h-4 w-4" />,
  search: <Search className="h-4 w-4" />,
  apply_internship: <Briefcase className="h-4 w-4" />,
  view_internship: <Briefcase className="h-4 w-4" />,
  scroll_depth: <Scroll className="h-4 w-4" />,
  time_on_page: <Clock className="h-4 w-4" />,
  app_error: <AlertCircle className="h-4 w-4" />,
  cta_click: <MousePointerClick className="h-4 w-4" />,
  nav_click: <MousePointerClick className="h-4 w-4" />,
};

// Event color mapping
const eventColors: Record<string, string> = {
  page_view: 'bg-blue-100 text-blue-800',
  login: 'bg-green-100 text-green-800',
  sign_up: 'bg-purple-100 text-purple-800',
  search: 'bg-yellow-100 text-yellow-800',
  apply_internship: 'bg-orange-100 text-orange-800',
  view_internship: 'bg-cyan-100 text-cyan-800',
  scroll_depth: 'bg-gray-100 text-gray-800',
  time_on_page: 'bg-indigo-100 text-indigo-800',
  app_error: 'bg-red-100 text-red-800',
  tool_start: 'bg-teal-100 text-teal-800',
  tool_complete: 'bg-emerald-100 text-emerald-800',
};

export function RealtimeEventFeed() {
  const [events, setEvents] = useState<EventLogEntry[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Simulate events for demonstration
  const simulateEvent = () => {
    const sampleEvents = [
      {
        eventName: 'page_view',
        params: { page_path: '/internships', page_title: 'Internships' },
      },
      {
        eventName: 'scroll_depth',
        params: { percent_scrolled: 50, page_path: '/blog/career-guide' },
      },
      {
        eventName: 'search',
        params: { search_term: 'software engineer', results_count: 12 },
      },
      {
        eventName: 'view_internship',
        params: {
          internship_title: 'Frontend Developer Intern',
          company_name: 'TechCorp',
        },
      },
      {
        eventName: 'cta_click',
        params: { cta_name: 'Apply Now', cta_location: 'internship_card' },
      },
      {
        eventName: 'tool_start',
        params: { tool_name: 'Resume Optimizer', tool_category: 'career' },
      },
      {
        eventName: 'time_on_page',
        params: { page_path: '/about', engagement_time_sec: 30 },
      },
      {
        eventName: 'nav_click',
        params: { nav_item: 'Resources', nav_section: 'main' },
      },
    ];

    const randomEvent =
      sampleEvents[Math.floor(Math.random() * sampleEvents.length)];
    const newEvent: EventLogEntry = {
      id: Date.now().toString(),
      eventName: randomEvent.eventName,
      timestamp: new Date(),
      params: randomEvent.params,
    };

    setEvents((prev) => [newEvent, ...prev].slice(0, 50));
  };

  // Start/stop simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(simulateEvent, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSimulating]);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Real-time Event Feed
            </CardTitle>
            <CardDescription>
              Live view of analytics events (simulated for demo)
            </CardDescription>
          </div>
          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              isSimulating
                ? 'bg-red-100 text-red-800 hover:bg-red-200'
                : 'bg-green-100 text-green-800 hover:bg-green-200'
            }`}
          >
            {isSimulating ? 'Stop Simulation' : 'Start Simulation'}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          {events.length === 0 ? (
            <div className="flex h-[300px] flex-col items-center justify-center text-muted-foreground">
              <Activity className="mb-4 h-12 w-12 opacity-50" />
              <p>No events yet</p>
              <p className="text-sm">
                Click "Start Simulation" to see demo events
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex items-start gap-3 rounded-lg border bg-card p-3 transition-colors hover:bg-muted/50"
                >
                  <div
                    className={`rounded-md p-2 ${eventColors[event.eventName] || 'bg-gray-100'}`}
                  >
                    {eventIcons[event.eventName] || (
                      <Activity className="h-4 w-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="font-mono text-xs"
                      >
                        {event.eventName}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {event.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    {event.params && (
                      <div className="mt-1 overflow-x-auto rounded bg-muted/50 p-2 font-mono text-xs text-muted-foreground">
                        {Object.entries(event.params).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-primary">{key}</span>:{' '}
                            {String(value)}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
