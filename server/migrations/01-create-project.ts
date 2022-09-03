import { UUIDV4 } from 'sequelize';

export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Project', {
    title: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.ARRAY(Sequelize.STRING(1000)),
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    info: {
      type: Sequelize.ARRAY(Sequelize.ARRAY(Sequelize.STRING)),
    },
    EmployeeId: {
      type: Sequelize.UUID,
      references: {
        model: 'Employee',
        key: 'id',
      },
    },
    id: {
      type: Sequelize.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date(),
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Project'),
};
