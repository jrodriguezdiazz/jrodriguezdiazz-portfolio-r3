import * as React from "react";

import { PROFICIENCY_CONFIG } from "@/lib/constants";
import { ProficiencyIndicatorProps } from "@/lib/types";

type Proficiency = ProficiencyIndicatorProps["proficiency"];

export const useProficiencyIndicator = (
  proficiency: Proficiency,
  years: number
) => {
  const config = React.useMemo(
    () => PROFICIENCY_CONFIG[proficiency],
    [proficiency]
  );

  const dots = React.useMemo(() => Array.from({ length: 4 }, (_, i) => i), []);

  const filledDots = React.useMemo(() => {
    switch (proficiency) {
      case "beginner":
        return 1;
      case "intermediate":
        return 2;
      case "advanced":
        return 3;
      case "expert":
        return 4;
      default:
        return 1;
    }
  }, [proficiency]);

  const getDotClassName = React.useCallback(
    (dotIndex: number) => {
      return `w-2 h-2 rounded-full ${
        dotIndex < filledDots ? config.dotColor : "bg-gray-200 dark:bg-gray-700"
      }`;
    },
    [filledDots, config.dotColor]
  );

  return {
    config,
    dots,
    filledDots,
    getDotClassName,
    yearsDisplay: `${years}y`,
  };
};
