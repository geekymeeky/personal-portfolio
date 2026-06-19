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

      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex flex-col min-h-screen py-[120px]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link to="/" className="inline-flex items-center gap-2 text-primary no-underline mb-xl font-semibold uppercase tracking-[0.1em] text-[0.85rem]">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Cinematic Header */}
        <div className="mb-xxl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-xl flex-wrap"
          >
            <img 
              src={resumeData.picture.url} 
              alt={resumeData.basics.name} 
              className="w-[140px] h-[140px] rounded-full border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.3)] object-cover"
            />
            <div>
              <div className="inline-block px-3 py-1 bg-primary/15 text-[#66c8ff] border border-primary/30 rounded-full text-xs font-semibold tracking-wider uppercase mb-4">{resumeData.basics.location}</div>
              <h1 className="heading-xl text-[clamp(3rem,7vw,5rem)] mb-2">
                My Journey
              </h1>
              <h2 className="text-primary font-normal text-[1.5rem] m-0">
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
          className="glass-card p-xl" 
        >
          <div className="flex flex-col gap-lg">
            
            <div 
              className="text-body text-[1.15rem] leading-[1.8]" 
              dangerouslySetInnerHTML={{ __html: resumeData.summary.content }} 
            />
            
            <div className="mt-md">
               <h3 className="heading-md text-white mb-4">Philosophy</h3>
               <p className="text-body text-[1.15rem] leading-[1.8]">
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
