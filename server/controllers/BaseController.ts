import { NextFunction, Request, Response } from 'express';
import {
  Model,
  ModelStatic,
  col,
  FindAndCountOptions,
  Attributes,
  FindOptions,
  DestroyOptions,
  FindAttributeOptions,
  Op,
} from 'sequelize';
import ApiError from '../error/ApiError';
import { saveImages } from '../utils/functions';

export default abstract class BaseController<M extends Model> {
  model: ModelStatic<Model>;

  constructor(model: ModelStatic<Model>) {
    this.model = model;
  }

  async execFindOneByParams(req: Request, res: Response, next?: NextFunction, options?: FindOptions<Attributes<M>>) {
    const fetchedParamKey = Object.keys(req.params)[0]; // the router :param must match the attribute key in the db column
    const fetchedParamVal = req.params[fetchedParamKey];
    if (!fetchedParamVal) {
      return next(ApiError.internal('Erroneous'));
    }
    const fetchedParamValRegex = fetchedParamVal.split('-').join('( |-)');
    const params: FindOptions<Attributes<M>> = {
      ...options,
    };
    params.where = {
      ...params.where,
      [fetchedParamKey]: { [Op.iRegexp]: fetchedParamValRegex },
    };
    if (req.query.attributes) {
      params.attributes = req.query.attributes as FindAttributeOptions;
    }
    const data = await this.model.findOne(params);
    return res.json(data);
  }

  async execFindAndCountAll(req: Request, res: Response, options?: Omit<FindAndCountOptions<Attributes<M>>, 'group'>) {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 22;
    const offset = page * limit - limit;
    const byNewest = req.query.byNewest as string;
    const order: any[] = [];
    const attributes = req.query.attributes as (string | [string, string])[];
    for (let a = 0; a < attributes?.length; a += 1) {
      if (/^\[/.test(attributes[a] as string)) {
        attributes[a] = JSON.parse(attributes[a] as string);
      }
    }
    const params: Omit<FindAndCountOptions<Attributes<M>>, 'group'> = {
      where: {},
      ...options,
      limit,
      offset,
      order,
      attributes,
    };
    if (byNewest) {
      params.order = [[col('createdAt'), 'DESC']];
    }
    const data = await this.model.findAndCountAll(params);
    return res.json(data);
  }

  async execCreate(req: Request, res: Response, options?: Omit<FindAndCountOptions<Attributes<M>>, 'group'>) {
    const form = req.body;
    if (req.files) {
      await saveImages(req);
    }
    let data = await this.model.create(form);
    if (options) {
      data = await this.model.findByPk(data.getDataValue('id'), options);
    }
    return res.json(data);
  }

  async execUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const form = req.body;
    if (req.files) {
      saveImages(req);
    }
    await this.model.update(form, { where: { id } });
    return res.status(204).end();
  }

  async execDestroy(req: Request, res: Response, options?: DestroyOptions<Attributes<M>>) {
    if (options) {
      this.model.destroy({ ...options });
    } else {
      const { id } = req.params;
      this.model.destroy({ where: { id } });
    }
    return res.status(204).end();
  }
}
