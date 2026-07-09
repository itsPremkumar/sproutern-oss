import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Do you work with early-stage startups?',
    answer:
      "Yes! In fact, early-stage startups are my specialty. I understand the need for speed and getting to market quickly to test your assumptions. I build scalable MVPs that won't need to be immediately rewritten when you raise your next round.",
  },
  {
    question: 'What is your primary tech stack?',
    answer:
      'I specialize in the exact stack used to build Sproutern: Next.js (App Router), React, Tailwind CSS, TypeScript, and Firebase (or Supabase/PostgreSQL depending on your data needs). This stack allows for incredible performance, SEO, and developer velocity.',
  },
  {
    question: "How does the '30-Day MVP' process work?",
    answer:
      "We start with a kickoff call to strictly define the 'Minimum Viable' scope. I then handle the full stack development (design, frontend, backend logic, and deployment). You will receive weekly demo updates, and on Day 30, you receive a production-ready Web App.",
  },
  {
    question: 'Do you offer ongoing maintenance after the build?',
    answer:
      'Yes. Every MVP project comes with 30 days of bug fixes. After that, I offer a monthly retainer for ongoing feature development and maintenance, acting as your Fractional CTO/Lead Developer.',
  },
  {
    question: 'How is the SEO Audit different from available free tools?',
    answer:
      "Free tools give you generic warnings. My audit provides an actionable, Next.js specific implementation plan. I look at your programmatic SEO architecture, server-side rendering setup, and schema markup—exactly how I organically grew Sproutern's traffic.",
  },
];

export function ServiceFAQ() {
  return (
    <section className="mx-auto w-full max-w-3xl py-16">
      <div className="mb-10 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground">
          Everything you need to know about working with me.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
          >
            <AccordionTrigger className="text-left font-semibold">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
