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
      <img
        src={Logo}
        alt={name}
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
          <Partner
            Logo={Logo}
            name={name}
            info={info}
          />
        )}
      />
    </div>
  );
}

export default Partners;
