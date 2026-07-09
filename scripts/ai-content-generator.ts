#!/usr/bin/env tsx

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * AI Content Generator — Pillar 3
 *
 * Uses the Gemini 1.5 Flash FREE TIER via Genkit to autonomously author
 * high-quality SEO articles. Runs LOCALLY or via GitHub Actions — NEVER
 * invoked at runtime in production.
 *
 * The production site only serves static markdown files.
 *
 * Usage:
 *   GOOGLE_API_KEY=your_key npx tsx scripts/ai-content-generator.ts
 *   GOOGLE_API_KEY=your_key npx tsx scripts/ai-content-generator.ts --count 5
 *
 * Free Tier Limits (Gemini 1.5 Flash):
 *   - 15 RPM (requests per minute)
 *   - 1M tokens per minute
 *   - 1500 RPD (requests per day)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs';
import path from 'path';

// ── Content Topics (each becomes a blog post) ─────────────────────────────

interface ContentTopic {
  slug: string;
  title: string;
  category: string;
  targetKeywords: string[];
  prompt: string;
}

const CONTENT_TOPICS: ContentTopic[] = [
  // Interview Preparation
  {
    slug: 'how-to-crack-tcs-ninja-interview-2026',
    title: 'How to Crack TCS Ninja Interview 2026 — Step by Step Guide',
    category: 'Interview Prep',
    targetKeywords: [
      'tcs ninja interview 2026',
      'tcs ninja preparation',
      'tcs interview tips',
    ],
    prompt: `Write a comprehensive, 1500-word blog post titled "How to Crack TCS Ninja Interview 2026 — Step by Step Guide". Include: 1) TCS Ninja selection process overview (Aptitude → Coding → Technical → HR), 2) Round-by-round preparation strategy with exact topics to study, 3) Top 20 most asked coding questions with difficulty levels, 4) Common HR questions with sample answers, 5) Timeline: "30-Day TCS Ninja Preparation Plan", 6) 5 FAQs. Write in an encouraging, student-friendly tone. Use markdown headers, bold key terms, and bullet points.`,
  },
  {
    slug: 'infosys-specialist-programmer-vs-system-engineer-2026',
    title: 'Infosys SP vs SE — Which Role Should You Target in 2026?',
    category: 'Career Guide',
    targetKeywords: [
      'infosys sp vs se',
      'infosys specialist programmer salary',
      'infosys system engineer 2026',
    ],
    prompt: `Write a detailed 1500-word comparison blog post titled "Infosys SP vs SE — Which Role Should You Target in 2026?". Include: 1) Salary comparison table (CTC, in-hand, bonuses), 2) Role responsibilities comparison, 3) Selection process differences, 4) Growth trajectory over 5 years, 5) Which CGPA/coding level targets which role, 6) Real candidate tips from interview experiences. Use comparison tables and clear formatting.`,
  },
  {
    slug: 'cgpa-to-percentage-anna-university-2026',
    title:
      'CGPA to Percentage Conversion Anna University 2026 — Official Formula',
    category: 'Tools',
    targetKeywords: [
      'cgpa to percentage anna university',
      'anna university cgpa calculator',
      'anna university grading 2026',
    ],
    prompt: `Write a helpful 1200-word guide titled "CGPA to Percentage Conversion Anna University 2026 — Official Formula". Include: 1) The official R2021 regulation formula, 2) Step-by-step calculation with examples, 3) Grade points table (O=10, A+=9, etc.), 4) Impact of CGPA on placements (minimum requirements by company), 5) Comparison with VTU, JNTU, and Mumbai University formulas, 6) Link to online CGPA calculator tool. Student-friendly tone.`,
  },
  {
    slug: 'off-campus-drives-2026-complete-guide',
    title:
      'Off-Campus Drives 2026 — How to Get Placed Without Campus Recruitment',
    category: 'Career Guide',
    targetKeywords: [
      'off campus drives 2026',
      'off campus placement guide',
      'how to get placed off campus',
    ],
    prompt: `Write a motivational, practical 1500-word guide titled "Off-Campus Drives 2026 — How to Get Placed Without Campus Recruitment". Include: 1) Where to find off-campus drives (LinkedIn, Naukri, company career pages, hiring challenges), 2) How to build an ATS-friendly resume without work experience, 3) Top 10 companies that regularly hire off-campus, 4) Month-by-month preparation timeline, 5) Common mistakes to avoid, 6) Success stories. Encouraging tone for students who missed on-campus placements.`,
  },
  {
    slug: 'best-free-resume-builders-for-freshers-2026',
    title:
      '7 Best Free Resume Builders for Freshers in 2026 — No Login Required',
    category: 'Tools',
    targetKeywords: [
      'free resume builder for freshers',
      'best resume builder 2026',
      'ats friendly resume free',
    ],
    prompt: `Write a comparative 1200-word listicle titled "7 Best Free Resume Builders for Freshers in 2026". Include: 1) Sproutern AI Resume Optimizer (first), 2) Canva, 3) Resume.io free tier, 4) Novoresume, 5) Overleaf LaTeX, 6) Google Docs templates, 7) Zety free tier. For each: screenshot description, pros/cons, ATS compatibility, and a rating. End with "The Bottom Line" recommending Sproutern for AI-powered optimization.`,
  },
  {
    slug: 'typing-speed-test-wpm-requirements-for-it-jobs',
    title: 'Typing Speed Requirements for IT Jobs 2026 — What WPM Do You Need?',
    category: 'Tools',
    targetKeywords: [
      'typing speed for it jobs',
      'wpm requirement for freshers',
      'typing test for placement',
    ],
    prompt: `Write a 1000-word informative post titled "Typing Speed Requirements for IT Jobs 2026". Include: 1) WPM benchmarks by role (Data Entry: 40+ WPM, Developer: 50+, Normal office: 35+), 2) Which companies test typing speed during recruitment, 3) How to improve from 20 WPM to 60 WPM in 30 days, 4) Free typing test tools comparison. Link to Sproutern's built-in typing speed test.`,
  },
  {
    slug: 'service-based-vs-product-based-companies-2026',
    title:
      'Service vs Product Based Companies 2026 — Which is Better for Freshers?',
    category: 'Career Guide',
    targetKeywords: [
      'service vs product based companies',
      'service company vs product company freshers',
      'tcs vs google for freshers',
    ],
    prompt: `Write a balanced, data-driven 1500-word comparison titled "Service vs Product Based Companies 2026 — Which is Better for Freshers?". Include: 1) Salary comparison table (Year 1, Year 3, Year 5), 2) Work culture differences, 3) Learning curve and skill development, 4) Work-life balance comparison, 5) Career switching strategies (service → product), 6) Decision framework: "If X then service, if Y then product". Neutral tone with real data.`,
  },
  {
    slug: 'linkedin-profile-optimization-for-students-2026',
    title:
      'LinkedIn Profile Optimization for Students 2026 — Get Noticed by Recruiters',
    category: 'Career Guide',
    targetKeywords: [
      'linkedin profile for students',
      'linkedin optimization 2026',
      'linkedin tips for freshers',
    ],
    prompt: `Write a detailed 1200-word guide titled "LinkedIn Profile Optimization for Students 2026". Include: 1) Perfect headline formula for students (not just "Student at XYZ"), 2) About section template with keywords, 3) How to list projects as experience, 4) Skills section optimization for ATS, 5) Content strategy: what to post weekly, 6) How to DM recruiters without being annoying. Include a checklist at the end.`,
  },
];

