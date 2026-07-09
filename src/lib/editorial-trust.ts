import { authorInfo } from '@/lib/seo/author-info';

export interface EditorialTrustPerson {
  name: string;
  role: string;
  href?: string;
}

export interface EditorialTrustSource {
  label: string;
  note: string;
  href?: string;
}

export interface EditorialTrustUpdate {
  date?: string;
  title: string;
  detail: string;
}

export interface EditorialTrustContent {
  sectionLabel: string;
  title: string;
  summary: string;
  writtenBy: EditorialTrustPerson;
  reviewedBy: EditorialTrustPerson;
  lastUpdated: string;
  reviewCadence: string;
  methodology: string;
  methodologyPoints: string[];
  sources: EditorialTrustSource[];
  updateHistory: EditorialTrustUpdate[];
  citationNote?: string;
}

const teamEditor: EditorialTrustPerson = {
  name: 'Sproutern Team',
  role: 'Editorial and Product Team at Sproutern',
  href: '/about',
};

const editorialReviewTeam: EditorialTrustPerson = {
  name: 'Sproutern Editorial Team',
  role: 'Career editors and quality reviewers working from our public editorial policy',
  href: '/editorial-guidelines',
};

const toolsReviewTeam: EditorialTrustPerson = {
  name: 'Sproutern Tools Review Team',
  role: 'Reviewers for formulas, calculators, admissions guidance, and student-facing utilities',
  href: '/methodology',
};

const globalReviewTeam: EditorialTrustPerson = {
  name: 'Sproutern Global Mobility Review Team',
  role: 'Reviewers for study abroad, visa, and international career guidance',
  href: '/methodology',
};

const companyReviewTeam: EditorialTrustPerson = {
  name: 'Sproutern Company Research Team',
  role: 'Editors reviewing interview patterns, hiring flows, and public company guidance',
  href: '/editorial-guidelines',
};

const studentSuccessReviewTeam: EditorialTrustPerson = {
  name: 'Sproutern Student Success Review Team',
  role: 'Editors focused on school, college, fresher, and student-transition guidance',
  href: '/editorial-guidelines',
};

const homeSources: EditorialTrustSource[] = [
  {
    label: 'CBSE, UGC, AICTE, and university handbooks',
    note: 'Used when a flagship page touches grading systems, academic policy, admissions, or Indian higher-education guidance.',
    href: 'https://www.ugc.gov.in/',
  },
  {
    label: 'Income Tax Department and EPFO',
    note: 'Referenced for salary, tax, PF, and compensation explanations surfaced across core tools and career pages.',
    href: 'https://www.incometax.gov.in/iec/foportal/',
  },
  {
    label: 'USCIS, GOV.UK, IRCC, and DAAD',
    note: 'Used across study abroad and global career surfaces where visa, work-rights, or country guidance is summarized.',
    href: 'https://www.uscis.gov/',
  },
];

const blogSources: EditorialTrustSource[] = [
  {
    label: 'Primary regulations, employer documentation, and university sources',
    note: 'Blog articles are expected to cite the original policy, handbook, or employer guidance before we publish practical takeaways.',
  },
  {
    label: 'OECD and World Economic Forum',
    note: 'Used for labor-market, education, and future-of-work context when broader data is needed.',
    href: 'https://www.oecd.org/',
  },
  {
    label: 'NACE and public recruiter guidance',
    note: 'Used for resume, interview, internship, and early-career hiring patterns where employer-side evidence matters.',
    href: 'https://www.naceweb.org/',
  },
];

const toolsSources: EditorialTrustSource[] = [
  {
    label: 'University regulations and grading policies',
    note: 'CGPA, GPA, and academic calculators are checked against university or board-issued rules before release or revision.',
    href: 'https://www.cbse.gov.in/',
  },
  {
    label: 'Income Tax Department and Finance Act guidance',
    note: 'Salary and tax tools are reviewed against active Indian tax rules before material updates go live.',
    href: 'https://www.incometax.gov.in/iec/foportal/',
  },
  {
    label: 'EPFO and public compliance guidance',
    note: 'Used for PF-related assumptions and salary-breakdown explanations where statutory rules matter.',
    href: 'https://www.epfindia.gov.in/',
  },
];

