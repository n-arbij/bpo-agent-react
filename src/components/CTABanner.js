import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTABanner = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section style={{ padding: '120px 20px', position: 'relative', overflow: 'hidden' }}>
      {/* Gradient background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '42%',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg viewBox='0 0 1280 808' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><linearGradient id='grad' gradientUnits='userSpaceOnUse' x1='-10' x2='10' y1='0' y2='0' gradientTransform='matrix(0 40 -64 0 640 404)'><stop stop-color='rgba(168,211,255,1)' offset='0'/><stop stop-color='rgba(211,227,239,1)' offset='0.5'/><stop stop-color='rgba(255,244,223,1)' offset='1'/></linearGradient></defs></svg>")`,
        backgroundSize: 'cover',
        zIndex: 0,
      }} />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 32,
          maxWidth: 760,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <h2 style={{
            fontFamily: "'Source Serif 4', serif",
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-2.5px',
            lineHeight: 1,
            color: '#000',
          }}>
            Ready to get started?
          </h2>
          <h2 style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(32px, 5vw, 64px)',
            letterSpacing: '-3px',
            lineHeight: 1,
            color: '#000',
          }}>
            It's free to try.
          </h2>
          <p style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: 20,
            letterSpacing: '-0.5px',
            lineHeight: 1.4,
            color: '#000',
            maxWidth: 440,
            marginTop: 8,
          }}>
            No credit card. No commitment. Just sign up and see what your team can build.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              fontFamily: "'Radio Canada Big', sans-serif",
              fontWeight: 500,
              fontSize: 17,
              color: '#66640F',
              backgroundColor: '#FFF546',
              padding: '16px 28px',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Start building for free
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
              fontSize: 17,
              color: '#000',
              backgroundColor: 'rgba(255,255,255,0.8)',
              border: '1.5px solid #DBE0EC',
              padding: '16px 28px',
              borderRadius: 12,
            }}
          >
            Talk to sales
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
