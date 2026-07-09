import { Metadata } from 'next';
import { generateMetadata } from '@/lib/seo/seo-utils';
import WordCounterClient from './WordCounterClient';
import {
  Type,
  CheckCircle,
  Clock,
  Users,
  Shield,
  BookOpen,
  Lightbulb,
  FileText,
  PenTool,
  ArrowRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generateMetadata({
  title: 'Word Counter & Character Counter - Free Online Tool',
  description:
    'Free online word counter and character counter tool. Count words, characters, sentences, paragraphs, and reading time. Perfect for essays, social media posts, SEO meta descriptions, and assignments.',
  keywords: [
    'word counter',
    'character counter',
    'word count tool',
    'essay word counter',
    'online word counter',
    'character count',
    'sentence counter',
    'paragraph counter',
    'reading time calculator',
  ],
  canonical: '/tools/word-counter',
});

const platformLimits = [
  {
    platform: 'Twitter/X Post',
    limit: '280 characters',
    type: 'Characters',
    tip: 'Use threads for longer content',
  },
  {
    platform: 'Instagram Caption',
    limit: '2,200 characters',
    type: 'Characters',
    tip: 'First 125 chars most visible',
  },
  {
    platform: 'LinkedIn Post',
    limit: '3,000 characters',
    type: 'Characters',
    tip: 'Under 1,300 chars performs best',
  },
  {
    platform: 'Facebook Post',
    limit: '63,206 characters',
    type: 'Characters',
    tip: 'Under 80 chars gets more engagement',
  },
  {
    platform: 'YouTube Title',
    limit: '100 characters',
    type: 'Characters',
    tip: 'Keep under 60 for full display',
  },
  {
    platform: 'Meta Title (SEO)',
    limit: '50-60 characters',
    type: 'Characters',
    tip: 'Include primary keyword',
  },
  {
    platform: 'Meta Description',
    limit: '150-160 characters',
    type: 'Characters',
    tip: '155 chars optimal',
  },
  {
    platform: 'Google Ads Headline',
    limit: '30 characters',
    type: 'Characters',
    tip: 'Use all 3 headline slots',
  },
];

const academicRequirements = [
  {
    type: 'Abstract',
    words: '150-300 words',
    purpose: 'Research paper summary',
  },
  {
    type: 'Short Essay',
    words: '500-800 words',
    purpose: 'College assignments',
  },
  {
    type: 'Standard Essay',
    words: '1,000-1,500 words',
    purpose: 'Academic essays',
  },
  {
    type: 'Long Essay',
    words: '2,000-3,000 words',
    purpose: 'Research essays',
  },
  {
    type: 'Dissertation Chapter',
    words: '5,000-10,000 words',
    purpose: 'PhD/Masters',
  },
  {
    type: 'Blog Post (SEO)',
    words: '1,500-2,500 words',
    purpose: 'Long-form content',
  },
  {
    type: 'Product Description',
    words: '100-300 words',
    purpose: 'E-commerce',
  },
  {
    type: 'Email Newsletter',
    words: '200-500 words',
    purpose: 'Marketing emails',
  },
];

const readingSpeedInfo = [
  { type: 'Average Adult Reading', wpm: '200-250 WPM', note: 'Silent reading' },
  { type: 'Fast Reader', wpm: '300-400 WPM', note: 'Trained readers' },
  { type: 'Speed Reader', wpm: '400-700 WPM', note: 'With training' },
  { type: 'Speaking Pace', wpm: '125-150 WPM', note: 'Presentations/speeches' },
  { type: 'Audiobook Pace', wpm: '150-175 WPM', note: 'Comfortable listening' },
];

export default function WordCounterPage() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Type className="h-4 w-4" />
            Free Writing Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Word & Character Counter
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Count words, characters, sentences, and paragraphs instantly.
            Calculate reading time and ensure your content meets platform
            requirements.
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
            <span className="text-sm font-medium">Real-time Count</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-purple-50 p-3 dark:bg-purple-950">
            <Users className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-medium">15,000+ Users</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-3 dark:bg-orange-950">
            <Shield className="h-5 w-5 text-orange-600" />
            <span className="text-sm font-medium">Privacy First</span>
          </div>
        </div>

        {/* Word Counter Tool */}
        <WordCounterClient />

        {/* Social Proof */}
        <div className="mt-8 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            ✍️ <strong>234 writers</strong> counted words in the last hour
          </p>
        </div>

        {/* Main Educational Content */}
        <div className="prose prose-lg mt-16 max-w-none">
          <h2 className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" />
            Complete Guide to Word and Character Counting
          </h2>
          <p>
            Whether you&apos;re a student writing an essay, a marketer crafting
            social media posts, or a content creator optimizing for SEO, knowing
            your word and character count is essential. Our free tool provides
            instant, accurate counting with additional metrics like reading time
            and sentence count.
          </p>

          <div className="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              How We Calculate Reading Time
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                Reading time is calculated based on the average adult reading
                speed:
              </p>
              <p className="text-center font-mono text-lg font-bold text-primary">
                Reading Time = Word Count ÷ 200 WPM
              </p>
              <p className="text-muted-foreground">
                The average adult reads approximately 200-250 words per minute.
                We use 200 WPM as a conservative estimate to ensure readers have
                enough time to comprehend the content.
              </p>
            </div>
          </div>

          <h2 className="flex items-center gap-3">
            <PenTool className="h-6 w-6 text-primary" />
            Character Limits for Social Media Platforms
          </h2>
          <p>
            Each social media platform has different character limits. Exceeding
            these limits can truncate your message or prevent posting.
            Here&apos;s a comprehensive guide:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Platform</th>
                  <th className="border p-3 text-left">Limit</th>
                  <th className="border p-3 text-left">Type</th>
                  <th className="border p-3 text-left">Pro Tip</th>
                </tr>
              </thead>
              <tbody>
                {platformLimits.map((platform, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">
                      {platform.platform}
                    </td>
                    <td className="border p-3 font-mono text-primary">
                      {platform.limit}
                    </td>
                    <td className="border p-3 text-sm">{platform.type}</td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {platform.tip}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            Word Count Requirements for Academic Writing
          </h2>
          <p>
            Academic assignments typically have strict word count requirements.
            Meeting these requirements is crucial for grades. Here&apos;s a
            guide to common academic writing lengths:
          </p>

          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse border">
              <thead>
                <tr className="bg-primary/10">
                  <th className="border p-3 text-left">Document Type</th>
                  <th className="border p-3 text-left">Word Count</th>
                  <th className="border p-3 text-left">Typical Purpose</th>
                </tr>
              </thead>
              <tbody>
                {academicRequirements.map((req, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? 'bg-muted/30' : ''}
                  >
                    <td className="border p-3 font-semibold">{req.type}</td>
                    <td className="border p-3 font-mono text-primary">
                      {req.words}
                    </td>
                    <td className="border p-3 text-sm text-muted-foreground">
                      {req.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Understanding Reading Speed</h2>
          <p>
            Reading speed varies significantly based on the reader, content
            complexity, and reading purpose. Here&apos;s how different reading
            speeds compare:
          </p>

          <div className="not-prose my-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {readingSpeedInfo.map((info, i) => (
              <Card key={i}>
                <CardContent className="pt-4">
                  <div className="text-2xl font-bold text-primary">
                    {info.wpm}
                  </div>
                  <div className="font-semibold">{info.type}</div>
                  <div className="text-sm text-muted-foreground">
                    {info.note}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2>SEO Content Length Guidelines</h2>

          <div className="not-prose my-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blog Posts for SEO</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Optimal blog post length for SEO ranking:</p>
                <ul className="space-y-1">
                  <li>
                    • <strong>Short posts:</strong> 300-600 words (news updates)
                  </li>
                  <li>
                    • <strong>Standard posts:</strong> 1,000-1,500 words (most
                    topics)
                  </li>
                  <li>
                    • <strong>Long-form:</strong> 2,000-3,000 words
                    (comprehensive guides)
                  </li>
                  <li>
                    • <strong>Pillar content:</strong> 3,000+ words (ultimate
                    guides)
                  </li>
                </ul>
                <p className="mt-2 text-muted-foreground">
                  Studies show posts of 1,500-2,500 words tend to rank best in
                  Google.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Meta Description Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Perfect meta description guidelines:</p>
                <ul className="space-y-1">
                  <li>
                    • <strong>Ideal length:</strong> 150-160 characters
                  </li>
                  <li>
                    • <strong>Maximum:</strong> 160 characters (Google truncates
                    after)
                  </li>
                  <li>
                    • <strong>Minimum:</strong> 120 characters (too short looks
                    incomplete)
                  </li>
                  <li>• Include primary keyword naturally</li>
                  <li>• Add a call-to-action when appropriate</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2>Frequently Asked Questions</h2>

          <h3>How many words is a 5-minute read?</h3>
          <p>
            At an average reading speed of 200 words per minute, a 5-minute read
            contains approximately <strong>1,000 words</strong>. For casual
            reading of simpler content, readers might cover 1,250 words in 5
            minutes (250 WPM). Use our word counter to see the exact reading
            time for your content.
          </p>

          <h3>How are words counted?</h3>
          <p>
            Words are counted by splitting text on whitespace (spaces, tabs,
            line breaks). Each distinct chunk of text separated by whitespace
            counts as one word. Numbers, abbreviations, and hyphenated words
            (like &quot;self-driving&quot;) typically count as single words.
          </p>

          <h3>
            What&apos;s the difference between characters with and without
            spaces?
          </h3>
          <p>
            <strong>Characters with spaces</strong> count every character
            including spaces, punctuation, and line breaks.{' '}
            <strong>Characters without spaces</strong> exclude all whitespace.
            Social media platforms typically count all characters including
            spaces.
          </p>

          <h3>How long should a LinkedIn post be?</h3>
          <p>
            LinkedIn allows up to 3,000 characters, but research shows posts
            under
            <strong> 1,300 characters</strong> (about 200 words) perform best
            for engagement. The &quot;see more&quot; truncation happens around
            210 characters, so make your first few lines compelling.
          </p>

          <h3>What&apos;s the ideal length for a tweet?</h3>
          <p>
            Twitter/X allows 280 characters, but studies show tweets between{' '}
            <strong>71-100 characters</strong> get the highest engagement.
            Shorter tweets are easier to read and retweet. Leave room for others
            to quote-tweet with their commentary.
          </p>

          <h3>How many pages is 1,000 words?</h3>
          <p>
            1,000 words is approximately <strong>2 pages single-spaced</strong>{' '}
            or
            <strong> 4 pages double-spaced</strong> when using standard 12-point
            font (Times New Roman or Arial) with 1-inch margins. Academic essays
            are typically required in double-spaced format.
          </p>

          <h3>Why is my character count different from other tools?</h3>
          <p>
            Character counting methods can vary. Some tools count special
            characters or emojis differently. Unicode emojis may count as 2
            characters in some systems. Our tool uses standard JavaScript
            character counting which matches most social media platform
            counters.
          </p>

          <h3>How many words should a cover letter be?</h3>
          <p>
            A cover letter should be between <strong>250-400 words</strong>,
            fitting on one page. This allows you to introduce yourself,
            highlight relevant experience, and express interest without
            overwhelming the reader. Keep paragraphs short and focused.
          </p>

          <h3>What is the optimal blog post length for SEO?</h3>
          <p>
            For SEO, longer content typically ranks better. Studies from
            Backlinko and HubSpot suggest <strong>1,500-2,500 words</strong> is
            optimal for most topics. However, quality matters more than length.
            Cover the topic thoroughly without unnecessary padding.
          </p>

          <h3>How do I count words in a specific language?</h3>
          <p>
            Our word counter works with any language that uses spaces between
            words, including English, Hindi, Spanish, French, German, and more.
            For languages like Chinese, Japanese, or Thai that don&apos;t use
            spaces, character count is more relevant than word count.
          </p>
        </div>

        {/* Related Tools */}
        <section className="mt-16 rounded-2xl bg-muted p-8">
          <h2 className="mb-6 text-2xl font-bold">Related Tools</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Case Converter',
                href: '/tools/case-converter',
                desc: 'Convert text to different cases',
              },
              {
                title: 'Lorem Ipsum Generator',
                href: '/tools/lorem-ipsum-generator',
                desc: 'Generate placeholder text',
              },
              {
                title: 'Typing Speed Test',
                href: '/tools/typing-test',
                desc: 'Test your typing speed',
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

        {/* Resources */}
        <section className="mt-8">
          <h2 className="mb-6 text-2xl font-bold">Writing Resources</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/content-writing-internships"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                Content Writing Internships
              </h3>
              <p className="text-sm text-muted-foreground">
                Find internship opportunities in content writing.
              </p>
            </Link>
            <Link
              href="/blog/linkedin-optimization-students"
              className="block rounded-xl border p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-2 font-semibold">
                LinkedIn Optimization for Students
              </h3>
              <p className="text-sm text-muted-foreground">
                Optimize your LinkedIn profile for opportunities.
              </p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Looking for Content Writing Opportunities?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Explore internship and job opportunities for writers
          </p>
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Browse Internships
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
