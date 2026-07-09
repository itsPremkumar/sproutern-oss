'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  GraduationCap,
  BookOpen,
  ArrowRight,
  Sparkles,
  Globe,
} from 'lucide-react';

export function Cta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 md:py-40">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />

      {/* Floating orbs with enhanced blur */}
      <div className="float absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-white/15 blur-3xl" />
      <div
        className="float absolute bottom-20 right-10 h-[600px] w-[600px] rounded-full bg-white/15 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container relative z-10 text-center">
        {/* Premium Badge */}
        <div className="glass-strong mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-xl sm:mb-10 sm:gap-3 sm:px-8 sm:py-4">
          <Sparkles className="h-5 w-5 fill-white text-white" />
          <span className="text-sm font-bold tracking-wide text-white">
            FREE LEARNING PLATFORM
          </span>
        </div>

        {/* Enhanced Main heading */}
        <h2 className="mb-6 text-3xl font-black leading-tight text-white sm:mb-8 sm:text-5xl md:text-7xl lg:text-8xl">
          Start Your Learning
          <br />
          <span className="relative inline-block">
            Journey Today
            <div className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-white/30" />
          </span>
        </h2>

        <p className="mx-auto mb-10 max-w-4xl text-base font-medium leading-relaxed text-white/95 sm:mb-16 sm:text-xl md:text-2xl">
          Access free tools, study guides, and resources for students worldwide.
          Whether you're preparing for exams or planning to study abroad,
          Sproutern has everything you need to succeed.
        </p>

        {/* Premium CTA Buttons */}
        <div className="mb-20 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Button
            size="lg"
            asChild
            className="group relative overflow-hidden rounded-2xl bg-white px-8 py-6 text-base font-bold text-primary shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/95 hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.5)] sm:px-12 sm:py-8 sm:text-xl"
          >
            <Link
              href="/tools"
              className="flex items-center gap-3"
            >
              <GraduationCap className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
              Explore Tools
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="glass-strong rounded-2xl border-2 border-white/60 px-8 py-6 text-base font-bold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-white/80 hover:bg-white/15 sm:px-12 sm:py-8 sm:text-xl"
          >
            <Link
              href="/countries"
              className="flex items-center gap-3"
            >
              <Globe className="h-7 w-7" />
              Study Abroad Guides
            </Link>
          </Button>
        </div>

        {/* Premium Trust indicators */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: '15+', label: 'Free Tools' },
            { value: '60+', label: 'Scholarships Listed' },
            { value: '10+', label: 'Country Guides' },
            { value: '100+', label: 'Study Resources' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-strong rounded-2xl p-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:p-8"
            >
              <div className="mb-2 text-2xl font-black text-white sm:mb-3 sm:text-4xl md:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm font-semibold tracking-wide text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
