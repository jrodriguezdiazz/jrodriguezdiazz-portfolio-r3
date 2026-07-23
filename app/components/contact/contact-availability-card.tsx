import * as React from "react";

export function ContactAvailabilityCard() {
  return (
    <div className='p-4 rounded-xl border border-muted/10 bg-background'>
      <div className='flex items-center gap-3'>
        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
        <div>
          <p className='font-medium text-sm'>Currently Available</p>
          <p className='text-xs text-muted-foreground'>Open to new projects</p>
        </div>
      </div>
    </div>
  );
}
