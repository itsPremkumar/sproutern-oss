import { Metadata } from 'next';
import { mainGamesSEO } from '@/lib/seo/games-seo';
import { GamesCollectionSchemaScript } from '@/components/seo/GameSchemaScript';
import {
  Brain,
  Gamepad2,
  Trophy,
  TrendingUp,
  Clock,
  Target,
  Sparkles,
  GraduationCap,
  ChevronRight,
  Lightbulb,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GamesClient from './GamesClient';

const siteUrl = 'https://sproutern.dpdns.org';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const category = params.category as string | undefined;

  let canonicalUrl = mainGamesSEO.canonical;
  if (category) {
    canonicalUrl = `${mainGamesSEO.canonical}?category=${category}`;
  }

  return {
    title: mainGamesSEO.title,
    description: mainGamesSEO.description,
    keywords: mainGamesSEO.keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'en-GB': canonicalUrl,
        'en-IN': canonicalUrl,
        'en-AU': canonicalUrl,
        'en-CA': canonicalUrl,
        'en-SG': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title: 'Free Brain Training Games - 60+ Educational Games Online',
      description:
        'Play 60+ free brain training games. Improve memory, logic, math skills. Perfect for students and professionals worldwide.',
      url: canonicalUrl,
      type: 'website',
      siteName: 'Sproutern',
      images: [
        {
          url: `${siteUrl}/og-games.jpg`,
          width: 1200,
          height: 630,
          alt: 'Sproutern Brain Training Games',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Free Brain Training Games',
      description:
        '60+ free games for memory, logic, math, and cognitive skills',
      images: [`${siteUrl}/og-games.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };
}

export default function GamesPage() {
  return (
    <>
      <GamesCollectionSchemaScript />
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-12 sm:py-20 md:py-28">
          {/* Background decorations */}
          <div className="absolute left-10 top-20 h-[400px] w-[400px] rounded-full bg-primary/10 opacity-60 blur-3xl" />
          <div className="absolute bottom-20 right-10 h-[300px] w-[300px] rounded-full bg-secondary/10 opacity-60 blur-3xl" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary sm:mb-8 sm:px-6 sm:py-3">
                <Gamepad2 className="h-5 w-5" />
                Brain Training Hub
              </div>

              {/* Main heading */}
              <h1 className="mb-4 text-3xl font-black leading-tight sm:mb-6 sm:text-4xl md:text-6xl">
                Train Your Mind,
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Unlock Your Potential
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mb-6 max-w-3xl text-base text-muted-foreground sm:mb-10 sm:text-xl">
                Play 60 scientifically-designed mind games that enhance memory,
                logic, mathematical reasoning, and focus. Whether you&apos;re
                preparing for campus placements, competitive exams, or just want
                to keep your brain sharp — these games make learning fun and
                effective.
              </p>

              {/* Trust signals */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-10 sm:gap-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span>60 Mind Games</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span>Track Your Progress</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span>Multiple Difficulty Levels</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>Play Anytime, Free</span>
                </div>
              </div>

              {/* CTA */}
              <Button
                size="lg"
                asChild
                className="px-8 py-6 text-lg shadow-xl"
              >
                <a href="#games">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Start Playing
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Brain Games Section */}
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:from-indigo-950/40 dark:to-purple-950/40 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Why Play Educational Games?
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">
                      Here&apos;s something most students don&apos;t realize:
                    </strong>{' '}
                    your brain is like a muscle — the more you exercise it, the
                    stronger it becomes. Campus placement aptitude tests,
                    competitive exams like CAT and GRE, and even technical
                    interviews all test skills that can be trained through
                    deliberate practice.
                  </p>
                  <p>
                    These games aren&apos;t just for fun (though they definitely
                    are!). Each one is designed to target specific cognitive
                    abilities that you&apos;ll need throughout your career:
                  </p>
                  <ul className="ml-4 list-disc space-y-2">
                    <li>
                      <strong className="text-foreground">Memory games</strong>{' '}
                      help you retain information better during exams
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Math challenges
                      </strong>{' '}
                      improve your calculation speed for aptitude rounds
                    </li>
                    <li>
                      <strong className="text-foreground">Logic puzzles</strong>{' '}
                      sharpen the analytical thinking that interviewers love
                    </li>
                    <li>
                      <strong className="text-foreground">Focus tests</strong>{' '}
                      reduce careless errors that cost you marks
                    </li>
                  </ul>
                  <p>
                    I remember struggling with time management during my own
                    placement tests. Playing speed-based games for just 10
                    minutes a day made a noticeable difference in how quickly I
                    could solve problems under pressure. Try it — you&apos;ll
                    see the results yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Games Grid */}
        <section
          id="games"
          className="py-16 md:py-24"
        >
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-black md:text-4xl">
                Choose Your <span className="text-primary">Challenge</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Pick a game based on the skill you want to develop. Start with
                easier levels and work your way up as you improve.
              </p>
            </div>

            {/* Client component for interactive filters and grid */}
            <GamesClient />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-black md:text-4xl">
                  Skills You&apos;ll{' '}
                  <span className="text-primary">Develop</span>
                </h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  Regular brain training has been shown to improve cognitive
                  performance. Here&apos;s what you&apos;ll gain:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Enhanced Memory</h3>
                  <p className="text-sm text-muted-foreground">
                    Better retention of formulas, concepts, and information
                    during exams and interviews.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Faster Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Quicker mental calculations and pattern recognition —
                    crucial for time-bound tests.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Better Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Improved concentration reduces careless mistakes that cost
                    you precious marks.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-900/30">
                    <Lightbulb className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Critical Thinking</h3>
                  <p className="text-sm text-muted-foreground">
                    Stronger analytical abilities for problem-solving in coding
                    rounds and case studies.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 dark:bg-pink-900/30">
                    <Users className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Verbal Skills</h3>
                  <p className="text-sm text-muted-foreground">
                    Expanded vocabulary and word associations for verbal
                    aptitude sections.
                  </p>
                </div>

                <div className="rounded-2xl bg-background p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-900/30">
                    <Trophy className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Confidence</h3>
                  <p className="text-sm text-muted-foreground">
                    Seeing your scores improve builds the confidence you need
                    for high-stakes situations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools CTA */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Looking for More Preparation Tools?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
                Check out our aptitude tests, interview question generators, and
                other career tools to boost your placement preparation.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                >
                  <Link href="/tools/aptitude-test">
                    <Target className="mr-2 h-5 w-5" />
                    Aptitude Test
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                >
                  <Link href="/tools">
                    <Sparkles className="mr-2 h-5 w-5" />
                    All Tools
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
