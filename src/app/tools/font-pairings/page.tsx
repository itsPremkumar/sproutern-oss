'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Type,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Copy,
  Check,
  ExternalLink,
  Heart,
} from 'lucide-react';
import Link from 'next/link';

interface FontPair {
  heading: string;
  body: string;
  headingWeight: number;
  bodyWeight: number;
  category: string;
  description: string;
}

const fontPairs: FontPair[] = [
  {
    heading: 'Playfair Display',
    body: 'Source Sans Pro',
    headingWeight: 700,
    bodyWeight: 400,
    category: 'Elegant',
    description: 'Classic editorial style',
  },
  {
    heading: 'Montserrat',
    body: 'Open Sans',
    headingWeight: 600,
    bodyWeight: 400,
    category: 'Modern',
    description: 'Clean and professional',
  },
  {
    heading: 'Roboto Slab',
    body: 'Roboto',
    headingWeight: 700,
    bodyWeight: 400,
    category: 'Versatile',
    description: "Google's popular pairing",
  },
  {
    heading: 'Oswald',
    body: 'Lato',
    headingWeight: 600,
    bodyWeight: 400,
    category: 'Bold',
    description: 'Strong headlines, readable body',
  },
  {
    heading: 'Merriweather',
    body: 'Merriweather Sans',
    headingWeight: 700,
    bodyWeight: 300,
    category: 'Reading',
    description: 'Optimized for long-form content',
  },
  {
    heading: 'Poppins',
    body: 'Inter',
    headingWeight: 600,
    bodyWeight: 400,
    category: 'Tech',
    description: 'Modern tech startup look',
  },
  {
    heading: 'DM Serif Display',
    body: 'DM Sans',
    headingWeight: 400,
    bodyWeight: 400,
    category: 'Luxury',
    description: 'Sophisticated and refined',
  },
  {
    heading: 'Archivo Black',
    body: 'Archivo',
    headingWeight: 400,
    bodyWeight: 400,
    category: 'Impact',
    description: 'Bold and impactful',
  },
  {
    heading: 'Bitter',
    body: 'Raleway',
    headingWeight: 700,
    bodyWeight: 400,
    category: 'Blog',
    description: 'Perfect for blogs',
  },
  {
    heading: 'Libre Baskerville',
    body: 'Source Sans Pro',
    headingWeight: 700,
    bodyWeight: 400,
    category: 'Classic',
    description: 'Traditional publishing feel',
  },
  {
    heading: 'Work Sans',
    body: 'Work Sans',
    headingWeight: 700,
    bodyWeight: 400,
    category: 'Minimal',
    description: 'Single font family',
  },
  {
    heading: 'Space Grotesk',
    body: 'Inter',
    headingWeight: 500,
    bodyWeight: 400,
    category: 'Futuristic',
    description: 'Contemporary and techy',
  },
];

