import { NextRequest } from 'next/server';
import { z } from 'zod';
import { ai, isGoogleAIKeyAvailable } from '@/ai/genkit';
import { optimizeResume } from '@/ai/flows/ai-resume-optimizer';

// ─────────────────────────────────────────────────────────────────────────────
// Streaming Chat API Route — Pillar 2
// Implements Server-Sent Events (SSE) for real-time AI streaming.
// Supports function calling: the AI can execute tools mid-conversation.
// ─────────────────────────────────────────────────────────────────────────────

const ChatRequestSchema = z.object({
  message: z.string().min(1).max(5000),
  resumeText: z.string().optional(),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      }),
    )
    .optional()
    .default([]),
});

type ChatRequest = z.infer<typeof ChatRequestSchema>;

// ── Tool Definitions (Genkit Function Calling) ────────────────────────────
const resumeOptimizerTool = ai.defineTool(
  {
    name: 'analyzeResume',
    description:
      'Analyze and optimize a resume. Returns a rating, feedback, and rewritten version. Use when the user asks to review, optimize, or improve their resume.',
    inputSchema: z.object({
      resumeText: z.string().describe('The raw text of the resume to optimize'),
      jobDescription: z
        .string()
        .optional()
        .describe('Optional job description to tailor the resume to'),
    }),
    outputSchema: z.object({
      rating: z.number().describe('Resume quality rating 1-10'),
      feedback: z.string().describe('Brief constructive feedback'),
      optimizedResumeText: z
        .string()
        .describe('The rewritten ATS-friendly resume'),
    }),
  },
  async (input) => {
    const result = await optimizeResume(input);
    return result;
  },
);

const salaryLookupTool = ai.defineTool(
  {
    name: 'lookupSalary',
    description:
      'Look up salary information for a role at a company. Use when users ask about salaries, compensation, or pay.',
    inputSchema: z.object({
      role: z.string().describe('Job role/title'),
      company: z.string().optional().describe('Company name'),
      country: z.string().optional().describe('Country code (IN, US, GB etc)'),
    }),
    outputSchema: z.object({
      role: z.string(),
      company: z.string(),
      minSalary: z.string(),
      maxSalary: z.string(),
      currency: z.string(),
      source: z.string(),
    }),
  },
  async (input) => {
    // Static salary data — in production, replace with Firestore lookup
    const salaryData: Record<string, { min: number; max: number }> = {
      'sde-tcs': { min: 350000, max: 700000 },
      'sde-infosys': { min: 360000, max: 800000 },
      'sde-wipro': { min: 350000, max: 650000 },
      'sde-cognizant': { min: 400000, max: 900000 },
      'sde-accenture': { min: 450000, max: 1000000 },
    };

    const key = `${input.role.toLowerCase().replace(/\s+/g, '-')}-${(input.company || 'tcs').toLowerCase()}`;
    const data = salaryData[key] || { min: 300000, max: 600000 };
    const currency =
      input.country === 'US' ? 'USD' : input.country === 'GB' ? 'GBP' : 'INR';

    return {
      role: input.role,
      company: input.company || 'Various Companies',
      minSalary: `${data.min}`,
      maxSalary: `${data.max}`,
      currency,
      source: 'Sproutern Salary Database',
    };
  },
);

// ── System Prompt ─────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Sproutern AI, a world-class career assistant for students and freshers.

Your capabilities:
1. **Resume Analysis**: Use the \`analyzeResume\` tool to physically analyze resumes. Always call the tool — never fake results.
2. **Salary Lookup**: Use the \`lookupSalary\` tool to find real salary data.
3. **Career Guidance**: Provide actionable interview tips, career planning, and job search strategies.

Rules:
- Be encouraging, specific, and data-driven.
- Use markdown formatting (bold, bullets, headers).
- When a resume is provided, ALWAYS call \`analyzeResume\` before responding.
- Never fabricate salary numbers — use the \`lookupSalary\` tool.
- Keep responses concise and actionable (under 500 words unless tool output is longer).`;

// ── POST Handler — Streaming SSE ──────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Validate API key
  if (!isGoogleAIKeyAvailable) {
    return new Response(
      JSON.stringify({ error: 'AI service not configured' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Parse and validate input
  let body: ChatRequest;
  try {
    const raw = await request.json();
    body = ChatRequestSchema.parse(raw);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Invalid request body' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    );
  }

  // Read geo context from Edge middleware headers
  const userCountry = request.headers.get('x-user-country') ?? 'IN';
  const userCurrency = request.headers.get('x-user-currency') ?? 'INR';

  // Build Genkit chat history
  const history = body.history.map((msg) => ({
    role: msg.role as 'user' | 'model',
    content: [{ text: msg.content }],
  }));

  // Augment user message with context
  let augmentedMessage = body.message;
  if (body.resumeText) {
    augmentedMessage += `\n\n<RESUME_CONTEXT>\n${body.resumeText}\n</RESUME_CONTEXT>`;
  }
  augmentedMessage += `\n\n[User Region: ${userCountry}, Currency: ${userCurrency}]`;

  // ── Create SSE stream ─────────────────────────────────────────────────
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        // Use Genkit generate with streaming
        const { stream: aiStream, response: responsePromise } =
          await ai.generateStream({
            system: SYSTEM_PROMPT,
            messages: [
              ...history,
              { role: 'user', content: [{ text: augmentedMessage }] },
            ],
            tools: [resumeOptimizerTool, salaryLookupTool],
            config: {
              temperature: 0.7,
              maxOutputTokens: 4096,
            },
          });

        // Stream chunks as SSE events
        for await (const chunk of aiStream) {
          const text = chunk.text;
          if (text) {
            const sseData = `data: ${JSON.stringify({ type: 'text', content: text })}\n\n`;
            controller.enqueue(encoder.encode(sseData));
          }
        }

        // Wait for complete response (includes tool call results)
        const finalResponse = await responsePromise;
        const fullText = finalResponse.text;

        // Send completion event
        const doneEvent = `data: ${JSON.stringify({
          type: 'done',
          content: fullText,
          usage: finalResponse.usage,
        })}\n\n`;
        controller.enqueue(encoder.encode(doneEvent));
      } catch (error: unknown) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown AI error';
        console.error('[Chat API] Streaming error:', errorMessage);

        const errorEvent = `data: ${JSON.stringify({
          type: 'error',
          content: errorMessage,
        })}\n\n`;
        controller.enqueue(encoder.encode(errorEvent));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      Connection: 'keep-alive',
      'X-Accel-Buffering': 'no', // Disable Nginx buffering
    },
  });
}
