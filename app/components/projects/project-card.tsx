import { ProjectFooter } from "./project-footer";
import { ProjectContent } from "./project-content";
import { ProjectImage } from "./project-image";

import { STATUS_CONFIG } from "@/lib/constants";
import { ProjectCardProps } from "@/lib/types";
import { Card } from "@/components/ui/card";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
  status,
  repo,
}: ProjectCardProps) {
  const currentStatus = STATUS_CONFIG[status];

  return (
    <Card className='overflow-hidden'>
      <ProjectImage image={image} title={title} currentStatus={currentStatus} />
      <ProjectContent
        title={title}
        description={description}
        technologies={technologies}
      />
      <ProjectFooter repo={repo} link={link} status={status} />
    </Card>
  );
}
