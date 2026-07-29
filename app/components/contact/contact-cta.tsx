import * as React from "react";
import { Heart } from "lucide-react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface ContactCtaProps {
  locale: Locale;
}

export async function ContactCta({ locale }: ContactCtaProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className='mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20'>
      <div className='flex items-start gap-4'>
        <div className='p-2 bg-primary/10 rounded-lg shrink-0'>
          <Heart className='w-5 h-5 text-primary' />
        </div>
        <div className='space-y-2'>
          <h3 className='font-semibold'>{dictionary.contact.cta.title}</h3>
          <p className='text-sm text-muted-foreground'>
            {dictionary.contact.cta.description}
          </p>
        </div>
      </div>
    </div>
  );
}
