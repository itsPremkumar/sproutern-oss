'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I create a profile on Sproutern?',
        answer:
          "Creating your profile is simple and takes about 10 minutes. Click 'Sign Up,' provide your basic information, upload your resume, and detail your skills and career interests. The more information you provide, the better our AI can match you with relevant opportunities.",
      },
      {
        question: 'What types of internships are available?',
        answer:
          'We feature internships across all startup functions, including Software Engineering, Product Management, Marketing, Sales, Data Science, and UI/UX Design. Our partner startups range from pre-seed to Series B companies in diverse industries like FinTech, HealthTech, and AI.',
      },
      {
        question: 'Is Sproutern free for students?',
        answer:
          'Yes, Sproutern is completely free for students. Our mission is to democratize access to startup opportunities. We charge startups a fee to post listings and access our talent pool, which allows us to provide our platform and resources to students at no cost.',
      },
      {
        question: 'Can international students apply?',
        answer:
          'Yes, many of our startups are open to hiring international students, especially for remote roles. Each internship posting specifies a location and any work authorization requirements. You can filter for opportunities that are open to international candidates.',
      },
    ],
  },
  {
    category: 'Application Process',
    questions: [
      {
        question: 'How does the AI matching system work?',
        answer:
          'Our AI analyzes your profile against the requirements of every internship on our platform. It considers your skills, project experience, career interests, and even the cultural attributes of the startups to provide you with a prioritized list of opportunities where you are most likely to succeed.',
      },
      {
        question: 'Can I apply to multiple internships?',
        answer:
          'Absolutely. We encourage you to apply to several roles that align with your career goals. However, we recommend personalizing your application for each startup to show genuine interest. Our platform helps you track your applications and manage the interview process efficiently.',
      },
      {
        question: 'How can I make my profile stand out?',
        answer:
          'A great profile includes a detailed summary of your career goals, a portfolio of your best projects (with links to live demos or GitHub), and a complete skills section. Our AI Resume Optimizer can also give you data-driven suggestions to improve your profile.',
      },
    ],
  },
  {
    category: 'Internship Experience',
    questions: [
      {
        question: 'What can I expect during a startup internship?',
        answer:
          'Startup internships are hands-on and high-impact. You’ll work on real projects, collaborate with senior team members, and gain exposure to multiple aspects of the business. It’s a fast-paced environment where you can learn quickly and make a tangible contribution.',
      },
      {
        question: 'Are startup internships paid?',
        answer:
          'The vast majority of internships on our platform are paid. We strongly advocate for fair compensation for interns. Any unpaid internships must meet strict criteria, such as offering academic credit and providing an exceptional learning experience. All compensation details are clearly listed on each posting.',
      },
      {
        question: 'What is startup equity, and is it offered to interns?',
        answer:
          "Equity represents ownership in a company. While it's less common for short-term internships, some startups offer equity (in the form of stock options) as part of their compensation package, especially for longer-term or high-impact interns who may convert to full-time roles.",
      },
    ],
  },
  {
    category: 'For Startups',
    questions: [
      {
        question: 'How does Sproutern help startups find talent?',
        answer:
          'We provide startups with access to a pre-vetted pool of ambitious students who are specifically interested in the startup ecosystem. Our platform streamlines the hiring process, reduces recruitment costs, and helps companies build a strong talent pipeline for future full-time roles.',
      },
      {
        question: 'What is the vetting process for startups?',
        answer:
          'We vet every startup to ensure they offer a valuable and structured learning experience. We review their funding, team, product, and mentorship plan. We only partner with companies that are committed to intern growth and development.',
      },
    ],
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-12 text-center sm:mb-20">
          <div className="glass-strong mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 sm:mb-6 sm:px-6 sm:py-3">
            <ChevronDown className="h-4 w-4 text-primary" />
            <span className="text-gradient text-sm font-bold">
              Got Questions?
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-black sm:mb-6 sm:text-4xl md:text-6xl">
            Frequently Asked
            <br />
            <span className="text-gradient">Questions</span>
          </h2>

          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-xl">
            Everything you need to know about finding your dream startup
            internship
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-8 sm:space-y-12">
          {faqs.map((category) => (
            <div
              key={category.category}
              className="space-y-6"
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent" />
                <h3 className="text-gradient text-xl font-black sm:text-3xl">
                  {category.category}
                </h3>
              </div>

              {category.questions.map((faq, index) => {
                const itemId = `${category.category}-${index}`;
                const isOpen = openItems.includes(itemId);

                return (
                  <div
                    key={itemId}
                    className="glass-strong glow-hover cursor-pointer overflow-hidden rounded-2xl border-2 border-white/10 transition-all hover:border-white/20"
                    onClick={() => toggleItem(itemId)}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="flex-1 text-base font-bold sm:text-xl">
                          {faq.question}
                        </h4>
                        <div
                          className={`rounded-lg bg-primary/10 p-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      {isOpen && (
                        <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:pt-6 sm:text-lg">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center sm:mt-20">
          <div className="glass-strong mx-auto max-w-2xl rounded-3xl border-2 border-white/10 p-6 sm:p-10">
            <h3 className="mb-3 text-xl font-black sm:mb-4 sm:text-2xl">
              Still have questions?
            </h3>
            <p className="mb-4 text-sm text-muted-foreground sm:mb-6 sm:text-lg">
              Our support team is here to help. Get in touch with us for
              personalized guidance.
            </p>
            <a
              href="/contact"
              className="glow-hover inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-bold text-white transition-all hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
