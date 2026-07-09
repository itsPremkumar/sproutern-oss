'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Sparkles,
  Rocket,
  TrendingUp,
  Zap,
  CheckCircle2,
  Star,
} from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-background">
      {/* Premium gradient mesh background */}
      <div className="gradient-mesh absolute inset-0" />

      {/* Animated gradient orbs with parallax */}
      <div
        className="float absolute left-10 top-20 h-[500px] w-[500px] rounded-full bg-primary/20 opacity-60 blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          animationDelay: '0s',
        }}
      />
      <div
        className="float absolute bottom-20 right-10 h-[600px] w-[600px] rounded-full bg-secondary/20 opacity-60 blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          animationDelay: '2s',
        }}
      />
      <div
        className="float absolute left-1/2 top-1/2 h-[400px] w-[400px] rounded-full bg-accent/15 opacity-60 blur-3xl"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY * 0.25}px)`,
          animationDelay: '4s',
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div className="grid-pattern absolute inset-0 opacity-40" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          {/* Premium Badge */}
          <div className="mb-10 flex justify-center duration-1000 animate-in fade-in slide-in-from-bottom-4">
            <div className="glass-strong glow-hover shadow-premium flex items-center gap-2 rounded-full px-4 py-3 sm:gap-3 sm:px-8 sm:py-4">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="text-gradient text-sm font-bold">
                India's #1 Startup Internship Platform
              </span>
              <div className="ml-2 flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                <span className="text-xs font-bold text-primary">4.9</span>
                <Star className="h-3 w-3 fill-primary text-primary" />
              </div>
            </div>
          </div>

          {/* Main Heading with enhanced typography */}
          <h1 className="mb-8 text-center text-4xl font-black leading-[1.1] delay-150 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:text-5xl md:text-7xl lg:text-8xl">
            Launch Your Career
            <br />
            <span className="text-gradient relative inline-block">
              At Lightning Speed
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C100 2 300 2 398 10"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(262, 83%, 58%)"
                    />
                    <stop
                      offset="50%"
                      stopColor="hsl(221, 83%, 53%)"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(189, 94%, 43%)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Enhanced Subheading */}
          <p className="mx-auto mb-8 max-w-4xl text-center text-base leading-relaxed text-muted-foreground delay-300 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:text-xl md:text-2xl">
            Connect with{' '}
            <span className="font-bold text-primary">
              500+ innovative startups
            </span>
            , land your dream internship, and build a career that matters.
          </p>

          {/* Trust indicators */}
          <div className="delay-400 mb-12 flex flex-wrap items-center justify-center gap-4 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>AI-Powered Matching</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Verified Startups</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span>Direct Founder Access</span>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="mb-20 flex flex-col items-center justify-center gap-6 delay-500 duration-1000 animate-in fade-in slide-in-from-bottom-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="shadow-premium-lg group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent px-10 py-7 text-lg font-bold text-white transition-all duration-300 hover:shadow-2xl"
            >
              <Link
                href="/internships"
                className="flex items-center gap-3"
              >
                <Rocket className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                Find Your Internship
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="glass-strong shadow-premium rounded-2xl border-2 border-primary/30 px-10 py-7 text-lg font-bold transition-all duration-300 hover:border-primary/50 hover:bg-primary/5"
            >
              <Link
                href="/post-internship"
                className="flex items-center gap-3"
              >
                <Zap className="h-6 w-6" />
                Post an Opening
              </Link>
            </Button>
          </div>

          {/* Premium Stats Grid */}
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 delay-700 duration-1000 animate-in fade-in slide-in-from-bottom-4 md:grid-cols-4">
            {[
              {
                label: 'Active Internships',
                value: '1+',
                icon: TrendingUp,
                color: 'from-purple-500 to-pink-500',
              },
              {
                label: 'Partner Startups',
                value: '1+',
                icon: Rocket,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                label: 'Success Rate',
                value: '78%',
                icon: Sparkles,
                color: 'from-green-500 to-emerald-500',
              },
              {
                label: 'Cities Worldwide',
                value: '50+',
                icon: Zap,
                color: 'from-orange-500 to-red-500',
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-strong glow-hover shadow-premium group relative overflow-hidden rounded-2xl p-6 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />
                <stat.icon className="mx-auto mb-3 h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="text-gradient mb-2 text-3xl font-black sm:text-4xl md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By Section - Enhanced */}
          <div className="mt-24 delay-1000 duration-1000 animate-in fade-in slide-in-from-bottom-4">
            <p className="mb-10 text-center text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Trusted by Top VCs & Accelerators Worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-16 opacity-50 transition-opacity duration-500 hover:opacity-100">
              <img
                src="https://cdn.worldvectorlogo.com/logos/y-combinator.svg"
                alt="Y Combinator"
                className="h-10 grayscale transition-transform duration-300 hover:scale-110 hover:grayscale-0"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/sequoia-capital-2.svg"
                alt="Sequoia Capital"
                className="h-10 grayscale transition-transform duration-300 hover:scale-110 hover:grayscale-0"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/techstars-2.svg"
                alt="Techstars"
                className="h-9 grayscale transition-transform duration-300 hover:scale-110 hover:grayscale-0"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/andreessen-horowitz.svg"
                alt="Andreessen Horowitz"
                className="h-11 grayscale transition-transform duration-300 hover:scale-110 hover:grayscale-0"
              />
              <img
                src="https://cdn.worldvectorlogo.com/logos/500-startups.svg"
                alt="500 Startups"
                className="h-12 grayscale transition-transform duration-300 hover:scale-110 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
