import { CourseCard, type Course } from '@/components/course-card';
import { GraduationCap } from 'lucide-react';

const placeholderCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Streaming Strategies',
    description: 'Learn the art of engaging your audience and growing your channel with advanced techniques.',
    professorName: 'Dr. Streamer Supreme',
    imageUrl: 'https://placehold.co/600x400.png?text=Course+1',
    category: 'Streaming',
    keywords: ['audience engagement', 'channel growth', 'monetization']
  },
  {
    id: '2',
    title: 'Content Creation Masterclass',
    description: 'From ideation to production, master the skills to create compelling content.',
    professorName: 'Prof. Vid Pro',
    imageUrl: 'https://placehold.co/600x400.png?text=Course+2',
    category: 'Content Creation',
    keywords: ['video editing', 'scriptwriting', 'production']
  },
  {
    id: '3',
    title: 'Community Management & Moderation',
    description: 'Build and maintain a positive and thriving online community.',
    professorName: 'Mx. Mod Expert',
    imageUrl: 'https://placehold.co/600x400.png?text=Course+3',
    category: 'Community',
    keywords: ['moderation tools', 'conflict resolution', 'community building']
  },
  {
    id: '4',
    title: 'The Business of Streaming',
    description: 'Understand sponsorships, merchandise, and other revenue streams.',
    professorName: 'Prof. Bucks',
    imageUrl: 'https://placehold.co/600x400.png?text=Course+4',
    category: 'Business',
    keywords: ['sponsorships', 'merchandise', 'finance']
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <GraduationCap className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary tracking-tight">
          University Courses
        </h1>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Explore our diverse range of courses designed to empower the next generation of creators.
        </p>
      </div>

      {/* Filters - Placeholder for now */}
      <div className="mb-8 p-6 bg-card rounded-lg shadow">
        <h2 className="text-xl font-semibold font-heading mb-4">Filter Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Example Filter Dropdown */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-muted-foreground mb-1">Category</label>
            <select id="category" name="category" className="block w-full p-2 border border-input rounded-md shadow-sm focus:ring-primary focus:border-primary">
              <option>All</option>
              <option>Streaming</option>
              <option>Content Creation</option>
              <option>Community</option>
              <option>Business</option>
            </select>
          </div>
          {/* Add more filters as needed */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {placeholderCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      {placeholderCourses.length === 0 && (
        <p className="text-center text-lg text-muted-foreground col-span-full">
          No courses available at the moment. Please check back soon!
        </p>
      )}
    </div>
  );
}
