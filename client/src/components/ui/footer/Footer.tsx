import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logos/logo-gray.png';
import NavButtons from '../NavButtons';
import SocMediaIcons from '../SocMediaIcons';
import { mainNavButtons, servicesNavButtons } from '../../../utils/arrays';
import { ReactComponent as AngleUp } from '../../../assets/icons/angleup.svg';

function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="first-col">
          <img className="logo" src={logo} alt="Stonetech logo" />
          <div className="text-col">
            <h2>
              About us
            </h2>
            <p>
              We discuss and brainstorm our clients’ ideas and then apply our skill and experience to bring them to life.
            </p>
          </div>
        </div>
        <div className="second-col">
          <h2>
            Menu
          </h2>
          <div className="divider" />
          <NavButtons items={mainNavButtons} />
        </div>
        <div className="third-col">
          <h2>
            Services
          </h2>
          <div className="divider" />
          <NavButtons items={servicesNavButtons} />
        </div>
        <div className="fourth-col">
          <h2>
            Social media
          </h2>
          <div className="divider" />
          <p>
            Subscribe to receive photography of all our awesome projects for clients all over the world.
          </p>
          <SocMediaIcons />
        </div>
        <NavLink
          to="#"
          className="button to-top-button"
          title="Return to top"
          onClick={() => window.scrollTo(0, 0)}
        >
          <AngleUp />
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
