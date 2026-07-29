"use client";

import { NoExperience } from "./no-experience";

import { ExperienceCard } from "@/app/components/exprience/experience-card";
import { useWorkExperience } from "@/hooks/use-work-experience";
import type { Locale } from "@/i18n/locales";
import en from "@/i18n/translations/en";
import es from "@/i18n/translations/es";

export interface WorkExperienceProps {
  locale?: Locale;
}

export default function WorkExperience({ locale = "en" }: WorkExperienceProps) {
  const { experiences, totalExperience, isEmpty } = useWorkExperience(locale);
  const dictionary = locale === "es" ? es : en;

  if (isEmpty) return <NoExperience />;

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          {dictionary.experience.summary.replace(
            "{count}",
            totalExperience.toString()
          )}
        </p>
      </div>

      <div className='space-y-6'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
