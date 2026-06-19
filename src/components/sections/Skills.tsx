import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSalesforce, FaReact, FaPython, FaJava, FaAws, 
  FaDocker, FaGithub, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiFlutter, SiDart, SiMongodb, SiPostgresql, SiJavascript, SiTypescript 
} from 'react-icons/si';

const skillsData = [
  { name: 'Salesforce', icon: <FaSalesforce /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Flutter', icon: <SiFlutter /> },
  { name: 'Dart', icon: <SiDart /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-[150px] flex flex-col items-center text-center scroll-mt-[100px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-[100px] w-full max-w-4xl"
      >
        <h2 className="heading-xl text-white">Technical Arsenal</h2>
        <p className="text-xl text-text-muted mt-4 font-light">The foundational stack powering my solutions.</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1000px]">
        {skillsData.map((skill, index) => {
          // Generate slightly randomized initial positions and animations to create an organic matrix feel
          const delay = index * 0.05;
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ duration: 0.5, delay, type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative flex items-center gap-3 px-6 py-4 bg-surface border border-border rounded-full cursor-pointer hover:border-primary/60 hover:bg-surface-hover shadow-lg transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 blur-md pointer-events-none"></div>
              <div className="text-2xl text-text-muted group-hover:text-primary transition-colors duration-300 relative z-10">
                {skill.icon}
              </div>
              <span className="text-sm md:text-base font-bold text-white tracking-wide relative z-10">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
