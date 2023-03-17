import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

function Header() {
  const location = useLocation();

  const getCurrentPage = () => {
    switch (location.pathname) {
      case '': {
        return 'Home';
      }
      case '/': {
        return 'Home';
      }
      case '/about': {
        return 'About us';
      }
      default: {
        return '404';
      }
    }
  };

  return (
    <header className="header">
      <h1>{getCurrentPage()}</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-list_item">
            <Link to={`/`}>Home</Link>
          </li>
          <li className="nav-list_item">
            <Link to={`about`}>About us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
