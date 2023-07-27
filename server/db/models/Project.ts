import {
  DataTypes,
  UUIDV4,
} from 'sequelize';
import { IProject } from '../../types/types';
import sequelize from '../connection';
import BaseModel from './BaseModel';

// eslint-disable-next-line no-use-before-define
class Project extends BaseModel<Project> implements IProject {
  thumbnail!: string;

  images!: string[];

  galleryTitle!: string;

  fullTitle!: string;

  client!: string;

  body!: string[];

  slug!: string;

  info!: [string, string][];

  EmployeeId!: string;

  location!: string;

  static associate(models: any) {
    Project.belongsTo(models.Employee, { targetKey: 'id', foreignKey: 'EmployeeId', as: 'employee' });
  }
}

Project.init(
  {
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    client: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    galleryTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.ARRAY(DataTypes.STRING(1000)),
    },
    info: {
      type: DataTypes.ARRAY(DataTypes.ARRAY(DataTypes.STRING)),
    },
    EmployeeId: {
      type: DataTypes.UUID,
      references: {
        model: 'Employee',
        key: 'id',
      },
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    sequelize,
    modelName: 'Project',
    freezeTableName: true,
  },
);

export default Project;
