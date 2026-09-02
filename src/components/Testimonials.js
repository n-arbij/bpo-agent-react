import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    quote: "Flowmatic cut our onboarding time from 3 days to 20 minutes. We just connected our tools, built the workflow, and it's been running flawlessly ever since.",
    name: 'Sarah Chen',
    role: 'Head of Operations',
    company: 'Meridian Labs',
    avatar: 'SC',
    avatarBg: '#A8D3FF',
  },
  {
    quote: "We tried four other tools before Flowmatic. None of them came close to this level of flexibility without needing an engineer at every step.",
    name: 'Marcus Webb',
    role: 'Engineering Lead',
    company: 'Stackwise',
    avatar: 'MW',
    avatarBg: '#FFF546',
  },
  {
    quote: "The analytics alone are worth it. I can now see exactly where deals are getting stuck and fix it — in real time. Game changer for our sales team.",
    name: 'Priya Sharma',
    role: 'VP of Sales',
    company: 'CloudBridge',
    avatar: 'PS',
    avatarBg: '#D3E3EF',
  },
  {
    quote: "Our team went from managing 12 spreadsheets to having everything automated in Flowmatic. I genuinely don't know how we functioned before.",
    name: 'James Okafor',
    role: 'Co-founder',
    company: 'Launchd',
    avatar: 'JO',
    avatarBg: '#FFF546',
  },
  {
    quote: "Onboarding new clients used to take a full week of manual work. Flowmatic automated the whole thing. Now we scale without adding headcount.",
    name: 'Lena Fischer',
    role: 'Customer Success Manager',
    company: 'Nexus HR',
    avatar: 'LF',
    avatarBg: '#A8D3FF',
  },
  {
    quote: "The integration with Slack is perfect. Our whole team gets real-time updates without anyone having to check another dashboard. It just works.",
    name: 'Tom Nakamura',
    role: 'Product Manager',
    company: 'Roveio',
    avatar: 'TN',
    avatarBg: '#D3E3EF',
  },
];

const TestimonialCard = ({ testimonial, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
      style={{
        backgroundColor: '#FFF',
        border: '1px solid #DBE0EC',
        borderRadius: 16,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        flex: '1 1 280px',
        breakInside: 'avoid',
      }}
    >
      {/* Quote mark */}
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
        <path d="M0 20V11.2C0 8.267 0.8 5.733 2.4 3.6 4.053 1.467 6.4 0.267 9.44 0L10 2.4C8.24 2.773 6.88 3.6 5.92 4.88 5.013 6.107 4.56 7.467 4.56 8.96H9.44V20H0ZM14.56 20V11.2C14.56 8.267 15.36 5.733 16.96 3.6 18.613 1.467 20.96 0.267 24 0L24.56 2.4C22.8 2.773 21.44 3.6 20.48 4.88 19.573 6.107 19.12 7.467 19.12 8.96H24V20H14.56Z" fill="#DBE0EC"/>
      </svg>

      <p style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: 17,
        letterSpacing: '-0.4px',
        lineHeight: 1.5,
        color: '#000',
        flex: 1,
      }}>
        {testimonial.quote}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #DBE0EC', paddingTop: 16 }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          backgroundColor: testimonial.avatarBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Radio Canada Big', sans-serif",
          fontWeight: 500,
          fontSize: 14,
          color: '#000',
          flexShrink: 0,
        }}>
          {testimonial.avatar}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{ fontFamily: "'Radio Canada Big', sans-serif", fontWeight: 500, fontSize: 15, color: '#000', letterSpacing: '-0.3px' }}>
            {testimonial.name}
          </span>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: 14, color: '#6C6C6C' }}>
            {testimonial.role} · {testimonial.company}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#F6F8FB', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        <h2 style={{
          fontFamily: "'Radio Canada Big', sans-serif",
          fontWeight: 500,
          fontSize: 'clamp(24px, 4vw, 40px)',
          letterSpacing: '-1.2px',
          lineHeight: 1,
          color: '#000',
        }}>
          Loved by thousands of teams
        </h2>
      </motion.div>

      <div style={{ maxWidth: 1200, width: '100%', display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
