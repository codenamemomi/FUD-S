import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Showcase from './sections/Showcase';
import Waitlist from './sections/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Waitlist />
      </main>
      <Footer />

    </div>
  );
}

export default App;
