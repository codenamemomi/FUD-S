import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Share2, 
  Check, 
  X,
  BookOpen,
  Send,
  Flame
} from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: 'How We Solved The "Lunch Rush" Dilemma: Inside FUDS Automated Meal Scheduling',
    category: 'Product Updates',
    date: 'Nov 12, 2026',
    readTime: '4 min read',
    author: 'Tobi Alabi',
    role: 'Head of Product',
    tag: 'Engineering',
    featured: true,
    excerpt: 'Ordering at 1:00 PM every day means long kitchen wait times and cold food in Lagos traffic. Here is how our 7-day scheduled dispatch engine eliminated the midday chaos for over 15,000 office workers.',
    content: `For most busy professionals in Lagos, Abuja, and Port Harcourt, lunchtime is an unintentional source of stress. You finish a meeting at 12:45 PM, realize you haven’t eaten, open a delivery app, and get hit with a 65-minute preparation estimate. By the time your meal arrives, your next meeting has already started.

When building FUDS, we recognized that people know what they crave ahead of time. Why should ordering food always be reactive?

### The Mechanics of Scheduled Dispatches

Our engineering team designed an automated meal scheduling algorithm that looks at vendor prep times, historical kitchen bottlenecks, and predictive road congestion:

1. **Advance Kitchen Slotting:** Restaurants receive meal schedule notifications 90 minutes before your requested delivery window, allowing chefs to batch-prep ingredients without overwhelming the regular walk-in kitchen queue.
2. **Dynamic Rider Pairing:** Rather than hailing an on-demand rider the moment an order leaves the grill, our dispatch system pre-assigns the closest active fleet member 15 minutes before the food leaves the pass.
3. **Guaranteed Delivery Windows:** Orders scheduled for 1:00 PM arrive between 12:55 PM and 1:05 PM, 99.2% of the time.

By smoothing out kitchen demand across wider preparation curves, vendors experience higher kitchen efficiency, riders avoid idling outside restaurants, and customers get steaming hot meals exactly when their calendar says it’s lunchtime.`,
  },
  {
    id: 2,
    title: 'Vendor Spotlight: Mama Cass & The Secret Behind Iconic Jollof Consistency',
    category: 'Vendor Spotlights',
    date: 'Nov 08, 2026',
    readTime: '6 min read',
    author: 'Zainab Mohammed',
    role: 'Merchant Success Lead',
    tag: 'Culture',
    featured: false,
    excerpt: 'Behind the fire, the plum tomatoes, and the firewood smoke that has defined generations of Nigerian comfort dining, now delivered in under 28 minutes.',
    content: `Few things unite Nigerians quite like authentic, smoky firewood Jollof rice. For decades, Mama Cass has been an indelible staple on dinner tables and celebration plates. But keeping that same distinctive aroma and spice balance consistent across hundreds of deliveries every afternoon is no small feat.

"When you send food into a delivery box, packaging becomes an extension of the kitchen," explains Mrs. Yemisi, Executive Chef at Mama Cass Ikeja. "We worked directly with the FUDS logistics team to develop breathable yet thermal-sealed containers so that steam doesn't make the rice soggy during the trip."

Today, Mama Cass delivers thousands of meals weekly through FUDS, leveraging our merchant analytics dashboard to forecast weekend meat prep and peak yam porridge demand.`,
  },
  {
    id: 3,
    title: 'Zero-Spill Logistics: Engineering Thermal Packaging for Egusi and Pepper Soup',
    category: 'Logistics & Tech',
    date: 'Oct 29, 2026',
    readTime: '5 min read',
    author: 'Emeka Nwosu',
    role: 'Logistics Operations',
    tag: 'Fleet',
    featured: false,
    excerpt: 'Nigerian soups are rich in palm oil and broths that despise rough roads. Here is how our dual-compartment box architecture keeps your soups intact and hot.',
    content: `If you ask any Nigerian what their biggest fear is with food delivery, the answer is unanimous: opening the delivery bag to find Egusi soup or Ofe Owerri spilled all over the plastic lining.

Traditional delivery apps use generic delivery pouches that tilt when a motorcycle leans into a turn or maneuvers around potholes. We knew we had to rethink the hardware.

### The Dual-Chamber Thermal Box

FUDS partnered with local industrial designers to build custom rigid-body carrier boxes with three core innovations:
- **Gyroscopic Base Plate:** Keeps soup containers level even when the bike banks around sharp corners.
- **Micro-Vent Membrane:** Releases excess steam without letting oil droplets or broth escape, preventing lid blowouts.
- **Cold-Hot Isolation:** Keeps cold freshly squeezed juices at 4°C while adjacent grilled meats remain above 68°C.`,
  },
  {
    id: 4,
    title: 'The Ultimate Lagos Suya & Shawarma Guide: 8 Hidden Gems You Can Order on FUDS',
    category: 'Food & Culture',
    date: 'Oct 19, 2026',
    readTime: '7 min read',
    author: 'David Ogundipe',
    role: 'Food Editor',
    tag: 'Guides',
    featured: false,
    excerpt: 'From Glover Court’s tender beef skewers to Yaba’s legendary midnight shawarma spots, here are the spots true foodies swear by.',
    content: `Evening in Lagos isn’t complete without the hypnotic sizzle of beef skewers on charcoal grills, the pungent fragrance of yaji spice in the air, and raw onions sliced with rhythmic precision.

We embarked on a 3-week culinary expedition across the mainland and island to curate the quintessential Suya masterclasses now available exclusively on the FUDS app:

1. **Glover Court Suya (Ikoyi):** The gold standard of melt-in-your-mouth beef fillet, wrapped tightly in old-school greaseproof paper.
2. **University of Suya (Ikeja):** Noted for its intense, slow-smoked ram suya and kidney skewers that pack a fiery chili kick.
3. **Bourdillon Wrap Co.:** Famous for slow-roasted chicken shawarma paired with our special garlic cream sauce.`,
  },
  {
    id: 5,
    title: 'Introducing Multi-Vendor Group Orders: Split The Bill, Share The Feast',
    category: 'Product Updates',
    date: 'Oct 05, 2026',
    readTime: '3 min read',
    author: 'Tobi Alabi',
    role: 'Head of Product',
    tag: 'Features',
    featured: false,
    excerpt: 'One person wants amala, another wants a gourmet burger, and someone just wants boba tea. Now you can order from different restaurants in one seamless cart.',
    content: `Office lunch ordering usually starts with a debate: "Where are we ordering from today?" One person is on a low-carb diet, someone wants swallow and afang soup, and another person wants pasta. Usually, everyone compromises on something mediocre.

With FUDS Multi-Vendor Group Cravings, you don't have to compromise:

- **Shareable Cart Link:** Start a cart and send a WhatsApp link to your colleagues or family.
- **Independent Choices:** Everyone selects their favorite food from different restaurants.
- **Individual Payment Splits:** Each participant pays for their exact share via card, USSD, or wallet.
- **Synchronized Delivery:** Our logistics engine synchronizes dispatch so all meals arrive together.`,
  },
  {
    id: 6,
    title: 'Empowering Food Entrepreneurs: How Micro-Kitchens Flourish on FUDS',
    category: 'Vendor Spotlights',
    date: 'Sep 24, 2026',
    readTime: '5 min read',
    author: 'Zainab Mohammed',
    role: 'Merchant Success Lead',
    tag: 'Stories',
    featured: false,
    excerpt: 'How home chefs and cloud kitchens are turning passion recipes into thriving food businesses with zero storefront overhead.',
    content: `Starting a traditional brick-and-mortar restaurant in Lagos requires millions in commercial rent, power generators, interior decor, and council permits. But culinary talent doesn't require a physical dining hall.

Through FUDS Cloud Merchant program, talented chefs operating from hygiene-certified commercial kitchens can launch digital menus directly to hundreds of thousands of hungry diners.

Meet Chef Kemi, who went from baking artisanal meat pies in her home kitchen to fulfilling 300 orders daily through scheduled corporate breakfast dropoffs on FUDS.`,
  },
];

