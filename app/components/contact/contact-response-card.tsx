import * as React from "react";
import { Calendar, Clock } from "lucide-react";

interface ContactResponseCardProps {
  responseTime: string;
}

export function ContactResponseCard({
  responseTime,
}: ContactResponseCardProps) {
  return (
    <div className='p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl'>
      <div className='space-y-4'>
        <div className='flex items-center gap-3'>
          <div className='p-2 bg-primary/10 rounded-lg'>
            <Clock className='w-5 h-5 text-primary' />
          </div>
          <h3 className='text-xl font-semibold'>Response Time</h3>
        </div>

        <p className='text-muted-foreground'>{responseTime}</p>

        <div className='flex items-center gap-2 text-sm text-primary'>
          <Calendar className='w-4 h-4' />
          <span className='font-medium'>Usually within 24 hours</span>
        </div>
      </div>
    </div>
  );
}
