import type { Metadata } from 'next';

const siteUrl = 'https://sproutern.com';

// Complete SEO metadata for all pages
export const allPagesMetadata = {
  // Main pages
  home: {
    title:
      "Sproutern - Find Internships & Launch Your Career | India's #1 Internship Platform",
    description:
      'Discover 10+ internship opportunities from top startups in India. Get AI-powered resume optimization, skill tests, and career resources. Join 50,000+ students building their careers.',
    keywords:
      'internships India, student internships, startup internships, internship platform, job opportunities, career platform, fresher jobs',
    url: siteUrl,
  },

  about: {
    title: 'About Sproutern | Connecting Students with Startup Opportunities',
    description:
      "Learn about Sproutern's mission to bridge the gap between talented students and innovative startups. Discover how we're revolutionizing internship discovery in India.",
    keywords:
      'about sproutern, internship platform, student career platform, startup hiring',
    url: `${siteUrl}/about`,
  },

  contact: {
    title: 'Contact Us | Get in Touch with Sproutern Support Team',
    description:
      "Have questions? Contact Sproutern's support team. We're here to help students find internships and startups hire talent. Get in touch today.",
    keywords: 'contact sproutern, customer support, help center, get in touch',
    url: `${siteUrl}/contact`,
  },

  faq: {
    title: 'FAQ | Frequently Asked Questions About Internships',
    description:
      'Find answers to common questions about internships, applications, resume building, and using Sproutern. Get help with your career journey.',
    keywords:
      'internship FAQ, career questions, job search help, internship guide',
    url: `${siteUrl}/faq`,
  },

  testimonials: {
    title: 'Student Success Stories | Testimonials & Reviews',
    description:
      "Read success stories from students who landed their dream internships through Sproutern. See how we've helped 10,000+ students start their careers.",
    keywords:
      'student testimonials, success stories, internship reviews, career success',
    url: `${siteUrl}/testimonials`,
  },

  donate: {
    title: 'Support Sproutern | Help Us Empower More Students',
    description:
      "Support Sproutern's mission to provide free career resources and internship opportunities to students across India. Every contribution makes a difference.",
    keywords: 'support sproutern, donate, contribute, help students',
    url: `${siteUrl}/donate`,
  },

  // Internship pages
  internships: {
    title: 'Browse 10+ Internships | Find Your Dream Opportunity',
    description:
      'Explore internship opportunities from top startups across India. Filter by location, domain, stipend, and duration. Apply directly and track your applications.',
    keywords:
      'browse internships, internship listings, startup jobs, student opportunities, internship search',
    url: `${siteUrl}/internships`,
  },

  postInternship: {
    title: 'Post an Internship | Hire Talented Students for Your Startup',
    description:
      'Post internship opportunities and connect with talented students. Get AI-powered candidate matching and streamlined hiring. Free for startups.',
    keywords:
      'post internship, hire interns, recruit students, startup hiring, talent acquisition',
    url: `${siteUrl}/post-internship`,
  },

  requests: {
    title: 'Find Interns | Browse Student Profiles & Hire Talent',
    description:
      'Browse profiles of talented students looking for internships. Post requirements and get matched with qualified candidates. Streamline your hiring process.',
    keywords:
      'find interns, hire students, student profiles, talent search, intern recruitment',
    url: `${siteUrl}/requests`,
  },

  postRequest: {
    title: 'Post Intern Requirement | Find the Perfect Candidate',
    description:
      'Post your intern requirements and let AI match you with qualified students. Get applications from pre-screened candidates.',
    keywords: 'post requirement, hire intern, find candidate, intern matching',
    url: `${siteUrl}/post-request`,
  },

  // Company pages
  companies: {
    title: 'Top Companies Hiring Interns | TCS, Infosys, Wipro & More',
    description:
      "Explore internship opportunities and interview questions from India's top companies. Get insights on salary, work culture, and hiring process.",
    keywords:
      'top companies, company internships, TCS, Infosys, Wipro, company reviews',
    url: `${siteUrl}/companies`,
  },

  offCampusDrives: {
    title: 'Off-Campus Drives | Latest Job Openings for Freshers',
    description:
      'Find latest off-campus drive details for freshers. Get updates on walk-in drives, eligibility criteria, and application deadlines.',
    keywords:
      'off campus drives, fresher jobs, walk-in drives, campus recruitment, job openings',
    url: `${siteUrl}/off-campus-drives`,
  },

  // Auth pages
  signin: {
    title: 'Sign In | Login to Your Sproutern Account',
    description:
      'Sign in to access your Sproutern account. Track applications, save internships, and manage your profile.',
    keywords: 'sign in, login, student login, account access',
    url: `${siteUrl}/signin`,
  },

  signup: {
    title: 'Sign Up | Create Your Free Sproutern Account',
    description:
      'Create your free Sproutern account and start applying to internships. Get access to AI resume optimizer, skill tests, and career resources.',
    keywords: 'sign up, create account, register, student registration',
    url: `${siteUrl}/signup`,
  },

  // Legal pages
  privacyPolicy: {
    title: 'Privacy Policy | How Sproutern Protects Your Data',
    description:
      "Read Sproutern's privacy policy to understand how we collect, use, and protect your personal information.",
    keywords: 'privacy policy, data protection, user privacy, terms of service',
    url: `${siteUrl}/privacy-policy`,
  },

  termsAndConditions: {
    title: 'Terms and Conditions | Sproutern User Agreement',
    description:
      "Read Sproutern's terms and conditions. Understand your rights and responsibilities when using our platform.",
    keywords: 'terms and conditions, user agreement, terms of service, legal',
    url: `${siteUrl}/terms-and-conditions`,
  },

  disclaimer: {
    title: 'Disclaimer | Important Information About Sproutern Services',
    description:
      "Read important disclaimers about using Sproutern's services, internship listings, and career resources.",
    keywords: 'disclaimer, legal notice, service terms',
    url: `${siteUrl}/disclaimer`,
  },
};

// Blog post metadata template
export function generateBlogMetadata(post: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}) {
  return {
    title: `${post.title} | Sproutern Career Blog`,
    description: post.excerpt,
    keywords: `${post.category.toLowerCase()}, career advice, internship tips, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article' as const,
      url: `${siteUrl}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ['Sproutern Team'],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

// Company page metadata template
export function generateCompanyMetadata(company: {
  name: string;
  type: 'interview-questions' | 'salary' | 'profile';
}) {
  const titles = {
    'interview-questions': `${company.name} Interview Questions & Answers | Preparation Guide`,
    salary: `${company.name} Salary Structure | CTC, In-Hand & Benefits`,
    profile: `${company.name} Internships & Jobs | Company Profile & Reviews`,
  };

  const descriptions = {
    'interview-questions': `Prepare for ${company.name} interviews with 50+ commonly asked questions and expert answers. Get tips on technical, HR, and behavioral rounds.`,
    salary: `Complete ${company.name} salary breakdown for freshers and experienced. Know CTC, in-hand salary, benefits, and increment structure.`,
    profile: `Explore ${company.name} internship opportunities, company culture, work environment, and employee reviews. Apply for openings today.`,
  };

  return {
    title: titles[company.type],
    description: descriptions[company.type],
    keywords: `${company.name}, ${company.name} ${company.type.replace('-', ' ')}, ${company.name} careers, ${company.name} jobs`,
    url: `${siteUrl}/companies/${company.name.toLowerCase()}/${company.type}`,
  };
}

export default allPagesMetadata;
