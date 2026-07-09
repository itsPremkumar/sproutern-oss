import { Metadata } from 'next';
import GDTopicClient from './GDTopicClient';

export const metadata: Metadata = {
  title: 'GD Topic Timer | Sproutern Games',
  description:
    'Practice Group Discussion topics with timed preparation and speaking phases. Includes key points for/against each topic.',
  keywords: [
    'group discussion',
    'gd topics',
    'gd practice',
    'placement gd',
    'mba gd',
  ],
};

export default function GDTopicPage() {
  return (
    <div className="container py-12 md:py-20">
      <GDTopicClient />
    </div>
  );
}
