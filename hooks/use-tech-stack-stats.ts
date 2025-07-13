import * as React from "react";

import { TechStackStatsProps } from "@/lib/types";

type Technology = TechStackStatsProps["technologies"][0];

export const useTechStackStats = (technologies: Technology[]) => {
  return React.useMemo(() => {
    const allSkills = technologies.flatMap(cat => cat.skills);
    const totalSkills = allSkills.length;
    const coreSkills = allSkills.filter(skill => skill.isCore).length;
    const expertSkills = allSkills.filter(
      skill => skill.proficiency === "expert"
    ).length;
    const avgExperience =
      totalSkills > 0
        ? Math.round(
            allSkills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) /
              totalSkills
          )
        : 0;

    return {
      totalSkills,
      coreSkills,
      expertSkills,
      avgExperience,
      allSkills,
    };
  }, [technologies]);
};
