import { Metadata } from 'next';
import GrammarFixerClient from './GrammarFixerClient';

export const metadata: Metadata = {
  title: 'Grammar Fixer | Sproutern Games',
  description:
    'Identify and correct common grammatical errors. Perfect practice for verbal aptitude tests and professional writing.',
  keywords: [
    'grammar quiz',
    'english grammar',
    'verbal aptitude',
    'grammar practice',
    'error spotting',
  ],
};

export default function GrammarFixerPage() {
  return (
    <div className="container py-12 md:py-20">
      <GrammarFixerClient />
    </div>
  );
}
