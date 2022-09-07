import jwt_decode from 'jwt-decode';
import {
  IEmployee,
} from '../types/types';
import { $authHost, $host } from './index';

export const login = async (email: string, password: string): Promise<IEmployee> => {
  const { data } = await $host.post('api/user/login', { email, password });
  localStorage.setItem('registeredToken', data.token);
  return jwt_decode(data.token);
};

export const autoAuth = async (): Promise<IEmployee> => {
  const { data } = await $authHost.get('api/user/auth');
  localStorage.setItem('registeredToken', data.token);
  return jwt_decode(data.token);
};
