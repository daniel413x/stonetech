import Router from 'express';
import EmployeeController from '../controllers/EmployeeController';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware';
import authMiddleware from '../middleware/authMiddleware';
import { ADMIN, EMPLOYEE } from '../utils/consts';

const router = Router();

router.get(
  '/auth',
  authMiddleware,
  (req, res) => EmployeeController.auth(req, res),
);
router.get(
  '/',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => EmployeeController.get(req, res),
);
router.post(
  '/',
  checkRoleMiddleware(ADMIN),
  (req, res, next) => EmployeeController.create(req, res, next),
);
router.post(
  '/login',
  (req, res, next) => EmployeeController.login(req, res, next),
);
router.put(
  '/',
  checkRoleMiddleware(EMPLOYEE),
  (req, res) => EmployeeController.edit(req, res),
);
router.delete(
  '/:id',
  checkRoleMiddleware(ADMIN),
  (req, res) => EmployeeController.delete(req, res),
);

export default router;
