import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/60 backdrop-blur-md border-b border-white/5' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="max-w-[1200px] mx-auto px-lg py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-semibold tracking-tight text-white no-underline">
          Srijan<span className="text-primary">.</span>
        </Link>
        
        <ul className="hidden md:flex gap-8 m-0 p-0 list-none">
          {links.map((link, i) => (
            <li key={i}>
              <Link to={link.href} className="text-text-muted text-sm font-semibold no-underline transition-colors duration-200 hover:text-white">{link.name}</Link>
            </li>
          ))}
        </ul>

        <div className="flex md:hidden">
          <button 
            className="bg-transparent border-none cursor-pointer p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} className="text-text" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-screen h-screen bg-[#0a0f1a]/98 z-[1000] flex flex-col justify-center items-center backdrop-blur-md"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 bg-transparent border-none cursor-pointer p-2"
              aria-label="Close menu"
            >
              <X size={32} className="text-text" />
            </button>
            <ul className="list-none p-0 m-0 text-center">
              {links.map((link, i) => (
                <li key={i} className="my-6">
                  <Link 
                    to={link.href} 
                    className="text-text no-underline text-2xl font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
