import * as React from "react";
import { Calendar, Clock } from "lucide-react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

interface ContactResponseCardProps {
  responseTime: string;
  locale: Locale;
}

export async function ContactResponseCard({
  responseTime,
  locale,
}: ContactResponseCardProps) {
  const dictionary = await getDictionary(locale);

  return (
    <div className='p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl'>
      <div className='space-y-4'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-primary/10 rounded-lg'>
            <Clock className='w-5 h-5 text-primary' />
          </div>
          <h3 className='text-xl font-semibold'>
            {dictionary.contact.responseCard.title}
          </h3>
        </div>

        <p className='text-muted-foreground'>{responseTime}</p>

        <div className='flex items-center gap-2 text-sm text-primary'>
          <Calendar className='w-4 h-4' />
          <span className='font-medium'>
            {dictionary.contact.responseCard.description}
          </span>
        </div>
      </div>
    </div>
  );
}
