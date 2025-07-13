import * as React from "react";

import { ContactInfoItemProps } from "@/lib/types";

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ info }) => {
  const content = (
    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors'>
      <div className='p-2 bg-primary/10 rounded-lg'>
        <info.icon className='w-4 h-4 text-primary' />
      </div>
      <div>
        <p className='text-sm font-medium'>{info.label}</p>
        <p className='text-sm text-muted-foreground'>{info.value}</p>
      </div>
    </div>
  );

  if (info.href) {
    return (
      <a
        href={info.href}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        {content}
      </a>
    );
  }

  return content;
};
