import EmployeeStore from './EmployeeStore';
import ProjectsStore from './ProjectsStore';
import BlogStore from './BlogStore';

const store = {
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
  blog: new BlogStore(),
};

export default store;
