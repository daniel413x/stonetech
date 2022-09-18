import Router from 'express';
import ProjectController from '../controllers/ProjectController';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware';
import { EMPLOYEE } from '../utils/consts';

const router = Router();

router.get(
  '/',
  (req, res) => ProjectController.get(req, res),
);
router.get(
  '/:fullTitle',
  (req, res, next) => ProjectController.getByTitle(req, res, next),
);
router.post(
  '/',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => ProjectController.create(req, res),
);
router.put(
  '/',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => ProjectController.edit(req, res),
);
router.delete(
  '/:id',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => ProjectController.delete(req, res),
);

export default router;
