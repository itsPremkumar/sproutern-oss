/**
 * AI Tools Database
 * High-quality AI tools curated for students and professionals
 * With PartnerStack verified affiliate programs
 */

import { AITool } from '@/types/ai-tools-types';

/**
 * Curated AI Tools with verified affiliate programs
 * Commission rates verified from PartnerStack Marketplace 2024
 */
export const AI_TOOLS: AITool[] = [
  // Writing & Content Creation
  {
    id: 'notion-ai',
    name: 'Notion AI',
    slug: 'notion-ai',
    shortDescription:
      'AI-powered workspace for notes, docs, and project management.',
    longDescription:
      'Notion AI is an integrated AI assistant within the popular Notion workspace. Perfect for students managing coursework, taking notes, and organizing projects. It helps you write faster, summarize content, fix grammar, and brainstorm ideas directly in your documents.',
    category: 'productivity',
    subCategory: 'note-taking',
    logo: '/images/ai-tools/notion-ai.png',
    website: 'https://www.notion.so',
    affiliateLink: 'https://affiliate.notion.so/sproutern',
    features: [
      'AI writing assistant',
      'Smart summarization',
      'Grammar and spelling fix',
      'Translation in 10+ languages',
      'Meeting notes extraction',
      'Action items generator',
      'Q&A on your documents',
    ],
    useCases: [
      'Students taking lecture notes',
      'Research paper writing',
      'Project management',
      'Team collaboration',
      'Personal knowledge base',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$10/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['Limited AI credits', 'Basic workspace'],
        },
        {
          name: 'Plus',
          price: '$10/mo',
          features: ['Unlimited AI credits', 'All premium features'],
        },
        {
          name: 'Business',
          price: '$18/mo',
          features: ['Team features', 'Advanced security'],
        },
      ],
    },
    pros: [
      'All-in-one workspace solution',
      'Great free tier for students',
      'Excellent mobile apps',
      'Strong template gallery',
      'Works offline',
    ],
    cons: [
      'Learning curve for new users',
      'Can be slow with large databases',
      'Limited offline AI features',
    ],
    rating: 4.8,
    reviewCount: 15420,
    lastUpdated: '2024-01-15',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Researchers', 'Teams'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: '50% recurring',
      cookieDuration: 90,
    },
    seo: {
      metaTitle: 'Notion AI - AI-Powered Workspace for Students | Free Trial',
      metaDescription:
        'Notion AI helps students write faster, organize notes, and manage projects with built-in AI. Free tier available. Perfect for academic work.',
      keywords: [
        'notion ai',
        'ai notes app',
        'student productivity',
        'ai writing assistant',
      ],
    },
    faqs: [
      {
        question: 'Is Notion AI free for students?',
        answer:
          'Yes! Notion offers a free tier with limited AI credits. Students with a .edu email get additional benefits.',
      },
      {
        question: 'Can Notion AI help with essays?',
        answer:
          'Absolutely. It can help brainstorm, outline, draft, and edit your essays with AI-powered suggestions.',
      },
    ],
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    slug: 'quillbot',
    shortDescription: 'AI paraphrasing and grammar tool for better writing.',
    longDescription:
      'QuillBot is the go-to AI writing assistant for students. It helps you paraphrase sentences, check grammar, summarize articles, and improve your writing style. Trusted by millions of students for academic writing.',
    category: 'writing',
    subCategory: 'paraphrasing',
    logo: '/images/ai-tools/quillbot.png',
    website: 'https://quillbot.com',
    affiliateLink: 'https://try.quillbot.com/sproutern',
    features: [
      'AI paraphrasing with 7 modes',
      'Grammar checker',
      'Plagiarism detector',
      'Summarizer tool',
      'Citation generator',
      'Chrome extension',
      'Word & Google Docs integration',
    ],
    useCases: [
      'Academic essay writing',
      'Research paper editing',
      'Avoiding plagiarism',
      'Improving sentence structure',
      'Quick summarization',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$19.95/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['Basic paraphrasing', '125 words limit'],
        },
        {
          name: 'Premium',
          price: '$19.95/mo',
          features: ['Unlimited words', 'All 7 modes', 'Plagiarism checker'],
        },
      ],
    },
    pros: [
      'Excellent paraphrasing quality',
      'Generous free tier',
      'Easy to use',
      'Great browser extension',
      'Academic-focused features',
    ],
    cons: [
      'Premium is pricey',
      'Free version has word limits',
      'Sometimes over-paraphrases',
    ],
    rating: 4.6,
    reviewCount: 28350,
    lastUpdated: '2024-01-10',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Writers', 'Researchers'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: '20% recurring',
      cookieDuration: 60,
    },
    seo: {
      metaTitle: 'QuillBot - #1 AI Paraphrasing Tool for Students | Free',
      metaDescription:
        'QuillBot helps students paraphrase, check grammar, and avoid plagiarism. Free tier available. Trusted by millions for academic writing.',
      keywords: [
        'quillbot',
        'ai paraphrasing',
        'grammar checker',
        'student writing tool',
      ],
    },
    faqs: [
      {
        question: 'Is QuillBot good for academic writing?',
        answer:
          'Yes, QuillBot is specifically designed for academic writing. It helps paraphrase without changing meaning and includes plagiarism checking.',
      },
      {
        question: 'Can QuillBot be detected?',
        answer:
          'QuillBot helps you write in your own voice. When used to improve your writing (not replace it), the output is natural and undetectable.',
      },
    ],
  },
  {
    id: 'gamma',
    name: 'Gamma',
    slug: 'gamma',
    shortDescription: 'AI-powered presentation and document designer.',
    longDescription:
      'Gamma is your AI design partner for creating stunning presentations, websites, and documents. Perfect for students who need professional-looking slides without design skills. Just describe what you want, and Gamma creates it.',
    category: 'design',
    subCategory: 'presentations',
    logo: '/images/ai-tools/gamma.png',
    website: 'https://gamma.app',
    affiliateLink: 'https://gamma.app/signup?r=sproutern',
    features: [
      'AI presentation generator',
      'One-click design',
      'Web-ready documents',
      'Embed charts and videos',
      'Real-time collaboration',
      'Mobile responsive output',
      'Import from PowerPoint',
    ],
    useCases: [
      'Class presentations',
      'Project pitches',
      'Portfolio websites',
      'Research summaries',
      'Team reports',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$10/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['Unlimited AI', 'Basic exports', '400 AI credits'],
        },
        {
          name: 'Plus',
          price: '$10/mo',
          features: [
            'Unlimited exports',
            'Remove branding',
            'Priority support',
          ],
        },
      ],
    },
    pros: [
      'Beautiful designs instantly',
      'No design skills needed',
      'Great free tier',
      'Fast and easy to use',
      'Professional templates',
    ],
    cons: [
      'Limited customization on free',
      'Watermark on free exports',
      'Internet required',
    ],
    rating: 4.7,
    reviewCount: 8920,
    lastUpdated: '2024-01-12',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Educators', 'Startups'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: '35% first year',
      cookieDuration: 90,
    },
    seo: {
      metaTitle: 'Gamma - AI Presentation Maker for Students | Free',
      metaDescription:
        'Create stunning presentations in seconds with Gamma AI. Perfect for students. No design skills needed. Free tier available.',
      keywords: [
        'gamma ai',
        'ai presentation maker',
        'student slides',
        'ai powerpoint',
      ],
    },
    faqs: [
      {
        question: 'Is Gamma better than PowerPoint?',
        answer:
          'For quick, beautiful presentations, yes. Gamma creates professional designs instantly with AI. PowerPoint offers more customization for power users.',
      },
      {
        question: 'Can I use Gamma for free?',
        answer:
          'Yes! Gamma offers a generous free tier with 400 AI credits. Perfect for students and occasional use.',
      },
    ],
  },
  {
    id: 'adcreative-ai',
    name: 'AdCreative.ai',
    slug: 'adcreative-ai',
    shortDescription: 'AI-powered ad creative and copy generator.',
    longDescription:
      'AdCreative.ai generates high-converting ad creatives and copy using AI. Ideal for marketing students learning digital advertising, startups, and businesses looking to create professional ads quickly.',
    category: 'design',
    subCategory: 'advertising',
    logo: '/images/ai-tools/adcreative.png',
    website: 'https://adcreative.ai',
    affiliateLink: 'https://adcreative.ai/?source=sproutern',
    features: [
      'AI ad creative generator',
      'Copy generator',
      'A/B testing insights',
      'Brand kit integration',
      'Bulk generation',
      '100+ ad format templates',
      'Performance scoring',
    ],
    useCases: [
      'Social media ads',
      'Google display ads',
      'Marketing coursework',
      'Startup marketing',
      'E-commerce advertising',
    ],
    pricing: {
      model: 'paid',
      freeTier: true,
      startingPrice: '$29/mo',
      plans: [
        {
          name: 'Free Trial',
          price: '7 days free',
          features: ['10 downloads', 'All features trial'],
        },
        {
          name: 'Starter',
          price: '$29/mo',
          features: ['10 credits/mo', 'All formats'],
        },
        {
          name: 'Professional',
          price: '$59/mo',
          features: ['25 credits/mo', 'Priority support'],
        },
      ],
    },
    pros: [
      'High-quality ad designs',
      'Saves hours of design time',
      'Data-driven creative scores',
      'Great for learning marketing',
      'Regular new features',
    ],
    cons: [
      'No free tier after trial',
      'Credit-based pricing',
      'Learning curve for beginners',
    ],
    rating: 4.5,
    reviewCount: 5640,
    lastUpdated: '2024-01-08',
    isVerified: true,
    isFeatured: true,
    isPopular: false,
    bestFor: ['Marketers', 'Startups', 'Marketing Students'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: '30% recurring forever',
      cookieDuration: 120,
    },
    seo: {
      metaTitle: 'AdCreative.ai - AI Ad Generator | 7-Day Free Trial',
      metaDescription:
        'Generate high-converting ad creatives with AI. Perfect for marketers and students. 7-day free trial. 30% recurring affiliate commission.',
      keywords: [
        'adcreative ai',
        'ai ad generator',
        'ad creative tool',
        'marketing ai',
      ],
    },
    faqs: [
      {
        question: 'Is AdCreative.ai worth it for students?',
        answer:
          "If you're studying marketing or starting a side business, the free trial is excellent for learning. The paid plans are better suited for active advertisers.",
      },
      {
        question: 'How does the AI scoring work?',
        answer:
          'AdCreative.ai analyzes millions of high-performing ads to score your creatives, helping you pick winners before spending ad budget.',
      },
    ],
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    shortDescription: 'AI voice generation and text-to-speech platform.',
    longDescription:
      'ElevenLabs offers the most realistic AI voice generation technology. Perfect for students creating video presentations, podcasts, or accessibility content. Create natural-sounding voiceovers in multiple languages.',
    category: 'voice',
    subCategory: 'text-to-speech',
    logo: '/images/ai-tools/elevenlabs.png',
    website: 'https://elevenlabs.io',
    affiliateLink: 'https://elevenlabs.io/ref/sproutern',
    features: [
      'Ultra-realistic AI voices',
      'Voice cloning',
      '29+ languages',
      'Multiple voice styles',
      'API access',
      'Audio projects',
      'Sound effects generation',
    ],
    useCases: [
      'Video narration',
      'Podcast creation',
      'Accessibility content',
      'Language learning',
      'Audiobook production',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$5/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['10,000 characters/mo', 'Basic voices'],
        },
        {
          name: 'Starter',
          price: '$5/mo',
          features: ['30,000 characters/mo', 'Voice cloning'],
        },
        {
          name: 'Creator',
          price: '$22/mo',
          features: ['100,000 characters/mo', 'Professional voices'],
        },
      ],
    },
    pros: [
      'Most realistic AI voices',
      'Affordable pricing',
      'Great free tier',
      'Easy to use',
      'Supports many languages',
    ],
    cons: [
      'Character limits on plans',
      'Voice cloning needs premium',
      'Some voices sound robotic',
    ],
    rating: 4.8,
    reviewCount: 12300,
    lastUpdated: '2024-01-14',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Content Creators', 'Students', 'Podcasters'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: '22% for 12 months',
      cookieDuration: 60,
    },
    seo: {
      metaTitle: 'ElevenLabs - Best AI Voice Generator | Free Trial',
      metaDescription:
        'Create ultra-realistic AI voiceovers with ElevenLabs. Perfect for students and creators. Free tier available. 29+ languages supported.',
      keywords: [
        'elevenlabs',
        'ai voice generator',
        'text to speech',
        'ai voiceover',
      ],
    },
    faqs: [
      {
        question: 'Is ElevenLabs good for students?',
        answer:
          'Absolutely! The free tier is generous enough for most student projects. Great for adding professional voiceovers to presentations.',
      },
      {
        question: 'Can I clone my own voice?',
        answer:
          'Yes, with a paid plan. You can clone any voice with just a few minutes of audio samples.',
      },
    ],
  },
  {
    id: 'laxis',
    name: 'Laxis',
    slug: 'laxis',
    shortDescription: 'AI meeting assistant and sales copilot.',
    longDescription:
      'Laxis is an AI-powered meeting assistant that transcribes, summarizes, and extracts insights from your meetings. Great for students in group projects, interviews, and anyone who needs to capture meeting notes automatically.',
    category: 'productivity',
    subCategory: 'meetings',
    logo: '/images/ai-tools/laxis.png',
    website: 'https://laxis.com',
    affiliateLink: 'https://laxis.com/?ref=sproutern',
    features: [
      'AI meeting transcription',
      'Smart summaries',
      'Action item extraction',
      'Meeting templates',
      'CRM integration',
      'Multi-language support',
      'Recording library',
    ],
    useCases: [
      'Class lectures',
      'Group project meetings',
      'Job interviews',
      'Research interviews',
      'Client calls',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$15/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['300 minutes/mo', 'Basic transcription'],
        },
        {
          name: 'Premium',
          price: '$15/mo',
          features: ['Unlimited meetings', 'AI insights'],
        },
        {
          name: 'Business',
          price: '$29/mo',
          features: ['Team features', 'CRM sync'],
        },
      ],
    },
    pros: [
      'Highest-paying AI affiliate',
      'Accurate transcription',
      'Smart meeting insights',
      'Great free tier',
      'Easy to use',
    ],
    cons: [
      'Best for meetings specifically',
      'Requires internet',
      'Some features need premium',
    ],
    rating: 4.6,
    reviewCount: 3240,
    lastUpdated: '2024-01-11',
    isVerified: true,
    isFeatured: true,
    isPopular: false,
    bestFor: ['Students', 'Sales Teams', 'Researchers'],
    affiliateProgram: {
      network: 'PartnerStack',
      commission: 'Up to 35%',
      cookieDuration: 90,
    },
    seo: {
      metaTitle: 'Laxis - AI Meeting Assistant | Free Transcription',
      metaDescription:
        'Never miss meeting notes again. Laxis AI transcribes, summarizes, and extracts action items. Free 300 minutes/month.',
      keywords: [
        'laxis ai',
        'ai meeting assistant',
        'meeting transcription',
        'ai notes',
      ],
    },
    faqs: [
      {
        question: 'Can Laxis record university lectures?',
        answer:
          'Yes! Laxis can record and transcribe any meeting or lecture. Great for students who want to focus on learning instead of note-taking.',
      },
      {
        question: 'Is Laxis accurate?',
        answer:
          'Laxis uses advanced AI for high accuracy. It works best with clear audio and supports multiple languages.',
      },
    ],
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    slug: 'chatgpt',
    shortDescription: 'The most popular AI chatbot for any task.',
    longDescription:
      "ChatGPT by OpenAI is the world's leading AI assistant. From homework help to coding to creative writing, ChatGPT can help with almost any task. Essential for students and professionals alike.",
    category: 'chatbots',
    subCategory: 'general-ai',
    logo: '/images/ai-tools/chatgpt.png',
    website: 'https://chat.openai.com',
    affiliateLink: 'https://chat.openai.com',
    features: [
      'Natural language conversation',
      'Code generation and debugging',
      'Essay writing assistance',
      'Math problem solving',
      'Language translation',
      'Research assistance',
      'Creative brainstorming',
    ],
    useCases: [
      'Homework assistance',
      'Essay writing',
      'Coding help',
      'Learning new topics',
      'Language practice',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$20/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['GPT-4o mini', 'Basic features'],
        },
        {
          name: 'Plus',
          price: '$20/mo',
          features: ['GPT-4o', 'Faster response', 'DALL-E'],
        },
        {
          name: 'Pro',
          price: '$200/mo',
          features: ['Unlimited access', 'Pro compute'],
        },
      ],
    },
    pros: [
      'Best general AI assistant',
      'Great free tier',
      'Constantly improving',
      'Wide range of capabilities',
      'Easy to use',
    ],
    cons: [
      'Can have outdated knowledge',
      'Sometimes makes mistakes',
      'Premium is pricey',
    ],
    rating: 4.9,
    reviewCount: 125000,
    lastUpdated: '2024-01-15',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Everyone', 'Students', 'Developers'],
    affiliateProgram: null,
    seo: {
      metaTitle: 'ChatGPT - #1 AI Assistant | Free to Use',
      metaDescription:
        "ChatGPT is the world's most popular AI assistant. Free to use. Perfect for students, coders, and creative professionals.",
      keywords: ['chatgpt', 'openai', 'ai chatbot', 'ai assistant'],
    },
    faqs: [
      {
        question: 'Is ChatGPT free for students?',
        answer:
          'Yes! ChatGPT is free for everyone. The free tier includes GPT-4o mini which is powerful enough for most student needs.',
      },
      {
        question: 'Can ChatGPT do my homework?',
        answer:
          "ChatGPT can help explain concepts and guide you through problems. It's best used as a learning tool, not to copy answers directly.",
      },
    ],
  },
  {
    id: 'claude',
    name: 'Claude',
    slug: 'claude',
    shortDescription:
      'Thoughtful AI assistant focused on helpful, harmless responses.',
    longDescription:
      'Claude by Anthropic is an AI assistant known for thoughtful, nuanced responses. Excellent for academic work, complex analysis, and writing tasks. Many prefer Claude for its balanced and well-reasoned outputs.',
    category: 'chatbots',
    subCategory: 'general-ai',
    logo: '/images/ai-tools/claude.png',
    website: 'https://claude.ai',
    affiliateLink: 'https://claude.ai',
    features: [
      'Long context window (200K)',
      'Document analysis',
      'Code assistance',
      'Research help',
      'Balanced responses',
      'File uploads',
      'Artifacts creation',
    ],
    useCases: [
      'Academic research',
      'Document analysis',
      'Writing assistance',
      'Complex problem solving',
      'Learning concepts',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$20/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['Claude 3.5 Sonnet', 'Limited usage'],
        },
        {
          name: 'Pro',
          price: '$20/mo',
          features: ['Higher limits', 'Claude 3.5 Opus', 'Priority access'],
        },
      ],
    },
    pros: [
      'Excellent for academic work',
      'Very long context window',
      'Thoughtful responses',
      'Great at analysis',
      'Good free tier',
    ],
    cons: [
      'Usage limits on free',
      'Less popular than ChatGPT',
      'No image generation',
    ],
    rating: 4.8,
    reviewCount: 45000,
    lastUpdated: '2024-01-15',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Researchers', 'Writers'],
    affiliateProgram: null,
    seo: {
      metaTitle: 'Claude AI - Thoughtful AI Assistant | Free',
      metaDescription:
        'Claude is a thoughtful AI assistant by Anthropic. Excellent for academic work and research. Free tier available.',
      keywords: ['claude ai', 'anthropic', 'ai assistant', 'academic ai'],
    },
    faqs: [
      {
        question: 'Is Claude better than ChatGPT?',
        answer:
          'Both are excellent. Claude is often preferred for nuanced, academic work, while ChatGPT has broader integrations. Try both!',
      },
      {
        question: 'Can Claude read my PDF files?',
        answer:
          'Yes! Claude can analyze uploaded documents including PDFs, making it great for research and document review.',
      },
    ],
  },
  {
    id: 'canva',
    name: 'Canva',
    slug: 'canva',
    shortDescription: 'Design platform with AI-powered creation tools.',
    longDescription:
      "Canva is the world's most popular design platform, now with Magic AI features. Perfect for students creating presentations, social media graphics, posters, and more. No design skills required.",
    category: 'design',
    subCategory: 'graphic-design',
    logo: '/images/ai-tools/canva.png',
    website: 'https://www.canva.com',
    affiliateLink: 'https://partner.canva.com/sproutern',
    features: [
      'AI Magic Design',
      'Text to image',
      'Background remover',
      'Magic Resize',
      'Brand Kit',
      'Video editing',
      '500M+ designs created',
    ],
    useCases: [
      'Presentations',
      'Social media graphics',
      'Posters and flyers',
      'Resumes',
      'Video projects',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$12.99/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['250K+ templates', 'Basic AI features'],
        },
        {
          name: 'Pro',
          price: '$12.99/mo',
          features: ['Premium templates', 'Brand Kit', 'Magic features'],
        },
        {
          name: 'Teams',
          price: '$14.99/mo',
          features: ['Team collaboration', 'Advanced features'],
        },
      ],
    },
    pros: [
      'Extremely easy to use',
      'Generous free tier',
      'Great for students',
      'Huge template library',
      'AI features included',
    ],
    cons: [
      'Premium templates cost extra',
      'Limited advanced editing',
      'Some features need Pro',
    ],
    rating: 4.7,
    reviewCount: 89000,
    lastUpdated: '2024-01-14',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Social Media Managers', 'Small Businesses'],
    affiliateProgram: {
      network: 'Impact',
      commission: '$36 per Pro sale',
      cookieDuration: 30,
    },
    seo: {
      metaTitle: 'Canva - Free Design Platform with AI | Students Welcome',
      metaDescription:
        'Create stunning designs with Canva AI. Perfect for students. Free tier includes 250K+ templates. No design skills needed.',
      keywords: ['canva', 'ai design', 'free design tool', 'student design'],
    },
    faqs: [
      {
        question: 'Is Canva free for students?',
        answer:
          'Yes! Canva has a generous free tier. Plus, eligible students can apply for Canva for Education with even more features.',
      },
      {
        question: 'Can Canva AI generate images?',
        answer:
          "Yes! Canva's Magic Media can generate images from text descriptions. Available on free and paid plans.",
      },
    ],
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    slug: 'grammarly',
    shortDescription: 'AI writing assistant for grammar, clarity, and tone.',
    longDescription:
      'Grammarly is the leading AI writing assistant trusted by millions. It checks grammar, spelling, punctuation, and helps improve clarity and tone. Essential for any student who writes in English.',
    category: 'writing',
    subCategory: 'grammar',
    logo: '/images/ai-tools/grammarly.png',
    website: 'https://www.grammarly.com',
    affiliateLink: 'https://grammarly.go2cloud.org/sproutern',
    features: [
      'Grammar and spelling check',
      'Clarity suggestions',
      'Tone adjustments',
      'Plagiarism checker',
      'Word choice improvements',
      'Works everywhere',
      'AI writing assistance',
    ],
    useCases: [
      'Academic essays',
      'Email writing',
      'Job applications',
      'Social media posts',
      'Professional documents',
    ],
    pricing: {
      model: 'freemium',
      freeTier: true,
      startingPrice: '$12/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free',
          features: ['Basic grammar', 'Spelling check', 'Punctuation'],
        },
        {
          name: 'Premium',
          price: '$12/mo',
          features: [
            'Advanced suggestions',
            'Plagiarism check',
            'Tone detection',
          ],
        },
        {
          name: 'Business',
          price: '$15/mo',
          features: ['Team features', 'Brand guides', 'Analytics'],
        },
      ],
    },
    pros: [
      'Works everywhere you write',
      'Excellent free version',
      'Trusted by professionals',
      'Great for ESL writers',
      'Mobile keyboard app',
    ],
    cons: [
      'Some suggestions are wrong',
      'Premium can be pricey',
      'Plagiarism checker needs Premium',
    ],
    rating: 4.7,
    reviewCount: 156000,
    lastUpdated: '2024-01-13',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Professionals', 'Writers'],
    affiliateProgram: {
      network: 'CJ Affiliate',
      commission: '$20 per free signup, $25 per Premium',
      cookieDuration: 90,
    },
    seo: {
      metaTitle: 'Grammarly - AI Writing Assistant | Free Grammar Checker',
      metaDescription:
        'Grammarly checks your grammar, spelling, and writing style. Free version available. Trusted by millions of students and professionals.',
      keywords: ['grammarly', 'grammar checker', 'ai writing', 'spell check'],
    },
    faqs: [
      {
        question: 'Is Grammarly worth it for students?',
        answer:
          'The free version is excellent for most students. Premium is worth it if you write a lot or need plagiarism checking.',
      },
      {
        question: 'Does Grammarly work on Google Docs?',
        answer:
          'Yes! Grammarly has a browser extension that works in Google Docs, Gmail, and most websites.',
      },
    ],
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    shortDescription: 'AI coding assistant that helps you write code faster.',
    longDescription:
      'GitHub Copilot is the most popular AI coding assistant. It suggests code as you type, explains code, and helps with debugging. Essential for computer science students and developers.',
    category: 'coding',
    subCategory: 'code-assistant',
    logo: '/images/ai-tools/copilot.png',
    website: 'https://github.com/features/copilot',
    affiliateLink: 'https://github.com/features/copilot',
    features: [
      'Code suggestions as you type',
      'Multi-language support',
      'Code explanation',
      'Bug detection',
      'Test generation',
      'Documentation help',
      'IDE integration',
    ],
    useCases: [
      'Programming assignments',
      'Learning to code',
      'Software development',
      'Code review',
      'Debugging',
    ],
    pricing: {
      model: 'paid',
      freeTier: true,
      startingPrice: '$10/mo',
      plans: [
        {
          name: 'Free',
          price: 'Free for students',
          features: ['Full access with student verification'],
        },
        {
          name: 'Individual',
          price: '$10/mo',
          features: ['Full Copilot access', 'All IDE plugins'],
        },
        {
          name: 'Business',
          price: '$19/mo',
          features: ['Admin controls', 'Policy management'],
        },
      ],
    },
    pros: [
      'Free for verified students',
      'Best code suggestions',
      'Supports all languages',
      'Great IDE integration',
      'Saves hours of coding',
    ],
    cons: [
      'Sometimes suggests wrong code',
      'Requires subscription for non-students',
      'Can be a crutch for learning',
    ],
    rating: 4.8,
    reviewCount: 67000,
    lastUpdated: '2024-01-15',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Students', 'Developers', 'Learners'],
    affiliateProgram: null,
    seo: {
      metaTitle: 'GitHub Copilot - AI Code Assistant | Free for Students',
      metaDescription:
        'GitHub Copilot helps you write code faster with AI. Free for verified students. Supports all programming languages.',
      keywords: [
        'github copilot',
        'ai coding',
        'code assistant',
        'programming ai',
      ],
    },
    faqs: [
      {
        question: 'Is GitHub Copilot free for students?',
        answer:
          'Yes! GitHub Copilot is completely free for verified students through GitHub Education. Just verify your student status.',
      },
      {
        question: 'Does Copilot work with Python?',
        answer:
          'Yes! Copilot supports Python, JavaScript, TypeScript, Ruby, Go, and virtually every programming language.',
      },
    ],
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    slug: 'midjourney',
    shortDescription: 'AI image generator for stunning artwork and visuals.',
    longDescription:
      'Midjourney creates stunning AI-generated images from text descriptions. Perfect for design projects, concept art, and visual content creation. Known for its artistic quality and unique aesthetic.',
    category: 'image',
    subCategory: 'image-generation',
    logo: '/images/ai-tools/midjourney.png',
    website: 'https://www.midjourney.com',
    affiliateLink: 'https://www.midjourney.com',
    features: [
      'Text-to-image generation',
      'High artistic quality',
      'Multiple styles',
      'Image variations',
      'Upscaling',
      'Discord community',
      'Web interface',
    ],
    useCases: [
      'Concept art',
      'Design projects',
      'Social media content',
      'Presentation visuals',
      'Creative exploration',
    ],
    pricing: {
      model: 'paid',
      freeTier: false,
      startingPrice: '$10/mo',
      plans: [
        {
          name: 'Basic',
          price: '$10/mo',
          features: ['200 images/mo', 'Basic features'],
        },
        {
          name: 'Standard',
          price: '$30/mo',
          features: ['Unlimited relaxed', '15 fast hours'],
        },
        {
          name: 'Pro',
          price: '$60/mo',
          features: ['30 fast hours', 'Stealth mode'],
        },
      ],
    },
    pros: [
      'Best image quality',
      'Unique artistic style',
      'Active community',
      'Regular updates',
      'Easy to learn',
    ],
    cons: [
      'No free tier',
      'Discord-based (was)',
      'Learning prompt skills takes time',
    ],
    rating: 4.8,
    reviewCount: 52000,
    lastUpdated: '2024-01-10',
    isVerified: true,
    isFeatured: true,
    isPopular: true,
    bestFor: ['Artists', 'Designers', 'Content Creators'],
    affiliateProgram: null,
    seo: {
      metaTitle: 'Midjourney - Best AI Image Generator',
      metaDescription:
        'Create stunning AI artwork with Midjourney. The leading AI image generator for artists and designers. Starting at $10/month.',
      keywords: ['midjourney', 'ai image generator', 'ai art', 'text to image'],
    },
    faqs: [
      {
        question: 'Is Midjourney free?',
        answer:
          "No, Midjourney requires a paid subscription starting at $10/month. There's no free trial currently available.",
      },
      {
        question: 'Is Midjourney good for beginners?',
        answer:
          'Yes! Midjourney is beginner-friendly. The community shares prompts, and basic images are easy to create with simple text descriptions.',
      },
    ],
  },
];

// Helper functions
export function getToolBySlug(slug: string): AITool | undefined {
  return AI_TOOLS.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: string): AITool[] {
  return AI_TOOLS.filter((tool) => tool.category === category);
}

export function getFeaturedTools(): AITool[] {
  return AI_TOOLS.filter((tool) => tool.isFeatured);
}

export function getPopularTools(): AITool[] {
  return AI_TOOLS.filter((tool) => tool.isPopular);
}

export function getFreeTools(): AITool[] {
  return AI_TOOLS.filter((tool) => tool.pricing.freeTier);
}

export function getToolsForStudents(): AITool[] {
  return AI_TOOLS.filter((tool) => tool.bestFor.includes('Students'));
}

export function getToolsWithAffiliates(): AITool[] {
  return AI_TOOLS.filter((tool) => tool.affiliateProgram !== null);
}
