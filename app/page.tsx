import Link from "next/link";
import { Suspense } from "react";
import AboutMe from "./components/about-me";
import ContactForm from "./components/contact-form";
import NavBar from "./components/nav-bar";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import WorkExperience from "./components/work-experience";

// Loading components for better UX
const SectionSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
    <div className="space-y-4">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
    </div>
  </div>
);

// Project data moved to a constant for better maintainability
const PROJECTS = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["Next.js", "Prisma", "Stripe"],
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    id: "ai-chat-interface",
    title: "AI Chat Interface",
    description: "An AI-powered chat interface with natural language processing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com",
    tags: ["OpenAI", "Next.js", "TailwindCSS"],
  },
];

// Section wrapper component for consistency
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-12 md:py-24 lg:py-32 ${className}`}>
    <div className="container px-4 md:px-6">
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

      <main className="container px-4 md:px-6">
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Suspense key={project.id} fallback={<SectionSkeleton />}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  tags={project.tags}
                />
              </Suspense>
            ))}
          </div>
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
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 jrodriguezdiazz.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 transition-colors hover:text-gray-900 dark:hover:text-gray-100"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
