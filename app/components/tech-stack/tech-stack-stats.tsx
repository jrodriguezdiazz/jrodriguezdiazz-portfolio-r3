import * as React from "react";

import { TechStackStatsProps } from "@/lib/types";

export const TechStackStats: React.FC<TechStackStatsProps> = ({
  technologies,
}) => {
  const stats = React.useMemo(() => {
    const allSkills = technologies.flatMap(cat => cat.skills);
    const totalSkills = allSkills.length;
    const coreSkills = allSkills.filter(skill => skill.isCore).length;
    const expertSkills = allSkills.filter(
      skill => skill.proficiency === "expert"
    ).length;
    const avgExperience = Math.round(
      allSkills.reduce((sum, skill) => sum + skill.yearsOfExperience, 0) /
        totalSkills
    );

    return { totalSkills, coreSkills, expertSkills, avgExperience };
  }, [technologies]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
      <div className='text-center p-4 bg-primary/5 dark:bg-primary/10 rounded-lg'>
        <div className='text-2xl font-bold text-primary'>
          {stats.totalSkills}
        </div>
        <div className='text-sm text-muted-foreground'>Total Skills</div>
      </div>
      <div className='text-center p-4 bg-amber-50 dark:bg-amber-950/50 rounded-lg'>
        <div className='text-2xl font-bold text-amber-600 dark:text-amber-400'>
          {stats.coreSkills}
        </div>
        <div className='text-sm text-muted-foreground'>Core Skills</div>
      </div>
      <div className='text-center p-4 bg-purple-50 dark:bg-purple-950/50 rounded-lg'>
        <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>
          {stats.expertSkills}
        </div>
        <div className='text-sm text-muted-foreground'>Expert Level</div>
      </div>
      <div className='text-center p-4 bg-green-50 dark:bg-green-950/50 rounded-lg'>
        <div className='text-2xl font-bold text-green-600 dark:text-green-400'>
          {stats.avgExperience}
        </div>
        <div className='text-sm text-muted-foreground'>Avg Years</div>
      </div>
    </div>
  );
};
