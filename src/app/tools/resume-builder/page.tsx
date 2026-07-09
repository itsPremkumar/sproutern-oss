import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import ResumeBuilderClient from './ResumeBuilderClient';
import { Sparkles, CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Free Resume Builder',
  description:
    'Build a professional, ATS-friendly resume in minutes. Free resume builder with real-time preview, multiple sections, and instant PDF download. Perfect for freshers and students.',
  keywords: [
    'resume builder',
    'free resume maker',
    'ATS resume',
    'fresher resume',
    'professional resume template',
    'resume generator',
  ],
  canonical: '/tools/resume-builder',
});

export default function ResumeBuilderPage() {
  const content = toolsSEOContent['resume-builder'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Free Resume Builder
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Build Your Professional Resume
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Create an ATS-friendly resume in minutes. Fill in your details,
            preview in real-time, and download as PDF. 100% free, no
            registration required.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">ATS-Friendly</p>
              <p className="text-xs text-muted-foreground">Pass screening</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">10,000+</p>
              <p className="text-xs text-muted-foreground">Resumes created</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">5 Minutes</p>
              <p className="text-xs text-muted-foreground">Average time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Privacy First</p>
              <p className="text-xs text-muted-foreground">Data not stored</p>
            </div>
          </div>
        </div>

        {/* Resume Builder */}
        <ResumeBuilderClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="resume-builder"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
