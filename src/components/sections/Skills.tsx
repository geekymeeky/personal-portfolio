import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSalesforce, FaReact, FaPython, FaJava, FaAws, 
  FaDocker, FaGithub, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiFlutter, SiDart, SiMongodb, SiPostgresql, SiJavascript, SiTypescript 
} from 'react-icons/si';
import SpotlightCard from '../SpotlightCard';

const skillsData = [
  { name: 'Salesforce', icon: <FaSalesforce /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 'var(--space-xl)', width: '100%' }}
      >
        <h2 className="heading-lg">Skills & Technologies</h2>
      </motion.div>

      <div className="skills-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
        gap: 'var(--space-lg)', 
        width: '100%',
        maxWidth: '900px'
      }}>
        {skillsData.map((skill, index) => (
          <SpotlightCard
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
            className="skill-badge"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              color: 'var(--color-text-muted)',
              fontSize: '40px',
              cursor: 'pointer',
              aspectRatio: '1/1'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = 'var(--color-primary)';
              const label = e.currentTarget.querySelector('.skill-label') as HTMLElement;
              if (label) label.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = 'var(--color-text-muted)';
              const label = e.currentTarget.querySelector('.skill-label') as HTMLElement;
              if (label) label.style.opacity = '0';
            }}
          >
            {skill.icon}
            <span className="skill-label" style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              marginTop: '12px',
              opacity: 0,
              transition: 'opacity 0.3s ease',
              textAlign: 'center'
            }}>
              {skill.name}
            </span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
