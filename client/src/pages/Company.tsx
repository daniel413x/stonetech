import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppRouter from '../components/routers/AppRouter';
import {
  ABOUT_ROUTE,
  ADVANTAGES_ROUTE,
  FEEDBACK_ROUTE,
  PARTNERS_ROUTE,
  companyRoutes,
} from '../utils/consts';

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
          <NavLink to={FEEDBACK_ROUTE} className={`${pathname.endsWith('feedback') && 'current-route'}`}>
            Feedback
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
