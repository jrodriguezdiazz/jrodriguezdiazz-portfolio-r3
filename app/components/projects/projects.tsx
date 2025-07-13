import * as React from "react";
import { Suspense } from "react";

import SectionSkeleton from "../common/section-skeleton";

import ProjectCard from "./project-card";

import { UseProjectsOptions } from "@/lib/types";
import { useProjects } from "@/hooks/use-projects";

export default function Projects({
  showFeatured = false,
  maxProjects = null,
  sortBy = "featured",
}: UseProjectsOptions) {
  const { projects, isEmpty } = useProjects({
    showFeatured,
    maxProjects,
    sortBy,
  });

  if (isEmpty) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500 text-lg'>No projects to display.</p>
      </div>
    );
  }

  return (
    <section className='space-y-6' aria-labelledby='projects-heading'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          My technical skills and expertise across different domains
        </p>
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr'>
        {projects.map(project => (
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
              repo={project.repo}
            />
          </Suspense>
        ))}
      </div>
    </section>
  );
}
