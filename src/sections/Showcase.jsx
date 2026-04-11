import React from 'react';
import { CheckCircle2, ShoppingCart, Bike, MessageSquare, Star } from 'lucide-react';
import burger from '../assets/burger.png';

const Showcase = () => {
  return (
    <section id="showcase" className="section-padding" style={{ background: 'var(--primary)', color: 'white', overflow: 'hidden' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div className="showcase-content">
          <h2 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 0.9, marginBottom: '2.5rem' }}>
            We've Got You <br />
            <span style={{ color: 'var(--pastel-saffron)' }}>Covered.</span>
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '3.5rem', opacity: 0.9, fontWeight: 500 }}>
            From a last-minute dinner backup to supplies for the week. FUDS deliver everything to your doorstep in minutes.
          </p>
          
          <div className="feature-list" style={{ display: 'grid', gap: '1.5rem' }}>
            {[
              { icon: CheckCircle2, text: 'Quick and easy onboarding' },
              { icon: Star, text: 'Quality meal choices' },
              { icon: ShoppingCart, text: 'Fresh market picks' },
              { icon: Bike, text: 'Single rider delivery' }
            ].map((f, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                background: 'rgba(255,255,255,0.08)',
                padding: '1rem 1.75rem',
                borderRadius: '1.2rem',
                width: 'fit-content',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <f.icon size={22} color="var(--pastel-saffron)" strokeWidth={2.5} />
                <span style={{ fontWeight: 700, fontSize: '1rem' }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="showcase-mockups" style={{ position: 'relative' }}>
          <div className="mobile-phone" style={{
            width: '340px',
            height: '650px',
            background: 'var(--white)',
            borderRadius: '3.5rem',
            border: '10px solid #000',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 2,
            margin: '0 auto',
            boxShadow: '0 50px 100px rgba(0,0,0,0.3)'
          }}>
            <div className="phone-screen" style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ fontWeight: 900, color: 'var(--primary)', fontSize: '1.3rem' }}>FUDS</div>
                <ShoppingCart size={24} color="var(--primary)" />
              </div>
              
              <div className="featured-card" style={{ 
                height: '220px', 
                background: 'var(--pastel-saffron)', 
                borderRadius: '2rem',
                marginBottom: '2rem',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${burger})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem' }}>Mega Burger</div>
                <div style={{ color: 'white', fontSize: '0.9rem', opacity: 0.9, fontWeight: 600 }}>Free Delivery</div>
              </div>

              <div style={{ fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text)', fontSize: '1.1rem' }}>Top Pickups</div>
              <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ 
                    minWidth: '110px', 
                    height: '110px', 
                    background: 'var(--bg)', 
                    borderRadius: '1.5rem',
                    flexShrink: 0,
                    border: '1.5px solid rgba(0,0,0,0.05)'
                  }}></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating cards / notifications */}
          <div className="floating-card slide-up" style={{
            position: 'absolute',
            top: '15%',
            right: '-60px',
            background: 'white',
            padding: '1.25rem 2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            zIndex: 3,
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ 
              background: 'var(--pastel-mint)', 
              padding: '0.5rem', 
              borderRadius: '0.75rem',
              color: 'var(--primary)'
            }}>
              <CheckCircle2 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Order Accepted</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Chef is cooking...</div>
            </div>
          </div>

          <div className="floating-card slide-down" style={{
            position: 'absolute',
            bottom: '20%',
            left: '-60px',
            background: 'white',
            padding: '1.25rem 2rem',
            borderRadius: '1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            zIndex: 3,
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            border: '1px solid rgba(0,0,0,0.05)'
          }}>
            <div style={{ 
              background: 'var(--pastel-sky)', 
              padding: '0.5rem', 
              borderRadius: '0.75rem',
              color: 'var(--primary)'
            }}>
              <Bike size={24} strokeWidth={2.5} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem' }}>Rider arriving</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Arriving in 2 mins</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes slideUpDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .slide-up { animation: slideUpDown 4s infinite ease-in-out; }
        .slide-down { animation: slideUpDown 5s infinite ease-in-out; animation-delay: 1.5s; }
        @media (max-width: 991px) {
          #showcase .container { grid-template-columns: 1fr; text-align: center; }
          .feature-list { justify-items: center; }
          .showcase-mockups { transform: scale(0.7); margin-top: 4rem; }
          .floating-card { position: static !important; width: fit-content; margin: 1rem auto; animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Showcase;
