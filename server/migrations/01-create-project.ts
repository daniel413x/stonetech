import { UUIDV4 } from 'sequelize';

export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Project', {
    galleryTitle: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    fullTitle: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    client: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    location: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    thumbnail: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.STRING(1000)),
    },
    images: {
      allowNull: false,
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    info: {
      allowNull: false,
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
