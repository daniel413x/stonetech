import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectInGallery } from '../../../types/types';
import { randomInt } from '../../../utils/functions';

type ProjectProps = Omit<ProjectInGallery, 'id'> & {
  size: 'sm' | 'lg';
  animDelay: number;
};

function Project({
  thumbnail, galleryTitle, client, size, animDelay, slug,
}: ProjectProps) {
  const [show, setShow] = useState(false);
  const animNumber = randomInt(1, 4);
  setTimeout(() => setShow(true), animDelay);
  return (
    <div className={`img-wrapper ${size} anim-${animNumber} ${show && 'show'}`}>
      <div className="overlay">
        <span className="client">
          Client:
          {' '}
          {client}
        </span>
        <span className="name">
          {galleryTitle}
        </span>
        <NavLink
          className="read-more"
          to={slug}
        >
          Read more
        </NavLink>
      </div>
      <img
        src={`${process.env.REACT_APP_API_URL}${thumbnail}`}
        alt={galleryTitle}
      />
    </div>
  );
}

export default observer(Project);
