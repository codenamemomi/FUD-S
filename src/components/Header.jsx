import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/Icon.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Company', 'Vendors', 'Riders', 'Products'];

  return (
    <header className={`header ${isScrolled ? 'is-sticky' : ''}`} style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: isScrolled ? '1rem 0' : '1.5rem 0',
      zIndex: 1000,
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <motion.img 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          src={logo}
          alt="FUDS Logo"
          className="header-logo"
        />
        
        {/* Nav Pill (Desktop) */}
        <nav className="glass desktop-only" style={{
          display: 'flex',
          padding: '0.5rem 0.75rem',
          borderRadius: '9999px',
          gap: '0.5rem'
        }}>
          {navItems.map((item) => (
            <motion.a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="nav-link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: 'var(--text)',
                padding: '0.6rem 1.2rem',
                borderRadius: '9999px',
                transition: 'var(--transition)'
              }}
            >
              {item}
            </motion.a>
          ))}
        </nav>
        
        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button className="btn btn-white desktop-only" style={{ gap: '0.4rem' }}>
            More <ChevronDown size={18} strokeWidth={2.5} />
          </button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn btn-white" 
            style={{ 
              width: '56px', 
              height: '56px', 
              padding: 0, 
              justifyContent: 'center',
              borderRadius: '1.25rem'
            }}
          >
            <ShoppingBag size={24} strokeWidth={2.5} />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-only btn btn-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              width: '56px', 
              height: '56px', 
              padding: 0, 
              justifyContent: 'center',
              borderRadius: '1.25rem'
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu-overlay glass"
            style={{
              position: 'absolute',
              top: '100%',
              left: '1.5rem',
              right: '1.5rem',
              marginTop: '1rem',
              borderRadius: '2rem',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              zIndex: 999,
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)'
            }}
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  padding: '1rem',
                  borderRadius: '1.25rem',
                  background: 'rgba(0,0,0,0.02)'
                }}
              >
                {item}
              </a>
            ))}
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.25rem' }}>
              Download App
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        .header-logo {
          height: 80px;
          width: auto;
          object-fit: contain;
          margin-top: -25px;
          margin-bottom: -25px;
          cursor: pointer;
          transition: var(--transition);
        }
        .header.is-sticky {
          background: rgba(255, 253, 242, 0.8);
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.03);
        }
        .nav-link:hover {
          background: rgba(0,0,0,0.04);
        }
        .mobile-only { display: none; }
        
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex; }
          .header-logo {
            height: 60px;
            margin-top: -18px;
            margin-bottom: -18px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;

