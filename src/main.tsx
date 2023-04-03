import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import Root from './routes/root/root';
import ErrorPage from './routes/error-page/error-page';
import AboutPage from './routes/about-page/about-page';
import Form from './routes/form/form';
import Header from './components/Header/Header';

import './index.css';

try {
  const root = document.getElementById('root');

  const AppWrapper = () => (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Root />} errorElement={<ErrorPage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="form" element={<Form />}></Route>
          </Routes>
        </main>
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
  throw new Error('Could not find root element with class "root"');
}
