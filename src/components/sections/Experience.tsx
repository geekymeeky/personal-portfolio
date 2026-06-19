import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';
import resumeData from '../../data/resume.json';

const Experience: React.FC = () => {
  const experiences = resumeData.sections.experience.items;

  return (
    <section id="experience" className="py-xl flex flex-col items-start scroll-mt-[100px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-xl w-full"
      >
        <h2 className="heading-lg">Work Experience</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="/assets/CODEY_VestUkulele_RightFront_SFS20_sRGB.webp" 
            alt="Codey" 
            className="max-w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="flex flex-col gap-md">
          {experiences.map((exp, index) => (
            <SpotlightCard
              key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="heading-md !m-0">
                {exp.website?.url ? (
                  <a href={exp.website.url} target="_blank" rel="noopener noreferrer" className="text-inherit no-underline transition-colors duration-200 hover:text-primary">
                    {exp.company} <span className="text-[0.8em] opacity-50">↗</span>
                  </a>
                ) : exp.company}
              </h3>
              <span className="inline-block px-3 py-1 bg-transparent text-text-muted border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase">{exp.period}</span>
            </div>
            <h4 className="text-primary mb-4 font-medium">{exp.position}</h4>
            <div 
              className="text-body line-clamp-3 mb-md" 
              dangerouslySetInnerHTML={{ __html: exp.description }} 
            />
            <Link 
              to={`/experience/${exp.id}`} 
              className="text-primary no-underline font-semibold inline-block"
            >
              Read More →
            </Link>
          </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
