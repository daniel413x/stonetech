import React from 'react';
import AppRouter from './AppRouter';
import { employeeRoutes } from '../../paths/paths';

function EmployeesRouter() {
  return (
    <div id="employees">
      <AppRouter
        authedRoutes={employeeRoutes}
      />
    </div>
  );
}

export default EmployeesRouter;
