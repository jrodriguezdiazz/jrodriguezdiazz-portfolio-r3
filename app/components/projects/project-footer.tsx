import { Github } from "lucide-react";
import Link from "next/link";

import { CardFooter } from "@/components/ui/card";

export const ProjectFooter = ({
  repo,
  link,
  status,
}: {
  repo: string;
  link?: string;
  status: string;
}) => (
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
);
