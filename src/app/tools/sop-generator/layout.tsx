import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'SOP Generator - Statement of Purpose Writer | Sproutern',
  description:
    'Free SOP generator for university applications. Create compelling Statement of Purpose for MS, MBA, and PhD programs. Templates and guidance included.',
  keywords: [
    'sop generator',
    'statement of purpose',
    'sop template',
    'university application',
    'graduate school sop',
    'sop writing',
  ],
  canonical: '/tools/sop-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
