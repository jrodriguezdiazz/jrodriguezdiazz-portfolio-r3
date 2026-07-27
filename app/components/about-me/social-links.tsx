import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export default function SocialLinks() {
  const socialLinks = CONTACT_INFO.filter(item => item.href);

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-8'>
      {socialLinks.map(contact => {
        const Icon = contact.icon;

        return (
          <Link
            key={contact.label}
            href={contact.href!}
            target='_blank'
            className='group'
          >
            <Button
              variant='outline'
              size='lg'
              className={`bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200`}
            >
              <Icon className='h-5 w-5 mr-2' />
              {contact.label}
              <span className='sr-only'>{contact.label} Profile</span>
            </Button>
          </Link>
        );
      })}
    </div>
  );
}
