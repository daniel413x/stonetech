import React from 'react';
import logo from '../../assets/logo.png';
import NavButtons from '../NavButtons';
import SocMediaIcons from '../SocMediaIcons';

function Navbar() {
  return (
    <nav id="navbar">
      <img
        className="logo"
        src={logo}
        alt="logo"
      />
      <NavButtons />
      <SocMediaIcons />
    </nav>
  );
}

export default Navbar;
