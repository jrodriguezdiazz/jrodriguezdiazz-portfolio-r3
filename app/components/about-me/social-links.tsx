import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const getHoverColors = (label: string) => {
  const maps = {
    linkedin:
      "hover:bg-blue-50 dark:hover:bg-blue-900/20 group-hover:text-blue-600 dark:group-hover:text-blue-400",
    twitter:
      "hover:bg-blue-50 dark:hover:bg-blue-900/20 group-hover:text-blue-500 dark:group-hover:text-blue-400",
    email:
      "hover:bg-green-50 dark:hover:bg-green-900/20 group-hover:text-green-600 dark:group-hover:text-green-400",
    github:
      "hover:bg-gray-50 dark:hover:bg-gray-700 group-hover:text-gray-800 dark:group-hover:text-white",
  };

  return (
    maps[label.toLowerCase()] ||
    "hover:bg-gray-50 dark:hover:bg-gray-700 group-hover:text-gray-800 dark:group-hover:text-white"
  );
};

export default function SocialLinks() {
  // Filter out items without href (like Location)
  const socialLinks = CONTACT_INFO.filter(item => item.href);

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {socialLinks.map(contact => {
        const Icon = contact.icon;
        const hoverColors = getHoverColors(contact.label);

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
              className={`bg-white/80 dark:bg-gray-800/80 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center ${hoverColors}`}
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
