import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Dots from '../Dots';
import List from '../List';
import Button from '../Button';
import AnchorButton from '../AnchorButton';
import { PROJECTS_ROUTE } from '../../../utils/consts';
import LocationIcon from '../LocationIcon';
import { projectsCardsBatchOne, projectsCardsBatchTwo } from '../../../utils/arrays';

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
    <div className="gallery-project">
      <div className="image-wrapper">
        <img src={image} alt="Project" />
        <div className="angle-deco upper-left" />
        <div className="angle-deco upper-right" />
        <div className="angle-deco lower-left" />
        <div className="angle-deco lower-right" />
      </div>
      <div className="info">
        <LocationIcon location={location} />
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
  const loadMore = () => {
    setProjects(projects.concat(projectsCardsBatchTwo));
  };
  useEffect(() => {
    setProjects(projectsCardsBatchOne);
  }, []);
  return (
    <div className="projects">
      <div className="upper-row">
        <div className="divider" />
        <div className="left-col">
          <p>
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
            className="show-more-button"
            onClick={loadMore}
          >
            Show more
          </Button>
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
