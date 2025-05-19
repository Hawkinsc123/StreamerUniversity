import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, User } from 'lucide-react';
import Link from 'next/link';

export interface Course {
  id: string;
  title: string;
  description: string;
  professorName: string;
  imageUrl: string;
  category: string;
  keywords: string[];
}

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="p-0 relative">
        <Image
          src={course.imageUrl}
          alt={course.title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
          data-ai-hint="education learning"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
          {course.category}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-xl font-heading mb-2 text-primary">{course.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <User className="w-4 h-4 mr-2" />
          <span>{course.professorName}</span>
        </div>
        <CardDescription className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
          {course.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full" variant="default">
          <Link href={`/courses/${course.id}`}>
            <BookOpen className="w-4 h-4 mr-2" />
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
