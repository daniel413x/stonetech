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
  galleryTitle: string;
  client: string;
  fullTitle: string;
  images: string[];
  thumbnail: string;
  info: [string, string][];
  seniorArchitect?: IEmployee;
  body?: string[];
  location: string;
}

export interface IBlogPost {
  id: string;
  thumbnail: string;
  title: string;
  body: string[];
}
