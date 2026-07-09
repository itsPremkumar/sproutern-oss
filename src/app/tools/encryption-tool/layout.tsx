import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';

export const metadata: Metadata = generateMetadata({
  title: 'Encryption Tool - Encrypt & Decrypt Text Online | Sproutern',
  description:
    'Free online encryption tool. Encrypt and decrypt text using various algorithms including AES, Base64, and hash functions like MD5, SHA-256.',
  keywords: [
    'encryption tool',
    'encrypt text',
    'decrypt text',
    'aes encryption',
    'base64 encoder',
    'hash generator',
  ],
  canonical: '/tools/encryption-tool',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
