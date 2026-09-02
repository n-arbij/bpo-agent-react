import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small teams just getting started.',
    features: [
      '5 active workflows',
      '1,000 task runs / month',
      '3 integrations',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited workflows',
      '50,000 task runs / month',
      'All integrations',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 159,
    description: 'For large orgs that need security, control, and scale.',
    features: [
      'Everything in Pro',
      'Unlimited task runs',
      'SSO & SCIM',
      'Role-based access',
      'Dedicated account manager',
      'SLA guarantee',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="pricing" style={{ backgroundColor: '#FFF546', padding: '80px 20px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
      <div ref={ref} style={{ maxWidth: 980, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}
        >
          <h2 style={{
            fontFamily: "'Radio Canada Big', sans-serif",
            fontWeight: 500,
            fontSize: 'clamp(24px, 4vw, 40px)',
            letterSpacing: '-1.2px',
            lineHeight: 1,
            color: '#000',
            textAlign: 'center',
          }}>
            Simple, transparent pricing
          </h2>

          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 100, padding: '6px 8px', border: '1px solid rgba(0,0,0,0.12)' }}>
            <button
              onClick={() => setIsYearly(false)}
              style={{
                fontFamily: "'Radio Canada Big', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                padding: '8px 18px',
                borderRadius: 100,
                backgroundColor: !isYearly ? '#000' : 'transparent',
                color: !isYearly ? '#FFF546' : '#000',
                transition: 'all 0.2s',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              style={{
                fontFamily: "'Radio Canada Big', sans-serif",
                fontWeight: 500,
                fontSize: 15,
                padding: '8px 18px',
                borderRadius: 100,
                backgroundColor: isYearly ? '#000' : 'transparent',
                color: isYearly ? '#FFF546' : '#000',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Yearly
              <span style={{ backgroundColor: '#000', color: '#FFF546', fontSize: 11, padding: '2px 8px', borderRadius: 100, opacity: isYearly ? 0 : 1, transition: 'opacity 0.2s' }}>
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                flex: '1 1 260px',
                maxWidth: 340,
                backgroundColor: plan.highlighted ? '#000' : '#FFF',
                borderRadius: 16,
                border: plan.highlighted ? '2px solid #000' : '1.5px solid rgba(0,0,0,0.12)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 13, color: plan.highlighted ? '#A8D3FF' : '#6C6C6C' }}>
                  {plan.name}
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={isYearly ? 'yearly' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        fontFamily: "'Radio Canada Big', sans-serif",
                        fontWeight: 500,
                        fontSize: 48,
                        letterSpacing: '-2px',
                        lineHeight: 1,
                        color: plan.highlighted ? '#FFF' : '#000',
                      }}
                    >
                      {plan.monthlyPrice === 0 ? 'Free' : `$${isYearly ? plan.yearlyPrice : plan.monthlyPrice}`}
                    </motion.span>
                  </AnimatePresence>
                  {plan.monthlyPrice > 0 && (
                    <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 16, color: plan.highlighted ? 'rgba(255,255,255,0.6)' : '#6C6C6C' }}>
                      /mo
                    </span>
                  )}
                </div>
                <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15, lineHeight: 1.4, color: plan.highlighted ? 'rgba(255,255,255,0.7)' : '#6C6C6C' }}>
                  {plan.description}
                </p>
              </div>

              {/* Features list */}
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.features.map(feat => (
                  <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7.5" stroke={plan.highlighted ? '#FFF546' : '#DBE0EC'}/>
                      <path d="M5 8l2 2 4-4" stroke={plan.highlighted ? '#FFF546' : '#000'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15, color: plan.highlighted ? 'rgba(255,255,255,0.85)' : '#000' }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '14px',
                  borderRadius: 10,
                  backgroundColor: plan.highlighted ? '#FFF546' : 'transparent',
                  border: plan.highlighted ? 'none' : '1.5px solid #000',
                  fontFamily: "'Radio Canada Big', sans-serif",
                  fontWeight: 500,
                  fontSize: 15,
                  color: plan.highlighted ? '#66640F' : '#000',
                  marginTop: 'auto',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
