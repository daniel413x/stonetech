import EmployeeStore from './EmployeeStore';
import ProjectsStore from './ProjectsStore';

const store = {
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
};

export default store;
