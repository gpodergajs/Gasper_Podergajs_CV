export type Language = 'en' | 'sl';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  technologies: string[];
  summary: string;
  projects: string[];
  responsibilities: string[];
}

export interface Education {
  school: string;
  period: string;
  location: string;
}

export interface Translation {
  role: string;
  location: string;
  trajectory: string;
  inventory: string;
  academic: string;
  interests: string;
  keyProjects: string;
  coreResponsibilities: string;
  languages: string;
  frameworks: string;
  tools: string;
  ongoing: string;
  present: string;
  published: string;
  copyright: string;
  quote?: string;
  experience: Experience[];
  education: Education[];
  interestsList: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  additional: string[];
}
