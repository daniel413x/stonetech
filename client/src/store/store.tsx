import EmployeeStore from './EmployeeStore';
import ProjectsStore from './ProjectsStore';
import BlogStore from './BlogStore';
import ModalStore from './ModalsStore';

const store = {
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
  blog: new BlogStore(),
  modal: new ModalStore(),
};

export default store;
