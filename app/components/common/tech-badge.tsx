import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { TechBadgeProps } from "@/lib/types";
import { getTechIcon } from "@/lib/utils";

export const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const techData = getTechIcon(tech);

  return (
    <Badge className='flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20 transition-colors'>
      {techData && (
        <techData.icon className='h-3 w-3' style={{ color: techData.color }} />
      )}
      {tech}
    </Badge>
  );
};
