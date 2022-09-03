import bcrypt from 'bcrypt';
import {
  ADMIN,
  EMPLOYEE,
} from '../utils/consts';

const hashPassword = async () => {
  const returned = await bcrypt.hash('password', 5);
  return returned;
};

export const davidKowalski = '623c8b16-2f34-4ee4-bd7c-8e6f6f601b07';
export const alanBlack = '51289552-2164-4354-b95d-7eaf684517d4';

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Employee', [
    {
      email: 'davidkowalski@stonetech.com',
      password: await hashPassword(),
      avatar: 'test-employee-davidkowalksi.jpg',
      name: 'David Kowalski',
      bio: 'Harvard University graduate, PhD candidate, professional architect. Over 120 projects’ worth of experience.',
      id: davidKowalski,
      roles: [EMPLOYEE, ADMIN],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Employee', null, {}),
};
