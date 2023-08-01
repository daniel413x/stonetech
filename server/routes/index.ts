import Router from 'express';
import employeeRouter from './employeeRouter';
import blogPostRouter from './blogPostRouter';
import projectRouter from './projectRouter';
import testingRouter from './testingRouter';
import utilRouter from './utilRouter';

const router = Router();

router.use('/employee', employeeRouter);
router.use('/blog', blogPostRouter);
router.use('/blogpost', blogPostRouter);
router.use('/project', projectRouter);
router.use('/testing', testingRouter);
router.use('/util', utilRouter);

export default router;
