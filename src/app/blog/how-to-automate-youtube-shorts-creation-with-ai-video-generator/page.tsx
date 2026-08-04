import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clapperboard,
  Clock,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Mic,
  MonitorPlay,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TerminalSquare,
  User,
  Workflow,
} from 'lucide-react';

const PAGE_URL =
  'https://sproutern.dpdns.org/blog/how-to-automate-youtube-shorts-creation-with-ai-video-generator';
const REPO_URL =
  'https://github.com/itsPremkumar/Automated-Video-Generator';
const REPO_STARS_URL = `${REPO_URL}/stargazers`;
const NPM_URL = 'https://www.npmjs.com/package/automated-video-generator';
const YOUTUBE_URL = 'https://www.youtube.com/watch?v=ryNhQd_M2G8';
const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/ryNhQd_M2G8?rel=0';
const PUBLISHED_AT = '2026-04-02T00:00:00.000Z';

const pageTitle =
  'Automated Video Generator Review: Open-Source AI Shorts Tool';
const pageDescription =
  'See how Automated Video Generator turns scripts into YouTube Shorts, TikTok videos, and Reels with Remotion, Edge-TTS, stock footage APIs, batch rendering, a local web portal, and MCP support.';
const pageKeywords = [
  'automated video generator',
  'open source AI video generator',
  'YouTube Shorts generator',
  'TikTok video generator',
  'Instagram Reels generator',
  'text to video generator',
  'Remotion video generator',
  'Edge-TTS video generator',
  'self-hosted video generator',
  'faceless YouTube channel automation',
  'AI video generation GitHub',
  'automated-video-generator npm',
];

const faqItems = [
  {
    question: 'What is Automated Video Generator?',
    answer:
      'Automated Video Generator is a free and open-source self-hosted AI video generation project. It helps creators, developers, and marketers turn scripts into MP4 videos using Remotion, Edge-TTS, stock media APIs, batch rendering, and a local web portal.',
  },
  {
    question: 'Is Automated Video Generator really free to use?',
    answer:
      'Yes. The repository is MIT-licensed and the project itself is positioned as free and open source. You may still need API keys or local tooling such as FFmpeg, and third-party services like stock media providers can have their own quotas or terms.',
  },
  {
    question: 'Can I use it for YouTube Shorts, TikTok, and Instagram Reels?',
    answer:
      'Yes. The project is built for short-form video workflows and supports portrait output, voice generation, stock media retrieval, and ready-to-share MP4 exports that fit platforms like YouTube Shorts, TikTok, and Instagram Reels.',
  },
  {
    question: 'Do I need to clone the GitHub repo to try it?',
    answer:
      'Not always. The quickest entry point is npx automated-video-generator. If you want to customize templates, inspect the source, or contribute features, cloning the GitHub repository is the better option.',
  },
  {
    question: 'Why should users star the GitHub repository?',
    answer:
      'A GitHub star improves visibility, helps more creators discover the project, and signals that the tool is worth maintaining. For open-source projects, stars are one of the simplest ways users can support the work behind the code.',
  },
];

