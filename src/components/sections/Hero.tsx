import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import resumeData from '../../data/resume.json';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid-2" style={{ alignItems: 'center', width: '100%' }}>
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ zIndex: 10 }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div className="badge">Salesforce Developer</div>
          </div>
          
          <h1 className="heading-xl">
            I build scalable <span className="highlight">Salesforce</span> solutions.
          </h1>
          <p className="text-lead" style={{ maxWidth: '600px', marginBottom: '32px' }}>
            Hi, I'm {resumeData.basics.name}. I help businesses automate complex workflows, improve data visibility, and maximize their Salesforce ROI.
          </p>
          
          <a 
            href="https://calendly.com/srijankrgupta/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'linear-gradient(90deg, var(--color-primary), #0077A6)',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '100px',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 8px 32px rgba(0, 161, 224, 0.3)',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 161, 224, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 161, 224, 0.3)';
            }}
          >
            <Calendar size={20} /> Let's Work Together
          </a>
        </motion.div>

        {/* Mascot Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.img 
            src="/assets/ASTRO_NoOutfit_WalkRight_SFS20_sRGB.webp" 
            alt="Salesforce Astro Mascot" 
            className="mascot-image"
            fetchPriority="high"
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
