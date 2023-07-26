import React from 'react';
import { useLocation } from 'react-router-dom';
import logoWhite from '../../../assets/logos/logo-white.png';
import logoBlack from '../../../assets/logos/logo-black.png';
import { mainNavButtons } from '../../../utils/arrays';
import NavButtons from '../NavButtons';
import SocMediaIcons from '../SocMediaIcons';

function Navbar() {
  const { pathname } = useLocation();
  const notFrontPage = pathname !== '/';
  return (
    <nav id="navbar" className={`${notFrontPage && 'dark'}`}>
      <img
        className="logo"
        src={notFrontPage ? logoBlack : logoWhite}
        alt="Stonetech logo"
      />
      <NavButtons items={mainNavButtons} />
      <SocMediaIcons />
    </nav>
  );
}

export default Navbar;
