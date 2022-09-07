import React from 'react';
import { NavLink } from 'react-router-dom';

function NavButtons() {
  return (
    <ul className="nav-buttons-ul">
      <li>
        <NavLink
          className="nav-button"
          to="/"
        >
          Main
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-button"
          to="/"
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-button"
          to="/"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-button"
          to="/"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          className="nav-button"
          to="/"
        >
          Company
        </NavLink>
      </li>
    </ul>
  );
}

export default NavButtons;
