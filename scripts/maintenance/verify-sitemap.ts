import { blogPosts } from './src/lib/blog-data';
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://sproutern.dpdns.org';

// Mock sitemap logic
function generateSitemap() {
  console.log('--- Verifying Blog Posts ---');
  const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');
  const blogSlugsFromFs = fs.readdirSync(blogDir).filter((file) => {
    const stat = fs.statSync(path.join(blogDir, file));
    return stat.isDirectory() && !file.startsWith('[') && file !== 'category';
  });

  const blogSlugsFromData = blogPosts.map((post) => post.slug);
  const allBlogSlugs = [...new Set([...blogSlugsFromData, ...blogSlugsFromFs])];

  console.log(`Found ${allBlogSlugs.length} blog posts.`);
  if (allBlogSlugs.includes('ultimate-guide-first-internship-2025')) {
    console.log("✅ 'ultimate-guide-first-internship-2025' found.");
  } else {
    console.log("❌ 'ultimate-guide-first-internship-2025' NOT found.");
  }

  console.log('\n--- Verifying Tools ---');
  const toolsDir = path.join(process.cwd(), 'src', 'app', 'tools');
  const toolSlugs = fs.readdirSync(toolsDir).filter((file) => {
    const stat = fs.statSync(path.join(toolsDir, file));
    return stat.isDirectory() && !file.startsWith('[') && !file.startsWith('(');
  });

  console.log(`Found ${toolSlugs.length} tools.`);
  if (toolSlugs.includes('job-description-enhancer')) {
    console.log("✅ 'job-description-enhancer' found.");
  } else {
    console.log("❌ 'job-description-enhancer' NOT found.");
  }
}

generateSitemap();
