import { ProjectInGallery } from '../types/types';

export function makeSlug(string: string): string {
  const id = string.toLowerCase().split(' ').filter(Boolean).join('-');
  return id;
}

export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function blogDate(string: string): string {
  return new Date(string).toLocaleTimeString(navigator.language, {
    month: 'numeric',
    day: 'numeric',
  }).split(',')[0];
}

export function filterEmpties(arr: (ProjectInGallery | undefined)[]): boolean {
  if (arr.indexOf(undefined) >= 0 || arr.length === 0) {
    return false;
  }
  return true;
}

export function getMaxPage(itemsInDb: number, itemsPerPage: number) {
  return Math.ceil(itemsInDb / itemsPerPage);
}

export function projectsLayoutOne(projects: ProjectInGallery[]): ProjectInGallery[][] {
  const returnedArr = [];
  for (let i = 0; i < projects.length; i += 3) {
    returnedArr.push(projects.slice(i, i + 2));
    returnedArr.push([projects[i + 2]]);
  }
  return returnedArr.filter(filterEmpties);
}

export function projectsLayoutTwo(projects: ProjectInGallery[]): ProjectInGallery[][] {
  const returnedArr = [];
  for (let i = 0; i < projects.length; i += 3) {
    if (i % 2 === 0) {
      returnedArr.push([projects[i]]);
      returnedArr.push(projects.slice(i + 1, i + 3));
    } else {
      returnedArr.push(projects.slice(i + 1, i + 3));
      returnedArr.push([projects[i]]);
    }
  }
  return returnedArr.filter(filterEmpties);
}

export const errorCatch = (error: any): string => {
  if (error.response && error.response.data) {
    if (typeof error.response.data.message === 'object') {
      return error.response.data.message[0];
    }
    return error.response.data.message;
  }
  return error.message;
};
