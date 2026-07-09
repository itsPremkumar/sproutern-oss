import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional Email Templates for Students & Freshers',
  description:
    '15+ proven email templates for internship applications, cold emails, referral requests, follow-ups, and job offers. Includes expert tips, subject line formulas, and writing guides. Free templates with 35%+ response rates.',
  keywords: [
    'email templates for students',
    'cold email template internship',
    'follow up email after interview',
    'referral request email',
    'job offer acceptance email',
    'professional email templates',
    'internship application email',
    'cold email to recruiter',
    'email templates India',
    'fresher email templates',
  ],
  openGraph: {
    title: 'Professional Email Templates for Students & Freshers',
    description:
      '15+ proven email templates with expert tips and writing guides. Free templates for internship applications, referrals, and more.',
    type: 'article',
  },
};

export default function EmailTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
