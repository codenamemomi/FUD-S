import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  Headphones,
  Store,
  Bike,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ContactPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'customer',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const channels = [
    {
      icon: <Headphones size={24} color="var(--primary)" />,
      title: 'Customer Care',
      desc: 'Order tracking, refunds, payment assistance, or craving emergencies.',
      action: 'support@fuds.delivery',
      sub: 'Response within 5 mins',
      href: 'mailto:support@fuds.delivery',
      badge: '24/7 Live',
    },
    {
      icon: <Store size={24} color="#d97706" />,
      title: 'Vendor Partnerships',
      desc: 'Looking to get your restaurant or store listed on the FUDS marketplace?',
      action: 'vendors@fuds.delivery',
      sub: 'Merchant onboarding team',
      href: 'mailto:vendors@fuds.delivery',
      badge: 'Merchant Support',
    },
    {
      icon: <Bike size={24} color="#0284c7" />,
      title: 'Rider Fleet & Logistics',
      desc: 'Deliveries, equipment, batching, or becoming a FUDS Champion Rider.',
      action: 'riders@fuds.delivery',
      sub: 'Fleet operations',
      href: 'mailto:riders@fuds.delivery',
      badge: 'Fleet Ops',
    },
  ];

  const offices = [
    { city: 'Lagos Hub (HQ)', address: '14 Admiralty Way, Lekki Phase 1, Lagos State', hours: 'Mon - Sun: 24/7 Ops' },
    { city: 'Abuja Regional Center', address: 'Plot 722 Aminu Kano Crescent, Wuse 2, Abuja', hours: 'Mon - Sun: 7am - 11pm' },
    { city: 'Port Harcourt Hub', address: '32 Olu Obasanjo Road, Port Harcourt', hours: 'Mon - Sun: 8am - 10pm' },
  ];

  return (
    <div className="contact-page-wrapper" style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', paddingTop: '6.5rem', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section style={{ padding: '2.5rem 0 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '880px', boxSizing: 'border-box' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(6, 78, 59, 0.08)',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={13} /> Get in Touch
            </div>
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--text)',
                marginBottom: '1rem',
                wordBreak: 'break-word',
              }}
            >
              We’re here to help you <br />
              <span style={{ color: 'var(--primary)' }}>savor every moment.</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: '680px',
                margin: '0 auto',
                padding: '0 0.5rem',
              }}
            >
              Have a question about your order, interested in partnering with us, or simply want to say hello? 
              Reach out and our dedicated team will get back to you in no time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Channels Grid */}
      <section style={{ padding: '1.5rem 0 3.5rem' }}>
        <div className="container" style={{ boxSizing: 'border-box' }}>
          <div className="contact-channels-grid">
            {channels.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="contact-channel-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '1.1rem',
                        background: 'rgba(6, 78, 59, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {c.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                        background: 'rgba(0,0,0,0.04)',
                        color: 'var(--text)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {c.badge}
                    </span>
                  </div>
                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.4rem' }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, fontWeight: 500 }}>
                    {c.desc}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '1rem', marginTop: '1rem' }}>
                  <a
                    href={c.href}
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      wordBreak: 'break-all',
                    }}
                  >
                    <span>{c.action}</span> <ArrowRight size={15} style={{ flexShrink: 0 }} />
                  </a>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.2rem', fontWeight: 600 }}>
                    {c.sub}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form and Hubs Two-Column Layout */}
          <div className="contact-content-grid">
            {/* Direct Message Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="contact-card contact-form-card"
            >
              <h2 className="font-heading" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
                Send us a message
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem', fontWeight: 500 }}>
                Fill out the form below and an assigned specialist will respond within 2 hours.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '2rem 1.5rem',
                    borderRadius: '1.5rem',
                    background: 'rgba(6, 78, 59, 0.05)',
                    border: '1px solid rgba(6, 78, 59, 0.15)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.4rem' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    Thank you, <strong>{formData.name}</strong>. A confirmation ticket has been logged and sent to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', category: 'customer', subject: '', message: '' });
                    }}
                    className="btn btn-primary"
                    style={{ padding: '0.7rem 1.5rem', borderRadius: '9999px', fontSize: '0.9rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                      Topic / Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="contact-input"
                    >
                      <option value="customer">Order Support & Meal Schedule</option>
                      <option value="vendor">Vendor Onboarding & Store Inquiries</option>
                      <option value="rider">Rider / Fleet Driver Questions</option>
                      <option value="catering">Corporate & Bulk Group Catering</option>
                      <option value="other">General Feedback / Press</option>
                    </select>
                  </div>

                  <div className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amaka Adeleke"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.35rem' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please describe your question or issue in detail..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '0.95rem 1.5rem',
                      borderRadius: '9999px',
                      fontWeight: 800,
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: '0.25rem',
                      boxSizing: 'border-box',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Regional Hubs & Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', width: '100%', boxSizing: 'border-box' }}
            >
              <div className="contact-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '0.9rem',
                      background: 'rgba(6, 78, 59, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                      Physical Hubs & Kitchens
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Operational logistics centers
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {offices.map((off, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.1rem',
                        borderRadius: '1.1rem',
                        background: '#f8fafc',
                        border: '1px solid rgba(0,0,0,0.04)',
                        boxSizing: 'border-box',
                      }}
                    >
                      <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.2rem' }}>
                        {off.city}
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '0.35rem' }}>
                        {off.address}
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--primary)', fontWeight: 700 }}>
                        <Clock size={12} /> {off.hours}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Help Box */}
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--primary) 0%, #032b21 100%)',
                  color: '#ffffff',
                  padding: 'clamp(1.5rem, 4vw, 2.25rem)',
                  borderRadius: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.1rem',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MessageSquare size={20} color="#bef264" />
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#bef264' }}>
                    Need immediate answers?
                  </span>
                </div>
                <h3 className="font-heading" style={{ fontSize: 'clamp(1.3rem, 3vw, 1.55rem)', fontWeight: 900, lineHeight: 1.25 }}>
                  Check our Frequently Asked Questions
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  Most questions about meal schedules, group deliveries, payment cards, and refunds are answered in our knowledge base.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate('faq');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn btn-white"
                  style={{
                    alignSelf: 'flex-start',
                    padding: '0.7rem 1.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    borderRadius: '9999px',
                    gap: '0.45rem',
                  }}
                >
                  <HelpCircle size={16} /> View FAQs
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-channels-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
          gap: 1.5rem;
          margin-bottom: 3.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .contact-channel-card {
          background: #ffffff;
          padding: clamp(1.25rem, 3vw, 2rem);
          border-radius: 1.75rem;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px -8px rgba(0,0,0,0.04);
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-sizing: border-box;
          min-width: 0;
        }
        .contact-content-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start;
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 900px) {
          .contact-content-grid {
            grid-template-columns: 1.15fr 0.85fr;
            gap: 2.5rem;
          }
        }
        .contact-card {
          background: #ffffff;
          padding: clamp(1.5rem, 4vw, 2.5rem);
          border-radius: 2rem;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.04);
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
        .contact-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border-radius: 0.9rem;
          border: 1px solid rgba(0,0,0,0.12);
          background: #f8fafc;
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text);
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
        }
        .contact-input:focus {
          border-color: var(--primary);
          background: #ffffff;
        }
        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 520px) {
          .contact-form-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
