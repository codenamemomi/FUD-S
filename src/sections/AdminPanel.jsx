import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, ShoppingBag, TrendingUp, Plus, ShieldCheck, 
  MapPin, Clock, ToggleLeft, ToggleRight, DollarSign,
  Coffee, RefreshCw, X, ArrowLeftRight, CheckCircle2, ChevronRight
} from 'lucide-react';

const AdminPanel = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // --- Initial Prefilled Mock Data representing our seeded DB ---
  const [vendors, setVendors] = useState([
    {
      id: 1,
      business_name: "Mama Titi's Kitchen",
      category: "restaurant",
      address: "14 Bode Thomas Street, Surulere, Lagos",
      opening_time: "08:00",
      closing_time: "22:00",
      status: "activated",
      sales: 125000,
    },
    {
      id: 2,
      business_name: "Alhaji Suya Spot",
      category: "restaurant",
      address: "7 Allen Avenue, Ikeja, Lagos",
      opening_time: "16:00",
      closing_time: "23:59",
      status: "activated",
      sales: 84000,
    },
    {
      id: 3,
      business_name: "Lekki Fresh Farms",
      category: "grocery_store",
      address: "Admiralty Way, Lekki Phase 1, Lagos",
      opening_time: "07:00",
      closing_time: "20:00",
      status: "activated",
      sales: 42000,
    },
    {
      id: 4,
      business_name: "Golden Crust Bakery",
      category: "bakery",
      address: "22 Awolowo Road, Ikoyi, Lagos",
      opening_time: "06:30",
      closing_time: "19:00",
      status: "activated",
      sales: 96000,
    },
    {
      id: 5,
      business_name: "MartPlus Supermarket",
      category: "supermarket",
      address: "Palms Shopping Mall, Lekki, Lagos",
      opening_time: "09:00",
      closing_time: "21:00",
      status: "activated",
      sales: 154000,
    }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "Jollof Rice + Chicken", price: 2500, category: "restaurant", vendor_id: 1, stock: 45 },
    { id: 2, name: "Egusi Soup + Eba", price: 2000, category: "restaurant", vendor_id: 1, stock: 30 },
    { id: 3, name: "Beef Suya (200g)", price: 2000, category: "restaurant", vendor_id: 2, stock: 100 },
    { id: 4, name: "Tomatoes (1kg)", price: 1500, category: "grocery_store", vendor_id: 3, stock: 15 },
    { id: 5, name: "Agege Bread (Large)", price: 1200, category: "bakery", vendor_id: 4, stock: 60 },
    { id: 6, name: "Dangote Sugar (1kg)", price: 1800, category: "supermarket", vendor_id: 5, stock: 80 },
  ]);

  const [orders, setOrders] = useState([
    {
      id: 1001,
      customer: "Jane Doe",
      vendors: ["Mama Titi's Kitchen", "Golden Crust Bakery"],
      total: 3700,
      delivery_time: "111 Pre-Scheduled: breakfast",
      status: "pending",
      date: "Just now"
    },
    {
      id: 1002,
      customer: "Emeka Okafor",
      vendors: ["Alhaji Suya Spot"],
      total: 2000,
      delivery_time: "Same-Day Delivery",
      status: "dispatched",
      date: "10 mins ago"
    },
    {
      id: 1003,
      customer: "Amina Yusuf",
      vendors: ["Lekki Fresh Farms", "MartPlus Supermarket"],
      total: 11000,
      delivery_time: "Recurring Grocery",
      status: "delivered",
      date: "1 hour ago"
    }
  ]);

  // --- Form States ---
  const [showAddVendor, setShowAddVendor] = useState(false);
  const [newVendor, setNewVendor] = useState({
    business_name: '',
    category: 'restaurant',
    address: '',
    opening_time: '08:00',
    closing_time: '20:00'
  });

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: 'restaurant',
    vendor_id: 1,
    stock: ''
  });

  // --- Simulation Handlers ---
  const toggleVendorStatus = (id) => {
    setVendors(vendors.map(v => v.id === id ? {
      ...v,
      status: v.status === 'activated' ? 'suspended' : 'activated'
    } : v));
  };

  const advanceOrderStatus = (id) => {
    setOrders(orders.map(o => {
      if (o.id === id) {
        let nextStatus = 'pending';
        if (o.status === 'pending') nextStatus = 'preparing';
        else if (o.status === 'preparing') nextStatus = 'dispatched';
        else if (o.status === 'dispatched') nextStatus = 'delivered';
        else nextStatus = 'pending';
        return { ...o, status: nextStatus };
      }
      return o;
    }));
  };

  const handleAddVendor = (e) => {
    e.preventDefault();
    if (!newVendor.business_name || !newVendor.address) return;
    setVendors([...vendors, {
      ...newVendor,
      id: vendors.length + 1,
      status: 'activated',
      sales: 0
    }]);
    setShowAddVendor(false);
    setNewVendor({
      business_name: '',
      category: 'restaurant',
      address: '',
      opening_time: '08:00',
      closing_time: '20:00'
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, {
      ...newProduct,
      id: products.length + 1,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock || '0')
    }]);
    setShowAddProduct(false);
    setNewProduct({
      name: '',
      price: '',
      category: 'restaurant',
      vendor_id: 1,
      stock: ''
    });
  };

  // --- Compute Total Statistics ---
  const totalSales = vendors.reduce((acc, v) => acc + v.sales, 0);
  const activeOrdersCount = orders.filter(o => o.status !== 'delivered').length;

  return (
    <div className="admin-layout" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(ellipse at top left, #0D2818, #05160E, #020906)',
      color: '#ECEFF1',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Inter', sans-serif",
      overflowY: 'auto'
    }}>
      {/* Top Navigation / Branding Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2.5rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(5, 22, 14, 0.4)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            padding: '0.6rem 1rem',
            borderRadius: '1rem',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1rem',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
          }}>
            FUDS
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: 900, margin: 0, letterSpacing: '-0.03em', color: '#fff' }}>
              Control Center
            </h1>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              MVP Operations Panel (Lagos Staging)
            </p>
          </div>
        </div>

        <button 
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: '#fff',
            padding: '0.75rem',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'var(--transition)'
          }}
          onMouseEnter={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.05)'}
        >
          <X size={20} />
        </button>
      </header>

      {/* Main Core Flexbox Workspace */}
      <div style={{
        display: 'flex',
        flex: 1,
        minHeight: 0
      }}>
        
        {/* Left Dashboard Sidebar */}
        <aside style={{
          width: '280px',
          borderRight: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          background: 'rgba(2, 9, 6, 0.5)'
        }}>
          {[
            { id: 'overview', label: 'Dashboard Overview', icon: <TrendingUp size={18} /> },
            { id: 'vendors', label: 'Vendors Control', icon: <Users size={18} /> },
            { id: 'products', label: 'Product Inventory', icon: <ShoppingBag size={18} /> },
            { id: 'orders', label: 'Order Dispatch', icon: <ArrowLeftRight size={18} /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                border: 'none',
                borderRadius: '1rem',
                background: activeTab === tab.id ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                color: activeTab === tab.id ? '#10B981' : 'rgba(255,255,255,0.6)',
                fontWeight: activeTab === tab.id ? 700 : 500,
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%',
                transition: 'all 0.3s ease'
              }}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </aside>

        {/* Dynamic View Workspace */}
        <main style={{
          flex: 1,
          padding: '2.5rem',
          overflowY: 'auto'
        }}>
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div className="stat-card" style={statCardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 600 }}>Total Revenue</span>
                    <div style={{ ...iconWrapperStyle, background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                      <DollarSign size={20} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0 0.2rem 0', color: '#fff' }}>
                    ₦{totalSales.toLocaleString()}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600 }}>+12.4% Lagos Target</span>
                </div>

                <div className="stat-card" style={statCardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 600 }}>Active Orders</span>
                    <div style={{ ...iconWrapperStyle, background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
                      <ArrowLeftRight size={20} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0 0.2rem 0', color: '#fff' }}>
                    {activeOrdersCount}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>1 on Delivery Deck</span>
                </div>

                <div className="stat-card" style={statCardStyle}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', fontWeight: 600 }}>Live Vendors</span>
                    <div style={{ ...iconWrapperStyle, background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6' }}>
                      <Users size={20} />
                    </div>
                  </div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 800, margin: '1rem 0 0.2rem 0', color: '#fff' }}>
                    {vendors.filter(v => v.status === 'activated').length} / {vendors.length}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 600 }}>100% Operations Up</span>
                </div>
              </div>

              {/* Lagos MVP Target Section */}
              <div style={{
                background: 'rgba(5, 22, 14, 0.3)',
                border: '1px solid rgba(16, 185, 129, 0.1)',
                borderRadius: '1.5rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: '0 0 0.4rem 0' }}>
                    Lagos MVP Core Hypotheses
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                    Track live statistics validating the three core product experiments.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                  <div style={hypothesisCardStyle}>
                    <div style={{ ...statusBadgeStyle, background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Hypothesis 1</div>
                    <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1rem', color: '#fff' }}>Multi-Vendor orders, single rider</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>
                      Target: Users checkout with items from multiple vendors in one cart. single rider route.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyBetween: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>Active Test Status</span>
                      <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '0.5rem' }}>78% match</span>
                    </div>
                  </div>

                  <div style={hypothesisCardStyle}>
                    <div style={{ ...statusBadgeStyle, background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Hypothesis 2</div>
                    <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1rem', color: '#fff' }}>"111" Breakfast/Lunch/Dinner pre-scheduling</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>
                      Target: Users schedule their daily meals in one sitting rather than making individual orders.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyBetween: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>Active Test Status</span>
                      <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '0.5rem' }}>64% pre-scheduled</span>
                    </div>
                  </div>

                  <div style={hypothesisCardStyle}>
                    <div style={{ ...statusBadgeStyle, background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Hypothesis 3</div>
                    <h4 style={{ margin: '0.8rem 0 0.3rem 0', fontSize: '1rem', color: '#fff' }}>Weekly recurring grocery subscriptions</h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>
                      Target: Users subscribe to automated grocery rosters.
                    </p>
                    <div style={{ marginTop: '1rem', display: 'flex', justifyBetween: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 700 }}>Active Test Status</span>
                      <span style={{ fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '0.5rem' }}>45 active rosters</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: VENDORS */}
          {activeTab === 'vendors' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>Registered Vendors</h2>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                    Manage food & grocery operators currently serving user carts.
                  </p>
                </div>
                <button 
                  onClick={() => setShowAddVendor(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#10B981',
                    color: '#fff',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  <Plus size={18} /> Add Vendor
                </button>
              </div>

              {/* Vendor List Table */}
              <div style={tableWrapperStyle}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                      <th style={{ padding: '1rem' }}>Business Name</th>
                      <th style={{ padding: '1rem' }}>Category</th>
                      <th style={{ padding: '1rem' }}>Address</th>
                      <th style={{ padding: '1rem' }}>Hours</th>
                      <th style={{ padding: '1rem' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {vendors.map(vendor => (
                      <tr key={vendor.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <td style={{ padding: '1.2rem 1rem', fontWeight: 700, color: '#fff' }}>{vendor.business_name}</td>
                        <td style={{ padding: '1.2rem 1rem' }}>
                          <span style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}>
                            {vendor.category.replace('_', ' ')}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem 1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>{vendor.address}</td>
                        <td style={{ padding: '1.2rem 1rem', fontSize: '0.85rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <Clock size={14} />
                            {vendor.opening_time} - {vendor.closing_time}
                          </div>
                        </td>
                        <td style={{ padding: '1.2rem 1rem' }}>
                          <span style={{
                            background: vendor.status === 'activated' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                            color: vendor.status === 'activated' ? '#10B981' : '#EF4444',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.8rem',
                            fontWeight: 700
                          }}>
                            {vendor.status}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem 1rem', textAlign: 'right' }}>
                          <button 
                            onClick={() => toggleVendorStatus(vendor.id)}
                            style={{
                              background: 'transparent',
                              border: 'none',
                              color: vendor.status === 'activated' ? '#EF4444' : '#10B981',
                              cursor: 'pointer',
                              fontWeight: 700,
                              fontSize: '0.85rem'
                            }}
                          >
                            {vendor.status === 'activated' ? 'Deactivate' : 'Activate'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 3: PRODUCTS */}
          {activeTab === 'products' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>Product Inventory</h2>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                    Monitor inventory status, item tags, and Lagos pricing lists.
                  </p>
                </div>
                <button 
                  onClick={() => setShowAddProduct(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#10B981',
                    color: '#fff',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'var(--transition)'
                  }}
                >
                  <Plus size={18} /> Add Product
                </button>
              </div>

              {/* Product Inventory Table */}
              <div style={tableWrapperStyle}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}>
                      <th style={{ padding: '1rem' }}>Product Name</th>
                      <th style={{ padding: '1rem' }}>Category</th>
                      <th style={{ padding: '1rem' }}>Vendor ID</th>
                      <th style={{ padding: '1rem' }}>Price (₦)</th>
                      <th style={{ padding: '1rem' }}>Stock Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
                        <td style={{ padding: '1.2rem 1rem', fontWeight: 700, color: '#fff' }}>{product.name}</td>
                        <td style={{ padding: '1.2rem 1rem' }}>
                          <span style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '0.5rem',
                            fontSize: '0.8rem'
                          }}>
                            {product.category}
                          </span>
                        </td>
                        <td style={{ padding: '1.2rem 1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                          Vendor #{product.vendor_id}
                        </td>
                        <td style={{ padding: '1.2rem 1rem', fontWeight: 700, color: '#fff' }}>
                          ₦{product.price.toLocaleString()}
                        </td>
                        <td style={{ padding: '1.2rem 1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: product.stock > 20 ? '#10B981' : product.stock > 0 ? '#F59E0B' : '#EF4444'
                            }} />
                            <span style={{ fontSize: '0.85rem' }}>{product.stock} in stock</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 4: ORDERS */}
          {activeTab === 'orders' && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            >
              <div>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: 0 }}>Order Control Panel</h2>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  Track active carts checking out. Simulate status progression for live tests.
                </p>
              </div>

              {/* Order List Grid */}
              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {orders.map(order => (
                  <div key={order.id} style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff' }}>Order #{order.id}</h4>
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>{order.date}</span>
                      </div>
                      <span style={{
                        background: order.status === 'delivered' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: order.status === 'delivered' ? '#10B981' : '#F59E0B',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        textTransform: 'uppercase'
                      }}>
                        {order.status}
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.9rem' }}>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', display: 'block' }}>Customer</span>
                        <strong style={{ color: '#fff' }}>{order.customer}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', display: 'block' }}>Vendors involved</span>
                        <strong style={{ color: '#fff' }}>{order.vendors.join(" + ")}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', display: 'block' }}>Roster Schedule</span>
                        <strong style={{ color: '#fff' }}>{order.delivery_time}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', display: 'block' }}>Total Price</span>
                        <strong style={{ color: '#10B981', fontSize: '1rem' }}>₦{order.total.toLocaleString()}</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', marginTop: '0.5rem' }}>
                      <button 
                        onClick={() => advanceOrderStatus(order.id)}
                        disabled={order.status === 'delivered'}
                        style={{
                          background: order.status === 'delivered' ? 'rgba(255,255,255,0.05)' : '#10B981',
                          color: order.status === 'delivered' ? 'rgba(255,255,255,0.3)' : '#fff',
                          border: 'none',
                          padding: '0.6rem 1.2rem',
                          borderRadius: '0.8rem',
                          fontWeight: 700,
                          cursor: order.status === 'delivered' ? 'default' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <RefreshCw size={16} /> 
                        {order.status === 'pending' && "Begin Preparation"}
                        {order.status === 'preparing' && "Dispatch Rider"}
                        {order.status === 'dispatched' && "Mark Delivered"}
                        {order.status === 'delivered' && "Order Finalized"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </main>
      </div>

      {/* --- ADD VENDOR MODAL --- */}
      <AnimatePresence>
        {showAddVendor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalBackdropStyle}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              style={modalContentStyle}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0 }}>Register New Vendor</h3>
                <button onClick={() => setShowAddVendor(false)} style={modalCloseBtnStyle}><X size={18} /></button>
              </div>

              <form onSubmit={handleAddVendor} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Business Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Mama Put Deluxe" 
                    value={newVendor.business_name} 
                    onChange={e => setNewVendor({...newVendor, business_name: e.target.value})}
                    style={inputStyle}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Category</label>
                  <select 
                    value={newVendor.category} 
                    onChange={e => setNewVendor({...newVendor, category: e.target.value})}
                    style={selectStyle}
                  >
                    <option value="restaurant">Restaurant</option>
                    <option value="grocery_store">Grocery Store</option>
                    <option value="supermarket">Supermarket</option>
                    <option value="bakery">Bakery</option>
                    <option value="pharmacy">Pharmacy</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Lagos Address</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 12 Admiralty Way, Lekki" 
                    value={newVendor.address} 
                    onChange={e => setNewVendor({...newVendor, address: e.target.value})}
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Opening Time</label>
                    <input 
                      type="time" 
                      value={newVendor.opening_time} 
                      onChange={e => setNewVendor({...newVendor, opening_time: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Closing Time</label>
                    <input 
                      type="time" 
                      value={newVendor.closing_time} 
                      onChange={e => setNewVendor({...newVendor, closing_time: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <button type="submit" style={submitBtnStyle}>Create Vendor Record</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADD PRODUCT MODAL --- */}
      <AnimatePresence>
        {showAddProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={modalBackdropStyle}
          >
            <motion.div 
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              style={modalContentStyle}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', margin: 0 }}>Register New Product</h3>
                <button onClick={() => setShowAddProduct(false)} style={modalCloseBtnStyle}><X size={18} /></button>
              </div>

              <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={labelStyle}>Product Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. White Beans + Plantain" 
                    value={newProduct.name} 
                    onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                    style={inputStyle}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Price (₦)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 1500" 
                      value={newProduct.price} 
                      onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Stock Quantity</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 50" 
                      value={newProduct.stock} 
                      onChange={e => setNewProduct({...newProduct, stock: e.target.value})}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Category</label>
                  <select 
                    value={newProduct.category} 
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                    style={selectStyle}
                  >
                    <option value="restaurant">Restaurant Menu</option>
                    <option value="grocery_store">Grocery Items</option>
                    <option value="supermarket">Supermarket Goods</option>
                    <option value="bakery">Bakery / Pastry</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Assign Vendor</label>
                  <select 
                    value={newProduct.vendor_id} 
                    onChange={e => setNewProduct({...newProduct, vendor_id: parseInt(e.target.value)})}
                    style={selectStyle}
                  >
                    {vendors.map(v => (
                      <option key={v.id} value={v.id}>{v.business_name}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" style={submitBtnStyle}>Add Product to Inventory</button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// --- Custom Inline Styles for Premium Aesthetic ---
const statCardStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '1.5rem',
  padding: '1.5rem',
  transition: 'all 0.3s ease',
};

const iconWrapperStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const hypothesisCardStyle = {
  background: 'rgba(255,255,255,0.01)',
  border: '1px solid rgba(255,255,255,0.03)',
  borderRadius: '1.25rem',
  padding: '1.5rem',
};

const statusBadgeStyle = {
  display: 'inline-block',
  fontSize: '0.75rem',
  padding: '0.2rem 0.6rem',
  borderRadius: '0.5rem',
  fontWeight: 700,
};

const tableWrapperStyle = {
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  borderRadius: '1.5rem',
  overflowX: 'auto',
  padding: '0.5rem'
};

const modalBackdropStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0,0,0,0.8)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3000,
  padding: '1.5rem'
};

const modalContentStyle = {
  background: '#05160E',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '2rem',
  width: '100%',
  maxWidth: '480px',
  padding: '2rem',
  boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
};

const modalCloseBtnStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: 'none',
  color: '#fff',
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const labelStyle = {
  display: 'block',
  fontSize: '0.85rem',
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '0.4rem',
  fontWeight: 600
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0.8rem',
  padding: '0.75rem 1rem',
  color: '#fff',
  outline: 'none',
  fontSize: '0.95rem'
};

const selectStyle = {
  ...inputStyle,
  cursor: 'pointer'
};

const submitBtnStyle = {
  background: '#10B981',
  color: '#fff',
  border: 'none',
  padding: '1rem',
  borderRadius: '1rem',
  fontWeight: 700,
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '0.5rem',
  transition: 'var(--transition)'
};

export default AdminPanel;
