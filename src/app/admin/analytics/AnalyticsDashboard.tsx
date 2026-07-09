'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { AnalyticsCards } from './AnalyticsCards';
import { RealtimeEventFeed } from './RealtimeEventFeed';
import { EventBreakdown } from './EventBreakdown';
import { TopPages } from './TopPages';
import { UserEngagementChart } from './UserEngagementChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RefreshCw, ExternalLink, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export interface AnalyticsEvent {
  id: string;
  eventName: string;
  eventParams: Record<string, any>;
  timestamp: Date;
  userId?: string;
}

export function AnalyticsDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  const handleRefresh = () => {
    setLastRefresh(new Date());
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      {/* Info Banner */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Firebase Analytics Integration</AlertTitle>
        <AlertDescription className="flex flex-col gap-2">
          <span>
            This dashboard shows analytics event tracking configured in your
            app. For full analytics reports, visit the Firebase Console.
          </span>
          <Link
            href="https://console.firebase.google.com/project/_/analytics"
            target="_blank"
            className="inline-flex w-fit items-center gap-1 text-primary hover:underline"
          >
            Open Firebase Analytics Console <ExternalLink className="h-3 w-3" />
          </Link>
        </AlertDescription>
      </Alert>

      {/* Header with Refresh */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            Last updated: {lastRefresh.toLocaleTimeString()}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleRefresh}
          disabled={isLoading}
        >
          <RefreshCw
            className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`}
          />
          Refresh
        </Button>
      </div>

      {/* Analytics Overview Cards */}
      <AnalyticsCards isLoading={isLoading} />

      {/* Main Content Tabs */}
      <Tabs
        defaultValue="overview"
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="events">Event Tracking</TabsTrigger>
          <TabsTrigger value="engagement">User Engagement</TabsTrigger>
          <TabsTrigger value="setup">Setup Guide</TabsTrigger>
        </TabsList>

        <TabsContent
          value="overview"
          className="space-y-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TopPages isLoading={isLoading} />
            <EventBreakdown isLoading={isLoading} />
          </div>
        </TabsContent>

        <TabsContent
          value="events"
          className="space-y-4"
        >
          <RealtimeEventFeed />
        </TabsContent>

        <TabsContent
          value="engagement"
          className="space-y-4"
        >
          <UserEngagementChart isLoading={isLoading} />
        </TabsContent>

        <TabsContent
          value="setup"
          className="space-y-4"
        >
          <SetupGuide />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function SetupGuide() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Events Being Tracked</CardTitle>
          <CardDescription>
            The following events are automatically tracked across your site
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Page & Navigation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    page_view
                  </code>{' '}
                  - All page visits
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    scroll_depth
                  </code>{' '}
                  - 25%, 50%, 75%, 100%
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    time_on_page
                  </code>{' '}
                  - Engagement time
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    nav_click
                  </code>{' '}
                  - Navigation clicks
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    outbound_click
                  </code>{' '}
                  - External links
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Authentication</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  • <code className="rounded bg-muted px-1 text-xs">login</code>{' '}
                  - User logins
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">sign_up</code>{' '}
                  - New registrations
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">logout</code>{' '}
                  - User logouts
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Internships</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    view_internship
                  </code>{' '}
                  - Internship views
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    apply_internship
                  </code>{' '}
                  - Applications
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">search</code>{' '}
                  - Search queries
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    filter_applied
                  </code>{' '}
                  - Filter usage
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>More Events</CardTitle>
          <CardDescription>
            Additional tracking events implemented
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Tools & Content</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    tool_start
                  </code>{' '}
                  - Tool opened
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    tool_complete
                  </code>{' '}
                  - Tool completed
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    blog_view
                  </code>{' '}
                  - Blog article views
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    resource_download
                  </code>{' '}
                  - Downloads
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Profile & Errors</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    profile_update
                  </code>{' '}
                  - Profile changes
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    resume_upload
                  </code>{' '}
                  - Resume uploads
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    app_error
                  </code>{' '}
                  - Application errors
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    form_error
                  </code>{' '}
                  - Form validation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">User Properties</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    user_type
                  </code>{' '}
                  - student/startup/admin
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    engagement_level
                  </code>{' '}
                  - low/medium/high
                </li>
                <li>
                  •{' '}
                  <code className="rounded bg-muted px-1 text-xs">
                    signup_date
                  </code>{' '}
                  - Registration date
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Firebase Console Setup</CardTitle>
          <CardDescription>
            Configure custom dimensions and audiences in Firebase Console for
            deeper insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold">1. Custom Dimensions</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Set up in Firebase Console → Analytics → Custom Definitions
              </p>
              <ul className="space-y-1 text-sm">
                <li>• user_type (User scope)</li>
                <li>• engagement_level (User scope)</li>
                <li>• tool_name (Event scope)</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">2. Conversions</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Mark key events as conversions
              </p>
              <ul className="space-y-1 text-sm">
                <li>• sign_up</li>
                <li>• apply_internship</li>
                <li>• complete_profile</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">3. Audiences</h4>
              <p className="mb-2 text-sm text-muted-foreground">
                Create user segments for targeting
              </p>
              <ul className="space-y-1 text-sm">
                <li>• Active Students (7-day)</li>
                <li>• High Engagement Users</li>
                <li>• Tool Power Users</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
