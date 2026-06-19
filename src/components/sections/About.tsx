import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import resumeData from '../../data/resume.json';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" ref={containerRef} className="py-[150px] flex flex-col items-center justify-center scroll-mt-[100px] w-full relative overflow-hidden">
      
      {/* Background typographic watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden z-0">
        <h2 className="text-[20vw] font-bold tracking-tighter whitespace-nowrap text-white">ENGINEER</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center w-full max-w-[1200px] relative z-10">
        
        {/* Abstracted / Premium Portrait Presentation */}
        <motion.div
          style={{ y: y2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-transparent rounded-3xl blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="w-[280px] h-[360px] md:w-[340px] md:h-[440px] rounded-3xl overflow-hidden relative border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={resumeData.picture.url} 
                alt={resumeData.basics.name} 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent mix-blend-overlay"></div>
            </div>
            {/* Technical decoration */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border px-6 py-4 rounded-xl shadow-xl backdrop-blur-md">
              <p className="text-primary font-mono text-xs uppercase tracking-widest">Sys.Status</p>
              <p className="text-white font-bold text-lg">Optimized</p>
            </div>
          </div>
        </motion.div>

        {/* Typographic Bio */}
        <motion.div
          style={{ y: y1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <h2 className="heading-xl text-white !mb-8">
            Why Work <br/>
            <span className="text-text-muted">With Me?</span>
          </h2>
          
          <div className="w-16 h-1 bg-primary mb-8 rounded-full"></div>

          <div className="text-xl md:text-2xl text-text-muted leading-[1.8] font-light max-w-2xl space-y-6">
            <p className="text-white font-medium">
              I deliver reliable, high-speed Salesforce implementations that drive actual business outcomes.
            </p>
            <div 
              className="text-text-muted/80 text-lg md:text-xl" 
              dangerouslySetInnerHTML={{ __html: resumeData.summary.content }} 
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
