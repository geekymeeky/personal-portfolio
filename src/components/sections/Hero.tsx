import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import resumeData from '../../data/resume.json';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="py-xl flex items-center min-h-screen scroll-mt-[100px] w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center w-full">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-primary/15 text-[#66c8ff] border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase">Salesforce Developer</div>
          </div>
          
          <h1 className="heading-xl">
            I build scalable <span className="text-primary">Salesforce</span> solutions.
          </h1>
          <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-text-muted leading-relaxed font-normal max-w-[600px] mb-8">
            Hi, I'm {resumeData.basics.name}. I help businesses automate complex workflows, improve data visibility, and maximize their Salesforce ROI.
          </p>
          
          <a 
            href="https://calendly.com/srijankrgupta/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-[#0077A6] text-white no-underline rounded-full font-semibold text-[1.1rem] shadow-[0_8px_32px_rgba(0,161,224,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,161,224,0.5)]"
          >
            <Calendar size={20} /> Let's Work Together
          </a>
        </motion.div>

        {/* Mascot Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.img 
            src="/assets/ASTRO_NoOutfit_WalkRight_SFS20_sRGB.webp" 
            alt="Salesforce Astro Mascot" 
            className="max-w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            fetchPriority="high"
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
