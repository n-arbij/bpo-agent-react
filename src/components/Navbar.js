import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  // mobile menu state (reserved for future hamburger implementation)
  // eslint-disable-next-line no-unused-vars
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Product', 'Solutions', 'Pricing', 'Blog'];

  return (
    <motion.nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 9999,
        backdropFilter: 'blur(32px)',
        WebkitBackdropFilter: 'blur(32px)',
        backgroundColor: scrolled ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0)',
        borderBottom: scrolled ? '1px solid #DBE0EC' : '1px solid transparent',
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="8" fill="#000"/>
          <path d="M8 10h6l4 6-4 6H8l4-6-4-6z" fill="#FFF546"/>
          <path d="M18 10h6l-4 6 4 6h-6l-4-6 4-6z" fill="white" opacity="0.7"/>
        </svg>
        <span style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 18, letterSpacing: '-0.3px' }}>
          Flowmatic
        </span>
      </div>

      {/* Desktop nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }} className="desktop-nav">
        {navLinks.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: "'Radio Canada Big', sans-serif",
              fontWeight: 500,
              fontSize: 16,
              color: '#000',
              cursor: 'pointer',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = 1}
            onMouseLeave={e => e.target.style.opacity = 0.8}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a
          href="#"
          style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: '#000',
            opacity: 0.7,
          }}
        >
          Log in
        </a>
        <motion.a
          href="#"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 500,
            fontSize: 15,
            color: '#66640F',
            backgroundColor: '#FFF546',
            padding: '10px 18px',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            whiteSpace: 'nowrap',
            transition: 'background-color 0.2s',
          }}
        >
          Get started
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="#66640F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
