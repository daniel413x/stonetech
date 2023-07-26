import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppRouter from '../../../routers/AppRouter';
import { companyRoutes } from '../../../../paths/paths';
import {
  ABOUT_ROUTE,
  ADVANTAGES_ROUTE,
  CONTACT_ROUTE,
  PARTNERS_ROUTE,
} from '../../../../utils/consts';

function Company() {
  const { pathname } = useLocation();
  return (
    <div id="company">
      <div className="router-wrapper">
        <div className="left-col">
          <h2>
            About our company
          </h2>
          <NavLink to={ABOUT_ROUTE} className={`${(pathname.endsWith('company') || pathname.endsWith('about')) && 'current-route'}`}>
            About us
          </NavLink>
          <NavLink to={ADVANTAGES_ROUTE} className={`${pathname.includes('advantages') && 'current-route'}`}>
            Advantages
          </NavLink>
          <NavLink to={PARTNERS_ROUTE} className={`${pathname.endsWith('partners') && 'current-route'}`}>
            Our partners
          </NavLink>
          <NavLink to={CONTACT_ROUTE} className={`${pathname.endsWith('contact') && 'current-route'}`}>
            Contact
          </NavLink>
        </div>
        <AppRouter
          publicRoutes={companyRoutes}
        />
      </div>
    </div>
  );
}

export default Company;
