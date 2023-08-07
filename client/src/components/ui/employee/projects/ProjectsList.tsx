import React, { useEffect, useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams, NavLink } from 'react-router-dom';
import Context from '../../../../context/context';
import usePagination from '../../../../hooks/usePagination';
import { fetchProjects } from '../../../../http/projectAPI';
import { ProjectInGallery } from '../../../../types/types';
import List from '../../List';
import PageControl from '../../PageControl';
import { CREATE_ROUTE, EDIT_ROUTE } from '../../../../utils/consts';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';

function ProjectList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<ProjectInGallery[]>([]);
  const [searchParams] = useSearchParams({});
  const page = Number(searchParams.get('page'));
  const { projects } = useContext(Context);
  const itemsPerPage = 10;
  const {
    pageLimit,
    pageLimitReached,
    changePage,
  } = usePagination({
    itemsPerPage,
    itemsInDb: projects.itemsInDb,
    concurrentlySetQuery: true,
  });
  useEffect(() => {
    (async () => {
      const fetchedProjects = await fetchProjects({
        limit: itemsPerPage,
        page,
      });
      const { rows, count } = fetchedProjects;
      setCards(rows);
      projects.cacheProjects(rows, page);
      projects.setItemsInDb(count);
      setLoading(false);
    })();
  }, []);
  useEffect(() => {
    if (projects.cachedProjects[page]) {
      setCards(projects.cachedProjects[page]);
      return;
    }
    (async () => {
      const fetchedProjects = await fetchProjects({
        limit: itemsPerPage,
        page,
      });
      const { rows } = fetchedProjects;
      setCards(rows);
      projects.cacheProjects(rows, page);
    })();
  }, [page]);
  return (
    <div className="projects-list">
      <div className="wrapper">
        {loading ? null : (
          <List
            className="projects-ul"
            FirstItem={<li><NavLink className="project" to={CREATE_ROUTE}>+ Create New Project</NavLink></li>}
            items={cards}
            renderAs={({
              fullTitle,
              employee,
              slug,
            }) => (
              <li key={slug}>
                <NavLink className="project" to={`${EDIT_ROUTE}/${slug}`}>
                  <span className="title">
                    <EditIcon className="edit-icon" />
                    {fullTitle}
                  </span>
                  <span className="employee">{employee?.name}</span>
                </NavLink>
              </li>
            )}
          />
        )}
        {loading ? null : (
          <PageControl
            page={page || 1}
            pageLimit={pageLimit}
            pageLimitReached={pageLimitReached}
            changePage={changePage}
          />
        )}
      </div>
    </div>
  );
}

ProjectList.defaultProps = {
  employeeSection: false,
};

export default observer(ProjectList);
