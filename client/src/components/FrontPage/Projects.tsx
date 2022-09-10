import React, { useState, useEffect } from 'react';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import displayImageOne from '../../assets/interior-8.jpg';
import displayImageTwo from '../../assets/interior-5.1.jpg';
import displayImageThree from '../../assets/interior-2.jpg';
import displayImageFour from '../../assets/interior-13.jpg';
import displayImageFive from '../../assets/interior-27.jpg';
import displayImageSix from '../../assets/interior-4.jpg';
import Dots from '../Dots';
import List from '../List';
import Button from '../Button';
import AnchorButton from '../AnchorButton';
import { PROJECTS_ROUTE } from '../../utils/consts';

interface ProjectForDisplayProps {
  location: string;
  title: string;
  image: string;
}

function ProjectForDisplay({
  location,
  title,
  image,
}: ProjectForDisplayProps) {
  return (
    <div className="project-for-display">
      <div className="image-wrapper">
        <img src={image} alt="Project" />
        <div className="angle-deco upper-left" />
        <div className="angle-deco upper-right" />
        <div className="angle-deco lower-left" />
        <div className="angle-deco lower-right" />
      </div>
      <div className="info">
        <div className="location-row">
          <FontAwesomeIcon className="location-icon" icon={faLocationPin} />
          <span className="location-text">
            {location}
          </span>
        </div>
        <div className="title-row">
          <Dots />
          <NavLink
            to="/"
            className="title-text"
          >
            {title}
          </NavLink>
        </div>
      </div>
      <div className="active-bar" />
      <div className="inactive-bar" />
    </div>
  );
}

function Projects() {
  const [projects, setProjects] = useState<ProjectForDisplayProps[]>([]);
  const firstBatch = [
    {
      location: 'Vienna, Virginia',
      title: 'Cobblestone kitchen with ceramic tile panels',
      image: displayImageOne,
    },
    {
      location: 'Bethesda, Maryland',
      title: 'Chillout zone for rest and relaxation',
      image: displayImageTwo,
    },
    {
      location: 'Washington, D.C.',
      title: 'Marble bathroom du style classique',
      image: displayImageThree,
    },
  ];
  const secondBatch = [
    {
      location: 'Arlington, Virginia',
      title: 'Our cobblestone pillars adorn a rustic restaurant',
      image: displayImageFour,
    },
    {
      location: 'Alexandria, Virginia',
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      image: displayImageFive,
    },
    {
      location: 'Silver Springs, Maryland',
      title: 'Lorem ipsum dolor sit amet, consectetur...',
      image: displayImageSix,
    },
  ];
  const loadMore = () => {
    setProjects(projects.concat(secondBatch));
  };
  useEffect(() => {
    setProjects(firstBatch);
  }, []);
  return (
    <div className="projects">
      <div className="upper-row">
        <div className="divider" />
        <div className="left-col">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque egestas congue quisque egestas diam. Blandit turpis cursus in hac habitasse platea dictumst quisque.
          </p>
        </div>
        <div className="right-col">
          <div className="headers">
            <h3>
              Best works
            </h3>
            <h2>
              Artisanship translated to inspiration
            </h2>
          </div>
        </div>
      </div>
      <div className="projects-ul-wrapper">
        <List
          items={projects}
          renderAs={({ location, title, image }) => (
            <li key={title}>
              <ProjectForDisplay
                location={location}
                title={title}
                image={image}
              />
            </li>
          )}
        />
        {projects.length === 3 ? (
          <Button
            label="Show more"
            className="show-more-button"
            onClick={loadMore}
          />
        ) : (
          <AnchorButton
            label="Projects page"
            className="show-more-button"
            to={PROJECTS_ROUTE}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
