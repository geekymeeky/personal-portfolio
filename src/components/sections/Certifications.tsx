import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Database } from 'lucide-react';
import resumeData from '../../data/resume.json';

const getCertIcon = (title: string) => {
  if (title.includes('Platform Developer')) return <Code2 size={28} color="var(--color-primary)" />;
  if (title.includes('Agentforce')) return <Bot size={28} color="var(--color-primary)" />;
  if (title.includes('Data Cloud')) return <Database size={28} color="var(--color-primary)" />;
  return <Code2 size={28} color="var(--color-primary)" />;
};

const Certifications: React.FC = () => {
  const certifications = resumeData.sections.certifications.items;

  return (
    <section id="certifications" className="section" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: 'var(--space-xl)', width: '100%' }}
      >
        <h2 className="heading-lg">Certifications</h2>
      </motion.div>

      <div className="grid-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card cert-card"
            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            <div className="cert-icon-wrapper">
              {getCertIcon(cert.title)}
            </div>
            
            <div style={{ flexGrow: 1 }}>
              <h3 className="heading-md" style={{ margin: '0 0 8px 0', fontSize: '1.1rem' }}>{cert.title}</h3>
              <p className="text-body" style={{ margin: 0, fontSize: '0.85rem' }}>{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
