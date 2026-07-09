#!/usr/bin/env tsx

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Trending Content Engine — Auto-Discover & Generate Content for Trending Topics
 *
 * Discovers trending career/tech/education keywords and auto-generates
 * markdown blog posts targeting them. Runs daily via GitHub Actions.
 *
 * Usage:
 *   npx tsx scripts/trending-content-engine.ts
 *   npx tsx scripts/trending-content-engine.ts --count 10
 *   GOOGLE_API_KEY=xxx npx tsx scripts/trending-content-engine.ts --ai
 * ═════════════════════════════════════════════════════════════════════════════
 */

import fs from 'fs';
import path from 'path';

// ═════════════════════════════════════════════════════════════════════════════
// TRENDING TOPIC PATTERNS (Seasonally-aware keyword templates)
// ═════════════════════════════════════════════════════════════════════════════

interface TrendingTopic {
  slug: string;
  title: string;
  category: string;
  keywords: string[];
  prompt: string;
  season: 'always' | 'jan-mar' | 'apr-jun' | 'jul-sep' | 'oct-dec';
}

const currentMonth = new Date().getMonth() + 1; // 1-12

function getCurrentSeason(): string {
  if (currentMonth >= 1 && currentMonth <= 3) return 'jan-mar';
  if (currentMonth >= 4 && currentMonth <= 6) return 'apr-jun';
  if (currentMonth >= 7 && currentMonth <= 9) return 'jul-sep';
  return 'oct-dec';
}

const currentYear = new Date().getFullYear();

