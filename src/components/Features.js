import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#FFF546" opacity="0.3"/>
        <path d="M10 16h12M16 10v12" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Automated workflows',
    body: 'Build and run complex automations without writing a single line of code. Drag, drop, and deploy in minutes.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#A8D3FF" opacity="0.4"/>
        <circle cx="16" cy="16" r="6" stroke="#000" strokeWidth="2"/>
        <path d="M16 10v-3M16 25v-3M10 16H7M25 16h-3" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Real-time analytics',
    body: 'Monitor every metric that matters. Get actionable insights with beautiful charts and live dashboards.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#D3E3EF" opacity="0.5"/>
        <rect x="9" y="9" width="6" height="6" rx="2" stroke="#000" strokeWidth="1.5"/>
        <rect x="17" y="9" width="6" height="6" rx="2" stroke="#000" strokeWidth="1.5"/>
        <rect x="9" y="17" width="6" height="6" rx="2" stroke="#000" strokeWidth="1.5"/>
        <rect x="17" y="17" width="6" height="6" rx="2" stroke="#000" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Team collaboration',
    body: 'Keep everyone aligned. Share workspaces, assign tasks, and comment in context — right where work happens.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#FFF546" opacity="0.3"/>
        <path d="M10 22l4-4 3 3 5-7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Smart integrations',
    body: 'Connect to 300+ tools your team already loves. Slack, GitHub, Stripe, and more — all in one place.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#A8D3FF" opacity="0.4"/>
        <path d="M16 8v8l4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="16" r="10" stroke="#000" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Scheduled tasks',
    body: 'Never miss a deadline. Set recurring tasks, reminders, and automated reports on your schedule.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="24" height="24" rx="6" fill="#D3E3EF" opacity="0.5"/>
        <path d="M12 16a4 4 0 018 0" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="11" r="3" stroke="#000" strokeWidth="1.5"/>
        <path d="M8 25a8 8 0 0116 0" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Role-based access',
    body: 'Control exactly who sees what. Granular permissions keep sensitive data safe across your entire org.',
  },
];

const FeatureCard = ({ feature, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      style={{
        backgroundColor: '#FFF',
        borderRadius: 16,
        minHeight: 246,
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        flex: '1 1 280px',
        border: '1px solid #DBE0EC',
      }}
    >
      <div style={{ width: 42, height: 42 }}>{feature.icon}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{
          fontFamily: "'Radio Canada Big', sans-serif",
          fontWeight: 500,
          fontSize: 20,
          letterSpacing: '-0.4px',
          lineHeight: 1,
          color: '#000',
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: 18,
          letterSpacing: '-0.5px',
          lineHeight: 1.4,
          color: '#000',
        }}>
          {feature.body}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="product" style={{ padding: '80px 20px', backgroundColor: '#F6F8FB', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: 980, width: '100%' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <h2 style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(24px, 4vw, 40px)',
            letterSpacing: '-1.2px',
            lineHeight: 1,
            color: '#000',
          }}>
            Everything your team needs
          </h2>
        </motion.div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
