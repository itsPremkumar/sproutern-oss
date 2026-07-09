// AI Smart Chatbot Flow

import { ai, isGoogleAIKeyAvailable } from '@/ai/genkit';
import { z } from 'zod';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { optimizeResume } from './ai-resume-optimizer';
import { findBestMatch } from 'string-similarity';

const SmartChatbotInputSchema = z.object({
  userQuery: z
    .string()
    .describe('The user query about Sproutern or internships.'),
  chatbotName: z
    .string()
    .describe('The name of the chatbot for this conversation.'),
  userName: z.string().optional().describe('The name of the logged-in user.'),
  resumeText: z
    .string()
    .optional()
    .describe("The text content of a user's uploaded resume."),
  isNewUpload: z
    .boolean()
    .optional()
    .describe('Flag to indicate if a resume was just uploaded.'),
});
export type SmartChatbotInput = z.infer<typeof SmartChatbotInputSchema>;

const SmartChatbotOutputSchema = z.object({
  botResponse: z.string().describe('The full chatbot response.'),
});
export type SmartChatbotOutput = z.infer<typeof SmartChatbotOutputSchema>;

export async function smartChatbot(
  input: SmartChatbotInput,
): Promise<SmartChatbotOutput> {
  if (!isGoogleAIKeyAvailable) {
    console.error(
      '[Genkit Flow] smartChatbot: GOOGLE_API_KEY is not configured.',
    );
    return {
      botResponse:
        "I'm sorry, but the AI service is not configured correctly. Please try again later.",
    };
  }
  try {
    const response = await smartChatbotFlow(input);
    return response;
  } catch (e: any) {
    console.error('[Genkit Flow] smartChatbot: Error during AI generation:', e);
    const errorMessage = e.message || 'an unknown error occurred';
    return {
      botResponse: `I'm sorry, I encountered an internal error while processing your request. Please try again later.`,
    };
  }
}

const getInternshipInfo = ai.defineTool(
  {
    name: 'getInternshipInfo',
    description:
      'Returns a user-friendly string with real-time data about internships available on the platform.',
    inputSchema: z.object({}),
    outputSchema: z.string(),
  },
  async () => {
    console.log('[Genkit Tool] getInternshipInfo: Invoked.');
    if (!db) {
      console.error(
        '[Genkit Tool] getInternshipInfo: Database not configured.',
      );
      return "I'm sorry, I can't connect to the database right now to check for internships.";
    }
    try {
      const internshipsCollection = collection(db, 'internships');
      const allInternshipsSnapshot = await getDocs(internshipsCollection);
      const count = allInternshipsSnapshot.size;

      if (count === 0) {
        return 'There are currently no open internships on Sproutern. Please check back soon!';
      }

      const latestInternshipsQuery = query(
        internshipsCollection,
        orderBy('postedAt', 'desc'),
        limit(3),
      );
      const latestSnapshot = await getDocs(latestInternshipsQuery);
      const latestJobTitles = latestSnapshot.docs.map(
        (doc) => doc.data().jobTitle,
      );

      let response = `There are currently ${count} open internships available on Sproutern.`;
      if (latestJobTitles.length > 0) {
        const titles = latestJobTitles.map((title) => `'${title}'`).join(', ');
        response += ` Some of the latest openings include: ${titles}.`;
      }
      response += '\nYou can view them all on the internships page.';
      return response;
    } catch (e) {
      console.error(
        '[Genkit Tool] getInternshipInfo: Error fetching internship info:',
        e,
      );
      return 'I encountered an error while trying to fetch internship information. Please try again later.';
    }
  },
);

const ResumeOptimizerToolInputSchema = z.object({
  resumeText: z.string().describe('The raw text content of the user resume.'),
  jobDescription: z
    .string()
    .optional()
    .describe('The job description to tailor the resume to.'),
});

