export interface IEmployee {
  id: string;
  roles: string[];
  name?: string;
  email: string;
  password: string;
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
