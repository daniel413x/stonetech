import bcrypt from 'bcrypt';
import { ADMIN, EMPLOYEE } from '../utils/consts';

const hashPassword = async () => {
  const returned = await bcrypt.hash('admintemppassword', 5);
  return returned;
};

export const admin = '5aeb98a6-e564-420c-b748-4c4900d594bb';

export default {
  up: async (queryInterface) => queryInterface.bulkInsert('Employee', [
    {
      email: 'admin@stonetech.com',
      password: await hashPassword(),
      avatar: 'admin.jpg',
      bio: '',
      id: admin,
      roles: [EMPLOYEE, ADMIN],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  down: (queryInterface) => queryInterface.bulkDelete('Employee', null, {}),
};
