import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Root from './routes/root/root';
import ErrorPage from './routes/error-page/error-page';
import AboutPage from './routes/about-page/about-page';

import './index.css';

try {
  const root = document.getElementById('root');

  const AppWrapper = () => (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
          <Route path="about" element={<AboutPage />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );

  const FallbackComponent = ({ error }: { error: Error }) => (
    <div style={{ backgroundColor: 'red', padding: '1rem' }}>{error.message}</div>
  );

  if (root) {
    ReactDOM.createRoot(root).render(
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <AppWrapper />
      </ErrorBoundary>
    );
  } else {
    throw new Error('Could not find root element with class "root"');
  }
} catch (error) {
  let message = 'Unknown Error';
  if (error instanceof Error) message = error.message;
  const errorElement = <div>{message}</div>;
}
