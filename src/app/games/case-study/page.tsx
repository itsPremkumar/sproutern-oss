import { Metadata } from 'next';
import CaseStudyClient from './CaseStudyClient';

export const metadata: Metadata = {
  title: 'Case Study Sprint | Sproutern Games',
  description:
    'Solve mini business cases like a consultant. Practice strategic thinking for MBA interviews and consulting roles.',
  keywords: [
    'case study',
    'business strategy',
    'mba prep',
    'consulting case',
    'strategic thinking',
  ],
};

export default function CaseStudyPage() {
  return (
    <div className="container py-12 md:py-20">
      <CaseStudyClient />
    </div>
  );
}
