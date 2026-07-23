import { Mail } from "lucide-react";

export const ContactTitle = () => (
  <div className='flex items-center gap-3'>
    <div className='p-2 bg-primary/10 rounded-lg'>
      <Mail className='w-5 h-5 text-primary' />
    </div>
    <h2 className='text-2xl font-semibold'>Contact Information</h2>
  </div>
);
