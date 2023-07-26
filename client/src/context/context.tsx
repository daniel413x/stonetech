import { createContext } from 'react';
import EmployeeStore from '../store/EmployeeStore';
import ProjectsStore from '../store/ProjectsStore';
import BlogStore from '../store/BlogStore';
import ModalStore from '../store/ModalsStore';

interface ContextProps {
  employee: EmployeeStore;
  projects: ProjectsStore;
  blog: BlogStore;
  modal: ModalStore;
}

const Context = createContext<ContextProps>({
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
  blog: new BlogStore(),
  modal: new ModalStore(),
});

export default Context;
