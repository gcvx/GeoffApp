import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Add version number
const version = '1.0.0'; // Increment this manually after each commit
console.log(`App Version: ${version}`);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);