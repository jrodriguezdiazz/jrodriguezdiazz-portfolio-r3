import * as React from "react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface ContactAvailabilityCardProps {
  locale: Locale;
}

export async function ContactAvailabilityCard({
  locale,
}: ContactAvailabilityCardProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className='p-4 rounded-xl border border-muted/10 bg-background'>
      <div className='flex items-center gap-3'>
        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
        <div>
          <p className='font-medium text-sm'>
            {dictionary.contact.availability.title}
          </p>
          <p className='text-xs text-muted-foreground'>
            {dictionary.contact.availability.description}
          </p>
        </div>
      </div>
    </div>
  );
}
