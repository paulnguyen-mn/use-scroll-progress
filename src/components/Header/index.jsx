import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

Header.propTypes = {};

function Header() {
  return (
    <nav className="nav">
      <NavLink
        exact
        to="/"
        className="nav__item"
        activeClassName="nav__item--active"
      >
        Full page scroll
      </NavLink>

      <NavLink
        to="/container"
        className="nav__item"
        activeClassName="nav__item--active"
      >
        Container scroll
      </NavLink>
    </nav>
  );
}

export default Header;