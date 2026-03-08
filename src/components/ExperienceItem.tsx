import React from 'react';
import { type Experience } from '../types';

interface ExperienceItemProps {
  exp: Experience;
  keyProjectsLabel: string;
  coreResponsibilitiesLabel: string;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ exp, keyProjectsLabel, coreResponsibilitiesLabel }) => (
  <article className="group">
    <div className="flex justify-between items-baseline mb-1">
      <h3 className="text-xl font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
        {exp.company}
      </h3>
      <span className="text-xs font-sans font-bold text-zinc-400 shrink-0 ml-4 uppercase">{exp.period}</span>
    </div>
    <p className="text-sm font-sans font-bold text-zinc-500 mb-3 uppercase tracking-wide">{exp.role}</p>
    
    <p className="text-lg leading-relaxed mb-4 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
      {exp.summary}
    </p>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm leading-snug text-zinc-700">
      <div>
        <h4 className="font-sans font-black text-[10px] uppercase tracking-widest mb-2 text-zinc-400">{keyProjectsLabel}</h4>
        <ul className="space-y-2">
          {exp.projects.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-300">•</span> {p}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-sans font-black text-[10px] uppercase tracking-widest mb-2 text-zinc-400">{coreResponsibilitiesLabel}</h4>
        <ul className="space-y-2 italic">
          {exp.responsibilities.map((r, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-zinc-300">›</span> {r}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-4 pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
      {exp.technologies.map((tech, i) => (
        <span key={i} className="text-[9px] font-sans font-bold bg-zinc-100 px-1.5 py-0.5 rounded uppercase tracking-tighter text-zinc-500">
          {tech}
        </span>
      ))}
    </div>
  </article>
);
