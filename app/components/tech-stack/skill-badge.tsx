import { Star } from "lucide-react";
import * as React from "react";

import { ProficiencyIndicator } from "@/app/components/tech-stack/proficiency-indicator";
import { PROFICIENCY_CONFIG } from "@/lib/constants";
import { SkillBadgeProps } from "@/lib/types";

export const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  const config = PROFICIENCY_CONFIG[skill.proficiency];

  return (
    <div
      className={`
      group relative flex flex-col items-center gap-2 p-3 rounded-lg border
      ${config.bgColor} hover:shadow-md transition-all duration-200
      ${skill.isCore ? "ring-2 ring-primary/20" : ""}
    `}
    >
      <div className='flex items-center gap-2'>
        <skill.icon
          className='w-5 h-5'
          style={{ color: skill.color || "currentColor" }}
        />
        <span className='font-medium text-sm text-foreground'>
          {skill.name}
        </span>
        {skill.isCore && (
          <Star className='w-3 h-3 text-amber-500 dark:text-amber-400' />
        )}
      </div>

      <ProficiencyIndicator
        proficiency={skill.proficiency}
        years={skill.yearsOfExperience}
      />

      {/* Tooltip */}
      <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10'>
        {config.label} • {skill.yearsOfExperience} years
        {skill.isCore && " • Core Skill"}
      </div>
    </div>
  );
};
