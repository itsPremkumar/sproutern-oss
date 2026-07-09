const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src/app');

// Common replacers to shorten titles
// Specific replacements for stubborn titles
const strictReplacements = {
  'Career Advice & High-Paying Opportunities - Sproutern Blog':
    'Career Advice & High-Paying Opportunities',
  'Cold Emailing Tips: How to Land Internships and Mentorships':
    'Cold Emailing Tips: Land Internships',
  'Email Etiquette for Students: Professional Communication Guide':
    'Email Etiquette for Students',
  'Overcoming Imposter Syndrome: A Complete Guide for Students & Interns':
    'Overcoming Imposter Syndrome',
  'The Psychology of Job Applications: Understanding What Recruiters Look For':
    'Psychology of Job Applications',
  '10 Resume Mistakes That Cost Students Internship Opportunities':
    '10 Resume Mistakes to Avoid',
  'Top Skills Startup Recruiters Want (Technical + Soft Skills)':
    'Top Skills Startup Recruiters Want',
  'Startup Internship vs Corporate Internship: Which is Better?':
    'Startup vs Corporate Internship',
  'Networking Guide for Students: Build Professional Connections':
    'Networking Guide for Students',
  'Summer Internship vs Winter Internship: Which is Right for You?':
    'Summer vs Winter Internship',
  'The Legal Side of Internships: A Complete Guide for Indian Startups':
    'Legal Side of Internships (Startups)',
  'Time Management for Students: Balance Studies, Internships & Life':
    'Time Management for Students',
  'Why Your Startup Should Hire Interns: The Complete ROI Guide':
    'Why Your Startup Should Hire Interns',
  'How to Write a Cover Letter That Gets Read (Guide + Templates)':
    'How to Write a Cover Letter That Gets Read',
  'How to Get Placed in Top MNC Companies | Complete Step-by-Step Guide for Freshers':
    'How to Get Placed in Top MNCs',
  'MNC Preparation Hub | Complete Resources for MNC Placement':
    'MNC Preparation Hub',
  'NortonLifeLock (Gen Digital) Careers India | Cybersecurity Jobs':
    'NortonLifeLock Careers India',
  'Study & Work in Germany | Free Tuition, Blocked Account & Visa Guide':
    'Study & Work in Germany',
  'Study & Work in Netherlands | English Programs & Orientation Year':
    'Study & Work in Netherlands',
  'Study & Work Abroad | 9 Country Guides for International Students':
    'Study & Work Abroad: 9 Country Guides',
  'Frequently Asked Questions | Sproutern - Your Career Questions Answered':
    'FAQ: Your Career Questions Answered',
  'First Job Guide for Freshers | Complete Career Start Guide':
    'First Job Guide for Freshers',
  'Free Downloadable Resources for Students | Resume Templates, Cheatsheets':
    'Free Resources: Resume Templates',
  'Career Roadmaps | Software Engineer, Data Scientist & More':
    'Career Roadmaps: Software Engineer & More',
  'Scholarships for Students | India & International Scholarships':
    'Scholarships for Students',
  'Competitive Exam Calendar | JEE, NEET, GATE, CAT, UPSC Dates':
    'Competitive Exam Calendar',
  'Printable Checklist Generator | Interview, Resume & Placement':
    'Checklist Generator',
  'Deadline Calculator & Tracker | Exam, Interview & Application Dates':
    'Deadline Calculator & Tracker',
  'Free Resume Builder - Create Professional ATS-Friendly Resume':
    'Free Resume Builder',
  'Fresher Salary & Bond Checker | TCS, Accenture, Infosys Bond Details':
    'Fresher Salary & Bond Checker',
};

