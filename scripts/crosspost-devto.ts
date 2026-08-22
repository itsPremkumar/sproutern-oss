/**
 * Cross-post a blog post to dev.to with a canonical URL.
 * Free: dev.to API key only — https://dev.to/settings/extensions → "DEV Community API Keys"
 *
 * Usage:
 *   DEVTO_API_KEY=xxx npx tsx scripts/crosspost-devto.ts <post.md> [--title "..."] [--tags a,b,c]
 *
 * Frontmatter in the .md file wins over flags when present:
 *   ---
 *   title: My Post
 *   tags: career, students
 *   canonical_url: https://sproutern.dpdns.org/blog/my-post
 *   ---
 */
import * as fs from 'fs';

const SITE = 'https://sproutern.dpdns.org';

function parseFrontmatter(md: string): Record<string, string> {
  const m = md.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const meta: Record<string, string> = {};
  if (!m) return meta;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w[\w-]*):\s*(.+)$/);
    if (kv) meta[kv[1].toLowerCase()] = kv[2].trim();
  }
  return meta;
}

async function main() {
  const key = process.env.DEVTO_API_KEY;
  if (!key || key === 'YOUR_DEVTO_KEY') {
    console.error(
      '✗ No DEVTO_API_KEY set. Get a free key at https://dev.to/settings/extensions\n' +
        '  Then add it as GitHub secret DEVTO_API_KEY (repo Settings → Secrets) or export locally.',
    );
    process.exit(1);
  }

  const file = process.argv[2];
  if (!file || !fs.existsSync(file)) {
    console.error('✗ Pass a markdown file: npx tsx scripts/crosspost-devto.ts posts/my-post.md');
    process.exit(1);
  }

  const raw = fs.readFileSync(file, 'utf8');
  const meta = parseFrontmatter(raw);
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---/, '').trim();

  // Flags override frontmatter
  const argOf = (name: string) => {
    const i = process.argv.indexOf(name);
    return i > -1 ? process.argv[i + 1] : undefined;
  };
  const slug = file.replace(/.*\//, '').replace(/\.md$/, '');
  const title = argOf('--title') || meta.title;
  let canonical = argOf('--canonical') || meta.canonical_url || `${SITE}/blog/${slug}`;
  const tags =
    (argOf('--tags') || meta.tags || 'career,students,opensource')
      .split(',')
      .map((t) => t.trim().replace(/^#/, '').toLowerCase())
      .filter(Boolean)
      .slice(0, 4); // dev.to hard cap

  if (!canonical.startsWith('http')) canonical = `${SITE}${canonical}`;
  if (!title) {
    console.error('✗ No title found (frontmatter `title:` or --title flag).');
    process.exit(1);
  }

  const res = await fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'api-key': key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      article: {
        title,
        published: true,
        body_markdown: body,
        tags,
        // SEO credit flows to sproutern.dpdns.org, not dev.to
        canonical_url: canonical,
      },
    }),
  });

  if (res.ok) {
    const json: { url?: string } = await res.json();
    console.log(`✅ Published on dev.to: ${json.url}`);
    console.log(`   canonical → ${canonical}`);
  } else {
    console.error(`✗ dev.to ${res.status}: ${(await res.text()).slice(0, 300)}`);
    process.exit(1);
  }
}

main();
