import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './routes/root/root';
import ErrorPage from './routes/error-page/error-page';
import AboutPage from './routes/about-page/about-page';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
        <Route path="about" element={<AboutPage />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
