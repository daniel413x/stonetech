import {
  DataTypes,
  UUIDV4,
} from 'sequelize';
import { IBlogPost } from '../../types/types';
import sequelize from '../connection';
import BaseModel from './BaseModel';

// eslint-disable-next-line no-use-before-define
class BlogPost extends BaseModel<BlogPost> implements IBlogPost {
  thumbnail!: string;

  title!: string;

  slug!: string;

  snippet!: string;

  body!: string[];
}

BlogPost.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    snippet: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    body: {
      type: DataTypes.ARRAY(DataTypes.STRING(1000)),
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
    modelName: 'BlogPost',
    freezeTableName: true,
  },
);

export default BlogPost;
