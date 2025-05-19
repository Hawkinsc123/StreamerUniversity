import { ProfessorBioForm } from '@/components/professor-bio-form';
import { PenTool } from 'lucide-react';

export default function ProfessorBioPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <PenTool className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary tracking-tight">
            Professor Bio Generator
          </h1>
          <p className="mt-4 text-lg text-foreground/80">
            Craft a compelling and professional bio for your university profile. Enter a few keywords about your expertise, and let our AI assist you.
          </p>
        </div>
        <ProfessorBioForm />
      </div>
    </div>
  );
}
