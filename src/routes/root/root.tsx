import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

import './root.css';

function Root() {
  return (
    <div className="home-page">
      <h1>Cards</h1>
      <SearchBar />
    </div>
  );
}

export default Root;
