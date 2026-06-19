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
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex items-center justify-center min-h-screen">
        <h2 className="heading-md">Experience not found</h2>
        <Link to="/" className="text-primary ml-4">Return Home</Link>
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

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex flex-col min-h-screen py-[120px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-primary no-underline mb-xl font-semibold uppercase tracking-[0.1em] text-[0.85rem]">
          <ArrowLeft size={16} /> Back to Trail
        </Link>
        
        {/* Cinematic Hero Header */}
        <div className="mb-xxl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-3 py-1 bg-primary/15 text-[#66c8ff] border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-6">{experience.period}</div>
            <h1 className="heading-xl text-[clamp(3rem,8vw,6rem)] mb-2">
              {experience.company}
            </h1>
            <h2 className="heading-lg text-primary font-normal">
              {experience.position}
            </h2>
          </motion.div>
        </div>

        {/* Content Body */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card p-xl" 
        >
          <div className="flex justify-between items-center flex-wrap mb-lg">
            <p className="text-text-muted text-[1.1rem]">
              {experience.location}
            </p>

            {experience.website?.url && (
              <a 
                href={experience.website.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white no-underline font-medium transition-all duration-300 hover:bg-primary hover:border-primary"
              >
                Visit Website ↗
              </a>
            )}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-xl" />

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
            {content || experience.description}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </main>
    </>
  );
};

export default ExperienceDetail;
