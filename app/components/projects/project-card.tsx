import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Tag {
  name: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: Tag[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Card className='overflow-hidden'>
      <div className='relative aspect-video'>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className='object-cover transition-transform hover:scale-105'
        />
      </div>
      <CardContent className='p-4'>
        <h3 className='font-semibold text-xl mb-2'>{title}</h3>
        <p className='text-sm text-muted-foreground mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag, index) => {
            const IconComponent = tag.icon;
            return (
              <span
                key={index}
                className='inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-primary/20'
              >
                <IconComponent size={14} style={{ color: tag.color }} />
                {tag.name}
              </span>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className='p-4 pt-0'>
        <Link
          href={link}
          target='_blank'
          className='inline-flex items-center gap-2 text-sm hover:underline'
        >
          <Github className='h-4 w-4' />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  );
}
