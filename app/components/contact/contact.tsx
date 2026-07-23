"use client";

import * as React from "react";

import { ContactHeader } from "./contact-header";
import { ContactDetails } from "./contact-details";
import { ContactCta } from "./contact-cta";
import { ContactResponseCard } from "./contact-response-card";
import { ContactQuickActions } from "./contact-quick-actions";
import { ContactAvailabilityCard } from "./contact-availability-card";
import { ContactTitle } from "./contact-title";

import { CONTACT_INFO, RESPONSE_TYPE } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className='space-y-8'>
      <ContactHeader />
      <div className='grid gap-8 lg:grid-cols-3'>
        <Card className='lg:col-span-2 p-6 lg:p-8 relative overflow-hidden'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16' />
          <div className='relative space-y-6'>
            <ContactTitle />
            <ContactDetails contactInfo={CONTACT_INFO} />
            <ContactCta />
          </div>
        </Card>
        <div className='space-y-6'>
          <ContactResponseCard responseTime={RESPONSE_TYPE} />
          <ContactQuickActions />
          <ContactAvailabilityCard />
        </div>
      </div>
    </div>
  );
}
