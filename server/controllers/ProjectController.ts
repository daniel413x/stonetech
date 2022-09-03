import { Request, Response } from 'express';
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

  create(req: Request, res: Response) {
    /*
    req.body.images = JSON.parse(req.body.images);
    req.body.body = JSON.parse(req.body.body);
    req.body.info = JSON.parse(req.body.info);
    */
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
