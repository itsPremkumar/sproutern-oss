import { Metadata } from 'next';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  Heart,
  BookOpen,
  Wrench,
  GraduationCap,
  Shield,
  Users,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'FAQ: Your Career Questions Answered',
  description:
    'Find detailed answers to common questions about Sproutern tools, career resources, interview preparation, and how our platform helps students succeed. Real answers from real experiences.',
  keywords:
    'Sproutern FAQ, career help, student platform questions, interview prep help, resume tools, CGPA calculator help, career guidance questions',
  openGraph: {
    title: 'Frequently Asked Questions',
    description:
      'Detailed answers to your questions about career resources, tools, and student support.',
    type: 'website',
    url: 'https://sproutern.dpdns.org/faq',
  },
  alternates: {
    canonical: 'https://sproutern.dpdns.org/faq',
  },
};

// FAQs organized by category with detailed, human answers
const generalFaqs = [
  {
    q: 'Is Sproutern completely free to use?',
    a: `Yes, and this is something we take very seriously. Sproutern was built because career counseling should be accessible to everyone. We believe that career resources should not be behind a paywall. 
    
Every tool, every guide, every resource you see here is free — not a "freemium" model where the good stuff is locked away. We sustain ourselves through non-intrusive ads so that every student gets the same access. If something helps you get a job, it should be free.`,
  },
  {
    q: 'Do I need to create an account to use Sproutern?',
    a: `No account is needed for most features. We designed it this way deliberately to avoid the frustration of having to create accounts just to access a simple calculator or guide.
    
Our CGPA converter, salary calculator, typing test, interview question banks — they all work instantly without any login. Some features like bookmarking resources or saving your progress do store data locally in your browser, so you won't lose anything if you close the tab.`,
  },
  {
    q: 'How is Sproutern different from other career platforms?',
    a: `We'll be honest with you — there are many career platforms out there. Here's what makes us different:
    
1. **Built for students by students.** Sproutern wasn't created based on business models, but to solve real struggles students face every day.
    
2. **Real interview experiences from real students.** The interview experiences on our platform aren't scraped from the internet. They're written by actual students who gave placement interviews.
    
3. **No hidden premium tier.** Every other platform seems to have a "Pro" version that locks away the best content. We don't.
    
4. **Context-aware tools.** We understand CGPA conversions, on-campus placement patterns, and the specific challenges of different college tiers.`,
  },
  {
    q: 'Who created Sproutern and why?',
    a: `Sproutern was built by a team of students and professionals who saw a massive gap in accessible career guidance. 
    
The platform was born out of the frustration of seeing how the "unwritten rules" of placements and hiring often favored those with better connections or from premier colleges. We believe every student deserves a fair shot at their dream career, regardless of their background or college tier.
    
That's why Sproutern exists. Every guide, every tool, every resource is designed to be the support system we wish we had. You can read more about our journey on the [About page](/about).`,
  },
];

const toolsFaqs = [
  {
    q: 'How accurate is the CGPA to Percentage converter?',
    a: `The short answer: very accurate, but always double-check with your university.

We don't just use generic formulas. Our CGPA converter includes university-specific formulas for Anna University, VTU, Mumbai University, JNTUH, and more. These are sourced directly from official academic regulations and examination guidelines.

That said, universities sometimes update their conversion methods. I've seen this happen — a friend used an online converter, got a wrong percentage on their resume, and had an awkward moment in an interview when the numbers didn't match their transcripts.

So here's my advice: use our tool for quick calculations and planning, but when it comes to official documents, always verify with your college's examination cell. Better safe than sorry.

If you notice that our formula for your university is outdated, please [contact us](/contact) — I personally review these reports and update the tool.`,
  },
  {
    q: 'Is my resume data safe when I use the Resume Score Checker?',
    a: `I want to be absolutely transparent here because I know how sensitive resumes are.

Here's what happens when you upload a resume:
1. Your file is sent to our servers over an encrypted connection (HTTPS with TLS 1.3)
2. Our AI analyzes the content, looking for keywords, formatting, and ATS compatibility
3. You get your score and recommendations within seconds
4. **Your resume is immediately deleted from our servers** — we don't store copies

We don't sell resume data to recruiters. We don't use your resume to train AI models. We don't keep backups. The only place your resume data exists is in the results displayed on your screen (which you can screenshot or download).

I built this with the same care I'd want for my own resume. Nobody wants their personal information floating around on random servers.`,
  },
  {
    q: 'Can I use the tools on my mobile phone?',
    a: `Absolutely! I actually designed the tools mobile-first because I know students don't always have access to laptops.

I remember preparing for placements and often using my phone to quickly look up things between classes or while commuting. The CGPA calculator, typing test, interview questions, salary calculator — everything works smoothly on phones and tablets.

If you notice any tool that's difficult to use on mobile, please let me know. That's a bug I want to fix.`,
  },
  {
    q: 'How do I suggest a new tool or feature?',
    a: `I genuinely love hearing from users. Some of our most popular features came from student suggestions.

Here's how you can reach me:
- **Contact form:** Visit our [Contact page](/contact) and describe your idea
- **Email:** Send directly to [https://github.com/itsPremkumar/sproutern-oss](mailto:https://github.com/itsPremkumar/sproutern-oss)
- **Social media:** DM us on Instagram or LinkedIn

I can't promise to build everything suggested (I'm just one person with limited time!), but I read every message and prioritize based on how many students would benefit. Features like the interview question generator and company-specific prep guides came from user suggestions.`,
  },
];

