import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CalendarClock, ShoppingCart, Bike, Leaf, Tag } from 'lucide-react';

const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const strips = [
    {
      title: "Multi-Vendor Cart",
      desc: "Add items from multiple restaurants and shops into a single cart. One payment. One rider. Zero hassle.",
      color: "var(--pastel-lilac)",
      Icon: ShoppingCart,
      tag: "Core Feature"
    },
    {
      title: "111 Meal Scheduler",
      desc: "Plan breakfast, lunch, and dinner for today or tomorrow in one session — then sit back and wait for the knock.",
      color: "var(--pastel-saffron)",
      Icon: CalendarClock,
      tag: "Core Feature"
    },
    {
      title: "Grocery Subscription",
      desc: "Build your recurring shopping list. Pick a frequency — weekly, bi-weekly, or monthly. We handle the rest.",
      color: "var(--pastel-sky)",
      Icon: Bike,
      tag: "Core Feature"
    },
    {
      title: "Diet-Aware Picks",
      desc: "Set your goal — Keto, Weight Loss, High Protein, Vegan, and more — and we surface the right meals for you.",
      color: "var(--pastel-mint)",
      Icon: Leaf,
      tag: "Personalisation"
    },
    {
      title: "Price Negotiation",
      desc: "Propose a different price on an item. Vendors can accept, reject, or counter — real market dynamics, built in.",
      color: "var(--pastel-pink)",
      Icon: Tag,
      tag: "Coming Soon"
    }
  ];

  return (
    <section ref={targetRef} id="products" className="features-sticky" style={{ height: '400vh', position: 'relative' }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--white)'
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div style={{ marginBottom: '5rem', maxWidth: '800px' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading" 
              style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, lineHeight: 0.9, marginBottom: '1.5rem' }}
            >
              What's on <span className="text-primary">Deck?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 1.5vw, 1.4rem)', fontWeight: 600 }}
            >
              Everything we're shipping in the MVP — built to test what Lagos actually wants.
            </motion.p>
          </div>
          
          <motion.div className="strips-horizontal" style={{ x, display: 'flex', gap: '2rem' }}>
            {strips.map((strip, idx) => (
              <FeatureCard key={idx} strip={strip} />
            ))}
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 991px) {
          .features-sticky { height: auto !important; }
          .features-sticky > div { position: relative !important; height: auto !important; padding: 6rem 0 !important; }
          .strips-horizontal { 
            transform: none !important; 
            flex-direction: column !important; 
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

const FeatureCard = ({ strip }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      whileHover={{ y: -10 }}
      className="strip-card" 
      style={{
        flex: '0 0 auto',
        width: 'clamp(320px, 35vw, 500px)',
        height: 'clamp(420px, 42vw, 580px)',
        backgroundColor: strip.color,
        borderRadius: '3.5rem',
        padding: '3.5rem',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid rgba(0,0,0,0.03)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <div style={{ 
          background: 'white',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '1.75rem',
          boxShadow: '0 15px 30px rgba(0,0,0,0.05)',
          marginBottom: '2.5rem',
          color: 'var(--primary)'
        }}>
          <strip.Icon size={36} strokeWidth={2.5} />
        </div>
        <h3 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 3vw, 3.2rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.95 }}>
          {strip.title}
        </h3>
        <p style={{ fontSize: '1.15rem', fontWeight: 600, lineHeight: 1.5, opacity: 0.8, maxWidth: '280px' }}>
          {strip.desc}
        </p>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{
          display: 'inline-flex',
          padding: '0.5rem 1.25rem',
          background: 'rgba(255,255,255,0.5)',
          borderRadius: '2rem',
          fontSize: '0.8rem',
          fontWeight: 800,
          color: 'var(--primary)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          {strip.tag}
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
