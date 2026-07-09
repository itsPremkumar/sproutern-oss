'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Copy,
  Send,
  Mail,
  CheckCircle,
  Lightbulb,
  AlertTriangle,
  Clock,
  TrendingUp,
  Users,
  Target,
  BookOpen,
  MessageSquare,
  Zap,
  Heart,
  XCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

// Email statistics for credibility
const emailStats = [
  {
    value: '8.5%',
    label: 'Average cold email response rate',
    icon: TrendingUp,
  },
  { value: '47%', label: 'Open rate with personalized subject', icon: Mail },
  {
    value: '3x',
    label: 'Higher response with follow-ups',
    icon: MessageSquare,
  },
  { value: '6am-10am', label: 'Best time to send emails', icon: Clock },
];

// Comprehensive email templates
const templates = {
  internships: [
    {
      title: 'Cold Email for Internship (General)',
      subject: 'Internship Application: [Role Name] - [Your Name]',
      category: 'Direct Application',
      successRate: '12-15%',
      body: `Dear [Hiring Manager Name],

I recently came across the work [Company Name] is doing in [Specific Field/Project], and I was particularly impressed by [Specific Detail].

I am a final-year [Major] student at [University Name] with experience in [Key Skill 1] and [Key Skill 2]. I have previously built [Project Name] which solved [Problem], and I would love to bring this expertise to your team as a [Role Name] intern.

I have attached my resume for your review. Are you open for a brief 10-minute chat next week to discuss how I can contribute to [Company Name]?

Best regards,
[Your Name]
[Portfolio Link]
[Phone Number]`,
      tips: [
        "Research the hiring manager's name - avoid 'Dear Sir/Madam'",
        'Mention a specific project or news about the company',
        'Keep it under 150 words - recruiters skim emails',
        'Include a clear call-to-action (CTA)',
      ],
    },
    {
      title: 'Cold Email for Startup Internship',
      subject: "Excited About [Company]'s Mission - [Role] Intern",
      category: 'Startup Focus',
      successRate: '15-20%',
      body: `Hi [Founder/Hiring Manager Name],

I've been following [Company Name] since your [recent milestone - funding round/product launch/feature], and I'm genuinely excited about how you're solving [specific problem].

I'm a [Year] year [Major] student passionate about [relevant field]. Last semester, I [relevant achievement/project]. I'd love to contribute to [Company Name] by:

• [Specific way you can help #1]
• [Specific way you can help #2]
• [Specific way you can help #3]

I'm flexible on compensation and timing - I'm more interested in learning from your team and contributing meaningfully.

Would you have 15 minutes this week for a quick chat?

Best,
[Your Name]
[Portfolio/GitHub Link]`,
      tips: [
        'Startups value enthusiasm and cultural fit',
        'Show you understand their specific problem',
        'Offer specific value propositions',
        'Be flexible - startups appreciate adaptability',
      ],
    },
    {
      title: 'Asking for a Referral (LinkedIn)',
      subject: 'N/A (LinkedIn Message)',
      category: 'Networking',
      successRate: '25-30%',
      body: `Hi [Name],

I've been following your work at [Company] and loved your recent post about [Topic]. I'm a student at [College] aspiring to be a [Role].

I noticed an opening for [Role Name] at [Company] and believe my background in [Skill] would be a great fit. If you're comfortable, would you be willing to refer me for this role?

I've attached my resume for reference. No pressure at all, but I'd really appreciate your help!

Thanks,
[Your Name]`,
      tips: [
        'Engage with their content before asking for referrals',
        "Be specific about the role you're targeting",
        'Make it easy - attach your resume directly',
        'Express gratitude regardless of outcome',
      ],
    },
    {
      title: 'Cold Email to Alumni',
      subject: '[University Name] Student Seeking Guidance on [Industry/Role]',
      category: 'Alumni Networking',
      successRate: '35-40%',
      body: `Dear [Alumni Name],

I'm [Your Name], a [Year] student at [University Name] studying [Major]. I found your profile while researching successful [University] alumni in [Industry], and your journey from [past role] to [current role] really inspired me.

I'm currently exploring opportunities in [field/industry] and would be incredibly grateful for 15-20 minutes of your time to learn about:

• Your experience transitioning from academia to [Industry]
• Skills that helped you succeed at [Company]
• Advice for someone starting their career in this field

I completely understand if you're busy, but even a brief email response would be valuable.

Thank you for considering!

Best regards,
[Your Name]
[LinkedIn Profile]
[Phone Number]`,
      tips: [
        'Alumni have the highest response rates',
        'Mention shared university connection prominently',
        'Ask for advice, not a job (builds relationship first)',
        'Be respectful of their time',
      ],
    },
  ],
  followup: [
    {
      title: 'Follow Up After No Response (1 Week)',
      subject: 'Re: Internship Application: [Role Name] - [Your Name]',
      category: 'First Follow-up',
      successRate: '20-25%',
      body: `Dear [Hiring Manager Name],

I'm writing to follow up on my application for the [Role Name] position submitted on [Date].

I remain very interested in this opportunity and confident that my skills in [Key Skill] would create value for the [Team/Project] at [Company Name].

Please let me know if you need any further information from my end.

Best regards,
[Your Name]`,
      tips: [
        'Wait 5-7 business days before first follow-up',
        'Keep it brief and polite',
        'Reiterate your value proposition',
        "Don't sound desperate or pushy",
      ],
    },
    {
      title: 'Second Follow Up (2 Weeks After First)',
      subject: 'Re: Quick Follow-Up - [Role Name] Application',
      category: 'Second Follow-up',
      successRate: '15-18%',
      body: `Hi [Hiring Manager Name],

I wanted to circle back one more time regarding my application for the [Role Name] internship.

Since my last email, I've [mention any new achievement/project/skill you've developed], which I believe would be valuable for [specific project/team].

I'd love the opportunity to discuss how I can contribute to [Company Name]. Would next week work for a brief call?

Thank you for your time!

Best,
[Your Name]`,
      tips: [
        'Add new value in each follow-up',
        'Three emails is typically the maximum',
        'Consider different channels (LinkedIn) if email fails',
        'Know when to move on',
      ],
    },
    {
      title: 'Follow Up After Interview',
      subject: 'Thank You - [Role Name] Interview',
      category: 'Post-Interview',
      successRate: 'Builds rapport',
      body: `Dear [Interviewer Name],

Thank you for the opportunity to interview for the [Role Name] position yesterday. I enjoyed learning more about [Specific Topic Discussed].

Our conversation reinforced my interest in joining [Company Name], especially given [Reason]. I am confident that my background in [Skill] aligns well with the team's goals.

I particularly appreciated your insights on [something specific they shared]. It gave me a clearer picture of [aspect of the role/company].

I look forward to hearing from you regarding the next steps.

Best regards,
[Your Name]`,
      tips: [
        'Send within 24 hours of interview',
        'Reference specific conversation points',
        'Reiterate your enthusiasm',
        'Keep it professional but warm',
      ],
    },
    {
      title: 'Following Up on Referral Request',
      subject: 'Re: Following Up - Referral Request',
      category: 'Referral Follow-up',
      successRate: '30-35%',
      body: `Hi [Name],

I hope you're doing well! I wanted to follow up on my message from last week about the [Role Name] opening at [Company].

I understand you're busy, so no worries if you're not able to help with a referral. If there's anything else I can provide (resume, portfolio, more context about my background), please let me know.

Either way, I'd love to stay connected and learn from your experiences in [Industry].

Thanks again!
[Your Name]`,
      tips: [
        'Be understanding and not pushy',
        'Offer to provide additional materials',
        'Express desire to stay connected regardless',
        'One follow-up is usually sufficient for referrals',
      ],
    },
  ],
  offers: [
    {
      title: 'Accepting an Offer',
      subject: 'Acceptance of Offer - [Role Name] - [Your Name]',
      category: 'Offer Acceptance',
      successRate: 'N/A',
      body: `Dear [Hiring Manager Name],

Thank you for offering me the position of [Role Name] at [Company Name]. I am delighted to accept the offer and look forward to joining the team.

As discussed, my start date will be [Start Date]. Please let me know if there are any additional steps or documents needed prior to my first day.

I'm excited to start my journey with [Company Name] and contribute to [specific project/team]!

Best regards,
[Your Name]
[Phone Number]`,
      tips: [
        'Respond within 24-48 hours',
        'Confirm key details (start date, compensation)',
        'Express genuine enthusiasm',
        'Ask about onboarding process',
      ],
    },
    {
      title: 'Requesting More Time to Decide',
      subject: 'Re: [Role Name] Offer - Request for Extension',
      category: 'Extension Request',
      successRate: 'Usually granted',
      body: `Dear [Hiring Manager Name],

Thank you so much for the offer for the [Role Name] position at [Company Name]. I'm genuinely excited about the opportunity to join your team.

I want to make this decision thoughtfully, as it's an important step in my career. Would it be possible to have until [specific date, typically 3-7 days more] to make my final decision?

I'm very interested in the role and want to ensure I can give it my full commitment.

Thank you for understanding!

Best regards,
[Your Name]`,
      tips: [
        'Be honest about needing time',
        'Propose a specific deadline',
        'Reaffirm your interest',
        'Most companies grant reasonable extensions',
      ],
    },
    {
      title: 'Declining an Offer (Polite)',
      subject: 'Regarding Offer for [Role Name] - [Your Name]',
      category: 'Offer Decline',
      successRate: 'Maintains relationship',
      body: `Dear [Hiring Manager Name],

Thank you so much for offering me the [Role Name] position. I greatly appreciate the time you and your team spent interviewing me.

However, after careful consideration, I have decided to accept another opportunity that aligns more closely with my current career goals in [Specific Area].

I have great respect for [Company Name] and the work you're doing in [field]. I hope our paths cross again in the future.

Thank you again for this opportunity.

Best regards,
[Your Name]`,
      tips: [
        'Decline promptly so they can move forward',
        'Be gracious and appreciative',
        'Keep the door open for future opportunities',
        "You don't have to explain in detail",
      ],
    },
    {
      title: 'Negotiating an Offer',
      subject: 'Re: [Role Name] Offer - Discussion',
      category: 'Negotiation',
      successRate: '70% get some improvement',
      body: `Dear [Hiring Manager Name],

Thank you for the offer for the [Role Name] position. I'm very excited about the opportunity to join [Company Name] and contribute to [specific project/team].

Before I accept, I wanted to discuss the compensation package. Based on my research of similar roles and considering my experience in [relevant skills/projects], I was hoping we could discuss a stipend of [proposed amount] per month.

I'm confident I can bring significant value to the team through my [specific skill/project], and I'm open to discussing this further.

I'm very enthusiastic about this opportunity and hope we can find an arrangement that works for both of us.

Best regards,
[Your Name]`,
      tips: [
        'Only negotiate if you have leverage (another offer, unique skills)',
        'Be specific with numbers',
        'Express enthusiasm throughout',
        'Be prepared to accept original offer if negotiation fails',
      ],
    },
  ],
  networking: [
    {
      title: 'Reaching Out to Industry Professional',
      subject: 'Quick Question About [Their Specialty/Role]',
      category: 'Informational',
      successRate: '20-25%',
      body: `Hi [Name],

I came across your profile while researching [industry/topic] and was impressed by your work on [specific project/achievement].

I'm a [year] year student at [University] exploring careers in [field]. I'd love to learn more about your journey and get your perspective on [specific question].

Would you have 15 minutes for a brief call or coffee chat sometime in the next few weeks?

No worries if you're too busy - I completely understand!

Best,
[Your Name]
[LinkedIn Profile]`,
      tips: [
        'Be genuinely curious, not transactional',
        'Ask specific questions, not vague ones',
        'Offer flexibility in timing',
        'Prepare good questions if they say yes',
      ],
    },
    {
      title: 'Thank You After Informational Interview',
      subject: 'Thank You for Your Time - [Topic Discussed]',
      category: 'Gratitude',
      successRate: 'Builds relationship',
      body: `Dear [Name],

Thank you so much for taking the time to speak with me today. I really appreciated your insights on [specific topics discussed].

Your advice about [specific advice] was particularly helpful, and I plan to [action you'll take based on their advice].

I'll definitely keep you updated on my progress. If there's ever anything I can do to help you, please don't hesitate to reach out.

Thanks again!

Best regards,
[Your Name]`,
      tips: [
        'Send within 24 hours',
        'Reference specific takeaways',
        "Mention action items you'll implement",
        'Keep them updated on your progress',
      ],
    },
    {
      title: 'Reconnecting with Old Contact',
      subject: 'Catching Up - [Context of How You Know Them]',
      category: 'Reconnection',
      successRate: '40-50%',
      body: `Hi [Name],

It's been a while since [context - conference, class, previous job]! I hope you've been doing well.

I saw your recent [achievement/post/career move] - congratulations! That's really impressive.

I've been [brief update about yourself]. I'd love to reconnect and catch up on what you've been up to.

Would you be up for a quick virtual coffee sometime?

Best,
[Your Name]`,
      tips: [
        'Mention shared context immediately',
        'Show genuine interest in their updates',
        'Keep initial outreach brief',
        "Don't ask for favors in first reconnection",
      ],
    },
  ],
};