const resumeOptimizerTool = ai.defineTool(
  {
    name: 'resumeOptimizerTool',
    description:
      "Optimizes a user's resume. Use this tool for feedback, rewriting, or tailoring the resume to a job.",
    inputSchema: ResumeOptimizerToolInputSchema,
    outputSchema: z
      .string()
      .describe(
        'A formatted string with the rating, feedback, and optimized resume.',
      ),
  },
  async (input) => {
    console.log(
      '[Genkit Tool] resumeOptimizerTool: Invoked with input:',
      input,
    );
    try {
      const result = await optimizeResume(input);
      return `I've analyzed your resume. Here's my feedback and the optimized version:

**📝 Resume Analysis**
- **Rating:** ${result.rating}/10
- **Feedback:** ${result.feedback}

---

**✨ Optimized Resume**

${result.optimizedResumeText}`;
    } catch (error: any) {
      console.error('[Genkit Tool] resumeOptimizerTool: Error:', error);
      return (
        'I had trouble analyzing the resume. Please ensure the full text is provided. ' +
        error.message
      );
    }
  },
);

const smartChatbotPrompt = ai.definePrompt({
  name: 'smartChatbotPrompt',
  input: { schema: SmartChatbotInputSchema },
  output: { schema: SmartChatbotOutputSchema },
  tools: [getInternshipInfo, resumeOptimizerTool],
  model: 'googleai/gemini-2.0-flash',
  prompt: `You are {{chatbotName}}, a friendly and helpful AI assistant for the Sproutern platform.

{{#if userName}}
The user you're chatting with is {{userName}}. Greet them by name and be friendly.
{{else}}
Just greet with "Hello!".
{{/if}}

You help users with:
- Exploring internships
- Resume reviews and optimization
- Info about Sproutern or its founder

{{#if isNewUpload}}
Thanks, I've got your resume.
{{/if}}

{{#if resumeText}}
You are now acting as a resume coach.

<RESUME_CONTEXT>
{{{resumeText}}}
</RESUME_CONTEXT>

**Tool Usage with Resume:**
- Use \`resumeOptimizerTool\` for reviews or optimizations.
- If a user asks about their own experience, respond only using content inside <RESUME_CONTEXT>.
{{else}}
**Tool Usage without Resume:**
- If asked to review a resume, ask the user to upload one.
- For internship-related questions, use \`getInternshipInfo\`.
{{/if}}

Use markdown formatting:
- Bold important titles
- Bullet points for lists

---
User's query: {{{userQuery}}}`,
  config: {
    safetySettings: [
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const smartChatbotFlow = ai.defineFlow(
  {
    name: 'smartChatbotFlow',
    inputSchema: SmartChatbotInputSchema,
    outputSchema: SmartChatbotOutputSchema,
  },
  async (input) => {
    const directAnswer = await getDirectAnswer(input.userQuery);
    if (directAnswer) return { botResponse: directAnswer };

    const { output } = await smartChatbotPrompt(input);
    if (!output) throw new Error('AI did not return a valid response.');
    return output;
  },
);

async function getDirectAnswer(query: string): Promise<string | null> {
  const knowledgeBase: Record<string, string> = {
    // 🔥 New founder questions
    'who is premkumar':
      'Premkumar is the founder of Sproutern, a passionate developer and entrepreneur dedicated to helping students launch their careers.',
    'what does premkumar do':
      'Premkumar is a developer, and startup founder who built the Sproutern platform.',
    "what is premkumar's background":
      'Premkumar is the founder of Sproutern with a background in technology and entrepreneurship.',
    'what is premkumar known for':
      'Premkumar is known for creating Sproutern, a platform to connect students with startup internships.',
    "what is premkumar's role in sproutern":
      'Premkumar is the founder, developer, and product strategist behind Sproutern.',
    'how old is premkumar':
      'Premkumar is a student and entrepreneur. His exact age is not publicly listed.',
    'where is premkumar from': 'Premkumar is from India.',
    'what inspired premkumar':
      'He wanted to help students like himself gain experience through meaningful startup internships.',
    'is premkumar a developer':
      'Yes, Premkumar is a full-stack developer and built Sproutern using modern web technologies.',
    'did premkumar build this site':
      'Yes, he built and designed the Sproutern platform entirely from scratch.',
    'is premkumar a student':
      'Yes, he is a student and entrepreneur.',
    'does premkumar help students':
      'Yes, he created Sproutern to help students discover internships and gain real-world experience.',
    'how did premkumar build sproutern':
      'He used technologies like Next.js, Firebase, Genkit, and Google Cloud to build it.',

    // 🌱 About Sproutern
    'what is sproutern':
      'Sproutern is a platform that connects students with startups for internships.',
    sproutern:
      'Sproutern is a student-startup internship platform that helps students gain real-world experience.',
    'how does sproutern work':
      'Students create profiles and get matched to startups offering internships.',
    'is sproutern free':
      'Yes, Sproutern is free for students to explore and apply for internships.',
    'what is the mission of sproutern':
      'Sproutern aims to empower students by connecting them with startups.',
    'where is sproutern based':
      'Sproutern is an online platform built by a student at MIT Chennai.',
    'is sproutern for startups':
      'Yes, startups can register to find interns based on skill match.',
    'what technologies are used':
      'Sproutern uses Next.js, Firebase, and Google Cloud for development.',

    // 💼 Internships
    'what internships are available':
      'There are currently multiple open internships. You can view them on the internships page.',
    'how many internships are there':
      'There are several active internships, including roles in tech, marketing, and design.',
    'how to apply for an internship':
      'Log in to your Sproutern account, browse internships, and click apply.',
    'who can apply for internships':
      'Any student or fresher with relevant skills can apply through Sproutern.',
    'does sproutern support remote internships':
      'Yes, many of the internships listed are remote-friendly.',
    'can i get a certificate':
      'Yes, internships completed through Sproutern come with a certificate.',

    // 📄 Resume & Career Support
    'can i upload my resume':
      'Yes, you can upload your resume, in the ai resume optimizer.',
    'how to optimize my resume':
      'Upload your resume in the ai resume optimizer.',

    // 🧑 About Prem & Founder
    'who is the founder':
      'The founder is Premkumar, a student at Madras Institute of Technology.',
    'who created sproutern':
      'Sproutern was created by M. Premkumar, a B.Tech IT student.',
    'who is prem':
      'Premkumar is the creator of Sproutern and a student at Madras Institute of Technology.',
    prem: 'Prem is the founder and developer of Sproutern. He is an IT student at MIT, Chennai.',
    'who built this chatbot':
      'The chatbot was built by Premkumar using Google AI and Genkit with Firebase integration.',

    // 🤖 Chatbot Personality

    avatar:
      "You're currently chatting with a virtual AI assistant. I don't have a face, but I do have brains!",
    'prem chatbot avatar':
      "Hello! I'm the Sproutern assistant created by Premkumar. Ask me anything about internships or resumes!",

    // 🛠️ Support

    'what can you do': `Here’s what I can help with:
**🔍 Internship Search**
- Discover open internships on Sproutern

**📄 Resume Assistance**
- Optimize, review, or rewrite your resume

**ℹ️ Platform Information**
- Learn more about Sproutern and its founder

**💬 Fun & Casual Chat**
- I can answer fun questions too!`,
    help: 'You can ask me about internships, resumes, or Sproutern. Upload your resume for personalized coaching.',
    chatbot:
      "I'm your friendly AI assistant here to help with internships, resumes, and all things Sproutern!",
  };

  const queryLower = query.toLowerCase();
  const keys = Object.keys(knowledgeBase);
  const { bestMatch } = findBestMatch(queryLower, keys);
  const SIMILARITY_THRESHOLD = 0.7;

  if (bestMatch.rating > SIMILARITY_THRESHOLD) {
    console.log(
      `[Direct Answer] Match: "${bestMatch.target}" (${bestMatch.rating})`,
    );
    return knowledgeBase[bestMatch.target];
  }

  return null;
}
