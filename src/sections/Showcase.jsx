import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShoppingCart, Bike, Star, ArrowRight } from 'lucide-react';
import burger from '../assets/burger.png';

const Showcase = () => {
  const scrollRef = useRef(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="showcase" className="section-padding" style={{ background: 'var(--primary)', color: 'white', overflow: 'hidden' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '6rem',
        alignItems: 'center'
      }}>
        <motion.div 
          ref={scrollRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="showcase-content"
        >
          <motion.h2 variants={itemVariants} className="font-heading" style={{ fontSize: 'clamp(3.5rem, 6vw, 6.5rem)', fontWeight: 900, lineHeight: 0.85, marginBottom: '2.5rem' }}>
            We've Got You <br />
            <span style={{ color: 'var(--pastel-saffron)' }}>Covered.</span>
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: '1.25rem', marginBottom: '3.5rem', opacity: 0.9, fontWeight: 500, maxWidth: '500px' }}>
            From a last-minute dinner backup to supplies for the week. FUDS deliver everything to your doorstep in minutes.
          </motion.p>
          
          <div className="feature-list" style={{ display: 'grid', gap: '1.25rem' }}>
            {[
              { icon: CheckCircle2, text: 'Quick and easy onboarding' },
              { icon: Star, text: 'Quality meal choices' },
              { icon: ShoppingCart, text: 'Fresh market picks' },
              { icon: Bike, text: 'Single rider delivery' }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.12)' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  background: 'rgba(255,255,255,0.08)',
                  padding: '1.25rem 2rem',
                  borderRadius: '1.5rem',
                  width: 'fit-content',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                <f.icon size={22} color="var(--pastel-saffron)" strokeWidth={2.5} />
                <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>{f.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="showcase-mockups" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mobile-phone" 
            style={{
              width: '100%',
              maxWidth: '360px',
              aspectRatio: '9/18.5',
              background: 'var(--white)',
              borderRadius: '3.5rem',
              border: '12px solid #111',
              overflow: 'hidden',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 50px 100px rgba(0,0,0,0.4)',
              maxHeight: '750px'
            }}
          >
            <div className="phone-screen" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', alignItems: 'center' }}>
                <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.4rem', letterSpacing: '-0.05em' }}>FUDS</div>
                <ShoppingCart size={24} color="var(--primary)" strokeWidth={2.5} />
              </div>
              
              <div className="featured-card" style={{ 
                height: '240px', 
                borderRadius: '2.2rem',
                marginBottom: '2.5rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${burger})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.3rem' }}>Mega Burger</div>
                <div style={{ color: 'white', fontSize: '0.95rem', opacity: 0.9, fontWeight: 600 }}>Free Delivery</div>
              </div>

              <div style={{ fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text)', fontSize: '1.2rem' }}>Top Pickups</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ 
                    aspectRatio: '1/1',
                    background: 'var(--bg)', 
                    borderRadius: '1.5rem',
                    border: '1.5px solid rgba(0,0,0,0.05)'
                  }}></div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Floating cards / notifications */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="floating-card" 
            style={{
              position: 'absolute',
              top: '15%',
              right: '-10%',
              background: 'white',
              padding: '1.25rem 2rem',
              borderRadius: '1.75rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
              zIndex: 3,
              color: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(0,0,0,0.05)',
              minWidth: '240px'
            }}
          >
            <div style={{ 
              background: 'var(--pastel-mint)', 
              padding: '0.6rem', 
              borderRadius: '1rem',
              color: 'var(--primary)'
            }}>
              <CheckCircle2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>Order Accepted</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Chef is cooking...</div>
            </div>
          </motion.div>

          <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="floating-card" 
            style={{
              position: 'absolute',
              bottom: '15%',
              left: '-10%',
              background: 'white',
              padding: '1.25rem 2rem',
              borderRadius: '1.75rem',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
              zIndex: 3,
              color: 'var(--text)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              border: '1px solid rgba(0,0,0,0.05)',
              minWidth: '240px'
            }}
          >
            <div style={{ 
              background: 'var(--pastel-sky)', 
              padding: '0.6rem', 
              borderRadius: '1rem',
              color: 'var(--primary)'
            }}>
              <Bike size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem' }}>Rider arriving</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Arriving in 2 mins</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 991px) {
          #showcase .container { grid-template-columns: 1fr; text-align: center; }
          .feature-list { justify-items: center; }
          .showcase-mockups { margin-top: 4rem; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto; }
          .floating-card { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Showcase;

