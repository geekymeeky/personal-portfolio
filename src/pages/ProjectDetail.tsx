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
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex items-center justify-center min-h-screen">
        <h2 className="heading-md">Project not found</h2>
        <Link to="/" className="text-primary ml-4">Return Home</Link>
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
      
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex flex-col min-h-screen py-[120px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-primary no-underline mb-xl font-semibold uppercase tracking-[0.1em] text-[0.85rem]">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        {/* Cinematic Hero Header */}
        <div className="mb-xxl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/15 text-[#66c8ff] border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">Case Study</div>
            <h1 className="heading-xl text-[clamp(3rem,7vw,5.5rem)] mb-2">
              {project.name}
            </h1>
          </motion.div>
        </div>
        
        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card markdown-body p-xl" 
        >
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h2 className="heading-lg mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h3 className="heading-md mt-6 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="text-body text-[1.15rem] leading-[1.8] mb-6" {...props} />,
              ul: ({node, ...props}) => <ul className="mb-6 pl-8 text-[1.15rem] leading-[1.8] list-disc" {...props} />,
              li: ({node, ...props}) => <li className="mb-2 text-text" {...props} />,
              strong: ({node, ...props}) => <strong className="text-primary font-bold" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-primary pl-4 my-6 italic bg-white/5 p-4" {...props} />
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
