import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '../../data/resume.json';

const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 'var(--space-xl)', width: '100%' }}
      >
        <h2 className="heading-lg">About Me</h2>
      </motion.div>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{ padding: 'var(--space-xl)' }}
        >
          <p className="text-lead" style={{ marginBottom: 'var(--space-md)', color: '#fff' }}>
            I specialize in building custom Salesforce applications that solve real business problems.
          </p>
          <div className="text-body" dangerouslySetInnerHTML={{ __html: resumeData.summary.content }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              inset: '-10px',
              background: 'linear-gradient(45deg, var(--color-primary), transparent)',
              borderRadius: '50%',
              filter: 'blur(20px)',
              opacity: 0.5
            }} />
            <img 
              src={resumeData.picture.url} 
              alt={resumeData.basics.name} 
              style={{ 
                width: '240px', 
                height: '240px', 
                borderRadius: '50%', 
                border: '4px solid rgba(255,255,255,0.1)',
                position: 'relative',
                zIndex: 1,
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
