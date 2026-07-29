import * as React from "react";

import { UseProjectsOptions } from "@/lib/types";
import { PROJECTS } from "@/lib/constants";
import en from "@/i18n/translations/en";
import es from "@/i18n/translations/es";
import type { Locale } from "@/i18n/locales";

export const useProjects = ({
  showFeatured = false,
  maxProjects = null,
  sortBy = "featured",
  locale = "en",
}: UseProjectsOptions & { locale?: Locale } = {}) => {
  const dictionary = locale === "es" ? es : en;

  const processedProjects = React.useMemo(() => {
    let filtered = PROJECTS.map(project => {
      const content =
        dictionary.projects.items[
          project.id as keyof typeof dictionary.projects.items
        ];
      const title = content?.title ?? project.title;
      const description = content?.description ?? project.description;

      return {
        ...project,
        title,
        description,
      };
    });

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
  }, [dictionary, showFeatured, maxProjects, sortBy]);

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
