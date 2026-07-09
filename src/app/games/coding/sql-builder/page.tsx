import { Metadata } from 'next';
import SqlGameClient from './SqlGameClient';

export const metadata: Metadata = {
  title: 'SQL Query Master | Sproutern Games',
  description:
    'Practice SQL queries interactively. Learn SELECT, JOIN, WHERE, GROUP BY, and more through fill-in-the-blank challenges.',
  keywords: [
    'sql practice',
    'sql quiz',
    'learn sql',
    'database queries',
    'sql interview prep',
  ],
};

export default function SqlBuilderPage() {
  return (
    <div className="container py-12 md:py-20">
      <SqlGameClient />
    </div>
  );
}
