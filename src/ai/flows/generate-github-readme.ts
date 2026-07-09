// GitHub README Generator Flow

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const GitHubReadmeInputSchema = z.object({
  fullName: z.string().describe('Name of the developer'),
  title: z.string().describe('Professional title (e.g., Full Stack Developer)'),
  currentWork: z
    .string()
    .optional()
    .describe('What they are currently working on'),
  learning: z.string().optional().describe('What they are currently learning'),
  skills: z
    .array(z.string())
    .describe('List of technical skills (languages, frameworks)'),
  socials: z
    .object({
      github: z.string().optional(),
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      portfolio: z.string().optional(),
    })
    .optional(),
  funFact: z.string().optional(),
  style: z
    .enum(['minimal', 'creative', 'terminal', 'detailed'])
    .default('creative'),
});

export type GitHubReadmeInput = z.infer<typeof GitHubReadmeInputSchema>;

export const GitHubReadmeOutputSchema = z.object({
  markdown: z
    .string()
    .describe('The complete Markdown content for the README.md file'),
});

export type GitHubReadmeOutput = z.infer<typeof GitHubReadmeOutputSchema>;

const readmePrompt = ai.definePrompt({
  name: 'readmePrompt',
  input: { schema: GitHubReadmeInputSchema },
  output: { schema: GitHubReadmeOutputSchema },
  prompt: `
    You are a developer portfolio expert. Generate a stunning GitHub Profile README in Markdown.
    
    **Developer Profile**:
    - Name: {{fullName}}
    - Title: {{title}}
    - Currently Working on: {{currentWork}}
    - Currently Learning: {{learning}}
    - Skills: {{#each skills}}{{this}}, {{/each}}
    - Fun Fact: {{funFact}}
    - Style: {{style}}

    **Requirements based on Style**:
    - **Minimal**: Clean, text-focused, few badges.
    - **Creative**: Use emojis, ASCII art headers, dynamic stats cards (use standard github-readme-stats URLs).
    - **Terminal**: Use code blocks to display info like a JSON object.
    - **Detailed**: Comprehensive sections, detailed skill badges.

    **Structure**:
    1. Header (Name, Title, potentially a banner image/ASCII).
    2. Short Bio / Typing effect.
    3. "I'm currently..." sections.
    4. Skills Section (Use reliable badge URLs like shields.io or devicons).
    5. GitHub Stats (Streaks, Languages, Trophies - use public APIs like github-readme-stats).
    6. Connect / Socials.

    Return the raw Markdown string.
  `,
});

export const generateGitHubReadmeFlow = ai.defineFlow(
  {
    name: 'generateGitHubReadmeFlow',
    inputSchema: GitHubReadmeInputSchema,
    outputSchema: GitHubReadmeOutputSchema,
  },
  async (input) => {
    const { output } = await readmePrompt(input);
    return output!;
  },
);
