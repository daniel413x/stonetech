import { IBlogPost, QueryReqFetchMultiple, QueryResFetchMultiple } from '../types/types';
import { $host } from './index';

export const fetchBlogs = async (queryParams?: QueryReqFetchMultiple): Promise<QueryResFetchMultiple<IBlogPost>> => {
  const { data } = await $host.get('api/blog', { params: queryParams });
  return data;
};

export const fetchBlog = async (title: string): Promise<IBlogPost> => {
  const { data } = await $host.get(`api/blog/${title}`);
  return data;
};
