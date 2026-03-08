import React from 'react';
import { type Experience } from '../types';
import { ExperienceItem } from './ExperienceItem';

interface ExperienceSectionProps {
  title: string;
  experience: Experience[];
  keyProjectsLabel: string;
  coreResponsibilitiesLabel: string;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ title, experience, keyProjectsLabel, coreResponsibilitiesLabel }) => (
  <main className="md:col-span-8 p-6 md:border-r border-zinc-200">
    <section>
      <h2 className="text-3xl font-display font-bold italic border-b-2 border-black pb-2 mb-8">{title}</h2>
      
      <div className="space-y-12">
        {experience.map((exp, idx) => (
          <ExperienceItem 
            key={idx} 
            exp={exp} 
            keyProjectsLabel={keyProjectsLabel}
            coreResponsibilitiesLabel={coreResponsibilitiesLabel}
          />
        ))}
      </div>
    </section>
  </main>
);
