import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaSalesforce, FaEnvelope } from 'react-icons/fa';
import resumeData from '../../data/resume.json';

const getSocialIcon = (network: string) => {
  const n = network.toLowerCase();
  if (n.includes('linkedin')) return <FaLinkedin size={22} />;
  if (n.includes('github')) return <FaGithub size={22} />;
  if (n.includes('trailblazer') || n.includes('salesforce')) return <FaSalesforce size={22} />;
  return null;
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-[200px] flex flex-col items-center justify-center min-h-[80vh] text-center w-full overflow-hidden">
      
      {/* Massive immersive radial background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
      </div>
      <div className="absolute inset-0 bg-dark/80 z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center"
      >
        <span className="inline-block px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-md">
          Available for Opportunities
        </span>

        <h2 className="text-[clamp(3rem,8vw,6rem)] font-bold text-white tracking-tighter leading-[1.05] mb-8">
          Ready to Scale <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
            Your Salesforce Org?
          </span>
        </h2>
        
        <p className="text-xl md:text-3xl text-text-muted font-light mb-16 max-w-3xl">
          I'm currently open for freelance work and full-time engineering roles. Let's start a conversation.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap w-full">
          <a 
            href={`mailto:${resumeData.basics.email}`}
            className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-primary text-dark rounded-full font-bold text-xl overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_rgba(0,161,224,0.3)] hover:shadow-[0_0_60px_rgba(0,161,224,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-3">
              <FaEnvelope size={22} /> {resumeData.basics.email}
            </span>
          </a>
          
          <div className="flex justify-center gap-4">
            {resumeData.sections.profiles.items.map((profile, i) => (
              <a 
                key={i}
                href={profile.website?.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center bg-surface border border-border text-text-muted rounded-full hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,161,224,0.2)]"
                title={profile.network}
              >
                {getSocialIcon(profile.network)}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
