// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './index.css';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
