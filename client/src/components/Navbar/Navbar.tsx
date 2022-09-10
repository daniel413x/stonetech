import React from 'react';
import logo from '../../assets/logo.png';
import { mainNavButtons } from '../../utils/consts';
import NavButtons from '../NavButtons';
import SocMediaIcons from '../SocMediaIcons';

function Navbar() {
  return (
    <nav id="navbar">
      <img
        className="logo"
        src={logo}
        alt="Stonetech logo"
      />
      <NavButtons items={mainNavButtons} />
      <SocMediaIcons />
    </nav>
  );
}

export default Navbar;
