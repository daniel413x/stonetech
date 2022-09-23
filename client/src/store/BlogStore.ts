import { makeAutoObservable } from 'mobx';
import {
  BlogCard,
} from '../types/types';

export default class BlogStore {
  blogCards: BlogCard[];

  cachedBlogPageCards: { [page: number]: BlogCard[] };

  cachedFrontPageCards: BlogCard[];

  itemsInDb: number;

  constructor() {
    this.blogCards = [];
    this.cachedBlogPageCards = {};
    this.cachedFrontPageCards = [];
    this.itemsInDb = 1;
    makeAutoObservable(this);
  }

  setBlogCards(fetchedData: { // for /blog
    rows: BlogCard[];
    count: number;
  }) {
    this.blogCards = fetchedData.rows;
  }

  setItemsInDb(num: number) {
    this.itemsInDb = num;
  }

  cacheBlogPageCards(arr: BlogCard[], page: number) {
    this.cachedBlogPageCards[page] = arr;
  }

  cacheFrontPageCards(arr: BlogCard[]) {
    this.cachedFrontPageCards = arr;
  }
}
