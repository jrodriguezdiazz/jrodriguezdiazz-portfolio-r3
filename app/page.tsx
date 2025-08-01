import { Suspense } from "react";

import AboutMe from "./components/about-me/about-me";
import NavBar from "./components/common/nav-bar";
import SectionSkeleton from "./components/common/section-skeleton";
import Contact from "./components/contact/contact";
import WorkExperience from "./components/exprience/work-experience";
import Projects from "./components/projects/projects";
import TechStack from "./components/tech-stack/tech-stack";

import { Section, SectionHeader } from "@/app/components/common/section";
import Footer from "@/app/components/common/footer";

export default function Page() {
  return (
    <div className='min-h-screen bg-background'>
      <NavBar />

      <main className='w-full'>
        <Section id='about'>
          <Suspense fallback={<SectionSkeleton />}>
            <AboutMe />
          </Suspense>
        </Section>
        <Section
          id='work-experience'
          className='bg-gray-50/50 dark:bg-gray-900/50'
        >
          <SectionHeader>Work Experience</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <WorkExperience />
          </Suspense>
        </Section>
        <Section id='projects'>
          <SectionHeader>Projects</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
        </Section>
        <Section id='tech-stack' className='bg-gray-50/50 dark:bg-gray-900/50'>
          <SectionHeader>Tech Stack</SectionHeader>
          <Suspense fallback={<SectionSkeleton />}>
            <TechStack />
          </Suspense>
        </Section>
        <Section id='contact'>
          <div className='mx-auto max-w-1xl'>
            <SectionHeader>Get in Touch</SectionHeader>
            <Suspense fallback={<SectionSkeleton />}>
              <Contact />
            </Suspense>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
