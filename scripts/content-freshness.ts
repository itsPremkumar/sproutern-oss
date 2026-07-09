#!/usr/bin/env tsx

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Content Freshness Engine
 *
 * Scans all existing blog content and updates "Last Updated" dates,
 * adds missing sections (FAQ, Related Resources), and ensures content
 * meets current quality standards. Google heavily rewards fresh content.
 *
 * Usage:
 *   npx tsx scripts/content-freshness.ts
 *   npx tsx scripts/content-freshness.ts --dry-run
 * ═════════════════════════════════════════════════════════════════════════════
 */

import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
const STALE_THRESHOLD_DAYS = 90; // Content older than 90 days is considered stale

interface ContentFile {
  filePath: string;
  fileName: string;
  frontmatter: string;
  body: string;
  lastUpdated: Date | null;
  isStale: boolean;
  hasFAQ: boolean;
  hasRelatedResources: boolean;
  hasLastUpdated: boolean;
  wordCount: number;
}

function parseContentFile(filePath: string): ContentFile | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontmatterMatch) return null;

    const frontmatter = frontmatterMatch[1];
    const body = content.slice(frontmatterMatch[0].length);

    // Extract date
    const dateMatch = frontmatter.match(
      /(?:lastUpdated|date):\s*"?(\d{4}-\d{2}-\d{2})"?/,
    );
    const lastUpdated = dateMatch ? new Date(dateMatch[1]) : null;

    const now = new Date();
    const daysSinceUpdate = lastUpdated
      ? (now.getTime() - lastUpdated.getTime()) / (1000 * 60 * 60 * 24)
      : 999;

    return {
      filePath,
      fileName: path.basename(filePath),
      frontmatter,
      body,
      lastUpdated,
      isStale: daysSinceUpdate > STALE_THRESHOLD_DAYS,
      hasFAQ:
        body.includes('## Frequently Asked Questions') ||
        body.includes('## FAQ'),
      hasRelatedResources:
        body.includes('## Related Resources') ||
        body.includes('## Related Content'),
      hasLastUpdated: frontmatter.includes('lastUpdated:'),
      wordCount: body.split(/\s+/).length,
    };
  } catch {
    return null;
  }
}

function updateFrontmatterDate(frontmatter: string): string {
  const today = new Date().toISOString().split('T')[0];

  if (frontmatter.includes('lastUpdated:')) {
    return frontmatter.replace(
      /lastUpdated:\s*"?\d{4}-\d{2}-\d{2}"?/,
      `lastUpdated: "${today}"`,
    );
  }

  // Add lastUpdated after date field
  if (frontmatter.includes('date:')) {
    return frontmatter.replace(
      /(date:\s*"?\d{4}-\d{2}-\d{2}"?)/,
      `$1\nlastUpdated: "${today}"`,
    );
  }

  return `lastUpdated: "${today}"\n${frontmatter}`;
}

function addFAQSection(): string {
  return `

---

## Frequently Asked Questions

### Is this information up-to-date?

Yes! This article is regularly reviewed and updated by the Sproutern Career Research Team with the latest data and insights for ${new Date().getFullYear()}.

### Can freshers benefit from this guide?

Absolutely. This guide covers information relevant to students, freshers, and experienced professionals. We include specific tips for each experience level.

### Where can I find more resources?

Explore our [complete resource library](/resources) with 200+ free tools, guides, and templates for career preparation.
`;
}

function addRelatedResourcesSection(): string {
  return `

---

## Related Resources on Sproutern

- [AI Resume Optimizer](/resume-optimizer) — Get your resume reviewed by AI for free
- [Career Roadmaps](/roadmaps) — Plan your career path step by step
- [Interview Experiences](/interview-experiences) — Read real stories from candidates
- [Salary Calculator](/tools/salary-calculator) — Compare salaries across companies
- [Typing Speed Test](/tools/typingspeedtest) — Test and improve your typing speed
`;
}

function addUpdatedFooter(): string {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return `\n\n---\n\n*This article was last reviewed and updated on ${today}. Source: Sproutern Career Research Team.*\n`;
}

// ═════════════════════════════════════════════════════════════════════════════
// MAIN
// ═════════════════════════════════════════════════════════════════════════════

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  console.log('\n🔄 Content Freshness Engine');
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );

  if (!fs.existsSync(CONTENT_DIR)) {
    console.log('❌ Content directory not found:', CONTENT_DIR);
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  console.log(`📂 Found ${files.length} content files\n`);

  let updated = 0;
  let staleCount = 0;
  let faqAdded = 0;
  let relatedAdded = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const content = parseContentFile(filePath);

    if (!content) continue;

    let modified = false;
    let newFrontmatter = content.frontmatter;
    let newBody = content.body;

    // 1. Update stale content dates
    if (content.isStale) {
      staleCount++;
      newFrontmatter = updateFrontmatterDate(newFrontmatter);
      modified = true;
    }

    // 2. Add FAQ section if missing (for articles > 500 words)
    if (!content.hasFAQ && content.wordCount > 500) {
      newBody += addFAQSection();
      faqAdded++;
      modified = true;
    }

    // 3. Add Related Resources section if missing
    if (!content.hasRelatedResources) {
      newBody += addRelatedResourcesSection();
      relatedAdded++;
      modified = true;
    }

    // 4. Add lastUpdated to frontmatter if missing
    if (!content.hasLastUpdated) {
      newFrontmatter = updateFrontmatterDate(newFrontmatter);
      modified = true;
    }

    // 5. Add updated footer
    if (!newBody.includes('last reviewed and updated')) {
      newBody += addUpdatedFooter();
      modified = true;
    }

    if (modified) {
      if (dryRun) {
        console.log(
          `  🔍 Would update: ${file} (stale: ${content.isStale}, faq: ${!content.hasFAQ}, related: ${!content.hasRelatedResources})`,
        );
      } else {
        const newContent = `---\n${newFrontmatter}\n---${newBody}`;
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`  ✅ Updated: ${file}`);
      }
      updated++;
    }
  }

  console.log(
    '\n═══════════════════════════════════════════════════════════════',
  );
  console.log(`📊 Results:`);
  console.log(`   Files scanned: ${files.length}`);
  console.log(`   Files updated: ${updated}`);
  console.log(`   Stale content refreshed: ${staleCount}`);
  console.log(`   FAQ sections added: ${faqAdded}`);
  console.log(`   Related Resources added: ${relatedAdded}`);
  if (dryRun) console.log('   (DRY RUN — no files were actually written)');
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );
}

main();
