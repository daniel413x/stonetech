import React from 'react';
import { NavLink } from 'react-router-dom';

interface BreadcrumbTrailProps {
  arr: string[];
}

function BreadcrumbTrail({ arr }: BreadcrumbTrailProps) {
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
      {arr.map((str, i) => {
        let navBack = '';
        for (let n = 1; n < arr.length - i; n += 1) {
          navBack += '../';
        }
        if (i < arr.length - 1) {
          return (
            <div className="breadcrumb" key={str}>
              <NavLink to={`${navBack}${str!}`} className="previous">
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

export default BreadcrumbTrail;
