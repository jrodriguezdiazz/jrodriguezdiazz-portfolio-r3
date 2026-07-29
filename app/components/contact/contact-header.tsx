import * as React from "react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface ContactHeaderProps {
  locale: Locale;
}

export async function ContactHeader({ locale }: ContactHeaderProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className='text-center space-y-4'>
      <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
        {dictionary.contact.header.intro}
      </p>
    </div>
  );
}