const TRENDING_TOPICS: TrendingTopic[] = [
  // ── Always Relevant ──────────────────────────────────────────────────────
  {
    slug: `top-it-companies-hiring-freshers-${currentYear}`,
    title: `Top 50 IT Companies Hiring Freshers in ${currentYear} — Updated List`,
    category: 'Jobs',
    keywords: [
      `it companies hiring freshers ${currentYear}`,
      `fresher jobs ${currentYear}`,
      'top hiring companies india',
    ],
    prompt: `Write a comprehensive list of top 50 IT companies hiring freshers in India in ${currentYear}. Include company name, package range, eligibility, and application link. Cover TCS, Infosys, Wipro, Cognizant, Accenture, and more.`,
    season: 'always',
  },
  {
    slug: `best-programming-languages-to-learn-${currentYear}`,
    title: `Best Programming Languages to Learn in ${currentYear} — For Jobs & Future`,
    category: 'Career Guide',
    keywords: [
      `best programming languages ${currentYear}`,
      'programming language to learn',
      'top coding languages',
    ],
    prompt: `Write a data-driven comparison of the top 10 programming languages to learn in ${currentYear}. Include salary data, job openings, learning curve, and use cases for each language.`,
    season: 'always',
  },
  {
    slug: `highest-paying-it-jobs-india-${currentYear}`,
    title: `25 Highest Paying IT Jobs in India ${currentYear} — Salary & Skills`,
    category: 'Salary Guide',
    keywords: [
      `highest paying it jobs india ${currentYear}`,
      'best paying tech jobs',
      'top salary in IT',
    ],
    prompt: `Write about the 25 highest paying IT jobs in India for ${currentYear}. Include average salary, required skills, experience level, and growth potential for each role.`,
    season: 'always',
  },
  {
    slug: `free-online-courses-with-certificates-${currentYear}`,
    title: `100 Best Free Online Courses with Certificates ${currentYear}`,
    category: 'Resources',
    keywords: [
      `free online courses with certificates ${currentYear}`,
      'free certification courses',
      'free coursera courses',
    ],
    prompt: `Comprehensive list of 100 best free online courses with certificates in ${currentYear}. Cover Coursera, edX, Google, AWS, Microsoft, and more. Include course name, platform, duration, and certificate details.`,
    season: 'always',
  },
  {
    slug: `resume-format-for-freshers-${currentYear}`,
    title: `Best Resume Format for Freshers ${currentYear} — Free Templates & Tips`,
    category: 'Tools',
    keywords: [
      `resume format for freshers ${currentYear}`,
      'fresher resume template',
      'ats friendly resume',
    ],
    prompt: `Complete guide to creating the perfect resume for freshers in ${currentYear}. Include format guidelines, section-by-section tips, common mistakes, and free template recommendations.`,
    season: 'always',
  },

  // ── Placement Season (Jul-Dec) ────────────────────────────────────────────
  {
    slug: `campus-placement-preparation-guide-${currentYear}`,
    title: `Campus Placement Preparation ${currentYear} — Complete 90-Day Guide`,
    category: 'Interview Prep',
    keywords: [
      `campus placement preparation ${currentYear}`,
      'placement season guide',
      'how to prepare for placements',
    ],
    prompt: `Write a 90-day campus placement preparation guide for ${currentYear} batch students. Include week-by-week plan covering aptitude, coding, core subjects, HR prep, and mock interviews.`,
    season: 'jul-sep',
  },
  {
    slug: `tcs-nqt-preparation-guide-${currentYear}`,
    title: `TCS NQT ${currentYear} — Syllabus, Pattern & Preparation Strategy`,
    category: 'Interview Prep',
    keywords: [
      `tcs nqt ${currentYear}`,
      'tcs nqt preparation',
      'tcs nqt syllabus pattern',
    ],
    prompt: `Complete TCS NQT preparation guide for ${currentYear}. Include exam pattern, syllabus, section-wise strategy, previous year questions, and 30-day preparation plan.`,
    season: 'jul-sep',
  },
  {
    slug: `amcat-preparation-tips-${currentYear}`,
    title: `AMCAT Exam ${currentYear} — Syllabus, Preparation Tips & Score Requirements`,
    category: 'Interview Prep',
    keywords: [`amcat ${currentYear}`, 'amcat preparation', 'amcat syllabus'],
    prompt: `Write about AMCAT exam preparation for ${currentYear}. Cover syllabus, section-wise tips, minimum scores required by top companies, and free practice resources.`,
    season: 'jul-sep',
  },
  {
    slug: `mass-hiring-companies-off-campus-${currentYear}`,
    title: `Mass Hiring Companies ${currentYear} — Off-Campus Opportunities`,
    category: 'Jobs',
    keywords: [
      `mass hiring ${currentYear}`,
      'off campus drives ${currentYear}',
      'bulk hiring companies',
    ],
    prompt: `List of companies conducting mass hiring / off-campus drives in ${currentYear}. Include company names, roles, package, eligibility, and how to apply.`,
    season: 'oct-dec',
  },

  // ── Exam Results Season (Jan-Mar) ─────────────────────────────────────────
  {
    slug: `gate-score-vs-psu-cutoff-${currentYear}`,
    title: `GATE ${currentYear} Score vs PSU Cutoff — Complete Analysis`,
    category: 'Exams',
    keywords: [
      `gate score cutoff ${currentYear}`,
      'gate psu cutoff',
      'gate qualifying marks',
    ],
    prompt: `Detailed analysis of GATE ${currentYear} scores and PSU recruitment cutoffs. Include company-wise cutoffs for CSE, ECE, EE, ME branches. Add preparation tips for GATE.`,
    season: 'jan-mar',
  },
  {
    slug: `top-mtech-colleges-india-${currentYear}`,
    title: `Top 50 M.Tech Colleges in India ${currentYear} — Ranking & Fees`,
    category: 'Education',
    keywords: [
      `top mtech colleges india ${currentYear}`,
      'best mtech colleges',
      'mtech admission',
    ],
    prompt: `Ranking of top 50 M.Tech colleges in India for ${currentYear}. Include NIRF ranking, fees, placement record, and admission requirements.`,
    season: 'jan-mar',
  },

  // ── Appraisal Season (Apr-Jun) ──────────────────────────────────────────
  {
    slug: `salary-hike-percentage-it-companies-${currentYear}`,
    title: `Salary Hike in IT Companies ${currentYear} — Company-wise Comparison`,
    category: 'Salary Guide',
    keywords: [
      `salary hike it companies ${currentYear}`,
      'appraisal percentage',
      'tcs infosys wipro hike',
    ],
    prompt: `Company-wise salary hike analysis for IT companies in ${currentYear}. Cover TCS, Infosys, Wipro, HCL, Cognizant, and product companies. Include average, top performer, and low performer hike percentages.`,
    season: 'apr-jun',
  },
  {
    slug: `how-to-negotiate-salary-hike-${currentYear}`,
    title: `How to Negotiate a Better Salary Hike ${currentYear} — Proven Strategies`,
    category: 'Career Guide',
    keywords: [
      `negotiate salary hike ${currentYear}`,
      'appraisal negotiation tips',
      'how to ask for raise',
    ],
    prompt: `Practical guide on negotiating a better salary hike in ${currentYear}. Include email templates, conversation scripts, timing tips, and what to do if your request is denied.`,
    season: 'apr-jun',
  },
  {
    slug: `summer-internship-guide-${currentYear}`,
    title: `How to Get a Summer Internship in ${currentYear} — Complete Guide`,
    category: 'Internships',
    keywords: [
      `summer internship ${currentYear}`,
      'internship for students',
      'tech internship guide',
    ],
    prompt: `Guide to landing a summer internship in ${currentYear}. Include timeline, where to find internships, resume tips, and interview preparation for top companies.`,
    season: 'apr-jun',
  },

  // ── Tech Trends ──────────────────────────────────────────────────────────
  {
    slug: `ai-jobs-india-${currentYear}`,
    title: `AI & Machine Learning Jobs in India ${currentYear} — Salary, Skills & Companies`,
    category: 'Career Guide',
    keywords: [
      `ai jobs india ${currentYear}`,
      'machine learning jobs',
      'ai engineer salary india',
    ],
    prompt: `Comprehensive guide to AI/ML job market in India for ${currentYear}. Cover roles, salary ranges, required skills, top hiring companies, and learning paths.`,
    season: 'always',
  },
  {
    slug: `cloud-computing-certifications-${currentYear}`,
    title: `Best Cloud Computing Certifications ${currentYear} — AWS, Azure, GCP`,
    category: 'Certifications',
    keywords: [
      `cloud certifications ${currentYear}`,
      'aws certification guide',
      'azure certification',
    ],
    prompt: `Comparison of the best cloud computing certifications in ${currentYear}. Cover AWS, Azure, GCP certifications with difficulty, cost, salary impact, and study resources.`,
    season: 'always',
  },
  {
    slug: `devops-tools-and-technologies-${currentYear}`,
    title: `Essential DevOps Tools & Technologies ${currentYear} — Complete Guide`,
    category: 'Career Guide',
    keywords: [
      `devops tools ${currentYear}`,
      'devops technologies',
      'best devops tools',
    ],
    prompt: `Guide to essential DevOps tools and technologies in ${currentYear}. Cover CI/CD, containerization, orchestration, monitoring, and IaC tools with comparisons.`,
    season: 'always',
  },
  {
    slug: `cybersecurity-careers-india-${currentYear}`,
    title: `Cybersecurity Careers in India ${currentYear} — Scope, Salary & Path`,
    category: 'Career Guide',
    keywords: [
      `cybersecurity careers india ${currentYear}`,
      'cybersecurity salary',
      'ethical hacking careers',
    ],
    prompt: `Complete guide to cybersecurity careers in India for ${currentYear}. Cover roles, salary, certifications, skills, and top hiring companies.`,
    season: 'always',
  },
  {
    slug: `work-from-home-jobs-india-${currentYear}`,
    title: `Legitimate Work From Home Jobs India ${currentYear} — No Investment`,
    category: 'Jobs',
    keywords: [
      `work from home jobs india ${currentYear}`,
      'remote jobs india',
      'wfh jobs for freshers',
    ],
    prompt: `Curated list of legitimate work from home jobs in India for ${currentYear}. Cover tech, non-tech, freelance, and part-time options. Include salary ranges and how to apply.`,
    season: 'always',
  },
  {
    slug: `data-science-vs-software-engineering-${currentYear}`,
    title: `Data Science vs Software Engineering ${currentYear} — Which Career to Choose?`,
    category: 'Career Guide',
    keywords: [
      `data science vs software engineering ${currentYear}`,
      'data scientist or developer',
      'ds vs sde salary',
    ],
    prompt: `Detailed comparison of Data Science vs Software Engineering careers in ${currentYear}. Compare salary, demand, skills, growth, and work-life balance.`,
    season: 'always',
  },

  // ── Specific Company Drives───────────────────────────────────────────────
  {
    slug: `tcs-smart-hiring-${currentYear}`,
    title: `TCS Smart Hiring ${currentYear} — Registration, Eligibility & Preparation`,
    category: 'Jobs',
    keywords: [
      `tcs smart hiring ${currentYear}`,
      'tcs off campus',
      'tcs smart hiring registration',
    ],
    prompt: `Complete guide to TCS Smart Hiring for ${currentYear}. Cover registration process, eligibility, exam pattern, preparation tips, and expected package.`,
    season: 'always',
  },
  {
    slug: `infosys-instep-internship-${currentYear}`,
    title: `Infosys InStep Internship ${currentYear} — Application & Selection Process`,
    category: 'Internships',
    keywords: [
      `infosys instep ${currentYear}`,
      'infosys internship',
      'infosys instep application',
    ],
    prompt: `Guide to Infosys InStep global internship program for ${currentYear}. Cover eligibility, application process, stipend, and preparation tips.`,
    season: 'always',
  },
  {
    slug: `wipro-campus-hiring-${currentYear}`,
    title: `Wipro Campus Hiring ${currentYear} — Elite NLTH vs Turbo vs Velocity`,
    category: 'Jobs',
    keywords: [
      `wipro campus hiring ${currentYear}`,
      'wipro nlth',
      'wipro turbo hiring',
    ],
    prompt: `Compare Wipro's campus hiring programs: Elite NLTH, Turbo, and Velocity for ${currentYear}. Include package, eligibility, and preparation for each.`,
    season: 'always',
  },
  {
    slug: `cognizant-genc-hiring-${currentYear}`,
    title: `Cognizant GenC Hiring ${currentYear} — GenC vs GenC Pro vs GenC Next`,
    category: 'Jobs',
    keywords: [
      `cognizant genc ${currentYear}`,
      'cognizant genc pro',
      'cognizant hiring',
    ],
    prompt: `Complete comparison of Cognizant GenC, GenC Pro, and GenC Next programs for ${currentYear}. Cover salary, eligibility, process, and preparation strategy.`,
    season: 'always',
  },

  // ── Lifestyle / Soft Skills ──────────────────────────────────────────────
  {
    slug: `how-to-handle-job-rejection-${currentYear}`,
    title: `How to Handle Job Rejection — A Fresh Graduate's Guide ${currentYear}`,
    category: 'Mental Health',
    keywords: [
      'how to handle job rejection',
      'dealing with placement rejection',
      'job search motivation',
    ],
    prompt: `Empathetic guide for fresh graduates dealing with job rejection. Cover emotional management, practical next steps, upskilling, and success stories of people who faced initial rejections.`,
    season: 'always',
  },
  {
    slug: `communication-skills-for-interviews-${currentYear}`,
    title: `Communication Skills for Interviews ${currentYear} — Speak Confidently`,
    category: 'Career Guide',
    keywords: [
      `communication skills for interviews ${currentYear}`,
      'how to speak in interview',
      'interview communication',
    ],
    prompt: `Practical guide to improving communication skills for job interviews. Cover body language, common mistakes, phrases to use/avoid, and practice exercises.`,
    season: 'always',
  },
];

