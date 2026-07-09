// AI Resume Optimizer Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const OptimizeResumeInputSchema = z.object({
  resumeText: z.string().describe('The raw text content of the user resume.'),
  jobDescription: z
    .string()
    .optional()
    .describe('The job description to tailor the resume to.'),
});
export type OptimizeResumeInput = z.infer<typeof OptimizeResumeInputSchema>;

const OptimizeResumeOutputSchema = z.object({
  optimizedResumeText: z
    .string()
    .describe('The full, rewritten, ATS-friendly resume text.'),
  rating: z
    .number()
    .min(1)
    .max(10)
    .describe(
      'An overall rating of the original resume on a scale of 1 to 10.',
    ),
  feedback: z
    .string()
    .describe(
      'A brief, 1-2 sentence explanation for the rating provided, highlighting its main strengths and weaknesses.',
    ),
});
export type OptimizeResumeOutput = z.infer<typeof OptimizeResumeOutputSchema>;

export async function optimizeResume(
  input: OptimizeResumeInput,
): Promise<OptimizeResumeOutput> {
  return optimizeResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'optimizeResumePrompt',
  input: { schema: OptimizeResumeInputSchema },
  output: { schema: OptimizeResumeOutputSchema },
  prompt: `You are an expert career coach and professional resume writer specializing in creating ATS-friendly resumes for students and recent graduates applying for internships.

  Your first task is to analyze the original resume and provide a rating and feedback.
  - Rate the original resume on a scale from 1 to 10, where 1 is poor and 10 is excellent.
  - Provide brief, constructive feedback (1-2 sentences) explaining your rating, highlighting its main strengths and weaknesses.

  Your second task is to completely rewrite the provided resume text to be impactful and optimized for Applicant Tracking Systems (ATS). Do not provide suggestions or comments in the rewritten text; provide only the final, rewritten text of the entire resume.

  {{#if jobDescription}}
  You MUST tailor the rewritten resume to perfectly match the following job description. Emphasize the skills and experiences from the resume that are most relevant to the job's requirements.

  Job Description to target:
  {{{jobDescription}}}
  {{else}}
  The rewritten resume should be generally strong for tech and startup internship applications.
  {{/if}}

  Resume text to analyze and rewrite:
  {{{resumeText}}}

  Follow these rules for the rewrite:
  - Use strong, professional language and active verbs.
  - Quantify accomplishments with metrics wherever possible. If the original resume lacks metrics, use your expertise to suggest realistic examples within the rewritten text (e.g., "Increased user engagement by 15%").
  - Structure the resume logically with clear headings (e.g., "Education", "Experience", "Projects", "Skills").
  - Ensure the formatting is clean, simple, and easily parsable by an ATS. Avoid tables, columns, and complex graphics.

  The final output must contain the rating, feedback, and the complete, rewritten resume text only.
  `,
});

const optimizeResumeFlow = ai.defineFlow(
  {
    name: 'optimizeResumeFlow',
    inputSchema: OptimizeResumeInputSchema,
    outputSchema: OptimizeResumeOutputSchema,
  },
  async (input) => {
    if (!input.resumeText) {
      throw new Error('Resume text is required.');
    }
    const { output } = await prompt(input);
    return output!;
  },
);
