import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import resumeData from '../data/resume.json';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const project = resumeData.sections.projects.items.find(p => p.id === id);

  useEffect(() => {
    if (id) {
      fetch(`/content/projects/${id}.md`)
        .then((res) => {
          if (!res.ok) throw new Error('Not found');
          return res.text();
        })
        .then((text) => setContent(text))
        .catch(() => setContent('# Content not found\nSorry, the detailed case study could not be loaded.'));
    }
  }, [id]);

  if (!project) {
    return (
      <main className="content-overlay" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 className="heading-md">Project not found</h2>
        <Link to="/" style={{ color: 'var(--color-primary)', marginLeft: '1rem' }}>Return Home</Link>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.name} | Srijan Kumar Gupta</title>
        <meta name="description" content={`Case study: ${project.name} - Salesforce Development project by Srijan Kumar Gupta.`} />
        <meta property="og:title" content={`${project.name} | Srijan Kumar Gupta`} />
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
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        {/* Cinematic Hero Header */}
        <div style={{ marginBottom: 'var(--space-xxl)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="badge" style={{ marginBottom: '1.5rem' }}>Case Study</div>
            <h1 className="heading-xl" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', marginBottom: '0.5rem' }}>
              {project.name}
            </h1>
          </motion.div>
        </div>
        
        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card markdown-body" 
          style={{ padding: 'var(--space-xl)' }}
        >
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
            {content || project.description}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </main>
    </>
  );
};

export default ProjectDetail;
