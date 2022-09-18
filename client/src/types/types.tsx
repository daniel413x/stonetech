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

export interface IBlogPost {
  id: string;
  thumbnail: string;
  title: string;
  body: string[];
}

export interface INavButton {
  to: string;
  label: string;
}

export type ProjectInGallery = Omit<IProject, 'images' | 'info' | 'seniorArchitect' | 'body' | 'location'>;

export type QueryReqFetchProjects = {
  page?: number;
  limit?: number;
  attributes?: ('galleryTitle' | 'fullTitle' | 'images' | 'thumbnail' | 'info' | 'seniorArchitect' | 'body' | 'location' | 'client' | 'id')[];
};

export type QueryReqFetchProject = {
  attributes?: ('galleryTitle' | 'fullTitle' | 'images' | 'thumbnail' | 'info' | 'seniorArchitect' | 'body' | 'location' | 'client' | 'id')[];
};
