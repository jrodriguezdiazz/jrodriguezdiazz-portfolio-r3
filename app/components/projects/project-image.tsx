import Image from "next/image";

import type { ProjectStatusConfig } from "@/lib/types";

interface ProjectImageProps {
  image?: string;
  title: string;
  currentStatus: ProjectStatusConfig;
}

export const ProjectImage = ({
  image,
  title,
  currentStatus,
}: ProjectImageProps) => (
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
);
