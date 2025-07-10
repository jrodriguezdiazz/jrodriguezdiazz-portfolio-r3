import { Suspense } from "react";
import AboutMe from "./components/about-me";
import ContactForm from "./components/contact-form";
import NavBar from "./components/nav-bar";
import TechStack from "./components/tech-stack";
import WorkExperience from "./components/work-experience";
import SectionSkeleton from "./components/section-skeleton";
import Projects from "./components/projects";

// Section wrapper component for consistency
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-16 ${className}`}>
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      {children}
    </div>
  </section>
);

// Section header component for consistency
const SectionHeader = ({ children, className = "" }) => (
  <h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center ${className}`}>
    {children}
  </h2>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />

      <main className="w-full">
        {/* About Section */}
        <Section id="about">
          <Suspense fallback={<SectionSkeleton />}>
            <AboutMe />
          </Suspense>
        </Section>

        {/* Work Experience Section */}
        <Section id="work-experience" className="bg-gray-50/50 dark:bg-gray-900/50">
          <SectionHeader>Work Experience</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <WorkExperience />
          </Suspense>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <SectionHeader>Projects</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
        </Section>

        {/* Tech Stack Section */}
        <Section id="tech-stack" className="bg-gray-50/50 dark:bg-gray-900/50">
          <SectionHeader>Tech Stack</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <TechStack />
          </Suspense>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <div className="mx-auto max-w-1xl">
            <SectionHeader>Get in Touch</SectionHeader>
            <Suspense fallback={<SectionSkeleton />}>
              <ContactForm />
            </Suspense>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-7xl">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} jrodriguezdiazz.vercel.app. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
