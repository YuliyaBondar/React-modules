import { NavLink, useLocation } from 'react-router-dom';

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
      case '/form': {
        return 'Form';
      }
      default: {
        return '404';
      }
    }
  };

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-list__link_active' : '';

  return (
    <header className="header">
      <h1>{getCurrentPage()}</h1>
      <nav data-testid="nav">
        <ul className="nav-list">
          <li className="nav-list_item">
            <NavLink className={setActive} to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-list_item">
            <NavLink className={setActive} to="/about">
              About Us
            </NavLink>
          </li>
          <li className="nav-list_item">
            <NavLink className={setActive} to="/form">
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
