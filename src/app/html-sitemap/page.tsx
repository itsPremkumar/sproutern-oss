import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Map,
  FileText,
  Briefcase,
  Wrench,
  GraduationCap,
  Building2,
  BookOpen,
  Gamepad2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | All Pages',
  description:
    'Complete sitemap of Sproutern. Browse all pages including career roadmaps, tools, company guides, resources, and more.',
  keywords: 'sproutern sitemap, all pages, site navigation, page index',
  alternates: { canonical: 'https://sproutern.dpdns.org/html-sitemap' },
};

const sections = [
  {
    title: 'Career Roadmaps',
    icon: GraduationCap,
    links: [
      { name: 'Software Engineer', href: '/roadmaps/software-engineer' },
      { name: 'AI/ML Engineer', href: '/roadmaps/ai-ml-engineer' },
      { name: 'Data Scientist', href: '/roadmaps/data-scientist' },
      { name: 'Data Analyst', href: '/roadmaps/data-analyst' },
      { name: 'Product Manager', href: '/roadmaps/product-manager' },
      { name: 'DevOps Engineer', href: '/roadmaps/devops-engineer' },
      { name: 'UI/UX Designer', href: '/roadmaps/ui-ux-designer' },
      { name: 'Cybersecurity', href: '/roadmaps/cybersecurity' },
      { name: 'Mobile Developer', href: '/roadmaps/mobile-developer' },
    ],
  },
  {
    title: 'Companies',
    icon: Building2,
    links: [
      { name: 'TCS', href: '/companies/tcs' },
      { name: 'Infosys', href: '/companies/infosys' },
      { name: 'Wipro', href: '/companies/wipro' },
      { name: 'Cognizant', href: '/companies/cognizant' },
      { name: 'Accenture', href: '/companies/accenture' },
      { name: 'Microsoft', href: '/companies/microsoft' },
      { name: 'Google', href: '/companies/google' },
      { name: 'Amazon', href: '/companies/amazon' },
      { name: 'Adobe', href: '/companies/adobe' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    links: [
      { name: 'Resume Builder', href: '/tools/resume-builder' },
      { name: 'Salary Calculator', href: '/tools/salary-calculator' },
      { name: 'Password Generator', href: '/tools/password-generator' },
      { name: 'QR Code Generator', href: '/tools/qr-code-generator' },
      { name: 'Career Quiz', href: '/tools/career-quiz' },
      { name: 'All Tools', href: '/tools' },
    ],
  },
  {
    title: 'Resources',
    icon: BookOpen,
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Interview Questions', href: '/interview-questions' },
      { name: 'Resume Guide', href: '/resources/resume-guide' },
      {
        name: 'LinkedIn Optimization',
        href: '/resources/linkedin-optimization',
      },
      {
        name: 'Salary Negotiation',
        href: '/resources/salary-negotiation',
      },
      {
        name: 'GitHub Profile Guide',
        href: '/resources/github-profile',
      },
      {
        name: 'ATS Resume Keywords',
        href: '/resources/ats-resume-keywords',
      },
      { name: 'Downloads', href: '/resources/downloads' },
      { name: 'Portfolio Templates', href: '/resources/portfolio-templates' },
      { name: 'All Resources', href: '/resources' },
    ],
  },
  {
    title: 'Games',
    icon: Gamepad2,
    links: [{ name: 'All Games', href: '/games' }],
  },
  {
    title: 'Main Pages',
    icon: FileText,
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <Map className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="mb-2 text-3xl font-bold">Sitemap</h1>
          <p className="text-muted-foreground">Browse all pages on Sproutern</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <section.icon className="h-5 w-5" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-primary hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            For the XML sitemap, visit{' '}
            <a
              href="/sitemap.xml"
              className="text-primary hover:underline"
            >
              /sitemap.xml
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
