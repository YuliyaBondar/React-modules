import React from 'react';

import './SearchBar.css';

function SearchBar() {
  return (
    <form id="search-form" role="search">
      <input aria-label="Search" placeholder="Search" type="search" className="search-input" />
    </form>
  );
}

export default SearchBar;
