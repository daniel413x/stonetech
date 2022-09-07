import { createContext } from 'react';
import EmployeeStore from '../store/EmployeeStore';

interface ContextProps {
  user: EmployeeStore;
}

const Context = createContext<ContextProps>({
  user: new EmployeeStore(),
});

export default Context;
