import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, ShoppingBag, Salad, Sparkles, ChefHat } from 'lucide-react';
import burger from '../assets/burger.png';
import groceries from '../assets/groceries.png';
import spaghetti from '../assets/spaghetti.png';

const Features = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

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
    <section ref={targetRef} className="features-sticky" style={{ height: '300vh', position: 'relative' }}>
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--white)'
      }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <h2 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, lineHeight: 1 }}>What's on Deck?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontWeight: 500 }}>Try the everything app for your stomach.</p>
          </div>
          
          <motion.div className="strips-horizontal" style={{ x, display: 'flex', gap: '1.5rem' }}>
            {strips.map((strip, idx) => (
              <div key={idx} className="strip-card" style={{
                flex: '0 0 auto',
                width: '450px',
                height: '550px',
                backgroundColor: strip.color,
                borderRadius: '3rem',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                border: '1.5px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ 
                    background: 'white',
                    width: '70px',
                    height: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '1.5rem',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    marginBottom: '2rem',
                    color: 'var(--primary)'
                  }}>
                    <strip.Icon size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-heading" style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1 }}>
                    {strip.title}
                  </h3>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.5, opacity: 0.8, maxWidth: '280px' }}>
                    {strip.desc}
                  </p>
                </div>
                
                {strip.img && (
                  <div className="strip-img" style={{ 
                    position: 'absolute', 
                    bottom: '-40px', 
                    right: '-40px',
                    width: '300px',
                    transform: 'rotate(-8deg)',
                    transition: 'var(--transition)'
                  }}>
                    <img src={strip.img} alt={strip.title} style={{ 
                      width: '100%', 
                      borderRadius: '2.5rem', 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)' 
                    }} />
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <style>{`
        .strip-card:hover .strip-img {
          transform: rotate(0) scale(1.05) translateY(-20px) !important;
        }
        @media (max-width: 768px) {
          .features-sticky { height: auto !important; }
          .features-sticky > div { position: relative !important; height: auto !important; padding: 4rem 0 !important; }
          .features-sticky .strips-horizontal { x: 0 !important; flex-direction: column !important; }
          .strip-card { width: 100% !important; height: auto !important; min-height: 400px !important; }
        }
      `}</style>
    </section>
  );
};

export default Features;
