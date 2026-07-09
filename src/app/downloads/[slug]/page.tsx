import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Download,
  CheckCircle,
  ArrowRight,
  Share2,
  Shield,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { templates } from '../data';
import { getDownloadContent } from '@/lib/download-content';
import { DownloadButton } from '@/components/downloads/DownloadButton';
import { ShareResourceButton } from '@/components/downloads/ShareResourceButton';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for all templates
export function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

// Generate SEO metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: `Free ${template.name} (${template.format}) Download | Sproutern`,
    description: `Download free ${template.name} in ${template.format} format. ${template.desc} Perfect for students and professionals.`,
    keywords: [
      template.name,
      `${template.name} template`,
      `free ${template.name}`,
      `${template.category} templates`,
      'student resources',
    ],
    openGraph: {
      title: `Free ${template.name} Download`,
      description: template.desc,
      type: 'article',
    },
  };
}

export default async function DownloadPage({ params }: Props) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  const Icon = template.icon;
  const content = getDownloadContent(slug);

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/downloads"
            className="hover:text-primary"
          >
            Downloads
          </Link>
          <span>/</span>
          <span className="text-foreground">{template.name}</span>
        </div>

        {/* Hero Section */}
        <div className="mb-12 md:text-center">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            {template.category}
          </Badge>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            Free {template.name}
          </h1>
          <p className="mb-8 text-xl text-muted-foreground md:mx-auto md:max-w-2xl">
            {template.desc}
          </p>

          <div className="flex flex-col gap-4 md:flex-row md:justify-center">
            {content ? (
              <DownloadButton
                content={content}
                filename={`${template.slug}.${template.format === 'DOCX' ? 'docx' : 'pdf'}`}
                format={template.format}
              />
            ) : template.downloadUrl ? (
              <Button
                size="lg"
                className="gap-2"
                asChild
              >
                <a
                  href={template.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5" />
                  Access {template.format}
                </a>
              </Button>
            ) : (
              <Button
                size="lg"
                className="gap-2"
                disabled
              >
                <Download className="h-5 w-5" />
                Download Unavailable
              </Button>
            )}

            <ShareResourceButton
              title={template.name}
              description={template.desc}
            />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            *No sign-up required. Instant download.
          </p>
        </div>

        {/* Info Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-blue-50 p-3 dark:bg-blue-950">
                <Icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-1 font-semibold">Format</h3>
              <p className="text-sm text-muted-foreground">{template.format}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-green-50 p-3 dark:bg-green-950">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="mb-1 font-semibold">Cost</h3>
              <p className="text-sm text-muted-foreground">100% Free</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-4 rounded-full bg-purple-50 p-3 dark:bg-purple-950">
                <Shield className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mb-1 font-semibold">Updates</h3>
              <p className="text-sm text-muted-foreground">2025 Ready</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Section */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {/* Description */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">About This Template</h2>
              <div className="prose max-w-none text-muted-foreground">
                <p className="leading-relaxed">{template.longDescription}</p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">Key Features</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {template.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border p-4"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* How to Use */}
            <section>
              <h2 className="mb-4 text-2xl font-bold">How to Use</h2>
              <div className="space-y-6">
                {template.howToUse.map((section, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-muted/50 p-6"
                  >
                    <h3 className="mb-3 font-semibold text-primary">
                      {i + 1}. {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.steps.map((step, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {template.faq.length > 0 && (
              <section>
                <h2 className="mb-4 text-2xl font-bold">
                  Frequently Asked Questions
                </h2>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                >
                  {template.faq.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                    >
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  Why Use This?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {template.whyUse}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Resources</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <Link
                  href="/downloads"
                  className="group flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                >
                  <span className="text-sm font-medium">All Templates</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/internships"
                  className="group flex items-center justify-between rounded-lg border p-3 hover:bg-muted"
                >
                  <span className="text-sm font-medium">
                    Latest Internships
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
