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
  title: string;
  images: string[];
  thumbnail: string;
  info: [string, string][];
  seniorArchitect?: IEmployee;
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