// Order matters: specific long phrases first
const replacers = [
  { from: / \| Complete Guide for International Students/g, to: '' },
  { from: / \| Complete Guide for Students/g, to: '' },
  { from: /Complete Guide to .*? \((2025)\)/g, to: 'Guide' }, // "Complete Guide to Behavioral Interview Questions (2025)" -> "Guide" -> wait, that might break grammar.
  { from: / \| Complete Guide/g, to: '' },
  { from: /: Complete Guide/g, to: '' },
  { from: / - Complete Guide/g, to: '' },
  { from: /Complete Comparison Guide/g, to: 'Comparison' },
  { from: /Complete Salary Structure Guide/g, to: 'Salary Guide' },
  { from: /Complete Roadmap/g, to: 'Roadmap' },
  { from: /Step-by-Step Guide/g, to: 'Guide' },
  { from: /Free Online Tool/g, to: 'Free Tool' },
  {
    from: /Calculate Exact Age in Years, Months, Days/g,
    to: 'Calculate Exact Age',
  },
  {
    from: /Convert Text to UPPERCASE, lowercase, Title Case/g,
    to: 'Convert Case',
  },
  {
    from: /Convert Between 45\+ International Grading Systems/g,
    to: 'Convert GPA',
  },
  { from: /Statement of Purpose/g, to: 'SOP' },
  { from: /Letter of Recommendation/g, to: 'LOR' },
  { from: /Technical, HR & Coding Questions/g, to: 'Interview Questions' },
  { from: /Technical, HR & Coding/g, to: 'Interview Questions' },
  { from: /Technical & HR Questions/g, to: 'Tech & HR Qs' }, // Aggressive
  { from: /Jobs, Salary & Interview Process/g, to: 'Careers' },
  { from: /Jobs, Salary & Interview Guide/g, to: 'Careers' },
  { from: /\(2025 Guide\)/g, to: '' },
  { from: /Guide \(2025\)/g, to: '' },
  { from: / 2025/g, to: '' }, // Remove year if simple
  { from: /\(2025\)/g, to: '' },
  { from: /in India/g, to: '' }, // Often redundant if context implies
  { from: /Student Visa Processing Times/g, to: 'Visa Timeline' },
  { from: /Track Your Course Progress Online/g, to: 'Track Progress' },
  {
    from: /Track Your GATE, Placement Preparation Progress/g,
    to: 'Track Preparation',
  },
  { from: /Resignation, Leave, NOC Letter Generator/g, to: 'HR Letters' },
  { from: /Create QR Codes for URL, WiFi, Text/g, to: 'Generate QR Codes' },
  { from: /Fresher & Experienced Salaries/g, to: 'Salaries' },
  { from: /Find Scholarships in India/g, to: 'Find Scholarships' },
  { from: /Smart Statement of Purpose Generator/g, to: 'AI SOP Generator' },
  // Specific fix for "About Sproutern | Our Mission, Vision & Story - Global Career Platform"
  {
    from: /Our Mission, Vision & Story - Global Career Platform/g,
    to: 'Mission & Vision',
  },
  // Fix for "How AI is Revolutionizing the Internship Application Process"
  {
    from: /the Internship Application Process/g,
    to: 'Internship Applications',
  },
  // Fix for "How to Build an Impressive Portfolio That Gets You Hired"
  { from: /That Gets You Hired/g, to: '' },
  // Fix for "Digital vs Traditional Marketing for Startups"
  { from: /for Startups/g, to: '' },
  // Fix for "How to Convert Your Internship into a Full-Time Job Offer"
  { from: /into a Full-Time Job Offer/g, to: 'to Job Offer' },
  // Fix for "MBA vs M.Tech: Which is Better for Salary & Career Growth? "
  {
    from: /: Which is Better for Salary & Career Growth\?/g,
    to: ' Salary Comparison',
  },
];

const traverseDir = (dir, callback) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      traverseDir(filePath, callback);
    } else {
      if (file === 'page.tsx' || file === 'layout.tsx') {
        callback(filePath);
      }
    }
  });
};

const getTitle = (content) => {
  const titleRegex = /title:\s*['"]([^'"]+)['"]/;
  const match = content.match(titleRegex);
  return match ? match[1] : null;
};

const main = () => {
  console.log('Starting automated title fixes...');
  let fixedCount = 0;

  traverseDir(srcDir, (filePath) => {
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalTitle = getTitle(content);

    if (!originalTitle) return;

    // Check if needs fixing (len + 12 >= 70  => len >= 58)
    if (originalTitle.length < 58) return;

    let newTitle = originalTitle;

    // Check strict replacements first
    if (strictReplacements[originalTitle]) {
      newTitle = strictReplacements[originalTitle];
    } else {
      // Apply replacers
      for (const { from, to } of replacers) {
        newTitle = newTitle.replace(from, to).trim();
        // clean up double spaces or punctuation mess left behind
        newTitle = newTitle
          .replace(/\s+/g, ' ')
          .replace(/ \|$/, '')
          .replace(/ -$/, '')
          .replace(/:$/, '')
          .replace(/ \(\)$/, '');
      }
    }

    if (newTitle !== originalTitle) {
      // Check if it's now short enough
      if (newTitle.length < 58) {
        console.log(
          `Fixing: ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`,
        );
        console.log(`  Old: "${originalTitle}" (${originalTitle.length + 12})`);
        console.log(`  New: "${newTitle}" (${newTitle.length + 12})`);

        // Replace in content
        // Be careful to replace only the title line
        const regex = new RegExp(
          `title:\\s*['"]${originalTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`,
        );
        content = content.replace(regex, `title: '${newTitle}'`);
        fs.writeFileSync(filePath, content, 'utf-8');
        fixedCount++;
      } else {
        console.log(
          `Skipping (still too long): ${path.basename(path.dirname(filePath))}/${path.basename(filePath)}`,
        );
        console.log(`  Old: "${originalTitle}" (${originalTitle.length + 12})`);
        console.log(`  New: "${newTitle}" (${newTitle.length + 12})`);
      }
    }
  });

  console.log(`\nFixed ${fixedCount} files.`);
};

main();
