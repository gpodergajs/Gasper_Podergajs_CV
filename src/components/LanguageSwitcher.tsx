import { type Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

export const LanguageSwitcher = ({ currentLang, onLangChange }: LanguageSwitcherProps) => (
  <div className="fixed top-4 right-4 z-50 flex gap-2">
    <button 
      onClick={() => onLangChange('en')}
      className={`px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest border transition-all ${currentLang === 'en' ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200 hover:border-black'}`}
    >
      EN
    </button>
    <button 
      onClick={() => onLangChange('sl')}
      className={`px-3 py-1 text-[10px] font-sans font-bold uppercase tracking-widest border transition-all ${currentLang === 'sl' ? 'bg-black text-white border-black' : 'bg-white text-black border-zinc-200 hover:border-black'}`}
    >
      SL
    </button>
  </div>
);
