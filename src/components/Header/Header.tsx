import './Header.css';
import React, { useEffect, useState } from 'react';

function Header() {
  const [currentPage, setCurrentPage] = useState('');

  const setCurrentPageName = () => {
    switch (currentPage) {
      case '': {
        setCurrentPage('Home');
        break;
      }
      case '/': {
        setCurrentPage('Home');
        break;
      }
    }
  };

  useEffect(() => {
    setCurrentPageName();
  }, [currentPage]);

  return (
    <div className="header">
      <h1>{currentPage}</h1>
    </div>
  );
}

export default Header;
