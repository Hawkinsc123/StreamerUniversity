import Image from 'next/image';
import Link from 'next/link';
import { Play, Dot } from 'lucide-react';
import { EnrollButton } from '@/components/ui/enroll-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const studentSteps = [
  { number: "01", title: "Apply", bgColor: "bg-muted", textColor: "text-muted-foreground" },
  { number: "02", title: "Wait For Acceptance Letters", bgColor: "bg-muted", textColor: "text-muted-foreground" },
  { number: "03", title: "Move-In Day + Orientation", bgColor: "bg-card", textColor: "text-card-foreground" },
];

const benefits = [
  { number: "01", title: "Showcase Your Student Life", description: "Your academic story will be on display in front of not only your audience, but many other audiences as well. At StreamerU, all students and professors are creators. There will be cameras everywhere, streaming to a variety of audiences of many different platforms.", bgColor: "bg-card", textColor: "text-card-foreground", outlineColor: "outline-text-black" },
  { number: "02", title: "Meet Other Creators", description: "This entire event is a collaborative effort, involving many creative peers, industry leaders and professionals. You will have the opportunity to organically meet with everyone.", bgColor: "bg-black", textColor: "text-white", outlineColor: "outline-text-white" },
  { number: "03", title: "Actually Learn Useful Info", description: "While most classes will be fun, entertaining, and collaborative, some classes will actually provide quality information on how to better yourself as creators. Your future success is important to us!", bgColor: "bg-card", textColor: "text-card-foreground", outlineColor: "outline-text-black" },
];

