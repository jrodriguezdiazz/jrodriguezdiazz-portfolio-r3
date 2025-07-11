import { Github, Linkedin, Mail, Calendar, Code2, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-4 py-16'>
        <div className='max-w-4xl mx-auto'>
          {/* Header Section */}
          <div className='text-center mb-12'>
            <div className='relative w-40 h-40 mx-auto mb-8 group'>
              <div className='absolute inset-0 rounded-full'>
                <div className='w-full h-full rounded-full bg-white dark:bg-gray-900 p-1'>
                  <Image
                    src='/profile-photo.jpeg'
                    alt='Jorge Rodríguez Díaz - Senior Software Engineer'
                    fill
                    className='rounded-full object-cover transition-transform group-hover:scale-105'
                    priority
                  />
                </div>
              </div>
            </div>

            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4'>
              Jorge Rodríguez Díaz
            </h1>

            <div className='flex items-center justify-center space-x-6 mb-6 text-gray-600 dark:text-gray-400'>
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
          </div>

          {/* Bio Section */}
          <div className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8'>
            <div className='prose prose-lg max-w-none text-gray-700 dark:text-gray-300'>
              <p className='leading-relaxed text-center'>
                I'm a{" "}
                <span className='font-semibold text-blue-600 dark:text-blue-400'>
                  Senior Software Engineer
                </span>{" "}
                with 6 years of experience architecting, developing, and
                optimizing web applications using React, Node.js, and
                PostgreSQL. Known for my analytical thinking and attention to
                detail, I combine deep technical expertise with a collaborative
                mindset to drive code quality, accelerate time-to-market, and
                foster cross-functional teamwork.
              </p>
              <p className='leading-relaxed text-center mt-4'>
                My proactive problem-solving and commitment to team success have
                positively impacted both my projects and peers. I also bring
                experience across cloud platforms, microservices, and modern
                JavaScript frameworks, and I enjoy mentoring junior engineers,
                optimizing system performance, and delivering innovative
                solutions across domains.
              </p>
            </div>
          </div>

          {/* Skills Highlight */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
            <div className='bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center border border-blue-200 dark:border-blue-800'>
              <div className='text-blue-600 dark:text-blue-400 text-2xl font-bold mb-2'>
                Frontend
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                React, Next.js, TypeScript
              </div>
            </div>
            <div className='bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center border border-green-200 dark:border-green-800'>
              <div className='text-green-600 dark:text-green-400 text-2xl font-bold mb-2'>
                Backend
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Node.js, PostgreSQL, APIs
              </div>
            </div>
            <div className='bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center border border-purple-200 dark:border-purple-800'>
              <div className='text-purple-600 dark:text-purple-400 text-2xl font-bold mb-2'>
                Cloud
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-400'>
                Microservices, DevOps
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='https://github.com/jrodriguezdiazz'
              target='_blank'
              className='group'
            >
              <Button
                variant='outline'
                size='lg'
                className='bg-white/80 hover:bg-gray-50 dark:bg-gray-800/80 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center'
              >
                <Github className='h-5 w-5 mr-2 group-hover:text-gray-800 dark:group-hover:text-white' />
                GitHub
                <span className='sr-only'>GitHub Profile</span>
              </Button>
            </Link>

            <Link
              href='https://www.linkedin.com/in/jrodriguezdiazz'
              target='_blank'
              className='group'
            >
              <Button
                variant='outline'
                size='lg'
                className='bg-white/80 hover:bg-blue-50 dark:bg-gray-800/80 dark:hover:bg-blue-900/20 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center'
              >
                <Linkedin className='h-5 w-5 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400' />
                LinkedIn
                <span className='sr-only'>LinkedIn Profile</span>
              </Button>
            </Link>

            <Link
              href='https://x.com/jrodriguezdiazz'
              target='_blank'
              className='group'
            >
              <Button
                variant='outline'
                size='lg'
                className='bg-white/80 hover:bg-blue-50 dark:bg-gray-800/80 dark:hover:bg-blue-900/20 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center'
              >
                <Twitter className='h-5 w-5 mr-2 group-hover:text-blue-500 dark:group-hover:text-blue-400' />
                Twitter
                <span className='sr-only'>X Profile</span>
              </Button>
            </Link>

            <Link href='mailto:jrodriguezdiazz@outlook.com' className='group'>
              <Button
                variant='outline'
                size='lg'
                className='bg-white/80 hover:bg-green-50 dark:bg-gray-800/80 dark:hover:bg-green-900/20 border-gray-300 dark:border-gray-600 transition-all duration-200 hover:shadow-lg hover:scale-105 w-32 justify-center'
              >
                <Mail className='h-5 w-5 mr-2 group-hover:text-green-600 dark:group-hover:text-green-400' />
                Email
                <span className='sr-only'>Send Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
