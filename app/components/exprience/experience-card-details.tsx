import * as React from "react";

interface ExperienceCardDetailsProps {
  responsibilities: string[];
  technologies: string[];
}

export function ExperienceCardDetails({
  responsibilities,
  technologies,
}: ExperienceCardDetailsProps) {
  return (
    <div className='space-y-4'>
      <div className='space-y-3'>
        <h4 className='font-medium text-sm text-muted-foreground tracking-wide'>
          Key Achievements
        </h4>
        <ul className='space-y-3'>
          {responsibilities.map((responsibility, idx) => (
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
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className='rounded-full border border-muted-foreground/20 px-3 py-1 text-xs text-muted-foreground'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