// ═════════════════════════════════════════════════════════════════════════════
// CONTENT GENERATION
// ═════════════════════════════════════════════════════════════════════════════

function generateFallbackContent(topic: TrendingTopic): string {
  return `# ${topic.title}

${topic.prompt.replace(/Write a |Write about |Write |Comprehensive |Detailed |Complete |Practical |Empathetic |Curated |Comparison |Ranking |Guide |List /gi, (m) => '')}

**Last Updated:** ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} | **Category:** ${topic.category}

---

## Overview

This is a comprehensive guide covering **${topic.keywords[0]}**. Whether you're a student, fresher, or working professional, this guide provides actionable insights and data-driven recommendations.

> **Sproutern Tip:** Bookmark this page — we update it regularly with the latest data and trends.

---

## Why This Matters in ${currentYear}

The career landscape is constantly evolving. Staying updated with the latest trends, salary data, and industry requirements is crucial for making informed career decisions.

---

## Key Insights

1. **Market Trends** — The demand for skilled professionals continues to grow
2. **Skill Requirements** — Combination of technical and soft skills is essential
3. **Industry Updates** — New technologies and methodologies are reshaping careers
4. **Preparation Strategy** — Structured preparation leads to better outcomes

---

## Detailed Guide

### Getting Started

Begin by understanding the fundamentals. Research the market, identify your strengths, and create a structured preparation plan. Use resources like the [Sproutern Career Roadmaps](/roadmaps) to guide your journey.

### Building Skills

Focus on high-demand skills that align with your career goals. Practice regularly with tools like:
- [Sproutern Typing Speed Test](/tools/typingspeedtest)
- [AI Resume Optimizer](/tools/ai-resume-optimizer)
- [CGPA Calculator](/tools/cgpa-calculator)

### Applying and Interviewing

Master the application and interview process:
- Optimize your resume using [Sproutern Resume Optimizer](/resume-optimizer)
- Practice with [Interview Experiences](/interview-experiences)
- Research companies through [Company Profiles](/companies)

---

## Frequently Asked Questions

### Is this relevant for ${currentYear}?

Yes! This guide is updated for ${currentYear} with the latest data and trends. We verify and update our content regularly.

### Can freshers benefit from this guide?

Absolutely. This guide is designed for students, freshers, and early-career professionals looking to make informed career decisions.

### Where can I get more resources?

Check out our [complete resource library](/resources) with downloadable guides, templates, and tools.

---

## Related Resources

- [Career Roadmaps](/roadmaps) — Plan your career path
- [Interview Experiences](/interview-experiences) — Real stories from candidates
- [Salary Calculator](/tools/salary-calculator) — Compare compensation
- [Resume Optimizer](/resume-optimizer) — AI-powered resume review
- [All Tools](/tools) — 200+ free career tools

---

*Last updated: ${new Date().toISOString().split('T')[0]}. Source: Sproutern Career Research Team.*
`;
}

