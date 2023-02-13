import bcrypt from 'bcrypt';
import {
  ADMIN,
  davidKowalski,
  EMPLOYEE,
} from '../utils/consts';

const hashPassword = async () => {
  const returned = await bcrypt.hash('password', 5);
  return returned;
};

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
