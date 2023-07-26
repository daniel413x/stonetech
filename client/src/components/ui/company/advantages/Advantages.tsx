import React from 'react';
import PageHeader from '../../PageHeader';
import { advantagesCards } from '../../../../utils/arrays';
import List from '../../List';
import AdvantageCard from '../../AdvantageCard';

function Advantages() {
  return (
    <div id="advantages" className="right-col">
      <PageHeader
        header="The Stonetech Advantage"
      />
      <List
        items={advantagesCards}
        renderAs={({
          Icon,
          title,
          body,
          url,
        }) => (
          <li key={title}>
            <AdvantageCard
              Icon={Icon}
              title={title}
              body={body}
              url={url}
            />
          </li>
        )}
      />
    </div>
  );
}

export default Advantages;
