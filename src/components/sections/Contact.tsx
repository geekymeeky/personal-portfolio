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
    <section id="contact" className="py-xl flex flex-col items-center justify-center min-h-[60vh] text-center scroll-mt-[100px] w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-[600px] w-full p-xl"
      >
        <h2 className="heading-lg !mb-sm">Let's Work Together</h2>
        <p className="text-[clamp(1.05rem,1.5vw,1.25rem)] text-text-muted leading-relaxed font-normal mb-lg">
          Looking for a Salesforce expert? I am currently available for freelance work and full-time opportunities.
        </p>
        
        <div className="flex justify-center gap-md flex-wrap">
          <a 
            href={`mailto:${resumeData.basics.email}`}
            className="px-6 py-3 bg-primary text-white no-underline rounded-full font-semibold transition-transform duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5"
          >
            <FaEnvelope size={18} /> Email Me
          </a>
          
          {resumeData.sections.profiles.items.map((profile, i) => (
            <a 
              key={i}
              href={profile.website?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 border border-white/20 text-white no-underline rounded-full font-semibold transition-all duration-200 inline-flex items-center gap-2 hover:-translate-y-0.5 hover:bg-white/20"
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
