import { Request, Response } from 'express';
import BlogPost from '../db/models/BlogPost';
// import ApiError from '../error/ApiError';
import BaseController from './BaseController';
import { parseBody } from '../utils/functions';

class BlogPostController extends BaseController<BlogPost> {
  constructor() {
    super(BlogPost);
  }

  get(req: Request, res: Response) {
    this.execFindAndCountAll(req, res);
  }

  getBySlug(req: Request, res: Response) {
    this.execFindOneByParams(req, res);
  }

  create(req: Request, res: Response) {
    req.body.body = parseBody(req);
    this.execCreate(req, res);
  }

  edit(req: Request, res: Response) {
    req.body.body = parseBody(req);
    this.execUpdate(req, res);
  }

  delete(req: Request, res: Response) {
    this.execDestroy(req, res);
  }
}

export default new BlogPostController();
