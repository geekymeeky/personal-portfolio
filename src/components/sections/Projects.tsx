import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';
import resumeData from '../../data/resume.json';

const Projects: React.FC = () => {
  const projects = resumeData.sections.projects.items;

  return (
    <section id="projects" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', marginBottom: 'var(--space-xl)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg" style={{ margin: 0 }}>Featured Projects</h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'none' }} // Hidden on mobile, handled by CSS normally
          className="desktop-only"
        >
          <motion.img 
            src="/assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png" 
            alt="Einstein" 
            style={{ width: '120px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>
      </div>

      <div className="grid-2">
        {projects.map((proj, index) => (
          <SpotlightCard
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <h3 className="heading-md" style={{ margin: 0 }}>{proj.name}</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {/* No keywords in this JSON schema for projects, remove badges for now */}
              </div>
            </div>
            <div 
              className="text-body" 
              dangerouslySetInnerHTML={{ __html: proj.description }} 
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 'var(--space-md)'
              }}
            />
            <Link 
              to={`/project/${proj.id}`} 
              style={{ 
                color: 'var(--color-primary)', 
                textDecoration: 'none', 
                fontWeight: 600,
                display: 'inline-block',
                marginTop: 'auto'
              }}
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
        style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'var(--space-xl)' }}
        className="mobile-only"
      >
        <motion.img 
          src="/assets/EINSTEIN_Coat_Point2HeadRight_SFS20_sRGB.png" 
          alt="Einstein" 
          style={{ width: '120px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Projects;
