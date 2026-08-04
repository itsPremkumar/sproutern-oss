import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interview Checklist Generator | Pre-Interview Prep',
  description:
    'Generate a customized interview preparation checklist. Covers documents, dress code, research, questions to ask, and day-before preparation tasks.',
  keywords:
    'interview checklist, interview preparation, pre-interview, interview tips, what to bring interview, interview day checklist',
  openGraph: {
    title: 'Interview Checklist Generator',
    description: 'Complete interview preparation checklist for your big day.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/interview-checklist',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interview Checklist Generator',
    description: 'Never forget important interview preparation steps.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/interview-checklist',
  },
};

export default function InterviewChecklistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
