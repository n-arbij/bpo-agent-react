import React from 'react';

const logos = [
  { name: 'Vercel', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <path d="M38.5 0L77 20H0L38.5 0Z" fill="#000" transform="scale(0.26) translate(0,2)"/>
      <text x="18" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Vercel</text>
    </svg>
  )},
  { name: 'Linear', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <circle cx="9" cy="10" r="8" fill="#000"/>
      <path d="M3 15.5L14.5 4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <text x="22" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Linear</text>
    </svg>
  )},
  { name: 'Notion', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <rect x="2" y="2" width="14" height="16" rx="2" fill="#fff" stroke="#000" strokeWidth="1.5"/>
      <text x="20" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Notion</text>
    </svg>
  )},
  { name: 'Stripe', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <rect x="0" y="3" width="18" height="14" rx="4" fill="#635BFF"/>
      <text x="6" y="14" fill="white" fontFamily="'Radio Canada Big', sans-serif" fontWeight="700" fontSize="12">S</text>
      <text x="22" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Stripe</text>
    </svg>
  )},
  { name: 'Figma', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <rect x="1" y="1" width="9" height="9" rx="3" fill="#FF7262"/>
      <rect x="10" y="1" width="9" height="9" rx="3" fill="#1ABCFE"/>
      <rect x="1" y="10" width="9" height="9" rx="3" fill="#0ACF83"/>
      <rect x="10" y="10" width="9" height="9" rx="3" fill="#A259FF"/>
      <text x="24" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Figma</text>
    </svg>
  )},
  { name: 'Loom', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <circle cx="9" cy="10" r="8" fill="#625DF5"/>
      <circle cx="9" cy="10" r="4" fill="white"/>
      <text x="22" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Loom</text>
    </svg>
  )},
  { name: 'GitHub', icon: (
    <svg width="88" height="20" viewBox="0 0 88 20" fill="none">
      <circle cx="9" cy="10" r="8" fill="#000"/>
      <path d="M5.5 13c.3-1 .8-2 1.7-2.4V9c0-.7.2-1.1.6-1.4-.6-.1-1.3-.3-1.8-.7-.8-.6-1-.5-1 .2v3.4c.4.3.5.7.5 1.5zm3.5-8C6.6 5 5 7 5 9.3c0 1.1.4 2 1 2.7.1-.5.2-1.1.3-1.4C6 10.2 5.5 9.1 5.5 9c0-1.9 1.3-3.5 3-3.9L9 5z" fill="white"/>
      <text x="22" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">GitHub</text>
    </svg>
  )},
  { name: 'Slack', icon: (
    <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
      <rect x="2" y="6" width="5" height="10" rx="2.5" fill="#E01E5A"/>
      <rect x="8" y="2" width="5" height="10" rx="2.5" fill="#36C5F0" transform="rotate(90 10.5 7)"/>
      <text x="22" y="15" fill="#000" fontFamily="'Radio Canada Big', sans-serif" fontWeight="600" fontSize="15">Slack</text>
    </svg>
  )},
];

const LogosBar = () => {
  const doubled = [...logos, ...logos];

  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid #DBE0EC', borderBottom: '1px solid #DBE0EC', overflow: 'hidden', backgroundColor: '#FFF' }}>
      <p style={{
        textAlign: 'center',
        fontFamily: "'Radio Canada Big', sans-serif",
        fontWeight: 500,
        fontSize: 14,
        color: '#6C6C6C',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        marginBottom: 28,
      }}>
        Trusted by teams at
      </p>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            display: 'flex',
            gap: 60,
            animation: 'marquee-scroll 28s linear infinite',
            width: 'max-content',
          }}
        >
          {doubled.map((logo, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                opacity: 0.65,
                filter: 'grayscale(100%)',
                transition: 'opacity 0.2s, filter 0.2s',
                cursor: 'default',
                flexShrink: 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = 0.65; e.currentTarget.style.filter = 'grayscale(100%)'; }}
            >
              {logo.icon}
            </div>
          ))}
        </div>
        {/* Left/right fade masks */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 80, height: '100%', background: 'linear-gradient(to right, #FFF, transparent)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 80, height: '100%', background: 'linear-gradient(to left, #FFF, transparent)', pointerEvents: 'none' }} />
      </div>
    </section>
  );
};

export default LogosBar;
