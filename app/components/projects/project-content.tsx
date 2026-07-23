import { TechBadge } from "../common/tech-badge";

import { CardContent } from "@/components/ui/card";

export const ProjectContent = ({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}) => (
  <CardContent className='p-4'>
    <div className='flex items-center justify-between mb-2'>
      <h3 className='font-semibold text-xl'>{title}</h3>
    </div>
    <p className='text-sm text-muted-foreground mb-4'>{description}</p>
    <h4 className='font-medium text-sm text-muted-foreground tracking-wide mb-2'>
      Technologies
    </h4>
    <div className='flex flex-wrap gap-2'>
      {technologies.map((tech, idx) => (
        <TechBadge key={idx} tech={tech} />
      ))}
    </div>
  </CardContent>
);
