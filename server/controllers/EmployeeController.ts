import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import ApiError from '../error/ApiError';
import { IEmployee } from '../types/types';
import { EMPLOYEE } from '../utils/consts';
import Employee from '../db/models/Employee';
import BaseController from './BaseController';
import { saveImages } from '../utils/functions';

const generateJwt = ({
  id,
  email,
  roles,
  avatar,
  name,
}: any, expiresIn?: string) => jwt.sign(
  {
    id,
    email,
    roles,
    avatar,
    name,
  },
  process.env.S_KEY!,
  {
    expiresIn,
  },
);

class EmployeeController extends BaseController<Employee> {
  constructor() {
    super(Employee);
  }

  async get(req: Request, res: Response) {
    return this.execFindAndCountAll(req, res);
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const {
      email,
      password,
    } = req.body;
    const incompleteForm = !email || !password;
    if (incompleteForm) {
      return next(ApiError.badRequest('Incomplete form'));
    }
    const formattedEmail = ['', ''];
    email.split('@').forEach((p: string, i: number) => {
      formattedEmail[i] = p;
    });
    const [local, domain] = formattedEmail;
    const expectedLength = formattedEmail.length === 2;
    const validEmail = expectedLength && local && domain;
    if (!validEmail) {
      return next(ApiError.badRequest('Invalid email format'));
    }
    const validPassword = /(?=^\S{6,256}$)^.+$/i.test(password);
    if (!validPassword) {
      return next(ApiError.badRequest('Invalid password'));
    }
    const emailTaken = await Employee.findOne({ where: { email } });
    if (emailTaken) {
      return next(ApiError.conflict('Account with that email already exists'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const employee = await Employee.create({
      id: uuidv4(),
      email,
      password: hashPassword,
      roles: [EMPLOYEE],
    });
    const token = generateJwt(employee, '24h');
    return res.json({ token });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const {
      email,
      password: reqPassword,
    } = req.body;
    const employee: IEmployee | null = await Employee.findOne({
      where: {
        email,
      },
    });
    if (!employee) {
      return next(ApiError.unauthorized('Invalid credentials'));
    }
    const employeePassword = employee.password;
    const comparePassword = bcrypt.compareSync(
      reqPassword,
      employeePassword,
    );
    if (!comparePassword) {
      return next(ApiError.unauthorized('Incorrect password'));
    }
    const token = generateJwt(employee, '24h');
    return res.json({ token });
  }

  async auth(req: Request, res: Response) {
    const { employee } = res.locals;
    const token = generateJwt(employee, '24h');
    return res.json({ token });
  }

  async edit(req: Request, res: Response) {
    let updatedVals;
    if (req.files) {
      updatedVals = saveImages(req);
    } else {
      updatedVals = req.body;
    }
    if ('password' in updatedVals) {
      const hashPassword = await bcrypt.hash(updatedVals.password, 5);
      updatedVals.password = hashPassword;
    }
    const { id } = res.locals.employee;
    const updatedObj = await Employee.update(updatedVals, { where: { id }, returning: true });
    const token = generateJwt(updatedObj[1][0], '24h');
    return res.json({ token });
  }

  async delete(req: Request, res: Response) {
    this.execDestroy(req, res);
  }
}

export default new EmployeeController();
