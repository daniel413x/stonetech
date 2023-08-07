import React from 'react';
import EmployeeEditorLayout from '../../../../components/layouts/EmployeeEditorLayout';
import ProjectEditor from '../../../../components/ui/employee/projects/ProjectEditor';

function CreateProjectPage() {
  return (
    <EmployeeEditorLayout>
      <ProjectEditor />
    </EmployeeEditorLayout>
  );
}

export default CreateProjectPage;
