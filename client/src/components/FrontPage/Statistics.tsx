import React from 'react';
import { COMPANY_ROUTE, CONTACT_ROUTE } from '../../utils/consts';
import AnchorButton from '../AnchorButton';

function Statistics() {
  const stats = [
    [1080, 'clients worldwide'],
    [36, 'best franchises'],
    [665, 'penguins'],
    [23, 'trusted partners'],
    [108, 'manufacturers'],
    [256, 'eight-bit colors'],
    [12, 'vendors'],
    [75, 'employees'],
    [12, 'granite quarries'],
  ];
  return (
    <div className="statistics">
      <div className="left-col">
        <span className="header">
          Stonetech Community Trust
        </span>
        <div className="divider" />
        <div className="stats">
          {stats.map((stat) => (
            <div key={stat[1]}>
              <span className="figure">
                {stat[0]}
              </span>
              {' '}
              <span className="key">
                {stat[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-col">
        <span className="desc">
          Give us a call or fill out a contact form.
          <br />
          We respond in 10 minutes or less.
        </span>
        <span className="phone-num">
          +7 (202) 247-7048
        </span>
        <AnchorButton to={`${COMPANY_ROUTE}/${CONTACT_ROUTE}`} label="Contact form" />
      </div>
    </div>
  );
}

export default Statistics;
