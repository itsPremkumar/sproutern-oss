import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'SOP Outliner - Structure Your Statement of Purpose | Sproutern',
  description:
    'Free SOP outline generator. Create a structured outline for your Statement of Purpose. Perfect for organizing your ideas before writing.',
  keywords: [
    'sop outliner',
    'sop structure',
    'statement of purpose outline',
    'sop planning',
    'application essay',
    'sop format',
  ],
  canonical: '/tools/sop-outliner',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
