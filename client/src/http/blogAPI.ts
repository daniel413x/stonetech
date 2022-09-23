import { BlogAttributes, QueryReqFetchMultiple, QueryReqFetchOne } from '../types/types';
import { $host } from './index';

// eslint-disable-next-line import/prefer-default-export
export const fetchBlogs = async (queryParams?: QueryReqFetchMultiple<BlogAttributes>) => {
  const { data } = await $host.get('api/blog', { params: queryParams });
  return data;
};

export const fetchBlog = async (title: string, queryParams?: QueryReqFetchOne<BlogAttributes>) => {
  const { data } = await $host.get(`api/blog/${title}`, {
    params: queryParams,
  });
  return data;
};
