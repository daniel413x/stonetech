import { UUIDV4 } from 'sequelize';

export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('BlogPost', {
    title: {
      type: Sequelize.STRING,
    },
    thumbnail: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.ARRAY(Sequelize.STRING(1000)),
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
  down: (queryInterface) => queryInterface.dropTable('BlogPost'),
};
