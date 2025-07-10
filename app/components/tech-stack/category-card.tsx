import { Award } from "lucide-react";
import * as React from "react";

import { SkillBadge } from "@/app/components/tech-stack/skill-badge";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CategoryCardProps } from "@/lib/types";

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const coreSkills = category.skills.filter(skill => skill.isCore);
  const otherSkills = category.skills.filter(skill => !skill.isCore);

  return (
    <Card className='p-6 hover:shadow-lg transition-shadow duration-200'>
      <div className='flex items-start gap-3 mb-4'>
        <div className='p-2 bg-primary/10 rounded-lg'>
          <category.categoryIcon className='w-5 h-5 text-primary' />
        </div>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-foreground'>
            {category.category}
          </h3>
          <p className='text-sm text-muted-foreground mt-1'>
            {category.description}
          </p>
        </div>
        <Badge variant='outline' className='ml-auto'>
          {category.skills.length} skills
        </Badge>
      </div>

      {/* Core Skills */}
      {coreSkills.length > 0 && (
        <div className='mb-4'>
          <div className='flex items-center gap-2 mb-3'>
            <Award className='w-4 h-4 text-amber-500 dark:text-amber-400' />
            <h4 className='text-sm font-medium text-amber-700 dark:text-amber-300'>
              Core Skills
            </h4>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {coreSkills.map(skill => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}

      {/* Other Skills */}
      {otherSkills.length > 0 && (
        <div>
          {coreSkills.length > 0 && (
            <h4 className='text-sm font-medium text-muted-foreground mb-3'>
              Additional Skills
            </h4>
          )}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {otherSkills.map(skill => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
