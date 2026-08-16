import { Metadata } from 'next';
import Link from 'next/link';
import {
  Shield,
  CheckCircle,
  FileText,
  Users,
  Clock,
  AlertTriangle,
  BookOpen,
  Building,
  Eye,
  Edit,
  RefreshCw,
  Mail,
  Heart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Editorial Guidelines | Content Standards & Quality Policy',
  description:
    "Learn about Sproutern's editorial guidelines, content quality standards, and our commitment to providing accurate, helpful career resources for students.",
  keywords:
    'editorial guidelines, content policy, quality standards, Sproutern policy, content accuracy, career content standards',
  openGraph: {
    title: 'Editorial Guidelines',
    description:
      'Our commitment to quality, accuracy, and helpfulness in career content.',
    type: 'website',
  },
};

const principles = [
  {
    icon: CheckCircle,
    title: 'Accuracy First',
    description:
      'Every piece of content is fact-checked against authoritative sources. We cite official government sources, academic institutions, and verified industry data.',
  },
  {
    icon: Users,
    title: 'Student-Centric',
    description:
      'All content is created with students and fresh graduates in mind. We understand the unique challenges of entering the job market.',
  },
  {
    icon: Clock,
    title: 'Timely Updates',
    description:
      'We review and update all content quarterly. Tax calculations, salary data, and university formulas are updated as regulations change.',
  },
  {
    icon: Shield,
    title: 'No Misleading Information',
    description:
      'We never make unverified claims. If data is unavailable, we clearly state so rather than provide potentially inaccurate information.',
  },
];

const reviewProcess = [
  {
    step: 1,
    title: 'Research & Drafting',
    description:
      'Content is researched using primary sources including government publications, university guidelines, and industry reports. Our team drafts content following our style guide.',
  },
  {
    step: 2,
    title: 'Expert Review',
    description:
      'For technical content (tax calculations, CGPA conversions, salary data), we consult with subject matter experts including CAs, HR professionals, and academic advisors.',
  },
  {
    step: 3,
    title: 'Editorial Review',
    description:
      'Our editorial team reviews for accuracy, clarity, grammar, and adherence to our guidelines. Content must pass our quality checklist before publication.',
  },
  {
    step: 4,
    title: 'User Feedback Integration',
    description:
      'After publication, we monitor user feedback and comments. Valid corrections are made promptly, and major updates are noted with revision dates.',
  },
];

const contentTypes = [
  {
    type: 'Career Guides & Articles',
    standards: [
      'Minimum 1,500 words for comprehensive guides',
      'Actionable tips backed by real-world examples',
      'Clear structure with headings and subheadings',
      'Updated within the last 12 months',
    ],
  },
  {
    type: 'Calculators & Tools',
    standards: [
      'Formulas verified against official sources',
      'Clear methodology documentation',
      'Regular testing for accuracy',
      'Privacy-first: no data stored',
    ],
  },
  {
    type: 'Internship Listings',
    standards: [
      'Company verification before approval',
      'Clear job descriptions required',
      'Compensation transparency',
      'Regular listing freshness checks',
    ],
  },
  {
    type: 'Blog Posts',
    standards: [
      'Unique, original content only',
      'SEO optimized but reader-first',
      'Author attribution on all posts',
      'Helpful, non-promotional tone',
    ],
  },
];

