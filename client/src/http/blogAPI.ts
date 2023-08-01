import { IBlogPost, QueryReqFetchMultiple, QueryResFetchMultiple } from '../types/types';
import { $authHost, $host } from './index';

export const fetchBlogs = async (queryParams?: QueryReqFetchMultiple): Promise<QueryResFetchMultiple<IBlogPost>> => {
  const { data } = await $host.get('api/blog', { params: queryParams });
  return data;
};

export const fetchBlog = async (title: string): Promise<IBlogPost> => {
  const { data } = await $host.get(`api/blog/${title}`);
  return data;
};

export const createBlog = async (form: any): Promise<IBlogPost> => {
  const { data } = await $authHost.post('api/blogpost', form);
  return data;
};

export const updateBlog = async (id: string, form: any): Promise<void> => {
  await $authHost.put(`api/blogpost/${id}`, form);
};
