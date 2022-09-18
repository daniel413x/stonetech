import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BreadcrumbTrail from '../components/BreadcrumbTrail';
import { fetchProject } from '../http/projectAPI';
import { IProject } from '../types/types';
import LocationIcon from '../components/LocationIcon';
import Slider from '../components/Project/Slider';
import List from '../components/List';
import { FRONT_PAGE_ROUTE, PROJECTS_ROUTE } from '../utils/consts';

function ProjectPage() {
  const [project, setProject] = useState<IProject>();
  const [loading, setLoading] = useState<boolean>(true);
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
  let location;
  let fullTitle;
  let body;
  let images;
  let employee;
  let info;
  if (project) {
    ({
      location,
      fullTitle,
      body,
      images,
      employee,
      info,
    } = project);
  }
  const breadcrumbs = [
    {
      label: 'Main',
      to: FRONT_PAGE_ROUTE,
    },
    {
      label: 'Projects',
      to: `/${PROJECTS_ROUTE}`,
    },
    {
      label: fullTitle as string,
    },
  ];
  return loading ? null : (
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
              <p className="paragraph" key={`${string}${i}`}>
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
              <p className="paragraph bio">
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
