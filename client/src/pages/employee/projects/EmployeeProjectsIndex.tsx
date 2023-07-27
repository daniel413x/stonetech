import React from 'react';
import EmployeeIndexLayout from '../../../components/layouts/EmployeeIndexLayout';
import ProjectsList from '../../../components/ui/employee/projects/ProjectsList';

function EmployeeProjectsIndex() {
  return (
    <EmployeeIndexLayout>
      <ProjectsList />
    </EmployeeIndexLayout>
  );
}

export default EmployeeProjectsIndex;
