// Job Description Enhancer Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const EnhanceJobDescriptionInputSchema = z.object({
  jobTitle: z.string().describe('The title of the job/internship.'),
  jobDescription: z.string().describe('The raw text of the job description.'),
});
export type EnhanceJobDescriptionInput = z.infer<
  typeof EnhanceJobDescriptionInputSchema
>;

const EnhanceJobDescriptionOutputSchema = z.object({
  enhancedDescription: z
    .string()
    .describe('The rewritten, student-friendly job description.'),
});
export type EnhanceJobDescriptionOutput = z.infer<
  typeof EnhanceJobDescriptionOutputSchema
>;

export async function enhanceJobDescription(
  input: EnhanceJobDescriptionInput,
): Promise<EnhanceJobDescriptionOutput> {
  return enhanceJobDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceJobDescriptionPrompt',
  input: { schema: EnhanceJobDescriptionInputSchema },
  output: { schema: EnhanceJobDescriptionOutputSchema },
  prompt: `You are an expert tech recruiter and copywriter who specializes in writing compelling job descriptions for startups targeting student interns.

  Your task is to rewrite the provided job description to be more engaging, exciting, and appealing to ambitious students.

  Job Title: {{{jobTitle}}}
  Original Description:
  {{{jobDescription}}}

  Follow these rules for the rewrite:
  - Use an energetic and inspiring tone. Avoid corporate jargon.
  - Start with a compelling hook that grabs the student's attention.
  - Clearly outline the impact the intern will have. Frame tasks as opportunities for growth and learning.
  - Emphasize what the student will learn and the unique benefits of working at a startup (e.g., mentorship, high impact, wearing many hats).
  - Structure the description with clear, scannable headings like "What You'll Do", "What You'll Learn", "Who You Are".
  - Ensure the final output is just the rewritten job description text, ready to be copied and pasted. Do not include any of your own commentary.
  `,
});

const enhanceJobDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceJobDescriptionFlow',
    inputSchema: EnhanceJobDescriptionInputSchema,
    outputSchema: EnhanceJobDescriptionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
