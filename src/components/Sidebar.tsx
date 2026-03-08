import { type Skills, type Education } from '../types';

interface SidebarProps {
  inventoryLabel: string;
  languagesLabel: string;
  frameworksLabel: string;
  toolsLabel: string;
  academicLabel: string;
  interestsLabel: string;
  quote: string;
  skills: Skills;
  education: Education[];
  interestsList: string[];
}

export const Sidebar = ({
  inventoryLabel,
  languagesLabel,
  frameworksLabel,
  toolsLabel,
  academicLabel,
  interestsLabel,
  quote,
  skills,
  education,
  interestsList
}: SidebarProps) => (
  <aside className="md:col-span-4 bg-[#faf9f5] p-6 space-y-12">
    {/* Skills Brief */}
    <section>
      <h2 className="text-xl font-display font-bold border-b border-black pb-1 mb-6">{inventoryLabel}</h2>
      <div className="space-y-6">
        <div>
          <h4 className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-400 mb-2">{languagesLabel}</h4>
          <p className="text-sm leading-relaxed">{skills.languages.join(", ")}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-400 mb-2">{frameworksLabel}</h4>
          <p className="text-sm leading-relaxed">{skills.frameworks.join(", ")}</p>
        </div>
        <div>
          <h4 className="text-[10px] font-sans font-black uppercase tracking-widest text-zinc-400 mb-2">{toolsLabel}</h4>
          <p className="text-sm leading-relaxed">{skills.additional.join(", ")}</p>
        </div>
      </div>
    </section>

    {/* Education Brief */}
    <section>
      <h2 className="text-xl font-display font-bold border-b border-black pb-1 mb-6">{academicLabel}</h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div key={idx}>
            <h4 className="text-sm font-bold leading-tight mb-1">{edu.school}</h4>
            <div className="flex justify-between text-[10px] font-sans font-bold text-zinc-400 uppercase tracking-wider">
              <span>{edu.location}</span>
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Interests Brief */}
    <section>
      <h2 className="text-xl font-display font-bold border-b border-black pb-1 mb-6">{interestsLabel}</h2>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {interestsList.map((interest, i) => (
          <span key={i} className="text-sm italic text-zinc-600">{interest}</span>
        ))}
      </div>
    </section>

    {/* Quote/Callout */}
    {/*
      <section className="pt-8 border-t border-zinc-200">
        <blockquote className="text-2xl font-display italic leading-tight text-zinc-400">
          "{quote}"
        </blockquote>
      </section>   */}
  </aside>
);
