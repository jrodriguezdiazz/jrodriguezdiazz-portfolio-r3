import { Suspense, useMemo } from "react";
import {
  SiNextdotjs,
  SiPrisma,
  SiStripe,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiSocketdotio,
  SiMongodb,
  SiOpenai,
  SiTailwindcss,
  SiVercel,
  SiD3Dotjs,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";

import ProjectCard from "./project-card";
import SectionSkeleton from "./section-skeleton";

// Project data with improved structure and more realistic examples
const PROJECTS = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration for seamless online shopping experiences.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/username/ecommerce-platform",
    tags: [
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    status: "live",
    featured: true,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A real-time collaborative task management application with team workspaces, deadline tracking, and progress analytics.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/username/task-manager",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    status: "live",
    featured: false,
  },
  {
    id: "ai-chat-interface",
    title: "AI Chat Interface",
    description:
      "An intelligent chat interface with natural language processing, conversation memory, and multi-modal capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/username/ai-chat",
    tags: [
      { name: "OpenAI", icon: SiOpenai, color: "#412991" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vercel AI SDK", icon: SiVercel, color: "#000000" },
    ],
    status: "development",
    featured: true,
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and team insights.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://github.com/username/analytics-dashboard",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "D3.js", icon: SiD3Dotjs, color: "#F9A03C" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    ],
    status: "live",
    featured: false,
  },
];

export default function Projects({
  showFeatured = false,
  maxProjects = null,
  sortBy = "featured",
}) {
  const processedProjects = useMemo(() => {
    let filtered = [...PROJECTS];

    // Filter by featured status if requested
    if (showFeatured) {
      filtered = filtered.filter(project => project.featured);
    }

    // Sort projects
    if (sortBy === "featured") {
      filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
    } else if (sortBy === "title") {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Limit number of projects if specified
    if (maxProjects && maxProjects > 0) {
      filtered = filtered.slice(0, maxProjects);
    }

    return filtered;
  }, [showFeatured, maxProjects, sortBy]);

  if (processedProjects.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500 text-lg'>No projects to display.</p>
      </div>
    );
  }

  return (
    <section className='w-full' aria-labelledby='projects-heading'>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
        {processedProjects.map(project => (
          <Suspense
            key={project.id}
            fallback={
              <SectionSkeleton
                className='min-h-[300px]'
                aria-label={`Loading ${project.title}`}
              />
            }
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
              status={project.status}
              featured={project.featured}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
