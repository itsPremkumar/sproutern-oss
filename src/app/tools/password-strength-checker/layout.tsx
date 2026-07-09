import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Password Strength Checker - Test Password Security | Sproutern',
  description:
    'Free password strength checker. Test how strong your password is and get suggestions for improvement. Check against common password patterns.',
  keywords: [
    'password strength checker',
    'password test',
    'password security',
    'password analyzer',
    'how strong is my password',
    'password checker',
  ],
  canonical: '/tools/password-strength-checker',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
