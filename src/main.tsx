import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './routes/root/root';
import ErrorPage from './routes/error-page/error-page';
import Header from './components/Header/Header';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </main>
    </Router>
  </React.StrictMode>
);
