import { Star, TrendingUp } from "lucide-react";
import * as React from "react";

import { CategoryCard } from "@/app/components/tech-stack/category-card";
import { TechStackStats } from "@/app/components/tech-stack/tech-stack-stats";
import { TECHNOLOGIES } from "@/lib/constants";

export default function TechStack() {
  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          My technical skills and expertise across different domains
        </p>
      </div>

      <TechStackStats technologies={TECHNOLOGIES} />
      <div className='mt-8 p-4 bg-muted/30 rounded-lg'>
        <div className='flex items-center gap-2 mb-2'>
          <TrendingUp className='w-4 h-4 text-primary' />
          <h3 className='font-medium text-foreground'>Legend</h3>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
          <div className='flex items-center gap-2'>
            <Star className='w-3 h-3 text-amber-500 dark:text-amber-400' />
            <span className='text-foreground'>Core Skill</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full'></div>
            <span className='text-foreground'>Beginner</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-yellow-400 dark:bg-yellow-500 rounded-full'></div>
            <span className='text-foreground'>Intermediate</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-400 dark:bg-green-500 rounded-full'></div>
            <span className='text-foreground'>Advanced</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full'></div>
            <span className='text-foreground'>Expert</span>
          </div>
        </div>
      </div>
      <div className='grid gap-6 lg:grid-cols-2'>
        {TECHNOLOGIES.map(category => (
          <CategoryCard key={category.category} category={category} />
        ))}
      </div>
    </div>
  );
}
