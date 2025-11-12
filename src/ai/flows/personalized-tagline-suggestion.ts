
// src/ai/flows/personalized-tagline-suggestion.ts
'use server';

/**
 * @fileOverview A personalized tagline suggestion AI agent.
 *
 * - personalizedTaglineSuggestion - A function that handles the personalized tagline suggestion process.
 * - PersonalizedTaglineSuggestionInput - The input type for the personalizedTaglineSuggestion function.
 * - PersonalizedTaglineSuggestionOutput - The return type for the personalizedTaglineSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedTaglineSuggestionInputSchema = z.object({
  userActivity: z
    .string()
    .describe('A description of the user activity or context.'),
});
export type PersonalizedTaglineSuggestionInput = z.infer<
  typeof PersonalizedTaglineSuggestionInputSchema
>;

const PersonalizedTaglineSuggestionOutputSchema = z.object({
  tagline: z.string().describe('A personalized tagline suggestion.'),
});
export type PersonalizedTaglineSuggestionOutput = z.infer<
  typeof PersonalizedTaglineSuggestionOutputSchema
>;

export async function personalizedTaglineSuggestion(
  input: PersonalizedTaglineSuggestionInput
): Promise<PersonalizedTaglineSuggestionOutput> {
  return personalizedTaglineSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedTaglineSuggestionPrompt',
  input: {schema: PersonalizedTaglineSuggestionInputSchema},
  output: {schema: PersonalizedTaglineSuggestionOutputSchema},
  prompt: `You are a marketing expert specializing in creating personalized taglines for an AI-powered finance platform called Finanseer.

  Based on the user's activity or context, generate a concise and engaging tagline that will immediately capture their attention and highlight the value proposition of Finanseer.

  User Activity/Context: {{{userActivity}}}
  `,
});

const personalizedTaglineSuggestionFlow = ai.defineFlow(
  {
    name: 'personalizedTaglineSuggestionFlow',
    inputSchema: PersonalizedTaglineSuggestionInputSchema,
    outputSchema: PersonalizedTaglineSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
