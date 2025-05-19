import Link from 'next/link';
import Image from 'next/image';
import { SpinningLogoText } from '@/components/spinning-logo-text';

const socialLinks = [
  { name: 'Twitch', href: 'https://twitch.tv/kaicenat' },
  { name: 'YouTube', href: 'https://www.youtube.com/@KaiCenatLive' },
  { name: 'Instagram', href: 'https://www.instagram.com/kaicenat' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@kai_cenat' },
];

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="container mx-auto flex flex-col items-center gap-8">
        <div className="relative size-32">
          <SpinningLogoText />
          <Image 
            src="https://placehold.co/100x86.png" 
            alt="Streamer University Logo" 
            width={64} 
            height={55} 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            data-ai-hint="university logo"
          />
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="font-bold hover:underline hover:text-accent">
              {link.name}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Streamer University. All rights reserved.</p>
      </div>
    </footer>
  );
}
