import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new createRoot method
import App from './App';

// Creates a React root container(aka the DOM) and renders the App component into the DOM. App component is: App.js file
const root = ReactDOM.createRoot(document.getElementById('root')); // 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