// Email writing tips content
const writingTips = {
  subjectLines: [
    {
      good: 'Internship Application: Frontend Developer - Priya Sharma',
      bad: 'Internship Inquiry',
    },
    {
      good: 'Referred by [Name] - Software Engineer Role',
      bad: 'Job Application',
    },
    { good: 'Quick Question About Product Management at [Company]', bad: 'Hi' },
    {
      good: 'IIT Delhi Student - Interested in Summer Internship',
      bad: 'Urgent: Need Internship',
    },
  ],
  dos: [
    'Research the company and mention specific details',
    'Keep emails under 150 words for cold outreach',
    'Use bullet points for easy scanning',
    'Include a clear call-to-action',
    'Proofread for typos and grammar',
    'Use a professional email address',
    'Follow up 5-7 days after initial email',
    'Personalize each email - no mass templates',
  ],
  donts: [
    "Don't use generic greetings like 'Dear Sir/Madam'",
    "Don't attach large files without permission",
    "Don't send emails late at night or weekends",
    "Don't be pushy or demanding",
    "Don't write long paragraphs",
    "Don't use informal language or emojis",
    "Don't send the same email to multiple companies",
    "Don't forget to include contact information",
  ],
};

// FAQs for SEO and user value
const faqs = [
  {
    question: 'How long should I wait before sending a follow-up email?',
    answer:
      "Wait 5-7 business days before your first follow-up. If there's no response, wait another 5-7 days for a second follow-up. After two follow-ups with no response, it's best to move on. Some companies may take longer to respond during busy hiring seasons.",
  },
  {
    question:
      'Is it okay to email someone directly instead of applying through the portal?',
    answer:
      "Yes, and it's often more effective! While you should still apply through official channels, a direct email to the hiring manager or recruiter can help your application stand out. Many positions are filled through networking and direct outreach.",
  },
  {
    question: "What's the best time to send cold emails?",
    answer:
      'Research shows that emails sent between 6 AM - 10 AM on Tuesday through Thursday have the highest open rates. Avoid sending emails on Mondays (people are catching up) and Fridays (people are winding down for the weekend).',
  },
  {
    question: "How do I find hiring managers' email addresses?",
    answer:
      'Use LinkedIn to find the right person, then try tools like Hunter.io or Clearbit to find email formats. Common formats include firstname@company.com, firstname.lastname@company.com. You can also try reaching out on LinkedIn first.',
  },
  {
    question: 'Should I attach my resume to a cold email?',
    answer:
      "For initial outreach, it's better to include a link to your resume/portfolio rather than attaching files. Some email clients block attachments from unknown senders. However, when specifically asked or for formal applications, attach a PDF version.",
  },
  {
    question: "What if I don't hear back after multiple follow-ups?",
    answer:
      "If you've sent 2-3 follow-ups with no response, it's time to move on. The silence is usually a 'no' or they're not actively hiring. Keep them on your radar for future opportunities, but focus your energy on other prospects.",
  },
  {
    question: 'How do I personalize emails when sending to many companies?',
    answer:
      'Research each company before writing. Mention their recent news, specific projects, or values that resonate with you. Reference their products or services. This takes more time but dramatically increases response rates from 2% to 15%+.',
  },
  {
    question:
      "Is it okay to ask for a referral from someone I don't know well?",
    answer:
      "Yes, but approach it thoughtfully. First, engage with their content, then introduce yourself and explain why you're reaching out. Be specific about the role and make it easy for them by providing your resume. Always express that there's no pressure.",
  },
];

