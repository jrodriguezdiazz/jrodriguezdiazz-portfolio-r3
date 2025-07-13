import { Building2, Calendar, MapPin, Users } from "lucide-react";
import * as React from "react";

import { CompanyLink } from "@/app/components/exprience/company-link";
import { TechBadge } from "@/app/components/exprience/tech-badge";
import { ExperienceCardProps } from "@/lib/types";
import { calculateDuration, formatDateRange } from "@/lib/utils";

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const duration = calculateDuration(experience.startDate, experience.endDate);
  const isCurrentRole = experience.endDate === "Present";

  return (
    <div className='border rounded-lg p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow bg-card'>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4'>
        <div className='space-y-2'>
          <div className='flex items-center gap-2'>
            <Building2 className='h-4 w-4 text-muted-foreground' />
            <h2 className='text-xl font-semibold'>
              <CompanyLink href={experience.companyLink}>
                {experience.company}
              </CompanyLink>
            </h2>
          </div>

          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-muted-foreground' />
            <h3 className='text-lg font-medium'>
              <CompanyLink href={experience.clientLink}>
                {experience.client}
              </CompanyLink>
            </h3>
          </div>

          <div className='flex items-center gap-4 text-sm text-muted-foreground'>
            <div className='flex items-center gap-1'>
              <MapPin className='h-3 w-3' />
              <span>{experience.modality}</span>
            </div>
            <span className='font-medium'>{experience.position}</span>
          </div>
        </div>

        <div className='flex flex-col items-start text-left md:items-end md:text-right'>
          <div className='flex items-center gap-1 text-sm text-muted-foreground'>
            <Calendar className='h-3 w-3' />
            <span>
              {formatDateRange(experience.startDate, experience.endDate)}
            </span>
          </div>
          <div className='text-xs text-muted-foreground mt-1'>
            {duration}
            {isCurrentRole && (
              <span className='ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                Current
              </span>
            )}
          </div>
        </div>
      </div>

      <div className='space-y-3'>
        <h4 className='font-medium text-sm text-muted-foreground tracking-wide'>
          Key Achievements
        </h4>
        <ul className='space-y-3'>
          {experience.responsibilities.map((responsibility, idx) => (
            <li key={idx} className='flex items-start gap-2'>
              <div className='w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0' />
              <span className='text-sm text-muted-foreground leading-relaxed'>
                {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className='space-y-2'>
        <h4 className='font-medium text-sm text-muted-foreground tracking-wide'>
          Technologies
        </h4>
        <div className='flex flex-wrap gap-2'>
          {experience.technologies.map((tech, idx) => (
            <TechBadge key={idx} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};