const resourcesSources: EditorialTrustSource[] = [
  {
    label: 'Official learning platforms and certification providers',
    note: 'We prefer the original provider page over aggregator summaries when recommending a course, certificate, or resource.',
  },
  {
    label: 'NACE, LinkedIn research, and public recruiter guidance',
    note: 'Used for resume, interview, job-search, and early-career advice when employer-side context matters.',
    href: 'https://www.naceweb.org/',
  },
  {
    label: 'UGC, AICTE, and verified academic sources',
    note: 'Used when resources reference Indian higher-education policy, eligibility rules, or academic pathways.',
    href: 'https://www.aicte-india.org/',
  },
];

const countriesSources: EditorialTrustSource[] = [
  {
    label: 'Official immigration and visa portals',
    note: 'Country guidance is reviewed against the relevant government immigration source before material edits go live.',
    href: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
  },
  {
    label: 'Official university and scholarship portals',
    note: 'Tuition, scholarships, and admissions expectations are checked against public university or scholarship-owner guidance.',
    href: 'https://www.daad.de/en/',
  },
  {
    label: 'Public cost-of-living and labor-market references',
    note: 'Used for directional planning, never as a substitute for a school or government source when hard rules are involved.',
    href: 'https://www.oecd.org/',
  },
];

const companiesSources: EditorialTrustSource[] = [
  {
    label: 'Official company careers pages and hiring documentation',
    note: 'We rely on employer-owned material first when summarizing application flow, interview stages, or role expectations.',
  },
  {
    label: 'Verified candidate submissions and public interview signals',
    note: 'Candidate reports are checked for plausibility, recency, and consistency before they influence evergreen guides.',
  },
  {
    label: 'Public market and compensation references',
    note: 'Salary and hiring commentary is triangulated using multiple public references rather than a single anecdotal datapoint.',
  },
];

const schoolCollegeSources: EditorialTrustSource[] = [
  {
    label: 'NCERT, CBSE, and NTA',
    note: 'Used for school pathways, board-exam strategy, and entrance-exam context where official syllabi or schedules matter.',
    href: 'https://www.ncert.nic.in/',
  },
  {
    label: 'UGC, AICTE, and official college guidance',
    note: 'Used for higher-education pathways, academic rules, and admissions-related explanations.',
    href: 'https://www.ugc.gov.in/',
  },
  {
    label: 'Scholarship owners and official program pages',
    note: 'Scholarship eligibility is checked against the program owner whenever possible instead of secondary roundup pages.',
  },
];

const fresherSources: EditorialTrustSource[] = [
  {
    label: 'Offer-letter structures, public HR guidance, and labor-law references',
    note: 'Used when we explain salary breakdowns, notice periods, probation, or fresher job transitions.',
  },
  {
    label: 'NCS and public fresher-market references',
    note: 'Used for directional hiring and fresher-job context, especially where demand changes quickly.',
    href: 'https://www.ncs.gov.in/',
  },
  {
    label: 'Income Tax Department and EPFO',
    note: 'Used anywhere fresher compensation or statutory deductions are explained.',
    href: 'https://www.epfindia.gov.in/',
  },
];

export const HOME_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Editorial policy',
  title: 'How Sproutern keeps its flagship pages trustworthy',
  summary:
    'Sproutern is built by the Sproutern Team and reviewed by a human editorial team. On our highest-traffic pages we show who wrote the guidance, when it was last reviewed, how we validate it, and which primary sources shape the page so readers can judge the quality for themselves.',
  writtenBy: teamEditor,
  reviewedBy: editorialReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly reviews across flagship pages, with faster updates for high-impact corrections',
  methodology:
    'We separate lived experience from hard rules. Practical advice is written in plain language, but any claim that depends on regulations, deadlines, formulas, or official processes is checked against a primary source before we keep it on a major page.',
  methodologyPoints: [
    'We prefer original policy pages, academic handbooks, and employer-owned documentation over recycled summaries.',
    'We refresh reader-critical sections when a regulation, hiring pattern, or admissions rule materially changes.',
    'We keep public methodology and editorial standards pages linked from major pages so readers can inspect the process.',
  ],
  sources: homeSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Expanded E-E-A-T disclosure on major pages',
      detail:
        'Major Sproutern pages now surface author, reviewer, update history, methodology, and source context in a single human-readable trust layer.',
    },
    {
      title: 'Critical corrections workflow',
      detail:
        'When readers flag a factual issue, we verify the source first and push the correction outside the normal review cycle if the issue could mislead users.',
    },
  ],
  citationNote:
    'The homepage summarizes multiple content areas, so the references here point to the classes of sources we repeatedly use across tools, career guides, and study-abroad content.',
};

