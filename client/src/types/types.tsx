import { FC, ReactNode } from 'react';

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
  slug: string;
}

export interface IPartner {
  Logo: any;
  name: string;
  info: string;
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
  createdAt: string;
  slug: string;
}

export type BlogCard = Omit<IBlogPost, 'id' | 'body'>;

export interface INavButton {
  to: string;
  label: string;
}

export type ProjectInGallery = Omit<IProject, 'images' | 'info' | 'seniorArchitect' | 'body' | 'location'>;

export type QueryReqFetchMultiple = {
  page?: number;
  limit?: number;
};

export type QueryResFetchMultiple<T> = {
  rows: T[];
  count: number;
};

export type Children = ReactNode | undefined;

export type FormFile = {
  file?: File;
  filename: string;
  url: string;
};

export type BodyInEditor = (string | FormFile)[];
