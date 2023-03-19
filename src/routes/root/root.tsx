import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

import './root.css';

function Root() {
  return (
    <div className="home-page">
      <SearchBar />
      <Cards />
    </div>
  );
}

export default Root;
