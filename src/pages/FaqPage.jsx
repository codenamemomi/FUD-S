import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  UtensilsCrossed,
  Store,
  Bike,
  CreditCard,
  Clock
} from 'lucide-react';

const FAQ_DATA = [
  // Customers & Ordering
  {
    category: 'ordering',
    q: 'How does meal scheduling work on FUDS?',
    a: 'With FUDS, you don’t have to rush to place orders every afternoon. You can pre-plan your breakfast, lunch, or dinner up to 7 days in advance. Select the vendor, customize your dish, pick your exact delivery window, and our automated logistics engine assigns a rider right on time so your meal arrives piping hot.',
  },
  {
    category: 'ordering',
    q: 'Can I order from multiple vendors in a single checkout?',
    a: 'Yes! FUDS allows Multi-Vendor Group Orders. You can add items from Mama Cass, a smoothie bar, and a local bakery into the same cart. Our system automatically batches the orders and synchronizes rider dispatch so your items are delivered seamlessly.',
  },
  {
    category: 'ordering',
    q: 'What happens if I need to cancel or change my scheduled meal?',
    a: 'You can modify or cancel any scheduled meal without penalty up to 45 minutes before the restaurant starts food preparation. Simply open the app, head to "Orders" -> "Scheduled", and click "Reschedule" or "Cancel".',
  },
  {
    category: 'ordering',
    q: 'How do I track my delivery in real-time?',
    a: 'Once your order is confirmed, you get live status updates from the kitchen preparation stage through rider pickup and transit. You can track the rider’s GPS location on the interactive map until they reach your doorstep.',
  },

  // Vendors & Menus
  {
    category: 'vendors',
    q: 'How do I register my restaurant or food business on FUDS?',
    a: 'You can click on "Vendors" in our top menu or visit our vendor onboarding portal. Once you submit your business registration, menu list, and food safety credentials, our merchant success team will verify and activate your store within 24 to 48 hours.',
  },
  {
    category: 'vendors',
    q: 'When and how do vendors get paid for their sales?',
    a: 'FUDS processes vendor settlements directly to your registered Nigerian commercial bank account on a transparent cycle (Daily, Weekly, or Bi-weekly according to your preference). All transactions and commission breakdowns are visible live in your Merchant Dashboard.',
  },
  {
    category: 'vendors',
    q: 'What are the packaging standards for FUDS deliveries?',
    a: 'We provide specialized spill-proof, tamper-evident security tape and insulated packaging guidelines to ensure soups, stews, beverages, and warm meals maintain ideal temperature and presentation throughout transit.',
  },

  // Delivery & Fleet
  {
    category: 'riders',
    q: 'How are delivery fees calculated?',
    a: 'Delivery fees are dynamically calculated based on the actual road distance between the vendor kitchen and your delivery dropoff point, as well as traffic intensity. We maintain transparent pricing with zero surprise surge fees.',
  },
  {
    category: 'riders',
    q: 'What areas and cities does FUDS currently deliver to?',
    a: 'We operate active delivery zones across major hubs in Lagos (Lekki, Victoria Island, Ikoyi, Ikeja, Yaba, Surulere), Abuja (Wuse, Maitama, Garki, Jabi), and Port Harcourt, with fast expansion underway into Ibadan and Enugu.',
  },
  {
    category: 'riders',
    q: 'How do riders keep food hot and beverages chilled?',
    a: 'All verified FUDS riders are equipped with dual-compartment thermal delivery boxes that isolate cold drinks from steaming hot meals, ensuring freshness from kitchen counter to your dining table.',
  },

  // Payments & Pricing
  {
    category: 'payments',
    q: 'What payment methods are supported on FUDS?',
    a: 'We accept all Nigerian debit & credit cards (Mastercard, Visa, Verve), direct Bank Transfers via dedicated virtual accounts, USSD, and Pay with FUDS Wallet for one-click checkouts.',
  },
  {
    category: 'payments',
    q: 'How do refunds work if an item is unavailable or an order is cancelled?',
    a: 'If a vendor runs out of an item or an order is cancelled, funds are credited immediately to your FUDS in-app wallet so you can re-order without delay, or reversed back to your original bank card within 1-3 business days upon request.',
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions', icon: <HelpCircle size={15} /> },
  { id: 'ordering', label: 'Customers & Orders', icon: <UtensilsCrossed size={15} /> },
  { id: 'vendors', label: 'Vendors & Stores', icon: <Store size={15} /> },
  { id: 'riders', label: 'Delivery & Fleet', icon: <Bike size={15} /> },
  { id: 'payments', label: 'Payments & Refunds', icon: <CreditCard size={15} /> },
];

const FaqPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState([0]);

  const toggleIndex = (index) => {
    setOpenIndices((prev) => 
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.q.toLowerCase().includes(query) || 
        item.a.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="faq-page-wrapper" style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', paddingTop: '6.5rem', overflowX: 'hidden' }}>
      {/* Header / Hero */}
      <section style={{ padding: '2.5rem 0 1.5rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '840px', boxSizing: 'border-box' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(6, 78, 59, 0.08)',
                color: 'var(--primary)',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              <Sparkles size={13} /> Help & Answers
            </div>
            <h1
              className="font-heading"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: 'var(--text)',
                marginBottom: '1rem',
                wordBreak: 'break-word',
              }}
            >
              Frequently Asked <br />
              <span style={{ color: 'var(--primary)' }}>Questions</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: '640px',
                margin: '0 auto 2rem',
                padding: '0 0.5rem',
              }}
            >
              Everything you need to know about scheduling meals, delivery timelines, vendor onboarding, and payments on FUDS.
            </p>

            {/* Live Search Bar */}
            <div
              style={{
                position: 'relative',
                maxWidth: '580px',
                width: '100%',
                margin: '0 auto',
                boxSizing: 'border-box',
              }}
            >
              <Search
                size={18}
                style={{
                  position: 'absolute',
                  left: '1.25rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search questions (e.g. scheduling, refund)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.95rem 2.75rem 0.95rem 3rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  color: 'var(--text)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0,0,0,0.06)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '22px',
                    height: '22px',
                    cursor: 'pointer',
                    fontSize: '11px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text)',
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section style={{ padding: '0.5rem 0 1.5rem' }}>
        <div className="container" style={{ maxWidth: '960px', boxSizing: 'border-box' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.55rem 1rem',
                    borderRadius: '9999px',
                    fontSize: 'clamp(0.8rem, 2vw, 0.88rem)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    border: isActive ? '1px solid var(--primary)' : '1px solid rgba(0,0,0,0.08)',
                    background: isActive ? 'var(--primary)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--text)',
                    boxShadow: isActive ? '0 8px 20px rgba(6, 78, 59, 0.2)' : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat.icon}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section style={{ padding: '1.5rem 0 4rem' }}>
        <div className="container" style={{ maxWidth: '840px', boxSizing: 'border-box' }}>
          {filteredFaqs.length === 0 ? (
            <div
              style={{
                background: '#ffffff',
                padding: 'clamp(2rem, 5vw, 3rem) 1.5rem',
                borderRadius: '1.75rem',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.06)',
                boxSizing: 'border-box',
              }}
            >
              <HelpCircle size={40} color="var(--text-muted)" style={{ margin: '0 auto 0.75rem', opacity: 0.6 }} />
              <h3 className="font-heading" style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.4rem' }}>
                No matching answers found
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                We couldn’t find an answer matching "{searchQuery}". You can ask our team directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ padding: '0.7rem 1.5rem', borderRadius: '9999px', fontSize: '0.88rem' }}
              >
                Contact Support Team
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    style={{
                      background: '#ffffff',
                      borderRadius: '1.25rem',
                      border: isOpen ? '1px solid rgba(6, 78, 59, 0.2)' : '1px solid rgba(0,0,0,0.06)',
                      boxShadow: isOpen ? '0 10px 25px rgba(0,0,0,0.04)' : '0 3px 12px rgba(0,0,0,0.02)',
                      overflow: 'hidden',
                      boxSizing: 'border-box',
                      minWidth: 0,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleIndex(idx)}
                      style={{
                        width: '100%',
                        padding: 'clamp(1rem, 3vw, 1.35rem) clamp(1rem, 3vw, 1.5rem)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '0.75rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        boxSizing: 'border-box',
                      }}
                    >
                      <span
                        className="font-heading"
                        style={{
                          fontSize: 'clamp(0.95rem, 2.5vw, 1.12rem)',
                          fontWeight: 800,
                          color: isOpen ? 'var(--primary)' : 'var(--text)',
                          lineHeight: 1.35,
                          wordBreak: 'break-word',
                        }}
                      >
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          background: isOpen ? 'rgba(6, 78, 59, 0.08)' : 'rgba(0,0,0,0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: isOpen ? 'var(--primary)' : 'var(--text-muted)',
                        }}
                      >
                        <ChevronDown size={16} strokeWidth={2.5} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div
                            style={{
                              padding: '0 clamp(1rem, 3vw, 1.5rem) 1.25rem',
                              color: 'var(--text-muted)',
                              fontSize: 'clamp(0.88rem, 2vw, 0.95rem)',
                              lineHeight: 1.65,
                              fontWeight: 500,
                              borderTop: '1px solid rgba(0,0,0,0.04)',
                              marginTop: '0.2rem',
                              paddingTop: '0.85rem',
                              wordBreak: 'break-word',
                            }}
                          >
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Bottom Still Have Questions Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="faq-bottom-banner"
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--primary)',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginBottom: '0.35rem',
                }}
              >
                <Clock size={13} /> 24/7 Priority Support
              </span>
              <h3 className="font-heading" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.45rem)', fontWeight: 900, color: 'var(--text)', marginBottom: '0.2rem' }}>
                Still have an unanswered question?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontWeight: 500 }}>
                Our customer and merchant success advocates are live around the clock.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onNavigate) onNavigate('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn btn-primary"
              style={{
                padding: '0.8rem 1.6rem',
                borderRadius: '9999px',
                fontWeight: 800,
                fontSize: '0.9rem',
                gap: '0.45rem',
                flexShrink: 0,
                boxSizing: 'border-box',
              }}
            >
              <MessageSquare size={16} /> Talk to Support <ArrowRight size={15} />
            </button>
          </motion.div>
        </div>
      </section>

      <style>{`
        .faq-bottom-banner {
          margin-top: 3.5rem;
          padding: clamp(1.5rem, 4vw, 2.25rem);
          border-radius: 2rem;
          background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
          border: 1px solid rgba(6, 78, 59, 0.12);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          align-items: flex-start;
          box-sizing: border-box;
          width: 100%;
        }
        @media (min-width: 640px) {
          .faq-bottom-banner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FaqPage;
