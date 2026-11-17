import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Showcase from './sections/Showcase';
import Waitlist from './sections/Waitlist';
import Footer from './components/Footer';
import VendorsPage from './pages/VendorsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';

const parseHashToPage = (hash) => {
  const clean = (hash || '').toLowerCase();
  if (clean === '#vendors') return 'vendors';
  if (clean === '#contact' || clean === '#contact-us') return 'contact';
  if (clean === '#faq' || clean === '#faqs') return 'faq';
  if (clean === '#blog' || clean === '#stories') return 'blog';
  return 'home';
};

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseHashToPage(window.location.hash);
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const page = parseHashToPage(window.location.hash);
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'vendors') {
      window.location.hash = '#vendors';
    } else if (page === 'contact') {
      window.location.hash = '#contact';
    } else if (page === 'faq') {
      window.location.hash = '#faqs';
    } else if (page === 'blog') {
      window.location.hash = '#blog';
    } else {
      if (['#vendors', '#contact', '#faqs', '#faq', '#blog'].some(h => window.location.hash.toLowerCase().startsWith(h))) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {currentPage === 'vendors' && <VendorsPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'faq' && <FaqPage onNavigate={navigateTo} />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigateTo} />}
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features />
            <Showcase />
            <Waitlist />
          </>
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
