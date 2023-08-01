import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface BreadcrumbTrailProps {
  arr?: string[];
  grayedLinks?: string[];
}

function BreadcrumbTrail({ arr, grayedLinks = ['edit'] }: BreadcrumbTrailProps) {
  const breadcrumbs = arr || useLocation().pathname.split(/\//).filter(Boolean);
  return (
    <div className="breadcrumb-trail">
      <div className="breadcrumb" key="main">
        <NavLink to="/" className="previous">
          Main
        </NavLink>
        <span className="angle">
          &gt;
        </span>
      </div>
      {breadcrumbs.map((str, i) => {
        let navBack = '';
        for (let n = 0; n < i + 1; n += 1) {
          navBack += `/${breadcrumbs[n]}`;
        }
        if (i < breadcrumbs.length - 1) {
          const grayed = grayedLinks && grayedLinks.indexOf(str) >= 0;
          return (
            <div className="breadcrumb" key={str}>
              <NavLink to={navBack} className={`previous ${grayed ? 'blocked' : ''}`} tabIndex={grayed ? -1 : 0}>
                {str}
              </NavLink>
              <span className="angle">
                &gt;
              </span>
            </div>
          );
        }
        return (
          <span key={str} className="breadcrumb current">
            {str}
          </span>
        );
      })}
    </div>
  );
}

BreadcrumbTrail.defaultProps = {
  arr: undefined,
  grayedLinks: undefined,
};

export default BreadcrumbTrail;
