import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { ProjectCardProps } from "@/lib/types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
  status,
  repo,
}: ProjectCardProps) {
  const statusConfig = {
    live: {
      color: "bg-green-500",
      text: "Live",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
    },
    offline: {
      color: "bg-gray-500",
      text: "Offline",
      textColor: "text-gray-700",
      bgColor: "bg-gray-50",
    },
  };

  const currentStatus = statusConfig[status];

  return (
    <Card className='overflow-hidden'>
      <div className='relative aspect-video'>
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className='object-cover transition-transform hover:scale-105'
        />
        {/* Status Badge */}
        <div className='absolute top-3 right-3'>
          <div
            className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${currentStatus.bgColor} ${currentStatus.textColor} border border-white/20 shadow-sm`}
          >
            <div className={`w-2 h-2 rounded-full ${currentStatus.color}`} />
            {currentStatus.text}
          </div>
        </div>
      </div>
      <CardContent className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <h3 className='font-semibold text-xl'>{title}</h3>
        </div>
        <p className='text-sm text-muted-foreground mb-4'>{description}</p>
        <h4 className='font-medium text-sm text-muted-foreground tracking-wide mb-2'>
          Technologies
        </h4>
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
        <div className='flex items-center justify-between w-full'>
          <Link
            href={repo}
            target='_blank'
            className='inline-flex items-center gap-2 text-sm hover:underline'
          >
            <Github className='h-4 w-4' />
            View on GitHub
          </Link>
          {status === "live" && link && (
            <Link
              href={link}
              target='_blank'
              className='inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700 hover:underline'
            >
              <div className='w-2 h-2 rounded-full bg-green-500' />
              View Live
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
