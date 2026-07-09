import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const isGoogleAIKeyAvailable = !!process.env.GOOGLE_API_KEY;

export const ai = genkit({
  plugins: isGoogleAIKeyAvailable
    ? [googleAI({ apiKey: process.env.GOOGLE_API_KEY })]
    : [],
  model: 'googleai/gemini-2.0-flash',
});
