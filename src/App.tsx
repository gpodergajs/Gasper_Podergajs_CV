import { useTranslation } from 'react-i18next';
import { type Skills, type Experience, type Education } from './types';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Header } from './components/Header';
import { ExperienceSection } from './components/ExperienceSection';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

const SKILLS: Skills = {
  languages: ["C#", "Kotlin", "Java", "TypeScript", "JavaScript", "Python", "Lua"],
  frameworks: [".NET", "Spring", "Spring-Boot", "Dropwizard", "Angular", "React Native"],
  additional: ["HTML5", "CSS3", "SCSS", "MSSQL", "MySQL", "PostgreSQL", "Git", "Mercurial", "SVN", "Docker", "Kibana", "Grafana", "Prometheus"]
};

export default function App() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('sl') ? 'sl' : 'en';

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a1a1a] font-serif p-4 md:p-8 selection:bg-[#1a1a1a] selection:text-white">
      <LanguageSwitcher currentLang={lang} onLangChange={(l) => i18n.changeLanguage(l)} />

      <div className="max-w-6xl mx-auto border-x border-zinc-200 bg-white shadow-sm min-h-screen">
        <Header role={t('role')} location={t('location')} lang={lang} />

        <div className="grid grid-cols-1 md:grid-cols-12">
          <ExperienceSection 
            title={t('trajectory')} 
            experience={t('experience', { returnObjects: true }) as Experience[]} 
            keyProjectsLabel={t('keyProjects')}
            coreResponsibilitiesLabel={t('coreResponsibilities')}
          />

          <Sidebar 
            inventoryLabel={t('inventory')}
            languagesLabel={t('languages')}
            frameworksLabel={t('frameworks')}
            toolsLabel={t('tools')}
            academicLabel={t('academic')}
            interestsLabel={t('interests')}
            quote={t('quote')}
            skills={SKILLS}
            education={t('education', { returnObjects: true }) as Education[]}
            interestsList={t('interestsList', { returnObjects: true }) as string[]}
          />
        </div>

        <Footer copyrightLabel={t('copyright')} publishedLabel={t('published')} />
      </div>
    </div>
  );
}
