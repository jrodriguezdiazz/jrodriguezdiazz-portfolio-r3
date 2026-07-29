import { Code2 } from "lucide-react";
import { Fragment } from "react";

import type { Locale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/dictionaries";

export interface HeroSectionProps {
  locale: Locale;
}

export default async function HeroSection({ locale }: HeroSectionProps) {
  const dictionary = await getDictionary(locale);

  return (
    <Fragment>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4'>
        {dictionary.hero.name}
      </h1>

      <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0 mb-6 text-gray-600 dark:text-gray-400'>
        <div className='flex items-center space-x-2'>
          <Code2 className='h-5 w-5 text-blue-500' />
          <span className='text-lg font-semibold'>{dictionary.hero.title}</span>
        </div>
      </div>
    </Fragment>
  );
}
