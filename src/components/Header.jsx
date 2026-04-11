import React from 'react';

const Header = () => {
  return (
    <header className="header" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      padding: '1.5rem 0',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Brand Logo */}
        <div className="btn btn-primary" style={{
          fontSize: '1.2rem',
          fontWeight: 800,
          background: 'var(--primary)',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '1.2rem'
        }}>
          FUDS<span style={{ color: 'var(--pastel-saffron)' }}>.</span>
        </div>
        
        {/* Nav Pill */}
        <nav className="glass" style={{
          display: 'flex',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '0.5rem 1rem',
          borderRadius: '9999px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
          backdropFilter: 'blur(10px)',
          gap: '1.5rem'
        }}>
          {['Company', 'Vendors', 'Riders', 'Products'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--text)',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              transition: 'var(--transition)'
            }} className="nav-link">
              {item}
            </a>
          ))}
        </nav>
        
        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button className="btn btn-white desktop-only">More ⌄</button>
          <button className="btn btn-white" style={{ position: 'relative' }}>
            🛒
          </button>
        </div>
      </div>
      
      <style>{`
        .nav-link:hover {
          background: var(--bg);
        }
        @media (max-width: 991px) {
          nav { display: none !important; }
          .desktop-only { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
