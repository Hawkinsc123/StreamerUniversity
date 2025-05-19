import Link from 'next/link';
import { Circle, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnrollButtonProps {
  href: string;
  text: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function EnrollButton({ href, text, className, variant = 'primary' }: EnrollButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex w-fit items-center gap-2 rounded-full px-3 py-2 text-sm sm:text-base font-medium transition-all duration-300 ease-in-out",
        variant === 'primary' 
          ? "border border-foreground hover:bg-foreground hover:text-background" 
          : "border border-transparent hover:border-foreground text-foreground",
        className
      )}
    >
      <Circle className="size-0 opacity-0 group-hover:size-5 group-hover:opacity-100 transition-all duration-300" strokeWidth={1.5} />
      <span className="whitespace-nowrap">{text}</span>
      <ArrowUpRight className="size-5 opacity-100 group-hover:size-0 group-hover:opacity-0 transition-all duration-300" strokeWidth={1.5} />
    </Link>
  );
}
