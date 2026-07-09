import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  FileText,
  Target,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  GraduationCap,
  Sparkles,
  Clock,
  Shield,
  ArrowRight,
  Heart,
  Lightbulb,
  MessageSquare,
  Globe,
  Mail,
  Palette,
  Search,
  Calculator,
  Linkedin,
  Banknote,
  Code,
  Youtube,
  Award,
  ExternalLink,
  Download,
  BookMarked,
  PenTool,
  Laptop,
  Brain,
  Rocket,
} from 'lucide-react';

export const metadata = getPageSEO('resources');

export default function ResourcesPage() {
  const schemas = getPageSchema('resources');

  const resources = [
    {
      icon: <FileText className="h-10 w-10 text-primary" />,
      title: 'Resume Writing Guide',
      description:
        'Complete guide to crafting ATS-friendly resumes that get noticed by recruiters and pass automated screening systems',
      link: '/resources/resume-guide',
      items: [
        '30+ resume templates',
        'Industry-specific examples',
        'ATS optimization tips',
        'Action verb library',
      ],
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Interview Preparation',
      description:
        'Master the art of interviewing with our comprehensive preparation resources covering HR, technical, and behavioral rounds',
      link: '/resources/interview-prep',
      items: [
        '100+ common questions',
        'STAR method templates',
        'Mock interview tips',
        'Salary negotiation guide',
      ],
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: 'Career Planning',
      description:
        'Strategic career planning tools and roadmaps for students and professionals across different industries',
      link: '/resources/career-planning',
      items: [
        'Career assessments',
        'Goal setting worksheets',
        'Industry roadmaps',
        '5-year plan templates',
      ],
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: 'Skill Development',
      description:
        'Curated learning resources to develop in-demand technical and soft skills for job market',
      link: '/resources/skill-development',
      items: [
        'Technical skills guides',
        'Soft skills training',
        'Industry certifications',
        'Free learning resources',
      ],
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: 'Networking Guide',
      description:
        'Build meaningful professional connections and expand your network effectively for career growth',
      link: '/resources/networking',
      items: [
        'LinkedIn optimization',
        'Networking events tips',
        'Cold outreach templates',
        'Mentorship finding',
      ],
    },
    {
      icon: <Linkedin className="h-10 w-10 text-primary" />,
      title: 'LinkedIn Optimization',
      description:
        'Student-friendly LinkedIn guide covering headlines, summaries, projects, and weekly visibility habits that improve recruiter discovery',
      link: '/resources/linkedin-optimization',
      items: [
        'Headline examples',
        'About section framework',
        'Project positioning tips',
        'Weekly visibility checklist',
      ],
    },
    {
      icon: <Banknote className="h-10 w-10 text-primary" />,
      title: 'Salary Negotiation',
      description:
        'Practical negotiation guidance for internships and job offers with scripts, timing rules, and offer evaluation checklists',
      link: '/resources/salary-negotiation',
      items: [
        'Negotiation scripts',
        'Offer evaluation checklist',
        'Compensation breakdown help',
        'Common mistakes to avoid',
      ],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'GitHub Profile Guide',
      description:
        'Practical guidance for improving your GitHub profile, pinned repositories, README quality, and recruiter-facing project presentation',
      link: '/resources/github-profile',
      items: [
        'Pinned repo strategy',
        'README structure tips',
        'Project documentation ideas',
        'Recruiter-friendly profile signals',
      ],
    },
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: 'ATS Resume Keywords',
      description:
        'Learn how to extract resume keywords from job descriptions and place them naturally for better ATS and recruiter matching',
      link: '/resources/ats-resume-keywords',
      items: [
        'Keyword extraction workflow',
        'JD-to-resume examples',
        'ATS-safe wording tips',
        'Common keyword mistakes',
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      title: 'Industry Insights',
      description:
        'Stay updated with latest trends, salary benchmarks, and insights across various industries in India',
      link: '/resources/industry-insights',
      items: [
        'Market trends',
        'Salary benchmarks',
        'Company reviews',
        'Hiring trends',
      ],
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: 'Global Career Resources',
      description:
        'Essential resources for students planning to study or work abroad (USA, UK, Europe, etc.)',
      link: '/countries',
      items: [
        'Country guides',
        'Visa checklists',
        'SOP/LOR templates',
        'International scholarships',
      ],
    },
    {
      icon: <Calculator className="h-10 w-10 text-primary" />,
      title: 'Aptitude & Reasoning',
      description:
        'Master quantitative aptitude, logical reasoning, and verbal ability for placement tests and competitive exams',
      link: '/resources/aptitude-formulas',
      items: [
        'Aptitude formulas PDF',
        'Logical reasoning shortcuts',
        'Verbal ability tips',
        'Practice question banks',
      ],
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: 'Email Templates',
      description:
        'Professional email templates for job applications, follow-ups, networking, and thank you notes',
      link: '/resources/email-templates',
      items: [
        'Job application emails',
        'Cold outreach templates',
        'Follow-up emails',
        'Thank you note formats',
      ],
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: 'Portfolio Building',
      description:
        'Create stunning portfolios that showcase your work and impress recruiters across industries',
      link: '/resources/portfolio-templates',
      items: [
        'Portfolio website templates',
        'Project showcase tips',
        'GitHub profile optimization',
        'Design portfolio guides',
      ],
    },
    {
      icon: <BookMarked className="h-10 w-10 text-primary" />,
      title: 'Interview Cheat Sheets',
      description:
        'Quick reference guides and cheat sheets for last-minute interview preparation',
      link: '/resources/interview-cheatsheet',
      items: [
        'HR questions quick guide',
        'Technical interview tips',
        'DSA problem patterns',
        'System design basics',
      ],
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: 'Cover Letters',
      description:
        'Professional cover letter templates and writing guides for different industries and roles',
      link: '/resources/cover-letters',
      items: [
        'IT industry templates',
        'Fresher cover letters',
        'Internship applications',
        'Career change letters',
      ],
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: 'Coding Resources',
      description:
        'Essential coding practice resources, DSA guides, and programming interview preparation materials',
      link: '/dsa',
      items: [
        'DSA roadmaps',
        'Coding patterns guide',
        'LeetCode strategies',
        'Company-wise questions',
      ],
    },
  ];

  // External learning platforms for students
  const externalPlatforms = [
    {
      name: 'Coursera',
      description: 'Free courses from top universities with certificates',
      url: 'https://www.coursera.org/',
      category: 'Learning Platform',
      highlight: 'Financial aid available',
    },
    {
      name: 'edX',
      description: 'Harvard, MIT courses with verified certificates',
      url: 'https://www.edx.org/',
      category: 'Learning Platform',
      highlight: 'Audit courses free',
    },
    {
      name: 'freeCodeCamp',
      description: 'Free coding bootcamp with projects and certifications',
      url: 'https://www.freecodecamp.org/',
      category: 'Coding',
      highlight: '100% Free',
    },
    {
      name: 'Khan Academy',
      description: 'Free learning platform for fundamentals and aptitude',
      url: 'https://www.khanacademy.org/',
      category: 'Learning Platform',
      highlight: 'Completely free',
    },
    {
      name: 'LeetCode',
      description: 'Practice coding problems for technical interviews',
      url: 'https://leetcode.com/',
      category: 'Coding',
      highlight: 'Free tier available',
    },
    {
      name: 'GeeksforGeeks',
      description: 'DSA tutorials, practice problems, and interview prep',
      url: 'https://www.geeksforgeeks.org/',
      category: 'Coding',
      highlight: 'Free tutorials',
    },
    {
      name: 'HackerRank',
      description: 'Coding challenges and skill verification badges',
      url: 'https://www.hackerrank.com/',
      category: 'Coding',
      highlight: 'Free certifications',
    },
    {
      name: 'LinkedIn Learning',
      description: 'Professional courses with 1-month free trial',
      url: 'https://www.linkedin.com/learning/',
      category: 'Skills',
      highlight: 'Free with library card',
    },
    {
      name: 'Google Digital Garage',
      description: 'Free Google certifications in digital marketing & more',
      url: 'https://learndigital.withgoogle.com/',
      category: 'Certifications',
      highlight: 'Free Google certs',
    },
    {
      name: 'NPTEL',
      description: 'IIT/IISc courses with government-recognized certificates',
      url: 'https://nptel.ac.in/',
      category: 'Learning Platform',
      highlight: 'AICTE recognized',
    },
    {
      name: 'Udemy',
      description: 'Affordable courses on any skill with lifetime access',
      url: 'https://www.udemy.com/',
      category: 'Learning Platform',
      highlight: 'Frequent sales',
    },
    {
      name: 'Codecademy',
      description: 'Interactive coding courses for beginners',
      url: 'https://www.codecademy.com/',
      category: 'Coding',
      highlight: 'Free basic courses',
    },
  ];

  // Free certifications
  const freeCertifications = [
    {
      name: 'AWS Cloud Practitioner Essentials',
      provider: 'Amazon Web Services',
      url: 'https://aws.amazon.com/training/',
      duration: '6 hours',
      skill: 'Cloud Computing',
    },
    {
      name: 'Google Analytics Certification',
      provider: 'Google',
      url: 'https://analytics.google.com/analytics/academy/',
      duration: '4-6 hours',
      skill: 'Analytics',
    },
    {
      name: 'HubSpot Digital Marketing',
      provider: 'HubSpot Academy',
      url: 'https://academy.hubspot.com/',
      duration: '4 hours',
      skill: 'Marketing',
    },
    {
      name: 'Microsoft Learn AI Fundamentals',
      provider: 'Microsoft',
      url: 'https://docs.microsoft.com/learn/',
      duration: '10 hours',
      skill: 'AI/ML',
    },
    {
      name: 'GitHub Foundations',
      provider: 'GitHub',
      url: 'https://skills.github.com/',
      duration: '8 hours',
      skill: 'Version Control',
    },
    {
      name: 'Meta Social Media Marketing',
      provider: 'Meta',
      url: 'https://www.facebook.com/business/learn/',
      duration: '6 hours',
      skill: 'Social Media',
    },
    {
      name: 'Salesforce Trailhead Ranger',
      provider: 'Salesforce',
      url: 'https://trailhead.salesforce.com/',
      duration: '40+ hours',
      skill: 'CRM',
    },
    {
      name: 'MongoDB University Courses',
      provider: 'MongoDB',
      url: 'https://learn.mongodb.com/',
      duration: '8-16 hours',
      skill: 'Database',
    },
  ];

  const faqs = [
    {
      question: 'Are these career resources really free?',
      answer:
        'Yes, all resources on Sproutern are 100% free to access and download. We believe quality career guidance should be accessible to every student in India. There are no hidden charges or premium tiers.',
    },
    {
      question: 'How do I use the resume templates?',
      answer:
        'Simply visit our Resume Guide section, choose a template that matches your industry and experience level, download it in your preferred format (Word/PDF), and customize it with your information. We also provide step-by-step instructions for each template.',
    },
    {
      question: 'Can I get personalized career advice?',
      answer:
        'While our resources are self-serve, we offer AI-powered tools like our Resume Optimizer and Career Roadmap Generator that provide personalized recommendations based on your profile. You can also explore our blog for expert insights.',
    },
    {
      question: 'How often are resources updated?',
      answer:
        'We update our resources whenever hiring practices, templates, policies, or job-market expectations materially change. Larger revisions happen in batches, with smaller improvements rolling out continuously.',
    },
    {
      question: 'Are these resources relevant for freshers?',
      answer:
        'Absolutely! Our resources are specifically designed for students and freshers in India. We cover everything from building your first resume to preparing for campus placements at top companies like TCS, Infosys, and startups.',
    },
    {
      question: 'How do I prepare for technical interviews?',
      answer:
        'Visit our Interview Preparation section for comprehensive technical interview guides. We cover DSA preparation, system design basics, coding practice resources, and company-specific interview patterns. Check our blog for detailed guides on cracking interviews at specific companies.',
    },
  ];

  // FAQ Schema for SEO
  const faqSchema = {
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
  const breadcrumbSchema = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.sproutern.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://www.sproutern.com/resources',
      },
    ],
  };

  return (
    <div className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema([
          ...schemas,
          breadcrumbSchema,
          faqSchema,
        ])}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80">
        <div className="container py-16 text-center md:py-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <GraduationCap className="h-4 w-4" />
            India's Leading Career Education Platform
          </div>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Career Resources Hub
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-white/90">
            Everything you need to succeed in your career journey. Free
            templates, guides, and tools curated by career experts to help you
            land your dream internship or job.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
            >
              <Link href="/tools">Explore Free Tools</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <Link href="/blog">Read Career Blog</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why We Built This Resource Hub - Personal Story */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-8 dark:border-indigo-900 dark:from-indigo-950/30 dark:to-blue-950/30">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
              <Heart className="h-6 w-6 text-red-500" />
              Why We Built This Resource Hub
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We built this hub after spending countless hours searching for
                quality career guidance. The problem was not a lack of
                information. It was{' '}
                <strong>too much scattered, low-quality information</strong>.
                Students kept bouncing between random websites, videos, and
                PDFs without knowing which advice was actually useful.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Premium courses cost thousands of rupees that most students
                couldn't afford. Free resources were often outdated, generic, or
                clearly designed for Western job markets. The advice about
                "perfect handshakes" and "business casual dress codes" didn't
                translate well to India, where interview practices and
                expectations are different.
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                That gap became the reason Sproutern built this resource hub.
                <strong>We wanted to create the kind of library students can
                actually use</strong>
                : a practical, free destination with better tools, clearer
                structure, and advice that reflects real hiring expectations.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                Every resource on this page has been researched, written, and
                reviewed with one question in mind: "Would this have helped me
                when I was struggling?" If the answer is yes, it's here. If
                something is generic or unhelpful, we don't include it. That's
                our quality standard, and it's why thousands of students across
                India now trust Sproutern for their career preparation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Here - Detailed Overview */}
      <section className="container pb-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-6 w-6 text-purple-500" />
            What You'll Find in Our Resource Library
          </h2>
          <p className="mb-8 leading-relaxed text-muted-foreground">
            Sproutern's Resource Hub isn't just a collection of random articles
            — it's a carefully structured learning system that takes you from
            uncertainty to interview confidence. Here's an overview of what we
            offer and how each section can help you:
          </p>

          <div className="space-y-6">
            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900">
                  <FileText className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    Resume Writing Guide
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    Your resume is often the first thing recruiters see — and in
                    most cases, they spend less than 7 seconds on it. Our resume
                    guide goes beyond generic advice to teach you how to craft a
                    document that passes both ATS (Automated Tracking Systems)
                    and human screening. We cover everything from choosing the
                    right format for your experience level, to writing
                    achievement-focused bullet points that quantify your impact,
                    to industry-specific tips for tech, finance, marketing, and
                    more.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    What makes our guide different: We include{' '}
                    <strong>real before-and-after examples</strong> from Indian
                    students who improved their resumes and landed interviews at
                    top companies. Every template has been tested with actual
                    ATS software to ensure compatibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900">
                  <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">
                    Interview Preparation
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    Interview preparation is about more than memorizing answers
                    — it's about developing the confidence to think on your feet
                    and communicate your value clearly. Our interview prep
                    section covers the entire spectrum: HR questions, technical
                    interviews, behavioral rounds, group discussions, and
                    virtual interview etiquette. Each question comes with not
                    just sample answers, but strategic frameworks you can adapt
                    to any situation.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    What makes our guide different: We've collected{' '}
                    <strong>
                      real interview questions from actual campus placements
                    </strong>{' '}
                    at companies like TCS, Infosys, Wipro, Cognizant, and
                    various startups. The examples reflect what Indian
                    recruiters actually ask, not generic Western interview
                    content.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">Career Planning</h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    Many students feel lost when thinking about their career
                    direction. Should you go for a product company or a service
                    company? Is an MBA worth it, or should you gain work
                    experience first? What skills should you prioritize? Our
                    career planning section provides strategic frameworks to
                    help you make these decisions confidently, based on data
                    about career trajectories in different industries.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    What makes our guide different: We include{' '}
                    <strong>realistic salary progression data</strong> for
                    different career paths in India, drawn from surveys and
                    verified sources. You'll see actual numbers, not vague
                    promises about "good opportunities."
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900">
                  <Lightbulb className="h-6 w-6 text-orange-600 dark:text-orange-300" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold">Skill Development</h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    The job market changes constantly, and staying relevant
                    requires continuous learning. But with so many online
                    courses, certifications, and bootcamps available, how do you
                    know which skills are actually worth investing time in? Our
                    skill development section cuts through the noise to focus on
                    competencies that are genuinely in demand — both technical
                    skills like programming languages and cloud platforms, and
                    soft skills like communication and leadership.
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    What makes our guide different: We analyze{' '}
                    <strong>actual job postings in India</strong> to identify
                    which skills appear most frequently in requirements. No
                    guessing — just data-driven recommendations for what to
                    learn next.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="bg-muted/30 py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
              <Shield className="h-5 w-5 text-green-600" />
              Our Commitment to Quality
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Unlike many "career guidance" websites that regurgitate the same
              generic advice, every piece of content on Sproutern goes through a
              rigorous quality process:
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Research-backed:</strong> We consult industry reports,
                  HR professionals, and placement coordinators to ensure
                  accuracy.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Student-tested:</strong> Before publishing, we have
                  current students review content for clarity and usefulness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>
                  <strong>Regularly updated:</strong> We review and refresh
                  content quarterly to reflect changing job market conditions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>
                  <strong>India-focused:</strong> All advice is contextualized
                  for Indian students, companies, and cultural expectations.
                </span>
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Last reviewed: March 6, 2026. This page is refreshed quarterly,
              and urgent factual corrections are published sooner when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="container py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 dark:bg-green-950">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-bold">100% Free</p>
              <p className="text-xs text-muted-foreground">No hidden charges</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950">
            <Users className="h-6 w-6 text-blue-600" />
            <div>
              <p className="font-bold">50K+ Downloads</p>
              <p className="text-xs text-muted-foreground">
                By students across India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-purple-50 p-4 dark:bg-purple-950">
            <Clock className="h-6 w-6 text-purple-600" />
            <div>
              <p className="font-bold">Updated</p>
              <p className="text-xs text-muted-foreground">
                Latest industry trends
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-orange-50 p-4 dark:bg-orange-950">
            <Shield className="h-6 w-6 text-orange-600" />
            <div>
              <p className="font-bold">Expert-Curated</p>
              <p className="text-xs text-muted-foreground">
                By HR professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="container py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Explore Our Resource Library
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Comprehensive guides and templates designed specifically for Indian
            students and professionals
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="transition-shadow duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="pt-8">
                <div className="mb-4">{resource.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{resource.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {resource.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {resource.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="group w-full"
                >
                  <Link href={resource.link}>
                    Explore Resources
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Paths */}
      <section className="bg-muted/50 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Recommended Learning Paths
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Start Your Career Journey
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Follow these curated paths based on your career goals
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold">
                🎯 Campus Placement Prep
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For students preparing for on-campus placements
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    1
                  </span>
                  <Link
                    href="/resources/resume-guide"
                    className="text-primary hover:underline"
                  >
                    Build your resume
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    2
                  </span>
                  <Link
                    href="/tools/aptitude-test"
                    className="text-primary hover:underline"
                  >
                    Practice aptitude tests
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    3
                  </span>
                  <Link
                    href="/resources/interview-prep"
                    className="text-primary hover:underline"
                  >
                    Prepare for interviews
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    4
                  </span>
                  <Link
                    href="/blog/group-discussion-tips"
                    className="text-primary hover:underline"
                  >
                    Master GD rounds
                  </Link>
                </li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold">💼 Internship Search</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For students looking for their first internship
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    1
                  </span>
                  <Link
                    href="/tools/resume-score-checker"
                    className="text-primary hover:underline"
                  >
                    Check resume score
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    2
                  </span>
                  <Link
                    href="/resources/linkedin-optimization"
                    className="text-primary hover:underline"
                  >
                    Optimize LinkedIn profile
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    3
                  </span>
                  <Link
                    href="/tools/cold-email-generator"
                    className="text-primary hover:underline"
                  >
                    Write cold emails
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    4
                  </span>
                  <Link
                    href="/internships"
                    className="text-primary hover:underline"
                  >
                    Browse internships
                  </Link>
                </li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold">🚀 Skill Building</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For students wanting to upskill for better opportunities
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    1
                  </span>
                  <Link
                    href="/tools/skills-assessment"
                    className="text-primary hover:underline"
                  >
                    Assess your skills
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    2
                  </span>
                  <Link
                    href="/tools/career-roadmap"
                    className="text-primary hover:underline"
                  >
                    Get career roadmap
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    3
                  </span>
                  <Link
                    href="/resources/skill-development"
                    className="text-primary hover:underline"
                  >
                    Learn new skills
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    4
                  </span>
                  <Link
                    href="/tools/project-ideas"
                    className="text-primary hover:underline"
                  >
                    Build projects
                  </Link>
                </li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="mb-3 text-lg font-bold">Offer Evaluation</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                For students comparing salary, benefits, and contract tradeoffs
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    1
                  </span>
                  <Link
                    href="/tools/salary-calculator"
                    className="text-primary hover:underline"
                  >
                    Compare salary structure
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    2
                  </span>
                  <Link
                    href="/resources/salary-negotiation"
                    className="text-primary hover:underline"
                  >
                    Learn negotiation scripts
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    3
                  </span>
                  <Link
                    href="/freshers/bond-clauses"
                    className="text-primary hover:underline"
                  >
                    Review bond clauses
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold">
                    4
                  </span>
                  <Link
                    href="/tools/salary-bond-tracker"
                    className="text-primary hover:underline"
                  >
                    Track offer tradeoffs
                  </Link>
                </li>
              </ol>
            </Card>
          </div>
        </div>
      </section>

      {/* External Learning Platforms Section */}
      <section className="container py-16 md:py-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-900 dark:text-green-300">
            <Youtube className="h-4 w-4" />
            Free Learning Resources
          </div>
          <h2 className="mb-4 text-3xl font-bold">
            Top Free Learning Platforms
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Access quality education from top universities and companies -
            completely free or with affordable options
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {externalPlatforms.map((platform, index) => (
            <Card
              key={index}
              className="group transition-all hover:border-primary/50 hover:shadow-md"
            >
              <CardContent className="pt-5">
                <div className="mb-2 flex items-start justify-between">
                  <h4 className="font-bold">{platform.name}</h4>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {platform.category}
                  </span>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">
                  {platform.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    ✓ {platform.highlight}
                  </span>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Free Certifications Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-16 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700 dark:bg-purple-900 dark:text-purple-300">
              <Award className="h-4 w-4" />
              Boost Your Resume
            </div>
            <h2 className="mb-4 text-3xl font-bold">
              Free Industry Certifications
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Add value to your resume with these free certifications from top
              tech companies
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {freeCertifications.map((cert, index) => (
              <Card
                key={index}
                className="transition-all hover:shadow-lg"
              >
                <CardContent className="pt-5">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="mb-1 font-bold leading-tight">{cert.name}</h4>
                  <p className="mb-2 text-xs text-muted-foreground">
                    by {cert.provider}
                  </p>
                  <div className="mb-3 flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {cert.duration}
                    </span>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      {cert.skill}
                    </span>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1 rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
                  >
                    Get Certified <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coding Practice Resources Section */}
      <section className="container py-16 md:py-20">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700 dark:bg-orange-900 dark:text-orange-300">
            <Code className="h-4 w-4" />
            For Tech Students
          </div>
          <h2 className="mb-4 text-3xl font-bold">Coding Practice Resources</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Essential resources for DSA preparation, competitive programming,
            and technical interviews
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-800 dark:from-green-950/50 dark:to-emerald-950/50">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">DSA Roadmap</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete guide
                  </p>
                </div>
              </div>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Arrays, Strings, Linked Lists
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Trees, Graphs, Dynamic Programming
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Company-specific patterns
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Link href="/dsa">Explore DSA Roadmap</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 dark:border-blue-800 dark:from-blue-950/50 dark:to-cyan-950/50">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">System Design</h3>
                  <p className="text-sm text-muted-foreground">
                    For interviews
                  </p>
                </div>
              </div>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Scalability concepts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Database design patterns
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  Real-world case studies
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/blog/system-design-interview-guide">
                  Learn System Design
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 dark:border-purple-800 dark:from-purple-950/50 dark:to-pink-950/50">
            <CardContent className="pt-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Project Ideas</h3>
                  <p className="text-sm text-muted-foreground">
                    Build portfolio
                  </p>
                </div>
              </div>
              <ul className="mb-4 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  50+ project ideas by skill level
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  GitHub-ready templates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-600" />
                  Industry-relevant projects
                </li>
              </ul>
              <Button
                asChild
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <Link href="/tools/project-ideas">Get Project Ideas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Downloads */}
      <section className="container py-16 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Most Downloaded Resources</h2>
          <p className="text-muted-foreground">
            Join thousands of students who've benefited from these resources
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">📄</div>
              <h4 className="mb-2 font-semibold">Modern Resume Template</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                ATS-optimized template for freshers
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/ats-resume">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">💼</div>
              <h4 className="mb-2 font-semibold">Cover Letter Samples</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                10+ industry-specific templates
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/email-templates">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">📊</div>
              <h4 className="mb-2 font-semibold">Interview Cheat Sheet</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                50+ questions with answers
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/100-hr-questions">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">🎯</div>
              <h4 className="mb-2 font-semibold">Aptitude Formulas</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Complete placement formulas
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/dsa-cheatsheet">Download</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Downloads Row */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">🧠</div>
              <h4 className="mb-2 font-semibold">DSA Cheat Sheet</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Data structures & algorithms
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/dsa-cheatsheet">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">📧</div>
              <h4 className="mb-2 font-semibold">Cold Email Templates</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Networking & outreach emails
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/email-templates">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">💡</div>
              <h4 className="mb-2 font-semibold">Interview Tips Card</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Quick tips for D-day
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/downloads/100-hr-questions">Download</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="transition-all hover:shadow-lg">
            <CardContent className="pt-6 text-center">
              <div className="mb-3 text-4xl">🎓</div>
              <h4 className="mb-2 font-semibold">Career Roadmaps</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Role-specific career paths
              </p>
              <Button
                size="sm"
                className="w-full"
                asChild
              >
                <Link href="/tools/career-roadmap">Explore</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Common questions about our career resources
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-6"
              >
                <h3 className="mb-2 font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="container py-16 text-center md:py-20">
        <h2 className="mb-4 text-3xl font-bold">
          Ready to Start Your Career Journey?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Browse hundreds of internship opportunities from top startups and
          companies across India
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            asChild
          >
            <Link href="/internships">Browse Internships</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/resume-optimizer">Optimize Your Resume</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/tools">Explore Free Tools</Link>
          </Button>
        </div>
      </section> */}
    </div>
  );
}
