export function getCitationText(
  title: string,
  author: string,
  url: string,
  date: string,
): string {
  const accessDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `${author}. "${title}." Sproutern, ${date}, ${url}. Accessed ${accessDate}.`;
}

export function getEntityKeywords(category: string): string[] {
  const baseKeywords = ['Sproutern', 'Career Development', 'Internships'];
  const categoryMap: Record<string, string[]> = {
    'Interview Prep': [
      'Interview Questions',
      'Technical Interview',
      'HR Interview',
      'Mock Interview',
    ],
    'Resume Tips': [
      'Resume Builder',
      'CV Writing',
      'ATS Optimization',
      'Resume Templates',
    ],
    'Career Guide': [
      'Career Planning',
      'Job Search Strategy',
      'Career Growth',
      'Professional Development',
    ],
    'Personal Branding': [
      'LinkedIn Optimization',
      'Personal Portfolio',
      'Online Presence',
      'Networking',
    ],
    'MNC Placement Prep': [
      'MNC Recruitment',
      'Campus Placement',
      'Off-Campus Drive',
      'Aptitude Test',
    ],
    'Remote Work': [
      'Work from Home',
      'Remote Jobs',
      'Digital Nomad',
      'Remote Internship',
    ],
  };

  return [...baseKeywords, ...(categoryMap[category] || [])];
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
