import { Calendar, Code2 } from "lucide-react";
import { Fragment } from "react";

export default function HeroSection() {
  return (
    <Fragment>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4'>
        Jorge Rodríguez
      </h1>

      <div className='flex flex-col sm:flex-row items-center justify-center sm:space-x-6 space-y-4 sm:space-y-0 mb-6 text-gray-600 dark:text-gray-400'>
        <div className='flex items-center space-x-2'>
          <Code2 className='h-5 w-5 text-blue-500' />
          <span className='text-lg font-semibold'>
            Senior Software Engineer
          </span>
        </div>
        <div className='flex items-center space-x-2'>
          <Calendar className='h-4 w-4 text-green-500' />
          <span>6+ Years Experience</span>
        </div>
      </div>
    </Fragment>
  );
}
