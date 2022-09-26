import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import { fetchProject } from '../http/projectAPI';
import { IProject } from '../types/types';
import LocationIcon from '../components/LocationIcon';
import Slider from '../components/ProjectPage/Slider';
import List from '../components/List';

function ProjectPage() {
  const [project, setProject] = useState<IProject>();
  const [loading, setLoading] = useState<boolean>(true);
  const breadcrumbs = useLocation().pathname.split(/\//).filter(Boolean);
  const { title } = useParams();
  useEffect(() => {
    (async () => {
      const fetchedProject = await fetchProject(title!, {
        attributes: [
          'id', 'body', 'fullTitle', 'images', 'info', 'location', 'thumbnail',
        ],
      });
      setProject(fetchedProject);
      setLoading(false);
    })();
  }, []);
  if (!project || loading) {
    return null;
  }
  const {
    location,
    fullTitle,
    body,
    images,
    employee,
    info,
  } = project;
  breadcrumbs[breadcrumbs.length - 1] = fullTitle;
  return (
    <div id="project-page">
      <div className="wrapper">
        <div className="upper-row">
          <BreadcrumbTrail
            arr={breadcrumbs}
          />
          <LocationIcon location={location || ''} />
        </div>
        {images ? <Slider images={images} /> : null}
        <h1>
          {fullTitle}
        </h1>
        <div className="lower-row">
          <div className="left-col">
            {body?.map((string, i) => (/\.(jpe?g|png)$/.test(string) ? (
              <img
                src={`${process.env.REACT_APP_API_URL}${string}`}
                alt="Project illustration"
                // eslint-disable-next-line react/no-array-index-key
                key={`${string}${i}`}
              />
            ) : (
              // eslint-disable-next-line react/no-array-index-key
              <p key={`${string}${i}`}>
                {string}
              </p>
            )))}
          </div>
          <div className="right-col">
            <div className="architect">
              <h2>
                Meet the architect
              </h2>
              <img
                src={`${process.env.REACT_APP_API_URL}${employee?.avatar}`}
                alt="Senior architect"
                className="avatar"
              />
              <span className="name">
                {employee?.name}
              </span>
              <p className="bio">
                {employee?.bio}
              </p>
            </div>
            <div className="info">
              <h2>
                Project information
              </h2>
              <List
                items={info as [string, string][]}
                className="pairs"
                renderAs={(arr) => (
                  <li key={arr[0]}>
                    <div className="key">
                      {arr[0]}
                    </div>
                    <div className="divider">
                      {' '}
                    </div>
                    <div className="value">
                      {arr[1]}
                    </div>
                  </li>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
