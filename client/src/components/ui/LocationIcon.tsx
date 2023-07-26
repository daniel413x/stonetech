import React from 'react';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LocationIconProps {
  location: string;
}

function LocationIcon({ location }: LocationIconProps) {
  return (
    <div className="location-icon">
      <FontAwesomeIcon className="icon" icon={faLocationPin} />
      <span className="text">
        {location}
      </span>
    </div>
  );
}

export default LocationIcon;
