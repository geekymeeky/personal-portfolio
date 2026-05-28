import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaSalesforce, FaEnvelope } from 'react-icons/fa';
import resumeData from '../../data/resume.json';

const getSocialIcon = (network: string) => {
  const n = network.toLowerCase();
  if (n.includes('linkedin')) return <FaLinkedin size={18} />;
  if (n.includes('github')) return <FaGithub size={18} />;
  if (n.includes('trailblazer') || n.includes('salesforce')) return <FaSalesforce size={18} />;
  return null;
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section" style={{ minHeight: '60vh', justifyContent: 'center', textAlign: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ maxWidth: '600px', width: '100%', padding: 'var(--space-xl)' }}
      >
        <h2 className="heading-lg" style={{ marginBottom: 'var(--space-sm)' }}>Let's Work Together</h2>
        <p className="text-lead" style={{ marginBottom: 'var(--space-lg)' }}>
          Looking for a Salesforce expert? I am currently available for freelance work and full-time opportunities.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
          <a 
            href={`mailto:${resumeData.basics.email}`}
            style={{
              padding: '12px 24px',
              background: 'var(--color-primary)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '100px',
              fontWeight: 600,
              transition: 'transform 0.2s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <FaEnvelope size={18} /> Email Me
          </a>
          
          {resumeData.sections.profiles.items.map((profile, i) => (
            <a 
              key={i}
              href={profile.website?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '100px',
                fontWeight: 600,
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              {getSocialIcon(profile.network)} {profile.network}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
