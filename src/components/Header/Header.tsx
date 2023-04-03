import { NavLink } from 'react-router-dom';

import './Header.css';

type Props = {
  title: string;
};

function Header({ title }: Props) {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'nav-list__link_active' : '';

  return (
    <header className="header">
      <h1>{title}</h1>
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
