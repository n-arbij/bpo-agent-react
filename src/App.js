import React from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './App.css';

const serviceFeatures = [
  'Live chat, email, and phone support',
  'Fast onboarding in 1–2 weeks',
  'Transparent reporting and CSAT visibility',
  'Flexible staffing to scale with demand',
];

const processSteps = [
  {
    title: 'Learn your business',
    body: 'We study your product, tone of voice, customer journey, and the issues that come up most often so your support feels like an extension of your brand.',
  },
  {
    title: 'Build your playbook',
    body: 'We create a custom knowledge base, train agents on your workflows, and map clear escalation paths so nothing important gets missed.',
  },
  {
    title: 'Deliver reliable support',
    body: 'Your team gets responsive, empathetic customer care with real visibility into response times, resolution rates, and ticket volume from day one.',
  },
];

const clientTypes = ['SaaS companies', 'E-commerce brands', 'Service businesses', 'Startups'];

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />

        <section id="about" className="content-section about-section">
          <div className="section-shell narrow-shell">
            <div className="section-header">
              <span className="eyebrow">About Clearline CX</span>
              <h2>Support that feels like part of your business.</h2>
            </div>
            <div className="story-grid">
              <div className="story-copy">
                <p>
                  After 6 years leading customer service teams and handling everything from first-response tickets to the toughest escalations, I started Clearline CX with one clear goal: give growing businesses across the US, Canada, and beyond the customer support experience of a big brand without the big-brand overhead.
                </p>
                <p>
                  We saw the same problem time and time again: a company gets traction, the support inbox explodes, and founders end up answering tickets at midnight instead of building the business. When in-house teams get buried under demand, response times slip, customer frustration grows, and the cost of doing it badly starts to hit the bottom line.
                </p>
              </div>
              <div className="story-panel">
                <div className="stat-block">
                  <strong>6+</strong>
                  <span>years leading support teams</span>
                </div>
                <div className="stat-block">
                  <strong>1–2</strong>
                  <span>weeks to launch</span>
                </div>
                <div className="stat-block">
                  <strong>24/7</strong>
                  <span>support mindset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="content-section alt-section">
          <div className="section-shell">
            <div className="section-header centered-header">
              <span className="eyebrow">What we do</span>
              <h2>Outsourced support built around how your customers reach you.</h2>
            </div>
            <div className="service-grid">
              {serviceFeatures.map((feature) => (
                <div className="feature-card" key={feature}>
                  <span className="checkmark"><CheckCircle2 size={24} /></span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="content-section">
          <div className="section-shell">
            <div className="section-header centered-header">
              <span className="eyebrow">How we work</span>
              <h2>Custom support, not script-reading.</h2>
            </div>
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <div className="process-card" key={step.title}>
                  <span className="step-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="content-section alt-section">
          <div className="section-shell narrow-shell">
            <div className="section-header centered-header">
              <span className="eyebrow">Who we work with</span>
              <h2>Built for growing companies with support bottlenecks.</h2>
            </div>
            <div className="industry-grid">
              {clientTypes.map((type) => (
                <div className="industry-tag" key={type}>{type}</div>
              ))}
            </div>
            <p className="support-summary">
              We've built Clearline CX for small and mid-sized businesses that have reached the point where support has become a real bottleneck to growth, but aren't ready—or don't want—to build a full in-house team from scratch.
            </p>
          </div>
        </section>

        <section id="standards" className="content-section">
          <div className="section-shell narrow-shell">
            <div className="section-header centered-header">
              <span className="eyebrow">The standard we hold ourselves to</span>
              <h2>Fast response. Genuine care. Real accountability.</h2>
            </div>
            <div className="standard-card">
              <p>
                We built this company on the same standards we've held ourselves to for 6 years in the field: fast response times, genuine empathy in every interaction, and treating every customer conversation like it matters—because to your business, it does. Every agent we bring onto a client account is trained not just on process, but on the mindset that a satisfied customer is a retained customer.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="section-shell contact-shell">
            <div className="contact-copy">
              <span className="eyebrow">Let&apos;s talk</span>
              <h2>If your support inbox is piling up, we should talk.</h2>
              <p>
                If your support inbox is piling up, your team is stretched too thin, or you're weighing the cost of building an in-house department versus outsourcing, we'd genuinely love to hear about what you're dealing with. There's no pressure and no generic sales pitch—just a real conversation about whether Clearline CX is a good fit for where your business is right now.
              </p>
              <p className="contact-note"><Mail size={18} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} /> Message us directly, or use the form to book a quick intro call.</p>
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="field-group">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="Jane Smith" />
              </div>

              <div className="field-group">
                <label htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" placeholder="jane@company.com" />
              </div>

              <div className="field-group">
                <label htmlFor="message">What would you like us to support you with?</label>
                <textarea id="message" name="message" rows="6" placeholder="Tell us about your support challenges, volume, and goals." />
              </div>

              <button type="submit" className="primary-button">Send inquiry</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
