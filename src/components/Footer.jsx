import React from 'react';
import { Send, Camera, Briefcase, Mail, MapPin, Phone } from 'lucide-react';
import footerLogo from '../assets/footer.svg';

const Footer = () => {
  return (
    <footer className="section-padding" style={{
      background: 'var(--bg)',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      paddingTop: '8rem',
      paddingBottom: '4rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '5rem',
          marginBottom: '6rem'
        }}>
          <div>
            <img 
              src={footerLogo}
              alt="FUDS Logo"
              style={{
                height: '210px',
                width: 'auto',
                objectFit: 'contain',
                marginLeft: '-40px',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}
            />
            <p className="text-muted" style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.6, maxWidth: '280px' }}>
              The everything app for your stomach. Personalized, scheduled, and delivered.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Products</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              <li><a href="#products" className="footer-link">FUDS for Customers</a></li>
              <li><a href="#vendors" className="footer-link">FUDS for Vendors</a></li>
              <li><a href="#riders" className="footer-link">FUDS for Riders</a></li>
              <li><a href="#business" className="footer-link">FUDS Business</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-muted)' }}>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#careers" className="footer-link">Careers</a></li>
              <li><a href="#support" className="footer-link">Contact Support</a></li>
              <li><a href="#quality" className="footer-link">Quality Standards</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem' }}>
              <div className="social-pill"><Send size={18} fill="currentColor" strokeWidth={0} /></div>
              <div className="social-pill"><Camera size={18} strokeWidth={2.5} /></div>
              <div className="social-pill"><Briefcase size={18} fill="currentColor" strokeWidth={0} /></div>
            </div>
            <div style={{ display: 'grid', gap: '1rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Mail size={18} className="text-primary" /> support@fuds.delivery</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Phone size={18} className="text-primary" /> +234 800 FUDS APP</div>
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '3rem 0',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
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
          padding-left: 5px;
        }
        .social-pill {
          width: 48px;
          height: 48px;
          background: var(--white);
          border: 1px solid rgba(0,0,0,0.08);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition-bounce);
          color: var(--text);
          box-shadow: var(--shadow);
        }
        .social-pill:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-5px) rotate(8deg);
          box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.2);
        }
        @media (max-width: 991px) {
          footer { text-align: center; }
          ul { justify-content: center !important; }
          .social-pill { margin: 0 auto; }
          footer div:last-child { justify-content: center; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
