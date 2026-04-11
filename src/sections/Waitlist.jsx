import React, { useState } from 'react';
import { Mail, CheckCircle, TrendingUp, Sparkles, Coffee } from 'lucide-react';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="waitlist" className="section-padding" style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <div className="container text-center">
        <div style={{
          background: 'var(--pastel-mint)',
          padding: '8rem 4rem',
          borderRadius: '5rem',
          position: 'relative',
          overflow: 'hidden',
          border: '2px solid rgba(6, 78, 59, 0.05)',
          boxShadow: '0 40px 100px rgba(6, 78, 59, 0.08)'
        }}>
          {!submitted ? (
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ 
                display: 'inline-flex', 
                padding: '0.75rem 1.5rem', 
                background: 'rgba(255,255,255,0.4)', 
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: 800,
                color: 'var(--primary)',
                marginBottom: '2.5rem',
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                <Sparkles size={18} /> LIMITED SLOTS AVAILABLE
              </div>
              <h2 className="font-heading" style={{ fontSize: '5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '2.5rem' }}>
                FUDS DON <br />
                <span style={{ color: 'var(--primary)' }}>READY.</span>
              </h2>
              <p style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '3.5rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                Be among the first 500 to experience the 111 Feature. We're launching soon.
              </p>
              
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                maxWidth: '650px',
                margin: '0 auto',
                gap: '1rem',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <div className="input-pill-group" style={{ 
                  padding: '0.8rem', 
                  maxWidth: '100%', 
                  background: 'white',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}>
                  <div style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)' }}>
                    <Mail size={24} strokeWidth={2.5} />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Enter your email to join the waitlist" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ fontSize: '1.1rem', fontWeight: 600 }}
                  />
                  <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                    Join the Squad
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="success-message" style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ 
                width: '100px', 
                height: '100px', 
                background: 'white', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'var(--primary)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}>
                <CheckCircle size={50} strokeWidth={2.5} />
              </div>
              <h2 className="font-heading" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>
                You're in the squad!
              </h2>
              <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 700 }}>
                We'll holla at you soon with the earliest access.
              </p>
            </div>
          )}
          
          {/* Decorative floating food icons / illustrations */}
          <div className="floating-icons" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', opacity: 0.15 }}>
            <div style={{ position: 'absolute', top: '15%', left: '10%' }}><Coffee size={60} /></div>
            <div style={{ position: 'absolute', bottom: '20%', right: '12%' }}><TrendingUp size={70} /></div>
            <div style={{ position: 'absolute', top: '25%', right: '15%' }}><Sparkles size={50} /></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #waitlist { padding: 4rem 1rem; }
          #waitlist .container > div {
            padding: 5rem 1.5rem;
            border-radius: 3.5rem;
          }
          h2 { font-size: 3.5rem !important; }
          .input-pill-group { flex-direction: column; border-radius: 2.5rem; padding: 1.5rem !important; gap: 1.25rem; }
          .input-pill-group input { text-align: center; margin-bottom: 0.5rem; }
          .input-pill-group .btn { width: 100%; border-radius: 999px; }
        }
      `}</style>
    </section>
  );
};

export default Waitlist;
