'use client';

import Link from 'next/link';
import {
  Home,
  ArrowLeft,
  Gamepad2,
  BookOpen,
  Sparkles,
  Rocket,
  Target,
  FileText,
  Users,
  TrendingUp,
} from 'lucide-react';

export default function NotFound() {
  const exploreItems = [
    {
      icon: Gamepad2,
      title: 'Career Games',
      description: 'Learn while you play with interactive career challenges',
      href: '/games',
      gradient: 'from-pink-500 to-rose-500',
      bgGlow: 'bg-pink-500/20',
    },
    {
      icon: BookOpen,
      title: 'Insights Blog',
      description: 'Expert tips and industry insights for your growth',
      href: '/blog',
      gradient: 'from-blue-500 to-cyan-500',
      bgGlow: 'bg-blue-500/20',
    },
    {
      icon: Target,
      title: 'Skill Assessments',
      description: 'Discover your strengths with smart evaluations',
      href: '/tools',
      gradient: 'from-orange-500 to-amber-500',
      bgGlow: 'bg-orange-500/20',
    },
  ];

  const quickLinks = [
    { icon: TrendingUp, label: 'Resources', href: '/resources' },
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-3 py-6 sm:px-4 sm:py-16">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating orbs - responsive sizes */}
        <div className="absolute left-[15%] top-[15%] h-32 w-32 animate-pulse rounded-full bg-purple-500/30 blur-3xl sm:left-1/4 sm:top-1/4 sm:h-64 sm:w-64 md:h-96 md:w-96" />
        <div
          className="absolute bottom-[15%] right-[15%] h-24 w-24 rounded-full bg-blue-500/20 blur-3xl sm:bottom-1/4 sm:right-1/4 sm:h-48 sm:w-48 md:h-80 md:w-80"
          style={{ animation: 'pulse 4s ease-in-out infinite' }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-2xl sm:h-32 sm:w-32 md:h-64 md:w-64"
          style={{ animation: 'pulse 3s ease-in-out infinite 1s' }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5 sm:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40 sm:h-2 sm:w-2"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-1 text-center sm:px-0">
        {/* Glitch Effect 404 */}
        <div className="relative mb-2 sm:mb-4 md:mb-6">
          <div className="relative inline-block">
            <span className="relative inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-6xl font-black leading-none tracking-tighter text-transparent sm:text-8xl md:text-[140px] lg:text-[180px]">
              404
            </span>
            {/* Glitch layers */}
            <span
              className="absolute left-0 top-0 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-6xl font-black leading-none tracking-tighter text-transparent opacity-70 sm:text-8xl md:text-[140px] lg:text-[180px]"
              style={{
                animation: 'glitch1 2.5s ease-in-out infinite',
                clipPath: 'inset(40% 0 40% 0)',
              }}
            >
              404
            </span>
            <span
              className="absolute left-0 top-0 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-6xl font-black leading-none tracking-tighter text-transparent opacity-70 sm:text-8xl md:text-[140px] lg:text-[180px]"
              style={{
                animation: 'glitch2 2.5s ease-in-out infinite',
                clipPath: 'inset(60% 0 20% 0)',
              }}
            >
              404
            </span>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h1 className="mb-1.5 flex flex-wrap items-center justify-center gap-1 text-base font-bold text-white sm:mb-2 sm:gap-2 sm:text-xl md:mb-3 md:text-2xl lg:text-3xl">
            <Sparkles className="h-4 w-4 flex-shrink-0 text-yellow-400 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            <span className="text-center">Lost in the Digital Universe</span>
            <Sparkles className="h-4 w-4 flex-shrink-0 text-yellow-400 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </h1>
          <p className="mx-auto max-w-sm px-2 text-xs leading-relaxed text-purple-200/80 sm:max-w-md sm:px-4 sm:text-sm md:max-w-lg md:px-0 md:text-base lg:text-lg">
            This page has drifted into the void. But don't worry — there's a
            whole universe of opportunities waiting for you to explore!
          </p>
        </div>

        {/* Explore Cards */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-purple-300 sm:mb-4 sm:text-xs md:text-sm">
            Discover What Awaits
          </h2>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 md:gap-4">
            {exploreItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:rounded-2xl sm:p-4 md:p-5"
              >
                {/* Card glow effect */}
                <div
                  className={`absolute -right-4 -top-4 h-12 w-12 rounded-full ${item.bgGlow} blur-2xl transition-all duration-300 group-hover:h-20 group-hover:w-20 sm:h-16 sm:w-16 md:h-20 md:w-20`}
                />

                <div className="relative flex items-center gap-3 sm:flex-col sm:items-start sm:gap-0">
                  <div
                    className={`inline-flex flex-shrink-0 rounded-lg bg-gradient-to-r ${item.gradient} p-2 sm:mb-2 sm:rounded-xl sm:p-2.5 md:mb-3`}
                  >
                    <item.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="mb-0.5 truncate text-sm font-semibold text-white sm:mb-1 sm:text-base">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-[11px] leading-tight text-purple-200/60 sm:text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-4 flex flex-col items-center gap-2 sm:mb-6 sm:flex-row sm:justify-center sm:gap-3 md:mb-8 md:gap-4">
          <Link
            href="/"
            className="group flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-purple-500/30 sm:w-auto sm:px-6 sm:py-2.5 md:px-8 md:py-3 md:text-base"
          >
            <Home className="h-4 w-4 flex-shrink-0 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
            Return Home
          </Link>

          <div className="flex gap-2 sm:gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs text-purple-200 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white sm:px-4 sm:py-2.5 sm:text-sm"
              >
                <link.icon className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="group inline-flex items-center gap-1.5 text-xs text-purple-300/80 transition-all duration-300 hover:text-purple-200 sm:gap-2 sm:text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:-translate-x-1 sm:h-4 sm:w-4" />
          <span>Go Back to Previous Page</span>
        </button>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }

        @keyframes glitch1 {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch2 {
          0%,
          100% {
            transform: translate(0);
          }
          20% {
            transform: translate(2px, -2px);
          }
          40% {
            transform: translate(2px, 2px);
          }
          60% {
            transform: translate(-2px, -2px);
          }
          80% {
            transform: translate(-2px, 2px);
          }
        }
      `}</style>
    </div>
  );
}