const howToSteps = [
  {
    name: 'Install the runtime requirements',
    text: 'Set up Node.js 18 or newer, npm, Python 3.8 or newer, and FFmpeg on your machine before running the generator.',
  },
  {
    name: 'Choose your install path',
    text: 'Use `npx automated-video-generator` for the fastest start, or clone the GitHub repository if you want full source-level control.',
  },
  {
    name: 'Configure environment variables',
    text: 'Copy `.env.example` to `.env` and add your stock media API keys, along with optional defaults such as voice, orientation, and base URL.',
  },
  {
    name: 'Prepare your input script',
    text: 'Create an input job with a title, voice, orientation, music settings, and script text so the renderer can build scenes and audio.',
  },
  {
    name: 'Render and review the output',
    text: 'Run the generation pipeline, review the MP4 export in the output folder, and use the local web portal for previewing, progress tracking, and downloads.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline:
        'Automated Video Generator Review: Open-Source AI Tool for YouTube Shorts, TikTok, and Reels',
      description: pageDescription,
      datePublished: PUBLISHED_AT,
      dateModified: PUBLISHED_AT,
      image: 'https://sproutern.dpdns.org/opengraph.jpg',
      inLanguage: 'en',
      isAccessibleForFree: true,
      keywords: pageKeywords.join(', '),
      articleSection: 'Technology',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': PAGE_URL,
      },
      author: {
        '@type': 'Organization',
        name: 'Sproutern Editorial Team',
        url: 'https://sproutern.dpdns.org/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Sproutern',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sproutern.dpdns.org/logo.jpg',
        },
      },
      about: [
        { '@type': 'Thing', name: 'Automated Video Generator' },
        { '@type': 'Thing', name: 'YouTube Shorts' },
        { '@type': 'Thing', name: 'TikTok' },
        { '@type': 'Thing', name: 'Instagram Reels' },
        { '@type': 'Thing', name: 'Remotion' },
        { '@type': 'Thing', name: 'Edge-TTS' },
        { '@type': 'Thing', name: 'Model Context Protocol' },
      ],
      mentions: [
        {
          '@type': 'SoftwareSourceCode',
          name: 'Automated Video Generator',
          url: REPO_URL,
        },
        {
          '@type': 'WebPage',
          name: 'Automated Video Generator on npm',
          url: NPM_URL,
        },
        {
          '@type': 'WebPage',
          name: 'Automated Video Generator sample output',
          url: YOUTUBE_URL,
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://sproutern.dpdns.org',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://sproutern.dpdns.org/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Automated Video Generator Review',
          item: PAGE_URL,
        },
      ],
    },
    {
      '@type': 'HowTo',
      name: 'How to start with Automated Video Generator',
      description:
        'Install the prerequisites, configure your environment, add a script, and render your first short-form video locally.',
      totalTime: 'PT20M',
      supply: [
        {
          '@type': 'HowToSupply',
          name: 'A script or JSON input file',
        },
        {
          '@type': 'HowToSupply',
          name: 'API keys for stock media providers',
        },
      ],
      tool: [
        {
          '@type': 'HowToTool',
          name: 'Node.js 18+',
        },
        {
          '@type': 'HowToTool',
          name: 'Python 3.8+',
        },
        {
          '@type': 'HowToTool',
          name: 'FFmpeg',
        },
      ],
      step: howToSteps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'Automated Video Generator',
      description:
        'Free and open-source self-hosted AI text-to-video generator built with Remotion, Edge-TTS, stock media APIs, batch rendering, a local web portal, and MCP integration.',
      codeRepository: REPO_URL,
      url: REPO_URL,
      downloadUrl: REPO_URL,
      license: `${REPO_URL}/blob/main/LICENSE`,
      runtimePlatform: 'Node.js 18+',
      programmingLanguage: 'TypeScript, JavaScript, Python',
      author: {
        '@type': 'Organization',
        name: 'Sproutern Team',
        url: 'https://sproutern.dpdns.org/about',
      },
      keywords: pageKeywords.join(', '),
      targetProduct: {
        '@type': 'SoftwareApplication',
        name: 'Automated Video Generator',
        applicationCategory: 'MultimediaApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    },
  ],
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: pageKeywords,
  authors: [{ name: 'Sproutern Team' }],
  alternates: {
    canonical: PAGE_URL,
    languages: {
      'en-IN': PAGE_URL,
      'en-US': PAGE_URL,
      'en-GB': PAGE_URL,
      'x-default': PAGE_URL,
    },
  },
  openGraph: {
    title:
      'Automated Video Generator: Open-Source AI Tool for YouTube Shorts',
    description: pageDescription,
    url: PAGE_URL,
    siteName: 'Sproutern',
    type: 'article',
    publishedTime: PUBLISHED_AT,
    modifiedTime: PUBLISHED_AT,
    authors: ['Sproutern Team'],
    images: [
      {
        url: 'https://sproutern.dpdns.org/opengraph.jpg',
        width: 1200,
        height: 630,
        alt: 'Automated Video Generator review on Sproutern',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Automated Video Generator Review: Open-Source AI Shorts Tool',
    description: pageDescription,
    images: ['https://sproutern.dpdns.org/twitter.jpg'],
    creator: '@sproutern',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function BlogPost() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Script
        id="automated-video-generator-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article className="prose lg:prose-xl mx-auto">
        <header className="not-prose mb-12">
          <div className="mb-4 flex items-center gap-2 text-sky-700 dark:text-sky-400">
            <Clapperboard className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Open Source AI Tools
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl lg:leading-tight">
            Automated Video Generator Review: The Open-Source AI Tool Built for
            YouTube Shorts, TikTok, and Reels
          </h1>

          <p className="mb-6 text-xl leading-relaxed text-muted-foreground">
            If you want a serious, self-hosted workflow for turning scripts into
            short-form videos, <strong>Automated Video Generator</strong> is one
            of the most interesting GitHub projects to watch right now. It
            brings together Remotion, Edge-TTS, stock media APIs, batch
            rendering, a local web portal, and MCP support so creators and
            developers can ship more video content with less manual editing.
          </p>

          <div className="flex flex-wrap items-center gap-6 border-y py-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sproutern Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>April 2, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>16 min read</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
              <Globe2 className="h-4 w-4" />
              <span>SEO and GEO optimized</span>
            </div>
          </div>
        </header>

        <section className="not-prose mb-12 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8 shadow-sm dark:border-sky-900 dark:from-sky-950/40 dark:via-background dark:to-cyan-950/20">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-400">
                Quick Answer
              </p>
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
                What is this project, and why are creators paying attention?
              </h2>
              <p className="mb-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                Automated Video Generator is a free, MIT-licensed, self-hosted
                text-to-video pipeline. You give it a script, and it can fetch
                visuals, generate voiceovers, render scenes with Remotion, and
                export a ready-to-share MP4. That makes it relevant for
                faceless channels, short-form content systems, AI agents, and
                creators who want more control than a typical SaaS wrapper.
              </p>
              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                The strongest differentiators are the open-source codebase,
                built-in batch workflow, local portal, npm distribution, and
                MCP support. If you like discovering useful creator
                infrastructure on GitHub, this is a repository worth watching
                and worth starring.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
              <div className="mb-4 flex items-center gap-3">
                <Github className="h-6 w-6" />
                <p className="text-lg font-semibold">Support the project</p>
              </div>
              <p className="mb-6 text-sm leading-6 text-slate-300">
                If this kind of tooling is useful to you, the best low-effort
                way to help is simple: open the repository and leave a GitHub
                star.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={REPO_STARS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  <Star className="h-4 w-4 fill-current" />
                  Star the GitHub Repository
                </a>
                <a
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900"
                >
                  View the Repository
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="not-prose my-12">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-2xl dark:border-slate-800">
            <iframe
              width="100%"
              height="100%"
              src={YOUTUBE_EMBED_URL}
              title="Automated Video Generator sample output"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm font-medium text-muted-foreground">
            <MonitorPlay className="h-4 w-4" />
            Sample output created with the tool.
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              Watch on YouTube
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>

        <nav className="not-prose mb-12 rounded-2xl border border-slate-200 bg-slate-50/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold">
            <BookOpen className="h-6 w-6" />
            Table of Contents
          </h2>
          <ol className="grid gap-4 text-base md:grid-cols-2">
            <li>
              <a
                href="#why-this-project-matters"
                className="font-medium text-primary hover:underline"
              >
                1. Why this project matters
              </a>
            </li>
            <li>
              <a
                href="#what-you-get"
                className="font-medium text-primary hover:underline"
              >
                2. What you get
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="font-medium text-primary hover:underline"
              >
                3. How the workflow works
              </a>
            </li>
            <li>
              <a
                href="#seo-geo-marketing"
                className="font-medium text-primary hover:underline"
              >
                4. SEO, GEO, and marketing value
              </a>
            </li>
            <li>
              <a
                href="#quick-start"
                className="font-medium text-primary hover:underline"
              >
                5. Quick start from GitHub
              </a>
            </li>
            <li>
              <a
                href="#best-use-cases"
                className="font-medium text-primary hover:underline"
              >
                6. Best use cases
              </a>
            </li>
            <li>
              <a
                href="#why-star-the-repo"
                className="font-medium text-primary hover:underline"
              >
                7. Why users should star the repo
              </a>
            </li>
            <li>
              <a href="#faq" className="font-medium text-primary hover:underline">
                8. Frequently asked questions
              </a>
            </li>
          </ol>
        </nav>

        <section className="not-prose mb-12 rounded-2xl border-l-4 border-l-emerald-600 bg-emerald-50 p-8 dark:border-l-emerald-500 dark:bg-emerald-950/20">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-emerald-800 dark:text-emerald-300">
            <CheckCircle2 className="h-6 w-6" />
            Key Takeaways
          </h2>
          <ul className="space-y-4 text-base">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-900 dark:text-emerald-100">
                <strong>It is genuinely open source:</strong> the project is
                positioned as free, MIT-licensed, and self-hosted instead of a
                limited free trial.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-900 dark:text-emerald-100">
                <strong>It is built for production-style workflows:</strong>{' '}
                script-driven generation, stock footage fetching, Edge-TTS
                voiceovers, Remotion rendering, and batch jobs all live in the
                same pipeline.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-900 dark:text-emerald-100">
                <strong>It fits global creator use cases:</strong> you can build
                content for India, the US, the UK, or wider markets by changing
                scripts, voice choices, and content angles.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-900 dark:text-emerald-100">
                <strong>The repo deserves visibility:</strong> if you want this
                project to keep growing, opening the repository and leaving a
                star is one of the most useful things you can do.
              </span>
            </li>
          </ul>
        </section>

        <section id="why-this-project-matters" className="scroll-mt-24 mb-14">
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold">
            <Sparkles className="h-7 w-7 text-primary" />
            1. Why this project matters
          </h2>
          <p>
            A lot of AI video tools look polished on the surface, but many of
            them lock core features behind subscriptions, hide the actual
            workflow, or make creators depend on a black-box platform.{' '}
            <strong>Automated Video Generator</strong> is appealing because it
            goes in the opposite direction: the code is visible, the stack is
            understandable, the output pipeline is local, and the project is
            designed for people who want control.
          </p>
          <p>
            That matters whether you are a solo creator building a faceless
            channel, a developer experimenting with media automation, a marketer
            trying to produce product explainer videos faster, or an AI-native
            workflow builder connecting tools through MCP. Instead of manually
            stitching together voice generation, stock footage, timing, and
            rendering, this repo brings those pieces into one repeatable system.
          </p>
          <p>
            It also helps that the repository already speaks the language of
            modern creator infrastructure: GitHub for source, npm for
            distribution, Remotion for rendering, Edge-TTS for voice, and a
            local portal for review. Those are the kinds of details people look
            for when they want something more durable than a one-click demo.
          </p>
        </section>

        <section id="what-you-get" className="scroll-mt-24 mb-14">
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold">
            <Layers3 className="h-7 w-7 text-primary" />
            2. What you get
          </h2>
          <p>
            Based on the repository documentation, the project is not a narrow
            single-purpose script. It is a broader video generation toolkit with
            several layers that make it especially attractive for real-world
            usage.
          </p>

          <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-primary">
                <ShieldCheck className="h-5 w-5" />
                Open-source foundation
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                MIT license, source code on GitHub, no forced subscription
                model, and no watermark added by the codebase itself.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-primary">
                <Mic className="h-5 w-5" />
                Voice plus visuals pipeline
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                Edge-TTS handles voice generation while stock media APIs and
                local assets support the visual side of the workflow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-primary">
                <Workflow className="h-5 w-5" />
                Script-driven automation
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                The generator parses scripts into scenes, builds timing, renders
                segments, and exports ready-to-share MP4 files.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6 shadow-sm dark:border-slate-800">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-primary">
                <TerminalSquare className="h-5 w-5" />
                Multiple ways to work
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">
                You can run it with <code>npx</code>, clone the repo for
                development, use the local web portal, or connect it to agent
                workflows through MCP.
              </p>
            </div>
          </div>

          <p>
            For creators, that combination means less time on repetitive editing
            work. For developers, it means the pipeline is inspectable and
            customizable. For marketers, it means faster iteration without
            giving up ownership of the workflow.
          </p>
        </section>

        <section id="how-it-works" className="scroll-mt-24 mb-14">
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold">
            <Workflow className="h-7 w-7 text-primary" />
            3. How the workflow works
          </h2>
          <p>
            The documented pipeline is refreshingly clear. In plain terms, the
            project follows a structure like this:
          </p>
          <ol>
            <li>
              You prepare a script or JSON job with a title, voice,
              orientation, music settings, and script content.
            </li>
            <li>
              The tool parses the script into scenes and assigns timing.
            </li>
            <li>
              It fetches stock visuals or uses local assets, then generates the
              voiceover audio.
            </li>
            <li>
              Remotion renders the scenes and stitches the final output.
            </li>
            <li>
              The finished MP4 lands in the output directory, ready for review
              and publishing.
            </li>
          </ol>

          <p>
            That makes the project useful beyond pure entertainment content. The
            same pattern can support product explainers, educational clips,
            social media snippets, faceless storytelling, or even agent-driven
            media systems where script generation and video rendering are part
            of one automated chain.
          </p>
        </section>

        <section id="seo-geo-marketing" className="scroll-mt-24 mb-14">
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold">
            <Search className="h-7 w-7 text-primary" />
            4. SEO, GEO, and marketing value
          </h2>
          <p>
            This project is easy to market because it solves a very searchable,
            very practical problem: <strong>how to create short-form videos
            faster without giving up control</strong>. That maps well to search
            intent from creators, developers, agencies, founders, and AI tool
            enthusiasts.
          </p>

          <h3>Why it has strong SEO appeal</h3>
          <p>
            Search-driven audiences respond to clear utility. Terms like
            "open-source AI video generator", "YouTube Shorts generator",
            "text-to-video GitHub project", and "self-hosted video generator"
            all align naturally with what this repository actually offers.
            Because the product has a real codebase, real install path, real npm
            package, and real output sample, it is easier to write content that
            feels trustworthy instead of promotional fluff.
          </p>

          <h3>Why it works for GEO and global reach</h3>
          <p>
            GEO can mean two things here, and the project helps with both. For
            <strong>geographic targeting</strong>, creators can adapt scripts,
            voices, and content angles for audiences in India, the US, the UK,
            or other markets. For{' '}
            <strong>generative engine optimization</strong>,
            the project is easy for AI systems to understand because it has
            explicit entities, a public GitHub repository, concrete technical
            components, and a documented workflow.
          </p>

          <p>
            That is especially useful for creators in India or emerging markets
            who want to publish for higher-value global audiences without taking
            on expensive recurring software costs. A self-hosted workflow keeps
            the toolchain lean while still giving you room to localize the final
            content for multiple regions.
          </p>
        </section>

        <section
          id="quick-start"
          className="scroll-mt-24 mb-14 rounded-3xl bg-slate-50 p-8 dark:bg-slate-900/40"
        >
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold dark:border-slate-700">
            <TerminalSquare className="h-7 w-7 text-primary" />
            5. Quick start from GitHub
          </h2>
          <p>
            If you want to try the project with minimal friction, the repository
            documents two practical paths.
          </p>

          <h3>Fastest start</h3>
          <div className="not-prose rounded-2xl bg-slate-950 p-5 text-sm text-slate-100 shadow-inner">
            <code>npx automated-video-generator</code>
          </div>

          <h3>Development setup from the repository</h3>
          <div className="not-prose rounded-2xl bg-slate-950 p-5 text-sm text-slate-100 shadow-inner">
            <pre className="m-0 overflow-x-auto whitespace-pre-wrap font-mono">
{`git clone https://github.com/itsPremkumar/Automated-Video-Generator.git
cd Automated-Video-Generator
npm install
pip install -r requirements.txt`}
            </pre>
          </div>

          <h3>Prerequisites</h3>
          <ul>
            <li>Node.js 18+</li>
            <li>npm</li>
            <li>Python 3.8+</li>
            <li>FFmpeg available on your system PATH</li>
          </ul>

          <h3>Environment variables</h3>
          <p>
            Copy <code>.env.example</code> to <code>.env</code> and add the
            relevant API keys. The README highlights <code>PEXELS_API_KEY</code>{' '}
            as the main one to start with, and also supports variables like{' '}
            <code>PIXABAY_API_KEY</code>, <code>PUBLIC_BASE_URL</code>,{' '}
            <code>VIDEO_ORIENTATION</code>, and <code>VIDEO_VOICE</code>.
          </p>

          <h3>Useful commands</h3>
          <ul>
            <li>
              <code>npm run generate</code> to create videos from the input job
              file
            </li>
            <li>
              <code>npm run dev</code> to launch the local web portal
            </li>
            <li>
              <code>npm run mcp</code> to start the MCP server
            </li>
            <li>
              <code>npm run remotion:studio</code> to inspect compositions
              locally
            </li>
          </ul>
        </section>

        <section id="best-use-cases" className="scroll-mt-24 mb-14">
          <h2 className="flex items-center gap-3 border-b pb-2 text-2xl font-bold">
            <Globe2 className="h-7 w-7 text-primary" />
            6. Best use cases
          </h2>
          <p>
            The best marketing content is specific, so here is where the project
            feels especially strong.
          </p>
          <ul>
            <li>
              <strong>YouTube Shorts automation:</strong> build repeatable
              short-form workflows around scripts, narration, captions, and
              vertical output.
            </li>
            <li>
              <strong>TikTok and Reels content:</strong> create social-ready MP4
              assets faster without manually editing every scene.
            </li>
            <li>
              <strong>Faceless channel systems:</strong> pair script writing
              with a rendering pipeline for educational, explainer, facts, or
              commentary content.
            </li>
            <li>
              <strong>Marketing and product videos:</strong> turn promotional
              copy into lightweight demo or brand clips.
            </li>
            <li>
              <strong>Agentic workflows:</strong> connect the project to MCP
              clients when you want chat-driven orchestration around video
              creation.
            </li>
          </ul>
        </section>

        <section id="why-star-the-repo" className="scroll-mt-24 mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-2xl sm:p-12">
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100">
                <Github className="h-4 w-4" />
                Open-source call to action
              </div>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
                7. If you like this project, star the repository
              </h2>
              <p className="mb-6 max-w-3xl text-lg leading-8 text-slate-200">
                Open-source tools grow because users make the project visible.
                If Automated Video Generator helped you discover a better video
                workflow, gave you ideas for your content system, or simply
                showed you what a strong self-hosted media pipeline can look
                like, please open the GitHub repository and leave a star.
              </p>
              <p className="mb-8 max-w-3xl text-base leading-7 text-slate-300">
                A star is more than a vanity number. It improves trust, helps
                more developers and creators find the repo, and gives the
                project stronger momentum for future contributors, issues, and
                releases.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={REPO_STARS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  <Star className="h-5 w-5 fill-current" />
                  Star the Repository on GitHub
                </a>
                <a
                  href={NPM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  View the npm package
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-[90px]" />
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]" />
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 mb-14">
          <h2 className="mb-8 border-b pb-3 text-3xl font-bold">
            8. Frequently asked questions
          </h2>

          <div className="grid gap-6">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="mb-3 text-lg font-bold text-primary">
                  {item.question}
                </h3>
                <p className="mb-0 text-base leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4">
          <p>
            If you are new to collaborating on GitHub, read our{' '}
            <Link
              href="/blog/open-source-contribution-guide"
              className="font-medium text-primary hover:underline"
            >
              open-source contribution guide
            </Link>
            . If you want to understand the platform basics first, our{' '}
            <Link
              href="/blog/git-github-beginners-guide"
              className="font-medium text-primary hover:underline"
            >
              Git and GitHub guide for beginners
            </Link>{' '}
            is a useful next step.
          </p>
          <p>
            The short version is simple: this is a strong project, it solves a
            real creator problem, and it deserves attention. Visit the{' '}
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Automated Video Generator GitHub repository
            </a>
            , try it, and if you like what you see, leave it a star.
          </p>
          <p className="not-prose mt-8">
            <a
              href={REPO_STARS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground no-underline transition hover:opacity-90"
            >
              Star the repo now
              <ArrowRight className="h-4 w-4" />
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
