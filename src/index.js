import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/Route';



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('exam-portal-wrapper'));
root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);

reportWebVitals();
