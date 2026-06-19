import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Bot, Database } from 'lucide-react';
import resumeData from '../../data/resume.json';

const getCertIcon = (title: string) => {
  if (title.includes('Platform Developer')) return <Code2 size={28} className="text-primary" />;
  if (title.includes('Agentforce')) return <Bot size={28} className="text-primary" />;
  if (title.includes('Data Cloud')) return <Database size={28} className="text-primary" />;
  return <Code2 size={28} className="text-primary" />;
};

const Certifications: React.FC = () => {
  const certifications = resumeData.sections.certifications.items;

  return (
    <section id="certifications" className="py-xl flex flex-col items-start scroll-mt-[100px] w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-xl w-full"
      >
        <h2 className="heading-lg">Certifications</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl w-full">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card flex items-center gap-5 p-5 rounded-md"
          >
            <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center">
              {getCertIcon(cert.title)}
            </div>
            
            <div className="grow">
              <h3 className="heading-md !m-0 mb-2 text-[1.1rem]">{cert.title}</h3>
              <p className="text-body !m-0 text-[0.85rem]">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
