import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Contact from '../components/sections/Contact';
import TrailConnector from '../components/sections/TrailConnector';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Srijan Kumar Gupta | Salesforce Developer</title>
        <meta name="description" content="Portfolio of Srijan Kumar Gupta, a certified Salesforce Developer specializing in LWC, Apex, and AWS Integrations." />
        <meta property="og:title" content="Srijan Kumar Gupta | Salesforce Developer" />
        <meta property="og:description" content="Portfolio of Srijan Kumar Gupta, a certified Salesforce Developer specializing in LWC, Apex, and AWS Integrations." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main className="relative z-10 w-full max-w-[1200px] mx-auto px-lg flex flex-col">
        <TrailConnector />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
};

export default Home;
