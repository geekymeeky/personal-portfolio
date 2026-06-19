import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import resumeData from '../../data/resume.json';

const Experience: React.FC = () => {
  const experiences = resumeData.sections.experience.items;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" ref={containerRef} className="py-[150px] relative w-full scroll-mt-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-[100px] max-w-2xl"
      >
        <h2 className="heading-xl text-white">Experience</h2>
        <p className="text-xl text-text-muted mt-4 font-light">A timeline of scaling engineering operations.</p>
      </motion.div>

      <div className="relative border-l border-border/50 ml-4 md:ml-10 pl-8 md:pl-16 flex flex-col gap-24 md:gap-32">
        {experiences.map((exp, index) => {
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-2 w-4 h-4 rounded-full bg-dark border-2 border-primary group-hover:bg-primary transition-colors duration-300"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="md:w-1/3 shrink-0 pt-1">
                  <span className="text-sm tracking-widest text-primary uppercase font-bold">{exp.period}</span>
                  <h3 className="heading-md mt-2 !mb-1 text-white">
                    {exp.company}
                  </h3>
                  <h4 className="text-text-muted font-medium">{exp.position}</h4>
                </div>
                
                <div className="md:w-2/3 bg-surface border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors duration-500 shadow-xl">
                  <div 
                    className="text-body text-text-muted/90 mb-6 leading-relaxed line-clamp-4" 
                    dangerouslySetInnerHTML={{ __html: exp.description }} 
                  />
                  <Link 
                    to={`/experience/${exp.id}`} 
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                  >
                    View Details <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
