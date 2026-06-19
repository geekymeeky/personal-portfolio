import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import resumeData from '../../data/resume.json';

const Projects: React.FC = () => {
  const projects = resumeData.sections.projects.items;

  return (
    <section id="projects" className="py-[150px] flex flex-col items-start scroll-mt-[100px] w-full">
      <div className="flex justify-between items-end w-full mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-xl text-white !m-0">Featured<br/><span className="text-primary">Case Studies</span></h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
        {projects.map((proj, index) => {
          // Asymmetric Bento Box Layout:
          // Make every 3rd item span full width (12 cols), otherwise span 6 cols.
          // Or we can just alternate 7 and 5 cols.
          const isFull = index % 3 === 0;
          const colSpan = isFull ? "md:col-span-12" : (index % 2 === 0 ? "md:col-span-7" : "md:col-span-5");
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`group flex flex-col bg-surface border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-colors duration-500 shadow-xl ${colSpan}`}
            >
              <div className="p-8 md:p-12 flex flex-col h-full">
                <div className="flex-1">
                  <h3 className="heading-lg !mb-4 text-white group-hover:text-primary transition-colors duration-300">{proj.name}</h3>
                  <div 
                    className="text-body text-text-muted/90 mb-8 leading-relaxed max-w-3xl line-clamp-3" 
                    dangerouslySetInnerHTML={{ __html: proj.description }} 
                  />
                </div>
                
                <div className="mt-auto pt-8 border-t border-border/50">
                  <Link 
                    to={`/project/${proj.id}`} 
                    className="inline-flex items-center gap-2 text-white font-semibold group/link uppercase tracking-widest text-sm"
                  >
                    Read Case Study <span className="group-hover/link:translate-x-2 text-primary transition-transform">→</span>
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

export default Projects;