const CATEGORIES = ['All Stories', 'Product Updates', 'Vendor Spotlights', 'Logistics & Tech', 'Food & Culture'];

const BlogPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Stories');
  const [activeArticle, setActiveArticle] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredArticles = selectedCategory === 'All Stories'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === selectedCategory);

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];

  const handleShare = (article) => {
    const shareText = `${article?.title || 'FUDS Journal'} - Read on FUDS: ${window.location.href}`;
    navigator.clipboard?.writeText(shareText);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="blog-page-wrapper" style={{ backgroundColor: 'var(--bg)', minHeight: '100vh', paddingTop: '6.5rem', overflowX: 'hidden' }}>
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
              <BookOpen size={13} /> The FUDS Journal
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
              Stories, Food Culture & <br />
              <span style={{ color: 'var(--primary)' }}>Product Dispatches</span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                fontWeight: 500,
                maxWidth: '640px',
                margin: '0 auto',
                padding: '0 0.5rem',
              }}
            >
              Behind-the-scenes stories of Nigerian culinary craft, logistics engineering, and what it takes to deliver cravings on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Pills */}
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
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.55rem 1.1rem',
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
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Story Banner (when All Stories selected) */}
      {selectedCategory === 'All Stories' && (
        <section style={{ padding: '1rem 0 2.5rem' }}>
          <div className="container" style={{ boxSizing: 'border-box' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveArticle(featuredArticle)}
              className="blog-featured-banner"
            >
              <div style={{ zIndex: 2, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: '#bef264',
                      color: '#064E3B',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <Flame size={13} /> Featured Dispatch
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </span>
                </div>

                <h2
                  className="font-heading"
                  style={{
                    fontSize: 'clamp(1.4rem, 3.5vw, 2.3rem)',
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: '0.85rem',
                    color: '#ffffff',
                    wordBreak: 'break-word',
                  }}
                >
                  {featuredArticle.title}
                </h2>

                <p
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.02rem)',
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.85)',
                    fontWeight: 500,
                    marginBottom: '1.75rem',
                    maxWidth: '580px',
                  }}
                >
                  {featuredArticle.excerpt}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.85rem',
                        flexShrink: 0,
                      }}
                    >
                      {featuredArticle.author.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 800 }}>{featuredArticle.author}</div>
                      <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>{featuredArticle.role}</div>
                    </div>
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      background: '#bef264',
                      color: '#064E3B',
                      padding: '0.65rem 1.35rem',
                      borderRadius: '9999px',
                      fontSize: '0.88rem',
                      fontWeight: 800,
                    }}
                  >
                    Read Article <ArrowRight size={15} />
                  </span>
                </div>
              </div>

              {/* Decorative graphic block */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '1.75rem',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                }}
              >
                <div style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', fontWeight: 900, color: '#bef264', lineHeight: 1 }}>
                  99.2%
                </div>
                <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 800, lineHeight: 1.3 }}>
                  On-Time Delivery Rate for Scheduled Lunch Windows
                </div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                  Over 15,000 corporate workers across Lagos Island and Ikeja received meals within a 10-minute accuracy window last quarter.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section style={{ padding: '1.5rem 0 4rem' }}>
        <div className="container" style={{ boxSizing: 'border-box' }}>
          <div className="blog-articles-grid">
            {filteredArticles.map((art, idx) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveArticle(art)}
                className="blog-article-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem', gap: '0.5rem' }}>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        padding: '0.25rem 0.7rem',
                        borderRadius: '9999px',
                        background: 'rgba(6, 78, 59, 0.08)',
                        color: 'var(--primary)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {art.category}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, whiteSpace: 'nowrap' }}>
                      {art.readTime}
                    </span>
                  </div>

                  <h3
                    className="font-heading"
                    style={{
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                      fontWeight: 800,
                      color: 'var(--text)',
                      lineHeight: 1.35,
                      marginBottom: '0.65rem',
                      wordBreak: 'break-word',
                    }}
                  >
                    {art.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    {art.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: '1px solid rgba(0,0,0,0.06)',
                    paddingTop: '1rem',
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        background: 'rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 800,
                        fontSize: '0.75rem',
                        color: 'var(--text)',
                        flexShrink: 0,
                      }}
                    >
                      {art.author.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text)' }}>
                        {art.author}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {art.date}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: 'var(--primary)',
                    }}
                  >
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Subscription Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="blog-newsletter-card"
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: 'rgba(6, 78, 59, 0.08)',
                color: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
              }}
            >
              <Send size={20} />
            </div>

            <h3 className="font-heading" style={{ fontSize: 'clamp(1.4rem, 3.5vw, 1.85rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
              Subscribe to the FUDS Digest
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 1.75rem' }}>
              Get our weekly dispatches covering top street food spots, restaurant secrets, and exclusive promo drops delivered straight to your inbox. Have a food story or recommendation?{' '}
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  fontWeight: 800,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                  fontSize: 'inherit',
                }}
              >
                Pitch our editors
              </button>
              .
            </p>

            {newsletterSubscribed ? (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '9999px',
                  background: 'rgba(6, 78, 59, 0.1)',
                  color: 'var(--primary)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                }}
              >
                <Check size={16} /> You’re on the list! Welcome to the family.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (emailInput.trim()) setNewsletterSubscribed(true);
                }}
                className="blog-newsletter-form"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  style={{
                    flex: '1 1 200px',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '9999px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '0.92rem',
                    outline: 'none',
                    background: '#f8fafc',
                    boxSizing: 'border-box',
                    width: '100%',
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: '0.85rem 1.6rem',
                    borderRadius: '9999px',
                    fontWeight: 800,
                    fontSize: '0.92rem',
                    flexShrink: 0,
                    justifyContent: 'center',
                    boxSizing: 'border-box',
                  }}
                >
                  Join Digest
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Reader Modal for Full Story */}
      <AnimatePresence>
        {activeArticle && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              backgroundColor: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
              boxSizing: 'border-box',
            }}
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: '1.75rem',
                maxWidth: '720px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                position: 'relative',
                boxSizing: 'border-box',
              }}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f1f5f9',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--text)',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    background: 'rgba(6, 78, 59, 0.08)',
                    color: 'var(--primary)',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                  }}
                >
                  {activeArticle.category}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {activeArticle.date} · {activeArticle.readTime}
                </span>
              </div>

              <h2
                className="font-heading"
                style={{
                  fontSize: 'clamp(1.4rem, 3vw, 2.1rem)',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  color: 'var(--text)',
                  wordBreak: 'break-word',
                  paddingRight: '2rem',
                }}
              >
                {activeArticle.title}
              </h2>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.85rem 0',
                  borderTop: '1px solid #e2e8f0',
                  borderBottom: '1px solid #e2e8f0',
                  marginBottom: '1.5rem',
                  gap: '0.75rem',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(6, 78, 59, 0.1)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      flexShrink: 0,
                    }}
                  >
                    {activeArticle.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text)' }}>
                      {activeArticle.author}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {activeArticle.role}
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleShare(activeArticle)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '9999px',
                    border: '1px solid #e2e8f0',
                    background: '#f8fafc',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                  }}
                >
                  {copiedLink ? <Check size={13} color="var(--primary)" /> : <Share2 size={13} />}
                  {copiedLink ? 'Copied' : 'Share'}
                </button>
              </div>

              {/* Body Content */}
              <div
                style={{
                  fontSize: 'clamp(0.92rem, 2vw, 1.02rem)',
                  lineHeight: 1.75,
                  color: '#334155',
                  fontWeight: 400,
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                }}
              >
                {activeArticle.content}
              </div>

              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-primary"
                  style={{ padding: '0.7rem 1.5rem', borderRadius: '9999px', fontSize: '0.9rem' }}
                >
                  Done Reading
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .blog-featured-banner {
          background: linear-gradient(135deg, #064E3B 0%, #032b21 100%);
          color: #ffffff;
          border-radius: clamp(1.5rem, 4vw, 2.5rem);
          padding: clamp(1.5rem, 4vw, 3.5rem);
          cursor: pointer;
          box-shadow: 0 20px 45px -12px rgba(6, 78, 59, 0.35);
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
        }
        @media (min-width: 860px) {
          .blog-featured-banner {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 2.5rem;
          }
        }
        .blog-articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
          gap: 1.5rem;
          width: 100%;
          box-sizing: border-box;
        }
        .blog-article-card {
          background: #ffffff;
          border-radius: 1.75rem;
          padding: clamp(1.25rem, 3.5vw, 2rem);
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 10px 30px -8px rgba(0,0,0,0.04);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-sizing: border-box;
          min-width: 0;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }
        .blog-newsletter-card {
          margin-top: 4rem;
          padding: clamp(1.5rem, 4vw, 3rem) 1.25rem;
          border-radius: clamp(1.5rem, 4vw, 2.5rem);
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.04);
          text-align: center;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          width: 100%;
        }
        .blog-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          max-width: 440px;
          margin: 0 auto;
          width: 100%;
          box-sizing: border-box;
        }
        @media (min-width: 480px) {
          .blog-newsletter-form {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
