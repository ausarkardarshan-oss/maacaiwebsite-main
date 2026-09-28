import React, { useState } from 'react';
import Button from './Button';
import RevealWrapper from './RevealWrapper';

/* ── Map pin ──────────────────────────────────────────────────── */
function Pin({ className, label, place }) {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`pin ${className}${active ? ' active' : ''}`}
      type="button"
      aria-label={label}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onClick={() => setActive(p => !p)}
    >
      <i aria-hidden="true" />
      <span>{place}</span>
    </button>
  );
}

/* ── Data ─────────────────────────────────────────────────────── */
const CONTACT_CARDS = [
  {
    icon: '●',
    title: 'Our Office',
    lines: ['MAAC AI Technologies Pvt. Ltd.', 'Sector 62, Noida, Uttar Pradesh 201309, India'],
  },
  {
    icon: '✉',
    title: 'Email Us',
    lines: ['hello@maacai.com', 'info@maacai.com'],
  },
  {
    icon: '●',
    title: 'Call Us',
    lines: ['+91 120 456 7890', '+91 987 654 3210'],
  },
];

const CONTACT_STATS = [
  { value: '50+',  label: 'Global Clients' },
  { value: '20+',  label: 'Countries Served' },
  { value: '3+',   label: 'Years of Innovation' },
  { value: '100%', label: 'Client Satisfaction' },
];

const MAP_PINS = [
  { className: 'map-delhi',   label: 'Delhi',                          place: 'Delhi · 25 min' },
  { className: 'map-noida',   label: 'Noida',                          place: 'Noida · 5 min' },
  { className: 'map-greater', label: 'Greater Noida',                  place: 'Greater Noida · 20 min' },
  { className: 'map-airport', label: 'Indira Gandhi International Airport', place: 'Airport · 40 min' },
  { className: 'map-yamuna',  label: 'Yamuna Expressway',              place: 'Yamuna Expressway · 15 min' },
  { className: 'map-office',  label: 'MAAC AI Office',                 place: 'MAAC AI · Sector 62, Noida' },
];

const SERVICES = [
  'AI Software Development',
  'Web Application',
  'Mobile Application',
  'AI CRM / HRMS / ERP',
  'AI Chatbot',
  'Other',
];

const PERKS = [
  'Confidential conversation',
  'Clear and practical discussion',
  'No obligation consultation',
];

/* ── Enquiry form (contact page only) ────────────────────────── */
function EnquiryForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  if (sent) {
    return (
      <div className="enq-success">
        <div className="enq-success-icon">✓</div>
        <h3>Enquiry Sent!</h3>
        <p>Thank you! We'll get back to you within 24 hours.</p>
        <button className="enq-back-btn" onClick={() => setSent(false)}>Send Another →</button>
      </div>
    );
  }

  return (
    <form className="enq-form" onSubmit={submit} noValidate>
      <div className="enq-row">
        <div className="enq-field">
          <label htmlFor="enq-name">Your Name</label>
          <input id="enq-name" name="name" type="text" placeholder="Enter your name" value={form.name} onChange={handle} required />
        </div>
        <div className="enq-field">
          <label htmlFor="enq-email">Work Email</label>
          <input id="enq-email" name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handle} required />
        </div>
      </div>
      <div className="enq-row">
        <div className="enq-field">
          <label htmlFor="enq-company">Company</label>
          <input id="enq-company" name="company" type="text" placeholder="Company name" value={form.company} onChange={handle} />
        </div>
        <div className="enq-field">
          <label htmlFor="enq-phone">Phone</label>
          <input id="enq-phone" name="phone" type="tel" placeholder="+91" value={form.phone} onChange={handle} />
        </div>
      </div>
      <div className="enq-field">
        <label htmlFor="enq-service">What can we help with?</label>
        <select id="enq-service" name="service" value={form.service} onChange={handle}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div className="enq-field">
        <label htmlFor="enq-message">Tell us about your project</label>
        <textarea id="enq-message" name="message" rows={4} placeholder="Briefly describe your idea, challenge or requirements…" value={form.message} onChange={handle} />
      </div>
      <button type="submit" className={`enq-submit${loading ? ' loading' : ''}`} disabled={loading}>
        {loading ? <span className="enq-spinner" /> : null}
        {loading ? 'Sending…' : 'Send Enquiry →'}
      </button>
    </form>
  );
}

/* ── Main component ───────────────────────────────────────────── */
export default function Contact({ isContactPage = false }) {
  return (
    <>
      <section id="contact" className={`smart section ${isContactPage ? 'contact-page-hero' : ''}`} aria-label="Contact and location">
        {/* Left column: Location info */}
        <RevealWrapper variant="left" className="smart-copy">
          <div className="eyebrow section-pill">OUR LOCATION</div>
          <h2>
            Let's Build a Smarter<br />
            Tomorrow, <em>Together</em>
          </h2>
          <p>Visit our office or get in touch — we'd love to hear from you.</p>
          <div className="contact-cards">
            {CONTACT_CARDS.map(({ icon, title, lines }) => (
              <div key={title}>
                <span className="contact-icon" aria-hidden="true">{icon}</span>
                <span>
                  <b>{title}</b>
                  <small>
                    {lines.map((line, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                  </small>
                </span>
              </div>
            ))}
          </div>
          <div className="actions">
            <Button href="mailto:hello@maacai.com" variant="accent" showArrow>Get in Touch&nbsp;</Button>
            <Button href="https://maps.google.com/?q=Sector+62+Noida" variant="light">View on Google Maps&nbsp; ↗</Button>
          </div>
          <div className="contact-stats" role="list" aria-label="Company statistics">
            {CONTACT_STATS.map(({ value, label }) => (
              <div key={label} role="listitem"><b>{value}</b><small>{label}</small></div>
            ))}
          </div>
        </RevealWrapper>

        {/* Right column: Map */}
        <RevealWrapper variant="right" className="map" id="map" aria-label="Interactive MAAC AI location map">
          {MAP_PINS.map(pin => (
            <Pin key={pin.className} {...pin} />
          ))}
          <div className="map-search" aria-label="Office address">
            ⌖&nbsp;&nbsp; Sector 62, Noida, Uttar Pradesh 201309, India&nbsp;&nbsp;⌕
          </div>
        </RevealWrapper>
      </section>

      {/* Enquiry Form Section - only shown on contact page */}
      {isContactPage && (
        <section id="enquiry" className="smart section enquiry-section" aria-label="Start a project">
          {/* Left column: Perks */}
          <RevealWrapper variant="left" className="smart-copy">
            <div className="eyebrow section-pill">START A PROJECT</div>
            <h2 className="enq-heading">
              Tell us what <em>you're<br />building.</em>
            </h2>
            <p>Give us a little context about your project. It doesn't need to be perfect — we'll help shape the next step.</p>
            <ul className="enq-perks">
              {PERKS.map(p => (
                <li key={p}>
                  <span className="enq-check" aria-hidden="true">✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </RevealWrapper>

          {/* Right column: Form */}
          <RevealWrapper variant="right" className="enq-form-wrap">
            <EnquiryForm />
          </RevealWrapper>
        </section>
      )}
    </>
  );
}
