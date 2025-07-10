import * as React from "react";

import { PROFICIENCY_CONFIG } from "@/lib/constants";
import { ProficiencyIndicatorProps } from "@/lib/types";

export const ProficiencyIndicator: React.FC<ProficiencyIndicatorProps> = ({
  proficiency,
  years,
}) => {
  const config = PROFICIENCY_CONFIG[proficiency];
  const dots = Array.from({ length: 4 }, (_, i) => i);
  const filledDots =
    proficiency === "beginner"
      ? 1
      : proficiency === "intermediate"
        ? 2
        : proficiency === "advanced"
          ? 3
          : 4;

  return (
    <div className='flex items-center gap-2'>
      <div className='flex gap-1'>
        {dots.map(dot => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot < filledDots
                ? config.dotColor
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
      <span className={`text-xs font-medium ${config.color}`}>{years}y</span>
    </div>
  );
};
