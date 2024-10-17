import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import './index.css'
import './i18n';  // Import the i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';  // Import the initialized i18n instance

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
