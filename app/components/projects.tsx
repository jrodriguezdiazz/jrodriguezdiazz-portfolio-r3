import ProjectCard from "./project-card";
import SectionSkeleton from "./section-skeleton";
import { Suspense } from "react";

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

export default function Projects() {
  return (
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
  )
}
