import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const elem = document.getElementById('root');
if (!elem) throw new Error("root element is not exist");
const root = ReactDOM.createRoot(elem);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="auth" element={} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
);
