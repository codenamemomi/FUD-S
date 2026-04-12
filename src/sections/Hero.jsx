import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Apple, Play } from 'lucide-react';
import heroImg from '../assets/hero_meal.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '160px',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)'
    }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container text-center" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: 10
        }}
      >
        <motion.h1 
          variants={itemVariants}
          className="font-heading" 
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontWeight: 900,
            lineHeight: 0.85,
            marginBottom: '2.5rem',
            color: 'var(--text)',
            letterSpacing: '-0.05em'
          }}
        >
          FUDS DON <br />
          <span style={{ color: 'var(--primary)' }}>READY.</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 600,
            color: 'var(--text-muted)',
            marginBottom: '3.5rem',
            maxWidth: '600px'
          }}
        >
          Your personal meal planner and grocery genie. Scheduled today, delivered tomorrow.
        </motion.p>
        
        {/* Address-style Signup Bar */}
        <motion.div 
          variants={itemVariants}
          className="input-pill-group" 
          style={{ 
            marginBottom: '4rem', 
            maxWidth: '600px',
            padding: '0.75rem'
          }}
        >
          <div style={{ paddingLeft: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
            <MapPin size={24} strokeWidth={2.5} />
          </div>
          <input type="email" placeholder="Enter your email for early access" />
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Join Waitlist
          </button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.25rem', alignItems: 'center' }}
        >
          {/* Official Google Play Badge */}
          <motion.a
            href="#"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: '#000',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.6rem 1.4rem',
              borderRadius: '0.8rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              minWidth: '190px',
              transition: 'background 0.2s ease'
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/>
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.05em' }}>GET IT ON</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'sans-serif' }}>Google Play</div>
            </div>
          </motion.a>

          {/* Official App Store Badge */}
          <motion.a
            href="#"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: '#000',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '0.6rem 1.4rem',
              borderRadius: '0.8rem',
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.1)',
              minWidth: '190px',
              transition: 'background 0.2s ease'
            }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
              <path fill="#fff" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
            </svg>
            <div style={{ textAlign: 'left', lineHeight: 1.1 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.02em' }}>Download on the</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'sans-serif' }}>App Store</div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Decorative Food Elements / Illustrations */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: 'easeOut' }}
        className="illustrations-container" 
        style={{
          position: 'absolute',
          bottom: '-5%',
          left: 0,
          right: 0,
          height: '45%',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          pointerEvents: 'none'
        }}
      >
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="food-blob" 
          style={{ transform: 'rotate(-10deg)', marginBottom: '80px' }}
        >
          <img src={heroImg} alt="Meal" style={{ 
            width: 'clamp(200px, 20vw, 320px)', 
            borderRadius: '4rem', 
            boxShadow: '0 40px 80px rgba(0,0,0,0.15)',
            border: '12px solid white'
          }} />
        </motion.div>
        
        <div className="cityscape" style={{ opacity: 0.4 }}>
          <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300V250H40V220H80V250H120V200H160V180H200V200H240V250H600V300H0Z" fill="#064E3B" fillOpacity="0.05"/>
            <rect x="50" y="150" width="80" height="150" rx="4" fill="#064E3B" fillOpacity="0.1"/>
            <rect x="400" y="80" width="100" height="220" rx="4" fill="#064E3B" fillOpacity="0.1"/>
          </svg>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding-top: 140px; }
          .illustrations-container { display: none; }
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

export default Hero;

