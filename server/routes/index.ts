import Router from 'express';
import employeeRouter from './employeeRouter';
import blogPostRouter from './blogPostRouter';
import projectRouter from './projectRouter';
import testingRouter from './testingRouter';

const router = Router();

router.use('/employee', employeeRouter);
router.use('/blog', blogPostRouter);
router.use('/project', projectRouter);
router.use('/testing', testingRouter);

export default router;
