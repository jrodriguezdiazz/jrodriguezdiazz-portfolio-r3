import * as React from "react";

import { ContactInfoItem } from "./contact-info-item";

import { ContactInfo } from "@/lib/types";

interface ContactDetailsProps {
  contactInfo: ContactInfo[];
}

export function ContactDetails({ contactInfo }: ContactDetailsProps) {
  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      {contactInfo.map((info, index) => (
        <div key={index} className='group'>
          <ContactInfoItem info={info} />
        </div>
      ))}
    </div>
  );
}
