import { v4 as uuid, validate } from 'uuid';
import { BodyInEditor, ProjectInGallery } from '../types/types';
import placeholderNewImageJpg from '../assets/images/new-image.jpg';

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

export const selectEnd = (domObjById: any): void => {
  const selection = document.getSelection();
  const range = document.createRange();
  if (domObjById.lastChild?.nodeType === 3) {
    range.setStart(domObjById?.lastChild, domObjById.lastChild.nodeValue!.length);
  } else {
    range.setStart(domObjById, domObjById.childNodes.length);
  }
  selection?.removeAllRanges();
  selection?.addRange(range);
};

const fileExtensionRegex = (/(?<=\.)([a-zA-Z]+)(?:[.]{1}[a-zA-Z]+)*$/);

export function getExtension(string: string = ''): string {
  const extension = string.match(fileExtensionRegex);
  return extension ? extension[0] : '';
}

export function createUuidFilename() {
  return `${uuid()}.jpg`;
}

export function replaceIndex(arr: any[], i: number, obj: any) {
  const newArr = [...arr];
  newArr[i] = obj;
  return newArr;
}

export function removeIndex(arr: any[], i: number) {
  const newArr = arr.slice(0, i).concat(arr.slice(i + 1));
  return newArr;
}

export function isValidImageFilename(string: string) {
  const nameAndExtension = string.split('.');
  const isNameAndExtension = nameAndExtension.length === 2;
  if (!isNameAndExtension) {
    return false;
  }
  const name = nameAndExtension[0];
  return validate(name);
}

export function isValidImageType(file: File) {
  const validTypes = ['image/jpeg', 'image/png'];
  return validTypes.indexOf(file.type) >= 0;
}

export function setExtension(checkedFilename: string, file?: File) {
  if (!file) {
    return checkedFilename;
  }
  const extension = getExtension(file.name);
  const returnedFilename = checkedFilename.split('.');
  returnedFilename[1] = extension;
  return returnedFilename.join('.');
}

export function getFilename(registerName: string, file?: File) {
  const filename = isValidImageFilename(registerName) ? registerName : createUuidFilename();
  return setExtension(filename, file);
}

export function mapBodyToEditorBody(body: string[]) {
  return body.map((str) => {
    if (isValidImageFilename(str)) {
      return {
        url: `${process.env.REACT_APP_API_URL}${str}`,
        filename: str,
      };
    }
    return str;
  });
}

export function handleFormDataImages(arr: BodyInEditor, targetForm: FormData, rowFieldName: string) {
  const updatedField: string[] = []; // updatedField: the body/images arrays (that are transformed after being fetched for the editor's purposes) must be converted back to arrays of strings
  arr.forEach((i) => {
    if (typeof i === 'object') {
      if (i.file) targetForm.append(i.filename, i.file!, i.filename);
      // note you can't append to a single field "files" and count on express to handle it elegantly like you can in spring
      updatedField.push(i.filename);
    } else {
      updatedField.push(i);
    }
  });
  targetForm.append(rowFieldName, JSON.stringify(updatedField));
}

export function placeholderFormFile() {
  return {
    url: placeholderNewImageJpg,
    filename: createUuidFilename(),
  };
}