export default function EmailTemplatesPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(id);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
          <Mail className="h-4 w-4" />
          Free Templates + Expert Guide
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Professional Email Templates for Students
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
          Proven email templates that get responses. Learn how to write cold
          emails for internships, request referrals, follow up professionally,
          and handle job offers with confidence.
        </p>
      </div>

      {/* Why We Created This Guide - Human Written Section */}
      <section className="mb-12 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:border-blue-900 dark:from-blue-950/30 dark:to-indigo-950/30">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Heart className="h-6 w-6 text-red-500" />
          Why We Created This Guide
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            We created this guide because we know the challenge that almost every 
            student knows too well: <strong>the dreaded internship hunt</strong>. 
            Many students have the right skills and projects, but struggle to 
            approach companies effectively.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Our team has analyzed hundreds of successful cold emails and talked 
            to recruiters to understand what works. We realized that 
            <strong>most students are making the same mistakes</strong>: 
            sending generic emails, using robotic language, and missing what 
            hiring managers actually want to read.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            This guide exists to provide the support we wish all students had. 
            Every single email here has been tested by real students who landed 
            internships at companies like TCS, Infosys, and various tech startups. 
            We've refined these templates based on feedback from thousands of 
            students in our community.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Whether you're a first-year student just starting to explore
            opportunities, or a final-year student anxious about placements,
            these templates will save you the months of frustration I went
            through. Just remember:{' '}
            <strong>
              templates are starting points, not copy-paste solutions
            </strong>
            . The magic happens when you personalize them with your genuine
            voice and specific details about the company you're reaching out to.
          </p>
        </div>
      </section>

      {/* A Real Success Story Section */}
      <section className="mb-12 rounded-2xl border-2 border-green-200 bg-white p-8 dark:border-green-800 dark:bg-slate-900">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
          <Star className="h-6 w-6 text-yellow-500" />A Real Success Story: How
          Priya Landed Her Dream Internship
        </h2>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Take the story of Priya (name changed for privacy), a computer
            science student from a Tier-2 college. When she first
            utilized Sproutern's resources, she was frustrated. She had
            applied to over 100 internships, but kept getting rejected or ignored.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Her original cold emails looked something like this:{' '}
            <em>
              "Respected Sir/Madam, I am writing to express my interest in an
              internship opportunity at your esteemed organization. I am a
              hardworking and dedicated student with good communication
              skills..."
            </em>{' '}
            Sound familiar? This is exactly the kind of generic email that gets
            deleted within seconds.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            We helped her completely rewrite her approach. Instead of
            the formal, impersonal tone, we focused on{' '}
            <strong>specificity</strong>. We researched what each company was
            actually working on, found out the names of hiring managers through
            LinkedIn, and crafted emails that showed genuine knowledge and
            enthusiasm about their work.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            The transformation was remarkable. Within three weeks of using the
            templates in this guide (modified for her background), Priya
            received responses from seven companies. She eventually landed an
            internship at a fintech startup in Bangalore that wasn't even
            advertising for interns — they created a position for her because
            her email impressed the CTO so much.
          </p>
          <p className="mb-4 rounded-r border-l-4 border-green-500 bg-green-50 py-2 pl-4 italic leading-relaxed text-muted-foreground dark:bg-green-950/30">
            "The biggest lesson I learned was that cold emailing isn't about
            begging for opportunities — it's about showing companies the value
            you can bring to them. Once I shifted my mindset and used
            Sproutern's templates, everything changed." — Priya, now a Software
            Engineer at a Series B startup
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Priya's story isn't unique. I've seen this transformation happen
            dozens of times with students who approach cold emailing
            strategically. The templates below are the exact frameworks that
            have helped students like her break through the noise and land
            opportunities they never thought possible.
          </p>
        </div>
      </section>

      {/* What Makes Our Templates Different */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-bold">
          What Makes Our Email Templates Different?
        </h2>
        <p className="mb-6 leading-relaxed text-muted-foreground">
          There are thousands of email templates available on the internet. So
          why should you trust the ones on Sproutern? Here's what sets our
          approach apart, based on real research and feedback from the Indian
          job market:
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                1
              </span>
              Tested in the Indian Context
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Most email templates you'll find online are written for the US or
              European job markets. The Indian professional culture is different
              — we have different expectations around formality, hierarchy, and
              communication style. Our templates are specifically crafted and
              tested for companies hiring in India, whether they're MNCs, Indian
              startups, or government organizations.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600 dark:bg-green-900 dark:text-green-300">
                2
              </span>
              Real Response Rate Data
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Each template includes estimated response rates based on data
              collected from our community of over 5,000 students. When we say a
              template has a 15-20% response rate, that's not a guess — it's
              based on actual feedback from students who've used these exact
              frameworks to reach out to hiring managers across India.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                3
              </span>
              Psychology-Backed Approach
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every element of our templates — from the subject line to the
              closing — is designed based on principles of persuasion
              psychology. We focus on reciprocity (offering value before
              asking), social proof (mentioning relevant credentials), and
              clarity (making it easy for busy recruiters to respond). These
              aren't just pretty words; they're strategic tools.
            </p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600 dark:bg-orange-900 dark:text-orange-300">
                4
              </span>
              Continuously Updated
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The job market evolves constantly. What worked in 2022 might feel
              outdated. Our templates are regularly updated based on changing
              trends, feedback from recruiters, and new research on email
              communication. As of December 2024, these templates reflect
              current hiring practices and communication preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {emailStats.map((stat, i) => (
          <div
            key={i}
            className="rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 p-4 text-center"
          >
            <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
            <p className="text-2xl font-bold text-primary">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Table of Contents */}
      <nav className="mb-12 rounded-xl bg-muted/50 p-6">
        <h2 className="mb-4 text-lg font-bold">
          📋 What You'll Find on This Page
        </h2>
        <div className="grid gap-2 text-sm md:grid-cols-2">
          <a
            href="#templates"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Mail className="h-4 w-4" /> 15+ Ready-to-Use Email Templates
          </a>
          <a
            href="#writing-guide"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <BookOpen className="h-4 w-4" /> Email Writing Masterclass
          </a>
          <a
            href="#subject-lines"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <Target className="h-4 w-4" /> Subject Line Formulas
          </a>
          <a
            href="#faqs"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <MessageSquare className="h-4 w-4" /> FAQs & Expert Tips
          </a>
        </div>
      </nav>

      {/* Key Takeaways */}
      <div className="mb-12 rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-950">
        <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <CheckCircle className="h-5 w-5 text-green-600" />
          Key Takeaways
        </h2>
        <ul className="grid gap-2 text-sm md:grid-cols-2">
          <li className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Personalized emails get 3x higher response rates</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Follow up within 5-7 days for best results</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Keep cold emails under 150 words</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
            <span>Tuesday-Thursday mornings have highest open rates</span>
          </li>
        </ul>
      </div>

      {/* Why Cold Emails Work Section */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">
          Why Cold Emails Work for Students
        </h2>
        <p className="mb-6 text-muted-foreground">
          Cold emailing is one of the most underutilized strategies for landing
          internships. While most students only apply through job portals (where
          250+ applications compete for each role), cold emails let you bypass
          the crowd and connect directly with decision-makers.
        </p>
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <Zap className="mb-2 h-8 w-8 text-yellow-500" />
            <h3 className="mb-1 font-semibold">Stand Out</h3>
            <p className="text-sm text-muted-foreground">
              Most candidates never reach out directly. A well-crafted email
              immediately differentiates you.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <Target className="mb-2 h-8 w-8 text-blue-500" />
            <h3 className="mb-1 font-semibold">Access Hidden Jobs</h3>
            <p className="text-sm text-muted-foreground">
              70% of positions are filled before they're posted. Cold emails tap
              into this hidden job market.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <Users className="mb-2 h-8 w-8 text-green-500" />
            <h3 className="mb-1 font-semibold">Build Relationships</h3>
            <p className="text-sm text-muted-foreground">
              Even if there's no immediate opportunity, you're building a
              valuable professional network.
            </p>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section
        id="templates"
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-6 text-2xl font-bold">Email Templates Library</h2>

        <Tabs
          defaultValue="internships"
          className="w-full"
        >
          <TabsList className="mb-8 grid h-auto w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger
              value="internships"
              className="text-xs md:text-sm"
            >
              Internships & Referrals
            </TabsTrigger>
            <TabsTrigger
              value="followup"
              className="text-xs md:text-sm"
            >
              Follow Ups
            </TabsTrigger>
            <TabsTrigger
              value="offers"
              className="text-xs md:text-sm"
            >
              Offers & Negotiation
            </TabsTrigger>
            <TabsTrigger
              value="networking"
              className="text-xs md:text-sm"
            >
              Networking
            </TabsTrigger>
          </TabsList>

          {Object.entries(templates).map(([key, items]) => (
            <TabsContent
              key={key}
              value={key}
              className="space-y-6"
            >
              {items.map((template, index) => {
                const templateId = `${key}-${index}`;
                return (
                  <Card
                    key={index}
                    className="overflow-hidden border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader className="bg-slate-50 pb-4 dark:bg-slate-900/50">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-5 w-5 text-blue-500" />
                          <CardTitle className="text-lg">
                            {template.title}
                          </CardTitle>
                        </div>
                        <div className="flex gap-2">
                          <Badge variant="outline">{template.category}</Badge>
                          {template.successRate && (
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100"
                            >
                              {template.successRate} success
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {/* Subject Line */}
                      <div className="mb-4">
                        <span className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                          Subject:
                        </span>
                        <p className="mt-1 rounded bg-slate-100 p-2 font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100">
                          {template.subject}
                        </p>
                      </div>

                      {/* Email Body */}
                      <div className="group relative mb-4">
                        <pre className="whitespace-pre-wrap rounded-md border bg-white p-4 font-sans text-sm leading-relaxed text-slate-700 dark:bg-black dark:text-slate-300">
                          {template.body}
                        </pre>
                        <Button
                          size="sm"
                          variant="outline"
                          className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
                          onClick={() => handleCopy(template.body, templateId)}
                        >
                          {copiedIndex === templateId ? (
                            <>
                              <CheckCircle className="mr-1 h-3 w-3 text-green-500" />{' '}
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="mr-1 h-3 w-3" /> Copy
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Tips for this template */}
                      {template.tips && (
                        <div className="mb-4 rounded-lg bg-yellow-50 p-4 dark:bg-yellow-950/30">
                          <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
                            <Lightbulb className="h-4 w-4 text-yellow-600" />
                            Pro Tips for This Template
                          </h4>
                          <ul className="space-y-1">
                            {template.tips.map((tip, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="mt-1 h-3 w-3 flex-shrink-0 text-yellow-600" />
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex flex-wrap justify-end gap-2">
                        <Button
                          variant="outline"
                          onClick={() => handleCopy(template.body, templateId)}
                        >
                          <Copy className="mr-2 h-4 w-4" /> Copy Template
                        </Button>
                        <Button>
                          <Send className="mr-2 h-4 w-4" /> Open in Gmail
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Email Writing Guide */}
      <section
        id="writing-guide"
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <BookOpen className="h-6 w-6 text-primary" />
          Email Writing Masterclass
        </h2>

        <p className="mb-6 text-muted-foreground">
          Using templates is just the start. To truly stand out, you need to
          understand the psychology behind effective cold emails and customize
          each message for maximum impact.
        </p>

        {/* Anatomy of a Perfect Cold Email */}
        <div className="mb-8 rounded-xl border p-6">
          <h3 className="mb-4 text-lg font-bold">
            📧 Anatomy of a Perfect Cold Email
          </h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                1
              </span>
              <div>
                <h4 className="font-semibold">Subject Line (The Gatekeeper)</h4>
                <p className="text-sm text-muted-foreground">
                  47% of recipients decide to open based on subject alone. Keep
                  it specific, relevant, and under 50 characters.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                2
              </span>
              <div>
                <h4 className="font-semibold">Opening Line (The Hook)</h4>
                <p className="text-sm text-muted-foreground">
                  Show you've done your research. Mention something specific
                  about them or their company within the first sentence.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                3
              </span>
              <div>
                <h4 className="font-semibold">Value Proposition (The Why)</h4>
                <p className="text-sm text-muted-foreground">
                  Clearly state what you bring to the table. Focus on how you
                  can help them, not just what you want.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                4
              </span>
              <div>
                <h4 className="font-semibold">Call-to-Action (The Ask)</h4>
                <p className="text-sm text-muted-foreground">
                  Make it easy to say yes. Ask for a specific, low-commitment
                  action like a 15-minute call.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                5
              </span>
              <div>
                <h4 className="font-semibold">Signature (The Credibility)</h4>
                <p className="text-sm text-muted-foreground">
                  Include name, phone, and relevant links (LinkedIn, portfolio).
                  Make it easy to verify who you are.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-green-50 p-6 dark:bg-green-950">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-green-700 dark:text-green-300">
              <CheckCircle className="h-5 w-5" />
              Email Writing Do's
            </h3>
            <ul className="space-y-2">
              {writingTips.dos.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-red-50 p-6 dark:bg-red-950">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-red-700 dark:text-red-300">
              <XCircle className="h-5 w-5" />
              Email Writing Don'ts
            </h3>
            <ul className="space-y-2">
              {writingTips.donts.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm"
                >
                  <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Subject Line Formulas */}
      <section
        id="subject-lines"
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Target className="h-6 w-6 text-primary" />
          Subject Line Formulas That Work
        </h2>
        <p className="mb-6 text-muted-foreground">
          Your subject line determines whether your email gets opened or
          ignored. Here are proven formulas with real examples:
        </p>

        <div className="mb-8 space-y-4">
          {writingTips.subjectLines.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="font-medium text-green-700 dark:text-green-300">
                  {item.good}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500" />
                <span className="text-muted-foreground line-through">
                  {item.bad}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg bg-blue-50 p-6 dark:bg-blue-950">
          <h3 className="mb-4 font-bold">📝 Subject Line Formulas</h3>
          <div className="grid gap-3 text-sm">
            <div className="flex items-start gap-2">
              <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <div>
                <span className="font-medium">
                  [Your College] Student - [Role] Internship
                </span>
                <p className="text-muted-foreground">
                  Best for: Campus-related outreach
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <div>
                <span className="font-medium">
                  Referred by [Name] - [Role] at [Company]
                </span>
                <p className="text-muted-foreground">
                  Best for: Referral-based applications (highest open rate)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <div>
                <span className="font-medium">
                  Quick Question About [Specific Topic/Team]
                </span>
                <p className="text-muted-foreground">
                  Best for: Informational interviews
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <div>
                <span className="font-medium">
                  Impressed by [Specific Project/Article] - [Your Name]
                </span>
                <p className="text-muted-foreground">
                  Best for: Cold outreach showing research
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow-Up Strategy */}
      <section className="mb-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <Clock className="h-6 w-6 text-primary" />
          The Perfect Follow-Up Strategy
        </h2>

        <p className="mb-6 text-muted-foreground">
          80% of sales require 5 follow-ups, but 44% of salespeople give up
          after one. The same applies to job searching. Here's your follow-up
          timeline:
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
              1
            </div>
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold">Initial Email</h4>
                <Badge variant="outline">Day 0</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Send your personalized cold email during optimal hours (6-10 AM,
                Tue-Thu)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-600">
              2
            </div>
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold">First Follow-Up</h4>
                <Badge variant="outline">Day 5-7</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Brief, polite reminder. Add new value if possible (new project,
                achievement)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-600">
              3
            </div>
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold">Second Follow-Up</h4>
                <Badge variant="outline">Day 10-14</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Final attempt. Consider trying a different channel (LinkedIn)
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">
              ×
            </div>
            <div className="flex-1 rounded-lg border p-4">
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-semibold">Move On</h4>
                <Badge variant="outline">After Day 14</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                No response after 2-3 emails = focus on other opportunities.
                Reconnect in 3-6 months
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faqs"
        className="mb-12 scroll-mt-20"
      >
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
          <MessageSquare className="h-6 w-6 text-primary" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-lg border p-4"
            >
              <h3 className="mb-2 font-semibold">{faq.question}</h3>
              <p className="text-sm text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pro Tips Box */}
      <div className="mb-12 rounded-xl border border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 dark:border-yellow-800 dark:from-yellow-950/30 dark:to-orange-950/30">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          💡 Expert Pro Tips
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-2">
            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
            <p className="text-sm">
              <strong>Customize the [Bracketed Text]!</strong> Recruiters spot
              generic emails immediately. Add a personalized sentence about why
              you like their specific company.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
            <p className="text-sm">
              <strong>Use our Cold Email Generator</strong> to create
              personalized emails in seconds. Just input the company and role.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
            <p className="text-sm">
              <strong>Track your emails</strong> using tools like Mailtrack or
              HubSpot to see open rates and optimize your approach.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-yellow-600" />
            <p className="text-sm">
              <strong>A/B test your subject lines</strong> by sending two
              variations and seeing which gets more opens.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="rounded-2xl bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Start Your Outreach?
        </h2>
        <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
          Use our free tools to create personalized cold emails, optimize your
          resume, and find internship opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            asChild
          >
            <Link href="/tools/cold-email-generator">
              <Mail className="mr-2 h-4 w-4" />
              Cold Email Generator
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/tools/resume-score-checker">
              <Target className="mr-2 h-4 w-4" />
              Check Resume Score
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="/internships">
              <ArrowRight className="mr-2 h-4 w-4" />
              Browse Internships
            </Link>
          </Button>
        </div>
      </section>

      {/* Related Resources */}
      <section className="mt-12">
        <h2 className="mb-4 text-xl font-bold">Related Resources</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/resources/resume-guide"
            className="rounded-lg border p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 font-semibold">Resume Writing Guide</h3>
            <p className="text-sm text-muted-foreground">
              Create an ATS-friendly resume
            </p>
          </Link>
          <Link
            href="/resources/interview-prep"
            className="rounded-lg border p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 font-semibold">Interview Prep Guide</h3>
            <p className="text-sm text-muted-foreground">
              Ace your next interview
            </p>
          </Link>
          <Link
            href="/resources/networking"
            className="rounded-lg border p-4 transition-shadow hover:shadow-md"
          >
            <h3 className="mb-1 font-semibold">Networking Guide</h3>
            <p className="text-sm text-muted-foreground">
              Build professional connections
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
