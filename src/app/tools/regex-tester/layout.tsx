import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Regex Tester - Test Regular Expressions Online | Sproutern',
  description:
    'Free online regex tester. Test and debug regular expressions with real-time matching, explanation, and common patterns reference.',
  keywords: [
    'regex tester',
    'regular expression',
    'regex checker',
    'regex validator',
    'pattern matching',
    'regex debugger',
  ],
  canonical: '/tools/regex-tester',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
