import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminPanel from './sections/AdminPanel';
import './index.css';

ReactDOM.createRoot(document.getElementById('admin-root')).render(
  <React.StrictMode>
    <AdminPanel onClose={() => window.location.href = '/'} />
  </React.StrictMode>
);
