import React from 'react';
import EmployeeIndexLayout from '../../../layouts/EmployeeIndexLayout';
import ProjectsList from '../../../ui/employee/projects/ProjectsList';

function EmployeeProjectIndexScreen() {
  return (
    <EmployeeIndexLayout>
      <ProjectsList />
    </EmployeeIndexLayout>
  );
}

export default EmployeeProjectIndexScreen;
