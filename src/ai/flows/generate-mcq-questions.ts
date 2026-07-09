// MCQ Questions Generator Flow

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateMCQQuestionsInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma-separated list of skills to generate questions for.'),
  numberOfQuestions: z
    .number()
    .default(5)
    .describe('The number of questions to generate.'),
});
export type GenerateMCQQuestionsInput = z.infer<
  typeof GenerateMCQQuestionsInputSchema
>;

const MCQQuestionSchema = z.object({
  question: z.string().describe('The text of the question.'),
  options: z
    .array(z.string())
    .describe('The possible answers to the question.'),
  correctAnswerIndex: z
    .number()
    .describe('The index of the correct answer in the options array.'),
});

const GenerateMCQQuestionsOutputSchema = z.object({
  questions: z
    .array(MCQQuestionSchema)
    .describe('The generated multiple-choice questions.'),
});
export type GenerateMCQQuestionsOutput = z.infer<
  typeof GenerateMCQQuestionsOutputSchema
>;

export async function generateMCQQuestions(
  input: GenerateMCQQuestionsInput,
): Promise<GenerateMCQQuestionsOutput> {
  return generateMCQQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMCQQuestionsPrompt',
  input: { schema: GenerateMCQQuestionsInputSchema },
  output: { schema: GenerateMCQQuestionsOutputSchema },
  prompt: `You are an expert in generating multiple-choice questions based on a given set of skills.

  Generate {{numberOfQuestions}} multiple-choice questions based on the following skills: {{{skills}}}.

  Each question should have 4 options, and only one correct answer.
  The output should be a JSON object with a 'questions' array. Each object in the questions array
  should have the following structure:
  {
    "question": "The text of the question",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correctAnswerIndex": 0 // The index of the correct answer in the options array
  }

  Make sure that the questions test the user's knowledge of the specified skills, and that the correct answer is clearly the best choice.
`,
});

// Retry helper function with exponential backoff
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000,
): Promise<T> {
  let lastError: any;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;

      // Check if it's a rate limit error (429)
      const isRateLimitError =
        error?.message?.includes('429') ||
        error?.message?.includes('Too Many Requests') ||
        error?.message?.includes('Resource exhausted');

      // If it's the last attempt or not a rate limit error, throw
      if (attempt === maxRetries || !isRateLimitError) {
        throw error;
      }

      // Calculate delay with exponential backoff: baseDelay * 2^attempt
      const delay = baseDelay * Math.pow(2, attempt);
      console.log(
        `Rate limit hit. Retrying in ${delay}ms... (Attempt ${attempt + 1}/${maxRetries})`,
      );

      // Wait before retrying
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

const generateMCQQuestionsFlow = ai.defineFlow(
  {
    name: 'generateMCQQuestionsFlow',
    inputSchema: GenerateMCQQuestionsInputSchema,
    outputSchema: GenerateMCQQuestionsOutputSchema,
  },
  async (input) => {
    try {
      const { output } = await retryWithBackoff(
        () => prompt(input),
        3, // max 3 retries
        2000, // start with 2 second delay
      );
      return output!;
    } catch (error: any) {
      // Handle rate limit errors with a user-friendly message
      if (
        error?.message?.includes('429') ||
        error?.message?.includes('Too Many Requests') ||
        error?.message?.includes('Resource exhausted')
      ) {
        throw new Error(
          'The quiz generation service is temporarily busy. Please try again in a few moments. ' +
            'If this persists, consider reducing the number of questions.',
        );
      }

      // Re-throw other errors
      throw error;
    }
  },
);
