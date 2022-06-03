import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendario from './Calendar/Calendario';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Calendario />
  </React.StrictMode>
);

