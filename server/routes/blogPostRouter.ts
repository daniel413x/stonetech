import Router from 'express';
import BlogPostController from '../controllers/BlogPostController';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware';
import { EMPLOYEE } from '../utils/consts';

const router = Router();

router.get(
  '/',
  (req, res) => BlogPostController.get(req, res),
);
router.get(
  '/:slug',
  (req, res) => BlogPostController.getBySlug(req, res),
);
router.post(
  '/',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => BlogPostController.create(req, res),
);
router.put(
  '/:id',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => BlogPostController.edit(req, res),
);
router.delete(
  '/:id',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => BlogPostController.delete(req, res),
);

export default router;
