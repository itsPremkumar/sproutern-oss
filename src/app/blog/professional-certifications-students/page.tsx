import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  CheckCircle,
  Lightbulb,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Users,
  Target,
  GraduationCap,
  DollarSign,
  FileText,
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Certifications for Students: Complete Guide',
  description:
    'Best certifications to boost your resume. Guide to free and paid courses from Google, AWS, Microsoft, and more.',
  keywords: [
    'professional certification',
    'google certification',
    'aws certification',
    'microsoft certification',
    'free certification',
  ],
  openGraph: {
    title: 'Professional Certifications for Students: Complete Guide',
    description: 'Boost your resume with certifications.',
    type: 'article',
    publishedTime: '2025-12-01T00:00:00Z',
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <article className="prose lg:prose-xl mx-auto">
        {/* Header */}
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-amber-600">
            <Award className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Skills Development
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Professional Certifications for Students: Complete Guide
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            Certifications can set you apart. Here are the most valuable ones
            for students and how to get them.
          </p>
          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Career Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Regularly updated</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>16 min read</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="not-prose mb-10 rounded-lg bg-muted/50 p-6">
          <h2 className="mb-4 text-lg font-bold">📋 What You'll Learn</h2>
          <ol className="grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a
                href="#why"
                className="text-primary hover:underline"
              >
                1. Why Certifications Matter
              </a>
            </li>
            <li>
              <a
                href="#free"
                className="text-primary hover:underline"
              >
                2. Free Certifications
              </a>
            </li>
            <li>
              <a
                href="#paid"
                className="text-primary hover:underline"
              >
                3. Paid (Worth It)
              </a>
            </li>
            <li>
              <a
                href="#domain"
                className="text-primary hover:underline"
              >
                4. By Domain
              </a>
            </li>
            <li>
              <a
                href="#tips"
                className="text-primary hover:underline"
              >
                5. Getting the Most Value
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-primary hover:underline"
              >
                6. FAQs
              </a>
            </li>
          </ol>
        </nav>

        {/* Key Takeaways */}
        <div className="not-prose mb-10 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <CheckCircle className="h-5 w-5 text-green-600" />
            Key Takeaways
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Quality over quantity—3-4 relevant certifications are enough
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Industry certifications (Google, AWS) carry more weight than
                random courses
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>Many premium certifications are free for students</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
              <span>
                Certifications complement experience—they don't replace it
              </span>
            </li>
          </ul>
        </div>

        {/* Section 1: Why */}
        <section
          id="why"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            1. Why Certifications Matter
          </h2>

          <ul>
            <li>Signal structured learning in a specific skill</li>
            <li>ATS-friendly keywords on your resume</li>
            <li>Demonstrate initiative and self-learning</li>
            <li>Some roles specifically require certain certifications</li>
            <li>Bridge the gap when you lack work experience</li>
          </ul>
        </section>

        {/* Section 2: Free */}
        <section
          id="free"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            2. Free Certifications
          </h2>

          <div className="not-prose my-6 space-y-4 text-sm">
            <div className="border-l-4 border-amber-500 py-2 pl-4">
              <p className="font-bold">Google Digital Marketing</p>
              <p className="text-muted-foreground">
                Fundamentals of Digital Marketing (40 hours, highly recognized)
              </p>
            </div>
            <div className="border-l-4 border-amber-500 py-2 pl-4">
              <p className="font-bold">Google Analytics</p>
              <p className="text-muted-foreground">
                Google Analytics Individual Qualification (GAIQ)
              </p>
            </div>
            <div className="border-l-4 border-amber-500 py-2 pl-4">
              <p className="font-bold">HubSpot Academy</p>
              <p className="text-muted-foreground">
                Inbound Marketing, Content Marketing, Social Media
              </p>
            </div>
            <div className="border-l-4 border-amber-500 py-2 pl-4">
              <p className="font-bold">Microsoft Learn</p>
              <p className="text-muted-foreground">
                Azure, Power BI, Excel certifications
              </p>
            </div>
            <div className="border-l-4 border-amber-500 py-2 pl-4">
              <p className="font-bold">Coursera (Audit)</p>
              <p className="text-muted-foreground">
                Audit courses for free, only certificate costs money
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Paid */}
        <section
          id="paid"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <DollarSign className="h-6 w-6 text-primary" />
            3. Paid Certifications (Worth It)
          </h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="p-3 text-left">Certification</th>
                  <th className="p-3 text-left">Cost</th>
                  <th className="p-3 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">AWS Cloud Practitioner</td>
                  <td className="p-3">$100</td>
                  <td className="p-3">Cloud, DevOps</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Google Cloud Associate</td>
                  <td className="p-3">$125</td>
                  <td className="p-3">Cloud, Data</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Meta Front-End Developer</td>
                  <td className="p-3">~₹3500</td>
                  <td className="p-3">Web Development</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Tableau Desktop Specialist</td>
                  <td className="p-3">$250</td>
                  <td className="p-3">Data Analytics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="my-4 flex gap-3 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950">
            <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-600" />
            <div className="text-sm">
              <strong>Pro Tip:</strong> AWS and Google Cloud offer free credits
              and vouchers for students. Check their education programs.
            </div>
          </div>
        </section>

        {/* Section 4: By Domain */}
        <section
          id="domain"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            4. By Domain
          </h2>

          <h3>Software Development</h3>
          <ul>
            <li>Meta Front-End/Back-End Certificates</li>
            <li>AWS/Azure Cloud certifications</li>
            <li>freeCodeCamp certifications</li>
          </ul>

          <h3>Data & Analytics</h3>
          <ul>
            <li>Google Data Analytics Certificate</li>
            <li>IBM Data Science Certificate</li>
            <li>Tableau Desktop Specialist</li>
          </ul>

          <h3>Marketing</h3>
          <ul>
            <li>Google Digital Marketing</li>
            <li>HubSpot Inbound Marketing</li>
            <li>Meta Blueprint</li>
          </ul>

          <h3>Business & Finance</h3>
          <ul>
            <li>Financial Modeling (CFI)</li>
            <li>Excel certifications</li>
            <li>Google Sheets + Analytics</li>
          </ul>
        </section>

        {/* Section 5: Tips */}
        <section
          id="tips"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-primary" />
            5. Getting the Most Value
          </h2>

          <ul>
            <li>
              <strong>Choose strategically:</strong> Align with your target
              career
            </li>
            <li>
              <strong>Complete projects:</strong> Apply what you learn
            </li>
            <li>
              <strong>Add to LinkedIn:</strong> Display credentials properly
            </li>
            <li>
              <strong>Mention in resume:</strong> Under "Certifications" section
            </li>
            <li>
              <strong>Discuss in interviews:</strong> What did you build/learn
            </li>
          </ul>
        </section>

        {/* Section 6: FAQ */}
        <section
          id="faq"
          className="scroll-mt-20"
        >
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            6. FAQs
          </h2>

          <div className="my-6 space-y-4">
            <div className="border-b pb-4">
              <p className="font-bold">How many certifications should I get?</p>
              <p className="mt-2 text-muted-foreground">
                3-5 relevant ones are enough. Quality over quantity. Focus on
                depth, not breadth.
              </p>
            </div>
            <div className="border-b pb-4">
              <p className="font-bold">
                Are Coursera/Udemy certifications valued?
              </p>
              <p className="mt-2 text-muted-foreground">
                Industry certifications (Google, AWS, Microsoft) carry more
                weight. Coursera certificates from universities are also
                respected.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2>Invest in Your Skills</h2>
          <p>
            Certifications are a great way to validate skills and stand out.
            Choose wisely, apply what you learn, and keep growing.
          </p>
          <p className="text-lg font-semibold text-primary">
            The best investment is in yourself. Start learning today. 🎓
          </p>
        </section>

        {/* Related Resources */}
        <div className="not-prose my-10 rounded-lg bg-muted p-6">
          <h3 className="mb-4 font-bold">📚 Related Resources</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/dsa-preparation-roadmap"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              DSA Preparation
            </Link>
            <Link
              href="/blog/project-ideas-students"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Project Ideas
            </Link>
            <Link
              href="/blog/portfolio-website-guide"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Portfolio Building
            </Link>
            <Link
              href="/internships"
              className="flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowRight className="h-4 w-4" />
              Browse Internships
            </Link>
          </div>
        </div>

        {/* Author */}
        <div className="not-prose mt-8 border-t pt-8">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="font-bold">Written by Sproutern Career Team</p>
              <p className="mb-2 text-sm text-muted-foreground">
                Based on industry hiring trends and recruiter feedback.
              </p>
              <p className="text-xs text-muted-foreground">Regularly updated</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
