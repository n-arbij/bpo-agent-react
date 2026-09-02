import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow hero-eyebrow">Customer support that scales with you</span>
          <h1>Support that protects your brand and keeps growth moving.</h1>
          <p>
            Clearline CX gives growing businesses the customer support experience of a big brand without the big-brand overhead.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="primary-button">Book a quick intro call</a>
            <a href="mailto:clearlinecxoutsourcing@gmail.com" className="secondary-button">Message us directly</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <img src="/images/callcenter.svg" alt="Call center support team illustration" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
