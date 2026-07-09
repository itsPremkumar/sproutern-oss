import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import SalaryInsightsClient from './SalaryInsightsClient';
import {
  IndianRupee,
  TrendingUp,
  Building2,
  Users,
  Shield,
} from 'lucide-react';
import { ToolSEOContent } from '@/components/seo/ToolSEOContent';
import { toolsSEOContent } from '@/lib/seo/tool-seo-content';

export const metadata: Metadata = generateMetadata({
  title: 'Company Salary Insights India - Salaries',
  description:
    'Compare fresher salaries across TCS, Infosys, Google, Amazon, Microsoft and 15+ companies in India. Get accurate salary ranges, bond details, and work locations.',
  keywords: [
    'fresher salary india',
    'tcs salary',
    'infosys salary',
    'google salary india',
    'amazon sde salary',
    'it company salaries',
    'service company salary',
    'product company salary',
  ],
  canonical: '/tools/salary-insights',
});

export default function SalaryInsightsPage() {
  const content = toolsSEOContent['salary-insights'];

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <IndianRupee className="h-4 w-4" />
            Salary Data
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Company Salary Insights
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Compare fresher and experienced salaries across top IT companies in
            India. Make informed decisions about your career.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <Building2 className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">15+ Companies</p>
              <p className="text-xs text-muted-foreground">Verified data</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <TrendingUp className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Recently Updated</p>
              <p className="text-xs text-muted-foreground">Latest figures</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Users className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">All Levels</p>
              <p className="text-xs text-muted-foreground">Fresher to 3 YOE</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Bond Info</p>
              <p className="text-xs text-muted-foreground">
                Service agreements
              </p>
            </div>
          </div>
        </div>

        {/* Salary Data Component */}
        <SalaryInsightsClient />

        {content && (
          <div className="mt-12">
            <ToolSEOContent
              toolSlug="salary-insights"
              enhancedContent={content}
            />
          </div>
        )}
      </div>
    </div>
  );
}
