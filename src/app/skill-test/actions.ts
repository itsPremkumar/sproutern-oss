'use server';

import { z } from 'zod';
import {
  generateMCQQuestions,
  type GenerateMCQQuestionsInput,
} from '@/ai/flows/generate-mcq-questions';

const actionSchema = z.object({
  skills: z.string().min(3, 'Please enter at least one skill.'),
  numberOfQuestions: z.coerce.number().min(1).max(10),
});

export async function createQuizAction(prevState: any, formData: FormData) {
  const validatedFields = actionSchema.safeParse({
    skills: formData.get('skills'),
    numberOfQuestions: formData.get('numberOfQuestions'),
  });

  if (!validatedFields.success) {
    return {
      message:
        'Invalid form data. ' +
          validatedFields.error.flatten().fieldErrors.skills?.join(' ') || '',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const input: GenerateMCQQuestionsInput = validatedFields.data;
    const quizData = await generateMCQQuestions(input);
    if (!quizData || !quizData.questions || quizData.questions.length === 0) {
      return {
        message:
          'Could not generate questions for the given skills. Please try different skills.',
        errors: null,
        data: null,
      };
    }
    return {
      message: 'success',
      errors: null,
      data: quizData,
    };
  } catch (error) {
    console.error(error);
    return {
      message:
        'An unexpected error occurred while generating the quiz. Please try again later.',
      errors: null,
      data: null,
    };
  }
}
