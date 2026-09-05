import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className="top-nav"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.86)' : 'rgba(255,255,255,0.72)',
        borderBottom: scrolled ? '1px solid #DBE0EC' : '1px solid rgba(219, 224, 236, 0.6)',
      }}
    >
      <div className="nav-shell">
        <a href="#top" className="brand-mark" aria-label="Clearline CX home">
          <span className="brand-icon">C</span>
          <span className="brand-name">Clearline CX</span>
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>{link.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <a href="mailto:clearlinecxoutsourcing@gmail.com" className="nav-link">Email</a>
          <a href="tel:+254703958727" className="nav-link" aria-label="Call +254 703 958 727">Call</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
