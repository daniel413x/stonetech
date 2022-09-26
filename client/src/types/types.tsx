import { FC } from 'react';

export interface IRouterRoute {
  path: string;
  Component: FC;
}

export interface IEmployee {
  id: string;
  roles: string[];
  name?: string;
  email: string;
  avatar?: string;
  bio?: string;
}

export interface IProject {
  id: string;
  fullTitle: string;
  galleryTitle: string;
  client: string;
  location: string;
  images: string[];
  thumbnail: string;
  info: [string, string][];
  employee?: IEmployee;
  body?: string[];
}

export interface ICommonArticleProps {
  thumbnail?: string;
  title: string;
  body: string[];
  snippet?: string;
}

export interface IBlogPost extends Omit<ICommonArticleProps, 'thumbnail'> {
  id: string;
  thumbnail: string;
  date: string;
}

export type BlogCard = Omit<IBlogPost, 'id' | 'body'>;

export interface INavButton {
  to: string;
  label: string;
}

export type ProjectInGallery = Omit<IProject, 'images' | 'info' | 'seniorArchitect' | 'body' | 'location'>;

export type ProjectAttributes = ('galleryTitle' | 'fullTitle' | 'images' | 'thumbnail' | 'info' | 'seniorArchitect' | 'body' | 'location' | 'client' | 'id')[];

export type BlogAttributes = ('title' | ['createdAt', string] | 'thumbnail' | 'id' | 'body' | 'snippet')[];

export type QueryReqFetchOne<T> = {
  attributes?: T;
};

export type QueryReqFetchMultiple<T> = {
  page?: number;
  limit?: number;
  attributes?: T;
};
