/**
 * ═════════════════════════════════════════════════════════════════════════════
 * Auto Internal Linking Engine
 *
 * Scans content for keyword mentions and automatically inserts contextual
 * internal links to related pages. This distributes ranking power evenly
 * across the site and helps search engines discover all content.
 *
 * Usage:
 *   import { addInternalLinks } from '@/lib/seo/auto-internal-linker';
 *   const enhancedContent = addInternalLinks(originalContent, currentPageSlug);
 * ═════════════════════════════════════════════════════════════════════════════
 */

// ── Link Database ──────────────────────────────────────────────────────────

interface InternalLink {
  keywords: string[];
  url: string;
  title: string;
  category: string;
  priority: number; // 1-10, higher = more important to link
}

const LINK_DATABASE: InternalLink[] = [
  // Tools
  {
    keywords: [
      'resume optimizer',
      'resume builder',
      'resume review',
      'ats resume',
      'resume checker',
    ],
    url: '/resume-optimizer',
    title: 'AI Resume Optimizer',
    category: 'tools',
    priority: 10,
  },
  {
    keywords: [
      'salary calculator',
      'salary comparison',
      'compare salary',
      'salary check',
    ],
    url: '/tools/salary-calculator',
    title: 'Salary Calculator',
    category: 'tools',
    priority: 9,
  },
  {
    keywords: ['typing speed', 'typing test', 'wpm test', 'typing practice'],
    url: '/tools/typing-test',
    title: 'Typing Speed Test',
    category: 'tools',
    priority: 8,
  },
  {
    keywords: [
      'cgpa calculator',
      'cgpa to percentage',
      'percentage calculator',
      'grade calculator',
    ],
    url: '/tools/cgpa-converter',
    title: 'CGPA Converter',
    category: 'tools',
    priority: 8,
  },
  {
    keywords: ['mock interview', 'interview practice', 'interview simulator'],
    url: '/tools/mock-interview',
    title: 'Mock Interview Tool',
    category: 'tools',
    priority: 9,
  },
  {
    keywords: ['code formatter', 'format code', 'beautify code'],
    url: '/tools/code-formatter',
    title: 'Code Formatter',
    category: 'tools',
    priority: 7,
  },
  {
    keywords: ['aptitude test', 'aptitude practice', 'aptitude questions'],
    url: '/tools/aptitude-test',
    title: 'Aptitude Test',
    category: 'tools',
    priority: 7,
  },
  {
    keywords: ['skill test', 'skill assessment', 'technical assessment'],
    url: '/skill-test',
    title: 'Skill Assessment',
    category: 'tools',
    priority: 8,
  },
  {
    keywords: [
      'linkedin profile',
      'linkedin optimization',
      'linkedin headline',
      'linkedin summary',
    ],
    url: '/resources/linkedin-optimization',
    title: 'LinkedIn Optimization Guide',
    category: 'resources',
    priority: 9,
  },
  {
    keywords: [
      'salary negotiation',
      'salary expectations',
      'offer negotiation',
      'negotiate offer',
      'salary discussion',
    ],
    url: '/resources/salary-negotiation',
    title: 'Salary Negotiation Guide',
    category: 'resources',
    priority: 9,
  },
  {
    keywords: [
      'networking',
      'professional networking',
      'cold outreach',
      'informational interview',
    ],
    url: '/resources/networking',
    title: 'Networking Guide',
    category: 'resources',
    priority: 8,
  },
  {
    keywords: ['resume template', 'resume templates', 'cv template'],
    url: '/resources/resume-templates',
    title: 'Resume Templates',
    category: 'resources',
    priority: 8,
  },
  {
    keywords: [
      'github profile',
      'github readme',
      'pinned repositories',
      'github portfolio',
    ],
    url: '/resources/github-profile',
    title: 'GitHub Profile Guide',
    category: 'resources',
    priority: 8,
  },
  {
    keywords: [
      'ats keywords',
      'resume keywords',
      'job description keywords',
      'ats resume keywords',
    ],
    url: '/resources/ats-resume-keywords',
    title: 'ATS Resume Keywords Guide',
    category: 'resources',
    priority: 8,
  },

  // Career Content
  {
    keywords: [
      'interview experience',
      'interview experiences',
      'real interview',
    ],
    url: '/interview-experiences',
    title: 'Interview Experiences',
    category: 'content',
    priority: 9,
  },
  {
    keywords: [
      'career roadmap',
      'career path',
      'learning roadmap',
      'career plan',
    ],
    url: '/roadmaps',
    title: 'Career Roadmaps',
    category: 'content',
    priority: 9,
  },
  {
    keywords: ['off-campus drive', 'off campus placement', 'off-campus hiring'],
    url: '/off-campus-drives',
    title: 'Off-Campus Drives',
    category: 'content',
    priority: 8,
  },
  {
    keywords: ['internship', 'internships', 'summer intern', 'winter intern'],
    url: '/internships',
    title: 'Internship Opportunities',
    category: 'content',
    priority: 8,
  },
  {
    keywords: ['scholarship', 'scholarships', 'financial aid'],
    url: '/scholarships',
    title: 'Scholarships',
    category: 'content',
    priority: 7,
  },
  {
    keywords: ['career switch', 'career change', 'switch career'],
    url: '/career-switch',
    title: 'Career Switch Guide',
    category: 'content',
    priority: 7,
  },
  {
    keywords: ['layoff', 'laid off', 'job loss', 'downsizing'],
    url: '/layoff-guide',
    title: 'Layoff Survival Guide',
    category: 'content',
    priority: 8,
  },

  // Companies
  {
    keywords: ['tcs', 'tata consultancy'],
    url: '/companies/tcs',
    title: 'TCS Company Profile',
    category: 'companies',
    priority: 8,
  },
  {
    keywords: ['infosys'],
    url: '/companies/infosys',
    title: 'Infosys Company Profile',
    category: 'companies',
    priority: 8,
  },
  {
    keywords: ['wipro'],
    url: '/companies/wipro',
    title: 'Wipro Company Profile',
    category: 'companies',
    priority: 7,
  },
  {
    keywords: ['google'],
    url: '/companies/google',
    title: 'Google Company Profile',
    category: 'companies',
    priority: 9,
  },
  {
    keywords: ['amazon'],
    url: '/companies/amazon',
    title: 'Amazon Company Profile',
    category: 'companies',
    priority: 9,
  },
  {
    keywords: ['microsoft'],
    url: '/companies/microsoft',
    title: 'Microsoft Company Profile',
    category: 'companies',
    priority: 9,
  },
  {
    keywords: ['flipkart'],
    url: '/companies/flipkart',
    title: 'Flipkart Company Profile',
    category: 'companies',
    priority: 7,
  },
  {
    keywords: ['cognizant'],
    url: '/companies/cognizant',
    title: 'Cognizant Company Profile',
    category: 'companies',
    priority: 7,
  },

  // Resources
  {
    keywords: [
      'downloadable resources',
      'free resources',
      'pdf download',
      'free download',
    ],
    url: '/resources',
    title: 'Free Resources',
    category: 'resources',
    priority: 7,
  },
  {
    keywords: ['blog', 'articles', 'career blog'],
    url: '/blog',
    title: 'Career Blog',
    category: 'content',
    priority: 6,
  },
  {
    keywords: ['games', 'brain games', 'memory games', 'puzzle games'],
    url: '/games',
    title: 'Brain Training Games',
    category: 'tools',
    priority: 6,
  },
  {
    keywords: ['dsa', 'data structures', 'algorithms', 'dsa roadmap'],
    url: '/dsa',
    title: 'DSA Learning Path',
    category: 'content',
    priority: 8,
  },

  // Exams
  {
    keywords: ['gate exam', 'gate preparation', 'gate syllabus'],
    url: '/exams',
    title: 'Competitive Exams',
    category: 'content',
    priority: 7,
  },
  {
    keywords: ['certification', 'certifications', 'online certification'],
    url: '/certifications',
    title: 'IT Certifications Guide',
    category: 'content',
    priority: 7,
  },
];

