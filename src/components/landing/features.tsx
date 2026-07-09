'use client';

import { Card } from '@/components/ui/card';
import {
  Zap,
  BrainCircuit,
  Briefcase,
  Users,
  Award,
  Target,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

const features = [
  {
    icon: Zap,
    title: 'AI-Powered Matching',
    description:
      'Our intelligent algorithm analyzes your profile to connect you with perfect-fit internships at innovative startups.',
    benefit: 'Find relevant opportunities 10x faster',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BrainCircuit,
    title: 'Resume Optimizer',
    description:
      'Get instant, AI-driven feedback to craft a resume that stands out and passes ATS systems.',
    benefit: '3x higher callback rate',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Vetted Startups',
    description:
      'Every company is thoroughly verified. View funding, team, culture, and growth metrics before applying.',
    benefit: 'Make informed career decisions',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Users,
    title: 'Direct Access',
    description:
      'Connect directly with founders and hiring managers. No more application black holes.',
    benefit: 'Build real relationships',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Award,
    title: 'Skill Workshops',
    description:
      'Access exclusive workshops on growth marketing, product management, and data science from industry experts.',
    benefit: 'Learn in-demand skills',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Target,
    title: 'Interview Prep',
    description:
      'Practice with AI mock interviews and access our library of startup interview questions and case studies.',
    benefit: 'Ace every interview',
    color: 'from-pink-500 to-rose-500',
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background py-16 sm:py-24 md:py-32"
    >
      {/* Premium Background elements */}
      <div className="dot-pattern absolute inset-0 opacity-30" />
      <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        {/* Premium Section Header */}
        <div className="mx-auto mb-12 max-w-4xl text-center sm:mb-24">
          <div className="glass-strong shadow-premium mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:mb-8 sm:px-8 sm:py-4">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-gradient text-sm font-bold tracking-wide">
              WHY CHOOSE SPROUTERN
            </span>
          </div>

          <h2 className="mb-6 text-3xl font-black leading-tight sm:mb-8 sm:text-5xl md:text-7xl">
            Your Career Launchpad,
            <br />
            <span className="text-gradient">Supercharged by AI</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl md:text-2xl">
            We're not just another job board. Sproutern is your dedicated
            partner in landing competitive startup internships and building a
            career you love.
          </p>
        </div>

        {/* Features Grid - Asymmetric Bento Layout */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = index === 0 || index === 3;

            return (
              <div
                key={feature.title}
                className={`group relative ${isLarge ? 'md:col-span-2' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className={`glass-strong shadow-premium hover:shadow-premium-lg relative h-full overflow-hidden border-2 border-white/10 p-6 transition-all duration-500 ease-out hover:scale-[1.03] hover:border-white/30 sm:p-10 ${hoveredIndex === index ? 'glow' : ''} `}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10 ${feature.color} `}
                  />

                  {/* Icon with gradient background */}
                  <div
                    className={`relative mb-8 inline-flex rounded-3xl bg-gradient-to-br p-5 ${feature.color} shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="group-hover:text-gradient mb-3 text-xl font-bold transition-all sm:mb-5 sm:text-2xl md:text-3xl">
                    {feature.title}
                  </h3>

                  <p className="mb-6 text-base leading-relaxed text-muted-foreground sm:mb-8 sm:text-lg">
                    {feature.description}
                  </p>

                  {/* Benefit badge */}
                  <div
                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-3 ${feature.color} border-2 border-white/20 bg-opacity-10 shadow-sm`}
                  >
                    <Rocket className="h-5 w-5 text-primary" />
                    <span className="text-gradient text-sm font-bold">
                      {feature.benefit}
                    </span>
                  </div>

                  {/* Shimmer effect */}
                  <div className="shimmer absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Premium Bottom CTA */}
        <div className="mt-12 text-center sm:mt-24">
          <p className="mb-6 text-base text-muted-foreground sm:mb-8 sm:text-xl md:text-2xl">
            Join{' '}
            <span className="font-bold text-primary">10,000+ students</span>{' '}
            who've transformed their careers
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass-strong shadow-premium hover:shadow-premium-lg rounded-2xl px-5 py-3 transition-all duration-300 hover:scale-105 sm:px-8 sm:py-5">
              <span className="text-gradient mb-1 block text-3xl font-black md:text-4xl">
                78%
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                Conversion Rate
              </span>
            </div>
            <div className="glass-strong shadow-premium hover:shadow-premium-lg rounded-2xl px-8 py-5 transition-all duration-300 hover:scale-105">
              <span className="text-gradient mb-1 block text-3xl font-black md:text-4xl">
                $35/hr
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                Avg. Salary
              </span>
            </div>
            <div className="glass-strong shadow-premium hover:shadow-premium-lg rounded-2xl px-8 py-5 transition-all duration-300 hover:scale-105">
              <span className="text-gradient mb-1 block text-3xl font-black md:text-4xl">
                48hrs
              </span>
              <span className="text-sm font-semibold text-muted-foreground">
                Response Time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
