import { createContext } from 'react';
import EmployeeStore from '../store/EmployeeStore';
import ProjectsStore from '../store/ProjectsStore';
import BlogStore from '../store/BlogStore';

interface ContextProps {
  employee: EmployeeStore;
  projects: ProjectsStore;
  blog: BlogStore;
}

const Context = createContext<ContextProps>({
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
  blog: new BlogStore(),
});

export default Context;
