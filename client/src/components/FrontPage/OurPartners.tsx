import React from 'react';
import { ReactComponent as CeramicaBardelli } from '../../assets/CeramicaBardelli.svg';
import { ReactComponent as CeramicheCaesar } from '../../assets/CeramicheCaesar.svg';
import { ReactComponent as Mutina } from '../../assets/Mutina.svg';
import { ReactComponent as MosaicoMicro } from '../../assets/MosaicoMicro.svg';
import List from '../List';

interface PartnerProps {
  Logo: any;
  name: string;
  info: string;
}

function Partner({
  Logo,
  name,
  info,
}: PartnerProps) {
  return (
    <div className="partner">
      <Logo className="logo" />
      <p>
        <span className="name">
          {name}
        </span>
        :
        {' '}
        {info}
      </p>
    </div>
  );
}

function OurPartners() {
  const partners = [
    {
      Logo: CeramicaBardelli,
      name: 'Ceramica Bardelli',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu accumsan metus.',
    },
    {
      Logo: MosaicoMicro,
      name: 'Mosaico Micro',
      info: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
    },
    {
      Logo: Mutina,
      name: 'Mutina',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu accumsan metus.',
    },
    {
      Logo: CeramicheCaesar,
      name: 'Ceramiche Caesar',
      info: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
    },
  ];
  return (
    <div className="our-partners">
      <div className="bg" />
      <h2>
        Our partners
      </h2>
      <List
        items={partners}
        renderAs={({ name, Logo, info }) => (
          <li key={name}>
            <Partner
              name={name}
              Logo={Logo}
              info={info}
            />
          </li>
        )}
      />
    </div>
  );
}

export default OurPartners;
