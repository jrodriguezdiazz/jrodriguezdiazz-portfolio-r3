import * as React from "react";

import { ExperienceCardDetails } from "@/app/components/exprience/experience-card-details";
import { ExperienceCardHeader } from "@/app/components/exprience/experience-card-header";
import { ExperienceCardProps } from "@/lib/types";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  return (
    <div className='border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow bg-card'>
      <ExperienceCardHeader experience={experience} />
      <ExperienceCardDetails
        responsibilities={experience.responsibilities}
        technologies={experience.technologies}
      />
    </div>
  );
};
