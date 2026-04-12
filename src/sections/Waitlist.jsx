import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--pastel-mint)',
            padding: '8rem 4rem',
            borderRadius: '5rem',
            position: 'relative',
            overflow: 'hidden',
            border: '2px solid rgba(6, 78, 59, 0.05)',
            boxShadow: '0 40px 100px rgba(6, 78, 59, 0.1)'
          }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                style={{ position: 'relative', zIndex: 2 }}
              >
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
                <h2 className="font-heading" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 0.85, marginBottom: '2.5rem' }}>
                  FUDS DON <br />
                  <span style={{ color: 'var(--primary)' }}>READY.</span>
                </h2>
                <p style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '3.5rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 3.5rem' }}>
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
                    boxShadow: '0 25px 60px rgba(0,0,0,0.1)',
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
                    <button type="submit" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
                      Join the Squad
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message" 
                style={{ position: 'relative', zIndex: 2 }}
              >
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'white', 
                  borderRadius: '3rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 2.5rem',
                  color: 'var(--primary)',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.1)',
                  transform: 'rotate(-5deg)'
                }}>
                  <CheckCircle size={60} strokeWidth={2.5} />
                </div>
                <h2 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--primary)' }}>
                  You're in the squad!
                </h2>
                <p style={{ fontSize: '1.4rem', color: 'var(--primary)', fontWeight: 700, opacity: 0.8 }}>
                  We'll holla at you soon with the earliest access.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Decorative floating food icons / illustrations */}
          <div className="floating-icons" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', opacity: 0.1 }}>
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '15%', left: '10%' }}
            >
              <Coffee size={80} strokeWidth={1} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{ position: 'absolute', bottom: '20%', right: '12%' }}
            >
              <TrendingUp size={90} strokeWidth={1} />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', top: '25%', right: '15%' }}
            >
              <Sparkles size={60} strokeWidth={1} />
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          #waitlist { padding: 4rem 0; }
          #waitlist .container > div {
            padding: 6rem 1.5rem;
            border-radius: 4rem;
          }
          .input-pill-group { 
            flex-direction: column; 
            border-radius: 2.5rem; 
            padding: 1.5rem !important; 
            gap: 1.25rem; 
            width: 100%;
          }
          .input-pill-group div { padding-left: 0 !important; justify-content: center; }
          .input-pill-group input { text-align: center; margin-bottom: 0.5rem; }
          .input-pill-group .btn { width: 100%; padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Waitlist;

