import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { analytics, seo } from './site.js';
import { initAnalytics } from './track.js';

// Canonical configurável
if (seo.canonicalUrl) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
  link.href = seo.canonicalUrl;
}

initAnalytics(analytics);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
