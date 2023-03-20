import React from 'react';
import Header from '../../components/Header/Header';

import './error-page.css';

export default function ErrorPage() {
  return (
    <>
      <Header title={'404'} />
      <main className="main">
        <div className="error-page">
          <h2 id="h2_error">Oops!</h2>
          <p id="error-text">Sorry, page is not found.</p>
        </div>
      </main>
    </>
  );
}
