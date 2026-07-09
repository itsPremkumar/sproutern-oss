import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(
  process.cwd(),
  'src/content/downloadable-resources',
);

const SLUG_TO_PATH: Record<string, string> = {
  '100-hr-questions': 'interview/100-hr-questions.md',
  'star-method': 'interview/star-method.md',
  'ats-resume': 'resume/ats-resume-template.md',
  'dsa-cheatsheet': 'technical/dsa-cheatsheet.md',
  'project-ideas': 'technical/project-ideas.md',
  'email-templates': 'career/email-templates.md',
  'scholarship-tracker': 'scholarships/scholarship-tracker.md',
  'job-tracker': 'career/job-tracker.md',
  'study-planner': 'productivity/study-planner.md',
  'college-comparison': 'college/college-comparison.md',
  'usa-visa-checklist': 'study-abroad/usa-visa-checklist.md',
  'uk-visa-checklist': 'study-abroad/uk-visa-checklist.md',
  'interview-prep': 'interview/interview-prep.md',
  'expense-tracker': 'finance/expense-tracker.md',
  // Map others as they are created
};

export function getDownloadContent(slug: string): string | null {
  const relativePath = SLUG_TO_PATH[slug];

  if (!relativePath) {
    return null;
  }

  const fullPath = path.join(CONTENT_DIR, relativePath);

  try {
    if (fs.existsSync(fullPath)) {
      return fs.readFileSync(fullPath, 'utf-8');
    }
  } catch (error) {
    console.error(`Error reading download content for slug ${slug}:`, error);
  }

  return null;
}
