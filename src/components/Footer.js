import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-branding">
          <div className="brand-mark footer-brand-mark">
            <span className="brand-icon">C</span>
            <span className="brand-name">Clearline CX</span>
          </div>
          <p>Outsourced customer support for growing businesses that need a better customer experience without the cost of building an in-house team.</p>
        </div>

        <div className="footer-links">
          <div>
            <span>Services</span>
            <a href="#services">Live chat</a>
            <a href="#services">Email support</a>
            <a href="#services">Phone support</a>
          </div>
          <div>
            <span>Company</span>
            <a href="#about">About</a>
            <a href="#process">How we work</a>
            <a href="#contact">Contact</a>
          </div>
          <div>
            <span>Reach out</span>
            <a href="mailto:clearlinecxoutsourcing@gmail.com">clearlinecxoutsourcing@gmail.com</a>
            <span>+254 703 958 727</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Clearline CX</span>
      </div>
    </footer>
  );
};

export default Footer;
