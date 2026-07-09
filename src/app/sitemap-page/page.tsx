import {
  getPageSEO,
  getPageSchema,
  generateJsonLdSchema,
} from '@/lib/seo/apply-complete-seo';
import Link from 'next/link';

export const metadata = getPageSEO('sitemapPage');

export default function SitemapPage() {
  const schemas = getPageSchema('sitemapPage');
  return (
    <div className="container max-w-6xl py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLdSchema(schemas)}
      />
      <h1 className="mb-8 text-4xl font-bold">Sitemap</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Main Pages</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-primary hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/internships"
                className="text-primary hover:underline"
              >
                Internships
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-primary hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-primary hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-primary hover:underline"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-primary hover:underline"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Tools</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/tools/cgpa-converter"
                className="text-primary hover:underline"
              >
                CGPA Converter
              </Link>
            </li>
            <li>
              <Link
                href="/tools/salary-calculator"
                className="text-primary hover:underline"
              >
                Salary Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/tools/resume-score-checker"
                className="text-primary hover:underline"
              >
                Resume Checker
              </Link>
            </li>
            <li>
              <Link
                href="/tools/aptitude-test"
                className="text-primary hover:underline"
              >
                Aptitude Test
              </Link>
            </li>
            <li>
              <Link
                href="/tools/interview-questions"
                className="text-primary hover:underline"
              >
                Interview Questions
              </Link>
            </li>
            <li>
              <Link
                href="/tools/typing-test"
                className="text-primary hover:underline"
              >
                Typing Test
              </Link>
            </li>
            <li>
              <Link
                href="/tools/cover-letter-generator"
                className="text-primary hover:underline"
              >
                Cover Letter Generator
              </Link>
            </li>
            <li>
              <Link
                href="/tools/career-roadmap"
                className="text-primary hover:underline"
              >
                Career Roadmap
              </Link>
            </li>
            <li>
              <Link
                href="/tools/emi-calculator"
                className="text-primary hover:underline"
              >
                EMI Calculator
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Resources</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/resources/resume-templates"
                className="text-primary hover:underline"
              >
                Resume Templates
              </Link>
            </li>
            <li>
              <Link
                href="/resources/interview-cheatsheet"
                className="text-primary hover:underline"
              >
                Interview Cheatsheet
              </Link>
            </li>
            <li>
              <Link
                href="/resources/aptitude-formulas"
                className="text-primary hover:underline"
              >
                Aptitude Formulas
              </Link>
            </li>
            <li>
              <Link
                href="/resources/cover-letters"
                className="text-primary hover:underline"
              >
                Cover Letters
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Blog Categories</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/blog/category/interview-prep"
                className="text-primary hover:underline"
              >
                Interview Prep
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/resume-writing"
                className="text-primary hover:underline"
              >
                Resume Writing
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/high-cpc"
                className="text-primary hover:underline"
              >
                Career Advice
              </Link>
            </li>
            <li>
              <Link
                href="/blog/category/student-lifestyle"
                className="text-primary hover:underline"
              >
                Student Lifestyle
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Companies</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/companies/tcs/interview-questions"
                className="text-primary hover:underline"
              >
                TCS Interview Questions
              </Link>
            </li>
            <li>
              <Link
                href="/companies/tcs/salary"
                className="text-primary hover:underline"
              >
                TCS Salary
              </Link>
            </li>
            <li>
              <Link
                href="/companies/infosys/interview-questions"
                className="text-primary hover:underline"
              >
                Infosys Interview Questions
              </Link>
            </li>
            <li>
              <Link
                href="/companies/wipro/interview-questions"
                className="text-primary hover:underline"
              >
                Wipro Interview Questions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold">Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-primary hover:underline"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="text-primary hover:underline"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
