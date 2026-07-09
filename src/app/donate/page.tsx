import { Metadata } from 'next';
import DonateContent from './DonateContent';

export const metadata: Metadata = {
  title: 'Donate - Support Sproutern | Help Students Succeed',
  description:
    'Your contribution helps connect thousands of students with life-changing internships and placements. Support Sproutern to keep career guidance free for all students.',
  keywords: [
    'donate',
    'support students',
    'education funding',
    'career guidance',
    'Sproutern',
  ],
  openGraph: {
    title: 'Support Sproutern - Help Students Succeed',
    description:
      'Your contribution helps connect thousands of students with life-changing internships and placements.',
    type: 'website',
  },
};

export default function DonatePage() {
  return <DonateContent />;
}
