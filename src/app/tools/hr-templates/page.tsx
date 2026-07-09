import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import HrTemplatesClient from './HrTemplatesClient';
import { FileText, CheckCircle, Clock, Shield, Mail } from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'HR Document Templates - HR Letters',
  description:
    'Free HR document templates for employees. Generate resignation letters, leave applications, NOC requests, relieving letters, and experience certificates instantly.',
  keywords: [
    'resignation letter format',
    'leave application',
    'noc letter format',
    'relieving letter request',
    'experience certificate',
    'hr document templates',
    'internship request email',
  ],
  canonical: '/tools/hr-templates',
});

export default function HrTemplatesPage() {
  const content = toolsSEOContent['hr-templates'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileText className="h-4 w-4" />
            Professional Templates
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            HR Document Templates
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Generate professional HR documents in seconds. Resignation letters,
            leave applications, NOC requests, and more - all with proper
            formatting.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">6 Templates</p>
              <p className="text-xs text-muted-foreground">
                Professional format
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Mail className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">One-Click Copy</p>
              <p className="text-xs text-muted-foreground">Ready to send</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Instant</p>
              <p className="text-xs text-muted-foreground">No signup needed</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Private</p>
              <p className="text-xs text-muted-foreground">Data not stored</p>
            </div>
          </div>
        </div>

        {/* Template Generator */}
        <HrTemplatesClient />

        {content && (
          <div className="mt-20">
            <ToolSEOContent
              toolSlug="hr-templates"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
