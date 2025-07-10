import { Suspense, useMemo } from "react";
import {
  SiReactos,
  SiFirebase,
  SiExpo,
  SiPython,
  SiTelegram,
  SiNodedotjs,
  SiAngular,
  SiReact,
  SiMui,
  SiTypescript,
  SiGoogle,
} from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";

import ProjectCard from "./project-card";
import SectionSkeleton from "./section-skeleton";

// Updated project data with your actual projects
const PROJECTS = [
  {
    id: "flixo",
    title: "Flixo",
    description:
      "🤳🏾 Made to share your best moments and smiles with your friends.",
    image: "/projects/flixo.png",
    link: "https://github.com/jrodriguezdiazz/Flixo",
    tags: [
      { name: "React Native", icon: SiReactos, color: "#61DAFB" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Expo", icon: SiExpo, color: "#000020" },
    ],
    status: "live",
    featured: true,
  },
  {
    id: "belphoebe",
    title: "Belphoebe",
    description:
      "Belphoebe is the virtual assistant of LICEM-Retro, her goal is to help you rent films on our platform, where you will find a great diversity of films 💁🏻‍♀️",
    image: "/projects/belphoebe.png",
    link: "https://t.me/BelphoebeBot",
    tags: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
      { name: "Telegram API", icon: SiTelegram, color: "#26A5E4" },
    ],
    status: "live",
    featured: true,
  },
  {
    id: "school-administrator",
    title: "School Administrator",
    description:
      "This platform is an example of a system that will allow managing students of a school",
    image: "/projects/school-administrator.png",
    link: "https://school-administrator-320621.web.app/",
    tags: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
    ],
    status: "live",
    featured: false,
  },
  {
    id: "book-search-engine",
    title: "Book Search Engine",
    description:
      "🔍 📚 An application that will allow users to search for books by entering a query (Title, Author, etc). Display the resulting books in a list on the page with all the corresponding data.",
    image: "/projects/book-search-engine.png",
    link: "https://book-search-engine-black.vercel.app",
    tags: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Material-UI", icon: SiMui, color: "#007FFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Google Books API", icon: SiGoogle, color: "#4285F4" },
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
