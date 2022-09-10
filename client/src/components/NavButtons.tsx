import React from 'react';
import { NavLink } from 'react-router-dom';
import { INavButton } from '../types/types';
import List from './List';

interface NavButtonsProps {
  items: INavButton[];
}

function NavButtons({ items }: NavButtonsProps) {
  return (
    <List
      className="nav-buttons-ul"
      items={items}
      renderAs={({ to, label }) => (
        <li key={label}>
          <NavLink className="nav-button" to={to}>
            {label}
          </NavLink>
        </li>
      )}
    />
  );
}

export default NavButtons;
