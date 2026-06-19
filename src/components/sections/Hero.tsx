import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import resumeData from '../../data/resume.json';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen w-full text-center scroll-mt-[100px] px-4">
      
      {/* Subtle Astro Background / Integration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10 w-[600px] max-w-[90vw] blur-sm mix-blend-screen"
      >
        <img 
          src="/assets/ASTRO_NoOutfit_WalkRight_SFS20_sRGB.webp" 
          alt="Mascot silhouette" 
          className="w-full h-auto opacity-30 saturate-0"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-primary border border-border rounded-full text-sm font-semibold tracking-widest uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Senior Salesforce Engineer
          </div>
        </motion.div>
        
        <h1 className="heading-xl tracking-tighter mb-6 leading-[1.05]">
          Salesforce <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-white">
            Developer & Architect.
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-text-muted leading-relaxed font-light max-w-2xl mb-12">
          Hi, I'm <strong className="text-white font-medium">{resumeData.basics.name}</strong>. I build fast, scalable Salesforce solutions that help businesses automate workflows and increase revenue.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <a 
            href="#projects" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-dark rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2">View My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
          </a>
          
          <a 
            href="https://calendly.com/srijankrgupta/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-white border border-border rounded-full font-semibold text-lg hover:bg-surface hover:border-primary/50 transition-all"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.div>
      
    </section>
  );
};

export default Hero;
