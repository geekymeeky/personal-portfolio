import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import resumeData from '../data/resume.json';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Srijan | My Journey</title>
        <meta name="description" content="Learn about Srijan Kumar Gupta's philosophy and technical journey as a Salesforce Developer." />
        <meta property="og:title" content="About Srijan | My Journey" />
      </Helmet>

      <main className="content-overlay" style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px', 
          color: 'var(--color-primary)',
          textDecoration: 'none',
          marginBottom: 'var(--space-xl)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '0.85rem'
        }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Cinematic Header */}
        <div style={{ marginBottom: 'var(--space-xxl)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)', flexWrap: 'wrap' }}
          >
            <img 
              src={resumeData.picture.url} 
              alt={resumeData.basics.name} 
              style={{ 
                width: '140px', 
                height: '140px', 
                borderRadius: '50%', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                objectFit: 'cover'
              }}
            />
            <div>
              <div className="badge" style={{ marginBottom: '1rem' }}>{resumeData.basics.location}</div>
              <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', marginBottom: '0.5rem' }}>
                My Journey
              </h1>
              <h2 className="heading-lg" style={{ color: 'var(--color-primary)', fontWeight: 400, fontSize: '1.5rem', marginBottom: 0 }}>
                {resumeData.basics.headline}
              </h2>
            </div>
          </motion.div>
        </div>
        
        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card" 
          style={{ padding: 'var(--space-xl)' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            
            <div 
              className="text-body detail-html" 
              dangerouslySetInnerHTML={{ __html: resumeData.summary.content }} 
              style={{ fontSize: '1.15rem', lineHeight: 1.8 }}
            />
            
            <div style={{ marginTop: 'var(--space-md)' }}>
               <h3 className="heading-md" style={{ color: '#fff', marginBottom: '1rem' }}>Philosophy</h3>
               <p className="text-body" style={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                 I believe that writing code is only 20% of the job. The other 80% is deeply understanding the business problem, communicating effectively with stakeholders, and architecting solutions that are scalable, secure, and intuitive for end-users. 
               </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
    </>
  );
};

export default AboutPage;