// ── Markdown Template ─────────────────────────────────────────────────────

function wrapContent(topic: ContentTopic, aiContent: string): string {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];

  return `---
title: "${topic.title}"
date: "${dateStr}"
category: "${topic.category}"
readTime: "12 min read"
excerpt: "${topic.title.replace(/"/g, "'")}"
keywords:
${topic.targetKeywords.map((kw) => `  - "${kw}"`).join('\n')}
author: "Sproutern Career Team"
contentType: "markdown"
---

${aiContent}

---

## Related Resources on Sproutern

- [AI Resume Optimizer](/tools/ai-resume-optimizer) — Get your resume reviewed by AI for free
- [CGPA Calculator](/tools/cgpa-calculator) — Convert your CGPA to percentage instantly
- [Typing Speed Test](/tools/typingspeedtest) — Test and improve your typing speed
- [Interview Experiences](/interview-experiences) — Read real interview experiences from students
- [Salary & Bond Data](/salary-bond-data) — Compare salaries across IT companies

---

*Last updated: ${dateStr}. This article is part of Sproutern's free career resource library.*
`;
}

// ── Main ──────────────────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const countFlag = args.indexOf('--count');
  const maxCount =
    countFlag !== -1
      ? parseInt(args[countFlag + 1], 10)
      : CONTENT_TOPICS.length;

  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.log(
      '\n⚠️  GOOGLE_API_KEY not set. Generating template-only content.\n',
    );
  }

  const outDir = path.join(process.cwd(), 'src', 'content', 'blog');
  fs.mkdirSync(outDir, { recursive: true });

  const topics = CONTENT_TOPICS.slice(0, maxCount);
  let created = 0;
  let skipped = 0;

  for (const topic of topics) {
    const filePath = path.join(outDir, `${topic.slug}.md`);

    if (fs.existsSync(filePath)) {
      console.log(`  ⏭  Skipped (exists): ${topic.slug}`);
      skipped++;
      continue;
    }

    let aiContent: string;

    if (apiKey) {
      try {
        // Use Gemini Free Tier via REST (avoids importing genkit in scripts)
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: topic.prompt }] }],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 4096,
              },
            }),
          },
        );

        const data = await response.json();
        aiContent =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          `# ${topic.title}\n\nContent generation failed. Please regenerate.`;

        // Rate limit: respect 15 RPM
        console.log(`  ⏳ Rate limiting (4s delay)...`);
        await new Promise((r) => setTimeout(r, 4000));
      } catch (error) {
        console.error(`  ❌ AI generation failed for ${topic.slug}:`, error);
        aiContent = `# ${topic.title}\n\nThis article is being generated. Check back soon!`;
      }
    } else {
      // Template-only mode (no API key)
      aiContent = `# ${topic.title}\n\n${topic.prompt.replace(/Write a |Write an /g, 'This article covers ')}\n\n## Coming Soon\n\nThis content will be generated when the GOOGLE_API_KEY environment variable is set.\n\nRun:\n\`\`\`bash\nGOOGLE_API_KEY=your_key npx tsx scripts/ai-content-generator.ts\n\`\`\``;
    }

    const finalContent = wrapContent(topic, aiContent);
    fs.writeFileSync(filePath, finalContent, 'utf-8');
    console.log(`  ✅ Created: ${topic.slug}.md`);
    created++;
  }

  console.log(`\n📊 Results: ${created} created, ${skipped} skipped`);
  console.log(
    `💡 Next: Add slugs to src/lib/blog-data.ts with contentType: "markdown"`,
  );
  console.log(`💡 Then run: yarn indexnow\n`);
}

main();
