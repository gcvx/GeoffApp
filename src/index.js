import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Add version number
const version = '1.0.0'; // Increment this manually after each commit
console.log(`App Version: ${version}`);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);