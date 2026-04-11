import React from 'react';
import { MapPin, Apple, Play } from 'lucide-react';
import heroImg from '../assets/hero_meal.png';

const Hero = () => {
  return (
    <section className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '120px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)'
    }}>
      <div className="container text-center animate-fade-in" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10
      }}>
        <h1 className="font-heading" style={{
          fontSize: 'clamp(3rem, 8vw, 8rem)',
          fontWeight: 900,
          lineHeight: 0.9,
          marginBottom: '2rem',
          color: 'var(--text)',
          letterSpacing: '-3.5px'
        }}>
          FUDS DON <br />
          <span style={{ color: 'var(--primary)' }}>READY.</span>
        </h1>
        
        {/* Address-style Signup Bar */}
        <div className="input-pill-group" style={{ 
          marginBottom: '3rem', 
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '0.6rem',
          background: 'white',
          boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
        }}>
          <div style={{ paddingLeft: '1.5rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
            <MapPin size={24} strokeWidth={2.5} />
          </div>
          <input type="email" placeholder="Enter your email to join the waitlist" />
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
            Get Early Access
          </button>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '4rem' }}>
          <div className="btn" style={{ background: '#000', color: '#fff', gap: '0.75rem', padding: '0.8rem 1.8rem' }}>
            <Play size={18} fill="white" /> Download on Google Play
          </div>
          <div className="btn" style={{ background: '#000', color: '#fff', gap: '0.75rem', padding: '0.8rem 1.8rem' }}>
            <Apple size={18} fill="white" /> Download on App Store
          </div>
        </div>
      </div>

      {/* Decorative Food Elements / Illustrations */}
      <div className="illustrations-container" style={{
        position: 'absolute',
        bottom: '-5%',
        left: 0,
        right: 0,
        height: '40%',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        pointerEvents: 'none'
      }}>
        <div className="food-blob" style={{ transform: 'rotate(-10deg)', marginBottom: '50px' }}>
          <img src={heroImg} alt="Meal" style={{ 
            width: '240px', 
            borderRadius: '3rem', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
            border: '8px solid white'
          }} />
        </div>
        <div className="cityscape" style={{ opacity: 0.4 }}>
          <svg width="600" height="300" viewBox="0 0 600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 300V250H40V220H80V250H120V200H160V180H200V200H240V250H600V300H0Z" fill="#064E3B" fillOpacity="0.05"/>
            <rect x="50" y="150" width="80" height="150" rx="4" fill="#064E3B" fillOpacity="0.1"/>
            <rect x="400" y="80" width="100" height="220" rx="4" fill="#064E3B" fillOpacity="0.1"/>
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .illustrations-container { display: none; }
          .input-pill-group { flex-direction: column; border-radius: 2rem; padding: 1.5rem !important; gap: 1rem; }
          .input-pill-group input { text-align: center; margin-bottom: 0.5rem; }
          .input-pill-group .btn { width: 100%; border-radius: 999px; }
          h1 { font-size: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
