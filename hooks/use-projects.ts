import * as React from "react";

import { UseProjectsOptions } from "@/lib/types";
import { PROJECTS } from "@/lib/constants";

export const useProjects = ({
  showFeatured = false,
  maxProjects = null,
  sortBy = "featured",
}: UseProjectsOptions = {}) => {
  const processedProjects = React.useMemo(() => {
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

  const isEmpty = processedProjects.length === 0;

  return {
    projects: processedProjects,
    isEmpty,
    totalCount: processedProjects.length,
    // Additional utilities that might be useful
    featuredCount: processedProjects.filter(p => p.featured).length,
    nonFeaturedCount: processedProjects.filter(p => !p.featured).length,
  };
};
