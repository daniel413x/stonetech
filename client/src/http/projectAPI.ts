import { ProjectAttributes, QueryReqFetchMultiple, QueryReqFetchOne } from '../types/types';
import { $host } from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchProjects = async (queryParams?: QueryReqFetchMultiple<ProjectAttributes>) => {
  const { data } = await $host.get('api/project', { params: queryParams });
  return data;
};

export const fetchProject = async (title: string, queryParams?: QueryReqFetchOne<ProjectAttributes>) => {
  const { data } = await $host.get(`api/project/${title}`, {
    params: queryParams,
  });
  return data;
};
