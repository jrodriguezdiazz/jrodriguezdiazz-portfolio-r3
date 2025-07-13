"use client";

import * as React from "react";

import { ExperienceCard } from "@/app/components/exprience/experience-card";
import { useWorkExperience } from "@/hooks/use-work-experience";

export default function WorkExperience() {
  const { experiences, totalExperience, isEmpty } = useWorkExperience();

  if (isEmpty) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-500 text-lg'>No work experience to display.</p>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      <div className='text-center space-y-2'>
        <p className='text-muted-foreground'>
          {totalExperience} of professional software development experience
        </p>
      </div>

      <div className='space-y-6'>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
