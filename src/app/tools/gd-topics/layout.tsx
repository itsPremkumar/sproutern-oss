import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'GD Topics - Group Discussion Topics & Tips | Sproutern',
  description:
    'Latest group discussion topics for placement interviews. Practice GD topics with tips, sample answers, and strategies. Prepare for campus placements.',
  keywords: [
    'gd topics',
    'group discussion topics',
    'gd for placements',
    'gd preparation',
    'interview gd',
    'campus placement gd',
  ],
  canonical: '/tools/gd-topics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
