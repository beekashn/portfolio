import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTopButton } from "@/components/back-to-top-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { InteractiveBackground } from "@/components/interactive-background";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { ExperienceSection } from "@/sections/experience-section";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollProgress />
      <BackToTopButton />
      {/* <InteractiveBackground /> */}

      {/* Ambient background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="animate-float-a absolute -left-40 -top-20 h-125 w-125 rounded-full bg-primary/10 blur-[120px]" />
        <div className="animate-float-b absolute -right-32 top-60 h-100 w-100 rounded-full bg-secondary/10 blur-[100px]" />
        <div className="animate-float-c absolute bottom-40 left-1/3 h-87.5 w-87.5 rounded-full bg-chart-3/8 blur-[90px]" />
      </div>

      <SiteHeader />

      <main className="mx-auto flex w-full max-w-360 flex-col gap-8 px-4 pt-28 sm:px-6 lg:gap-10 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
