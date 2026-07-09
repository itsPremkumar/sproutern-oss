'use client';

import { Star, Quote, CheckCircle, Sparkles, Building2 } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineering Intern → Full-time at TechFlow',
    university: 'Stanford University, Computer Science',
    content:
      'Sproutern connected me with a Series A startup where I got hands-on experience with React, Node.js, and AWS. I learned more in 3 months than in 2 years of coursework.',
    takeaway: 'Accelerated my technical skills and led to a full-time offer.',
    image: 'https://i.pravatar.cc/150?u=sarah',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Marketing Intern → Growth Lead at EcoStart',
    university: 'UCLA, Business Administration',
    content:
      'As the first marketing intern, I built their social media strategy from scratch and launched their first ad campaigns. The autonomy was incredible.',
    takeaway: 'Gained real ownership and leadership experience.',
    image: 'https://i.pravatar.cc/150?u=marcus',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Patel',
    role: 'Product Design Intern at HealthTech Pro',
    university: 'Carnegie Mellon, HCI',
    content:
      'I conducted user research and designed product flows that are now live in their app, impacting real users. The direct access to users was invaluable.',
    takeaway: 'Shaped my design philosophy with real-world impact.',
    image: 'https://i.pravatar.cc/150?u=priya',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'David Kim',
    role: 'Data Science Intern at AIVision',
    university: 'MIT, Mathematics & Computer Science',
    content:
      'I worked on cutting-edge ML models and published my first research paper based on my internship project. The CTO became my thesis advisor.',
    takeaway: 'Opened doors to research and academia.',
    image: 'https://i.pravatar.cc/150?u=david',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Emily White',
    role: 'Business Development Intern at FinPulse',
    university: 'Wharton School, Finance',
    content:
      'I was in the room for investor pitches and helped build their financial models. It was a crash course in venture capital and startup finance.',
    takeaway: 'Provided an unparalleled, real-world business education.',
    image: 'https://i.pravatar.cc/150?u=emily',
    color: 'from-violet-500 to-purple-500',
  },
  {
    name: 'James Brown',
    role: 'Operations Intern at LogiNext',
    university: 'Georgia Tech, Industrial Engineering',
    content:
      'I helped streamline their entire supply chain process, and my suggestions led to a 15% reduction in delivery times. The impact was immediate and measurable.',
    takeaway:
      'Allowed me to apply my academic knowledge to solve real problems.',
    image: 'https://i.pravatar.cc/150?u=james',
    color: 'from-pink-500 to-rose-500',
  },
];

const companyTestimonials = [
  {
    company: 'TechFlow',
    founder: 'Alex Thompson, CEO',
    content:
      'Sproutern is our secret weapon for finding top-tier interns. The candidates are consistently high-caliber and genuinely passionate about startups. Three of our full-time engineers started here as interns.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    company: 'EcoStart',
    founder: 'Maria Santos, Founder',
    content:
      "The students we've hired through Sproutern bring an energy and a fresh perspective that is invaluable. They are eager to learn and ready to make an impact from day one.",
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'AIVision',
    founder: 'Dr. Evelyn Reed, CTO',
    content:
      "We've been consistently impressed with the technical proficiency of the candidates from Sproutern. They are well-prepared and integrate seamlessly into our fast-paced R&D environment.",
    color: 'from-green-500 to-emerald-500',
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-12 text-center sm:mb-20">
          <div className="glass-strong mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:mb-6 sm:px-6 sm:py-3">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-gradient text-sm font-bold">
              Success Stories
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-black sm:mb-6 sm:text-4xl md:text-6xl">
            Real Students,
            <br />
            <span className="text-gradient">Real Success</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-xl">
            Hear from students who launched their careers and founders who built
            their teams with Sproutern
          </p>
        </div>

        {/* Student Testimonials */}
        <div className="mb-12 grid grid-cols-1 gap-4 sm:mb-20 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-strong glow-hover group rounded-3xl border-2 border-white/10 p-5 transition-all hover:scale-105 hover:border-white/20 sm:p-8"
            >
              <Quote className="mb-3 h-8 w-8 text-primary/30 sm:mb-4 sm:h-10 sm:w-10" />

              <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
                "{testimonial.content}"
              </p>

              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-4 py-2 ${testimonial.color} mb-6 border border-white/20 bg-opacity-10`}
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-gradient text-sm font-bold">
                  {testimonial.takeaway}
                </span>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full border-2 border-primary/50"
                />
                <div>
                  <div className="text-lg font-bold">{testimonial.name}</div>
                  <div className="text-sm font-semibold text-primary">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.university}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Company Testimonials */}
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <div className="glass-strong mb-4 inline-flex items-center gap-2 rounded-full px-6 py-3">
              <Building2 className="h-4 w-4 text-accent" />
              <span className="text-gradient text-sm font-bold">
                Trusted by Founders
              </span>
            </div>
            <h3 className="text-2xl font-black sm:text-3xl md:text-4xl">
              What <span className="text-gradient">Startups Say</span>
            </h3>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
            {companyTestimonials.map((testimonial) => (
              <div
                key={testimonial.company}
                className="glass-strong glow-hover rounded-3xl border-2 border-white/10 p-5 transition-all hover:border-white/20 sm:p-8"
              >
                <div
                  className={`inline-flex rounded-full bg-gradient-to-r px-4 py-2 ${testimonial.color} mb-6`}
                >
                  <span className="text-sm font-bold text-white">
                    {testimonial.company}
                  </span>
                </div>

                <p className="mb-6 italic leading-relaxed text-muted-foreground">
                  "{testimonial.content}"
                </p>

                <div className="font-bold text-primary">
                  {testimonial.founder}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
