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
