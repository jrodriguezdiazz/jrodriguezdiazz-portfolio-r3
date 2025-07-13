import { XCircle } from "lucide-react";
import * as React from "react";

import { FormFieldProps } from "@/lib/types";

export const FormField: React.FC<FormFieldProps> = ({
  label,
  icon: Icon,
  error,
  required,
  children,
}) => (
  <div className='space-y-2'>
    <label className='flex items-center gap-2 text-sm font-medium'>
      <Icon className='w-4 h-4 text-muted-foreground' />
      {label}
      {required && <span className='text-destructive'>*</span>}
    </label>
    {children}
    {error && (
      <p className='text-sm text-destructive flex items-center gap-1'>
        <XCircle className='w-3 h-3' />
        {error}
      </p>
    )}
  </div>
);
