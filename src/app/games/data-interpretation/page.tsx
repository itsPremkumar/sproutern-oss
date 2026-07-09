import { Metadata } from 'next';
import DataInterpretationClient from './DataInterpretationClient';

export const metadata: Metadata = {
  title: 'Data Interpretation Quiz | Sproutern Games',
  description:
    'Practice data interpretation with tables and charts. Essential for placement aptitude tests and analytics roles.',
  keywords: [
    'data interpretation',
    'DI questions',
    'aptitude test',
    'table analysis',
    'placement prep',
  ],
};

export default function DataInterpretationPage() {
  return (
    <div className="container py-12 md:py-20">
      <DataInterpretationClient />
    </div>
  );
}
