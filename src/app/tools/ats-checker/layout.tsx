import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ATS Resume Checker | Optimize Resume for ATS',
  description:
    'Free ATS resume checker to analyze your resume for applicant tracking systems. Get keyword suggestions, formatting tips, and improve your interview chances.',
  keywords:
    'ATS checker, resume scanner, ATS resume, applicant tracking system, resume optimization, keyword optimization, resume score',
  openGraph: {
    title: 'ATS Resume Checker',
    description: 'Check if your resume passes ATS screening systems.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/ats-checker',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATS Resume Checker',
    description: 'Optimize your resume for applicant tracking systems.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/ats-checker',
  },
};

export default function ATSCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
