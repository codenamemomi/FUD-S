import React from 'react';
import { Send, Camera, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="section-padding" style={{
      background: 'var(--bg)',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      paddingTop: '8rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '5rem',
          marginBottom: '8rem'
        }}>
          <div>
            <div className="btn btn-primary" style={{
              fontSize: '1.25rem',
              fontWeight: 900,
              background: 'var(--primary)',
              color: 'white',
              padding: '0.8rem 1.6rem',
              borderRadius: '1.25rem',
              marginBottom: '2rem',
              boxShadow: '0 10px 20px rgba(6, 78, 59, 0.15)'
            }}>
              FUDS<span style={{ color: 'var(--pastel-saffron)' }}>.</span>
            </div>
            <p className="text-muted" style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.6, maxWidth: '280px' }}>
              The everything app for your stomach. Personalized, scheduled, and delivered.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              <li><a href="#" className="footer-link">FUDS for Customers</a></li>
              <li><a href="#" className="footer-link">FUDS for Vendors</a></li>
              <li><a href="#" className="footer-link">FUDS for Riders</a></li>
              <li><a href="#" className="footer-link">FUDS Business</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Contact Support</a></li>
              <li><a href="#" className="footer-link">Quality Standards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1.25rem', fontSize: '1.2rem', marginBottom: '2rem' }}>
              <li className="social-pill"><Send size={18} fill="currentColor" strokeWidth={0} /></li>
              <li className="social-pill"><Camera size={18} strokeWidth={2.5} /></li>
              <li className="social-pill"><Briefcase size={18} fill="currentColor" strokeWidth={0} /></li>
            </ul>
            <div style={{ display: 'grid', gap: '0.75rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={16} /> support@fuds.delivery</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={16} /> +234 800 FUDS APP</div>
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '2.5rem 0',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.9rem',
          fontWeight: 700,
          color: 'var(--text-muted)'
        }}>
          <div>© 2026 FUDS Delivery. Built for your cravings.</div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <style>{`
        .footer-link {
          transition: var(--transition);
          text-decoration: none;
          color: inherit;
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .social-pill {
          width: 44px;
          height: 44px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          color: var(--text);
        }
        .social-pill:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(6, 78, 59, 0.15);
        }
        @media (max-width: 768px) {
          footer { text-align: center; }
          ul { justify-content: center !important; }
          footer div:last-child { flex-direction: column; gap: 1.5rem; }
          .social-pill { margin: 0 auto; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
