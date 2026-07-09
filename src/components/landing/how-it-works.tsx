'use client';

import {
  UserPlus,
  Search,
  Handshake,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: 'Create Your Profile',
    description:
      "Build a detailed profile showcasing your skills, experience, and what you're passionate about. Our AI optimizes it for maximum impact.",
    color: 'from-purple-500 to-pink-500',
  },
  {
    step: 2,
    icon: Search,
    title: 'Find Your Match',
    description:
      'Browse tailored internship opportunities or let our AI match you with the perfect startup based on your unique profile.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    step: 3,
    icon: Handshake,
    title: 'Get Hired',
    description:
      'Communicate directly with startups, ace the interview with our prep tools, and start your journey to success.',
    color: 'from-green-500 to-emerald-500',
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-12 text-center sm:mb-20">
          <div className="glass-strong mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:mb-6 sm:px-6 sm:py-3">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-gradient text-sm font-bold">
              Simple Process
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-black sm:mb-6 sm:text-4xl md:text-6xl">
            Get Started in
            <br />
            <span className="text-gradient">3 Easy Steps</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-xl">
            Your next big opportunity is just minutes away
          </p>
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {/* Connection lines */}
          <div className="absolute left-[16.66%] right-[16.66%] top-24 hidden h-1 md:block">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 opacity-30" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="group relative"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 left-1/2 z-20 -translate-x-1/2">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-xl font-black text-white shadow-2xl transition-transform group-hover:scale-110`}
                  >
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`glass-strong group-hover:glow h-full rounded-3xl border-2 border-white/10 p-6 pt-10 transition-all duration-500 hover:scale-105 hover:border-white/20 sm:p-8 sm:pt-12`}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br p-4 ${step.color} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="group-hover:text-gradient mb-3 text-xl font-bold transition-all sm:mb-4 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
                    {step.description}
                  </p>

                  {/* Arrow indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden justify-end opacity-0 transition-opacity group-hover:opacity-100 md:flex">
                      <ArrowRight className="h-6 w-6 animate-pulse text-primary" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <div className="mt-12 text-center sm:mt-20">
          <p className="mb-6 text-muted-foreground">
            Average time from signup to first interview
          </p>
          <div className="text-gradient text-4xl font-black sm:text-6xl">
            48 hours
          </div>
        </div>
      </div>
    </section>
  );
}
