'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateProfessorBio, type GenerateProfessorBioInput } from '@/ai/flows/professor-bio-generator';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ProfessorBioSchema = z.object({
  keywords: z.string().min(10, { message: 'Please enter at least 10 characters for keywords.' }).max(300, { message: 'Keywords cannot exceed 300 characters.' }),
});

type ProfessorBioFormValues = z.infer<typeof ProfessorBioSchema>;

export function ProfessorBioForm() {
  const [generatedBio, setGeneratedBio] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfessorBioFormValues>({
    resolver: zodResolver(ProfessorBioSchema),
  });

  const onSubmit: SubmitHandler<ProfessorBioFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedBio(null);
    setError(null);

    try {
      const input: GenerateProfessorBioInput = { keywords: data.keywords };
      const result = await generateProfessorBio(input);
      setGeneratedBio(result.bio);
      toast({
        title: "Bio Generated Successfully!",
        description: "Your new professor bio is ready.",
        variant: "default",
        action: <CheckCircle className="text-green-500" />,
      });
      reset(); // Reset form after successful generation
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
      setError(errorMessage);
      toast({
        title: "Error Generating Bio",
        description: errorMessage,
        variant: "destructive",
        action: <AlertCircle className="text-white" />,
      });
      console.error('Error generating professor bio:', e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-xl">
      <CardHeader>
        <CardTitle className="font-heading text-2xl">Generate Your Bio</CardTitle>
        <CardDescription>
          Enter keywords related to your academic achievements, research interests, and teaching philosophy.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-base">Expertise Keywords</Label>
            <Textarea
              id="keywords"
              {...register('keywords')}
              placeholder="e.g., Quantum Physics, Machine Learning, 18th Century Literature, Sustainable Urban Development..."
              className="min-h-[120px] text-base"
              disabled={isLoading}
            />
            {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-stretch gap-4">
          <Button type="submit" disabled={isLoading} className="w-full text-base py-3">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Bio
              </>
            )}
          </Button>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>

      {generatedBio && (
        <div className="p-6 border-t border-border">
          <h3 className="text-xl font-semibold font-heading mb-3 text-primary">Your Generated Bio:</h3>
          <div className="p-4 bg-secondary rounded-md prose max-w-none text-foreground/90 whitespace-pre-line">
            {generatedBio}
          </div>
        </div>
      )}
    </Card>
  );
}
