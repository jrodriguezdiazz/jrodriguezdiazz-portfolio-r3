"use client";

import {
  ArrowUpRight,
  Calendar,
  Clock,
  Heart,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { ContactInfoItem } from "./contact-info-item";

import { CONTACT_INFO, RESPONSE_TYPE } from "@/lib/constants";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className='space-y-8'>
      {/* Header */}
      <div className='text-center space-y-4'>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          Have a project in mind or just want to chat? I'd love to hear from
          you. Reach out through any of the channels below and I'll get back to
          you soon.
        </p>
      </div>

      <div className='grid gap-8 lg:grid-cols-3'>
        {/* Main Contact Information */}
        <Card className='lg:col-span-2 p-6 lg:p-8 relative overflow-hidden'>
          {/* Background decoration */}
          <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16' />

          <div className='relative space-y-6'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-primary/10 rounded-lg'>
                <Mail className='w-5 h-5 text-primary' />
              </div>
              <h2 className='text-2xl font-semibold'>Contact Information</h2>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              {CONTACT_INFO.map((info, index) => (
                <div key={index} className='group'>
                  <ContactInfoItem info={info} />
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className='mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20'>
              <div className='flex items-start gap-4'>
                <div className='p-2 bg-primary/10 rounded-lg shrink-0'>
                  <Heart className='w-5 h-5 text-primary' />
                </div>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>
                    Ready to start a conversation?
                  </h3>
                  <p className='text-sm text-muted-foreground'>
                    Whether it's a quick question or a complex project, I'm here
                    to help. Don't hesitate to reach out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Response Time Card */}
          <Card className='p-6 bg-gradient-to-br from-primary/5 to-primary/10'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-primary/10 rounded-lg'>
                  <Clock className='w-5 h-5 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Response Time</h3>
              </div>

              <p className='text-muted-foreground'>{RESPONSE_TYPE}</p>

              <div className='flex items-center gap-2 text-sm text-primary'>
                <Calendar className='w-4 h-4' />
                <span className='font-medium'>Usually within 24 hours</span>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <div className='space-y-3'>
            <h3 className='font-semibold text-sm text-muted-foreground uppercase tracking-wide'>
              Preferred Contact Methods
            </h3>

            <Card className='p-4 hover:shadow-md transition-all cursor-pointer group hover:border-green-200'>
              <Link href='mailto:jrodriguezdiazz@outlook.com'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors'>
                      <Phone className='w-4 h-4 text-green-600' />
                    </div>
                    <div>
                      <p className='font-medium text-sm'>Schedule a Call</p>
                      <p className='text-xs text-muted-foreground'>
                        15-30 min chat
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className='w-4 h-4 text-muted-foreground group-hover:text-green-600 transition-colors' />
                </div>
              </Link>
            </Card>
          </div>

          {/* Availability Status */}
          <Card className='p-4'>
            <div className='flex items-center gap-3'>
              <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
              <div>
                <p className='font-medium text-sm'>Currently Available</p>
                <p className='text-xs text-muted-foreground'>
                  Open to new projects
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
