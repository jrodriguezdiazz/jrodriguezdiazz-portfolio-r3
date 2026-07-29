import { Mail } from "lucide-react";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface ContactTitleProps {
  locale: Locale;
}

export const ContactTitle = async ({ locale }: ContactTitleProps) => {
  const dictionary = await getDictionary(locale);

  return (
    <div className='flex items-center gap-3'>
      <div className='p-2 bg-primary/10 rounded-lg'>
        <Mail className='w-5 h-5 text-primary' />
      </div>
      <h2 className='text-2xl font-semibold'>{dictionary.contact.title}</h2>
    </div>
  );
};
