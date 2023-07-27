import { makeAutoObservable } from 'mobx';
import {
  IProject,
} from '../types/types';

export default class ProjectsStore {
  cachedProjects: { [page: number]: IProject[] };

  itemsInDb: number;

  pageLimitReached: boolean;

  constructor() {
    this.cachedProjects = {};
    this.pageLimitReached = false;
    this.itemsInDb = 1;
    makeAutoObservable(this);
  }

  cacheProjects(arr: IProject[], page: number) {
    this.cachedProjects[page] = arr;
  }

  unset() {
    this.cachedProjects = [];
  }

  setItemsInDb(number: number) {
    this.itemsInDb = number;
  }

  get all() {
    return this.cachedProjects;
  }
}
