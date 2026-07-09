import { Metadata } from 'next';
import Link from 'next/link';
import {
  Code2,
  Bug,
  Swords,
  Terminal,
  Trophy,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import CodingGamesClient from './CodingGamesClient';

export const metadata: Metadata = {
  title: 'Coding Games - Write Real Code to Win',
  description:
    'Master programming through interactive coding games. Debug real code, battle AI opponents, and build algorithms. JavaScript, Python, and TypeScript challenges.',
  keywords: [
    'coding games',
    'programming challenges',
    'learn to code',
    'debugging games',
    'algorithm practice',
    'JavaScript challenges',
    'Python coding',
    'competitive programming',
  ],
};

export default function CodingGamesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="absolute left-10 top-20 h-[400px] w-[400px] rounded-full bg-primary/10 opacity-60 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-[300px] w-[300px] rounded-full bg-secondary/10 opacity-60 blur-3xl" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-3 text-sm font-bold text-primary">
              <Code2 className="h-5 w-5" />
              Advanced Coding Games
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Code to Win,
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Not Click to Win
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mb-10 max-w-3xl text-xl text-muted-foreground">
              Real coding challenges that make you think like a developer.
              Write, debug, and optimize actual code. No multiple choice — just
              pure programming skill.
            </p>

            {/* Trust signals */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="h-4 w-4 text-primary" />
                <span>Real Code Editor</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Bug className="h-4 w-4 text-primary" />
                <span>Instant Execution</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-4 w-4 text-primary" />
                <span>XP & Badges</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>JavaScript & Python</span>
              </div>
            </div>

            <Button
              size="lg"
              asChild
              className="px-8 py-6 text-lg shadow-xl"
            >
              <a href="#games">
                <Code2 className="mr-2 h-5 w-5" />
                Start Coding
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
              Each game tests different programming skills. Start with debugging
              and work your way up to algorithm building.
            </p>
          </div>

          {/* Client component for search and filtering */}
          <CodingGamesClient />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 dark:from-indigo-950/40 dark:to-purple-950/40">
              <h2 className="mb-6 text-2xl font-bold">
                Why Coding Games Beat Traditional Practice
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">
                    Real code execution:
                  </strong>{' '}
                  Unlike MCQ-based platforms, you actually write and run code.
                  Your solution is tested against real test cases.
                </p>
                <p>
                  <strong className="text-foreground">Instant feedback:</strong>{' '}
                  See your output immediately. Debug in real-time. Learn from
                  your mistakes as you make them.
                </p>
                <p>
                  <strong className="text-foreground">
                    Industry-relevant skills:
                  </strong>{' '}
                  Debugging, optimization, and algorithm design are exactly what
                  tech companies test in interviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to Level Up Your Coding Skills?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Start with Code Battle — solve problems faster than our AI and
              earn XP to unlock badges.
            </p>
            <Button
              size="lg"
              asChild
            >
              <Link href="/games/coding/code-battle">
                <Swords className="mr-2 h-5 w-5" />
                Start Code Battle
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
