import React from 'react';
import { NavLink } from 'react-router-dom';

interface AdvantageCardProps {
  Icon: any;
  title: string;
  body: string;
  url: string;
}

function AdvantageCard({
  Icon,
  title,
  body,
  url,
}: AdvantageCardProps) {
  return (
    <div className="advantage">
      <div className="title-row">
        <Icon className="icon" />
        <span className="title-text">
          {title}
        </span>
      </div>
      <div className="divider front-page" />
      <p>
        {body}
      </p>
      <NavLink className="read-more" to={url}>
        Read more
      </NavLink>
      <div className="divider company-page" />
    </div>
  );
}

export default AdvantageCard;
