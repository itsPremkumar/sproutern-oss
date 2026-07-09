import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'GitHub README Generator - Create Amazing READMEs | Sproutern',
  description:
    'Free GitHub README generator. Create professional README.md files for your projects with templates, badges, and markdown formatting.',
  keywords: [
    'github readme generator',
    'readme template',
    'markdown generator',
    'github profile readme',
    'project readme',
    'readme.md',
  ],
  canonical: '/tools/github-readme-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
