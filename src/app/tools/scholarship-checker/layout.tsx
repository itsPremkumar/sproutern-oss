import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scholarship Eligibility Checker | Find Scholarships',
  description:
    'Check your eligibility for 15+ scholarships in India including NTSE, INSPIRE, Central Sector Scheme, and more. Filter by category, income, and education level.',
  keywords:
    'scholarship eligibility checker, scholarships India, NTSE scholarship, INSPIRE scholarship, government scholarships, SC ST scholarships, merit scholarships',
  openGraph: {
    title: 'Scholarship Eligibility Checker | Find Scholarships in India',
    description:
      'Check your eligibility for 15+ government and private scholarships. Filter by academic percentage, family income, category, and education level.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/tools/scholarship-checker',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scholarship Eligibility Checker',
    description:
      'Find scholarships you are eligible for based on your academic profile.',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/tools/scholarship-checker',
  },
};

export default function ScholarshipCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
