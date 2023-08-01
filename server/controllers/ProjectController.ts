import { NextFunction, Request, Response } from 'express';
import Employee from '../db/models/Employee';
import Project from '../db/models/Project';
// import ApiError from '../error/ApiError';
import BaseController from './BaseController';

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

  create(req: Request, res: Response) {
    this.execCreate(req, res);
  }

  edit(req: Request, res: Response) {
    this.execUpdate(req, res);
  }

  delete(req: Request, res: Response) {
    this.execDestroy(req, res);
  }
}

export default new ProjectController();
