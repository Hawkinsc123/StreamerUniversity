
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 sm:p-8">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/StreamerU.avif" 
            alt="Streamer University Logo" 
            width={120} 
            height={104} 
            className="h-12 w-auto sm:h-16 lg:h-20"
            data-ai-hint="university logo" 
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-8">
          <Button variant="link" asChild className="text-foreground hover:text-primary font-bold text-sm sm:text-base">
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground hover:text-primary font-bold text-sm sm:text-base whitespace-nowrap">
            <Link href="https://forms.gle/EnCn9sMzzJjzmnPM9" target="_blank" rel="noopener noreferrer">STUDENTS</Link>
          </Button>
           <Button variant="link" asChild className="text-foreground hover:text-primary font-bold text-sm sm:text-base whitespace-nowrap">
            <Link href="/courses">COURSES</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground hover:text-primary font-bold text-sm sm:text-base whitespace-nowrap">
            <Link href="/professor-bio">PROFESSORS</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground hover:text-primary font-bold text-sm sm:text-base whitespace-nowrap">
            <Link href="https://github.com/Hawkinsc123/StreamerUniversity" target="_blank" rel="noopener noreferrer">VIEW CODE</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
