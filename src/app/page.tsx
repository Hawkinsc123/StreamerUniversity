import Image from 'next/image';
import Link from 'next/link';
import { Play, Dot } from 'lucide-react';
import { EnrollButton } from '@/components/ui/enroll-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const studentSteps = [
  { number: "01", title: "Showcase Your Student Life", description: "Your academic story will be on display in front of not only your audience, but many other audiences as well. At StreamerU, all students and professors are creators. There will be cameras everywhere, streaming to a variety of audiences of many different platforms.", bgColor: "bg-card", textColor: "text-card-foreground", outlineColor: "outline-text-black" },
  { number: "02", title: "Meet Other Creators", description: "This entire event is a collaborative effort, involving many creative peers, industry leaders and professionals. You will have the opportunity to organically meet with everyone.", bgColor: "bg-black", textColor: "text-white", outlineColor: "outline-text-white" },
  { number: "03", title: "Actually Learn Useful Info", description: "While most classes will be fun, entertaining, and collaborative, some classes will actually provide quality information on how to better yourself as creators. Your future success is important to us!", bgColor: "bg-card", textColor: "text-card-foreground", outlineColor: "outline-text-black" },
];

const notableCourses = [
  { name: "Sex Education", professor: "Professor Cindy Gallop" },
  { name: "Art of Collaboration", professor: "Marcus King" },
  { name: "Love & Relationships", professor: "India Love" },
  { name: "Culinary Arts", professor: "Cookinwitkya" },
  { name: "Physical Education", professor: "Duke Dennis" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
 className="flex min-h-[80vh] lg:min-h-screen flex-col items-center bg-bottom bg-repeat-x pt-24 sm:pt-32 px-4 sm:px-8 md:px-16" style={{ backgroundImage: 'linear-gradient(to top, purple, white, grey)' }}
        data-ai-hint="abstract background"
      >
        <div className="my-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16 text-center lg:text-left">
          <div className="max-w-md">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading uppercase tracking-tight">
              <span className="block text-primary">Streamer</span>
 <span className="block text-[#ffb700]">University</span>
 </h1>
            <p className="mb-6 mt-6 text-lg sm:text-xl font-semibold text-foreground/80">Now Streaming On Twitch</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <EnrollButton href="https://www.twitch.tv/directory/category/streamer-university" text="WATCH NOW" variant="primary" />
            </div>
          </div>
          <Image 
            src="/images/streamer2.avif" 
            alt="streamer2" 
            width={400} 
            height={400}
            className="size-64 sm:size-80 md:size-96 shrink-0 rounded-lg shadow-2xl" 
            data-ai-hint="placeholder background, gaming character"
            priority
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8 bg-black">
        <div className="container mx-auto max-w-screen-lg text-center mt-20 sm:mt-24 bg-black">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-orange-500 mb-4">
            <span className="text-[#FFA500]">MAY 22ND - MAY 25TH!</span>
 </h2>
          <iframe
              className="w-full aspect-video rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/VceCcwhIIvY?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
          <div className="mt-8 sm:mt-12"></div>
        </div>      
      </section>

      {/* Accepting Applications Section */}
      <section className="bg-gradient-to-b from-background to-secondary py-16 sm:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-screen-lg">
          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 px-4 text-7xl sm:text-8xl font-black font-heading text-muted select-none z-0">
              150,000+
            </div>
            <div className="relative z-10 max-w-lg flex-1 lg:basis-1/2 text-center lg:text-left">              
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
                Followers on Twitch!
              </h2>
              <p className="my-4 text-foreground/80 leading-relaxed">
                Streamer University has already generated 1M+ views across platforms.
                Join the more than 150K people currently following on Twitch!
              </p>              
              <EnrollButton href="https://www.twitch.tv/directory/category/streamer-university" text="FOLLOW NOW" className="mt-4 mx-auto lg:mx-0" />              
            </div>
            <div className="flex-1 lg:basis-1/2 mt-8 lg:mt-0">
              <Image 
                src="/images/gate.avif" 
                alt="gate" 
                width={600} 
                height={400}                 
                className="w-full max-w-md lg:max-w-full mx-auto rounded-lg shadow-xl"
                data-ai-hint="university gate"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Notable Courses Section */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-screen-xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-heading uppercase">
            <span className="outline-text-white text-neutral-700 block">Notable</span>
            <span className="block text-primary">Courses</span>
          </h2>
          <ul className="select-none space-y-4 py-12 sm:py-16 text-xl sm:text-2xl md:text-3xl font-bold text-neutral-400">
            {notableCourses.map((course) => (
              <li key={course.name} className="group flex items-center gap-3 sm:gap-4 transition-colors hover:text-primary">
                <Dot className="size-0 opacity-0 group-hover:size-6 group-hover:opacity-100 transition-all duration-300 text-primary" />
                {course.name} <span className="whitespace-nowrap font-sans text-sm sm:text-base text-neutral-500 group-hover:text-neutral-400">/ {course.professor}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8">
          <h2 className="sticky top-0 z-10 bg-secondary py-4 sm:py-6 text-3xl sm:text-5xl md:text-6xl font-black font-heading uppercase text-center lg:text-left">Streamer-U Students</h2>
          <div className="ml-auto lg:max-w-2xl xl:max-w-3xl flex flex-col gap-8 py-12 sm:py-16">
          </div>
        </div>
      </section>

      {/* Professor Application Section */}
      <section className="bg-background flex flex-col items-center gap-4 py-16 sm:py-24 px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading">Want to Apply For Next Year?</h2>
        <EnrollButton href="https://forms.gle/ovkvbU1vGwXRXfMR6" text="EARLY ADMISSION" className="mt-4" />
      </section>

      {/* Final Banner Section */}
      <section className="bg-primary">
        <div className="container mx-auto">
          <Image 
            src="/images/banner.avif" 
            alt="banner" 
            width={1600} 
            height={400} 
            className="w-full object-cover max-h-72 sm:max-h-96"
            data-ai-hint="university event banner"
          />
        </div>
      </section>
    </div>
  );
}
