import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Database, Award } from 'lucide-react';
import resumeData from '../../data/resume.json';

const getCertIcon = (title: string) => {
  if (title.includes('Developer')) return <Code2 size={24} className="text-white group-hover:text-primary transition-colors" />;
  if (title.includes('Agentforce')) return <Bot size={24} className="text-white group-hover:text-primary transition-colors" />;
  if (title.includes('Data Cloud')) return <Database size={24} className="text-white group-hover:text-primary transition-colors" />;
  return <Award size={24} className="text-white group-hover:text-primary transition-colors" />;
};

const Certifications: React.FC = () => {
  const certifications = resumeData.sections.certifications.items;

  return (
    <section id="certifications" className="py-[150px] flex flex-col items-start scroll-mt-[100px] w-full">
      <div className="flex flex-col md:flex-row justify-between items-end w-full mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="heading-xl text-white">Certifications</h2>
          <p className="text-xl text-text-muted mt-4 font-light">Verified expertise across the Salesforce ecosystem.</p>
        </motion.div>
      </div>

      <div className="w-full max-w-[1000px] mx-auto border-t border-border/50">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 md:py-10 border-b border-border/50 hover:border-primary/50 transition-colors duration-500 cursor-default"
          >
            <div className="flex items-center gap-6 md:gap-10">
              <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-surface border border-border group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-500 shadow-lg">
                {getCertIcon(cert.title)}
              </div>
              
              <div>
                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-text-muted font-medium uppercase tracking-widest text-sm">
                  Salesforce Certified
                </p>
              </div>
            </div>
            
            <div className="mt-4 sm:mt-0 sm:text-right flex items-center gap-4">
              <div className="h-px bg-border/50 w-12 hidden sm:block group-hover:bg-primary/50 transition-colors"></div>
              <p className="text-white font-mono text-lg tracking-widest">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
