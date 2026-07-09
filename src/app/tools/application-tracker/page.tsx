import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import ApplicationTrackerClient from './ApplicationTrackerClient';
import { Sparkles, CheckCircle, Clock, Shield, BarChart3 } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Free Application Tracker - Track Your Job Applications',
  description:
    'Track all your job and internship applications in one place. Monitor application status, interview stages, and offers. Free tool with local storage.',
  keywords: [
    'application tracker',
    'job tracker',
    'internship tracker',
    'job search organizer',
    'application status',
  ],
  canonical: '/tools/application-tracker',
});

export default function ApplicationTrackerPage() {
  const content = toolsSEOContent['application-tracker'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Free Application Tracker
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Track Your Job Applications
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Keep all your job and internship applications organized in one
            place. Track status, interview stages, and never miss a follow-up.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">100% Free</p>
              <p className="text-xs text-muted-foreground">No signup needed</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <BarChart3 className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Visual Stats</p>
              <p className="text-xs text-muted-foreground">Track progress</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Status Tracking</p>
              <p className="text-xs text-muted-foreground">6 stages</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Privacy First</p>
              <p className="text-xs text-muted-foreground">Data stays local</p>
            </div>
          </div>
        </div>

        {/* Application Tracker */}
        <ApplicationTrackerClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="application-tracker"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
