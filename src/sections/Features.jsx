import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Utensils, ShoppingBag, Salad, Sparkles, ChefHat, ArrowRight } from 'lucide-react';
import burger from '../assets/burger.png';
import groceries from '../assets/groceries.png';
import spaghetti from '../assets/spaghetti.png';

const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  const strips = [
    {
      title: "111 Meal Planner",
      desc: "Fresh gourmet meals, scheduled today, delivered tomorrow.",
      color: "var(--pastel-lilac)",
      Icon: ChefHat,
      img: burger
    },
    {
      title: "Market Smart",
      desc: "Fresh produce and local market picks delivered in one ride.",
      color: "var(--pastel-saffron)",
      Icon: ShoppingBag,
      img: groceries
    },
    {
      title: "Chef's Palette",
      desc: "Exotic full course meals for when you want to feel fancy.",
      color: "var(--pastel-sky)",
      Icon: Utensils,
      img: spaghetti
    },
    {
      title: "Household Pro",
      desc: "Never run out of essentials. We've got your back.",
      color: "var(--pastel-mint)",
      Icon: Salad,
      img: null
    },
    {
      title: "Coming Soon",
      desc: "Something magical is in the works just for you.",
      color: "var(--pastel-pink)",
      Icon: Sparkles,
      img: null
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
              Try the everything app for your stomach. We handle the heavy lifting.
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
        height: 'clamp(450px, 45vw, 620px)',
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
        <h3 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.8rem)', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 0.9 }}>
          {strip.title}
        </h3>
        <p style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.4, opacity: 0.85, maxWidth: '280px' }}>
          {strip.desc}
        </p>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, color: 'var(--primary)', cursor: 'pointer' }}>
        Learn more <ArrowRight size={20} strokeWidth={3} />
      </div>
      
      {strip.img && (
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 0 }}
          className="strip-img" 
          style={{ 
            position: 'absolute', 
            bottom: '-50px', 
            right: '-50px',
            width: 'clamp(200px, 20vw, 320px)',
            transform: 'rotate(-12deg)',
            transition: 'var(--transition)'
          }}
        >
          <img src={strip.img} alt={strip.title} style={{ 
            width: '100%', 
            borderRadius: '3rem', 
            boxShadow: '0 30px 60px rgba(0,0,0,0.18)' 
          }} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default Features;

