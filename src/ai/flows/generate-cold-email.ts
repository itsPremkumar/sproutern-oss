// Cold Email Generator Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const ColdEmailInputSchema = z.object({
  senderName: z.string().describe('Name of the student sending the email'),
  senderCollege: z
    .string()
    .optional()
    .describe('College/University of the sender'),
  recipientName: z
    .string()
    .optional()
    .describe('Name of the person receiving the email (if known)'),
  companyName: z.string().describe('Target company name'),
  role: z
    .string()
    .describe('Role applying for (e.g. SDE Intern, Marketing Associate)'),
  emailType: z
    .enum(['internship', 'referral', 'networking', 'followup'])
    .describe('Purpose of the email'),
  specificContext: z
    .string()
    .optional()
    .describe(
      'Specific details to include (e.g. "I saw your talk at X", "I built a project using Y")',
    ),
  tone: z
    .enum(['professional', 'enthusiastic', 'direct'])
    .default('professional')
    .describe('Tone of the email'),
});

export type ColdEmailInput = z.infer<typeof ColdEmailInputSchema>;

export const ColdEmailOutputSchema = z.object({
  subject: z.string().describe('The subject line of the email'),
  body: z.string().describe('The main content of the email'),
});

export type ColdEmailOutput = z.infer<typeof ColdEmailOutputSchema>;

const coldEmailPrompt = ai.definePrompt({
  name: 'coldEmailPrompt',
  input: { schema: ColdEmailInputSchema },
  output: { schema: ColdEmailOutputSchema },
  prompt: `
    You are an expert career coach helping a student write a high-converting cold email.
    
    **Goal**: Write a {{tone}} cold email for a {{emailType}} opportunity.
    
    **Details**:
    - Sender: {{senderName}} {{#if senderCollege}}from {{senderCollege}}{{/if}}
    - Recipient: {{#if recipientName}}{{recipientName}}{{else}}Hiring Manager{{/if}}
    - Company: {{companyName}}
    - Role: {{role}}
    - Context/Hook: {{#if specificContext}}{{specificContext}}{{else}}General interest in the company{{/if}}

    **Guidelines**:
    1. **Subject Line**: Must be catchy, short (under 60 chars), and relevant. Avoid "Hello" or generic subjects.
    2. **Opening**: Build a connection immediately. Use the context provided.
    3. **Body**: Be concise (under 150 words). Focus on value proposition.
    4. **Call to Action**: Specific and low friction (e.g., "15 min chat").
    5. **Tone**:
       - Professional: Formal, respectful, standard business English.
       - Enthusiastic: High energy, passionate, slightly more casual.
       - Direct: Straight to the point, brevtiy focused.

    Generate the JSON with 'subject' and 'body'.
  `,
});

export const generateColdEmailFlow = ai.defineFlow(
  {
    name: 'generateColdEmailFlow',
    inputSchema: ColdEmailInputSchema,
    outputSchema: ColdEmailOutputSchema,
  },
  async (input) => {
    const { output } = await coldEmailPrompt(input);
    return output!;
  },
);
