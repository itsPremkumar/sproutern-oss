import { Metadata } from 'next';
import LorSopGeneratorClient from '../lor-sop-generator/LorSopGeneratorClient';
import { FileText, CheckCircle, GraduationCap, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SOP Generator - Free Statement of Purpose Builder',
  description:
    'Create a professional Statement of Purpose (SOP) for your university application. Tailored for MS, MBA, and PhD admissions in US, UK, Canada, and more.',
  keywords: [
    'sop generator',
    'statement of purpose builder',
    'free sop tool',
    'university sop',
    'study abroad sop',
  ],
  alternates: { canonical: '/tools/sop-generator' },
};

export default function SopGeneratorPage() {
  // Reusing the same client as it handles both SOP and LOR. The user interface allows selection.
  // If specific defaulting to SOP is needed, we might need to modify the client or pass props,
  // but looking at usage in lor-sop-generator, it likely defaults or lets user choose.
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FileText className="h-4 w-4" />
            Writing Assistant
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">SOP Generator</h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Craft a compelling Statement of Purpose for your dream university.
          </p>
        </div>

        {/* Trust Signals - slightly adapted for SOP focus */}
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <FileText className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">Instant Draft</p>
              <p className="text-xs text-muted-foreground">AI Powered</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">Pro Structure</p>
              <p className="text-xs text-muted-foreground">Accepted Globally</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Globe className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Study Abroad</p>
              <p className="text-xs text-muted-foreground">US, UK, AU, CA</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <GraduationCap className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">All Degrees</p>
              <p className="text-xs text-muted-foreground">Bachelors to PhD</p>
            </div>
          </div>
        </div>

        {/* Generator Component */}
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold">Generate Your SOP</h2>
          {/* Note: The client component likely provides tabs/options. Using it directly. */}
          <LorSopGeneratorClient />
        </div>
      </div>
    </div>
  );
}
