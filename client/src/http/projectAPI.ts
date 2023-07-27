import {
  IProject, QueryReqFetchMultiple, QueryResFetchMultiple,
} from '../types/types';
import { $host } from './index';

export const fetchProjects = async (queryParams?: QueryReqFetchMultiple): Promise<QueryResFetchMultiple<IProject>> => {
  const { data } = await $host.get('api/project', { params: queryParams });
  return data;
};

export const fetchProject = async (title: string): Promise<IProject> => {
  const { data } = await $host.get(`api/project/${title}`);
  return data;
};
