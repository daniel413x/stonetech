import { makeAutoObservable } from 'mobx';
import {
  IEmployee,
} from '../types/types';
import { ADMIN, GUEST, EMPLOYEE } from '../utils/consts';

export default class EmployeeStore implements IEmployee {
  roles: string[];

  id: string;

  avatar?: string;

  name?: string;

  email: string;

  constructor() {
    this.roles = ['GUEST'];
    this.id = 'GUEST';
    this.name = 'Guest';
    this.avatar = '';
    this.email = '';
    makeAutoObservable(this);
  }

  set(obj: IEmployee) {
    const {
      roles,
      id,
      name,
      avatar,
      email,
    } = obj;
    this.roles = roles;
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.email = email;
  }

  unset() {
    this.roles = [GUEST];
    this.id = localStorage.getItem('guestId')!;
    this.name = 'Guest';
    this.avatar = '';
    this.email = '';
  }

  get isGuest() {
    return this.roles.indexOf(GUEST) >= 0;
  }

  get isRegistered() {
    return this.roles.indexOf(EMPLOYEE) >= 0;
  }

  get isAdmin() {
    return this.roles.indexOf(ADMIN) >= 0;
  }

  setId(str: string) {
    this.id = str;
  }

  setAvatar(str: string) {
    this.avatar = str;
  }

  setEmail(str: string) {
    this.email = str;
  }
}