export const BLOG_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Article review',
  title: 'How Sproutern reviews career articles',
  summary:
    'Our blog is written for students, freshers, and early-career professionals. We aim for useful, readable guidance first, but we still expect articles to cite primary regulations, university guidance, or employer-side evidence wherever the advice depends on facts rather than opinion.',
  writtenBy: teamEditor,
  reviewedBy: editorialReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Evergreen articles are reviewed at least quarterly; time-sensitive posts move sooner',
  methodology:
    'We publish articles only after checking whether the advice depends on a policy, a market signal, or first-hand experience. If a section depends on an official rule, we look for the original source. If it depends on experience, we label it as practical guidance instead of hard fact.',
  methodologyPoints: [
    'We do not treat AI-generated drafts as final content; human editors review and rewrite before publication.',
    'If an article cites a hiring trend or academic rule, the editorial team looks for the original report, regulation, or handbook first.',
    'Major updates are logged so readers can see whether a change reflects a new policy, fresher data, or a corrected explanation.',
  ],
  sources: blogSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added reviewer and methodology disclosure to major blog surfaces',
      detail:
        'The blog section now clearly shows review context, source expectations, and correction workflow alongside major article experiences.',
    },
    {
      title: 'Reader feedback loop',
      detail:
        'Writers and editors monitor feedback for factual issues, unclear advice, and stale references that should be refreshed.',
    },
  ],
  citationNote:
    'Not every article uses the same dataset, but the editorial expectation is consistent: cite the primary rule, employer guidance, or research owner wherever it materially affects the reader.',
};

export const TOOLS_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Tool review process',
  title: 'How Sproutern validates student and career tools',
  summary:
    'Career tools can directly affect resumes, applications, and financial decisions. For that reason, we review formulas, input assumptions, and explanatory copy against official guidance before we keep a calculator or converter live on a major page.',
  writtenBy: teamEditor,
  reviewedBy: toolsReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly formula checks, plus same-cycle corrections when regulations change',
  methodology:
    'We test tools against the original formula or rule wherever possible, then check edge cases so the result is understandable to a student using the tool under real pressure, such as placements, admissions, or scholarship applications.',
  methodologyPoints: [
    'Academic conversion tools are checked against board or university regulations, not only generic web formulas.',
    'Salary-related tools are reviewed against current public tax and statutory deduction guidance before material updates go live.',
    'If a tool produces a simplified estimate, the surrounding copy is expected to say so clearly and link to the broader methodology page.',
  ],
  sources: toolsSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added page-level authorship and methodology disclosure to major tool pages',
      detail:
        'Major tool pages now explain who maintains the tool, how it is reviewed, and which source types inform formula changes.',
    },
    {
      date: 'November 2025',
      title: 'Documented calculator correction history on methodology pages',
      detail:
        'Sproutern publicly documented example formula and tax-related corrections so readers can see how errors are handled when the underlying rule changes.',
    },
  ],
  citationNote:
    'Tool accuracy depends on the original rule set. For that reason, we prioritize source owners such as boards, universities, and government departments over third-party explainers.',
};

export const RESOURCES_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Resource standards',
  title: 'How Sproutern reviews learning resources and career guides',
  summary:
    'Our resource pages are intended to help students act quickly without walking into outdated or overly generic advice. We keep them grounded in official learning providers, recruiter-side guidance, and public academic references instead of recycling listicles.',
  writtenBy: teamEditor,
  reviewedBy: editorialReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly content audits, with faster refreshes for time-sensitive guidance',
  methodology:
    'When we recommend a platform, template, checklist, or framework, we try to link readers toward the original provider or a documented standard first. We then add human context about how students can actually use that resource in placements, internships, or study planning.',
  methodologyPoints: [
    'We prefer official course, certificate, and template owners over scraped comparison pages.',
    'We balance strategy with implementation, so pages include both practical next steps and evidence-based context.',
    'If a resource ages badly because hiring or admissions expectations shift, we update or replace it rather than keeping stale advice live.',
  ],
  sources: resourcesSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added clearer author, reviewer, and source disclosure',
      detail:
        'Resource pages now explain who maintains them, which standards guide updates, and how readers can inspect the methodology behind major recommendations.',
    },
    {
      title: 'Public correction path',
      detail:
        'Readers can report stale links, changed provider terms, or factual issues through our contact flow, and we review those reports against the original source.',
    },
  ],
};

