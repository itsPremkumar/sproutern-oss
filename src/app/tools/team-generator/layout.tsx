import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Team Generator - Create Random Teams | Sproutern',
  description:
    'Free team generator to create random teams from a list of names. Perfect for project groups, sports teams, and classroom activities.',
  keywords: [
    'team generator',
    'random team',
    'group maker',
    'team picker',
    'random groups',
    'team selector',
  ],
  canonical: '/tools/team-generator',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
