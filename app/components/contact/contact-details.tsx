import * as React from "react";

import { ContactInfoItem } from "./contact-info-item";

import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { ContactInfo } from "@/lib/types";

interface ContactDetailsProps {
  contactInfo: ContactInfo[];
  locale: Locale;
}

export async function ContactDetails({
  contactInfo,
  locale,
}: ContactDetailsProps) {
  const dictionary = await getDictionary(locale);

  const localizedContactInfo = contactInfo.map(info => {
    const labelMap: Record<string, string> = {
      Email: dictionary.contact.labels.email,
      LinkedIn: dictionary.contact.labels.linkedIn,
      GitHub: dictionary.contact.labels.github,
      Twitter: dictionary.contact.labels.twitter,
      Location: dictionary.contact.labels.location,
    };

    return {
      ...info,
      label: labelMap[info.label] ?? info.label,
    };
  });

  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      {localizedContactInfo.map((info, index) => (
        <div key={index} className='group'>
          <ContactInfoItem info={info} />
        </div>
      ))}
    </div>
  );
}