const contentFaqs = [
  {
    q: 'Are the interview experiences on Sproutern real?',
    a: `Yes, and this is something I'm very particular about.

Every interview experience published on Sproutern comes from an actual student who went through the process. We have a submission form where students can share their experiences, and I personally review each one before publishing.

I look for:
- **Specific details** that indicate genuine experience (exact questions, process flow, timeline)
- **Consistency** — the details should match what we know about the company's hiring process
- **Helpful intent** — is the student genuinely trying to help others or just promoting something?

We've rejected submissions that felt fake, copy-pasted, or promotional. Our interview experiences may not have the volume of some bigger platforms, but I can vouch for their authenticity.

If you've recently cleared an interview and want to help others, I'd love to publish your experience. Head to the Interview Experiences section to submit.`,
  },
  {
    q: 'How often is the content updated?',
    a: `I treat content freshness seriously because outdated information is worse than no information.

Here's our update schedule:
- **Tools (calculators, tests):** Updated whenever formulas or regulations change. For tax calculators, this means updates with each Finance Act.
- **Blog posts:** New articles published weekly. Existing posts are reviewed every 6 months for relevance.
- **Scholarship listings:** Updated monthly, with deadline reminders added closer to important dates.
- **Interview experiences:** Published as we receive and verify them.
- **Company guides:** Reviewed quarterly to reflect any changes in hiring processes.

Every page shows a "Last Updated" date so you know how fresh the information is. If something seems outdated, please flag it — I'd rather know and fix it than leave incorrect info up.`,
  },
  {
    q: 'How accurate is the scholarship information?',
    a: `I'll give you an honest answer: scholarship information changes frequently, and we do our best to keep up.

We source scholarship details from official government portals (NSP, state scholarship websites), university announcements, and corporate scholarship programs. Our team verifies dates and amounts before publishing.

However — and this is important — **always verify details on the official scholarship website before applying.** We've seen cases where deadlines get extended or reduced, amounts change, or eligibility criteria are modified after we publish.

Think of our scholarship listings as a discovery tool to find opportunities you might have missed. But for the actual application, go directly to the source. I'd hate for you to miss out because of outdated info on any platform, including ours.`,
  },
  {
    q: 'Are the country guides updated for 2025?',
    a: `Yes, all our study abroad and global career guides are updated for 2025.

This includes:
- Visa requirements and recent policy changes
- Updated cost of living estimates
- Current PR/work permit pathways
- University application timelines

I understand that study abroad plans involve significant financial and life decisions. The last thing you need is outdated info about visa processes or scholarship deadlines.

That said, immigration policies can change suddenly (we've all seen this during COVID and after). If you're seriously planning to study or work abroad, cross-reference our guides with official embassy/consulate websites.`,
  },
];

const supportFaqs = [
  {
    q: 'Do you offer personalized career counseling?',
    a: `Not yet, but I understand why you're asking.

Currently, Sproutern focuses on self-service tools and guides. The reason is simple: genuine career counseling requires time and expertise, and charging for it goes against our "free for all" principle. Offering subpar counseling just to check a box wouldn't help anyone.

What we do offer:
- Comprehensive guides that answer most career questions
- AI-powered tools that give personalized recommendations
- Interview experiences that share real student insights
- Community resources where you can learn from others

In the future, I'm exploring mentorship features where working professionals could volunteer to help students. If that interests you (as a mentor or mentee), let me know through the contact page.`,
  },
  {
    q: 'How can I contribute to Sproutern?',
    a: `There are several ways you can help other students through Sproutern:

1. **Share your interview experience:** If you've cleared an interview recently, your story could help someone else. Submit through our Interview Experiences section.

2. **Report errors:** Found something incorrect in our tools or content? Please tell us. Accuracy matters more than ego — I'll fix it.

3. **Suggest improvements:** Have ideas for new features or content? We're always listening.

4. **Spread the word:** If Sproutern helped you, share it with friends who might benefit. Our growth is entirely word-of-mouth.

5. **Support financially (optional):** We have a donate page for those who want to support our mission. It's completely optional — never feel obligated.

The biggest contribution is simply using the platform and giving honest feedback. That's how we get better.`,
  },
  {
    q: 'Is my data safe on Sproutern?',
    a: `Yes, and privacy is something I care deeply about. Here's the complete picture:

**What we don't do:**
- We don't sell your data to third parties
- We don't share personal information with recruiters without your explicit consent
- We don't track you across the internet
- We don't require personal info to use most tools

**What we do:**
- Most tools (calculators, tests) store data locally in your browser — we never see it
- If you create an account, we store only what's necessary (email, preferences)
- Resume analysis is done securely and files are deleted immediately after processing
- We use analytics to understand how the site is used (aggregate, not individual)

Our detailed Privacy Policy is available on the [Privacy Policy page](/privacy-policy). I wrote it to be actually readable, not lawyer-speak that no one understands.`,
  },
  {
    q: 'How do I report a bug or issue?',
    a: `I genuinely appreciate bug reports — they help make the platform better for everyone.

The easiest way to report an issue:
1. Go to our [Contact page](/contact)
2. Describe what you were trying to do
3. Tell us what went wrong (screenshots help!)
4. Mention your device and browser if it's a technical issue

You can also email [https://github.com/itsPremkumar/sproutern-oss](mailto:https://github.com/itsPremkumar/sproutern-oss) directly.

I personally review all bug reports and try to fix critical issues within 24-48 hours. For less urgent issues, fixes usually come in the next weekly update.

Fun fact: some of the students who reported bugs early on are now credited in our internal "bug hall of fame." Your contribution matters!`,
  },
];

