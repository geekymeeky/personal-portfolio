import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';
import resumeData from '../../data/resume.json';

const Projects: React.FC = () => {
  const projects = resumeData.sections.projects.items;

  return (
    <section id="projects" className="py-xl flex flex-col items-start scroll-mt-[100px] w-full">
      <div className="flex justify-between items-end w-full mb-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg !m-0">Featured Projects</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
          <motion.img 
            src="/assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.webp" 
            alt="Einstein" 
            className="w-[120px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl w-full">
        {projects.map((proj, index) => (
          <SpotlightCard
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="heading-md !m-0">{proj.name}</h3>
              <div className="flex gap-2 flex-wrap justify-end">
                {/* No keywords in this JSON schema for projects, remove badges for now */}
              </div>
            </div>
            <div 
              className="text-body line-clamp-3 mb-md" 
              dangerouslySetInnerHTML={{ __html: proj.description }} 
            />
            <Link 
              to={`/project/${proj.id}`} 
              className="text-primary no-underline font-semibold inline-block mt-auto"
            >
              View Case Study →
            </Link>
          </SpotlightCard>
        ))}
      </div>
      
      {/* Mobile only Einstein */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex md:hidden w-full justify-center mt-xl"
      >
        <motion.img 
          src="/assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.webp" 
          alt="Einstein" 
          className="w-[120px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
