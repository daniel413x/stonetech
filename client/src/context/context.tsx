import { createContext } from 'react';
import EmployeeStore from '../store/EmployeeStore';
import ProjectsStore from '../store/ProjectsStore';

interface ContextProps {
  employee: EmployeeStore;
  projects: ProjectsStore;
}

const Context = createContext<ContextProps>({
  employee: new EmployeeStore(),
  projects: new ProjectsStore(),
});

export default Context;
