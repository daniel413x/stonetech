import { makeAutoObservable } from 'mobx';
import {
  ProjectInGallery,
} from '../types/types';
import { filterEmpties } from '../utils/functions';

export default class ProjectsStore {
  projects: ProjectInGallery[];

  pageLimit: number;

  page: number;

  pageLimitReached: boolean;

  constructor() {
    this.projects = [];
    this.pageLimit = 1;
    this.pageLimitReached = false;
    this.page = 1;
    makeAutoObservable(this);
  }

  setProjects(arr: ProjectInGallery[]) {
    this.projects = arr;
  }

  unset() {
    this.projects = [];
    this.pageLimit = 1;
    this.page = 1;
  }

  get all() {
    return this.projects;
  }

  get layoutOne(): ProjectInGallery[][] {
    const returnedArr = [];
    const { projects } = this;
    for (let i = 0; i < projects.length; i += 3) {
      returnedArr.push(projects.slice(i, i + 2));
      returnedArr.push([projects[i + 2]]);
    }
    return returnedArr.filter(filterEmpties);
  }

  get layoutTwo(): ProjectInGallery[][] {
    const returnedArr = [];
    const { projects } = this;
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

  setPage(num: number) {
    if (num === this.pageLimit) {
      this.pageLimitReached = true;
    }
    this.page = num;
  }

  setPageLimit(num: number) {
    this.pageLimit = num;
  }
}
