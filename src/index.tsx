import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elem = document.getElementById('root');
if (!elem) throw new Error("root element is not exist");
const root = ReactDOM.createRoot(elem);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
