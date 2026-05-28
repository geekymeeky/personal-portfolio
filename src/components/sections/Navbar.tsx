import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/#hero' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Certifications', href: '/#certifications' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '-0.02em' }}>
          Srijan<span style={{ color: 'var(--color-primary)' }}>.</span>
        </a>
        
        <ul className="navbar-links desktop-only-flex">
          {links.map((link, i) => (
            <li key={i}>
              <a href={link.href} className="navbar-link">{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Simple mobile menu button placeholder */}
        <div className="mobile-only-flex">
          <button className="navbar-link" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Menu</button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
