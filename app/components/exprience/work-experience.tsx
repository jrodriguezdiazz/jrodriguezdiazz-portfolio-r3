"use client";

import { ExternalLink, Calendar, MapPin, Building2, Users } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { WorkExperienceEntry } from "@/lib/types";
import { EXPERIENCES, TECH_ICONS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const getTechIcon = (
  tech: string
): {
  icon: React.ComponentType<{ className?: string }>;
  color: string;
} | null => {
  return TECH_ICONS[tech] || null;
};

const formatDateRange = (startDate: string, endDate: string): string => {
  return `${startDate} - ${endDate}`;
};

const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);

  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

  if (diffMonths < 12) {
    return `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  } else {
    const years = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
    return `${years} year${years > 1 ? "s" : ""}${months > 0 ? ` ${months} month${months > 1 ? "s" : ""}` : ""}`;
  }
};

interface CompanyLinkProps {
  href: string;
  children: React.ReactNode;
}

const CompanyLink: React.FC<CompanyLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='hover:underline inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors'
  >
    {children}
    <ExternalLink className='h-3 w-3' />
  </Link>
);

interface TechBadgeProps {
  tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
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

interface ExperienceCardProps {
  experience: WorkExperienceEntry;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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

        <div className='flex flex-col items-end text-right'>
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

export default function WorkExperience() {
  const totalExperience = React.useMemo(() => {
    if (EXPERIENCES.length === 0) return "0 years";

    const earliest = EXPERIENCES[EXPERIENCES.length - 1];
    const latest = EXPERIENCES[0];

    return calculateDuration(earliest.startDate, latest.endDate);
  }, []);

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          {totalExperience} of professional software development experience
        </p>
      </div>

      <div className='space-y-6'>
        {EXPERIENCES.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
