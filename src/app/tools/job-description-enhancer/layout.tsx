import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Description Enhancer - AI-Powered JD Generator',
  description:
    'Create professional, inclusive, and attractive job descriptions in seconds with our AI-powered Job Description Enhancer. Perfect for startups and recruiters.',
  keywords: [
    'job description generator',
    'AI job description',
    'JD enhancer',
    'recruitment tools',
    'hiring tools',
    'startup hiring',
    'job post optimizer',
  ],
  openGraph: {
    title: 'Job Description Enhancer - AI-Powered JD Generator',
    description:
      'Create professional, inclusive, and attractive job descriptions in seconds with our AI-powered Job Description Enhancer.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/job-description-enhancer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Description Enhancer - AI-Powered JD Generator',
    description:
      'Create professional, inclusive, and attractive job descriptions in seconds with our AI-powered Job Description Enhancer.',
  },
};

export default function JobDescriptionEnhancerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
