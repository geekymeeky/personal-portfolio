import React from 'react';
import { ArrowUp } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full px-lg py-xl border-t border-white/5 mt-auto flex flex-col items-center justify-center gap-md relative z-10 bg-gradient-to-b from-transparent to-black/30">
      
      <div className="flex justify-between items-center w-full max-w-[1200px] flex-wrap gap-4">
        
        {/* Brand / Name */}
        <div className="font-display text-xl font-semibold tracking-[-0.02em]">
          Srijan<span className="text-primary">.</span>
        </div>

        {/* Copyright */}
        <div className="text-text-muted text-[0.9rem]">
          &copy; {currentYear} {resumeData.basics.name}. All Rights Reserved.
        </div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white cursor-pointer font-medium text-[0.9rem] transition-all duration-200 hover:bg-primary hover:border-primary"
        >
          <ArrowUp size={16} /> Top
        </button>
      </div>

    </footer>
  );
};

export default Footer;
