import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { type Language } from '../types';

interface HeaderProps {
  role: string;
  location: string;
  lang: Language;
}

export const Header = ({ role, location, lang }: HeaderProps) => (
  <header className="px-6 pt-12 pb-8 text-center border-b border-zinc-200">
    <div className="flex flex-col items-center mb-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-32 h-32 mb-6 relative"
      >
        <div className="absolute inset-0 rounded-full border-2 border-black overflow-hidden bg-zinc-50">
          <img 
            src="https://picsum.photos/seed/portrait/400/400?grayscale" 
            alt="Hedcut Portrait" 
            className="w-full h-full object-cover hedcut-effect opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[radial-gradient(black_1px,transparent_1px)] bg-[size:3px_3px] opacity-20"></div>
        </div>
      </motion.div>
      
      <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-2">GAŠPER PODERGAJS</h1>
      <div className="wsj-double-border w-full max-w-2xl mx-auto text-sm font-sans font-bold uppercase tracking-widest flex justify-between px-4">
        <span>{role}</span>
        <span>•</span>
        <span>{location}</span>
        <span>•</span>
        <span>{new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'sl-SI', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>
    </div>

    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs font-sans font-bold uppercase tracking-wider text-zinc-500">
      <a href="mailto:gpodergajs@gmail.com" className="hover:text-black transition-colors flex items-center gap-1">
        <Mail size={12} /> gpodergajs@gmail.com
      </a>
      <span className="flex items-center gap-1"><Phone size={12} /> +386 31-774-359</span>
      <a href="https://linkedin.com" className="hover:text-black transition-colors flex items-center gap-1"><Linkedin size={12} /> LinkedIn</a>
      <a href="https://github.com" className="hover:text-black transition-colors flex items-center gap-1"><Github size={12} /> GitHub</a>
    </div>
  </header>
);
