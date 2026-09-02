import React from 'react';

const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Changelog', 'Roadmap', 'Status'],
  },
  {
    title: 'Solutions',
    links: ['Operations', 'Sales', 'Marketing', 'Engineering', 'Finance'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Blog', 'Community', 'Templates', 'API'],
  },
  {
    title: 'Company',
    links: ['About', 'Careers', 'Press', 'Privacy', 'Terms'],
  },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#FFF', borderTop: '1px solid #DBE0EC', padding: '60px 20px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        {/* Top: Logo + columns */}
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {/* Brand */}
          <div style={{ flex: '0 0 200px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#000"/>
                <path d="M8 10h6l4 6-4 6H8l4-6-4-6z" fill="#FFF546"/>
                <path d="M18 10h6l-4 6 4 6h-6l-4-6 4-6z" fill="white" opacity="0.7"/>
              </svg>
              <span style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 18, letterSpacing: '-0.3px' }}>
                Flowmatic
              </span>
            </div>
            <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.5, color: '#6C6C6C', letterSpacing: '-0.3px' }}>
              The smarter way to automate and run your business.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {[
                { label: 'X', path: 'M4 4l16 16M20 4L4 20' },
                { label: 'LinkedIn', path: 'M4 20V9M4 6v-.01M9 20V13c0-2 1-3 3-3s3 1 3 3v7M18 20V9' },
                { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
              ].map(s => (
                <a
                  key={s.label}
                  href="#"
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    border: '1px solid #DBE0EC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6C6C6C',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#000'; e.currentTarget.style.color = '#000'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#DBE0EC'; e.currentTarget.style.color = '#6C6C6C'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div style={{ flex: 1, display: 'flex', gap: 32, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {footerColumns.map(col => (
              <div key={col.title} style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 120 }}>
                <span style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 14, color: '#000', letterSpacing: '-0.2px' }}>
                  {col.title}
                </span>
                {col.links.map(link => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: 15,
                      color: '#6C6C6C',
                      letterSpacing: '-0.3px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = '#000'}
                    onMouseLeave={e => e.target.style.color = '#6C6C6C'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: copyright */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12, borderTop: '1px solid #DBE0EC', paddingTop: 24 }}>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: '#6C6C6C' }}>
            © 2026 Flowmatic, Inc. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy', 'Terms', 'Cookies'].map(link => (
              <a
                key={link}
                href="#"
                style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: '#6C6C6C', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#000'}
                onMouseLeave={e => e.target.style.color = '#6C6C6C'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
