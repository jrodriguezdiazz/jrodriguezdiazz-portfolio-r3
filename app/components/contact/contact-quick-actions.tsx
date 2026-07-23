import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export function ContactQuickActions() {
  return (
    <div className='space-y-3'>
      <h3 className='font-semibold text-sm text-muted-foreground uppercase tracking-wide'>
        Preferred Contact Methods
      </h3>

      <div className='space-y-3'>
        <div className='group'>
          <Link href='mailto:jrodriguezdiazz@outlook.com'>
            <div className='cursor-pointer hover:shadow-md transition-all group hover:border-green-200 border rounded-lg p-4'>
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
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
