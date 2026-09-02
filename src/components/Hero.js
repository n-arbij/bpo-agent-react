import React from 'react';
import { motion } from 'framer-motion';

const DashboardMockup = () => (
  <div style={{
    width: '100%',
    maxWidth: 760,
    aspectRatio: '760 / 481',
    borderRadius: 20,
    border: '2px solid #000',
    overflow: 'hidden',
    backgroundColor: '#F6F8FB',
    position: 'relative',
  }}>
    {/* Mockup header bar */}
    <div style={{ height: 40, backgroundColor: '#fff', borderBottom: '1px solid #DBE0EC', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8 }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
      <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28CA41' }} />
      <div style={{ flex: 1, height: 20, backgroundColor: '#F0F2F5', borderRadius: 4, margin: '0 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 10, color: '#6C6C6C', fontFamily: "'Geist Mono', monospace" }}>app.flowmatic.io/dashboard</span>
      </div>
    </div>
    {/* Mockup sidebar + content */}
    <div style={{ display: 'flex', height: 'calc(100% - 40px)' }}>
      {/* Sidebar */}
      <div style={{ width: 160, borderRight: '1px solid #DBE0EC', backgroundColor: '#fff', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['Dashboard', 'Analytics', 'Projects', 'Team', 'Settings'].map((item, i) => (
          <div key={item} style={{
            padding: '8px 12px', borderRadius: 6, backgroundColor: i === 0 ? '#FFF546' : 'transparent',
            color: i === 0 ? '#66640F' : '#6C6C6C', fontSize: 13, fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, cursor: 'pointer'
          }}>
            {item}
          </div>
        ))}
      </div>
      {/* Main content */}
      <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 16, overflow: 'hidden' }}>
        {/* Stats row */}
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { label: 'Revenue', value: '$48.2K', change: '+12%' },
            { label: 'Users', value: '2,841', change: '+8%' },
            { label: 'Conversions', value: '24.7%', change: '+3%' },
          ].map(stat => (
            <div key={stat.label} style={{
              flex: 1, backgroundColor: '#fff', borderRadius: 10, border: '1px solid #DBE0EC',
              padding: '14px 16px',
            }}>
              <div style={{ fontSize: 11, color: '#6C6C6C', fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500 }}>{stat.label}</div>
              <div style={{ fontSize: 20, fontWeight: 600, fontFamily: "'Radio Canada Big', sans-serif", marginTop: 4 }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: '#22c55e', fontFamily: "'Geist Mono', monospace", marginTop: 2 }}>{stat.change}</div>
            </div>
          ))}
        </div>
        {/* Chart placeholder */}
        <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: 10, border: '1px solid #DBE0EC', padding: 16, minHeight: 120 }}>
          <div style={{ fontSize: 12, fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, marginBottom: 12, color: '#000' }}>Revenue over time</div>
          {/* Simple SVG chart */}
          <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF546" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#FFF546" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 70 C40 60, 80 40, 120 45 C160 50, 200 20, 240 25 C280 30, 320 15, 360 10 L400 8 L400 80 L0 80 Z" fill="url(#chartGrad)"/>
            <path d="M0 70 C40 60, 80 40, 120 45 C160 50, 200 20, 240 25 C280 30, 320 15, 360 10 L400 8" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        {/* Table placeholder */}
        <div style={{ backgroundColor: '#fff', borderRadius: 10, border: '1px solid #DBE0EC', overflow: 'hidden' }}>
          {['Sarah Chen', 'Marcus Lee', 'Priya Sharma'].map((name, i) => (
            <div key={name} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px',
              borderBottom: i < 2 ? '1px solid #DBE0EC' : 'none',
            }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', backgroundColor: ['#A8D3FF', '#FFF546', '#D3E3EF'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700 }}>
                {name[0]}
              </div>
              <div style={{ flex: 1, fontSize: 12, fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500 }}>{name}</div>
              <div style={{ fontSize: 11, color: '#6C6C6C', fontFamily: "'Geist Mono', monospace" }}>${(1200 - i * 300).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      {/* Gradient background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '34%',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1280 808' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><linearGradient id='grad' gradientUnits='userSpaceOnUse' x1='-10' x2='10' y1='0' y2='0' gradientTransform='matrix(0 40 -64 0 640 404)'><stop stop-color='rgba(168,211,255,1)' offset='0'/><stop stop-color='rgba(211,227,239,1)' offset='0.5'/><stop stop-color='rgba(255,244,223,1)' offset='1'/></linearGradient></defs></svg>")`,
        backgroundSize: 'cover',
        zIndex: 0,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 56,
        padding: '140px 20px 0',
        width: '100%',
        maxWidth: 1280,
      }}>
        {/* Text block */}
        <div style={{ maxWidth: 760, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                backgroundColor: 'rgba(255,255,255,0.7)',
                border: '1px solid #DBE0EC',
                borderRadius: 100,
                padding: '6px 14px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#22c55e' }} />
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: '#000', letterSpacing: '0px' }}>
                Now in public beta — try free
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 'clamp(36px, 6vw, 80px)',
                fontWeight: 400,
                letterSpacing: '-3.2px',
                textAlign: 'center',
                lineHeight: 1,
                color: '#000',
              }}
            >
              The smarter way
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "'Radio Canada Big', sans-serif",
                fontSize: 'clamp(36px, 6vw, 80px)',
                fontWeight: 400,
                letterSpacing: '-4px',
                textAlign: 'center',
                lineHeight: 1,
                color: '#000',
              }}
            >
              to run your business
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: 'clamp(16px, 2vw, 20px)',
                letterSpacing: '-0.8px',
                textAlign: 'center',
                lineHeight: 1.4,
                color: '#000',
                maxWidth: 480,
              }}
            >
              Streamline your workflows, automate the repetitive, and focus on what truly moves the needle for your team.
            </motion.p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "'Radio Canada Big', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: '#66640F',
                backgroundColor: '#FFF546',
                padding: '14px 24px',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Start for free
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="#66640F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "'Radio Canada Big', sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: '#000',
                backgroundColor: 'rgba(255,255,255,0.8)',
                border: '1.5px solid #DBE0EC',
                padding: '14px 24px',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <polygon points="3,2 11,7 3,12" fill="#000"/>
              </svg>
              Watch demo
            </motion.a>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ width: '100%', maxWidth: 760, display: 'flex', justifyContent: 'center' }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
