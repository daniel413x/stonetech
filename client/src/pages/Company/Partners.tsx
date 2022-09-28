import React from 'react';
import List from '../../components/List';
import PageHeader from '../../components/PageHeader';
import { IPartner } from '../../types/types';
import { partners } from '../../utils/arrays';

function Partner({
  Logo,
  name,
  info,
}: IPartner) {
  return (
    <div className="partner">
      <Logo
        className="logo"
      />
      <div className="text-col">
        <h2>
          {name}
        </h2>
        <p>
          {info}
        </p>
      </div>
    </div>
  );
}

function Partners() {
  return (
    <div id="partners" className="right-col">
      <PageHeader
        header="Our partners"
      />
      <List
        items={partners}
        renderAs={({ Logo, name, info }) => (
          <li key={name}>
            <Partner
              Logo={Logo}
              name={name}
              info={info}
            />
          </li>
        )}
      />
    </div>
  );
}

export default Partners;
