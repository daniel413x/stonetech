import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { observer } from 'mobx-react-lite';
import PageHeader from '../components/PageHeader';
import useBreakpoints from '../hooks/useBreakpoints';
import useWindowScrollLimit from '../hooks/useWindowScrollLimit';
import { ProjectInGallery } from '../types/types';
import Project from '../components/Projects/Project';
import { fetchProjects } from '../http/projectAPI';
import Context from '../context/context';
import useRefScrollXLimit from '../hooks/useRefScrollXLimit';

function Projects() {
  const { projects } = useContext(Context);
  const { page, pageLimitReached } = projects;
  const [loading, setLoading] = useState<boolean>(true);
  const { md, xl } = useBreakpoints();
  const ulRef = useRef<HTMLUListElement>(null);
  const reachedXLimit = useRefScrollXLimit(ulRef, pageLimitReached);
  const reachedYLimit = useWindowScrollLimit(pageLimitReached);
  const itemsPerFetch = 22;
  const getAnimDelay = (index: number) => {
    if (index >= itemsPerFetch) {
      return (index - itemsPerFetch) * 125;
    }
    return index * 125;
  };
  useEffect(() => {
    if (projects.all.length) {
      setLoading(false);
      return;
    }
    (async () => {
      const { rows: fetchedProjects, count: totalProjects } = await fetchProjects({
        attributes: ['thumbnail', 'galleryTitle', 'client', 'fullTitle', 'id'],
        page,
      });
      projects.setPageLimit(Math.ceil(totalProjects / itemsPerFetch));
      projects.setProjects(fetchedProjects);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (loading) {
      return;
    }
    const fetchMore = async () => {
      const nextPage = page + 1;
      const { rows: fetchedProjects } = await fetchProjects({
        attributes: ['thumbnail', 'galleryTitle', 'client', 'fullTitle', 'id'],
        page: nextPage,
      });
      projects.setProjects(projects.all.concat(fetchedProjects));
      projects.setPage(nextPage);
    };
    if ((reachedXLimit && !md) || (reachedYLimit && md)) {
      (async () => fetchMore())();
    }
  }, [md, reachedYLimit, reachedXLimit]);
  let arrangedProjects: ProjectInGallery[][] = [];
  if (md && !xl) {
    arrangedProjects = projects.layoutTwo;
  } else {
    arrangedProjects = projects.layoutOne;
  }
  return (
    <div id="projects">
      <PageHeader
        header="Our projects"
        paragraph="We present to you the best from our design studio and workshop. From stunning living rooms to the unique and unusual."
      />
      <ul id="projects-ul" ref={ulRef}>
        {loading ? null : arrangedProjects.map((arr, i) => {
          if (arr.length === 2) {
            return (
              <li className="col-of-two" key={`${arr[0].id}-col`}>
                {arr.map((project) => (
                  <Project
                    key={project.id}
                    client={project.client}
                    galleryTitle={project.galleryTitle}
                    thumbnail={project.thumbnail}
                    size="sm"
                    fullTitle={project.fullTitle}
                    animDelay={getAnimDelay(i)}
                  />
                ))}
              </li>
            );
          }
          return (
            <li className="col-of-one" key={`${arr[0].id}-col`}>
              <Project
                key={arr[0].id}
                client={arr[0].client}
                galleryTitle={arr[0].galleryTitle}
                thumbnail={arr[0].thumbnail}
                size="lg"
                fullTitle={arr[0].fullTitle}
                animDelay={getAnimDelay(i)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default observer(Projects);
