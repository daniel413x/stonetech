import {
  IProject, QueryReqFetchMultiple, QueryResFetchMultiple,
} from '../types/types';
import { $authHost, $host } from './index';

export const fetchProjects = async (queryParams?: QueryReqFetchMultiple): Promise<QueryResFetchMultiple<IProject>> => {
  const { data } = await $host.get('api/project', { params: queryParams });
  return data;
};

export const fetchProject = async (title: string): Promise<IProject> => {
  const { data } = await $host.get(`api/project/${title}`);
  return data;
};

export const createProject = async (form: any): Promise<IProject> => {
  const { data } = await $authHost.post('api/project', form);
  return data;
};

export const updateProject = async (id: string, form: any): Promise<void> => {
  await $authHost.put(`api/project/${id}`, form);
};
