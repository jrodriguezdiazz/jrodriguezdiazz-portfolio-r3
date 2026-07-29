import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";

export interface FooterProps {
  locale: Locale;
}

export default async function Footer({ locale }: FooterProps) {
  const dictionary = await getDictionary(locale);

  return (
    <footer className='border-t bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm'>
      <div className='container mx-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 max-w-7xl'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          {dictionary.footer.rights.replace(
            "{year}",
            new Date().getFullYear().toString()
          )}
        </p>
      </div>
    </footer>
  );
}
