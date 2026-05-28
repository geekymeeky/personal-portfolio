import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import resumeData from '../data/resume.json';

const ExperienceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const experience = resumeData.sections.experience.items.find(exp => exp.id === id);

  useEffect(() => {
    if (id) {
      fetch(`/content/experience/${id}.md`)
        .then((res) => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then((text) => setContent(text))
        .catch(() => setContent('# Content not found\nSorry, the detailed experience could not be loaded.'));
    }
  }, [id]);

  if (!experience) {
    return (
      <main className="content-overlay" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="heading-md">Experience not found</h2>
        <Link to="/" style={{ color: 'var(--color-primary)', marginLeft: '1rem' }}>Return Home</Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{experience.position} at {experience.company} | Srijan Kumar Gupta</title>
        <meta name="description" content={`Experience details for Srijan Kumar Gupta as ${experience.position} at ${experience.company}.`} />
        <meta property="og:title" content={`${experience.position} at ${experience.company} | Srijan Kumar Gupta`} />
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
          <ArrowLeft size={16} /> Back to Trail
        </Link>
        
        {/* Cinematic Hero Header */}
        <div style={{ marginBottom: 'var(--space-xxl)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="badge" style={{ marginBottom: '1.5rem' }}>{experience.period}</div>
            <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', marginBottom: '0.5rem' }}>
              {experience.company}
            </h1>
            <h2 className="heading-lg" style={{ color: 'var(--color-primary)', fontWeight: 400 }}>
              {experience.position}
            </h2>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-lg)' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
              {experience.location}
            </p>

            {experience.website?.url && (
              <a 
                href={experience.website.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                  color: '#fff',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                Visit Website ↗
              </a>
            )}
          </div>

          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)', marginBottom: 'var(--space-xl)' }} />

          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h2 className="heading-lg" style={{ marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
              h2: ({node, ...props}) => <h3 className="heading-md" style={{ marginTop: '1.5rem', marginBottom: '1rem' }} {...props} />,
              p: ({node, ...props}) => <p className="text-body" style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '1.5rem' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: '1.5rem', paddingLeft: '2rem', fontSize: '1.15rem', lineHeight: 1.8 }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '0.5rem', color: 'var(--color-text)' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: 'var(--color-primary)' }} {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote style={{ 
                  borderLeft: '4px solid var(--color-primary)', 
                  paddingLeft: '1rem', 
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  background: 'rgba(255,255,255,0.02)',
                  padding: '1rem'
                }} {...props} />
              )
            }}
          >
            {content || experience.description}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </main>
    </>
  );
};

export default ExperienceDetail;
