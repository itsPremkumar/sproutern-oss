#!/usr/bin/env tsx

/**
 * ═════════════════════════════════════════════════════════════════════════════
 * OG Image Generator (Social Cards)
 *
 * Generates brand-consistent Open Graph images for every page using
 * the Canvas API. These auto-generated social cards dramatically
 * increase click-through rates on social media.
 *
 * Usage:
 *   npx tsx scripts/og-image-generator.ts
 *   npx tsx scripts/og-image-generator.ts --count 50
 * ═════════════════════════════════════════════════════════════════════════════
 */

import fs from 'fs';
import path from 'path';

// ── SVG-based OG Image Template ────────────────────────────────────────────

interface OGImageData {
  title: string;
  category: string;
  slug: string;
  stats?: string;
}

function generateSVGImage(data: OGImageData): string {
  // Truncate title if too long
  const maxLen = 60;
  const title =
    data.title.length > maxLen
      ? data.title.slice(0, maxLen) + '...'
      : data.title;

  // Split title into lines (max 3 lines)
  const words = title.split(' ');
  const lines: string[] = [];
  let currentLine = '';
  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > 25) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine += ' ' + word;
    }
  }
  if (currentLine.trim()) lines.push(currentLine.trim());

  const categoryColors: Record<string, { bg1: string; bg2: string }> = {
    'Salary Guide': { bg1: '#16a34a', bg2: '#059669' },
    'Interview Prep': { bg1: '#2563eb', bg2: '#1d4ed8' },
    'Career Guide': { bg1: '#7c3aed', bg2: '#6d28d9' },
    'Hiring Process': { bg1: '#dc2626', bg2: '#b91c1c' },
    Jobs: { bg1: '#ea580c', bg2: '#c2410c' },
    Tools: { bg1: '#0891b2', bg2: '#0e7490' },
    default: { bg1: '#4f46e5', bg2: '#4338ca' },
  };

  const colors = categoryColors[data.category] || categoryColors['default'];

  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.bg1}" />
      <stop offset="100%" style="stop-color:${colors.bg2}" />
    </linearGradient>
    <linearGradient id="overlay" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" style="stop-color:rgba(0,0,0,0.4)" />
      <stop offset="100%" style="stop-color:rgba(0,0,0,0)" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)" />
  <rect width="1200" height="630" fill="url(#overlay)" />

  <!-- Decorative circles -->
  <circle cx="1100" cy="100" r="200" fill="rgba(255,255,255,0.05)" />
  <circle cx="100" cy="530" r="150" fill="rgba(255,255,255,0.05)" />
  <circle cx="900" cy="500" r="100" fill="rgba(255,255,255,0.03)" />

  <!-- Category badge -->
  <rect x="80" y="80" width="${data.category.length * 14 + 40}" height="40" rx="20" fill="rgba(255,255,255,0.2)" />
  <text x="100" y="106" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="600" fill="white">${data.category.toUpperCase()}</text>

  <!-- Title -->
  ${lines
    .map(
      (line, i) =>
        `<text x="80" y="${200 + i * 65}" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="800" fill="white">${escapeXml(line)}</text>`,
    )
    .join('\n  ')}

  <!-- Stats/subtitle -->
  <text x="80" y="${200 + lines.length * 65 + 40}" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="rgba(255,255,255,0.7)">${data.stats || '📊 Updated for 2026 • Data-driven insights'}</text>

  <!-- Sproutern branding -->
  <rect x="80" y="530" width="220" height="50" rx="25" fill="rgba(255,255,255,0.15)" />
  <text x="110" y="562" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="white">🌱 Sproutern</text>

  <!-- URL -->
  <text x="1120" y="562" font-family="Arial, Helvetica, sans-serif" font-size="16" fill="rgba(255,255,255,0.5)" text-anchor="end">sproutern.dpdns.org</text>
</svg>`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const countFlag = args.indexOf('--count');
  const maxCount = countFlag !== -1 ? parseInt(args[countFlag + 1], 10) : 100;

  console.log('\n🎨 OG Image Generator');
  console.log(
    '═══════════════════════════════════════════════════════════════\n',
  );

  // Read content files and generate OG images
  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  const outputDir = path.join(process.cwd(), 'public', 'og');
  fs.mkdirSync(outputDir, { recursive: true });

  if (!fs.existsSync(contentDir)) {
    console.log('❌ Content directory not found');
    return;
  }

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith('.md'));
  let created = 0;
  let skipped = 0;

  for (const file of files.slice(0, maxCount)) {
    const slug = file.replace('.md', '');
    const outputPath = path.join(outputDir, `${slug}.svg`);

    if (fs.existsSync(outputPath)) {
      skipped++;
      continue;
    }

    // Parse frontmatter for title and category
    const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    const categoryMatch = content.match(/category:\s*"([^"]+)"/);

    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');
    const category = categoryMatch ? categoryMatch[1] : 'Career Guide';

    const svg = generateSVGImage({ title, category, slug });
    fs.writeFileSync(outputPath, svg, 'utf-8');
    created++;

    if (created % 50 === 0) {
      console.log(`  📝 Progress: ${created} generated...`);
    }
  }

  console.log(`\n📊 Results: ${created} OG images created, ${skipped} skipped`);
  console.log(`💡 Images saved to: public/og/`);
  console.log(`💡 Reference in metadata: /og/{slug}.svg\n`);
}

main();
