import * as React from "react";
import { Heart } from "lucide-react";

export function ContactCta() {
  return (
    <div className='mt-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/20'>
      <div className='flex items-start gap-4'>
        <div className='p-2 bg-primary/10 rounded-lg shrink-0'>
          <Heart className='w-5 h-5 text-primary' />
        </div>
        <div className='space-y-2'>
          <h3 className='font-semibold'>Ready to start a conversation?</h3>
          <p className='text-sm text-muted-foreground'>
            Whether it's a quick question or a complex project, I'm here to
            help. Don't hesitate to reach out!
          </p>
        </div>
      </div>
    </div>
  );
}
