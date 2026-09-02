import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    q: 'How does the free plan work?',
    a: 'The free Starter plan gives you up to 5 active workflows and 1,000 task runs per month — no credit card required. You can upgrade at any time as your team grows.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings. Upgrades take effect immediately. Downgrades apply at the end of your billing cycle.',
  },
  {
    q: 'What integrations does Flowmatic support?',
    a: 'Flowmatic connects with 300+ tools including Slack, GitHub, Stripe, Notion, Linear, HubSpot, Salesforce, Jira, Google Workspace, and many more. New integrations are added every month.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. All data is encrypted in transit and at rest. We are SOC 2 Type II certified, GDPR compliant, and offer SSO and SCIM on Enterprise plans for maximum security.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'Not at all. Flowmatic is designed to be fully no-code. Our visual workflow builder makes it easy for anyone on your team to build and manage automations without any technical background.',
  },
  {
    q: 'What kind of support do you offer?',
    a: 'Starter plans get email support. Pro plans get priority support with faster response times. Enterprise plans include a dedicated account manager and SLA guarantees.',
  },
];

const FAQItem = ({ item, isOpen, onToggle, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      style={{ borderBottom: '1px solid #DBE0EC' }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          cursor: 'pointer',
          gap: 16,
        }}
      >
        <span style={{
          fontFamily: "'Radio Canada Big', sans-serif",
          fontWeight: 500,
          fontSize: 18,
          letterSpacing: '-0.4px',
          lineHeight: 1.2,
          color: '#000',
          textAlign: 'left',
        }}>
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ flexShrink: 0, width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M3 8h10" stroke="#000" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              fontFamily: "'Source Serif 4', serif",
              fontSize: 17,
              letterSpacing: '-0.4px',
              lineHeight: 1.6,
              color: '#6C6C6C',
              paddingBottom: 20,
            }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
      <div ref={ref} style={{ maxWidth: 620, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(24px, 4vw, 40px)',
            letterSpacing: '-1.2px',
            lineHeight: 1,
            color: '#000',
            textAlign: 'center',
          }}
        >
          Frequently asked questions
        </motion.h2>
        <div style={{ width: '100%', borderTop: '1px solid #DBE0EC' }}>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              delay={i * 0.06}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
