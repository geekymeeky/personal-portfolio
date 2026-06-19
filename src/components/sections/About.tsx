import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resume.json';

const About: React.FC = () => {
  return (
    <section id="about" className="py-xl flex flex-col items-start scroll-mt-[100px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-xl w-full"
      >
        <h2 className="heading-lg">About Me</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-xl"
        >
          <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-white leading-relaxed mb-md">
            I specialize in building custom Salesforce applications that solve real business problems.
          </p>
          <div className="text-text-muted leading-relaxed text-base" dangerouslySetInnerHTML={{ __html: resumeData.summary.content }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2.5 bg-gradient-to-tr from-primary to-transparent rounded-full blur-[20px] opacity-50" />
            <img 
              src={resumeData.picture.url} 
              alt={resumeData.basics.name} 
              className="w-[240px] h-[240px] rounded-full border-4 border-white/10 relative z-10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
