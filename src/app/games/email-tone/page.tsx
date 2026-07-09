import { Metadata } from 'next';
import EmailToneClient from './EmailToneClient';

export const metadata: Metadata = {
  title: 'Email Tone Analyzer | Sproutern Games',
  description:
    'Learn professional email etiquette. Identify casual, aggressive, or overly formal tones in workplace communication.',
  keywords: [
    'email etiquette',
    'professional email',
    'business writing',
    'workplace communication',
    'soft skills',
  ],
};

export default function EmailTonePage() {
  return (
    <div className="container py-12 md:py-20">
      <EmailToneClient />
    </div>
  );
}