export default function FAQPage() {
  // Enhanced FAQPage schema with speakable content for GEO optimization
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://sproutern.dpdns.org/faq#faqpage',
    name: 'Sproutern Frequently Asked Questions',
    description:
      'Comprehensive answers to common questions about career tools, interview preparation, and student resources',
    url: 'https://sproutern.dpdns.org/faq',
    // Speakable content for voice search
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.faq-question', '.faq-answer', 'h1', 'h2'],
    },
    // Author for E-E-A-T
    author: {
      '@type': 'Organization',
      '@id': 'https://sproutern.dpdns.org/#organization',
      name: 'Sproutern Team',
      url: 'https://sproutern.dpdns.org/about',
    },
    mainEntity: [
      ...generalFaqs,
      ...toolsFaqs,
      ...contentFaqs,
      ...supportFaqs,
    ].map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a.replace(/\n/g, ' ').replace(/\*\*/g, ''),
        author: {
          '@type': 'Organization',
          name: 'Sproutern Team',
          url: 'https://sproutern.dpdns.org/about',
        },
        dateCreated: '2025-01-01',
      },
    })),
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://sproutern.dpdns.org/#website',
      name: 'Sproutern',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16">
        <div className="container text-center">
          <Badge className="mb-4 bg-white/20 text-white">
            <HelpCircle className="mr-1 h-3 w-3" />
            Help Center
          </Badge>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            Real answers to your questions about Sproutern, written by the team
            that understands what students need.
          </p>
        </div>
      </section>

      {/* Personal Message Section */}
      <section className="container py-12">
        <div className="mx-auto max-w-3xl">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-8">
              <div className="mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-red-500" />
                <h2 className="text-xl font-bold">
                  A Quick Note Before You Read
                </h2>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We've written these answers to provide direct, honest guidance
                to the common questions students face every day.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                These answers come from real questions students have asked us —
                through emails, social media messages, and community feedback. 
                If your question isn't answered here, reach out directly. 
                We genuinely read and respond to every message.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* General FAQs */}
      <section className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-4 w-4 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">About Sproutern</h2>
          </div>
          <div className="space-y-4">
            {generalFaqs.map((faq, i) => (
              <Card
                key={i}
                className="overflow-hidden"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-start gap-2 text-lg font-bold">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm text-primary-foreground">
                      {i + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <div className="whitespace-pre-line pl-8 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools FAQs */}
      <section className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/10">
              <Wrench className="h-4 w-4 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold">Tools & Calculators</h2>
          </div>
          <div className="space-y-4">
            {toolsFaqs.map((faq, i) => (
              <Card
                key={i}
                className="overflow-hidden"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-start gap-2 text-lg font-bold">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm text-white">
                      {i + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <div className="whitespace-pre-line pl-8 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content FAQs */}
      <section className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
              <BookOpen className="h-4 w-4 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold">Content & Resources</h2>
          </div>
          <div className="space-y-4">
            {contentFaqs.map((faq, i) => (
              <Card
                key={i}
                className="overflow-hidden"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-start gap-2 text-lg font-bold">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                      {i + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <div className="whitespace-pre-line pl-8 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support FAQs */}
      <section className="container py-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/10">
              <Shield className="h-4 w-4 text-purple-500" />
            </div>
            <h2 className="text-2xl font-bold">Privacy & Support</h2>
          </div>
          <div className="space-y-4">
            {supportFaqs.map((faq, i) => (
              <Card
                key={i}
                className="overflow-hidden"
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 flex items-start gap-2 text-lg font-bold">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-sm text-white">
                      {i + 1}
                    </span>
                    {faq.q}
                  </h3>
                  <div className="whitespace-pre-line pl-8 leading-relaxed text-muted-foreground">
                    {faq.a}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="container py-12">
        <Card className="mx-auto max-w-3xl bg-muted/30">
          <CardContent className="p-8 text-center">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-2xl font-bold">Still Have Questions?</h2>
            <p className="mb-6 text-muted-foreground">
              I genuinely mean it when I say I read every message. Whether it's
              a feature request, a bug report, or just a question about career
              advice — I'm here to help. The whole point of Sproutern is to be
              the resource I wished I had.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contact">
                  Contact Me Directly
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
              >
                <Link href="/about">Read Our Story</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
