import React from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import Cards from '../../components/Cards/Cards';

import './root.css';

function Root() {
  return (
    <>
      <Header title={'Home'} />
      <main className="main">
        <div className="home-page" id="home-page">
          <SearchBar />
          <Cards />
        </div>
      </main>
    </>
  );
}

export default Root;
