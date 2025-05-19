'use server';

/**
 * @fileOverview A professor bio generator AI agent.
 *
 * - generateProfessorBio - A function that handles the professor bio generation process.
 * - GenerateProfessorBioInput - The input type for the generateProfessorBio function.
 * - GenerateProfessorBioOutput - The return type for the generateProfessorBio function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfessorBioInputSchema = z.object({
  keywords: z.string().describe('Keywords describing the professor expertise.'),
});
export type GenerateProfessorBioInput = z.infer<typeof GenerateProfessorBioInputSchema>;

const GenerateProfessorBioOutputSchema = z.object({
  bio: z.string().describe('A professional and engaging bio for the professor.'),
});
export type GenerateProfessorBioOutput = z.infer<typeof GenerateProfessorBioOutputSchema>;

export async function generateProfessorBio(input: GenerateProfessorBioInput): Promise<GenerateProfessorBioOutput> {
  return generateProfessorBioFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfessorBioPrompt',
  input: {schema: GenerateProfessorBioInputSchema},
  output: {schema: GenerateProfessorBioOutputSchema},
  prompt: `You are a professional bio writer for university professors.

  Please write a short, engaging, and professional bio for a professor based on the following keywords describing their expertise:

  Keywords: {{{keywords}}}
  `,
});

const generateProfessorBioFlow = ai.defineFlow(
  {
    name: 'generateProfessorBioFlow',
    inputSchema: GenerateProfessorBioInputSchema,
    outputSchema: GenerateProfessorBioOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
