import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightCard from '../SpotlightCard';
import resumeData from '../../data/resume.json';

const Experience: React.FC = () => {
  const experiences = resumeData.sections.experience.items;

  return (
    <section id="experience" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 'var(--space-xl)', width: '100%' }}
      >
        <h2 className="heading-lg">Work Experience</h2>
      </motion.div>

      <div className="grid-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            src="/assets/CODEY_VestUkulele_RightFront_SFS20_sRGB.webp" 
            alt="Codey" 
            className="mascot-image"
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {experiences.map((exp, index) => (
            <SpotlightCard
              key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <h3 className="heading-md" style={{ margin: 0 }}>
                {exp.website?.url ? (
                  <a href={exp.website.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="company-link">
                    {exp.company} <span style={{ fontSize: '0.8em', opacity: 0.5 }}>↗</span>
                  </a>
                ) : exp.company}
              </h3>
              <span className="badge" style={{ background: 'transparent', color: 'var(--color-text-muted)' }}>{exp.period}</span>
            </div>
            <h4 style={{ color: 'var(--color-primary)', marginBottom: '16px', fontWeight: 500 }}>{exp.position}</h4>
            <div 
              className="text-body" 
              dangerouslySetInnerHTML={{ __html: exp.description }} 
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                marginBottom: 'var(--space-md)'
              }}
            />
            <Link 
              to={`/experience/${exp.id}`} 
              style={{ 
                color: 'var(--color-primary)', 
                textDecoration: 'none', 
                fontWeight: 600,
                display: 'inline-block'
              }}
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
