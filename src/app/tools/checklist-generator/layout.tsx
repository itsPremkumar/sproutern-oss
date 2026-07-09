import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Checklist Generator - Create Custom Checklists | Sproutern',
  description:
    'Free checklist generator to create custom checklists for any task. Perfect for projects, travel, events, and daily routines.',
  keywords: [
    'checklist generator',
    'checklist maker',
    'task list',
    'to-do list',
    'custom checklist',
    'printable checklist',
  ],
  canonical: '/tools/checklist-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