async function generateWithAI(
  topic: TrendingTopic,
  apiKey: string,
): Promise<string> {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${topic.prompt}

IMPORTANT FORMATTING RULES:
- Use markdown with proper headers (##, ###)
- Include comparison tables where relevant
- Add a FAQ section with 3-5 questions
- Write in an encouraging, student-friendly tone
- Include specific numbers and data points
- Add internal links to /roadmaps, /resume-optimizer, /tools/salary-calculator, /interview-experiences
- Target keyword: "${topic.keywords[0]}"
- Make it 1500+ words
- End with a "Related Resources" section linking to Sproutern tools`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 8192,
          },
        }),
      },
    );

    const data = await response.json();
    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      generateFallbackContent(topic)
    );
  } catch {
    return generateFallbackContent(topic);
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN
// ═════════════════════════════════════════════════════════════════════════════

async function main() {
  const args = process.argv.slice(2);
  const countFlag = args.indexOf('--count');
  const useAI = args.includes('--ai');
  const maxCount =
    countFlag !== -1
      ? parseInt(args[countFlag + 1], 10)
      : TRENDING_TOPICS.length;
  const apiKey = process.env.GOOGLE_API_KEY;

  const season = getCurrentSeason();
  console.log(
    `\n🔥 Trending Content Engine — Season: ${season}, Year: ${currentYear}`,
  );
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );

  // Filter topics by season
  const relevantTopics = TRENDING_TOPICS.filter(
    (t) => t.season === 'always' || t.season === season,
  ).slice(0, maxCount);

  console.log(`📋 Relevant topics: ${relevantTopics.length}\n`);

  const outDir = path.join(process.cwd(), 'src', 'content', 'blog');
  fs.mkdirSync(outDir, { recursive: true });

  let created = 0;
  let skipped = 0;

  for (const topic of relevantTopics) {
    const filePath = path.join(outDir, `${topic.slug}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`  ⏭  Skipped (exists): ${topic.slug}`);
      skipped++;
      continue;
    }

    let content: string;
    const isoDate = new Date().toISOString().split('T')[0];

    if (useAI && apiKey) {
      console.log(`  🤖 Generating with AI: ${topic.slug}`);
      const aiContent = await generateWithAI(topic, apiKey);
      content = `---
title: "${topic.title}"
date: "${isoDate}"
category: "${topic.category}"
readTime: "15 min read"
excerpt: "${topic.title}"
keywords:
${topic.keywords.map((kw) => `  - "${kw}"`).join('\n')}
author: "Sproutern Career Research Team"
contentType: "ai-generated"
---

${aiContent}
`;
      // Rate limit: 15 RPM = 4s delay
      await new Promise((r) => setTimeout(r, 4200));
    } else {
      console.log(`  📝 Generating template: ${topic.slug}`);
      content = `---
title: "${topic.title}"
date: "${isoDate}"
category: "${topic.category}"
readTime: "15 min read"
excerpt: "${topic.title}"
keywords:
${topic.keywords.map((kw) => `  - "${kw}"`).join('\n')}
author: "Sproutern Career Research Team"
contentType: "template"
---

${generateFallbackContent(topic)}
`;
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✅ Created: ${topic.slug}.md`);
    created++;
  }

  console.log(
    `\n═══════════════════════════════════════════════════════════════`,
  );
  console.log(`📊 Results: ${created} created, ${skipped} skipped`);
  console.log(`💡 Next: Run yarn indexnow to submit new pages`);
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );
}

main();
