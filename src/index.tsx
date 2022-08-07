import ReactDOM from 'react-dom/client';
import React from 'react';
import CustomRouter from './CustomRouter';
import { GlobalStyle } from './assets/GlobalStyle';

const elem = document.getElementById('root');
if (!elem) throw new Error("root element is not exist");
const root = ReactDOM.createRoot(elem);

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <CustomRouter />
  </React.StrictMode>
);
