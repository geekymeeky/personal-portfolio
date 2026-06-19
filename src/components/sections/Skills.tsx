import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSalesforce, FaReact, FaPython, FaJava, FaAws, 
  FaDocker, FaGithub, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiFlutter, SiDart, SiMongodb, SiPostgresql, SiJavascript, SiTypescript 
} from 'react-icons/si';
import SpotlightCard from '../SpotlightCard';

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
    <section id="skills" className="py-xl flex flex-col items-center text-center scroll-mt-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-xl w-full"
      >
        <h2 className="heading-lg">Skills & Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-lg w-full max-w-[900px]">
        {skillsData.map((skill, index) => (
          <SpotlightCard
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 200, damping: 15 }}
            className="flex flex-col items-center justify-center p-6 text-text-muted text-[40px] cursor-pointer aspect-square w-[120px] shrink-0 transition-colors duration-200 hover:text-primary"
          >
            {skill.icon}
            <span className="text-[0.8rem] font-semibold mt-3 text-center min-h-[2.4em] flex items-center justify-center leading-[1.2]">
              {skill.name}
            </span>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
