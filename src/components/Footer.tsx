import React from 'react';
import { ArrowUp } from 'lucide-react';
import resumeData from '../data/resume.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer style={{
      width: '100%',
      padding: 'var(--space-xl) var(--space-lg)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-md)',
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)'
    }}>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        
        {/* Brand / Name */}
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
          Srijan<span style={{ color: 'var(--color-primary)' }}>.</span>
        </div>

        {/* Copyright */}
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          &copy; {currentYear} {resumeData.basics.name}. All Rights Reserved.
        </div>

        {/* Back to Top */}
        <button 
          onClick={scrollToTop}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '8px 16px',
            borderRadius: '100px',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: '0.9rem',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = 'var(--color-primary)';
            e.currentTarget.style.borderColor = 'var(--color-primary)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <ArrowUp size={16} /> Top
        </button>
      </div>

    </footer>
  );
};

export default Footer;
