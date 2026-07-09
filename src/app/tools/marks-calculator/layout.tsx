import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marks Calculator | Percentage & CGPA Calculator',
  description:
    'Calculate percentage from marks, total marks required for target percentage, and convert between percentage and CGPA. Free online marks calculator.',
  keywords:
    'marks calculator, percentage calculator, CGPA calculator, marks percentage, exam marks calculator, score calculator',
  openGraph: {
    title: 'Marks Calculator',
    description: 'Calculate your percentage and CGPA from marks instantly.',
    type: 'website',
    url: 'https://www.sproutern.com/tools/marks-calculator',
    siteName: 'Sproutern',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marks Calculator',
    description: 'Free marks to percentage converter.',
  },
  alternates: {
    canonical: 'https://www.sproutern.com/tools/marks-calculator',
  },
};

export default function MarksCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
