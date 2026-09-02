import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: '01',
    title: 'Connect your tools',
    body: 'Link your existing stack in seconds. Flowmatic integrates with 300+ apps without any technical setup required.',
    visual: (
      <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#FFF', borderRadius: 16, border: '1px solid #DBE0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 20, padding: 32 }}>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Slack', 'GitHub', 'Stripe', 'Notion', 'Linear', 'Figma'].map((name) => (
            <div key={name} style={{ backgroundColor: '#F6F8FB', border: '1px solid #DBE0EC', borderRadius: 10, padding: '10px 16px', fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 14 }}>
              {name}
            </div>
          ))}
        </div>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke="#DBE0EC" strokeWidth="2"/>
          <path d="M20 12v16M12 20h16" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <div style={{ backgroundColor: '#FFF546', borderRadius: 10, padding: '10px 24px', fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 14, color: '#66640F' }}>
          Flowmatic
        </div>
      </div>
    ),
  },
  {
    number: '02',
    title: 'Build your workflow',
    body: 'Use our visual builder to design automations that match exactly how your team works. No code, no complexity.',
    visual: (
      <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#FFF', borderRadius: 16, border: '1px solid #DBE0EC', padding: 24, display: 'flex', flexDirection: 'column', gap: 12, overflow: 'hidden' }}>
        {['Trigger: New signup', 'Send welcome email', 'Create CRM contact', 'Notify #sales in Slack', 'Schedule onboarding call'].map((step, i) => (
          <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: i === 0 ? '#FFF546' : '#F6F8FB', border: '1px solid #DBE0EC', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontFamily: "'Geist Mono', monospace", color: i === 0 ? '#66640F' : '#6C6C6C', flexShrink: 0 }}>
              {i + 1}
            </div>
            <div style={{ flex: 1, backgroundColor: '#F6F8FB', borderRadius: 8, padding: '8px 12px', border: '1px solid #DBE0EC', fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 13, color: '#000' }}>
              {step}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: '03',
    title: 'Watch it run itself',
    body: 'Deploy and let Flowmatic handle the rest. Monitor performance in real time and iterate with a single click.',
    visual: (
      <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: '#FFF', borderRadius: 16, border: '1px solid #DBE0EC', padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 14, color: '#000' }}>Live executions</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { label: 'Welcome email sent', time: '2s ago', status: 'success' },
            { label: 'CRM contact created', time: '2s ago', status: 'success' },
            { label: 'Slack notified', time: '3s ago', status: 'success' },
            { label: 'Onboarding scheduled', time: '3s ago', status: 'pending' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid #F0F2F5' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: item.status === 'success' ? '#22c55e' : '#FFF546', flexShrink: 0 }} />
              <span style={{ flex: 1, fontFamily: "'Source Serif 4', serif", fontSize: 13, color: '#000' }}>{item.label}</span>
              <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 11, color: '#6C6C6C' }}>{item.time}</span>
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: '#F6F8FB', borderRadius: 10, padding: '12px 16px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 13 }}>Today's runs</span>
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: '#22c55e' }}>2,841 ✓</span>
        </div>
      </div>
    ),
  },
];

// Each step is its own component so hooks are called at the top level
const Step = ({ step, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        alignItems: 'center',
        gap: 40,
        flexWrap: 'wrap',
      }}
    >
      {/* Text */}
      <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 14, color: '#6C6C6C' }}>
          {step.number}
        </span>
        <h3 style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 'clamp(20px, 3vw, 32px)', letterSpacing: '-0.8px', lineHeight: 1.1, color: '#000' }}>
          {step.title}
        </h3>
        <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 18, letterSpacing: '-0.5px', lineHeight: 1.5, color: '#6C6C6C' }}>
          {step.body}
        </p>
        <a href="#" style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 16, color: '#000', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M7 3l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      {/* Visual */}
      <div style={{ flex: '1 1 320px' }}>
        {step.visual}
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="solutions" style={{ padding: '80px 20px', backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
      <div style={{ maxWidth: 980, width: '100%', display: 'flex', flexDirection: 'column', gap: 60 }}>
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 'clamp(24px, 4vw, 40px)', letterSpacing: '-1.2px', lineHeight: 1, color: '#000' }}>
            Up and running in minutes
          </h2>
        </motion.div>

        {/* Steps — each is a separate component with its own hook */}
        {steps.map((step, i) => (
          <Step key={i} step={step} index={i} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