export default function FontPairingsClient() {
  const [previewText, setPreviewText] = useState(
    'The quick brown fox jumps over the lazy dog',
  );
  const [selectedPair, setSelectedPair] = useState<FontPair | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = [
    'All',
    ...Array.from(new Set(fontPairs.map((p) => p.category))),
  ];

  const filteredPairs =
    filterCategory === 'All'
      ? fontPairs
      : fontPairs.filter((p) => p.category === filterCategory);

  const toggleFavorite = (heading: string) => {
    setFavorites((prev) =>
      prev.includes(heading)
        ? prev.filter((f) => f !== heading)
        : [...prev, heading],
    );
  };

  const copyImport = async (pair: FontPair) => {
    const fonts = `${pair.heading.replace(/ /g, '+')}:wght@${pair.headingWeight}|${pair.body.replace(/ /g, '+')}:wght@${pair.bodyWeight}`;
    const importCode = `@import url('https://fonts.googleapis.com/css2?family=${fonts}&display=swap');`;
    await navigator.clipboard.writeText(importCode);
    setCopied(pair.heading);
    setTimeout(() => setCopied(null), 2000);
  };

  const copyCSS = async (pair: FontPair) => {
    const css = `/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: '${pair.heading}', serif;
  font-weight: ${pair.headingWeight};
}

/* Body text */
body, p {
  font-family: '${pair.body}', sans-serif;
  font-weight: ${pair.bodyWeight};
}`;
    await navigator.clipboard.writeText(css);
    setCopied(pair.heading + '-css');
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Type className="h-4 w-4" />
            Free Design Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Font Pairings</h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover beautiful font combinations for your projects. Curated
            Google Fonts pairings.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center gap-2 rounded-lg bg-green-50 p-3 dark:bg-green-950">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">100% Free</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-3 dark:bg-blue-950">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">12+ Pairings</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">Google Fonts</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Copy CSS</span>
          </div>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardContent className="flex flex-wrap items-center gap-4 py-4">
            <div className="flex-1">
              <input
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                placeholder="Preview text..."
                className="w-full rounded-lg border bg-muted/50 p-3 outline-none"
              />
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="rounded-lg border bg-background px-4 py-3"
            >
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}
            </select>
          </CardContent>
        </Card>

        {/* Font Pairings Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPairs.map((pair) => (
            <Card
              key={pair.heading}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedPair?.heading === pair.heading
                  ? 'ring-2 ring-primary'
                  : ''
              }`}
              onClick={() => setSelectedPair(pair)}
            >
              <CardHeader className="relative pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-muted px-2 py-0.5 text-xs">
                      {pair.category}
                    </span>
                    <CardTitle className="text-lg">
                      {pair.heading} + {pair.body}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {pair.description}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(pair.heading);
                    }}
                    className="text-muted-foreground hover:text-red-500"
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(pair.heading) ? 'fill-red-500 text-red-500' : ''}`}
                    />
                  </button>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Preview - Note: These would need Google Fonts loaded */}
                <div className="rounded-lg bg-muted/50 p-4">
                  <div
                    className="mb-2 text-2xl font-bold"
                    style={{ fontWeight: pair.headingWeight }}
                  >
                    {previewText}
                  </div>
                  <div
                    className="text-base"
                    style={{ fontWeight: pair.bodyWeight }}
                  >
                    {previewText}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyImport(pair);
                    }}
                  >
                    {copied === pair.heading ? (
                      <Check className="mr-1 h-4 w-4" />
                    ) : (
                      <Copy className="mr-1 h-4 w-4" />
                    )}
                    Import
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      copyCSS(pair);
                    }}
                  >
                    {copied === pair.heading + '-css' ? (
                      <Check className="mr-1 h-4 w-4" />
                    ) : (
                      <Copy className="mr-1 h-4 w-4" />
                    )}
                    CSS
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={`https://fonts.google.com/?query=${pair.heading}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2>Font Pairing Tips</h2>
          <div className="not-prose grid gap-4 md:grid-cols-2">
            {[
              {
                title: 'Contrast is Key',
                desc: 'Pair a serif with a sans-serif for visual interest',
              },
              {
                title: 'Limit Weights',
                desc: 'Use 2-3 weights max for performance',
              },
              {
                title: 'Consider Hierarchy',
                desc: 'Bold fonts for headings, lighter for body',
              },
              {
                title: 'Test Readability',
                desc: 'Ensure body text is easy to read at small sizes',
              },
            ].map((tip) => (
              <Card key={tip.title}>
                <CardContent className="pt-4">
                  <h3 className="font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Color Palette Generator',
                href: '/tools/color-palette-generator',
                desc: 'Create color schemes',
              },
              {
                title: 'CSS Gradient Generator',
                href: '/tools/css-gradient-generator',
                desc: 'Create gradients',
              },
              {
                title: 'Lorem Ipsum Generator',
                href: '/tools/lorem-ipsum-generator',
                desc: 'Generate placeholder text',
              },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block rounded-lg bg-background p-4 transition-shadow hover:shadow-md"
              >
                <h3 className="mb-1 font-semibold">{tool.title}</h3>
                <p className="text-sm text-muted-foreground">{tool.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
