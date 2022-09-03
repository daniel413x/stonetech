import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  CreationOptional,
} from 'sequelize';

class BaseModel<M extends Model> extends Model<InferAttributes<M>, InferCreationAttributes<M>> {
  id!: CreationOptional<string>;

  createdAt?: CreationOptional<Date>;

  updatedAt?: CreationOptional<Date>;
}

export default BaseModel;
