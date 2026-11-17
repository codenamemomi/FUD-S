import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Store,
  TrendingUp,
  CheckCircle2,
  CalendarCheck,
  Bike,
  Sparkles,
  ChefHat,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Award,
  ShoppingBag,
  UtensilsCrossed,
  Banknote,
  Layers,
} from 'lucide-react';

// Assets from existing repository
import burgerImg from '../assets/burger.png';
import spaghettiImg from '../assets/spaghetti.png';
import groceriesImg from '../assets/groceries.png';
import heroMealImg from '../assets/hero_meal.png';

// ─────────────────────────────────────────────────────────────────────────────
// VENDOR PORTAL LINK PLACEHOLDERS
// Set your separate Vendor React App / Onboarding URLs below.
// Clicking either button will open your designated link in a new tab.
// ─────────────────────────────────────────────────────────────────────────────
export const VENDOR_SIGNUP_URL = 'https://vendor.fuds.delivery/signup'; // <-- Replace with your Vendor Registration URL
export const VENDOR_LOGIN_URL = 'https://vendor.fuds.delivery/login';   // <-- Replace with your Vendor Portal Login URL

const VendorsPage = ({ onNavigate }) => {
  // Revenue Calculator state
  const [dailyOrders, setDailyOrders] = useState(45);
  const avgOrderValue = 3500;
  const monthlyRevenue = dailyOrders * 30 * avgOrderValue;

  // Active Category Showcase Tab
  const [activeCategoryTab, setActiveCategoryTab] = useState('restaurants');

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const categories = [
    {
      id: 'restaurants',
      title: 'Restaurants & Grills',
      icon: UtensilsCrossed,
      desc: 'Local delicacies, fast casual, jollof spots, shawarma, and continental kitchens.',
      highlight: 'Turn daily lunch & dinner hours into packed digital dispatch times.',
      image: burgerImg,
      stats: 'Avg. 60+ daily orders',
    },
    {
      id: 'cloud-kitchens',
      title: 'Cloud Kitchens & Home Chefs',
      icon: ChefHat,
      desc: 'Monetize commercial kitchen space or home setup without expensive front-of-house rent.',
      highlight: 'Take bulk pre-orders for traditional soups, bowls, and party trays.',
      image: heroMealImg,
      stats: 'Zero high street lease needed',
    },
    {
      id: 'groceries',
      title: 'Supermarkets & Groceries',
      icon: ShoppingBag,
      desc: 'Fresh farm produce, pantry provisions, meats, spices, and household essentials.',
      highlight: 'Tap into recurring weekly grocery baskets from loyal families.',
      image: groceriesImg,
      stats: '₦35,000+ avg basket size',
    },
    {
      id: 'bakeries',
      title: 'Bakeries & Confectioneries',
      icon: Store,
      desc: 'Freshly baked bread, pastries, finger foods, and customized celebration cakes.',
      highlight: 'Scheduled breakfast deliveries directly to desks and doorsteps.',
      image: spaghettiImg,
      stats: 'Early 7 AM batch dispatch',
    },
  ];

  const faqs = [
    {
      q: 'How much does it cost to register and sell on FUDS?',
      a: 'Registering on FUDS is completely free. There are zero upfront setup fees, no registration charges, and no hidden monthly subscription costs. We only earn a small, competitive service fee on successfully fulfilled customer orders.',
    },
    {
      q: 'When and how do I receive my payouts?',
      a: 'We process vendor payouts automatically every business day directly into your Nigerian bank account. Every kobo is tracked in real-time on your FUDS Merchant Dashboard with full transparency and zero surprise deductions.',
    },
    {
      q: 'How does the 111 Scheduled Ordering benefit my kitchen?',
      a: 'Unlike erratic on-demand apps where orders drop unannounced causing kitchen panic, FUDS customers can schedule their Breakfast, Lunch, and Dinner days in advance. You know your prep volume early in the morning, which helps you buy ingredients in bulk, reduce food waste, and prepare food with calmness.',
    },
    {
      q: 'Who handles the delivery riders and customer support?',
      a: 'FUDS handles 100% of delivery logistics and customer support! When an order is ready, a verified FUDS rider arrives on schedule with temperature-regulated carrier packs. We handle live customer tracking and any dispute resolution so you can focus entirely on cooking.',
    },
    {
      q: 'What equipment do I need to receive orders?',
      a: 'You do not need any special hardware! Any smartphone (Android/iOS), tablet, or web browser on a laptop can run the FUDS Merchant Portal to accept orders, manage your menu, and track payouts.',
    },
    {
      q: 'How fast can my store get activated and live?',
      a: 'Once you submit your application and menu details, our merchant operations team verifies your details and helps upload your menu catalog within 24 to 48 hours.',
    },
  ];

  return (
    <div className="vendors-page" style={{ paddingTop: '100px', background: 'var(--bg)', color: 'var(--text)' }}>
      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 1. HERO SECTION                                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="vendor-hero" style={{ position: 'relative', overflow: 'hidden', padding: '4rem 0 6rem 0' }}>
        {/* Background Decorative Radial Gradient */}
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(1100px, 100vw)',
            height: '600px',
            background: 'radial-gradient(circle, rgba(190, 242, 100, 0.28) 0%, rgba(255, 253, 242, 0) 70%)',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, boxSizing: 'border-box' }}>
          <div className="vendor-hero-grid">
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >

              {/* Main Headline */}
              <h1
                className="font-heading"
                style={{
                  fontSize: 'clamp(2.4rem, 5vw, 5.2rem)',
                  fontWeight: 900,
                  lineHeight: 0.98,
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.04em',
                  wordBreak: 'break-word',
                }}
              >
                Grow Your Food <br />
                <span style={{ color: 'var(--primary)' }}>& Grocery Business</span>
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  fontWeight: 500,
                  marginBottom: '2.5rem',
                  maxWidth: '540px',
                }}
              >
                Join hundreds of restaurants, cloud kitchens, bakeries, and grocery marts selling daily on FUDS. Tap into
                steady scheduled meal subscribers, multi-vendor cart batching, and next-day direct bank payouts.
              </p>

              {/* Dual Action Buttons (External Links) */}
              <div className="vendor-hero-actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <motion.a
                  href={VENDOR_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-primary"
                  style={{
                    padding: '1.1rem 2.2rem',
                    fontSize: '1.05rem',
                    borderRadius: '9999px',
                    boxShadow: '0 12px 28px rgba(6, 78, 59, 0.25)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxSizing: 'border-box',
                  }}
                >
                  Start Selling on FUDS <ArrowRight size={20} />
                </motion.a>

                <motion.a
                  href={VENDOR_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-white"
                  style={{
                    padding: '1.1rem 2rem',
                    fontSize: '1.05rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(0,0,0,0.08)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxSizing: 'border-box',
                  }}
                >
                  Vendor Log in <ArrowRight size={18} />
                </motion.a>
              </div>

              {/* Quick Perks Row */}
              <div
                className="vendor-hero-perks"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginTop: '2.5rem',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(0,0,0,0.08)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> ₦0 Upfront Setup
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Daily Bank Payouts
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" /> Dedicated Fleet
                </span>
              </div>
            </motion.div>

            {/* Right Hero Visual / Interactive Showcase Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="vendor-hero-mockup-wrapper"
              style={{ position: 'relative', width: '100%', boxSizing: 'border-box' }}
            >
              {/* Main Merchant Portal Card */}
              <div
                className="vendor-hero-mockup-card"
                style={{
                  background: '#ffffff',
                  borderRadius: 'clamp(1.75rem, 4vw, 2.5rem)',
                  padding: 'clamp(1.25rem, 3.5vw, 2rem)',
                  boxShadow: '0 30px 80px -15px rgba(0, 0, 0, 0.12)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  position: 'relative',
                  overflow: 'hidden',
                  boxSizing: 'border-box',
                  width: '100%',
                }}
              >
                {/* Header of mock card */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                    paddingBottom: '1rem',
                    borderBottom: '1px solid #f1f5f9',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '1rem',
                        background: 'var(--pastel-mint)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                      }}
                    >
                      <Store size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 800 }}>FUDS Merchant Live</h4>
                      <p style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>● Kitchen Online & Receiving</p>
                    </div>
                  </div>
                  <span
                    style={{
                      background: 'rgba(6, 78, 59, 0.08)',
                      color: 'var(--primary)',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.35rem 0.75rem',
                      borderRadius: '9999px',
                    }}
                  >
                    Today: ₦184,500
                  </span>
                </div>

                {/* Live Order Feeds in mockup */}
                <div style={{ display: 'grid', gap: '0.9rem' }}>
                  {/* Order 1 */}
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '1.25rem',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderLeft: '4px solid var(--primary)',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)' }}>#FUD-9241</span>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            background: '#dcfce7',
                            color: '#15803d',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                          }}
                        >
                          111 Scheduled
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>2x Smoky Party Jollof + Turkey</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Lunch Slot • Rider arriving in 8 min</p>
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)' }}>₦8,400</span>
                  </div>

                  {/* Order 2 */}
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '1.25rem',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderLeft: '4px solid #f59e0b',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#d97706' }}>#FUD-9242</span>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            background: '#fef3c7',
                            color: '#b45309',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                          }}
                        >
                          Grocery Batch
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>Weekly Farm Fresh Basket + Eggs</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Ready for Pickup • Bag #04</p>
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)' }}>₦24,200</span>
                  </div>

                  {/* Order 3 */}
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '1.25rem',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderLeft: '4px solid #3b82f6',
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2563eb' }}>#FUD-9243</span>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            background: '#dbeafe',
                            color: '#1d4ed8',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '9999px',
                          }}
                        >
                          Multi-Cart
                        </span>
                      </div>
                      <p style={{ fontSize: '0.9rem', fontWeight: 700 }}>Artisan Bread & Pastry Box</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Breakfast Dispatch • 1 Rider assigned</p>
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text)' }}>₦6,800</span>
                  </div>
                </div>

                {/* Bottom Mock Stats */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    marginTop: '1.5rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '1rem' }}>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>Completed</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 900, color: 'var(--primary)' }}>38</p>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '1rem' }}>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>Prepping</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#f59e0b' }}>7</p>
                  </div>
                  <div style={{ padding: '0.75rem', background: '#f1f5f9', borderRadius: '1rem' }}>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 700 }}>Rating</p>
                    <p style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a' }}>4.95 ★</p>
                  </div>
                </div>
              </div>

              {/* Floating Pill Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="vendor-badge-top"
                style={{
                  background: 'var(--pastel-saffron)',
                  borderRadius: '1.25rem',
                  padding: '0.65rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                }}
              >
                <TrendingUp size={16} color="var(--primary)" /> +145% Monthly Order Surge
              </motion.div>

              {/* Floating Pill Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="vendor-badge-bottom"
                style={{
                  background: 'var(--pastel-lilac)',
                  borderRadius: '1.25rem',
                  padding: '0.65rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                }}
              >
                <Banknote size={16} color="var(--primary)" /> 24hr Direct Bank Wire
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 2. STATS & PROOF BANNER                                             */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '3rem 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ boxSizing: 'border-box' }}>
          <div className="vendor-stats-grid">
            <div>
              <p className="font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)' }}>
                3,500+
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)' }}>Daily Meals & Grocery Deliveries</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)' }}>
                28 mins
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)' }}>Average Rider Arrival & Pickup</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)' }}>
                ₦0
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)' }}>Upfront Registration or Setup Fee</p>
            </div>
            <div>
              <p className="font-heading" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--primary)' }}>
                24 hrs
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-muted)' }}>Direct Bank Payout Reconciliation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 3. WHY PARTNER WITH FUDS (VALUE PROPOSITIONS)                       */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 5rem auto' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              The FUDS Edge
            </span>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.25rem' }}
            >
              Built to Solve Real Food & Merchant Headaches
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              Traditional food delivery apps leave kitchens guessing. FUDS introduces scheduled batching and multi-vendor
              carts that make your business predictable and profitable.
            </p>
          </div>

          <div className="vendor-features-grid">
            {/* Feature 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--pastel-saffron)',
                borderRadius: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                padding: 'clamp(1.75rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1.5rem',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#b45309',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <CalendarCheck size={28} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
                  Predictable 111 Scheduled Demand
                </h3>
                <p style={{ color: '#451a03', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                  Customers schedule their meals days ahead for Breakfast, Lunch, and Dinner slots. You know your prep volumes
                  at 8:00 AM, cutting ingredient waste and eliminating unexpected lunch rushes.
                </p>
              </div>
              <div style={{ marginTop: '2.5rem', fontWeight: 800, fontSize: '0.85rem', color: '#b45309' }}>
                ✓ Zero Food Spoilage
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--pastel-lilac)',
                borderRadius: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                padding: 'clamp(1.75rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1.5rem',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4338ca',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <Layers size={28} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
                  Multi-Vendor Cart Batching
                </h3>
                <p style={{ color: '#1e1b4b', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                  Customers can pair your specialty rice or pasta with fresh drinks or grocery items from nearby merchants in
                  one order. This expands your reach and increases average basket values by 35%.
                </p>
              </div>
              <div style={{ marginTop: '2.5rem', fontWeight: 800, fontSize: '0.85rem', color: '#4338ca' }}>
                ✓ 35% Higher Cart Value
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--pastel-sky)',
                borderRadius: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                padding: 'clamp(1.75rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1.5rem',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284c7',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <Bike size={28} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
                  Dedicated Rider Fleet Logistics
                </h3>
                <p style={{ color: '#082f49', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                  Never worry about riders not showing up or arguing with dispatchers. Our verified fleet arrives on schedule
                  with temperature-controlled delivery boxes to ensure your food reaches customers hot and pristine.
                </p>
              </div>
              <div style={{ marginTop: '2.5rem', fontWeight: 800, fontSize: '0.85rem', color: '#0284c7' }}>
                ✓ 100% Managed Fleet
              </div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              whileHover={{ y: -8 }}
              style={{
                background: 'var(--pastel-mint)',
                borderRadius: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                padding: 'clamp(1.75rem, 4vw, 3rem) clamp(1.25rem, 3.5vw, 2.25rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                boxSizing: 'border-box',
              }}
            >
              <div>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '1.5rem',
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '2rem',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                  }}
                >
                  <Banknote size={28} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.15 }}>
                  Daily Direct Bank Payouts
                </h3>
                <p style={{ color: '#064e3b', fontSize: '1rem', lineHeight: 1.6, fontWeight: 500 }}>
                  Cash flow is the lifeblood of food operations. All completed sales are audited and wired straight to your
                  registered Nigerian commercial or microfinance bank account with detailed reports.
                </p>
              </div>
              <div style={{ marginTop: '2.5rem', fontWeight: 800, fontSize: '0.85rem', color: 'var(--primary)' }}>
                ✓ No Payment Delays
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 4. INTERACTIVE REVENUE & GROWTH CALCULATOR                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)', overflow: 'hidden' }}>
        <div className="container" style={{ boxSizing: 'border-box' }}>
          <div className="vendor-calculator-card">
            {/* Left Calculator Controls */}
            <div style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}>
              <span
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-block',
                  marginBottom: '1.25rem',
                }}
              >
                PROFIT & REVENUE CALCULATOR
              </span>
              <h2 className="font-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', wordBreak: 'break-word' }}>
                See How Much More Your Kitchen Can Earn
              </h2>
              <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', opacity: 0.85, lineHeight: 1.6, marginBottom: '2rem' }}>
                Drag the slider to adjust your daily meal preparation capacity. Discover your estimated gross monthly revenue
                fueled by FUDS subscribers.
              </p>

              {/* Slider Box */}
              <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '1.75rem', padding: 'clamp(1.2rem, 3.5vw, 2rem)', boxSizing: 'border-box', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>Estimated Daily Orders</span>
                  <span
                    style={{
                      fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                      fontWeight: 900,
                      color: 'var(--pastel-saffron)',
                      fontFamily: 'Outfit, sans-serif',
                    }}
                  >
                    {dailyOrders} orders / day
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={dailyOrders}
                  onChange={(e) => setDailyOrders(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '10px',
                    accentColor: '#bef264',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    boxSizing: 'border-box',
                  }}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', opacity: 0.7, marginTop: '0.75rem', gap: '0.25rem' }}>
                  <span>10 (Starter)</span>
                  <span>75 (Busy Spot)</span>
                  <span>150+ (Scale)</span>
                </div>
              </div>
            </div>

            {/* Right Projected Metrics */}
            <div
              style={{
                background: '#ffffff',
                color: 'var(--text)',
                borderRadius: '2rem',
                padding: 'clamp(1.5rem, 4vw, 2.75rem)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                textAlign: 'center',
                width: '100%',
                boxSizing: 'border-box',
                minWidth: 0,
              }}
            >
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Projected Gross Monthly Revenue
              </p>
              <div
                className="font-heading"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  margin: '0.85rem 0',
                  letterSpacing: '-0.03em',
                  wordBreak: 'break-all',
                }}
              >
                ₦{monthlyRevenue.toLocaleString()}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  padding: '1.25rem 0',
                  margin: '1.25rem 0',
                  borderTop: '1px solid #f1f5f9',
                  borderBottom: '1px solid #f1f5f9',
                  textAlign: 'left',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Monthly Orders</p>
                  <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 800 }}>{(dailyOrders * 30).toLocaleString()}</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Avg Basket Size</p>
                  <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: 800 }}>₦{avgOrderValue.toLocaleString()}</p>
                </div>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                *Based on real FUDS network basket averages across Lagos and major delivery zones.
              </p>

              <a
                href={VENDOR_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '1rem',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  whiteSpace: 'normal',
                  textAlign: 'center',
                }}
              >
                Claim Your Store Spot Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 5. CATEGORIES WE SUPPORT                                            */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Tailored For Your Food Craft
            </span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.05 }}>
              Built For Every Kind of Food Business
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="vendor-category-tabs">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeCategoryTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryTab(cat.id)}
                  className="vendor-category-tab-btn"
                  style={{
                    background: isActive ? 'var(--primary)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text)',
                    boxShadow: isActive ? '0 10px 25px rgba(6, 78, 59, 0.2)' : '0 4px 15px rgba(0,0,0,0.03)',
                  }}
                >
                  <IconComponent size={18} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Card */}
          {categories
            .filter((c) => c.id === activeCategoryTab)
            .map((cat) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="vendor-category-card"
              >
                <div style={{ minWidth: 0, width: '100%', boxSizing: 'border-box' }}>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.4rem 1rem',
                      borderRadius: '9999px',
                      background: 'rgba(6, 78, 59, 0.08)',
                      color: 'var(--primary)',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      marginBottom: '1.5rem',
                    }}
                  >
                    <Award size={16} /> {cat.stats}
                  </div>
                  <h3 className="font-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.1, wordBreak: 'break-word' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                    {cat.desc}
                  </p>
                  <div
                    style={{
                      padding: '1.25rem 1.5rem',
                      background: 'var(--pastel-saffron)',
                      borderRadius: '1.5rem',
                      marginBottom: '2rem',
                      fontWeight: 700,
                      color: '#78350f',
                      fontSize: '0.95rem',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  >
                    💡 {cat.highlight}
                  </div>
                  <a
                    href={VENDOR_SIGNUP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      padding: '0.95rem 1.6rem',
                      textDecoration: 'none',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      whiteSpace: 'normal',
                      textAlign: 'center',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      lineHeight: 1.35,
                    }}
                  >
                    <span>Register as {cat.title}</span>
                    <ArrowRight size={18} style={{ flexShrink: 0 }} />
                  </a>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    style={{
                      maxWidth: 'min(380px, 100%)',
                      width: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.12))',
                    }}
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 6. HOW IT WORKS (4 STEPS)                                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 5rem auto' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Easy Activation
            </span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.05 }}>
              Start Selling in 4 Simple Steps
            </h2>
          </div>

          <div className="vendor-steps-grid">
            {[
              {
                num: '01',
                title: 'Sign Up Online',
                desc: 'Fill out our quick registration with your brand name, kitchen location, and food specialization.',
              },
              {
                num: '02',
                title: 'Menu Setup',
                desc: 'Our merchant onboarding squad helps format your menu items, photos, and meal schedule slots.',
              },
              {
                num: '03',
                title: 'Receive Orders',
                desc: 'Accept live and pre-scheduled orders with audio alerts on your phone, tablet, or laptop.',
              },
              {
                num: '04',
                title: 'Rider Pickup & Payout',
                desc: 'A verified FUDS rider arrives on time. Earnings hit your commercial bank account next business day.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  borderRadius: 'clamp(1.5rem, 3vw, 2rem)',
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem) clamp(1.25rem, 3vw, 2rem)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  className="font-heading"
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    opacity: 0.25,
                    marginBottom: '1rem',
                  }}
                >
                  {step.num}
                </div>
                <h4 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, fontWeight: 500 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 7. REAL VENDOR TESTIMONIALS                                         */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Merchant Success Stories
            </span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, lineHeight: 1.05 }}>
              Loved by Food Creators Everywhere
            </h2>
          </div>

          <div className="vendor-testimonials-grid">
            {[
              {
                quote:
                  'FUDS completely smoothed out our kitchen operations. The 111 scheduler means we cook 80+ lunch subscriptions early every morning with zero panic. It transformed our monthly revenue.',
                author: 'Mama Titi',
                role: 'Head Chef, Mama Titi’s Kitchen (Surulere)',
                rating: '5.0 ★★★★★',
              },
              {
                quote:
                  'We deliver weekly grocery baskets to 200+ families every single weekend on FUDS. The recurring subscription model gives our farm store a rock-solid income we can plan around.',
                author: 'Chidinma O.',
                role: 'Managing Director, Lekki Fresh Farms',
                rating: '5.0 ★★★★★',
              },
              {
                quote:
                  'Zero upfront sign-up fees and fast payouts. Plus, the multi-vendor batching means customers ordering from nearby spots also add our bread to their carts. Highly recommended.',
                author: 'Tunde B.',
                role: 'Founder, Golden Crust Bakery (Ikoyi)',
                rating: '5.0 ★★★★★',
              },
            ].map((t, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                }}
              >
                <div>
                  <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 800, marginBottom: '1rem' }}>
                    {t.rating}
                  </div>
                  <p style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'var(--text)', fontWeight: 500, fontStyle: 'italic', marginBottom: '2rem' }}>
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <h5 style={{ fontSize: '1rem', fontWeight: 800 }}>{t.author}</h5>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (ACCORDION)                           */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: '#ffffff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--primary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Have Questions?
            </span>
            <h2 className="font-heading" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1.05 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'grid', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '1.5rem',
                    border: '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: 'clamp(1.1rem, 3vw, 1.5rem) clamp(1.2rem, 3.5vw, 2rem)',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                      fontWeight: 800,
                      color: 'var(--text)',
                      cursor: 'pointer',
                      gap: '0.75rem',
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{ flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          style={{
                            padding: '0 clamp(1.2rem, 3.5vw, 2rem) clamp(1.1rem, 3vw, 1.75rem) clamp(1.2rem, 3.5vw, 2rem)',
                            color: 'var(--text-muted)',
                            fontSize: '0.98rem',
                            lineHeight: 1.6,
                            fontWeight: 500,
                          }}
                        >
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────── */}
      {/* 9. BOTTOM CALL TO ACTION BANNER                                     */}
      {/* ─────────────────────────────────────────────────────────────────── */}
      <section style={{ padding: 'clamp(3.5rem, 6vw, 6rem) 0', background: 'var(--bg)' }}>
        <div className="container">
          <div className="vendor-bottom-banner">
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1.25rem',
                borderRadius: '9999px',
                background: '#ffffff',
                color: 'var(--primary)',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginBottom: '1.5rem',
              }}
            >
              <Sparkles size={16} /> FREE ONBOARDING ASSISTANCE
            </span>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: 1.05, marginBottom: '1.5rem', wordBreak: 'break-word' }}
            >
              Ready to Expand Your Food Brand?
            </h2>
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                color: '#064e3b',
                maxWidth: '600px',
                margin: '0 auto 2.5rem auto',
                lineHeight: 1.6,
                fontWeight: 600,
              }}
            >
              Join the network of food creators, cloud kitchens, and groceries growing on FUDS. We are ready when
              you are.
            </p>

            <div className="vendor-bottom-actions">
              <motion.a
                href={VENDOR_SIGNUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary"
                style={{ padding: '1.1rem 2.2rem', fontSize: '1.05rem', textDecoration: 'none', boxSizing: 'border-box' }}
              >
                Register Your Kitchen Now <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href={VENDOR_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-white"
                style={{ padding: '1.1rem 2rem', fontSize: '1.05rem', textDecoration: 'none', boxSizing: 'border-box' }}
              >
                Existing Vendor Login
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-white"
                onClick={() => onNavigate && onNavigate('home')}
                style={{ padding: '1.1rem 2rem', fontSize: '1.05rem', border: '1px solid rgba(0,0,0,0.08)', boxSizing: 'border-box' }}
              >
                Back to Home
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Stylesheet for Vendors Page */}
      <style>{`
        /* Hero Grid */
        .vendor-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Mockup wrapper and card */
        .vendor-hero-mockup-wrapper {
          position: relative;
          max-width: 520px;
          margin: 0 auto;
        }

        .vendor-badge-top {
          position: absolute;
          top: -15px;
          right: -15px;
          z-index: 2;
        }

        .vendor-badge-bottom {
          position: absolute;
          bottom: -15px;
          left: -20px;
          z-index: 2;
        }

        /* Section 2: Stats Grid */
        .vendor-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        /* Section 3: Features Grid */
        .vendor-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        /* Section 4: Calculator Card */
        .vendor-calculator-card {
          background: linear-gradient(135deg, #064E3B 0%, #043527 100%);
          border-radius: clamp(1.75rem, 4vw, 3rem);
          padding: clamp(1.75rem, 5vw, 4.5rem);
          color: #ffffff;
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(2rem, 4vw, 3.5rem);
          align-items: center;
          box-sizing: border-box;
          width: 100%;
        }

        /* Section 5: Category Tabs and Card */
        .vendor-category-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin-bottom: 3.5rem;
        }

        .vendor-category-tab-btn {
          padding: 0.85rem 1.6rem;
          border-radius: 9999px;
          border: none;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }

        .vendor-category-card {
          background: #ffffff;
          border-radius: clamp(1.75rem, 4vw, 3rem);
          padding: clamp(1.75rem, 5vw, 4rem);
          box-shadow: 0 20px 60px rgba(0,0,0,0.06);
          border: 1px solid rgba(0,0,0,0.05);
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: center;
          box-sizing: border-box;
          width: 100%;
        }

        /* Section 6: Steps Grid */
        .vendor-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        /* Section 7: Testimonials Grid */
        .vendor-testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        /* Section 9: Bottom Banner */
        .vendor-bottom-banner {
          background: var(--pastel-mint);
          border-radius: clamp(2rem, 4vw, 4rem);
          padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 4vw, 3rem);
          text-align: center;
          border: 2px solid rgba(6, 78, 59, 0.08);
          box-shadow: 0 30px 80px rgba(6, 78, 59, 0.08);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .vendor-bottom-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        /* Tablet Breakpoint (max-width: 991px) */
        @media (max-width: 991px) {
          .vendor-hero-grid {
            grid-template-columns: 1fr;
            gap: 3.5rem;
            text-align: center;
          }

          .vendor-hero-actions {
            justify-content: center;
          }

          .vendor-hero-perks {
            justify-content: center;
          }

          .vendor-badge-top {
            position: static !important;
            margin: 0 auto 1rem auto !important;
            width: fit-content !important;
          }

          .vendor-badge-bottom {
            position: static !important;
            margin: 1rem auto 0 auto !important;
            width: fit-content !important;
          }

          .vendor-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
          }

          .vendor-features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .vendor-calculator-card {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: clamp(1.5rem, 4vw, 2.75rem);
          }

          .vendor-category-card {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding: clamp(1.5rem, 4vw, 2.75rem);
          }

          .vendor-steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .vendor-testimonials-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Mobile Breakpoint (max-width: 640px) */
        @media (max-width: 640px) {
          .vendor-hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .vendor-hero-actions .btn {
            width: 100%;
            justify-content: center;
          }

          .vendor-category-tabs {
            gap: 0.5rem;
            margin-bottom: 2rem;
          }

          .vendor-category-tab-btn {
            padding: 0.65rem 1.1rem;
            font-size: 0.88rem;
          }

          .vendor-bottom-actions {
            flex-direction: column;
            width: 100%;
          }

          .vendor-bottom-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }

        /* Small Mobile Breakpoint (max-width: 480px) */
        @media (max-width: 480px) {
          .vendor-stats-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .vendor-steps-grid {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .vendor-category-tab-btn {
            padding: 0.55rem 0.9rem;
            font-size: 0.82rem;
          }
        }
      `}</style>
    </div>
  );
};

export default VendorsPage;
