interface FooterProps {
  copyrightLabel: string;
  publishedLabel: string;
}

export const Footer = ({ copyrightLabel, publishedLabel }: FooterProps) => (
  <footer className="p-6 border-t-4 border-black text-center bg-white">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-zinc-400">
      <span>{copyrightLabel} {new Date().getFullYear()} Gašper Podergajs</span>
      <div className="flex gap-8">
        <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-black transition-colors">Contact Editorial</a>
      </div>
      <span>{publishedLabel}</span>
    </div>
  </footer>
);