const notableCourses = [
  { name: "Sex Education", professor: "Professor TBD" },
  { name: "Business Management", professor: "Professor TBD" },
  { name: "Music Production", professor: "Professor TBD" },
  { name: "Film and Acting", professor: "Professor TBD" },
  { name: "MANY MORE", professor: "Professor TBD" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
 className="flex min-h-[80vh] lg:min-h-screen flex-col items-center bg-bottom bg-repeat-x pt-24 sm:pt-32 px-4 sm:px-8 md:px-16"
 style={{}}
        data-ai-hint="abstract background"
      >
        <div className="my-auto flex w-full max-w-screen-lg flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16 text-center lg:text-left">
          <div className="max-w-md">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading uppercase tracking-tight">
              <span className="block text-primary">Streamer</span>
              <span className="block">University</span>
            </h1>
            <p className="mb-6 mt-6 text-lg sm:text-xl font-semibold text-foreground/80">Now Accepting Applications</p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <EnrollButton href="https://forms.gle/EnCn9sMzzJjzmnPM9" text="ENROLL NOW" variant="primary" />
              <EnrollButton href="https://forms.gle/ovkvbU1vGwXRXfMR6" text="ENROLL AS PROFESSOR" variant="secondary" />
            </div>
          </div>
          <Image 
            src="/images/streamer2.avif" 
            alt="streamer2" 
            width={400} 
            height={400}
            className="size-64 sm:size-80 md:size-96 shrink-0 rounded-lg shadow-2xl" 
            data-ai-hint="placeholder background"
            data-ai-hint="gaming character"
            priority
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-screen-lg text-center">
          <Link 
            href="https://www.youtube.com/watch?v=6cizwRaZJjM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group absolute left-1/2 top-0 aspect-square w-24 sm:w-32 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-card p-2 shadow-xl transition-transform hover:scale-105"
            aria-label="Watch intro video"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-primary/90">
              <Play className="h-10 w-10 sm:h-12 sm:w-12" />
            </div>
          </Link>
          <div className="mt-16 sm:mt-20 flex items-center justify-center gap-4 text-sm font-bold sm:gap-8 sm:text-lg md:text-xl">
            <p className="w-full sm:w-auto text-right text-foreground/70">Since 2025</p>
            <div className="aspect-square w-[12%] hidden sm:block"></div> {/* Spacer to push elements apart, mimicking original */}
            <p className="w-full sm:w-auto text-left text-foreground/70 whitespace-nowrap">150+ Creators</p>
          </div>
          <div className="mt-8 sm:mt-12">
            <Image 
              src="/images/banner.avif" 
              alt="banner" 
              width={1200} 
              height={480} 
              className="mx-auto rounded-lg shadow-lg"
              data-ai-hint="university banner"
            />
          </div>
        </div>

      {/* Accepting Applications Section */}
      <section className="bg-gradient-to-b from-background to-secondary py-16 sm:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-screen-lg">
          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="absolute -top-12 sm:-top-16 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 px-4 text-7xl sm:text-8xl font-black font-heading text-muted select-none z-0">90,000+</div>
            <div className="relative z-10 max-w-lg flex-1 lg:basis-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-2">
                Now Accepting<br />Applications
              </h2>
              <p className="my-4 text-foreground/80 leading-relaxed">
                At Streamer University, streamers of all backgrounds will have the
                opportunity to showcase their personalities as students, alongside
                both unrealized, upcoming and well-established creators.
              </p>
              <EnrollButton href="https://forms.gle/EnCn9sMzzJjzmnPM9" text="ENROLL NOW" className="mt-4 mx-auto lg:mx-0" />
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
      
      {/* Steps Section */}
      <section className="bg-black text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="container mx-auto max-w-screen-xl">
          <div className="text-center lg:text-left">
            <p className="outline-text-current text-primary text-6xl sm:text-7xl md:text-8xl font-black font-heading">STEPS</p>
            <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-4 lg:flex-row lg:items-end mt-2">
              <span className="text-neutral-400 text-3xl sm:text-4xl font-bold font-heading">YOU TAKE</span>
              <p className="text-xl sm:text-2xl font-semibold font-heading uppercase">
                Student<br className="sm:hidden" /> Process
              </p>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 sm:gap-6">
            {studentSteps.map((step) => (
              <Card key={step.number} className={cn("h-full flex flex-col justify-between p-4 sm:p-6 shadow-lg transition-all hover:shadow-primary/30 hover:scale-105", step.bgColor, step.textColor)}>
                <CardHeader className="p-0">
                  <CardTitle className={cn("self-end text-3xl sm:text-4xl font-black", step.number === "03" ? "text-primary" : "outline-text-current")}>{step.number}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-auto">
                  <p className="text-base sm:text-lg font-bold">{step.title}</p>
                </CardContent>
              </Card>
            ))}
             <Link 
              href="https://forms.gle/EnCn9sMzzJjzmnPM9" 
              target="_blank" rel="noopener noreferrer"
              className="mt-8 md:mt-0 md:col-start-auto lg:col-start-4 flex aspect-square size-36 sm:size-48 flex-col items-center justify-center self-center whitespace-nowrap rounded-full border-2 border-neutral-600 p-4 text-center font-bold text-sm sm:text-base transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
            >
              ENROLL NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary py-16 sm:py-24">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-8">
          <h2 className="sticky top-0 z-10 bg-secondary py-4 sm:py-6 text-3xl sm:text-5xl md:text-6xl font-black font-heading uppercase text-center lg:text-left">Benefits Of Being A Streamer-U Student</h2>
          <div className="ml-auto lg:max-w-2xl xl:max-w-3xl flex flex-col gap-8 py-12 sm:py-16">
            {benefits.map((benefit) => (
              <div key={benefit.number} className={cn("relative flex min-h-[20rem] flex-col gap-4 sm:gap-8 rounded-xl p-6 sm:p-8 shadow-xl", benefit.bgColor, benefit.textColor)}>
                <p className={cn("absolute inset-x-0 bottom-0 m-4 sm:m-6 text-right sm:text-left text-5xl sm:text-6xl font-black select-none opacity-50 sm:opacity-100", benefit.outlineColor)}>{benefit.number}</p>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading z-10">{benefit.title}</h3>
                <p className="self-start sm:self-end text-sm sm:text-base leading-relaxed z-10 max-w-md">{benefit.description}</p>
              </div>
            ))}
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

      {/* Professor Application Section */}
      <section className="bg-background flex flex-col items-center gap-4 py-16 sm:py-24 px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-heading">Want to Apply as a Professor?</h2>
        <EnrollButton href="https://forms.gle/ovkvbU1vGwXRXfMR6" text="BECOME A PROFESSOR" className="mt-4" />
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
