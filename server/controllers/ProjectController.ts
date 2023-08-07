import { NextFunction, Request, Response } from 'express';
import Employee from '../db/models/Employee';
import Project from '../db/models/Project';
import BaseController from './BaseController';
import { parseBody } from '../utils/functions';

class ProjectController extends BaseController<Project> {
  constructor() {
    super(Project);
  }

  get(req: Request, res: Response) {
    this.execFindAndCountAll(req, res);
  }

  getBySlug(req: Request, res: Response, next: NextFunction) {
    const options = {
      include: [{
        model: Employee,
        as: 'employee',
      }],
    };
    return this.execFindOneByParams(req, res, next, options);
  }

  parseCreationValues(req: Request) {
    req.body.body = parseBody(req);
    req.body.images = JSON.parse(req.body.images);
    req.body.info = JSON.parse(req.body.info);
    return req;
  }

  create(req: Request, res: Response) {
    const parsedReq = this.parseCreationValues(req);
    this.execCreate(parsedReq, res);
  }

  edit(req: Request, res: Response) {
    const parsedReq = this.parseCreationValues(req);
    this.execUpdate(parsedReq, res);
  }

  delete(req: Request, res: Response) {
    this.execDestroy(req, res);
  }
}

export default new ProjectController();
