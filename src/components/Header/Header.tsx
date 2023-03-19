import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-list__link_active' : '';

  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-list_item">
            <NavLink className={setActive} to="/" data-testid="main-link">
              Home
            </NavLink>
          </li>
          <li className="nav-list_item">
            <NavLink className={setActive} to="/about" data-testid="about-link">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
