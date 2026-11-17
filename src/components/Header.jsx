import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import logo from '../assets/Icon.svg';

const Header = ({ currentPage = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };
    if (isMoreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreOpen]);

  const navItems = ['Company', 'Vendors', 'Riders', 'Products'];
  const isMoreActive = ['contact', 'faq', 'blog'].includes(currentPage);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    if (item === 'Vendors') {
      if (onNavigate) onNavigate('vendors');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Company') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'Products') {
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('products');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('products');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'Riders') {
      if (currentPage !== 'home' && onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const el = document.getElementById('waitlist');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById('waitlist');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    if (onNavigate) onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`header ${isScrolled ? 'is-sticky' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: isScrolled ? '0.85rem 0' : '1.35rem 0',
        zIndex: 1000,
        transition: 'var(--transition)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Brand Logo & Country Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            src={logo}
            alt="FUDS Logo"
            className="header-logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />

          {/* Chowdeck-style Country Pill */}
          <div
            className="desktop-only"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '9999px',
              background: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              fontSize: '0.85rem',
              fontWeight: 800,
              color: 'var(--text)',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
            }}
            onClick={() => setIsCountryOpen(!isCountryOpen)}
          >
            <span>🇳🇬</span>
            <span>NG</span>
            <ChevronDown size={14} strokeWidth={2.5} style={{ opacity: 0.6 }} />
          </div>
        </div>

        {/* Nav Pill (Desktop) */}
        <nav
          className="glass desktop-only"
          style={{
            display: 'flex',
            padding: '0.45rem 0.65rem',
            borderRadius: '9999px',
            gap: '0.35rem',
            background: 'rgba(255, 255, 255, 0.85)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
          }}
        >
          {navItems.map((item) => {
            const isVendorsActive = currentPage === 'vendors' && item === 'Vendors';
            const isCompanyActive = currentPage === 'home' && item === 'Company';
            const isActive = isVendorsActive || isCompanyActive;

            return (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`nav-link ${isActive ? 'active' : ''}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: isVendorsActive ? '#d97706' : isActive ? 'var(--primary)' : 'var(--text)',
                  background: isVendorsActive
                    ? 'rgba(217, 119, 6, 0.12)'
                    : isCompanyActive
                    ? 'rgba(6, 78, 59, 0.08)'
                    : 'transparent',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                {item}
                {isVendorsActive && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#d97706',
                      display: 'inline-block',
                    }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Actions (Right) */}
        <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
          {/* Chowdeck-style "More" Dropdown Menu */}
          <div ref={moreMenuRef} style={{ position: 'relative' }} className="desktop-only">
            <button
              type="button"
              className="btn btn-white"
              style={{
                gap: '0.35rem',
                padding: '0.75rem 1.25rem',
                fontSize: '0.9rem',
                fontWeight: 800,
                borderRadius: '9999px',
                border: isMoreActive ? '1px solid var(--primary)' : '1px solid rgba(0,0,0,0.06)',
                background: isMoreActive ? 'rgba(6, 78, 59, 0.08)' : '#ffffff',
                color: isMoreActive ? 'var(--primary)' : 'var(--text)',
                cursor: 'pointer',
              }}
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              <span>More</span>
              {isMoreOpen ? (
                <ChevronUp size={16} strokeWidth={2.5} />
              ) : (
                <ChevronDown size={16} strokeWidth={2.5} />
              )}
            </button>

            <AnimatePresence>
              {isMoreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    minWidth: '175px',
                    background: '#ffffff',
                    borderRadius: '1.25rem',
                    padding: '0.5rem',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem',
                    zIndex: 1050,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setIsMoreOpen(false);
                      if (onNavigate) onNavigate('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      padding: '0.75rem 1.15rem',
                      borderRadius: '0.9rem',
                      border: 'none',
                      background: currentPage === 'contact' ? 'rgba(6, 78, 59, 0.08)' : 'transparent',
                      color: currentPage === 'contact' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'contact') e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'contact') e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span>Contact Us</span>
                    {currentPage === 'contact' && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMoreOpen(false);
                      if (onNavigate) onNavigate('faq');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      padding: '0.75rem 1.15rem',
                      borderRadius: '0.9rem',
                      border: 'none',
                      background: currentPage === 'faq' ? 'rgba(6, 78, 59, 0.08)' : 'transparent',
                      color: currentPage === 'faq' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'faq') e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'faq') e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span>FAQs</span>
                    {currentPage === 'faq' && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setIsMoreOpen(false);
                      if (onNavigate) onNavigate('blog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      padding: '0.75rem 1.15rem',
                      borderRadius: '0.9rem',
                      border: 'none',
                      background: currentPage === 'blog' ? 'rgba(6, 78, 59, 0.08)' : 'transparent',
                      color: currentPage === 'blog' ? 'var(--primary)' : 'var(--text)',
                      fontWeight: 800,
                      fontSize: '0.9rem',
                      textAlign: 'left',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background 0.15s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== 'blog') e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== 'blog') e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span>Blog</span>
                    {currentPage === 'blog' && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)' }} />
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Cart Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="btn btn-white"
            style={{
              width: '50px',
              height: '50px',
              padding: 0,
              justifyContent: 'center',
              borderRadius: '1.25rem',
              border: '1px solid rgba(0,0,0,0.06)',
            }}
            title="Cart"
          >
            <ShoppingBag size={22} strokeWidth={2.3} color="var(--primary)" />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-only btn btn-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              width: '50px',
              height: '50px',
              padding: 0,
              justifyContent: 'center',
              borderRadius: '1.25rem',
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
              left: '1rem',
              right: '1rem',
              marginTop: '0.5rem',
              borderRadius: '1.75rem',
              padding: 'clamp(1rem, 3.5vw, 1.6rem)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              zIndex: 999,
              boxShadow: '0 30px 60px rgba(0,0,0,0.14)',
              background: 'rgba(255, 255, 255, 0.98)',
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto',
              boxSizing: 'border-box',
            }}
          >
            {navItems.map((item) => {
              const isVendorsActive = currentPage === 'vendors' && item === 'Vendors';
              const isCompanyActive = currentPage === 'home' && item === 'Company';
              const isActive = isVendorsActive || isCompanyActive;

              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    handleNavClick(e, item);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: isVendorsActive ? '#d97706' : isActive ? 'var(--primary)' : 'var(--text)',
                    textDecoration: 'none',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '1.25rem',
                    background: isVendorsActive
                      ? 'rgba(217, 119, 6, 0.12)'
                      : isCompanyActive
                      ? 'rgba(6, 78, 59, 0.08)'
                      : 'rgba(0,0,0,0.02)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{item}</span>
                  {isVendorsActive && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        background: '#d97706',
                        color: '#fff',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                      }}
                    >
                      Active
                    </span>
                  )}
                </a>
              );
            })}

            <div style={{ height: '1px', background: 'rgba(0,0,0,0.06)', margin: '0.35rem 0' }} />

            {/* Dedicated links for More items in Mobile view */}
            {[
              { label: 'Contact Us', page: 'contact' },
              { label: 'FAQs', page: 'faq' },
              { label: 'Blog & Stories', page: 'blog' },
            ].map(({ label, page }) => {
              const isActive = currentPage === page;
              return (
                <a
                  key={page}
                  href={`#${page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    if (onNavigate) onNavigate(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                    textDecoration: 'none',
                    padding: '0.7rem 1.25rem',
                    borderRadius: '1rem',
                    background: isActive ? 'rgba(6, 78, 59, 0.08)' : 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--primary)',
                      }}
                    />
                  )}
                </a>
              );
            })}

            <button
              className="btn btn-primary"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onNavigate) {
                  onNavigate('vendors');
                }
              }}
              style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '0.5rem' }}
            >
              Start Selling on FUDS
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .header-logo {
          height: 72px;
          width: auto;
          object-fit: contain;
          margin-top: -20px;
          margin-bottom: -20px;
          cursor: pointer;
          transition: var(--transition);
        }
        .header.is-sticky {
          background: rgba(255, 253, 242, 0.88);
          backdrop-filter: blur(14px);
          box-shadow: 0 4px 30px rgba(0,0,0,0.04);
        }
        .nav-link:hover {
          background: rgba(0,0,0,0.05);
        }
        .mobile-only { display: none; }
        
        @media (max-width: 991px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex; }
          .header-logo {
            height: 56px;
            margin-top: -14px;
            margin-bottom: -14px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
