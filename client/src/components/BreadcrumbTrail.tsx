import React from 'react';
import { NavLink } from 'react-router-dom';

type BreadCrumb = {
  to?: string;
  label: string;
};

interface BreadcrumbTrailProps {
  arr: BreadCrumb[];
}

function BreadcrumbTrail({ arr }: BreadcrumbTrailProps) {
  return (
    <div className="breadcrumb-trail">
      {arr.map((breadcrumb, i) => {
        if (i < arr.length - 1) {
          return (
            <div className="breadcrumb" key={breadcrumb.label}>
              <NavLink to={breadcrumb.to!} className="previous">
                {breadcrumb.label}
              </NavLink>
              <span className="angle">
                &gt;
              </span>
            </div>
          );
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          <span key={breadcrumb.label} className="breadcrumb current">
            {breadcrumb.label}
          </span>
        );
      })}
    </div>
  );
}

export default BreadcrumbTrail;
