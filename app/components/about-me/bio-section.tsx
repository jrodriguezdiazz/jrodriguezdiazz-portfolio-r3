import { getYearsOfExperience } from "@/lib/utils";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface BioSectionProps {
  locale: Locale;
}

export default async function BioSection({ locale }: BioSectionProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8'>
      <div className='prose prose-lg max-w-none text-gray-700 dark:text-gray-300'>
        <p className='leading-relaxed text-center'>
          {dictionary.bio.intro
            .replace("{role}", dictionary.hero.title)
            .replace("{years}", getYearsOfExperience().toString())}
        </p>
        <p className='leading-relaxed text-center mt-4'>
          {dictionary.bio.outro}
        </p>
      </div>
    </div>
  );
}