export const COUNTRIES_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Country guide review',
  title: 'How Sproutern reviews study abroad and country guidance',
  summary:
    'Country guidance is one of the easiest places for websites to mislead users. We try to keep our pages useful without pretending a summary can replace the official government or university source, especially for visas, tuition, and admissions rules.',
  writtenBy: teamEditor,
  reviewedBy: globalReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly reviews, with faster checks during application and visa cycle peaks',
  methodology:
    'We treat immigration rules, tuition, scholarships, and admissions timelines as high-risk information. Our goal is to give readers a practical overview, then point them toward the original government or university source before they make a decision.',
  methodologyPoints: [
    'Visa, work-rights, and immigration summaries are checked against the relevant official government portal before they remain on major pages.',
    'Tuition and scholarship guidance is anchored to public university or scholarship-owner information where possible.',
    'We distinguish between directional planning guidance and rules that require a primary-source confirmation before action.',
  ],
  sources: countriesSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added human-readable trust disclosures to country pages',
      detail:
        'Country pages now surface reviewer context, source expectations, and methodology links so students can verify rules before acting on them.',
    },
    {
      title: 'Escalation path for stale rules',
      detail:
        'If a visa, scholarship, or admissions rule changes, we update the summary only after checking the source owner rather than relying on social posts or forum chatter.',
    },
  ],
};

export const GLOBAL_CAREER_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Global career review',
  title: 'How Sproutern handles international career guidance',
  summary:
    'International career advice can become vague or outdated very quickly. We aim to keep these pages grounded in official immigration sources, public labor-market references, and practical job-search guidance that still makes sense across countries.',
  writtenBy: teamEditor,
  reviewedBy: globalReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly review cycle, with targeted refreshes when visa or labor-market signals shift',
  methodology:
    'We separate what is universal from what is local. Broad career strategy can travel across countries, but anything involving work rights, immigration, or regulated job markets is expected to point back to the official source or a clearly named public dataset.',
  methodologyPoints: [
    'We use public labor-market references for direction, not as a substitute for country-specific visa or employer rules.',
    'We keep country comparisons high level unless the underlying rule can be verified against a source owner.',
    'Readers are encouraged to treat these pages as a planning layer and confirm final decisions with the relevant government or institution.',
  ],
  sources: countriesSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added stronger E-E-A-T signals to global career pages',
      detail:
        'Major global career pages now show authorship, review context, methodology, and source references in a consistent trust block.',
    },
    {
      title: 'High-stakes review rule',
      detail:
        'Sections that could influence visa planning, relocation timing, or cross-border career moves are treated as higher-risk and reviewed more carefully.',
    },
  ],
};

export const COMPANIES_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Company research review',
  title: 'How Sproutern reviews company and interview guidance',
  summary:
    'Company pages are strongest when they help readers prepare without pretending every interview loop is identical. We review employer-owned information first, then layer in patterns from verified candidate submissions and public hiring signals.',
  writtenBy: teamEditor,
  reviewedBy: companyReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Rolling refreshes as interview patterns, salary signals, and hiring flows evolve',
  methodology:
    'We distinguish between employer-owned facts and candidate-reported experience. If the company states it publicly, we treat it as a primary source. If the insight comes from candidate reports, we present it as directional preparation guidance rather than a guaranteed script.',
  methodologyPoints: [
    'Official company careers pages and employer documentation are checked before we summarize application stages or eligibility expectations.',
    'Candidate-reported patterns are reviewed for recency and consistency before they shape evergreen preparation advice.',
    'Salary commentary is triangulated using multiple public signals whenever a single anecdote looks inflated or stale.',
  ],
  sources: companiesSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added named authorship and reviewer context to company hubs',
      detail:
        'Company pages now make it easier to see who maintains the guidance, how candidate signals are treated, and where readers should verify employer-owned facts.',
    },
    {
      title: 'Interview-pattern corrections',
      detail:
        'When fresh reports conflict with older guidance, we review the employer-owned signal first and then update the preparation notes accordingly.',
    },
  ],
};