// ── Link Insertion Engine ───────────────────────────────────────────────────

/**
 * Adds internal links to markdown content by detecting keyword mentions.
 *
 * Rules:
 * - Maximum 5 internal links per 1000 words
 * - Never link the same URL twice in one article
 * - Never link to the current page
 * - Only link first occurrence of each keyword
 * - Don't link inside headings, code blocks, or existing links
 * - Prefer higher priority links
 */
export function addInternalLinks(
  content: string,
  currentPageSlug: string,
): string {
  const words = content.split(/\s+/).length;
  const maxLinks = Math.min(Math.floor(words / 200), 15); // ~5 links per 1000 words, max 15

  // Sort by priority (highest first)
  const sortedLinks = [...LINK_DATABASE]
    .sort((a, b) => b.priority - a.priority)
    .filter((link) => !currentPageSlug.includes(link.url.replace(/^\//, '')));

  const usedUrls = new Set<string>();
  let linksAdded = 0;
  let result = content;

  // Split content into "safe" and "unsafe" zones
  // Unsafe: headings, code blocks, existing links, frontmatter
  const unsafePatterns = [
    /^#{1,6}\s.+$/gm, // Headings
    /```[\s\S]*?```/g, // Code blocks
    /`[^`]+`/g, // Inline code
    /\[([^\]]+)\]\([^)]+\)/g, // Existing links
    /^---[\s\S]*?---/, // Frontmatter
    /^\|.+\|$/gm, // Tables
  ];

  // Build a map of "unsafe" positions
  const unsafeRanges: Array<{ start: number; end: number }> = [];
  for (const pattern of unsafePatterns) {
    let match;
    const regex = new RegExp(pattern.source, pattern.flags);
    while ((match = regex.exec(result)) !== null) {
      unsafeRanges.push({
        start: match.index,
        end: match.index + match[0].length,
      });
    }
  }

  function isInUnsafeRange(pos: number): boolean {
    return unsafeRanges.some((r) => pos >= r.start && pos < r.end);
  }

  for (const link of sortedLinks) {
    if (linksAdded >= maxLinks) break;
    if (usedUrls.has(link.url)) continue;

    for (const keyword of link.keywords) {
      if (linksAdded >= maxLinks) break;

      // Case-insensitive search for whole word
      const regex = new RegExp(`\\b(${escapeRegex(keyword)})\\b`, 'i');
      const match = regex.exec(result);

      if (match && !isInUnsafeRange(match.index)) {
        const replacement = `[${match[1]}](${link.url})`;
        result =
          result.slice(0, match.index) +
          replacement +
          result.slice(match.index + match[0].length);

        // Update unsafe ranges for the new content
        const lengthDiff = replacement.length - match[0].length;
        for (const range of unsafeRanges) {
          if (range.start > match.index) {
            range.start += lengthDiff;
            range.end += lengthDiff;
          }
        }
        // Add the new link as an unsafe range
        unsafeRanges.push({
          start: match.index,
          end: match.index + replacement.length,
        });

        usedUrls.add(link.url);
        linksAdded++;
        break; // Only link first occurrence per keyword group
      }
    }
  }

  return result;
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Returns a list of recommended internal links for a given page,
 * useful for rendering "Related Content" sections.
 */
export function getRelatedLinks(
  currentPageSlug: string,
  category?: string,
  limit = 6,
): Array<{ url: string; title: string }> {
  return LINK_DATABASE.filter((link) => {
    if (currentPageSlug.includes(link.url.replace(/^\//, ''))) return false;
    if (category && link.category !== category) return false;
    return true;
  })
    .sort((a, b) => b.priority - a.priority)
    .slice(0, limit)
    .map((link) => ({ url: link.url, title: link.title }));
}

/**
 * Generates a contextual "Related Resources" markdown section.
 */
export function generateRelatedSection(currentPageSlug: string): string {
  const links = getRelatedLinks(currentPageSlug, undefined, 5);
  if (links.length === 0) return '';

  return `\n---\n\n## Related Resources on Sproutern\n\n${links.map((l) => `- [${l.title}](${l.url})`).join('\n')}\n`;
}
