// Applicant Summarizer Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const StudentProfileSchema = z.object({
  skills: z.array(z.string()).describe("List of student's skills."),
  experience: z
    .array(
      z.object({
        title: z.string(),
        company: z.string(),
        description: z.string(),
      }),
    )
    .describe("Student's work experience."),
  // Making education optional to align with potential Firestore data and the error message
  education: z
    .object({
      degree: z.string(),
      university: z.string(),
      year: z.string(),
    })
    .optional()
    .describe("Student's education background."), // Added .optional() here
  // New detailed fields
  department: z.string().optional(),
  cgpa: z.number().optional(),
  studyingStatus: z.string().optional(),
  yearOfStudy: z.string().optional(),
  phoneNumber: z.string().optional(),
  resumeText: z
    .string()
    .optional()
    .describe("The full text content of the student's resume, if provided."),
});

const InternshipSchema = z.object({
  jobTitle: z.string(),
  description: z.string(),
  requirements: z.string(),
});

const SummarizeApplicantInputSchema = z.object({
  studentProfile: StudentProfileSchema,
  internship: InternshipSchema,
});
export type SummarizeApplicantInput = z.infer<
  typeof SummarizeApplicantInputSchema
>;

const RankAndSummarizeApplicantOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      "A 2-3 sentence summary of the applicant's suitability for the role, highlighting key strengths and weaknesses based on their profile and resume.",
    ),
  suitabilityScore: z
    .number()
    .min(1)
    .max(10)
    .describe(
      "A rating from 1 to 10 of the applicant's suitability for the role, where 10 is a perfect match.",
    ),
});
export type RankAndSummarizeApplicantOutput = z.infer<
  typeof RankAndSummarizeApplicantOutputSchema
>;

export async function rankAndSummarizeApplicant(
  input: SummarizeApplicantInput,
): Promise<RankAndSummarizeApplicantOutput> {
  return rankAndSummarizeApplicantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rankAndSummarizeApplicantPrompt',
  input: { schema: SummarizeApplicantInputSchema },
  output: { schema: RankAndSummarizeApplicantOutputSchema },
  prompt: `You are an expert HR recruiter for a fast-paced tech startup. Your task is to perform a complete analysis of a student applicant based on their profile AND their resume. You must then rank their suitability for a specific internship on a scale of 1-10 and provide a justification.

    **Internship Details:**
    - Title: {{{internship.jobTitle}}}
    - Description: {{{internship.description}}}
    - Requirements: {{{internship.requirements}}}

    **Student's Structured Profile:**
    - Education: {{#if studentProfile.education}}{{{studentProfile.education.degree}}} in {{studentProfile.department}} at {{{studentProfile.education.university}}}{{#if studentProfile.education.year}} (Graduation Year: {{{studentProfile.education.year}}}){{/if}}{{else}}No education details provided in structured profile.{{/if}}
    - Studying Status: {{studentProfile.studyingStatus}}
    - Year of Study: {{studentProfile.yearOfStudy}}
    - CGPA: {{studentProfile.cgpa}}
    - Listed Skills: {{#each studentProfile.skills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
    - Listed Experience:
    {{#each studentProfile.experience}}
      - {{{title}}} at {{{company}}}: {{{description}}}
    {{/each}}

    **Student's Resume Text:**
    {{#if studentProfile.resumeText}}
    <resume>
    {{{studentProfile.resumeText}}}
    </resume>
    {{else}}
    <resume>
    No resume was provided. Base your analysis only on the structured profile.
    </resume>
    {{/if}}

    **Your Task:**

    1.  **Analyze Holistically:** Compare all the student's information (both profile and resume) against the internship details.
    2.  **Determine a Score:** Based on your analysis, provide a \`suitabilityScore\` from 1 (not a fit) to 10 (a perfect match). Consider how well their skills, experience, and education align with the job requirements. Give higher scores for direct experience and skills mentioned in the job description.
    3.  **Write a Summary:** Write a concise 2-3 sentence \`summary\` justifying your score. Highlight the applicant's key strengths and potential weaknesses for this specific role. Be direct and insightful to help a hiring manager make a quick decision.

    Provide your response in a structured JSON format.
    `,
});

const rankAndSummarizeApplicantFlow = ai.defineFlow(
  {
    name: 'rankAndSummarizeApplicantFlow',
    inputSchema: SummarizeApplicantInputSchema,
    outputSchema: RankAndSummarizeApplicantOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  },
);
