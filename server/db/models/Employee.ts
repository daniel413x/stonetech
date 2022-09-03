import {
  DataTypes,
  UUIDV4,
  CreationOptional,
} from 'sequelize';
import { IEmployee } from '../../types/types';
import { EMPLOYEE } from '../../utils/consts';
import sequelize from '../connection';
import BaseModel from './BaseModel';

// eslint-disable-next-line no-use-before-define
class Employee extends BaseModel<Employee> implements IEmployee {
  roles!: string[];

  name?: CreationOptional<string>;

  email!: string;

  password!: string;

  avatar?: CreationOptional<string>;

  bio?: CreationOptional<string>;

  static associate(models: any) {
    Employee.hasMany(models.Project, {
      sourceKey: 'id',
      foreignKey: 'EmployeeId',
      as: 'projects',
    });
  }
}

Employee.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  roles: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [EMPLOYEE],
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  bio: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /(?=^\S{6,256}$)^.+$/i,
    },
  },
  avatar: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
}, {
  sequelize,
  modelName: 'Employee',
  freezeTableName: true,
});

export default Employee;
