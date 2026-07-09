import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { InternshipDetailClient } from '@/components/internships/InternshipDetailClient';

interface Props {
  params: Promise<{ internshipId: string }>;
}

interface Internship {
  id: string;
  jobTitle?: string;
  companyName?: string;
  location?: string;
  description?: string;
  [key: string]: unknown;
}

// Server-side function to check if internship exists
async function getInternship(internshipId: string): Promise<Internship | null> {
  try {
    const docRef = doc(db, 'internships', internshipId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Internship;
    }
    return null;
  } catch (error) {
    console.error('Error fetching internship:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { internshipId } = await params;
  const canonical = `https://www.sproutern.com/internships/${internshipId}`;

  // Default metadata for non-existent internships
  let title = 'Internship Details - Sproutern';
  let description = 'Find the best startup internships on Sproutern.';

  const internship = await getInternship(internshipId);

  if (internship && internship.jobTitle && internship.companyName) {
    title = `${internship.jobTitle} at ${internship.companyName} | Sproutern`;
    description = `Apply for ${internship.jobTitle} internship at ${internship.companyName} in ${internship.location || 'Remote'}. ${internship.description?.substring(0, 150) || ''}...`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: 'https://www.sproutern.com/opengraph.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.sproutern.com/twitter.jpg'],
    },
    alternates: {
      canonical,
      languages: {
        'en-IN': canonical,
        'en-US': canonical,
        'en-GB': canonical,
        'x-default': canonical,
      },
    },
  };
}

export default async function InternshipPage({ params }: Props) {
  const { internshipId } = await params;

  // Check if internship exists - return proper 404 if not
  const internship = await getInternship(internshipId);

  if (!internship) {
    // Return proper 404 status instead of soft 404
    notFound();
  }

  return <InternshipDetailClient />;
}