export const FRESHERS_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'Fresher guide review',
  title: 'How Sproutern reviews first-job and fresher guidance',
  summary:
    'Fresher advice has to be practical, not performative. We write these pages for people handling their first offer, salary structure, relocation decision, or probation period, and we keep the guidance tied to real transition problems instead of generic motivation.',
  writtenBy: teamEditor,
  reviewedBy: studentSuccessReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly reviews aligned with placement and onboarding cycles',
  methodology:
    'We combine human career guidance with public references wherever the topic crosses into policy, compensation, or employment terms. That means we keep experience-led sections readable, but we still verify anything that could materially affect an offer decision or salary expectation.',
  methodologyPoints: [
    'Advice that touches salary, deductions, or compensation structure is reviewed against public financial or statutory guidance.',
    'Workplace transition advice is framed as practical guidance rather than universal legal advice unless a rule is sourced directly.',
    'Where fresher experiences differ across industries or employers, we explain the pattern instead of claiming a single answer fits everyone.',
  ],
  sources: fresherSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added clearer trust disclosures to fresher pages',
      detail:
        'Fresher pages now show authorship, reviewer context, review cadence, and methodology in a standard trust panel.',
    },
    {
      title: 'Fast correction path for offer-related guidance',
      detail:
        'If a page could mislead a reader about salary structure, notice periods, or onboarding expectations, we review the flagged section ahead of the normal cycle.',
    },
  ],
};

export const COLLEGE_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'College guide review',
  title: 'How Sproutern reviews college and placement guidance',
  summary:
    'College pages mix academic planning, placement prep, internships, and higher-study decisions. We keep these pages practical, but the parts that depend on admissions rules, scholarship criteria, or academic policy are still checked against public source owners before we keep them live.',
  writtenBy: teamEditor,
  reviewedBy: studentSuccessReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly reviews around semester, internship, and placement cycles',
  methodology:
    'The goal is to help a student decide what to do next, not bury them in policy language. We write in plain English, then link back to the source category that informs the advice so the reader can inspect the original rule where it matters.',
  methodologyPoints: [
    'Placement and career strategy sections are written as actionable guidance, but scholarship and academic-rule references are checked against public program owners or institutions.',
    'We update pages when a major student decision point changes, such as admissions timing, scholarship criteria, or placement-market expectations.',
    'Advice that is opinionated is labeled as strategy, not presented as an official rule.',
  ],
  sources: schoolCollegeSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added trust panels to major college surfaces',
      detail:
        'College pages now show who wrote the guidance, who reviewed it, how updates happen, and which source types inform the page.',
    },
    {
      title: 'Reader verification path',
      detail:
        'Students can now move directly from the page-level trust panel to our methodology, editorial standards, and correction channel.',
    },
  ],
};

export const SCHOOL_EDITORIAL_TRUST: EditorialTrustContent = {
  sectionLabel: 'School guide review',
  title: 'How Sproutern reviews school and early-career planning pages',
  summary:
    'School guidance shapes high-stakes decisions early: stream choice, exam preparation, scholarships, and post-12th options. We try to keep the advice understandable for students and parents while staying anchored to official educational and exam sources where the facts matter.',
  writtenBy: teamEditor,
  reviewedBy: studentSuccessReviewTeam,
  lastUpdated: 'March 6, 2026',
  reviewCadence:
    'Quarterly reviews aligned with school, board-exam, and entrance-exam cycles',
  methodology:
    'We treat school guidance as a mix of practical coaching and official information. Strategy sections are written in a student-friendly tone, but exam dates, scholarship criteria, and pathway explanations are expected to point back to the original source owner or public authority.',
  methodologyPoints: [
    'Exam, board, and scholarship references are checked against official education or testing bodies before material edits are published.',
    'Career-path summaries are written as orientation guidance, not as promises about salary or admissions outcomes.',
    'Pages are refreshed when a change affects the decision a student or parent is likely to make next.',
  ],
  sources: schoolCollegeSources,
  updateHistory: [
    {
      date: 'March 6, 2026',
      title: 'Added stronger E-E-A-T disclosures to school pages',
      detail:
        'School pages now show clearer authorship, reviewer context, source expectations, and update notes for early-stage career planning content.',
    },
    {
      title: 'Higher-stakes school content review',
      detail:
        'Where a page touches scholarships, board exams, or entrance timelines, the section is treated as higher risk and refreshed more carefully.',
    },
  ],
};
