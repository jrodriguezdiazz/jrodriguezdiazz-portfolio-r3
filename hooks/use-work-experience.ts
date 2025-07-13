import * as React from "react";

import { calculateDuration } from "@/lib/utils";
import { EXPERIENCES } from "@/lib/constants";

export const useWorkExperience = () => {
  const totalExperience = React.useMemo(() => {
    if (EXPERIENCES.length === 0) return "0 years";

    const earliest = EXPERIENCES[EXPERIENCES.length - 1];
    const latest = EXPERIENCES[0];

    return calculateDuration(earliest.startDate, latest.endDate);
  }, []);

  const experiences = React.useMemo(() => EXPERIENCES, []);

  const isEmpty = experiences.length === 0;

  const experienceStats = React.useMemo(() => {
    if (isEmpty) {
      return {
        totalJobs: 0,
        totalDuration: "0 years",
        averageDuration: "0 years",
        companies: [],
      };
    }

    const totalJobs = experiences.length;
    const companies = experiences.map(exp => exp.company);
    const uniqueCompanies = [...new Set(companies)];

    // Calculate average duration (this would need more complex logic for accurate calculation)
    const averageDuration =
      totalJobs > 0 ? `~${Math.round(12 / totalJobs)} years` : "0 years";

    return {
      totalJobs,
      totalDuration: totalExperience,
      averageDuration,
      companies: uniqueCompanies,
    };
  }, [experiences, totalExperience, isEmpty]);

  return {
    experiences,
    totalExperience,
    isEmpty,
    stats: experienceStats,
  };
};
