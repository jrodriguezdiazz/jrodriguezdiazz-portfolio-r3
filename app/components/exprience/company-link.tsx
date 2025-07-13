import { ExternalLink } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { CompanyLinkProps } from "@/lib/types";

export const CompanyLink: React.FC<CompanyLinkProps> = ({ href, children }) => (
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