export default function EditorialGuidelinesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <BookOpen className="h-4 w-4" />
            Our Commitment to Quality
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Editorial Guidelines
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            At Sproutern, we're committed to providing accurate, helpful, and
            trustworthy career resources for students and professionals. These guidelines define our standards for all content on our platform.
          </p>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="container py-12">
        <Card className="mx-auto max-w-4xl border-primary/20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30">
          <CardContent className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <Heart className="h-6 w-6 text-red-500" />
              <h2 className="text-xl font-bold">
                Our Commitment to You
              </h2>
            </div>
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                At Sproutern, we know that accuracy isn't just about data — it's about people's lives and careers.
              </p>
              <p>
                We've heard countless stories of students using tools that gave them the wrong formulas, leading to discrepancies in their job applications. We've seen how a single incorrect piece of advice can set someone back months in their career journey.
              </p>
              <p>
                That's why we built Sproutern with a different philosophy.{' '}
                <strong>
                  When you trust our calculators, our salary data, or our interview materials, that trust carries real consequences.
                </strong>{' '}
                Whether it's a number on a resume or a career decision, we know you're counting on us to get it right.
              </p>
              <p className="font-medium text-foreground">
                This is why every formula on this platform is verified against official sources. It's why we update content quarterly and why our editorial team personally reviews user reports. We are committed to ensuring that every student using Sproutern has access to the most accurate and reliable information possible.
              </p>
              <p className="text-sm">
                — The Sproutern Editorial Team
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Core Principles */}
      <section className="container py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Core Principles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((principle) => (
              <Card key={principle.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-bold">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Review Process */}
      <section className="bg-muted/50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold">
              Content Review Process
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              Every piece of content goes through our rigorous multi-step review
              process before publication to ensure quality and accuracy.
            </p>

            <div className="space-y-6">
              {reviewProcess.map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-white">
                    {item.step}
                  </div>
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <h3 className="mb-2 font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Type Standards */}
      <section className="container py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Standards by Content Type
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {contentTypes.map((content) => (
              <Card key={content.type}>
                <CardHeader>
                  <CardTitle className="text-lg">{content.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {content.standards.map((standard, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className="text-muted-foreground">
                          {standard}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex items-center gap-3">
            <Edit className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Our Review Process in Action</h2>
          </div>

          <p className="mb-8 leading-relaxed text-muted-foreground">
            Transparency is key to trust. Here is a look at how we verify and manage content every day.
          </p>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-bold">
                  How We Verify Formulas
                </h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      1
                    </span>
                    <span>
                      We start by identifying official regulations and documentation from primary sources like university websites or government portals.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      2
                    </span>
                    <span>
                      We isolate the exact mathematical conversion or rule and document the source for our internal records.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      3
                    </span>
                    <span>
                      We implement the logic and run tests against real-world samples, often consulting with students or professionals to ensure parity with official outcomes.
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      4
                    </span>
                    <span>
                      Only after passing these tests does the tool go live, clearly stating its methodology and sources.
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  Maintaining Standards
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  To protect our readers, we frequently reject content that doesn't meet our standards. This includes:
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <p className="mb-1 text-sm font-medium text-red-700 dark:text-red-300">
                      Unverified Submissions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We reject any interview experiences or salary data that cannot be verified or appears to be plagiarized from other sources.
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <p className="mb-1 text-sm font-medium text-red-700 dark:text-red-300">
                      Inaccurate Data
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We filter out data that contradicts official reports or known industry standards unless verified with an offer letter or official document.
                    </p>
                  </div>
                  <div className="rounded-lg bg-red-50 p-4 dark:bg-red-950/30">
                    <p className="mb-1 text-sm font-medium text-red-700 dark:text-red-300">
                      Paid Placements
                    </p>
                    <p className="text-xs text-muted-foreground">
                      We do not accept guest posts from agencies looking to insert links. Our content is written by experts, not for marketing purposes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Author & Expertise */}
      <section className="container py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Expertise & Credentials
          </h2>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="mb-4 text-muted-foreground text-center">
                Sproutern's content is managed by a collective of experts with deep backgrounds in career development, recruitment, and technology.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 font-semibold">Our Editorial Team:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Career counselors with 5+ years experience
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      HR professionals from top tech companies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Academic mentors from leading institutions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Experienced software engineers and technologists
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">External Verification:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      CAs and tax experts for financial content
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      University advisors for academic accuracy
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Industry recruiters for market insights
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Legal counsel for compliance and policy
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              All content is authored or reviewed by the{' '}
              <Link
                href="/about"
                className="text-primary hover:underline"
              >
                Sproutern Editorial Team
              </Link>
              , a group of professionals dedicated to ensuring that students have access to the best career guidance available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact for Issues */}
      <section className="bg-primary/5 py-16">
        <div className="container text-center">
          <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h2 className="mb-4 text-2xl font-bold">Report Content Issues</h2>
          <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
            Found an error? Have feedback about our content? We take accuracy
            seriously and appreciate corrections from our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Our Team</Link>
            </Button>
            <Button
              variant="outline"
              asChild
            >
              <a href="mailto:https://github.com/itsPremkumar/sproutern-oss">https://github.com/itsPremkumar/sproutern-oss</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p>Last reviewed and updated: December 2025</p>
      </div>
    </div>
  );
}
