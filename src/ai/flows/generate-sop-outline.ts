// SOP Outline Generator Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const SOPInputSchema = z.object({
  targetDegree: z.string().describe('Target degree (e.g., MS in CS, MBA)'),
  targetUniversity: z.string().optional().describe('Target university name'),
  background: z
    .string()
    .describe(
      'Current background (e.g., Final year CSE student, 2 years exp in Marketing)',
    ),
  motivation: z.string().describe('Key motivation for this course'),
  experiences: z
    .string()
    .describe('Key projects or work experiences to highlight'),
  futureGoals: z.string().describe('Short and long term career goals'),
});

export type SOPInput = z.infer<typeof SOPInputSchema>;

export const SOPSectionSchema = z.object({
  title: z.string(),
  content: z.string(),
  tips: z.string(),
});

export const SOPOutputSchema = z.object({
  title: z.string(),
  sections: z.array(SOPSectionSchema),
});

export type SOPOutput = z.infer<typeof SOPOutputSchema>;

const sopPrompt = ai.definePrompt({
  name: 'sopPrompt',
  input: { schema: SOPInputSchema },
  output: { schema: SOPOutputSchema },
  prompt: `
    You are an expert study-abroad counselor. Create a detailed, structured outline for a Statement of Purpose (SOP).
    
    **Candidate Profile**:
    - Target: {{targetDegree}} {{#if targetUniversity}}at {{targetUniversity}}{{/if}}
    - Background: {{background}}
    - Motivation: {{motivation}}
    - Key Experiences: {{experiences}}
    - Future Goals: {{futureGoals}}

    **Task**:
    Generate a 5-6 section outline. For each section:
    1. **Title**: Standard section title (e.g., Introduction, Academic Background).
    2. **Content**: A drafted paragraph or bullet points incorporating the user's specific details. Write this in the first person ("I").
    3. **Tips**: Expert advice on what else to add or how to refine this section.

    Ensure the flow is logical: Intro -> Background -> Experience -> Why This Course/Uni -> Goals -> Conclusion.
  `,
});

export const generateSOPFlow = ai.defineFlow(
  {
    name: 'generateSOPFlow',
    inputSchema: SOPInputSchema,
    outputSchema: SOPOutputSchema,
  },
  async (input) => {
    const { output } = await sopPrompt(input);
    return output!;
  },
);
