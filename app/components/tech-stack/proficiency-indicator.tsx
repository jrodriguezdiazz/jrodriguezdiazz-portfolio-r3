import * as React from "react";

import { useProficiencyIndicator } from "@/hooks/use-proficiency-indicator";
import { ProficiencyIndicatorProps } from "@/lib/types";

export const ProficiencyIndicator: React.FC<ProficiencyIndicatorProps> = ({
  proficiency,
  years,
}) => {
  const { config, dots, getDotClassName, yearsDisplay } =
    useProficiencyIndicator(proficiency, years);

  return (
    <div className='flex items-center gap-2'>
      <div className='flex gap-1'>
        {dots.map(dot => (
          <div key={dot} className={getDotClassName(dot)} />
        ))}
      </div>
      <span className={`text-xs font-medium ${config.color}`}>
        {yearsDisplay}
      </span>
    </div>
  );
};
