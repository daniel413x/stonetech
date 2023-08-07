import jwt_decode from 'jwt-decode';
import {
  IEmployee, QueryResFetchMultiple,
} from '../types/types';
import { $authHost, $host } from './index';

export const fetchEmployees = async (): Promise<QueryResFetchMultiple<IEmployee>> => {
  const { data } = await $authHost.get('api/employee');
  return data;
};

export const login = async (email: string, password: string): Promise<IEmployee> => {
  const { data } = await $host.post('api/employee/login', { email, password });
  localStorage.setItem('registeredToken', data.token);
  return jwt_decode(data.token);
};

export const autoAuth = async (): Promise<IEmployee> => {
  const { data } = await $authHost.get('api/employee/auth');
  localStorage.setItem('registeredToken', data.token);
  return jwt_decode(data.token);
};
