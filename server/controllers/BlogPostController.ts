import { Request, Response } from 'express';
import BlogPost from '../db/models/BlogPost';
// import ApiError from '../error/ApiError';
import BaseController from './BaseController';

class BlogPostController extends BaseController<BlogPost> {
  constructor() {
    super(BlogPost);
  }

  get(req: Request, res: Response) {
    this.execFindAndCountAll(req, res);
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

export default new BlogPostController();
